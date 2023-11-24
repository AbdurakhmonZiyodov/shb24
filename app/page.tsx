import $api from "@/$api";
import {
  CategorySection,
  Container,
  ICarousel,
  BaseTitle,
  ProductCard,
} from "@/components";
import AllProducts from "@/components/AllProducts";
import { productStore } from "@/store/ProductStore";
import { AdvertisementCarouselItem } from "@/types";
import { toJS } from "mobx";

const advertisementList: AdvertisementCarouselItem[] = [
  {
    id: 0,
    imgUrl: "/big-slide-1.jpeg",
  },
  {
    id: 1,
    imgUrl: "/big-slide-2.jpeg",
  },
  {
    id: 2,
    imgUrl: "/big-slide-3.jpeg",
  },
];

const page = () => {
  return (
    <Container>
      <div className="py-4">
        <ICarousel.Advertisement data={advertisementList} />
      </div>

      <div className="py-6">
        <BaseTitle className="text-my-green">ТОВАРЛАР КАТЕГОРИЯСЫ</BaseTitle>
        <CategorySection />
      </div>

      <ICarousel.Responsive title="ШЕГИРМЕЛИ ТОВАРЛАР" />
      <ICarousel.Responsive title="ОВОЩЛАР ҲӘМ МИЙУЕЛЕР" />
      <ICarousel.Responsive title="СУЎ ҲӘМ ИШИМЛИКЛЕР" />
      <ICarousel.Responsive title="ГӨШ ҲӘМ КОЛБАСА ӨНИМЛЕРИ" />

      <AllProducts />
    </Container>
  );
};

export default page;
