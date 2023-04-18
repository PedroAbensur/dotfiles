import psycopg2
import os

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

while (True):
    os.system('cls' if os.name == 'nt' else 'clear')
    print("DASHBOARD DE CONSULTAS")
    print("Obs: Algumas consultas podem demorar")
    print("")
    print("")
    print("CONSULTAS DISPONIVEIS:")
    print("")
    print("1 - Dado um produto, listar os 5 comentarios mais uteis e com maior avaliacao e os 5 comentarios mais uteis e com menor avaliacao")
    print("2 - Dado um produto, listar os produtos similares com maiores vendas do que ele")
    print("3 - Dado um produto, mostrar a evolução diária das médias de avaliação ao longo do intervalo de tempo coberto no arquivo de entrada")
    print("4 - Listar os 10 produtos líderes de venda em cada grupo de produtos")
    print("5 - Listar os 10 produtos com a maior média de avaliações úteis positivas por produto")
    print("6 - Listar a 5 categorias de produto com a maior média de avaliações úteis positivas por produto")
    print("7 - Listar os 10 clientes que mais fizeram comentários por grupo de produto")
    print("")
    print("8 - Finalizar")
    print("")
    print("")
    entrada = input("Insira uma opcao: ")
    os.system('cls' if os.name == 'nt' else 'clear')