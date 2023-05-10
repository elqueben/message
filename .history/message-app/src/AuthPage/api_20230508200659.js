import axios from "axios";

const loginRest = async (username, secret) => {
  return await axios.get("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": "91bc4650-40e8-4be7-b80c-4d5fac80d920"
      ,
      "User-Name": username,
      "User-Secret": secret,
    },
  });
};

const signupRest = async (username, secret, email, first_name, last_name) => {
  return await axios.post(
    "https://api.chatengine.io/users/",
    { username, secret, email, first_name, last_name },
    { headers: { "Private-Key": "b06f41db-19b4-4576-9ffe-b66549b57fcf" } }
  );
};

export { loginRest, signupRest };