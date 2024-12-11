import api from './api';

const signup = async (formData) => {
    try {
        const res = await api.post('/auth/signup', formData);
        if (res.data.error) {
            throw new Error(res.data.error);
        }
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const signin = async (user) => {
    try {
        const res = await api.post('/auth/signin', user);
        if (res.data.error) {
            throw new Error(res.data.error);
        }
        if (res.data.token) {
            localStorage.setItem('token', res.data.token);
            const user = JSON.parse(atob(res.data.token.split('.')[1]));
            return user;
        }
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const signToken = async (userData) => {
    try {
        const res = await api.post('/sign-token', userData);
        if (res.data.error) {
            throw new Error(res.data.error);
        }
        return res.data.token;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const verifyToken = async (token) => {
    try {
        const res = await api.post('/verify-token', null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (res.data.error) {
            throw new Error(res.data.error);
        }
        return res.data.user;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const getUser = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const user = JSON.parse(atob(token.split('.')[1]));
    return user;
};

const signout = () => {
    localStorage.removeItem('token');
};

export {
    signup,
    signin,
    signToken,
    verifyToken,
    getUser,
    signout,
};
