import axiosInstance from "./axiosInstance";

// GET /users
export async function getUsers() {
  try {
    const response = await axiosInstance.get("/");
    const { data } = response;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// POST /users
export async function postUser(user: { name: string; email: string }) {
  try {
    const response = await axiosInstance.post("/", user);
    const { data } = response;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// PUT /users/1
export async function putUser(id: number, user: { name: string; email: string }) {
  try {
    const response = await axiosInstance.put(`/${id}`, user);
    const { data } = response;
    console.log(data)
  } catch (error) {
    console.error(error);
  }
}

// DELETE /users/1
export async function deleteUser(id: number) {
  try {
    const response = await axiosInstance.delete(`/${id}`);
    const { data } = response;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}