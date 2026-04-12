export default function Nav({itens}){
    return(
        <nav class="cabecalho">
            <ul class="menu">
                {itens.map((item, index) => (
                    <li class="" key={index}><a href="">{item}</a></li>
                ))}
            </ul>
        </nav>
    );
}