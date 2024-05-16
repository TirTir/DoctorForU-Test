import { useState } from "react";

export function Login() {
  const [form, setForm] = useState({
    userId: "",
    userPasssword: "",
  });

  return (
    <div>
      <section>
        <h1>로그인</h1>
        <p>DoctorForU에 오신 것을 환영합니다.</p>
        <p>로그인 하시면 보다 편리하게 서비스 이용이 가능합니다.</p>
      </section>
      <section>
        <div>
          <input />
        </div>
        <div>
          <input />
        </div>
      </section>
      <button>로그인</button>
      <div>
        <div></div>
        <p>SNS 계정으로 로그인</p>
        <div></div>
      </div>
    </div>
  );
}
