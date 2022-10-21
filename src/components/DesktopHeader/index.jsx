
import  {
    Container,
    Wrapper,
    LinkedInIcon,
    SearchInput,
    HomeIcon,
    NotificationsIcon,
    ProfileCircle,
    CaretDownIcon,
    BriefcaseIcon,
    NetworkIcon,
    MessageIcon
  } from './styled';

export const Header = () => {
    return(
        <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Início</span>
            </button>
            <button>
              <NetworkIcon />
              <span>Minha rede</span>
            </button>
            <button>
              <BriefcaseIcon />
              <span>Vagas</span>
            </button>
            <button>
              <MessageIcon />
              <span>Mensagens</span>
            </button>
            <button>
              <NotificationsIcon />
              <span>Notificações</span>
            </button>
            
            <button>
              <ProfileCircle src="/Me2.png" />
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
    ); 
}