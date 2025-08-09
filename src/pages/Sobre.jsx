export default function Sobre() {
  return (
    <section className="sobre">
      <h1>Sobre o Projeto Rick and Morty</h1>

      <p>
        Este projeto foi desenvolvido com o objetivo de praticar os fundamentos
        do React, utilizando componentes reutilizáveis, props e manipulação de
        dados de forma simples e eficiente. A proposta é apresentar uma lista de
        personagens do universo da série <strong>Rick and Morty</strong>, com
        informações básicas como nome e imagem.
      </p>

      <h2>🧪 Como Funciona</h2>
      <p>
        O projeto exibe os personagens por meio de{" "}
        <strong>componentes do tipo Card</strong>, cada um contendo um título
        (nome do personagem) e uma imagem. Esses dados são passados
        dinamicamente através de <strong>props</strong>, o que permite
        flexibilidade e reaproveitamento do componente em diferentes contextos.
      </p>

      <h2>📦 Fonte de Dados</h2>
      <p>
        As informações dos personagens são obtidas a partir de um{" "}
        <strong>objeto JavaScript</strong> local, que simula uma fonte de dados.
        Essa estrutura facilita o teste, a iteração com os componentes e a
        futura integração com APIs reais, se desejado.
      </p>

      <h2>🧱 Estrutura do Projeto</h2>
      <ul>
        <li>
          Uso de <strong>componentes funcionais</strong>;
        </li>
        <li>
          Passagem de <strong>props</strong> para customização dos cards;
        </li>
        <li>Separação clara entre dados e apresentação;</li>
        <li>Estilização simples para destacar os personagens visualmente.</li>
      </ul>

      <h2>🎯 Objetivo</h2>
      <p>
        Este projeto tem como foco reforçar os conceitos iniciais de React, como
        a criação de componentes reutilizáveis, a importância das props e a
        renderização dinâmica de conteúdo baseado em dados.
      </p>

      <h2>🛠️ Tecnologias Utilizadas</h2>
      <ul>
        <li>
          <strong>React</strong> para criação da interface e lógica dos
          componentes;
        </li>
        <li>
          <strong>JavaScript (ES6+)</strong> para manipulação de dados e
          estrutura dos componentes;
        </li>
        <li>
          <strong>HTML + CSS</strong> para estrutura e estilo da aplicação.
        </li>
      </ul>
    </section>
  );
}
