import axios from "axios";
import { backendUrl } from "../Constants/Global";
// const authtoken = "Bearer " + localStorage.getItem("auth-token");

const client = axios.create({
  baseURL: backendUrl,
});
// client.defaults.headers.common["Authorization"] = authtoken;
export { client };
