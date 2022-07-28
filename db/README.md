# Base de datos
Aqui se guardan los archivos y tutoriales relacionados a la BD.

## Contexto de Carga de padrón
Para cargar el padrón se deben seguir los siguientes pasos.
1. Obtener el padrón del pdf que entrega el cliente.
2. Hacer una copia de todas las lineas a un archivo de texto o varios.
3. Copiar el archivo de texto al servidor a la ruta `/var/lib/mysql-files/nombre_del_archivo.txt`
4. Abrir el load_infile.sql, asegurarse que la ruta esté apuntando al archivo correcto (del punto anterior)
5. Abrir el MySQL Workbench con el user de root.
6. copiar la linea `LOAD DATA INFILE...` y ejecutarla desde mysql workbench.
7. 

## Procesar lineas.
1. `CALL process_lines();` desde el mysql workbench.
