import type { FormData } from "../interfaces/ICommon";
import Api from "../services/axios";
import userRoutes from "../services/endPoints/userEndPoints";

const signup = async ({
  name,
  phone,
  email,
  password,
  confirmPassword,
}: FormData) => {
  try {
    console.log("Entered in signup ");
    const result = await Api.post(userRoutes.signup, {
      name,
      phone,
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
export { signup, login };
