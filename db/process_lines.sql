
CREATE DEFINER=`geapp_test`@`%` PROCEDURE `process_lines`()
BEGIN
#Esta es una copia del store procedure que ya se encuentra en la BD.
#CALL process_lines(); from outside to run.

DECLARE ix INT DEFAULT 0;
DECLARE v_text_in VARCHAR(500);
DECLARE end_loop INTEGER DEFAULT 0;
DECLARE lines_cursor CURSOR FOR SELECT text_in FROM `geapp_test`.`my_temp`;
DECLARE CONTINUE HANDLER FOR NOT FOUND SET end_loop=1;

OPEN lines_cursor;
get_lines:LOOP
	FETCH lines_cursor INTO v_text_in;
    
    IF end_loop=1 THEN
		LEAVE get_lines;
	END IF;
    
	SELECT v_text_in;
    
END LOOP get_lines;
CLOSE lines_cursor;

END