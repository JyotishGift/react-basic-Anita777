
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
}

export default new Api();

