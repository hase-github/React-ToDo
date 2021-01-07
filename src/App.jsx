import React, { useState } from "react";
import "./styles.css";

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
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={toDoText}
          onChange={onChangeToDoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のToDo</p>
        <ul>
          {incompleteToDos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                {
                  //map関数などのループを使う場合には、keyを設定する。
                  //再レンダリング時に仮想DOMの差分を取るのに使われる。
                }
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
                {/*　↑ここで関数に引数indexを渡すときは、
                アロー関数を使って新たな関数とする必要がある。
                （そうでないと、リロードした時点で関数が動いてしまう。）
                */}
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">未完了のToDo</p>
        <ul>
          {completeToDos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
