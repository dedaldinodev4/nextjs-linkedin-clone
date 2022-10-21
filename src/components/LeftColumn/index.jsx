import { LoadingProfilePaneL} from '../Load/LoadingProfile';
import { ProfilePanel } from './parts/profilePanel';
import { HashtagPanel } from './parts/hashtagPanel';

import { Container } from './styled';

export const LeftColumn = ({ isLoading }) => {
  return (
    <Container className="left-column">
      {isLoading ? (
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