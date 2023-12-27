
import { Container, 
    ProfileCircle, 
    SearchInput, 
    MessageIcon } from './styled';

export const MobileHeader = () => {
  return (
    <Container>
      <ProfileCircle src="/assets/avatar_url.png" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  );
};