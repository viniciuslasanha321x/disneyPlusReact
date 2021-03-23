import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
`;

export const ContainerWatchList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  min-height: 100vh;

  .ContainerAvatar__add {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;
  cursor: pointer;
  }

    svg {
      width: 120px;
    }

    h3{
      margin-top:15px;
      font-weight:600;
      line-height:60px;
      font-size:24px;
    }
  }
`;
