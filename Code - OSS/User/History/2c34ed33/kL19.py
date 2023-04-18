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
    
def parse_reviews(lines):
    reviews = []
    for line in lines:
        if line.startswith("  reviews:"):
            total = int(line.split()[1])
            downloaded = int(line.split()[3])
            avg_rating = float(line.split()[5])
        elif line.startswith("    "):
            date = line.split()[0]
            customer = line.split()[2]
            rating = int(line.split()[4])
            votes = int(line.split()[6])
            helpful = int(line.split()[8])
            reviews.append(review(date, customer, rating, votes, helpful))
    return total, downloaded, avg_rating, reviews

with open("amazon-meta.txt", "r", encoding="ISO-8859-1") as f:
    lines = f.readlines()
    for i, line in enumerate(lines):
        if line.startswith("ASIN:"):
            asin = line.split()[1]
        elif line.startswith("  title:"):
            title = line[9:].strip()
        elif line.startswith("  group:"):
            group = line.split()[1]
        elif line.startswith("  salesrank:"):
            salesrank = int(line.split()[1])
        elif line.startswith("  similar:"):
            similar = [s.strip() for s in line.split()[1:]]
        elif line.startswith("  categories:"):
            categories = []
            for j in range(i+1, len(lines)):
                if lines[j].startswith("  |"):
                    category_line = lines[j].strip().split("|")
                    id = category_line[1].split("[")[1].split("]")[0]
                    name = category_line[2].split("[")[1].split("]")[0]
                    parent_id = category_line[3].split("[")[1].split("]")[0]
                    categories.append(category(id, name, parent_id))
                else:
                    break
        elif line.startswith("  reviews:"):
            total, downloaded, avg_rating, reviews = parse_reviews(lines[i:])
            print("ASIN:", asin)
            print("title:", title)
            print("group:", group)
            print("salesrank:", salesrank)
            print("similar:", similar)
            print("categories:")
            for category in categories:
                category.print_category()
            print("reviews:")
            print("total:", total)
            print("downloaded:", downloaded)
            print("avg rating:", avg_rating)
            for review in reviews:
                review.print_review()
            break