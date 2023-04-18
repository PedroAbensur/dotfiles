import psycopg2
#import os

#os.system("docker-compose up")

#fazendo a conexao

conn = None
try:
    conn = psycopg2.connect(host="postgres",
                            database="tp1db",
                            user="postgres",
                            password="1498")
    cur = conn.cursor()
except (Exception, psycopg2.DatabaseError) as error:
    print(error)

#Criando o esquema do banco de dados
comandos = (
        """ CREATE TABLE IF NOT EXISTS produtos(
                id BIGINT UNIQUE NOT NULL,
                asin VARCHAR (20) PRIMARY KEY,
                titulo VARCHAR (500),
                grupo VARCHAR (100),
                rank BIGINT
                )
        """,
        """ CREATE TABLE IF NOT EXISTS categorias(
                id INT PRIMARY KEY,
                nome VARCHAR (300),
                id_supercat INT,
                FOREIGN KEY (id_supercat)
                    REFERENCES categorias (id)
                )
        """,
        """ CREATE TABLE IF NOT EXISTS prodcat(
                asin_prod VARCHAR (20),
                id_cat INT,
                FOREIGN KEY (asin_prod)
                    REFERENCES produtos (asin),
                FOREIGN KEY (id_cat)
                    REFERENCES categorias (id),
                PRIMARY KEY (asin_prod, id_cat)
                )
        """,
        """
            CREATE TABLE IF NOT EXISTS reviews(
                id SERIAL PRIMARY KEY,
                id_cliente VARCHAR (20),
                asin_prod VARCHAR (20),
                data DATE,
                nota SMALLINT,
                votos_totais INT,
                votos_ajuda INT CHECK(votos_ajuda <= votos_totais),
                FOREIGN KEY (asin_prod)
                    REFERENCES produtos (asin)
                )
        """,
        """ CREATE TABLE IF NOT EXISTS similares(
                asin_prod VARCHAR (20),
                asin_sim VARCHAR (20),
                FOREIGN KEY (asin_prod)
                    REFERENCES produtos (asin),
                PRIMARY KEY (asin_prod, asin_sim)
                )
        """)

#executando as queries
for comando in comandos:
    cur.execute(comando)

#lendo o arquivo de entrada
f = open("amazon-meta.txt", "r")
f.readline() #pula "# Full information about Amazon Share the Love products"
n_prods = int (((f.readline()).split())[2]) #pega a quantidade de itens
f.readline() #pula linha vazia apos a quantidade de produtos

categorias = {}
prodcats = {}
for n in range(n_prods):

    print(f"Inserindo produto {n} ({(n+1)*100//n_prods}%)")

    line = f.readline() #linha do id
    id = line.strip("Id: ").rstrip('\n') #recebe o id

    line = f.readline() #linha do asin
    asin = line.strip("ASIN: ").rstrip('\n') #recebe o asin

    line = f.readline() #linha do discontinued ou titulo
    titulo = line.split() 

    if titulo[0] != "discontinued":

        #formata o titulo
        titulo = line.strip("title: ").rstrip('\n').replace("'","''")

        line = f.readline() #linha do grupo
        grupo = line.strip("group: ").rstrip('\n') #recebe o grupo

        line = f.readline() #linha do rank
        rank = line.strip("salesrank: ").rstrip('\n') #recebe o rank

        try:

            insert_produto_query = "INSERT INTO produtos (id, asin, titulo, grupo, rank) " 
            insert_produto_query += f"VALUES ({id},'{asin}','{titulo}','{grupo}',{rank}) "
            #insert_produto_query += "ON CONFLICT (asin) DO NOTHING"
            cur.execute(insert_produto_query)
            conn.commit()

        except (Exception, psycopg2.DatabaseError) as error:
            conn.rollback()
            print(error)
            

        line = f.readline() #linha dos similares
        sim = line.strip("similar: ") #recebe o similar
        sim_list = sim.split() #cria a lista de asins de produtos similares
        n_sim = (int) (sim_list[0]) #pega a quantidade de similares

        for s in range(1,n_sim+1): #itera sobre a lista de similares
            asin_sim = sim_list[s].rstrip('\n')

            try:

                insert_similar_query = f"INSERT INTO similares (asin_prod, asin_sim) VALUES ('{asin}','{asin_sim}') "
                #insert_similar_query += "ON CONFLICT (asin_prod) DO NOTHING"
                cur.execute(insert_similar_query)
                conn.commit()

            except (Exception, psycopg2.DatabaseError) as error:
                conn.rollback()
                print(error)
    

        line = f.readline() #linha da quantidade de categorias
        n_cat = (int) (line.strip("categories: "))

        for c in range(n_cat): 
            cat_superid = "NULL" #seta a supercategoria da categoria raiz pra NULL

            line = f.readline() #linha das categorias
            cat_list = line.split("|")
                                            
            for cat_index in range(1,len(cat_list)):   

                cat_find_id = cat_list[cat_index][-12:]
                start = cat_find_id.find("[") + 1
                cat_id = ""

                for c in cat_find_id[start:]:

                    if(c.isdigit()):
                        cat_id = cat_id + c


                cat_nome = cat_list[cat_index].replace("["+cat_id+"]","")
                categoria = {
                                'id': cat_id,
                                'nome': cat_nome,
                                'id_supercat': cat_superid
                            }

                categorias["c"+cat_id] = categoria
                cat_superid = cat_id

                if(cat_index == len(cat_list) - 1):
                    prodcat =   {
                                    'asin_prod': asin,
                                    'id_cat': cat_id
                                }
                    prodcats[asin+"pc"+cat_id] = prodcat


        line = f.readline() #linha da quantidade de reviews
        rev = line.strip("reviews: total: ")
        rev_split = rev.split()
        print(rev_split[2])
        n_rev = (int) (rev_split[2])

        for r in range(n_rev):

            line = f.readline() #linha das reviews
            rev_list = line.split()

            data = rev_list[0]
            cliente = rev_list[2]
            nota = rev_list[4]
            votos_totais = rev_list[6]
            votos_ajuda = rev_list[8]

            try:
                insert_review_query = "INSERT INTO reviews (id, id_cliente, asin_prod, data, nota, votos_totais, votos_ajuda) " 
                insert_review_query +=f"VALUES (DEFAULT,'{cliente}','{asin}','{data}',{nota},{votos_totais},{votos_ajuda}) "
                #insert_review_query += "ON CONFLICT (id) DO NOTHING"
                cur.execute(insert_review_query)
                conn.commit()

            except (Exception, psycopg2.DatabaseError) as error:
                conn.rollback()
                print(error)


    else:

        try:

            insert_produto_query = "INSERT INTO produtos (id, asin, titulo, grupo, rank) " 
            insert_produto_query += f"VALUES ({id},'{asin}',NULL,NULL,NULL) "
            #insert_produto_query += "ON CONFLICT (asin) DO NOTHING"
            cur.execute(insert_produto_query)
            conn.commit()

        except (Exception, psycopg2.DatabaseError) as error:
            conn.rollback()
            print(error)


    f.readline() #pula pro proximo produto

contador = 0
for c in categorias:
    print(f"Categoria {contador+1} de {len(categorias)} ({(contador+1)*100/len(categorias)}%)")
    contador += 1
    try:

        c_nome = categorias[c]['nome'].rstrip('\n').replace("'","''")
        c_id = categorias[c]['id']
        c_sid = categorias[c]['id_supercat']
        insert_categoria_query = "INSERT INTO categorias (id, nome, id_supercat) " 
        insert_categoria_query += f"VALUES ({c_id},'{c_nome}',{c_sid}) "
        insert_categoria_query += "ON CONFLICT (id) DO NOTHING"
        cur.execute(insert_categoria_query)
        conn.commit()
    
    except (Exception, psycopg2.DatabaseError) as error:
        conn.rollback()
        print(error)

contador = 0
for pc in prodcats:
    print(f"Prodcat {contador+1} de {len(prodcats)} ({(contador+1)*100/len(prodcats)}%)")
    contador += 1
    try:

        pc_asin = prodcats[pc]['asin_prod']
        pc_cat = prodcats[pc]['id_cat']
        insert_prodcat_query = "INSERT INTO prodcat (asin_prod, id_cat) " 
        insert_prodcat_query += f"VALUES ('{pc_asin}',{pc_cat}) "
        #insert_prodcat_query += "ON CONFLICT (asin_prod,id_cat) DO NOTHING"
        cur.execute(insert_prodcat_query)
        conn.commit()

    except (Exception, psycopg2.DatabaseError) as error:
        conn.rollback()
        print(error)


cur.close()
conn.close()