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

export interface CategoryItemPageProps {
  params: {
        id: string;
    }
}

export interface CategoryItemProps {
  id?:string | number;
}

export enum ModalOption {
  none,
  basket  
}
