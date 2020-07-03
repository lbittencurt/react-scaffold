import React from "react";

import "./home-page.style.less";

export const HomePageTemplate: React.FC = () => {
  return (
    <div className="home-page">
      <h2>Bem-vindo ao Neogrid Sample</h2>
      <p>
        Este projeto tem o objetivo de ser um &quot;sample&quot;, ou seja um
        projeto modelo para ajudar os times de produtos e sistemas internos da
        Neogrid a construirem interfaces.
        <br />
        Dúvidas a respeito do funcionamento do projeto, fiquem a vontade para
        acionar o time de Arquitetura da Neogrid.
      </p>
      <p>
        No menu a esquerda é possível ver exemplos da criação de{" "}
        <strong>formulários</strong> e <strong>listas</strong>.
      </p>
      <br />
      <h3>Como contribuir</h3>
      <ul>
        <li>
          Baixe o projeto (pode ser necessário solicitar acesso ao repositório)
        </li>
        <li>Crie uma branch para fazer a sua alteração</li>
        <li>
          Crie um pull-request para a branch develop e documente no pull-request
          sobre a sua atualização
        </li>
      </ul>
    </div>
  );
};
