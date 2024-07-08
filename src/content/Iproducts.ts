export interface IProducts {
  pastila: PastilaItem[];
  sells: PastilaItem;
}

interface PastilaItem {
  name: string;
  id: number;
  type: string;
  price: {
    less: number;
    more: number;
  };
  status: string;
  images: {
    main: string;
    all: string[];
  };
  compound: string;
  bju: {
    b: number;
    j: number;
    u: number;
    kkal: number;
  };
  description: string;
  fresh: string;
}
