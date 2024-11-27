// import axios from "axios";
import { useEffect } from "react";
import { deleteUser, getUsers, postUser, putUser } from "./api/apiService";

// const api = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/users",
// });

export default function App() {

  useEffect(() => {
    // GET /users
    // api.get("/")
    //   .then((res) => res.data)
    //   .then(console.log)
    //   .catch(console.error);
    getUsers();

    // POST /users
    // api.post("/", {
    //   name: "John Doe",
    //   email: "john@doe.com",
    // })
    //   .then((res) => res.data)
    //   .then(console.log)
    //   .catch(console.error);
    postUser({
      name: "John Doe",
      email: "john@doe.com",
    });

    // PUT /users/1
    // api.put("/1", {
    //   name: "John Doe II",
    //   email: "john@doe.com",
    // })
    //   .then((res) => res.data)
    //   .then(console.log)
    //   .catch(console.error);
    putUser(1, {
      name: "John Doe II",
      email: "john@doe.com",
    });

    // DELETE /users/1
    // api.delete("/1")
    //   .then((res) => res.data)
    //   .then(console.log)
    //   .catch(console.error);
    deleteUser(1);
      
  }, []);

  return (
    <div>
      <h1>Estudo do Axios</h1>
    </div>
  )
}

