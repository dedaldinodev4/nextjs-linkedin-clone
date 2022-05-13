import Image from 'next/image'
import { Panel } from '../../styles';
import { ContainerProfile, ProfileImage } from './styled';

export const ProfilePanel = () => {
  return (
    <Panel>
      <ContainerProfile cover = {'cover'}>
        <div className="profile-cover">

        </div>
        <ProfileImage
          src="/Me2.png"
          alt="Avatar"
        />
        <h1>Dedaldino Daniel</h1>
        <h2>Software Developer</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">958</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">188</span>
        </div>
      </ContainerProfile>
    </Panel>
  );
};