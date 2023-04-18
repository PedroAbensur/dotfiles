import psycopg2

# Conexão Default Postgres Database
conn = psycopg2.connect(
    host="localhost",
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

class category:
    def __init__(self, id, name, parent_id):
        self.id = id
        self.name = name
        self.parent_id = parent_id

    def print_category(self):
        print("=====================================================")
        print(f"id: {self.id}")
        print(f"name: {self.name}")
        print(f"parent_id: {self.parent_id}")

class review:
    def __init__(self, asin_product, customer_id, review_date, rating, votes, helpful):
        self.asin_product = asin_product
        self.customer_id = customer_id
        self.review_date = review_date
        self.rating = rating
        self.votes = votes
        self.helpful = helpful
    
    def print_reviews(self):
        print("=====================================================")
        print(f"asin_product: {self.asin_product}")
        print(f"customer_id: {self.customer_id}")
        print(f"review_date: {self.rating}")
        print(f"votes: {self.votes}")
        print(f"helpful = {self.helpful}")
    
    
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
            #sim.print_similar()
        
        #reading categories
        line = f.readline().split()[1]
        cat_line_qtd = int(line)
        for _ in range(cat_line_qtd):
            line = f.readline().replace("\n","").split('|')
            parent_id = 'NULL'
            for cat_str in line[1:]:
                cat_parts = cat_str.split('[')
                cat = category(cat_parts[1][:-1], cat_parts[0], parent_id)
                parent_id = cat_parts[1][:-1]
                #cat.print_category()

        #reading reviews
        #line = f.readline() 
        #rev = line.strip("reviews: total: ")
        #rev_split = rev.split()

        #n_rev = (int) (rev_split[2])

        #for r in range(n_rev):

        line = f.readline().split()[4]
        print(line)
        for _ in range(int(line)):
            f.readline()

    #prod.print_product()
    f.readline()