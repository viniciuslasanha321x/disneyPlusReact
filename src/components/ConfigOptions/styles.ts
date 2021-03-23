import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  border-top: 1px solid #696969;
  padding-top: 10px;
  background-color: transparent;
  outline: none;
  text-align: left;

  & + button {
    margin-top: 15px;
  }

  .Container__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header__title {
      text-transform: uppercase;
      color: #fff;
    }

    .icon {
      width: 30px;
      height: 30px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .Container__subtitle {
    color: #fff;
  }
  /* .configItems {
    display: flex;
    flex: 1;
    margin: 10px;
    border-top: 1px solid #696969;
    width: 450px;
  }

  button {
    display: flex;
    flex-direction: row;
    background-color: transparent;
    border-color: transparent;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    color: #fff;
  }

  .textIcon {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icon {
    min-height: 35px;
  }

  img {
    width: 30px;
  } */
`;
