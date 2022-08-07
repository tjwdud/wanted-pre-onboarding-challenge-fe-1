import React, { useEffect, useState } from "react";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  useEffect(() => {
    setSubmitDisabled(validation(email, password));
  }, [email, password]);

  const validation = (email, password) => {
    if (email.includes("@") && email.includes(".") && password.length >= 8)
      return false;
    return true;
  };
  const onChangeEmailHandler = ({ target: { value } }) => setEmail(value);
  const onChangePasswordHandler = ({ target: { value } }) => setPassword(value);
  const onClickLoginHandler = async (e) => {
    e.preventDefault();
  };
  const onClickSignInHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form>
        <div>
          <input
            name="email"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={onChangeEmailHandler}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePasswordHandler}
          />
        </div>
        <div>
          <button onClick={onClickLoginHandler} disabled={submitDisabled}>
            로그인
          </button>
          <button onClick={onClickSignInHandler} disabled={submitDisabled}>
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
