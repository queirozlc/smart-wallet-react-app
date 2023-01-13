class LocalStorageService {

    static addItem(key: string, value: string) {
        return localStorage.setItem(key, JSON.stringify(value));
    }

    static getItem(key: string) {
        const obj = localStorage.getItem(key);
        return typeof obj === 'string' ? JSON.parse(obj) : obj;
    }

    static remove(key: string) {
        return localStorage.removeItem(key);
    }
}

export default LocalStorageService;