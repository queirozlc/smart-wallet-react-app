import axios from "axios";

const htppClient = axios.create({
    baseURL: 'http://localhost:8080',
});

class ApiService {
    url: string = "";

    constructor(url: string) {
        this.url = url;
    }

    post(url: string, obj: {}) {

    }
}

export default ApiService;