import React, { useCallback, useState } from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import TextArea from "../../components/Textarea";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";

const TeacherForm: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: "",
      to: "",
    },
  ]);

  const addNewScheduleItem = useCallback(() => {
    setScheduleItems((scheduleItem) => [
      ...scheduleItem,
      {
        week_day: 0,
        from: "",
        to: "",
      },
    ]);

    console.log("não funciona");
  }, []);

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
          <TextArea name="bio" label="Biografia" />
        </fieldset>
        <fieldset>
          <legend>Sobre à aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Física", label: "Física" },
              { value: "Matemática", label: "Matemática" },
              { value: "Química", label: "Química" },
              { value: "Geografia", label: "Geografia" },
              { value: "Filosofia", label: "Filosofia" },
              { value: "História", label: "História" },
              { value: "Português", label: "Português" },
              { value: "Educação Física", label: "Educação Física" },
            ]}
          />
          <Input name="cost" type="text" label="Custo por sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis{" "}
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map((scheduleItem, index) => (
            <div key={index} className="schedule-item">
              <Select
                name="subject"
                label="Matéria"
                options={[
                  { value: "Artes", label: "Artes" },
                  { value: "Biologia", label: "Biologia" },
                  { value: "Ciências", label: "Ciências" },
                  { value: "Física", label: "Física" },
                  { value: "Matemática", label: "Matemática" },
                  { value: "Química", label: "Química" },
                  { value: "Geografia", label: "Geografia" },
                  { value: "Filosofia", label: "Filosofia" },
                  { value: "História", label: "História" },
                  { value: "Português", label: "Português" },
                  { value: "Educação Física", label: "Educação Física" },
                ]}
              />
              <Input name="from" label="Das" type="time" />
              <Input name="to" label="Até" type="time" />
            </div>
          ))}
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
