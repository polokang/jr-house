import axios from "axios"

const API_BASE_URL = "http://localhost:3002/jr"

export function addOwner(Owner, file) {
  return axios
    .post(`${API_BASE_URL}/owner`, {
      Owner
    })
    .then(response => {
      const afterAddId = response.data.data._id
      let data = new FormData()
      data.append("filepath", file, file.fileName)
      return axios
        .put(`${API_BASE_URL}/owner/${afterAddId}/avatar`, data, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`
          }
        })
        .then(response => {
          const avatar = response.data.avatar
          return { avatar }
        })
    })
}
