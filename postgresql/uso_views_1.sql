SELECT numero, nome, ativo 
FROM banco;

CREATE OR REPLACE VIEW vw_banco AS(
	SELECT numero, nome, ativo
	FROM banco
);

SELECT numero, nome, ativo
FROM vw_banco;

CREATE OR REPLACE VIEW vw_banco_2(banco_numero, banco_nome,banco_ativo) AS(
	SELECT numero, nome, ativo
	FROM banco
);

SELECT banco_numero, banco_nome, banco_ativo
FROM vw_banco_2;

INSERT INTO vw_banco_2 (banco_numero, banco_nome, banco_ativo)
VALUES (51, 'boa ideia', TRUE);

SELECT banco_numero, banco_nome, banco_ativo
FROM vw_banco_2
WHERE banco_numero = 51;

SELECT numero, nome, ativo
FROM banco
WHERE numero = 51;

UPDATE vw_banco_2 SET banco_ativo = FALSE WHERE banco_numero = 51;

DELETE FROM vw_banco_2 WHERE banco_numero = 51;

--- trabalhando com temporário

CREATE OR REPLACE TEMPORARY VIEW vw_agencia AS (
	SELECT nome FROM agencia
);

SELECT nome FROM vw_agencia;


CREATE OR REPLACE VIEW vw_bancos_ativos AS (
	SELECT numero, nome, ativo
	FROM banco
	WHERE ativo IS TRUE
); --WITH LOCAL CHECK OPTION; 

INSERT INTO vw_bancos_ativos (numero, nome, ativo) VALUES (51, 'BOA IDEIA', FALSE);
-- NAO PODEMOS INSERIR OS DADOS DEVIDO AO FALSE QUEBRAR A CONDIÇÃO

CREATE OR REPLACE VIEW vw_bancos_com_a AS (
	SELECT numero, nome, ativo
	FROM vw_bancos_ativos
	WHERE nome ILIKE 'a%'
)WITH CASCADED CHECK OPTION; -- LOCAL
-- NESSE CASO SÓ PODEMOS INSERIR NOMES QUE COMECEM COM A, CASO CONTRÁRIO SERÁ
-- RETORNADO ERRO DE VIOLAÇÃO DO CHECK OPTION
SELECT numero, nome, ativo FROM vw_bancos_com_a;

INSERT INTO vw_bancos_com_a (numero, nome, ativo) VALUES (3333, 'aLFAPAI', TRUE);

INSERT INTO vw_bancos_com_a (numero, nome, ativo) VALUES (3331, 'aLFAMAE', FALSE);
-- aqui retorna erro porque o banco requer o ativo = true, se retirássemos o check
-- option ele inseriria normalmente;4

INSERT INTO vw_bancos_com_a (numero, nome, ativo) VALUES (3332, 'aLFAFILHO', FALSE);
-- caso coloquemos o CASCADED no lugar do LOCAL em bancos_com_a, mesmo que tiremos
-- o check option do bancos_ativos ele irá verificar     a condição WHERE e impedirá
-- de cadastrar com o FALSE


