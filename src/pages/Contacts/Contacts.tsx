// import { useNavigate } from 'react-router-dom';
import { ContactsContent } from '../../components/ContactsContent';
import { LayoutBase } from '../../layout/LayoutBase';

export function Contacts() {
  // const navigate = useNavigate()
  // const navHandler = (link: string) => {
  //   navigate(link)
  // }
  return (
    <LayoutBase>
      <ContactsContent />
    </LayoutBase>
  );
}
