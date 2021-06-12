import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API } from "./config";

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
    this.url = API.URL
  }

  setAccessToken(accessToken: string) {
    this.accessToken = `Bearer ${accessToken}`;
  }

  setRefreshToken(refreshToken: string) {
    this.refreshToken = refreshToken;
  }

  async get(url: string, params?: object): Promise<AxiosResponse<ApiResponse>> {
    const result = await axios.get<ApiResponse>(url, {
      headers: {
        Authorization: this.accessToken || undefined,
      },
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
