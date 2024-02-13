import {instance} from "management-core";

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (err) => {
        Promise.reject(err);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        console.log(error.response.data)
        console.log(error.response.status)
        return Promise.reject(error);
    }
);