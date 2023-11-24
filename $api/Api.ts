import axios, { AxiosInstance } from "axios";
import { makeAutoObservable } from "mobx";
import { BASE_URL, TIME_OUT } from "./api.constants";

class Api {
  private readonly api: AxiosInstance;

  constructor() {
    makeAutoObservable(this);
    this.api = axios.create({
      baseURL: BASE_URL,
      timeout: TIME_OUT,
    });
  }

  getAllProducts = async () => await this.api.get("/products");
}

const $api = new Api();

export default $api;
