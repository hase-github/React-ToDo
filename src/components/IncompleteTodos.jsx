import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteToDos, onClickComplete, onClickDelete } = props;

  return (
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
  );
};
