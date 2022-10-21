import { Panel } from '../../styles';

import { ContainerHashtag, HashtagIcon } from './styled';

const tags = [
  'Python Developer Community', 
  'Vagas de TI', 
  'React Developer - ReactJs & React Native', 
  'React.js Brasil'
];

export const HashtagPanel = () => {
  return (
    <ContainerHashtag>
      <Panel>
        <span className="title">Recentes</span>

        {tags.map((item) => (
          <span key={item} className="tag">
            <HashtagIcon />
            {item}
          </span>
        ))}
      </Panel>
    </ContainerHashtag>
  );
};
