import { createSlice } from "@reduxjs/toolkit";
import { ProductVariation } from "../hooks/useOneItem";

export interface IItem{
  itemId: number;
  currentItem: ProductVariation;
  currentPrices: ProductVariation[];
}

const initialState:IItem = {
  itemId: 0,
  currentItem: {
    _links: {
      self: [],
      collection: [],
      up: []
    },
    attributes: [],
    backordered: false,
    backorders: '',
    backorders_allowed: false,
    date_created: '',
    date_created_gmt: '',
    date_modified: '',
    date_modified_gmt: '',
    date_on_sale_from: null,
    date_on_sale_from_gmt: null,
    date_on_sale_to: null,
    date_on_sale_to_gmt: null,
    description: '',
    default_attributes: [{ name: '' }],
    dimensions: {
      length: '',
      width: '',
      height: '',
    },
    download_expiry: 0,
    download_limit: 0,
    downloadable: false,
    downloads: [],
    id: 0,
    image: {
      id: 0,
      src: '',
      name: '',
      alt: '',
      date_created: "",
      date_created_gmt: "",
      date_modified: "",
      date_modified_gmt: ""
    },
    low_stock_amount: null,
    manage_stock: false,
    menu_order: 0,
    meta_data: [],
    name: '',
    on_sale: false,
    parent_id: 0,
    permalink: '',
    price: 0,
    purchasable: false,
    regular_price: '',
    sale_price: '',
    shipping_class: '',
    shipping_class_id: 0,
    sku: '',
    status: '',
    stock_quantity: null,
    stock_status: '',
    tax_class: '',
    tax_status: '',
    virtual: false,
    weight: '',
    categories: undefined
  },
  currentPrices: [
    {
      _links: {
        self: [],
        collection: [],
        up: []
      },
      attributes: [],
      backordered: false,
      backorders: '',
      backorders_allowed: false,
      date_created: '',
      date_created_gmt: '',
      date_modified: '',
      date_modified_gmt: '',
      date_on_sale_from: null,
      date_on_sale_from_gmt: null,
      date_on_sale_to: null,
      date_on_sale_to_gmt: null,
      description: '',
      default_attributes: [{ name: '' }],
      dimensions: {
        length: '',
        width: '',
        height: '',
      },
      download_expiry: 0,
      download_limit: 0,
      downloadable: false,
      downloads: [],
      id: 0,
      image: {
        id: 0,
        src: '',
        name: '',
        alt: '',
        date_created: "",
        date_created_gmt: "",
        date_modified: "",
        date_modified_gmt: ""
      },
      low_stock_amount: null,
      manage_stock: false,
      menu_order: 0,
      meta_data: [],
      name: '',
      on_sale: false,
      parent_id: 0,
      permalink: '',
      price: 0,
      purchasable: false,
      regular_price: '',
      sale_price: '',
      shipping_class: '',
      shipping_class_id: 0,
      sku: '',
      status: '',
      stock_quantity: null,
      stock_status: '',
      tax_class: '',
      tax_status: '',
      virtual: false,
      weight: '',
      categories: undefined
    }
  ],
}

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItemId: (state, action) => {
      state.itemId = action.payload;
    },
    setCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
    setCurrentPrices: (state, action) => {
      state.currentPrices = action.payload;
    },

  },
})

export const { setItemId, setCurrentItem, setCurrentPrices } = itemSlice.actions;
export default itemSlice.reducer;