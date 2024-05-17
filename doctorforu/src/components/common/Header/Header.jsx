import * as S from "./Header.styled";

export function Header() {
  return (
    <S.Container>
      <S.Logo>Doctor For U</S.Logo>
      <S.Nav>
        <ul>
          <li>병원찾기</li>
          <li>질병 찾기</li>
          <li>응급진료</li>
        </ul>
      </S.Nav>
      <S.Auth>
        <span>로그인 | 회원가입</span>
        <S.MenuButton>
          <span className="menu-button-line"></span>
          <span className="menu-button-line"></span>
          <span className="menu-button-line"></span>
        </S.MenuButton>
      </S.Auth>
    </S.Container>
  );
}
