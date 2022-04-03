// TODO update the urls to match your deployed heroku app and local development port

const apiBaseUrl =
    process.env.NODE_ENV === 'production'
        ? 'https://my-meds-list.herokuapp.com'
        : 'http://localhost:8080';

export default apiBaseUrl;