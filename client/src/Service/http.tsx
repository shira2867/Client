import axios from "axios";



const token=localStorage.getItem("token")

const api = axios.create({
  baseURL: "http://localhost:3000", 
  timeout: 5000,                    
  withCredentials: true,           
  headers: {
    "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : "",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const httpGet=(url:string)=>{
return api.get(url)
.then(response=>response.data)
}

export const httpPost = (url: string, data: any) => {
  return api
    .post(url, data,)
    .then(response => response.data)
};
export const register = async (username: string, password: string) => {
  try {
    const { data } = await api.post('/user/register', { username, password });
    console.log("Register success:", data);
    return data;
  } catch (err: any) {
    console.error("Register failed:", err.response?.data || err.message);
    throw err;
  }
};

export async function login(username:string, password:string) {
const { data } = await api.post('/user/login', { username, password });
  localStorage.setItem('token', data.token);
  return data.token;
}

export async function logout() {
  const token = localStorage.getItem("token");
  if (!token) return;

  await api.post(
    "/user/logout",
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );

  localStorage.removeItem("token");
  console.log("Logged out, token removed from localStorage");
}
