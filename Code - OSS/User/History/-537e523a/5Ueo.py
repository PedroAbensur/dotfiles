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
cur.execute("CREATE DATABASE tp1db;")

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

class catprod:
    def __init__(self, asin_product, cat_id):
        self.asin_product = asin_product
        self.cat_id = cat_id
    
    def print_catprod(self):
        print("=====================================================")
        print(f"asin_product: {self.asin_product}")
        print(f"cat_id = {self.cat_id}")
