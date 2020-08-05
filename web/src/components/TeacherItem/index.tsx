import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/42623554?s=460&u=d209371375bb0b28bca55b26527e712dd4dfd4fd&v=4"
          alt="Elvin Ciqueira"
        />
        <div>
          <strong>Elvin Ciqueira</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        lalalallalalalal
        <br />
        <br />
        lalalalallalal
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
