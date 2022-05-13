
import { LoadingFeedShare } from '../Load/LoadingShare';
import { LoadingFeedPost } from '../Load/LoadingPost';
import { FeedShare } from './parts/FeedShare';
import { FeedPost } from  './parts/FeedPost';

import { Container } from './styled';

export const MiddleColumn = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingFeedShare />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
        </>
      ) : (
        <>
          <FeedShare />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </>
      )}
    </Container>
  );
};