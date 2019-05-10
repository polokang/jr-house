import axios from "axios"

const API_BASE_URL = "http://localhost:3002/jr"

export function fetchAllHouse() {
  return axios.get(`${API_BASE_URL}/houses`).then(response => {
    const houseList = response.data.data
    const arr = []

    houseList.map(item => {
      let house = {
        address: item.address,
        code: item.code,
        carpark: item.carpark,
        description: item.description,
        picture: item.picture
      }

      if (item.picture === "" || item.picture === undefined) {
        house["imgSrc"] =
          "https://s3-ap-southeast-2.amazonaws.com/elasticbeanstalk-ap-southeast-2-619233410441/houses/835423.jpeg"
      }
      if (item.code === "" || item.code === undefined) {
        house["code"] = "code"
      }
      if (item.phone === "" || item.phone === undefined) {
        house["phone"] = "04 24424222"
      }
      if (item.description === "" || item.descripte === undefined) {
        house["desc"] =
          "Senior Sales and Marketing Consultant, Ray White Eight Mile Plains."
      }

      return arr.push(house)
    })

    return arr
  })
}

export function addHouse(House, file) {
  return axios
    .post(`${API_BASE_URL}/houses`, {
      House
    })
    .then(response => {
      console.log("response:", response)
      const afterAddId = response.data.data._id
      let data = new FormData()
      data.append("filepath", file, file.fileName)
      return axios
        .put(`${API_BASE_URL}/houses/${afterAddId}/housePicture`, data, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`
          }
        })
        .then(response => {
          const house = response.data.picture
          return { house }
        })
    })
}
