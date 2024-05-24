import { defaultInstance } from "../utils";

export const postVerificationCode = async (data) => {
  try {
    const { res } = await defaultInstance.post("/verify-email", data);
    console.log(res.data); //데이터 출력
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const postVerification = async (data) => {
  try {
    const { res } = await defaultInstance.post("/verification-code", data);
    console.log(res.data); //데이터 출력
    return res;
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
