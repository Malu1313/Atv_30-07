import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    accept: "application/json",
  },
});
const sheets = {
    getUsers:()=>api.get("posts/"),
    getTodos:() => api.get("todo/"),
    getPosts:() => api.get("posts/1")
 
}

export default api;
