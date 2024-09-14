import { motion } from 'framer-motion';
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const LayoutBase = ({children, mainPage}: {children: React.ReactNode, mainPage?: boolean}) => {
  return(
    mainPage ?
      <motion.div
      initial={{ scale: 0.97, opacity: 0 }}
      animate={{ scale: 1 , opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }} >
      <Header/>
        {children}
      <Footer/>
    </motion.div>
    :
    <>
      <Header/>
        {children}
      <Footer/>
    </>
  )
}