import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CONFIG } from "./config";

interface ApiResponse {
  success: number,
  data?: any,
  error?: string | [string]
}

class Api {
  private url: string | null = null;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  constructor() {
    this.url = CONFIG.API.URL
  }

  setAccessToken(accessToken: string) {
    this.accessToken = `Bearer ${accessToken}`;
  }

  setRefreshToken(refreshToken: string) {
    this.refreshToken = refreshToken;
  }

  getHeaders(): object {
    return {
      Authorization: this.accessToken || undefined,
    }
  }

  async get(path: string, params?: object): Promise<AxiosResponse<ApiResponse>> {
    const result = await axios.get<ApiResponse>(`${this.url}${path}`, {
      headers: this.getHeaders(),
      params
    });

    if (!result.data.success) {
      // TODO: Глобально отображать ошибки
    }

    return result;
  }

  async post(path: string, data?: object): Promise<AxiosResponse<ApiResponse>> {
    const result = await axios.post<ApiResponse>(`${this.url}${path}`, data, {
      headers: this.getHeaders(),
    });

    if (!result.data.success) {
      // TODO: Глобально отображать ошибки
    }

    return result;
  }

  async put(path: string, data?: object): Promise<AxiosResponse<ApiResponse>> {
    const result = await axios.put<ApiResponse>(`${this.url}${path}`, data, {
      headers: this.getHeaders(),
    });

    if (!result.data.success) {
      // TODO: Глобально отображать ошибки
    }

    return result;
  }

  async delete(path: string, params?: object): Promise<AxiosResponse<ApiResponse>> {
    const result = await axios.delete<ApiResponse>(`${this.url}${path}`, {
      headers: this.getHeaders(),
      params
    });

    if (!result.data.success) {
      // TODO: Глобально отображать ошибки
    }

    return result;
  }
}

const api = new Api();
export default api;
