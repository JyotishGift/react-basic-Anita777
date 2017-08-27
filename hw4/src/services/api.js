
class Api {
  constructor() {

  }
  request(url, data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      mode: 'cors',
    })
    .then(response => response.json());
  }
  requestTokenGet (token) {
    return fetch(`http://api.jyotish.gift/api/v1/auth/secret/`, {
    method: 'GET' ,
    cache: false, 
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(response => response.json()).
  then(data => {return data})
  .catch(error => console.log(error))
  }
 }


export default new Api();


