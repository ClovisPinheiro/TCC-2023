var btnSalvar = document.querySelector("#btnSalvar");

    //Executar a função anonima ao clicar no botão
btnSalvar.addEventListener("click", function (event){
    event.preventDefault();

    //Obtem o formulário da nossa página HTML
var classificado = document.querySelector("#classificado");
    
    //Imprime o valor de cada campo do formulário
console.log(classificado.Produto.value);
console.log(classificado.Nome.value);
console.log(classificado.Contato.value);
console.log(classificado.Cid_Est.value);
console.log(classificado.Descricao.value);

    //Cria um elemento tr dentro do documento HTML
var linha = document.createElement("tr");

    //Cria quatro elementos td dentro do documento HTML
var celulaProduto = document.createElement("td");
var celulaNome = document.createElement("td");
var celulaContato = document.createElement("td");
var celulaCid_Est = document.createElement("td");
var celulaDescricao = document.createElement("td");
    
     //Coloca o conteúdo correto em cada elemento td criando anteriormente
celulaProduto.textContent = classificado.Produto.value;
celulaNome.textContent = classificado.Nome.value;
celulaContato.textContent = classificado.Contato.value;
celulaCid_Est.textContent = classificado.Cid_Est.value;
celulaDescricao.textContent = classificado.Descricao.value;

      //Coloca o elemento tr como filha da tabela de alunos
var tabelaAnuncios = document.querySelector("#tabelaAnuncios").querySelector("tbody");

     //Coloca os elementos td como filhos do elemento tr
linha.appendChild(celulaProduto);
linha.appendChild(celulaNome);
linha.appendChild(celulaContato);
linha.appendChild(celulaCid_Est);
linha.appendChild(celulaDescricao);

tabelaAnuncios.appendChild(linha);

classificado.reset();

})

