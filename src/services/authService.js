import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

const signup = async (formData) => {
    try {
        const res = await axios.post(`${BACKEND_URL}/users/signup`, formData);

        if (res.err) {
            throw new Error(res.err);
        };

        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export { signup }