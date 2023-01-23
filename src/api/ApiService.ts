import axios from "axios";

const httpClient = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true,
});

class ApiService {
    url: string = "";

    constructor(url: string) {
        this.url = url;
    }

    static registrarToken(token: string): void {
        if (token) {
            httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
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