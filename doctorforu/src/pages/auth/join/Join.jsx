import { useState } from "react";
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
    <S.Container>
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
            <S.TextBox>이름</S.TextBox>
            <S.InputBox>
              <input
                className="Input"
                onChange={(e) => setForm({ ...form, userName: e.target.value })}
                value={form.userName}
              />
            </S.InputBox>
          </S.InputForm>
          <S.InputForm>
            <S.TextBox>아이디</S.TextBox>
            <S.InputBox>
              <input
                className="Input"
                placeholder="6~12자 영문 소문자와 숫자"
                onChange={(e) => setForm({ ...form, userId: e.target.value })}
                value={form.userId}
              />
            </S.InputBox>

            <button className="CheckButton">중복체크</button>
          </S.InputForm>
          <S.InputForm>
            <S.TextBox>이메일</S.TextBox>
            <S.InputBox>
              <input
                className="Input"
                onChange={(e) =>
                  setForm({ ...form, userEmail: e.target.value })
                }
                value={form.userEmail}
              />
            </S.InputBox>

            <div>@</div>
            <S.InputBox>
              <input
                className="Input"
                onChange={(e) =>
                  setForm({ ...form, userEmailSite: e.target.value })
                }
                value={form.userEmailSite}
              />
            </S.InputBox>
          </S.InputForm>
          <S.InputForm>
            <S.TextBox>비밀번호</S.TextBox>
            <S.InputBox>
              <input
                className="Input"
                type="password"
                onChange={(e) =>
                  setForm({ ...form, userPasssword: e.target.value })
                }
                value={form.userPasssword}
              />
            </S.InputBox>
          </S.InputForm>
          <S.InputForm>
            <S.TextBox>비밀번호 확인</S.TextBox>
            <S.InputBox>
              <input
                className="Input"
                type="password"
                onChange={onConfirmedPassword}
                value={confirmPassword}
              />
            </S.InputBox>
          </S.InputForm>
        </S.JoinForm>
      </section>
      <S.Button>가입하기</S.Button>
      <div className="LineContainer">
        <div className="Line"></div>
        <div style={{ color: "#9A9FAB" }}>SNS 계정으로 회원가입</div>
        <div className="Line"></div>
      </div>
      <div className="SocialContainer">
        <div>Google</div>
        <div>Kakao</div>
      </div>
    </S.Container>
  );
}
