import { CategorySection, Container, ICarousel, BaseTitle, ProductCard } from "@/components";
import { AdvertisementCarouselItem } from "@/types";


const advertisementList: AdvertisementCarouselItem[] = [
  {
    id: 0,
    imgUrl: '/big-slide-1.jpeg',
  },
  {
    id: 1,
    imgUrl: '/big-slide-2.jpeg',
  },
  {
    id: 2,
    imgUrl: '/big-slide-3.jpeg',
  }
]

const page = () => {

  return (
    <Container>
      <div className="py-4">
        <ICarousel.Advertisement data={advertisementList} />
      </div>

      <div className="py-6">
        <BaseTitle className="text-my-green">
          ТОВАРЛАР КАТЕГОРИЯСЫ
        </BaseTitle>
        <CategorySection />
      </div>

      <ICarousel.Responsive title="ШЕГИРМЕЛИ ТОВАРЛАР" />
      <ICarousel.Responsive title="ОВОЩЛАР ҲӘМ МИЙУЕЛЕР" />
      <ICarousel.Responsive title="СУЎ ҲӘМ ИШИМЛИКЛЕР" />
      <ICarousel.Responsive title="ГӨШ ҲӘМ КОЛБАСА ӨНИМЛЕРИ" />
    </Container>
  );
};

export default page;
