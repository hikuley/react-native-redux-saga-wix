import httpServiceUtil from "../utility/HttpServiceUtil";

class Api {

    httpServiceUtil = httpServiceUtil;

    getList = () => {
        return this.httpServiceUtil.fetch({
            path: "/api/Values/get",
            method: "GET",
            sendToken: false
        });
    };

    getDetail = (params) => {
        return this.httpServiceUtil.fetch({
            path: "api/Values/get",
            method: "GET",
            sendToken: false,
            params: params,
        });
    };


}

export default new Api();