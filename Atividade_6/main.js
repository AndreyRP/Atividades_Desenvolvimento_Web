let sequencia = 0
const botao = document.getElementById("add");
const lista = document.getElementById("lista_tarefas")


botao.addEventListener('click', function(){
    let texto_tarefa = document.getElementById("tarefa").value
    sequencia ++

    let item = document.createElement("li")

    let input = document.createElement("input")
    input.type = "checkbox"

    let span = document.createElement("span")
    span.textContent = " - " + texto_tarefa

    let nun_sequencia = document.createElement("span")
    nun_sequencia.textContent = sequencia
    
    let excluir = document.createElement("button");
    excluir.textContent = "x";
    excluir.classList.add("remover")
    excluir.id = "remover";


    item.appendChild(input)
    item.appendChild(nun_sequencia)
    item.appendChild(span)
    item.appendChild(excluir)

    lista.appendChild(item)

    document.getElementById("tarefa").value = "";
})

lista.addEventListener("click", function(event) {
    if (event.target.classList.contains("remover")) {
        event.target.closest("li").remove();
    }
});