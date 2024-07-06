export interface IGeneralData{
  slider: SliderData[];
  additionalInfo: ICardLinks[];
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