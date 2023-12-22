
import { LoadingFeedShare } from '../Load/LoadingShare';
import { LoadingFeedPost } from '../Load/LoadingPost';
import { FeedShare } from './partials/FeedShare';
import { FeedPost } from  './partials/FeedPost';

import { Container } from './styled';
import { posts } from '../../utils/post';

interface Props {
  isLoading: boolean;
} 

export const MiddleColumn = ({ isLoading }: Props) => {
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
          {posts.map((item) =>(
            <FeedPost key={item.id} post={item} />
          ))}
          
        </>
      )}
    </Container>
  );
};