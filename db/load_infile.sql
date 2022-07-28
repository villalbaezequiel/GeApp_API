#Esta es la linea que se debe ejecutar para insertar la lineas en la tabla my_temp en la columna text_in.
LOAD DATA INFILE '/var/lib/mysql-files/lines.txt' INTO TABLE geapp_test.my_temp (text_in);
  

#Para asegurarse que mysql lea archivos. (en este server ya está configurado).alter
#1. sudo vi /etc/my.cnf
#2. add secure_file_priv="" to mysqld section.
#3. Chequearlo de la siguiente manera en el mysql workbench: SHOW VARIABLES LIKE "secure_file_priv"; 
#4. A continuación se dejan otros comandos para corrobrar:
# SET GLOBAL local_infile = 1;
# SHOW GLOBAL VARIABLES LIKE 'local_infile';
# SHOW GLOBAL VARIABLES LIKE 'version';
# SHOW VARIABLES LIKE "secure_file_priv";
