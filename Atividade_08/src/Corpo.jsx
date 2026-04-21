import { useState } from "react";

export default function Main({titulo}) {
    const [tarefa, setTarefa] = useState("");
    const [lista, setLista] = useState([]);

    function addLista(){
        if(tarefa.trim() === "") return;

        setLista([...lista, tarefa]);
        setTarefa("");
    }

    function remove(item){
        const novaLista = lista.filter((_, index) => index !== item);
        setLista(novaLista);
    }

  return (


    <main>
      <section>
            <div className="entrada">
                <label for="tarefa">{titulo}</label>
                <div>
                    <input 
                    id="tarefa" 
                    type="text" 
                    placeholder="Digite sua Tarefa"
                    value={tarefa}
                    onChange={(e) => setTarefa(e.target.value)}/>
                    <button className="remover" onClick={addLista}>
                        Adicionar
                    </button>
                </div>
            </div>
            <div className="lista">
                <ul id="lista_tarefas">
                    {lista.map((item, index) => (
                        <li key={index}>
                            <input  type="checkbox" />{index} - {item}
                            <button className="remover" onClick={() => remove(index)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </main>
  );
}