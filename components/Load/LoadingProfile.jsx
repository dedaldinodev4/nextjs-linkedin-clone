import { Panel } from '../styles';
import { Skeleton } from '../styles';

import { ContainerProfile } from './styled';

export const LoadingProfilePaneL = () => {
  return (
    <ContainerProfile>
      <Panel className="no-shadow">
        <Skeleton className="bg-skeleton" />
        <span>
          <Skeleton className="avatar-skeleton" />
          <Skeleton className="row-skeleton" />
          <Skeleton className="row-skeleton" />
        </span>
      </Panel>
    </ContainerProfile>
  );
};