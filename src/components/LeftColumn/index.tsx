import { LoadingProfilePaneL} from '../Load/LoadingProfile';
import { ProfilePanel } from './partials/profilePanel';
import { HashtagPanel } from './partials/hashtagPanel';

import { Container } from './styled';

interface Props  {
  isLoading: boolean;
}
export const LeftColumn = ({ isLoading }: Props) => {
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