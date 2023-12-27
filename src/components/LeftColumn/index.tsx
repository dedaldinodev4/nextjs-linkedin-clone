import { LoadingProfilePaneL} from '../Load/LoadingProfile';
import { ProfilePanel } from './partials/profilePanel';
import { HashtagPanel } from './partials/hashtagPanel';

import { Container } from './styled';

<<<<<<< HEAD
interface Props  {
  isLoading: boolean;
}
export const LeftColumn = ({ isLoading }: Props) => {
=======
interface Props {
  isLoading: boolean;
}

export const LeftColumn = ({ isLoading }: Props) => {

>>>>>>> a48a49a707318a6f78a5e0426cd3ad494320fe3e
  return (
    <Container className="left-column">
      { isLoading ? (
        <LoadingProfilePaneL />
      ) : (
        <>
          <ProfilePanel />
          <HashtagPanel />
        </>
      )}
    </Container>
  );
};