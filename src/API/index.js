import axios from "axios";

const URL = import.meta.VITE_URL;
export const SendEmail = async ({ name, email, message, setSend }) => {
  try {
    const data = { name, email, message, setSend };
    let res = await axios.post(`${URL}/send`, data);

    if (res) {
      setSend(res.data); //si existe la respuesta traeme la data
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};
