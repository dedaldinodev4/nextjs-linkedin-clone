
import { Panel } from '../../styles';
import {
  Container,
  Avatar,
  Column,
  Row,
  Hendler,
  Button,
  BtnIcon,
  ContainerHeader,
  BtnTarget,
  InfoIcon
} from './styled';


export const TrendingPanel = () => {
  return (
    <Container>
      <Panel>
        <ContainerHeader>
          <span className="title">Adione ao seu feed</span>
          <InfoIcon />
        </ContainerHeader>

        <ul>

          <li>
            <Row>
              <Hendler>
                <Avatar src="/assets/avatar01.jpg" alt="miraveth" />
                <Column>
                  <h3>Miraveth Manuela</h3>
                  <h4>Human Resources Technician for Central Africa</h4>
                  <Button>
                    <BtnIcon /> Seguir
                  </Button>
                </Column>
              </Hendler>
            </Row>
          </li>
          <li>
            <Row>
              <Hendler>
                <Avatar src="/assets/dotnet.png" alt="Me" />
                <Column>
                  <h3>Microsoft Angola</h3>
                  <h4>Empresa . Tecnologia</h4>
                  <Button>
                    <BtnIcon /> Seguir
                  </Button>
                </Column>
              </Hendler>
            </Row>
          </li>
          <li>
            <Row>
              <Hendler>
                <Avatar src="/assets/avatar02.jpg" alt="alexadra" />
                <Column>
                  <h3>Alexandra Augusto</h3>
                  <h4>HR - RECRUITER na Sonangol Lda</h4>
                  <Button>
                    <BtnIcon /> Seguir
                  </Button>
                </Column>
              </Hendler>
            </Row>
          </li>



        </ul>
        <span className="target-text">
          Visualizar todas as recomendações
          <BtnTarget />
        </span>
      </Panel>
    </Container>
  );
}
