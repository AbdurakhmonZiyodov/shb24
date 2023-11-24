import $api from "@/$api";
import { ProductType } from "@/types";
import { Operation } from "@/utils/Operation";
import { makeAutoObservable } from "mobx";

export default class ProductStore {
  allProductOperation = new Operation<ProductType[]>([]);

  constructor() {
    makeAutoObservable(this);
  }

  getAllProduct = async () => {
    await this.allProductOperation.run($api.getAllProducts);
  };
}

export const productStore = new ProductStore();
