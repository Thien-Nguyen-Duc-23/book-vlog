export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.code.access_token) {
        console.log('asw');
        return { Authorization: 'Bearer ' + user.code.access_token };
    } else {
        return {};
    }
}
