import axios from 'axios';

const API_URL = 'http://34.221.176.20/api/v1/';

class AuthService {
    login(user) {
        return axios
        .post(API_URL + 'login', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            if (response.data.data.code.access_token) {
                localStorage.setItem('user', JSON.stringify(response.data.data));
            }

            return response.data;
        });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();
