import React, { useEffect, useState } from "react";
import { fetchAuth } from "utils/fetchAuth";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setLocalStorage, getLocalStorage } from "utils/storage";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (getLocalStorage("token")) return navigate("/");
  }, []);
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
    const {
      status,
      data: { message, token },
    } = await fetchAuth("/users/login", email, password);
    alert(message);
    setLocalStorage("token", token);
    if (status === 200) {
      return navigate("/");
    }
  };
  const onClickSignInHandler = async (e) => {
    e.preventDefault();
    const {
      status,
      data: { message },
    } = await fetchAuth("/users/create", email, password);
    alert(message);
    if (status === 200) {
      <Navigate to="/" />;
    }
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
