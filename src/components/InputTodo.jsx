import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};
//InputAreaのスタイルはInputTodoだけにあればよいので、
//コンポーネントの中に書いてしまう
//CSSの記法からReactの記法に直すことだけ注意
//(CSS-In-JSと言う)

export const InputTodo = (props) => {
  const { toDoText, onChangeToDoText, onClickAdd, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={toDoText}
        onChange={onChangeToDoText}
      />
      <button disabled={disabled} onClick={onClickAdd}>
        追加
      </button>
    </div>
  );
};
