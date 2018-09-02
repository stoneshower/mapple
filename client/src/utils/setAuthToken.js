import axios from 'axios';

const setAuthToken = token => {
  if(token) {
    // Apply to evry request
    axios.defaults.headers.common['Authrization'] = token;
  } else {
    // Delete Auth Header
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthToken;