import Article from "./article.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Aside from "./aside.jsx";
import Nav from "./Nav.jsx";
import imagem from "./assets/hero.png";

export default function App(){

  const listaNaveg = ["HOME","SOBRE","CONTATO"];
  const asides = ["visite nossa pagina", "visite para ver mais sobre", "quer viager com desconto"]

  return (
    <div>
      <Header
        titulo="Meu Blog de Viagens"
      />
        <div class = "tela">
          <Nav
            itens={listaNaveg}
          />
          
            <Article
              titulo="Descobrindo as Praias do Nordeste"
              data={new Date("2026-03-01")}
              texto={`Da Bahia ao Rio Grande do Norte, passando por Sergipe, Alagoas, Pernambuco, Paraíba, além do Ceará, Piauí e Maranhão:
              o que não faltam são faixas de areia maravilhosas e praias com as mais diversas características!
              Não há dúvidas que muitas das melhores praias do Brasil estão no Nordeste!`}
              endereco = {`Da Bahia ao Rio Grande do Norte, passando por Sergipe, Alagoas, Pernambuco, Paraíba, além do Ceará, Piauí e Maranhão: 
                  o que não faltam são faixas de areia maravilhosas e praias com as mais diversas características! Não há dúvidas que 
                  muitas das melhores praias do Brasil estão no Nordeste!`}
              link={imagem}
            />

            <Aside 
              itens = {asides}
            />

          <Footer
            rodape="© 2024 - Todos os direitos reservados."
          />
      </div>
    </div>
  );
}
  
