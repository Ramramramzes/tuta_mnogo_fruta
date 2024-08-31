export interface IProductWp {
  _links: {
    self: { href: string }[];
    collection: { href: string }[];
  };
  attributes: {
    id: number;
    name: string;
    options: string[];
  }[];
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
  description: string;
  default_attributes: {
    id: number;
    name: string;
    option: string;
  }[];
  id: number;
  images: {
    id: number;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    src: string;
    name: string;
    alt: string;
  }[];
  meta_data: {
    id: number;
    key: string;
    value: string;
  }[];
  name: string;
  price: string;
  slug: string;
  featured: boolean;
}