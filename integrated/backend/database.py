# backend/database.py

import psycopg2
from psycopg2.extras import RealDictCursor

def get_connection():
    # Define connection details
    connection = psycopg2.connect(
        host="localhost",        # Database host
        port="5432",             # Database port
        database="mydatabase",  # Database name
        user="postgres",         # Database username
        password="Vamsi@123"          # Database password
    )
    return connection

def fetch_social_media_data():
    # Fetch data from the social_media table
    connection = get_connection()
    cursor = connection.cursor(cursor_factory=RealDictCursor)
    cursor.execute("SELECT * FROM mytable1;")
    data = cursor.fetchall()
    cursor.close()
    connection.close()
    return data
