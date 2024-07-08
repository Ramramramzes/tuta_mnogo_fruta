export interface IGeneralData{
  slider: SliderData[];
  additionalInfo: ICardLinks[];
  categories: ICategories[];

}

interface SliderData{
  title: string;
  description: string;
  image: string;
}[]

interface ICardLinks {
  link: string;
  to: string;
}

interface ICategories{
  name: string;
  img: string;
  link: string;
}