import axios from "axios"; 

const setAuthenticationToken = token => {
    if(token) axios.defaults.headers.common['authenticacion-token'] = token;
    else delete axios.defaults.headers.common['authenticacion-token'];
}

export default setAuthenticationToken;
