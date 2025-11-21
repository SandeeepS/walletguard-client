import type { FormData } from "../interfaces/ICommon";
import Api from "../services/axios";
import userRoutes from "../services/endPoints/userEndPoints";

const signup = async ({
  name,
  phoneNumber,
  email,
  password,
  confirmPassword,
}: FormData) => {
  try {
    console.log(
      "Entered in signup ",
      name,
      phoneNumber,
      email,
      password,
      confirmPassword
    );
    const result = await Api.post(userRoutes.signup, {
      name,
      phoneNumber,
      email,
      password,
      confirmPassword,
    });
    console.log("result of api post", result);
    return result;
  } catch (error) {
    console.log(error);
    return { error };
  }
};

const login = async (email: string, password: string) => {
  try {
    console.log("entered in the login Api");
    const result = await Api.post(userRoutes.login, { email, password });
    console.log("result from the fronEnd is ", result);
    return result;
  } catch (error) {
    console.log("error from the login from the ueser.ts", error as Error);
  }
};

const deposit = async (userId: string, amount: number) => {
  try {
    console.log("calling deposit api", amount);
    const result = await Api.post(userRoutes.deposit, { userId, amount });
    console.log("deposit result", result);
    return result;
  } catch (error) {
    console.log("deposit error", error);
    return { error };
  }
};

const withdraw = async (userId: string, amount: number) => {
  try {
    console.log("calling withdraw api", { userId, amount });
    const result = await Api.post(userRoutes.withdraw, { userId, amount });
    console.log("withdraw result", result);
    return result;
  } catch (error) {
    console.log("withdraw error", error);
    return { error };
  }
};

const getBalance = async (userId: string) => {
  try {
    const result = await Api.get(userRoutes.balance, { params: { userId } });
    console.log("getBalance result", result);
    return result;
  } catch (error) {
    console.log("getBalance error", error);
    return { error };
  }
};

const getHistory = async (userId:string, page = 1, limit = 25) => {
  try {
    const result = await Api.get(userRoutes.history, {
      params: {userId, page, limit },
    });
    console.log("getHistory result", result);
    return result;
  } catch (error) {
    console.log("getHistory error", error);
    return { error };
  }
};

export { signup, login, deposit, withdraw, getBalance, getHistory };
