import axios, { AxiosInstance } from "axios";

class TMDB {
  private apiKey: string;
  private axiosClient: AxiosInstance;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.axiosClient = axios.create({
      baseURL: "https://api.themoviedb.org/4",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      }
    });
  }

  public async getMoviesList(id: number): Promise<any> {
    const response = await this.axiosClient.get("/list");
    return response.data;
  }
}

