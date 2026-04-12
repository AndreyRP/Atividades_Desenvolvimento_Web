export default function Aside({itens}) {  
  return (
    <aside class="links">
        <ul class="menu_lateral">
           {itens.map((item, index) => (
            <li key={index}><a href="">{item}</a></li>
            ))}
        </ul>
    </aside>
  );
}