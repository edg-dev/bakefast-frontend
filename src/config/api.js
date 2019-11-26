import axios from 'axios';

export default axios.create({
    baseURL: 'https://bakefast-api.herokuapp.com/api/'
});