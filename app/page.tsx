import { CategorySection, Container, ICarousel } from "@/components";
import { AdvertisementCarouselItem } from "@/types";


const advertisementList:AdvertisementCarouselItem[] = [
  {
    id:0,
    imgUrl:'/big-slide-1.jpeg',
  },
  {
    id:1,
    imgUrl:'/big-slide-2.jpeg',
  },
  {
    id:2,
    imgUrl:'/big-slide-3.jpeg',
  }
]

const page =  () => {

  return (
   <Container>
      <div className="py-4">
        <ICarousel.Advertisement data={advertisementList}/>
      </div>

      <div className="py-6">
        <CategorySection/>
      </div>
   </Container>
  );
};

export default page;
