import { Skeleton } from '../styles';

import { ContainerTrend } from './styled';

export const LoadingTrendingPanel = () => {
  const Row = () => (
    <div className="row">
      <Skeleton className="square-skeleton white" />

      <div className="column">
        <Skeleton className="row-skeleton white" />
        <Skeleton className="row-skeleton white" />
      </div>
    </div>
  );

  return (
    <ContainerTrend>
      <Row />
      <Row />
      <Row />
    </ContainerTrend>
  );
};