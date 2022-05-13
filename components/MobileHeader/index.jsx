
import { Container, 
    ProfileCircle, 
    SearchInput, 
    MessageIcon } from './styled';

export const MobileHeader = () => {
  return (
    <Container>
      <ProfileCircle src="https://github.com/dedaldinodev4.png" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  );
};