import axios, { axiosPrivate } from "../../api/axios";


export async function login(username: string, password: string) {
  if (!username || !password) return;

  const data = {
    username,
    password
  };

  try {
    const response = await axiosPrivate.post("/auth/login", data);

    console.log("response", response.data);

    return response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}


export async function register(
  email: string,
  password: string,
  full_name: string,
  phone_number: string,
  education_level: string,
  profession: string
) {
  if (!email || !password || !full_name || !phone_number) return;

  const response = await axios.post(`auth/create`, {
    email,
    password,
    full_name,
    phone_number,
    education_level,
    profession,
  });

  console.log("response", response.data);

  return response.data;
}
