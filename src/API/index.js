import axios from "axios";

export const SendEmail = async ({ name, email, message, setSend }) => {
  try {
    const data = { name, email, message, setSend };
    let res = await axios.post(`http://localhost:5000/send`, data);

    if (res) {
      setSend(res.data); //si existe la respuetsa traeme la data
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};
