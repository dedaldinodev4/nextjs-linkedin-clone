import { Panel } from '../styles';
import { Skeleton } from '../styles';
import { ContainerFeedPost } from './styled';

export const LoadingFeedPost = () => {
  return (
    <ContainerFeedPost>
      <Panel className="no-shadow">
        <header>
          <Skeleton className="avatar-skeleton" />
          <div className="column">
            <Skeleton className="row-skeleton" />
            <Skeleton className="row-skeleton" />
          </div>
        </header>
        <span>
          <Skeleton className="row-skeleton" />
          <Skeleton className="row-skeleton" />
        </span>
      </Panel>
    </ContainerFeedPost>
  );
};