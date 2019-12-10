import httpRequest from './instance'

// HTTP工具类
export default class Http {
    static request = httpRequest;
    // 请求方式
    static request(config) {
        return this.request(config)
    }

    static get(url, data) {
        return this.request.get(url, data)
    }

    static head(url, data) {
        return this.request.head(url, data)
    }

    static put(url, data) {
        return this.request.put(url, data)
    }

    static post(url, data) {
        return this.request.post(url, data)
    }

    static patch(url, data) {
        return this.request.patch(url, data)
    }

    static delete(url, data) {
        return this.request.delete(url, data)
    }
}
