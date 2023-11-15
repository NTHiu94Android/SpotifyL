import axios from 'axios';

let API_URL = 'http://14.241.235.252:8484/tvs_api_v1/api/';

function* logintUserFromApi(username, password, machine_id) {
  //console.log(API_URL);
  const urlLogin = API_URL + 'User/Login/';
  let param = {
    username: username,
    password: password,
    machine_id: machine_id,
  };
  const responses = yield axios
    .post(urlLogin, param)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log('err');
      console.log(err);
      throw err.toString();
    });
  return yield responses;
}

export const Api = {
  logintUserFromApi,
};
