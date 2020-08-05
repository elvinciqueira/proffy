import React from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher o formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>

          <Input name="name" type="text" label="Nome Completo" />
          <Input name="avatar" type="text" label="Avatar" />
          <Input name="whatsapp" type="text" label="Whatsapp" />
        </fieldset>
        <fieldset>
          <legend>Sobre à aula</legend>

          <Input name="subject" type="text" label="Matéria" />
          <Input name="cost" type="text" label="Custo por sua hora por aula" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
