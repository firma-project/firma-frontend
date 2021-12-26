import axios from 'axios';

const HOST = process.env.REACT_APP_HOST_API;

function getUsers () {
    return axios.get(`${HOST}/users`);
}

function createUser ({
    name,
    email,
    profile,
    uid,
    sessionToken
}) {

    const body = {
        name,
        email,
        profile,
        uid,
        sessionToken,
    }
    return axios.post(`${HOST}/users`, body);
}

export {
    getUsers,
    createUser,
}