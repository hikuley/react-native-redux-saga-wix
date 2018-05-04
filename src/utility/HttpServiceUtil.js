import Configuration from "../config/Configuration";

class HttpServiceUtil {

    token;

    setToken(token) {
        this.token = token;
    }

    fetch(requestOptions) {

        return new Promise((resolve, reject) => {

            const {sendToken} = requestOptions;
            let url = this._createUrl(requestOptions);
            const overriddenHeaders = requestOptions.headers || {};
            const {method} = requestOptions;
            const {params} = requestOptions;
            const {body} = requestOptions;


            const processedRequestOptions = {
                ...requestOptions,
                headers: {
                    "Content-Type": "application/json",
                    "token": (typeof sendToken === "undefined" ? this.token : (sendToken === false ? null : this.token)),
                    ...overriddenHeaders
                },
                timeout: Configuration.HTTP_TIMEOUT_MS
            };


            if (sendToken === false) {

                const extraHeaders = {
                    "platform": Configuration.PLATFORM_IOS ? "IOS" : "ANDROID",
                    "applicationVersion": Configuration.APP_VERSION,
                    "device": Configuration.DEVICE,
                    "deviceVersion": Configuration.DEVICE_VERSION,
                    "clientIp": "",
                    "msisdn": ""
                };

                processedRequestOptions.headers = {
                    ...processedRequestOptions.headers,
                    ...extraHeaders
                }
            }

            if (method.toUpperCase() === "POST" && body) {
                let reqBody = JSON.stringify(requestOptions.body);
                processedRequestOptions.body = reqBody
            }

            if (params) {
                let {params} = requestOptions;
                let parameterUrl = "?";
                for (var key in params) {
                    parameterUrl += key + "=" + params[key] + "&";
                }
                url += parameterUrl;
            }

            if (sendToken === false) {
                delete processedRequestOptions.headers.token;
            }

            fetch(url, processedRequestOptions)
                .then(res => res.json()) // gelen response text'ini json nesnesine dönüştürürüz.
                .then(res => {
                    resolve(res);
                })
                .catch((err) => {
                    // reject({
                    //     status : "error"
                    // });
                    console.log(err);
                    reject();
                });
        });
    }


    fetchImage(requestOptions) {
        return new Promise((resolve, reject) => {

            const {sendToken} = requestOptions;
            let url = this._createUrl(requestOptions);
            const overriddenHeaders = requestOptions.headers || {};
            const {method} = requestOptions;
            const {params} = requestOptions;

            const processedRequestOptions = {
                ...requestOptions,
                headers: {
                    "Content-Type": "application/json",
                    "token": (typeof sendToken === "undefined" ? this.token : (sendToken === false ? null : this.token)),
                    "platform": Configuration.PLATFORM_IOS ? "IOS" : "ANDROID",
                    "deviceId": "123",
                    ...overriddenHeaders
                },
                timeout: Configuration.HTTP_TIMEOUT_MS
            };


            if (sendToken === false) {

                const extraHeaders = {
                    "platform": Configuration.PLATFORM_IOS ? "IOS" : "ANDROID",
                    "applicationVersion": Configuration.APP_VERSION,
                    "device": Configuration.DEVICE,
                    "deviceVersion": Configuration.DEVICE_VERSION,
                    "clientIp": "",
                    "msisdn": "",
                };

                processedRequestOptions.headers = {
                    ...processedRequestOptions.headers,
                    ...extraHeaders
                }
            }

            if (method.toUpperCase() === "GET" && params) {
                let {params} = requestOptions;
                let parameterUrl = "?";
                for (var key in params) {
                    parameterUrl += key + "=" + params[key];
                }
                url += parameterUrl;
            }

            if (sendToken === false) {
                delete processedRequestOptions.headers.token;
            }

            fetch(url, processedRequestOptions)
                .then(res => res.json()) // gelen response text'ini json nesnesine dönüştürürüz.
                .then(res => {
                    let {result} = res;
                    if (result) {
                        let {File} = result;
                        let {Extention} = result;
                        if (result && File && Extention) {
                            let image = this._convertBase64(Extention, File);
                            resolve(image);
                        }
                    }
                    else {
                        resolve(null);
                    }
                })
                .catch((err) => {
                    // reject({
                    //     status : "error"
                    // });
                    console.log(err);
                    reject();
                });
        });
    }

    _convertBase64(extention, file) {
        let image = "data:image/" + extention + ";base64," + file;
        return image;
    }

    _createUrl(requestOptions) {
        let url = requestOptions.apiPath || Configuration.API_URL;
        url = requestOptions.path ? (url + requestOptions.path) : url;
        return url;
    }

}

export default new HttpServiceUtil();