import React from 'react';
import styles from './basket.module.css';
import { useNavigate } from 'react-router-dom';

export function Basket() {
  const navigate = useNavigate()
  const navHandler = (link: string) => {
    navigate(link)
  }
  return (
    <>basket
    <button onClick={() => navHandler('/')}>back</button>
    </>
  );
}
