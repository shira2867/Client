import axios from "axios";





const api = axios.create({
  baseURL: "http://localhost:3000", 
  timeout: 5000,                    
  withCredentials: true,           
  // headers: {
  //   "Content-Type": "application/json",
  //   Authorization: "Bearer myToken"
  // },
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

export async function login(username:string, password:string) {
const { data } = await api.post('/user/login', { username, password });
  localStorage.setItem('token', data.token);
  return data.token;
}
