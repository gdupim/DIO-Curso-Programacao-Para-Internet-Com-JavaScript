function clicou(){
    //document.getElementById("agradecimento");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar.</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://github.com/gdupim");
    window.location.href = "https://github.com/gdupim";
}

function trocar(elemento){
    //document.getElementById("mouse_move").innerHTML = "Obrigado por passar o mouse!";
    //alert("Trocar texto.");
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento){
    //document.getElementById("mouse_move").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert("Página carregada!");
}

function change(elemento){
    console.log(elemento.value);
}

/* Aula 3:
function setReplace(frase, nome, novo_nome){ - Função para usar o replace();
    return frase.replace(nome, novo_nome);
}

function soma(n1, n2) { - Função de soma.
    return n1 + n2;
}

function validarIdade(idade){ - Função para validar idade.
    var validar;
    if(idade >= 18){
        validar = true;
    }
    else{
        validar = false;
    }
    return validar;
}

alert(soma(5, 10));

var idade = prompt("Qual sua idade: ");

console.log(validarIdade(idade));

alert(setReplace("Vai Alemanha", "Alemanha", "Brasil")); - alert() para mostrar a função setReplace() anterior.

var d = new Date(); - Declara a classe Date();

alert(d); - Mostra a data e hora atual.

alert(d.getMonth()); - Mostra o mês atual.

alert(d.getMonth() + 1); - Mostra o mês atual corretamente.

alert(d.getMinutes()); - Mostra os minutos.

alert(d.getDay()); - Mostra o número do dia atual (Domingo - 0, Segunda - 1...)

alert(d.getHours()); - Mostra a hora autal.

for(var count = 0; count <= 5; count++){ - Loop For.
    alert(count);
}

var count = 0;

while(count <= 5){ - Loop While.
    console.log(count);
    alert(count); 
    count++;
}

var idade = prompt("Qual sua idade: "); - Aparece uma mensagem (tipo o "alert()") com um espaço de Input.

var idade = 18;

if(idade >= 18){
    alert("Maior de idade");
}
else{
    alert("Menor de idade");
}
*/

/* Aula 2:
var frutas = [{nome: "Maçã", cor: "Vermelha"}, {nome: "Uva", cor: "Roxa"}]; - Cria lista de dicionários.

console.log(frutas); - Exibe a lista.

alert(frutas[1].nome); - Exibe o nome do primeiro valor.

var fruta = {nome: "Maçã", cor: "Vermelha"}; - Cria um dicionário.

console.log(fruta); - Mostra o conteúdo do dicionário.

console.log(fruta.nome); - Mostra o nome declarado dentro do dicionário.

alert(fruta.cor); - Mostra a cor declarada dentro do dicionário.

var lista = ["Maçã", "Pêra", "Laranja"]; - Adiciona lista.

lista.push("Uva"); - Adiciona valor a lista.

console.log(lista); - Mostra o conteúdo da lista.

lista.pop(); - Remove o último valor da lista.

console.log(lista[0]); - Imprime um valor da lista.

console.log(lista.toString()[0]); - Imprime, no caso aqui, a primeira letra do primeiro valor.

console.log(lista.join(" - ")); - Adiciona um "-" entre os valores para o .toString();

console.log(lista.join(" | "));

console.log(lista.join(" "));

console.log(lista.join(""));

console.log(lista.toString()); - Converte a lista em um texto.

console.log(lista.length); - Imprime o tamanho da lista.

console.log(lista.reverse()); - Inverte os valores da lista.

alert(lista[1]);
*/

/* Aula 1:
var nome = "Gabriel Dupim";

var idade = 16;

var idade2 = 10;

var n1 = 5;

var n2 = 3;

var frase = "Brasil é o melhor time do mundo.";

var idade = "16";

var idade2 = "10";

alert("Bem-vindo " + nome);

alert(nome + " tem idade de " + idade + " anos.");

alert(idade + idade2);

console.log(nome);

console.log(idade + idade2);

console.log(n1 * n2);

console.log(n1 * idade);

console.log(frase.replace("Brasil", "Alemanha")); - Muda um valor dentro de uma varíavel.

alert(frase.replace("Brasil", "Japão")); 

console.log(frase.toUpperCase()); - Faz com que a frase da varíavel fique em maiúsculas.

console.log(frase.toLowerCase()); - Faz com que a frase da varíavel fique em minúsculas.
*/