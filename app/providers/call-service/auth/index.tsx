// import axios, { axiosPrivate } from "../../api/axios";
import axios from 'axios';


export async function login(username: string, password: string) {
  if (!username || !password) return;

  const data = {
    username,
    password
  };

  try {
    const response = await axios.post("https://dummyjson.com/auth/login", data);

    console.log("response", response.data);

    return response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}


export async function register_job_seeker(
  email: string,
  password: string,
  full_name: string,
  phone_number: string,
  education_level: string,
  profession: string
) {
  if (!email || !password || !full_name || !phone_number) return;

  const response = await axios.post(`auth/create-seeker/`, {
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
