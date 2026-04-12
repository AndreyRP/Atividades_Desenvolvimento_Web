export default function Article({titulo, data, texto, endereco, link}) {
    const formatada = data.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
  
  return (
    <article class="box">
        <h2>{titulo}</h2>
        <time dateTime={data.toISOString().split("T")[0]}>
        {formatada}
        </time>
        <p>{texto}</p>
        <p>{endereco}</p>
        <img src={link}/>
    </article>
  );
}