import styles from './general.module.css';
import { Header } from '../../components/Header';
import { CarouselGeneral } from '../../components/CarouselGeneral';
import { AditionalInfo } from '../../components/AditionalInfo';
import { Bestsellers } from '../../components/Bestsellers';
export function General() {
  return (
    <>
      <Header />
      <CarouselGeneral />
      <AditionalInfo />
      <Bestsellers />
    </>
  );
}
