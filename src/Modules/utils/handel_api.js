import axios from "axios";
import { BaseURL , StatgingBaseURL} from "./constant"



export const initAxios = () => {
    axios.defaults.baseURL = process.env.BACKEND_URL;
    axios.defaults.withCredentials = true;

    axios.interceptors.response.use(
        (response) => response,
    );
};
const setAuthToken = (token) => {
    
    if (token) {
        // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        axios.defaults.headers.common["platform"] = `web`;
        axios.defaults.headers.common["Authorization"]= `Bearer ${token}`
        axios.defaults.baseURL = StatgingBaseURL;

    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};

export default setAuthToken;

