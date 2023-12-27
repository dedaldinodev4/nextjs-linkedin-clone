import styled from 'styled-components';
import { FaHashtag, FaPeopleCarry, FaPeopleArrows  } from 'react-icons/fa';
import { BsBookmarkFill } from 'react-icons/bs'
import { FaUsers, FaCalendar } from 'react-icons/fa'

export const ContainerProfile = styled.div`
  padding-bottom: 12px;

  .profile-cover {
    width: 100%;
    height: 54px;
    background: url('/cover.jpg') no-repeat scroll center center;
    background-size: cover;
    border-radius: 5px 5px 0 0;
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
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 500;
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
    font-weight: 700;
    cursor: pointer;

    .key {
      color: var(--color-gray);
      margin-bottom: 5px;
    }
    .value {
      color: var(--color-link);
    }

    &:hover {
      background: #BFBFBF;
    }
  }
  .key-note {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    margin: 5px 12px;
    font-weight: bold;

    .key {
      color: var(--color-black);
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
      color: var(--color-gray);
      margin-bottom: 10px;
      font-weight: 600;
    }

    .title-group {
      color: var(--color-linkedin);
      margin-bottom: 10px;
      margin-top: 20px;
      font-weight: 700;
    }

    .tag {
      color: var(--color-gray);
      display: flex;
      align-items: center;
      padding: 3.5px 0;
      cursor: pointer;

      &:hover {
        background: var(--color-icons);
      }
    }
  }
`;

export const HashtagIcon = styled(FaUsers)`
  width: 16px;
  height: 16px;
  color: var(--color-hashtag);
  margin-right: 8px;
`;

export const EventTagIcon = styled(FaCalendar)`
  width: 16px;
  height: 16px;
  color: var(--color-hashtag);
  margin-right: 8px;
`;

export const BookMarkIcon = styled(BsBookmarkFill)`
  width: 12px;
  height: 12px;
  align-items: center;
  color: var(--color-black);
  margin-top: 4px;
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

