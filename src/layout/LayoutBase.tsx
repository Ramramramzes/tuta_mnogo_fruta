import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const LayoutBase = ({children}: {children: React.ReactNode}) => {
  return(
    <>
      <Header/>
        {children}
      <Footer/>
    </>
  )
}