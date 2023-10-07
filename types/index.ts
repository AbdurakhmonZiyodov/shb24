export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface AdvertisementCarouselItem {
  id:number;
  imgUrl:string;
}
export interface AdvertisementCarouselProps {
  data:AdvertisementCarouselItem[];
}