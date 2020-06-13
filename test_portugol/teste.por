// comentario, algoritmo calcula média
// author: marcus rodrigues
programa
{
	
	funcao inicio()
	{
		real nota1, nota2, nota3, nota4, media
		cadeia aluno

		escreva("digite o nome do aluno: ")
		leia(aluno)
		escreva("digite nota 1:")
		leia(nota1)
		escreva("digite nota 2:")
		leia(nota2)
		escreva("digite nota 3:")
		leia(nota3)
		escreva("digite nota 4:")
		leia(nota4)

		media = (nota1+nota2+nota3+nota4)/4
		se(media >= 7){
			escreva("parabéns "+aluno+", você passou")
		}
		senao{
			escreva(aluno+", fudeu pra vc parça")
		}
		escreva("\no aluno: "+aluno+ " obteve a média: "+media)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 66; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */