import styled from 'styled-components';

export const ContainerProfile = styled.div`
  > div {
    .bg-skeleton {
      width: 100%;
      height: 70px;

      filter: brightness(96%);
    }
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 175px;

      .avatar-skeleton {
        z-index: 1;
        width: 72px;
        height: 72px;
        border-radius: 50%;
        margin: -36px 0 10px;
      }

      .row-skeleton {
        height: 12px;

        &:nth-child(2) {
          width: 60%;
        }
        &:nth-child(3) {
          width: 50%;
          margin-top: 10px;
        }
      }
    }
  }
`;

export const ContainerTrend = styled.div`
  .row + .row {
    margin-top: 23px;
  }
  .row {
    display: flex;
    align-items: center;

    .square-skeleton {
      width: 48px;
      height: 48px;
      border-radius: 2px;
    }

    .column {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-left: 10px;

      .row-skeleton {
        height: 12px;

        &:nth-child(1) {
          width: 50%;
        }
        &:nth-child(2) {
          margin-top: 10px;
          width: 100%;
        }
      }
    }
  }
`;

export const ContainerFeedShare = styled.div`
  > div {
    padding: 40px 40px 40px 12px;

    display: flex;
    flex-direction: column;

    .row-skeleton {
      height: 12px;

      &:nth-child(1) {
        width: 100%;
      }
      &:nth-child(2) {
        width: 90%;
        margin-top: 20px;
      }
    }
  }
`;

export const ContainerFeedPost = styled.div`
  margin-top: 8px;

  @media (min-width: 1180px) {
    margin-top: 16px;
  }

  > div {
    padding: 15px 40px 50px 12px;

    header {
      display: flex;

      .avatar-skeleton {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        flex-shrink: 0;
      }
      .column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 15px;
        flex: 1;

        .row-skeleton {
          height: 12px;

          &:nth-child(1) {
            width: 30%;
          }
          &:nth-child(2) {
            margin-top: 10px;
            width: 55%;
          }
        }
      }
    }
    span {
      display: flex;
      flex-direction: column;
      margin-top: 30px;

      .row-skeleton {
        height: 12px;

        &:nth-child(1) {
          width: 100%;
        }
        &:nth-child(2) {
          margin-top: 10px;
          width: 90%;
        }
      }
    }
  }
`;