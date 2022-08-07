import React from "react";
import { Link } from "react-router-dom";
import { getLocalStorage, removeLocalStorage } from "utils/storage";
function Todo() {
  const onClickLogOutHandler = (e) => {
    e.preventDefault();
    if (getLocalStorage("token")) removeLocalStorage("token");
  };
  return (
    <>
      <div>Todo</div>
      <Link to="/auth">로그인</Link>
      <button onClick={onClickLogOutHandler}>로그아웃</button>
    </>
  );
}

export default Todo;
