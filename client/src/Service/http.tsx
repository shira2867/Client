import axios from "axios";

export const httpGet=(url:string)=>{
return axios.get(url,{withCredentials:true})
.then(response=>response.data)
.catch(error=>error.response.data);

}

export const httpPost = (url: string, data: any) => {
  return axios
    .post(url, data, { withCredentials: true })
    .then(response => response.data)
    .catch(error => error.response?.data);
};
