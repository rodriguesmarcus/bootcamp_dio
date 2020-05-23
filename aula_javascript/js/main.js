/* Manipulando elementos da página*/
function botao(){
    alert('Obrigado por clicar');
}

function agradecer(){
    /* Aqui injetamos um texto no primeiro elemento de id="agradecimento"*/
    document.getElementById("agradecimento").innerHTML = "<i>Clique para link novo</i>";   
}

function redirect(){
    window.open("https://github.com/rodriguesmarcus"); // abre em outra página
}

function redirect2(){
    window.location.href = "https://github.com/rodriguesmarcus"; // abre na mesma página
}

function trocar(){
    alert("você passou o mouse no parágrafo")
}

function trocaTexto(){
    document.getElementById("mousemove").innerHTML="<b>passou o mouse</b>"
}

function trocaOver(element){
    element.innerHTML = 'obrigado por passar o mouse'
}

function trocaOut(element){
    element.innerHTML = 'passe o mouse'
}

function load(){
    alert('página carregada')
}

function funcaoChange(element){
    console.log(element.value)
}

/* -------------------------------------------------------- */
/* Trabalhando com functions */

function soma(n1,n2){
    return n1+n2;
}

function setReplace(frase, nome, novoNome){
    return frase.replace(nome, novoNome);
}

function validaIdade(idade){
    var idadeRef = 23
    if (idade >= idadeRef){
        return true
    }else{
        return false
    }
}

alert(soma(20,30))

alert(setReplace("Vamos todos viver", "viver","morrer"))

if (validaIdade(prompt('qual sua idade'))){
    console.log("ok")
}else{
    console.log("not ok")
}

/* -------------------------------------------------------- */
/* Trabalhando com datas */

var d = new Date();

console.log(d); // data completa

console.log(d.getMonth()+1); // mês de 0 a 11

console.log(d.getDay()); // dia da semana

console.log(d.getFullYear()); // ano

console.log(d.getDate())

/* Trabalhando com loops de repetição*/

var count = 0;

while (count<5){
    console.log(count);
    count +=1; // count++
}

var count2;

for (count2 = 0; count2<=5; count2++) {
    console.log(count2)
}

/* -------------------------------------------------------- */
/* Trabalhano com condicionais (if, else) */

var idade2 = prompt("Qual a sua idade?");

if (idade2>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}

var idade = 18;
if (idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}

/* -------------------------------------------------------- */
/* Trabalhando com dicionários (JSON) */

var fruta = {nome: "maça", cor: "vermelha"};

var frutas = [{nome: "maca", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];

console.log(fruta.nome); 
console.log(fruta.cor);

console.log(frutas[0]);
console.log(frutas[1].cor)

/* -------------------------------------------------------- */
/* Trabalhando com listas (arrays) */

var lista = ["maçã", "pera", "laranja"];
console.log(lista[0]); // exibe o item n da lista

lista.push("uva"); //adiciona items na array
console.log(lista);

lista.pop(); //remove o último item
console.log(lista);

console.log(lista.length); // retorna o tamanho da lista (número de itens)

console.log(lista.reverse()); // inverte a ordem dos itens

console.log(lista.toString()); // transforma em string com vírgula

console.log(lista.join(" - ")); // transforma em string alterando o separador

/* -------------------------------------------------------- */
/* Trabalhando com strings e variáveis*/

var nome = "Marcus Rodrigues";
var idade = 27;
var idade2 = 28;
var frase= "japão é o MELHOR time do mundo (sic)"
//alert(`Bem vindo ${nome}, parece que você tem ${idade} anos`)
//alert(`Bem vindo ${nome}, parece que você tem ${idade+idade2} anos`)

/* o console pode ser utilizado como o 'print' para imprimir os resultados num local que
não fica aparecendo na página inicial.*/
console.log(nome)
console.log(idade+idade2)
console.log(idade*2)
console.log(frase.replace("japão", "foda-se"))
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())