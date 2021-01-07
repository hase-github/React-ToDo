import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [toDoText, setTodoText] = useState("");
  const [incompleteToDos, setIncompleteToDos] = useState([]);
  const [completeToDos, setCompleteToDos] = useState([]);

  const onChangeToDoText = (event) => {
    setTodoText(event.target.value);
    //inputに入力された値をstateとして受け取る。
  };

  const onClickAdd = () => {
    if (toDoText === "") return;
    const newTodos = [...incompleteToDos, toDoText];
    setIncompleteToDos(newTodos);
    //alert(toDoText);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    //alert(index);
    const newTodos = [...incompleteToDos];
    newTodos.splice(index, 1);
    setIncompleteToDos(newTodos);
  };

  const onClickComplete = (index) => {
    //alert();
    const newIncompleteTodos = [...incompleteToDos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeToDos, incompleteToDos[index]];

    setIncompleteToDos(newIncompleteTodos);
    setCompleteToDos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeToDos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteToDos, completeToDos[index]];
    setCompleteToDos(newCompleteTodos);
    setIncompleteToDos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        toDoText={toDoText}
        onChangeToDoText={onChangeToDoText}
        onClickAdd={onClickAdd}
        disabled={incompleteToDos.length >= 5}
      />
      {incompleteToDos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTodoは５個までです。</p>
      )}
      <IncompleteTodos
        incompleteToDos={incompleteToDos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos completeToDos={completeToDos} onClickBack={onClickBack} />
    </>
  );
};
