programa
{
	
	funcao inicio()
	{
		inteiro contador, limite, resultado, valorusuario
		escreva("Digite o valor que você deseja conhecer a tabuada: ")
		leia(valorusuario)
		escreva("Qual último número você deseja que seja multiplicado: ")
		leia(limite)
		contador = 0
		
		faca{
			resultado = valorusuario*contador
			escreva(valorusuario+" X "+contador+" = "+resultado+"\n")
			contador++
		}enquanto (contador<=limite)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 271; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */