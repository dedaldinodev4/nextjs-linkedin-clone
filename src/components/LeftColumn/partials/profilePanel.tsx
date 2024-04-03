import Image from 'next/image'
import { Panel } from '../../styles';
import { 
  ContainerProfile, 
  ProfileImage, 
  BookMarkIcon 
} from '../partials/styled';


export const ProfilePanel = () => {
  return (
    <Panel>
      <ContainerProfile>
        <div className="profile-cover">

        </div>
        <img
          className='image-profile'
          src="/assets/personal.jpeg"
          alt="Avatar"
        />
        <h1>Dedaldino Daniel</h1>
        <h2>{`A plane at the airport is safe, but that's not what planes are built for.`}</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Visualizações do perfil</span>
          <span className="value">31</span>
        </div>
        <div className="key-value">
          <span className="key">Ver todas as análises</span>
        </div>
        <div className="separator"></div>
        <div className="key-value">
          <span className="key"><BookMarkIcon /> Meus itens</span>
        </div>

      </ContainerProfile>
    </Panel>
  );
};