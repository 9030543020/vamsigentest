import psycopg2
from psycopg2 import sql

# Database connection parameters
database = 'mydatabase'
owner = 'postgres'
host = 'localhost'
port = 5432
username = 'postgres'
password = 'Vamsi@123'  # Replace with the actual password

# Initialize connection and cursor variables
connection = None
cursor = None

try:
    # Connect to PostgreSQL
    connection = psycopg2.connect(
        dbname=database,
        user=username,
        password=password,
        host=host,
        port=port
    )
    print("Connection successful!")

    # Create a cursor object
    cursor = connection.cursor()

    # Example query to check the connection
    cursor.execute("SELECT version();")
    db_version = cursor.fetchone()
    print(f"Database version: {db_version[0]}")

except Exception as error:
    print(f"Error connecting to the database: {error}")

finally:
    # Closing the cursor and connection if they were created
    if cursor:
        cursor.close()
        print("Cursor closed.")
    if connection:
        connection.close()
        print("Connection closed.")
