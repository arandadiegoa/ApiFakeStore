import axios from "axios";
import config from "./config.svc";

export const loginUser = async (userName, userPass) => {
  try {
    const { data } = await axios.post(`${config.apiUrl}/auth/login`, {
      username: userName,
      password: userPass,
    });
    return { error: false, data };
  } catch (error) {
    return { error: true, data: {} };
  }
};
