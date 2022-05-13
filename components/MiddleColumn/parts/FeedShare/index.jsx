import { Panel } from '../../../styles';
import {
    Container,
    WriteIcon,
    CameraIcon,
    VideoCameraIcon,
    DocumentIcon,
    ArticleIcon,
  } from './styled';
  
export const FeedShare = () => {
    return (
      <Panel>
        <Container>
          <div className="write">
            <WriteIcon />
            <span>Começar uma publicação</span>
          </div>
          <div className="attachment">
            <button>
              <CameraIcon />
              Foto
            </button>
            <button>
              <VideoCameraIcon />
              Video
            </button>
            <button>
              <DocumentIcon />
              Documento
            </button>
            <button>
              <ArticleIcon />
              Escrever artigo
            </button>
          </div>
        </Container>
      </Panel>
    );
  };