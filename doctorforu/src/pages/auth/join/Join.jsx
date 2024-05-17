import { useState } from "react";
import { Layout } from "../../../components/common";

import * as S from "./Join.styled";

export function Join() {
  const [form, setForm] = useState({
    userName: "",
    userId: "",
    userEmail: "",
    userEmailSite: "",
    userPasssword: "",
  });

  const [confirmId, setConfirmId] = useState(false); //아이디 중복 체크
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false); //비밀번호 확인

  const onConfirmedPassword = (e) => {
    const confirm = e.target.value;
    setConfirmPassword(confirm);
    setPasswordMatch(form.userPasssword === confirmPassword);
  };
  return (
    <Layout>
      <S.Line style={{ width: "100%" }}></S.Line>
      <section aria-label="join-info" className="JoinInfo">
        <h1 style={{ fontSize: "40px" }}>회원가입</h1>
        <S.Box>
          <div style={{ fontSize: "15px" }}>
            - 아래의 정보들은 이용자 동의없이 공개되지 않습니다.
          </div>
          <div style={{ fontSize: "15px", color: "#4288DD" }}>
            - 이메일 등 입력된 개인정보가 부정확할 시 서비스 이용에 어려움을
            겪으실 수 있습니다.
          </div>
        </S.Box>
      </section>
      <section aria-label="join-form" className="JoinContainer">
        <S.JoinForm>
          <S.InputForm>
            <S.Label>이름<S.Required>*</S.Required></S.Label>
            <S.InputBox>
              <S.Input
                onChange={(e) => setForm({ ...form, userName: e.target.value })}
                value={form.userName}
              />
            </S.InputBox>
          </S.InputForm>
          <S.InputForm>
            <S.Label>아이디<S.Required>*</S.Required></S.Label>
            <S.InputBox>
              <S.Input
                placeholder="6~12자 영문 소문자와 숫자"
                onChange={(e) => setForm({ ...form, userId: e.target.value })}
                value={form.userId}
              />
            </S.InputBox>

            <S.CheckButton>중복체크</S.CheckButton>
          </S.InputForm>
          <S.InputForm>
            <S.Label>이메일<S.Required>*</S.Required></S.Label>
            <S.InputBox>
              <S.Input
                onChange={(e) =>
                  setForm({ ...form, userEmail: e.target.value })
                }
                value={form.userEmail}
              />
            </S.InputBox>

            <div>@</div>
            <S.InputBox>
              <S.Input
                onChange={(e) =>
                  setForm({ ...form, userEmailSite: e.target.value })
                }
                value={form.userEmailSite}
              />
            </S.InputBox>
          </S.InputForm>
          <S.InputForm>
            <S.Label>비밀번호<S.Required>*</S.Required></S.Label>
            <S.InputBox>
              <S.Input 
                type="password"
                onChange={(e) =>
                  setForm({ ...form, userPasssword: e.target.value })
                }
                value={form.userPasssword}
              />
            </S.InputBox>
          </S.InputForm>
          <S.InputForm>
            <S.Label>비밀번호 확인<S.Required>*</S.Required></S.Label>
            <S.InputBox>
              <S.Input
                type="password"
                onChange={onConfirmedPassword}
                value={confirmPassword}
              />
            </S.InputBox>
          </S.InputForm>
        </S.JoinForm>
      </section>
      <S.Button>가입하기</S.Button>
      <S.LineContainer>
        <S.Line style={{ width: "200px" }}></S.Line>
        <div style={{ color: "#9A9FAB" }}>SNS 계정으로 로그인</div>
        <S.Line style={{ width: "200px" }}></S.Line>
      </S.LineContainer>
      <S.SocialContainer>
        <div>Google</div>
        <div>Kakao</div>
      </S.SocialContainer>
    </Layout>
  );
}
