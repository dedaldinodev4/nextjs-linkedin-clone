import { LoadingTrendingPanel } from "../Load/LoadingTrend"
import { TrendingPanel }  from './partials/trendingPanel';
import { Container } from './styled';

interface Props {
  isLoading: boolean;
} 

export const RightColumn = ({ isLoading }: Props) => {
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