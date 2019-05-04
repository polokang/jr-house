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

// export function getAllOwners() {
//   return axios.get(`${API_BASE_URL}/owner`).then(response => {
//     const ownerList = response.data.data
//     const arr = []
//     ownerList.map(item => arr.push(item))
//     return arr
//   })
// }

export function getAllOwners() {
  return axios.get(`${API_BASE_URL}/owner`).then(response => {
    const ownerList = response.data.data
    const arr = []

    ownerList.map(item => {
      let own = {
        fullName: item.fullName,
        phone: item.phone,
        imgSrc: item.avatar,
        desc: item.desc,
        company: item.company.companyName
      }

      if (item.avatar === "" || item.avatar === undefined) {
        own["imgSrc"] =
          "https://cdn6.ep.dynamics.net/s3/rw-media/memberphotos/2bcb527a-a824-4074-a000-60bddbf0402e.jpg?mode=pad&scale=both&maxwidth=285&quality=80&anchor=middleleft&format=png"
      }
      if (item.fullName === "" || item.fullName === undefined) {
        own["fullName"] = "Mike"
      }
      if (item.phone === "" || item.phone === undefined) {
        own["phone"] = "04 24424222"
      }
      if (item.desc === "" || item.desc === undefined) {
        own["desc"] =
          "Senior Sales and Marketing Consultant, Ray White Eight Mile Plains."
      }
      if (
        item.company.companyName === "" ||
        item.company.companyName === undefined
      ) {
        own["company"] = "Ray White."
      }

      return arr.push(own)
    })

    return arr
  })
}
