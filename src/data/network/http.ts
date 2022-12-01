import {BASE_URL} from 'config/index';
import axios, {AxiosInstance, AxiosResponse} from 'axios';

export interface HttpManager {
  get(url: string, params?: object | undefined): Promise<any>;
  post(url: string, body: object): Promise<any>;
}

export class AxiosHttpManager implements HttpManager {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    this.http.interceptors.response.use(this.handleResponse);
  }

  get(url: string, params?: object | undefined): Promise<AxiosResponse> {
    return this.http.get(url, {params});
  }

  post(url: string, body: object): Promise<any> {
    return this.http.post(url, body);
  }

  private handleResponse = async (response: AxiosResponse) => {
    return response.data;
  };

  //   private handleRequest = async (config: AxiosRequestConfig) => {
  //     config.
  //   };
}
