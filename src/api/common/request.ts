import axios, { AxiosResponse } from 'axios';
import { BACKEND_URL } from '../../constants';

type postParams = {
    url: string;
    abortSignal: AbortSignal;
    data: unknown;
    params?: unknown;
};

export async function POST({ url, abortSignal, params, data }: postParams): Promise<AxiosResponse<ResponseType>> {
    return axios({
        method: 'post',
        url: url,
        baseURL: BACKEND_URL,
        params: params,
        data: data,
        signal: abortSignal,
    });
}

type getParams = {
    url: string;
    abortSignal: AbortSignal;
    params?: unknown;
};

export async function GET({ url, abortSignal, params }: getParams): Promise<AxiosResponse<ResponseType>> {
    return axios({
        method: 'get',
        url: url,
        baseURL: BACKEND_URL,
        params: params,
        signal: abortSignal,
    });
}

type putParams = {
    url: string;
    abortSignal: AbortSignal;
    data: unknown;
    params?: unknown;
};

export function PUT({ url, abortSignal, params, data }: putParams): Promise<AxiosResponse<ResponseType>> {
    return axios({
        method: 'put',
        url: url,
        baseURL: BACKEND_URL,
        params: params,
        data: data,
        signal: abortSignal,
    });
}
