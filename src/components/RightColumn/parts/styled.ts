import styled from 'styled-components';
import { FaPlus, FaArrowRight } from 'react-icons/fa'

export const Container = styled.div`
  &:nth-child(2) {
    position: sticky;
    top: 64px;
  }

  > div {
    padding: 12px;

    .title {
      font-size: 16px;
      font-weight: 600;
    }

    .target-text {
      font-size: 14px;
      font-weight: 500;
      color: var(--color-gray);
      margin-top: 20px;

      &:hover {
        cursor: pointer;
        color: var(--color-black);
      }
    }

    ul {
      list-style: none;
      margin-top: 12px;

      li {
        display: flex;
        align-items: center;

        .bullet {
          display: inline-flex;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-link);
        }
        .news {
          display: flex;
          flex-direction: column;
          margin-left: 10px;

          .head {
            font-size: 14px;
            font-weight: 600;
            color: var(--color-black);
          }
          .subtext {
            font-size: 12px;
            color: var(--color-gray);
          }
        }

        & + li {
          margin-top: 10px;
        }
      }
    }
  }

  
`;

export const Row = styled.div`
  height: 100px;
`;
export const Hendler = styled.div`
  margin-top: 10px;
  display: flex;
  padding: 8px 0 4px;

  h3 {
    font-size: 14px;
    color: var(--color-black);
    cursor: pointer;
    
    &:hover {
      color: var(--color-gray);
    }
  }
  h4 {
    font-size: 12px;
    font-weight: normal;
    color: var(--color-gray);
    cursor: pointer;
    
    &:hover {
      color: var(--color-black);
    }
  }
}

`;

export const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-right: 8px;
  object-fit: cover;
  cursor: pointer;
`;

export const Column = styled.div`
  margin-left: 10px;
`;

export const Button = styled.a`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  dispaly: flex;
  position: absolute;
  padding: 4px 8px;
  border: 1px solid var(--color-gray);
  border-radius: 25px;
  background: var(--color-white);
  
  &:hover {
    background: var(--color-background);
    border: 2px solid var(--color-gray);
    cursor: pointer;
  }
`;

export const BtnIcon = styled(FaPlus)``;

export const BtnTarget = styled(FaArrowRight)`
  margin: -2px 5px;
`;