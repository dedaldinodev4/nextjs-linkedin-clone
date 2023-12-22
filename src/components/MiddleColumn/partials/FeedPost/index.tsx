import React from 'react';

import { Panel } from '../../../styles';
import { Avatar,Separator } from '../../../shared';
import { IPost } from '../../../../dtos/post';

import {
  Container,
  Row,
  PostImage,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styled';

interface Props {
  post: IPost;
}

export const FeedPost = ({ post }: Props) => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src={`/assets/posts/${post.avatar}`} alt="Me" />
          <Column>
            <h3>{post.user}</h3>
            <h4>{post.description}</h4>
            <time>{post.time}</time>
          </Column>
        </Row>
        <Row className="content">
            <p>
              {post.content}
            </p>

        </Row>
        { post.image && 
          <PostImage
            src={`/assets/posts/${post.image}`}
            alt={post.id}
          />
        }

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">{post.likes}</span>
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
