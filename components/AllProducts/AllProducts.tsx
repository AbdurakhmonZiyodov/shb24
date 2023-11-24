import { productStore } from "@/store/ProductStore";
import { map, take } from "lodash";
import { ProductCard2 } from "../ProductCard/ProductCard";

const AllProducts = async () => {
  await productStore.getAllProduct();

  const allProduct = productStore.allProductOperation.data;

  return (
    <div className="flex flex-wrap gap-2">
      {map(allProduct, (product, key) => (
        <ProductCard2 key={key} {...product} />
      ))}
    </div>
  );
};

export default AllProducts;
