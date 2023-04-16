import psycopg2

# Conexão Default Postgres Database
conn = psycopg2.connect(
    host="172.18.0.2",
    port=5432,
    database="postgres",
    user="postgres",
    password="postgres"
)

# Objeto de Cursor
cur = conn.cursor()
conn.autocommit = True

# Cria novo banco de dados
# cur.execute("CREATE DATABASE tp1db;")

# Finaliza conexão e fecha cursor
cur.close()
conn.close()

class product:
    def __init__(self, id, asin, title, group, salesrank):
        self.id = id
        self.asin = asin
        self.title = title
        self.group = group
        self.salesrank = salesrank

    def print_product(self):
        print("=====================================================")
        print(f"id: {self.id}")
        print(f"asin: {self.asin}")
        print(f"title: {self.title}")
        print(f"group: {self.group}")
        print(f"salesrank: {self.salesrank}")

class similar:
    def __init__(self, asin_product, asin_similar):
        self.asin_product = asin_product
        self.asin_similar = asin_similar

    def print_similar(self):
        print("=====================================================")
        print(f"asin_product: {self.asin_product}")
        print(f"asin_similar: {self.asin_similar}")
    
f = open("amazon-meta.txt", "+r")
f.readline() #skip comment
items = f.readline().split()[2]
f.readline() #skip blank line
for _ in range(int(items)):
    id = f.readline().split()[1]
    asin = f.readline().split()[1]
    line = f.readline().split()
    if(line[0] == 'discontinued'):
        prod = product(id, asin, 'NULL', 'NULL', 'NULL')
    else:
        title = ' '.join(line[1:]).replace("'","''")
        group = f.readline().split()[1]
        salesrank = f.readline().split()[1]
        prod = product(id, asin, title, group, salesrank)

        #reading similar
        line = f.readline().split()
        similar_list = line[2:]
        for i in range(int(line[1])):
            sim = similar(prod.asin, similar_list[i])
            sim.print_similar()
            print(prod.id)
            
        line = f.readline().split()[1]
        for _ in range(int(line)):
            f.readline()
        line = f.readline().split()[4]
        for _ in range(int(line)):
            f.readline()
    #prod.print_product()
    f.readline()

