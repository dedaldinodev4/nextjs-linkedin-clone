import React from 'react'
import { Panel } from '../../../styles';
import {
    Container,
    MidiaIcon,
    EventIcon,
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
              <MidiaIcon />
              Mídia
            </button>
            <button>
              <EventIcon />
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