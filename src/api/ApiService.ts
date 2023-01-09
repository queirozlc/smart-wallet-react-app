import axios from "axios";

const httpClient = axios.create({
    baseURL: 'http://localhost:8080',
});

class ApiService {
    url: string = "";

    constructor(url: string) {
        this.url = url;
    }

    post(url: string, obj: Object) {
        const requestUrl = `${this.url}${url}`;
        return httpClient.post(requestUrl, obj);
    }

    put(url: string, obj: Object) {
        const requestUrl = `${this.url}${url}`;
        return httpClient.put(requestUrl, obj);
    }

    delete(url: string) {
        const requestUrl = `${this.url}${url}`;
        return httpClient.delete(requestUrl);
    }

    get(url: string) {
        const requestUrl = `${this.url}${url}`;
        return httpClient.get(requestUrl);
    }
}

export default ApiService;