import { Panel } from '../../styles';

import { ContainerHashtag, HashtagIcon } from './styled';

const tags = ['reactjs', 'nextjs', 'node', 'react-native', 'developer'];

export const HashtagPanel = () => {
  return (
    <ContainerHashtag>
      <Panel>
        <span className="title">Interesses</span>

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
