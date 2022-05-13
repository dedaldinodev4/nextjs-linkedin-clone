import React from 'react';

import { Panel } from '../../../styles';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styled';

export const FeedPost = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="/Me2.png" alt="Rocketseat" />
          <Column>
            <h3>Dedaldino Daniel</h3>
            <h4>Software Developer</h4>
            <time>2 sem</time>
          </Column>
        </Row>
        <Row className="content">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Totam commodi corrupti placeat voluptas soluta doloremque perferendis 
                ipsum molestiae exercitationem vitae magni corporis id laborum quos 
                numquam voluptatibus dolorem, repudiandae reprehenderit? 
            </p>

        </Row>
        <PostImage
          src="/post.png"
          alt="Rocketseat Blog"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};
