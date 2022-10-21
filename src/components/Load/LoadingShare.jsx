import { Panel } from '../styles';
import { Skeleton } from '../styles';

import { ContainerFeedShare } from './styled';

export const LoadingFeedShare = () => {
  return (
    <ContainerFeedShare>
      <Panel className="no-shadow">
        <Skeleton className="row-skeleton" />
        <Skeleton className="row-skeleton" />
      </Panel>
    </ContainerFeedShare>
  );
};
