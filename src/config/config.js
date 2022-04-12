// Configuration to automatically update urls to match deployed heroku app or local development port

const apiBaseUrl =
    process.env.NODE_ENV === 'production'
        ? 'https://my-med-list-api.herokuapp.com'
        : 'http://localhost:8080';

export default apiBaseUrl;