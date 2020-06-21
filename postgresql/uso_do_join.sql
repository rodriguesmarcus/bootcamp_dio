SELECT numero, nome FROM banco;
SELECT banco_numero, numero, nome FROM agencia;
SELECT numero, nome FROM cliente;
SELECT banco_numero, agencia_numero, numero, digito, cliente_numero FROM conta_corrente;
SELECT id, nome FROM tipo_transacao;
SELECT banco_numero, agencia_numero, conta_corrente_numero, conta_corrente_digito, cliente_numero, valor FROM cliente_transacoes;

-- Usando outros operadores
SELECT count(1) FROM banco; -- 151; o 1 dentro do count só conta o número de registros
SELECT count(1) FROM agencia; -- 296
SELECT count(1) FROM cliente; -- 500

-- 296 registros totais
SELECT banco.numero, banco.nome, agencia.numero, agencia.nome
FROM banco
JOIN agencia ON agencia.banco_numero = banco.numero;

-- quantos bancos possuem agencia?
SELECT count(distinct banco.numero) -- distinct pega o número de bancos que possuem agencia (interseção)
FROM banco
JOIN agencia ON agencia.banco_numero = banco.numero;

SELECT count(banco.numero) -- distinct
FROM banco
JOIN agencia ON agencia.banco_numero = banco.numero
GROUP BY banco.numero;

-- left join: os bancos que não possuem agencia, estarão na relação associados ao valor null
SELECT banco.numero, banco.nome, agencia.numero, agencia.nome
FROM banco
LEFT JOIN agencia ON agencia.banco_numero = banco.numero; -- onde os dados vão se relacionar

-- right join: usar quando temos mais registros na tabela à direita
SELECT agencia.numero, agencia.nome, banco.numero, banco.nome
FROM agencia
RIGHT JOIN banco ON banco.numero = agencia.banco_numero ;

-- full join:
SELECT banco.numero, banco.nome, agencia.numero, agencia.nome
FROM banco
FULL JOIN agencia
ON agencia.banco_numero = banco.numero;

-- teste a: como funcionaria o full join em outra situaçao:
CREATE TABLE IF NOT EXISTS teste_a (id serial primary key, valor varchar(10));
CREATE TABLE IF NOT EXISTS teste_b (id serial primary key, valor varchar(10));

INSERT INTO teste_a (valor) VALUES ('teste 1');
INSERT INTO teste_a (valor) VALUES ('teste 2');
INSERT INTO teste_a (valor) VALUES ('teste 3');
INSERT INTO teste_a (valor) VALUES ('teste 4');

INSERT INTO teste_b (valor) VALUES ('teste a');
INSERT INTO teste_b (valor) VALUES ('teste b');
INSERT INTO teste_b (valor) VALUES ('teste c');
INSERT INTO teste_b (valor) VALUES ('teste d');

SELECT tbla.valor, tblb.valor -- tbla é um alias
FROM teste_a tbla
CROSS JOIN teste_b tblb;

DROP TABLE IF EXISTS teste_a;
DROP TABLE IF EXISTS teste_b;

-- realizando um join completo agora
SELECT 	banco.nome,
		agencia.nome,
		conta_corrente.numero,
		conta_corrente.digito,
		cliente.nome
FROM banco
JOIN agencia ON agencia.banco_numero = banco.numero
JOIN conta_corrente 
	ON conta_corrente.banco_numero = agencia.banco_numero -- pode relacionar com qualquer tabela à esquerda
	AND conta_corrente.agencia_numero = agencia.numero
JOIN cliente ON cliente.numero = conta_corrente.cliente_numero

-- montar o select acima incluindo as transações e os tipos de transação de cada cliente:
SELECT 	banco.nome,
		agencia.nome,
		conta_corrente.numero,
		conta_corrente.digito,
		cliente.nome,
		cliente_transacoes.valor,
		tipo_transacao.nome
FROM banco
JOIN agencia 
	ON agencia.banco_numero = banco.numero
JOIN conta_corrente 
	ON conta_corrente.banco_numero = agencia.banco_numero
	AND conta_corrente.agencia_numero = agencia.numero
JOIN cliente 
	ON cliente.numero = conta_corrente.cliente_numero
JOIN cliente_transacoes
	ON cliente_transacoes.cliente_numero = cliente.numero
JOIN tipo_transacao
	ON tipo_transacao.id = cliente_transacoes.tipo_transacao_id;
