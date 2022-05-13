import { LoadingTrendingPanel } from "../Load/LoadingTrend"
import { TrendingPanel }  from './parts/trendingPanel';
import { Container } from './styled';

export const RightColumn = ({ isLoading }) => {
  return (
    <Container className="right-column">
      {isLoading ? (
        <LoadingTrendingPanel />
      ) : (
        <>
          <TrendingPanel />
          {/* <TrendingPanel /> */}
        </>
      )}
    </Container>
  );
};