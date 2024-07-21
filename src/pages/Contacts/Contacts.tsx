import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ContactsContent } from '../../components/ContactsContent';

export function Contacts() {
  const navigate = useNavigate()
  const navHandler = (link: string) => {
    navigate(link)
  }
  return (
    <>
      <Header />
      <ContactsContent />
      <Footer />
    </>
  );
}
