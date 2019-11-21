import React from 'react';
import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({
        headers: {
            authorization: localStorage.getItem('token')
        }
    });
};

export default axiosWithAuth;
