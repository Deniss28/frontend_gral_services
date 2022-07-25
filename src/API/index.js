import axios from "axios";

const URL = import.meta.env.VITE_URL;

export const SendEmail = async ({ name, email, message, setSend }) => {
  try {
    const datas = { name, email, message };
    let res = await axios.post(`${URL}/send`, datas);

    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    console.log(error.toJSON());
  }
};
