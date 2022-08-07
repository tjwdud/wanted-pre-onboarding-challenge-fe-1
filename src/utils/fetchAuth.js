import { URL } from "constants/constants";
import axios from "axios";
export const fetchAuth = async (path, email, password) => {
  try {
    const res = await axios.post(`${URL}${path}`, {
      email: email,
      password: password,
    });
    return res;
  } catch (err) {
    alert(err.response.data.details);
  }
};
