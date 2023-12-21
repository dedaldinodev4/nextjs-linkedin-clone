import React from 'react'
import { Panel } from '../../../styles';
import {
    Container,
    WriteIcon,
    CameraIcon,
    VideoCameraIcon,
    ArticleIcon,
    BodyArticle
  } from './styled';
  import { Avatar } from '../../../shared';
  
export const FeedShare = () => {
    return (
      <Panel>
        <Container>
          <div className="write">
            <Avatar src="/Me2.png" alt="Me" />
            <BodyArticle placeholder='Começar publicação' />
          </div>
          <div className="attachment">
            <button>
              <CameraIcon />
              Mídia
            </button>
            <button>
              <VideoCameraIcon />
              Evento
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