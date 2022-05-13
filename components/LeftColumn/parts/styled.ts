import styled from 'styled-components';
import { FaHashtag } from 'react-icons/fa';

export const ContainerProfile = styled.div`
  padding-bottom: 12px;

  .profile-cover {
    width: 100%;
    height: 54px;
    background: var(--color-header);
  }
  .profile-picture {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 2px solid var(--color-white);
    box-shadow: inset 0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15)),
      0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15));

    display: flex;
    margin: -38px auto 12px;
  }
  h1 {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: var(--color-black);
  }
  h2 {
    margin-top: 4px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    color: var(--color-gray);
  }
  .separator {
    width: 100%;
    border-bottom: 1px solid var(--color-separator);
    margin: 16px 0 12px;
  }
  .key-value {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    margin: 0 12px;
    font-weight: 600;

    .key {
      color: var(--color-gray);
    }
    .value {
      color: var(--color-link);
    }
  }
`;



export const ContainerHashtag = styled.div`
  position: sticky;
  top: 64px;

  > div {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 600;
    padding: 8px 12px 16px;

    .title {
      color: var(--color-link);
      margin-bottom: 10px;
    }
    .tag {
      color: var(--color-gray);
      display: flex;
      align-items: center;
      padding: 3.5px 0;
    }
  }
`;

export const HashtagIcon = styled(FaHashtag)`
  width: 16px;
  height: 16px;
  color: var(--color-hashtag);
  margin-right: 8px;
`;

export const ProfileImage = styled.img`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 2px solid var(--color-white);
    box-shadow: inset 0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15)),
      0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15));
  
    display: flex;
    margin: -38px auto 12px;
`; 

