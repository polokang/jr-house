import axios from "axios"
const API_BASE_URL = "http://localhost:3002/jr"

export function logIn(email, password) {
  return axios
    .post(`${API_BASE_URL}/auth`, { email, password })
    .then(
      response => {
        if (response.status === 200) {
          const data = response.data.data
          const curUser = { email }
          localStorage.setItem("jwt_token", data.token)
          localStorage.setItem("curUser", JSON.stringify(curUser))
          axios.defaults.headers.common["Authorization"] = `Bearer ${
            data.token
          }`
          console.log("ok")
        }
        return response
      },
      reject => {
        console.log("reject===>>>", reject)
        return reject
      }
    )
    .catch(error => {
      console.log("error===>>>", error)
    })
}

export function logOut() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      localStorage.removeItem("jwt_token")
      localStorage.removeItem("curUser")
      resolve(null) // null means no user in local storage after log out
    }, 1000)
  })
}

export function isLoggedIn() {
  return localStorage.getItem("jwt_token")
}
