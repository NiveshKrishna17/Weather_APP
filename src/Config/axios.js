import Axios from "axios";

import { BACKEND_URL } from "./index";

export const axios = Axios.create({
    baseURL: BACKEND_URL,
});

/**
 * Executes a request using the provided options, handling success and error cases.
 *
 * @param {object} options - The options for the request
 * @return {Promise} A Promise that resolves with the response data or rejects with an error
 */
export const Request = ({ ...options }) => {
    const onSuccess = (response) => response;

    const onError = (error) => {
        return error;
    };

    return axios(options).then(onSuccess).catch(onError);
};