import { useState } from "react";
import { Layout } from "../../../components/common";

import * as S from "./Login.styled";

export function Login() {
  const [form, setForm] = useState({
    userId: "",
    userPasssword: "",
  });

  return (
    <Layout>
      <S.LoginInfo>
        <h1 style={{ fontSize: "40px" }}>로그인</h1>
        <div style={{ fontSize: "15px", fontWeight: "bold" }}>
          DoctorForU에 오신 것을 환영합니다.
        </div>
        <p style={{ fontSize: "13px", color: "#838383" }}>
          로그인 하시면 보다 편리하게 서비스 이용이 가능합니다.
        </p>
      </S.LoginInfo>
      <S.LoginContainer>
        <S.LoginForm>
          <S.Input
            className="Input"
            placeholder="아이디"
            onChange={(e) => setForm({ ...form, userId: e.target.value })}
            value={form.userId}
          />
        </S.LoginForm>
        <S.LoginForm>
          <S.Input
            placeholder="비밀번호"
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            value={form.userPasssword}
          />
        </S.LoginForm>
      </S.LoginContainer>
      <S.Button>로그인</S.Button>
      <S.LineContainer>
        <S.Line></S.Line>
        <div style={{ color: "#9A9FAB" }}>SNS 계정으로 로그인</div>
        <S.Line></S.Line>
      </S.LineContainer>
      <S.SocialContainer>
        <div>Google</div>
        <div>Kakao</div>
      </S.SocialContainer>
    </Layout>
  );
}
