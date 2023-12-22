import { LoadingProfilePaneL} from '../Load/LoadingProfile';
import { ProfilePanel } from './partials/profilePanel';
import { HashtagPanel } from './partials/hashtagPanel';

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