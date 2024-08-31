export interface ImageOne {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
}

export interface Attribute {
  id: number;
  name: string;
  option: string;
}

export interface Links {
  self: { href: string }[];
  collection: { href: string }[];
  up: { href: string }[];
}

export interface ProductVariation {
  categories: any;
  _links: Links;
  attributes: Attribute[];
  backordered: boolean;
  backorders: string;
  backorders_allowed: boolean;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  date_on_sale_from: string | null;
  date_on_sale_from_gmt: string | null;
  date_on_sale_to: string | null;
  date_on_sale_to_gmt: string | null;
  description: string;
  default_attributes: [{name: string }];
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  download_expiry: number;
  download_limit: number;
  downloadable: boolean;
  downloads: any[];
  id: number;
  image: ImageOne;
  images?: ImageOne[];
  low_stock_amount: number | null;
  manage_stock: boolean;
  menu_order: number;
  meta_data: any[];
  name: string;
  on_sale: boolean;
  parent_id: number;
  permalink: string;
  price: number;
  purchasable: boolean;
  regular_price: string;
  sale_price: string;
  shipping_class: string;
  shipping_class_id: number;
  sku: string;
  status: string;
  stock_quantity: number | null;
  stock_status: string;
  tax_class: string;
  tax_status: string;
  virtual: boolean;
  weight: string;
}
