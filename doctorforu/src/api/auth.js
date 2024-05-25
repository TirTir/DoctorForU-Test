import { defaultInstance } from "../utils";

export const postCheckDuplicateId = async (data) => { // 아이디 중복 확인
  try {
    const { res } = await defaultInstance.get(`/user/register/${data}`);
    return res.status;
  } catch (error) {
    console.log(error);
  }
};

export const postVerificationEmail = async (data) => { // 인증 코드 요청
  try {
    const { res } = await defaultInstance.post("/verify-email", data);
    return res.isSuccess;
  } catch (error) {
    console.log(error);
  }
};

export const postVerificationCode = async (data) => { // 인증 코드 확인
  try {
    const { res } = await defaultInstance.post("/verification-code", data);
    return res.isSuccess;
  } catch (error) {
    console.log(error);
  }
};

export const postJoin = async (data) => {
  try {
    const { res } = await defaultInstance.post("/auth/join", data);

    console.log(res.data); //데이터 출력
    return res;
  } catch (error) {
    console.log(error);
  }
};
