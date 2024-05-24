import { defaultInstance } from "../utils";

export const getConfirmId = async (data) => {
  try {
    const { res } = await defaultInstance.post("/auth/confirm", data);

    console.log(res.data); //데이터 출력
    return res;
  } catch (error) {
    console.log(error);
  }
}

export const getEmailVerify = async (data) => {
  try {
    const { res } = await defaultInstance.post("/auth/verify", data);

    console.log(res.data); //데이터 출력
    return res;
  } catch (error) {
    console.log(error);
  }
}

export const postJoin = async (data) => {
  try {
    const { res } = await defaultInstance.post("/auth/join", data);

    console.log(res.data); //데이터 출력
    return res;
  } catch (error) {
    console.log(error);
  }
};
