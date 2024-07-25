import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import './reset.css'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { General } from './pages/General/General.tsx'
import { Catalog } from './pages/Catalog/Catalog.tsx';
import { About } from './pages/About/About.tsx';
import { Delivery } from './pages/Delivery/Delivery.tsx';
import { Contacts } from './pages/Contacts/Contacts.tsx';
import { Basket } from './pages/Basket/Basket.tsx';
import { Item } from './pages/Item/Item.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<General />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/presents" element={<Catalog />} />
      <Route path="/about" element={<About />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/item" element={<Item />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)