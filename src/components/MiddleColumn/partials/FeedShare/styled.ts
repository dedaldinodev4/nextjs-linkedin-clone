import styled, { css } from 'styled-components';
import { BsPencilSquare } from 'react-icons/bs';
import { BiImage, BiCalendar } from 'react-icons/bi'
import {
  AiOutlineCamera,
  AiOutlineVideoCamera,
  AiOutlineFileText,
  AiOutlineFileImage,
  AiOutlineProfile,
} from 'react-icons/ai';

export const Container = styled.div`
  color: var(--color-gray);

  .write {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;

    > span {
      margin-left: 8px;
      font-weight: 600;
    }
  }
  .attachment {
    display: none;

    @media (min-width: 1180px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      padding: 0 24px;

      button {
        display: flex;
        padding: 16px;
        height: 100%;
        align-items: center;
        background: none;
        border: none;
        color: var(--color-gray);
        font-weight: 600;

        cursor: pointer;
        &:hover,
        &:focus {
          background: rgba(0, 0, 0, 0.05);
        }
      }
    }
  }
`;


export const BodyArticle = styled.input`
  width: 100%;
  padding: 15px 15px;
  border: 1px solid var(--color-gray);
  border-radius: 35px;
  font-weight: 500;
`;
export const WriteIcon = styled(BsPencilSquare)`
  width: 20px;
  height: 20px;
`;

const iconCSS = css`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const MidiaIcon = styled(BiImage)`
  ${iconCSS}
  color: #33aada;
`;

export const EventIcon = styled(BiCalendar)`
  ${iconCSS}
  color: #C37D16;
`;


export const ArticleIcon = styled(AiOutlineProfile)`
  ${iconCSS}
  color: #E06847;
`;
