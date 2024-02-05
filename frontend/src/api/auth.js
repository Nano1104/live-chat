import axios from "axios";
const API = "http://localhost:3001/api"

export const loginRequest = user => axios.post(`${API}/login`, user)