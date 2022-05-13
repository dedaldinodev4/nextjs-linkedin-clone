
import { Panel } from '../../styles';
import { Container } from './styled';

export const TrendingPanel = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Assuntos mais discutidos</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Nextjs vs Reactjs</span>
              <span className="subtext">há 5 d • 306 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Nodejs Serverside</span>
              <span className="subtext">há 6 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Nodejs Serverside</span>
              <span className="subtext">há 6 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Nodejs Serverside</span>
              <span className="subtext">há 6 d • 316 leitores</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Nodejs Serverside</span>
              <span className="subtext">há 6 d • 316 leitores</span>
            </span>
          </li>
         
        </ul>
      </Panel>
    </Container>
  );
}
