import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    accept: "application/json",
  },
});
const sheets = {
    getUsers:()=>api.get("users"),
    getTodos:() => api.get("todos/"),
    getPosts:() => api.get("posts/")
 
}

export default sheets;
