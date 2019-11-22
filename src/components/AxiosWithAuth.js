import axios from 'axios';
import { getUser } from '../actions';

export const axiosWithAuth = () => {
    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${getUser().token}`,
        },
    });
};

export default axiosWithAuth;
