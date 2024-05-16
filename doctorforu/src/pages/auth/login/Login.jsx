import { useState } from "react";
import "./Login.styled.css";
export function Login() {
  const [form, setForm] = useState({
    userId: "",
    userPasssword: "",
  });

  const onChange = () => {};
  return (
    <div className="Container">
      <section aria-label="login-info" className="LoginInfo">
        <h1 style={{ fontSize: "40px" }}>로그인</h1>
        <div style={{ fontSize: "15px", fontWeight: "bold" }}>
          DoctorForU에 오신 것을 환영합니다.
        </div>
        <p style={{ fontSize: "13px", color: "#838383" }}>
          로그인 하시면 보다 편리하게 서비스 이용이 가능합니다.
        </p>
      </section>
      <section aria-label="login-form" className="LoginContainer">
        <div className="LoginForm">
          <input
            className="Input"
            placeholder="아이디"
            onChange={(e) => setForm({ ...form, id: e.target.value })}
            value={form.userId}
          />
        </div>
        <div className="LoginForm">
          <input
            className="Input"
            placeholder="비밀번호"
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            value={form.userPasssword}
          />
        </div>
      </section>
      <button className="Button">로그인</button>
      <div className="LineContainer">
        <div className="Line"></div>
        <div style={{ color: "#9A9FAB" }}>SNS 계정으로 로그인</div>
        <div className="Line"></div>
      </div>
      <div className="SocialContainer">
        <div>Google</div>
        <div>Kakao</div>
      </div>
    </div>
  );
}
