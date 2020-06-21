SELECT numero, nome FROM banco;
SELECT numero, nome, banco_numero FROM agencia;

-- aqui criamos uma tabela temporaria com os dados numero e nome da tabela banco
WITH tbl_tmp_banco AS (
	SELECT numero, nome
	FROM banco
)
SELECT numero, nome
FROM tbl_tmp_banco;

-- aqui "filtramos" os parametros desejados dessa tabela temporaria e usamos o JOIN 
-- para retornar apenas o valor que queríamos em params
WITH params AS (
	SELECT 213 AS banco_numero
), tbl_tmp_banco AS(
	SELECT numero, nome
	FROM banco
	JOIN params ON params.banco_numero = banco.numero
)
SELECT numero, nome
FROM tbl_tmp_banco;

-- mesmo resultado usando subselects. porém o tempo de execução desse segundo
-- exemplo é maior que o primeiro, porque ele precisa varrer toda a tabela para
-- selecionar os arquivos. no exemplo anterior quando criamos essas tabelas temp
-- reduzimos o tamanho do arquivo que estamos procurando, ganhando assim em desem-
-- penho. pensando em um banco de dados mais complexo esse método se justifica
-- mais ainda.
SELECT banco.numero, banco.nome
FROM banco
JOIN (
	SELECT 213 AS banco_numero
) params ON params.banco_numero = banco.numero

--
WITH clientes_e_transacoes AS (
	SELECT 	cliente.nome AS cliente_nome,
			tipo_transacao.nome AS tipo_transacao_nome,
			cliente_transacoes.valor AS tipo_transacao_valor
	FROM cliente_transacoes
	JOIN cliente ON cliente.numero = cliente_transacoes.cliente_numero
	JOIN tipo_transacao ON tipo_transacao.id = cliente_transacoes.tipo_transacao_id
)
SELECT cliente_nome, tipo_transacao_nome, tipo_transacao_valor
FROM clientes_e_transacoes;

WITH clientes_e_transacoes AS (
	SELECT 	cliente.nome AS cliente_nome,
			tipo_transacao.nome AS tipo_transacao_nome,
			cliente_transacoes.valor AS tipo_transacao_valor
	FROM cliente_transacoes
	JOIN cliente ON cliente.numero = cliente_transacoes.cliente_numero
	JOIN tipo_transacao ON tipo_transacao.id = cliente_transacoes.tipo_transacao_id
	JOIN banco ON banco.numero = cliente_transacoes.banco_numero AND banco.nome ILIKE '%itaú%'
)
SELECT cliente_nome, tipo_transacao_nome, tipo_transacao_valor
FROM clientes_e_transacoes;