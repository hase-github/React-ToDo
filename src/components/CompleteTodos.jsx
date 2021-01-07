import React from "react";

export const CompleteTodos = (props) => {
  const { completeToDos, onClickBack } = props;

  return (
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
  );
};
