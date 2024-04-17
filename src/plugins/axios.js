import axios from "axios";

axios.defaults.baseURL = '192.168.1.2:8000/api/v1/';
axios.defaults.headers.post['Content-Type'] = 'application/json';


export default axios;