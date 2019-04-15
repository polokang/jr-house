import axios from "axios"

const API_BASE_URL = "localhost:3002/jr/"

export function fetchAllHouse() {
  return axios.get(`${API_BASE_URL}/houses`).then(response => {
    const city = response.data.data.city
    const current = response.data.data.current
    return {}
  })
}
