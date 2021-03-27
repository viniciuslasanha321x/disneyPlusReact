import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

    img {
      width:220px;
      border-radius:4px;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;

        @media (min-width: 1700px) {
         width:290px;
    }

        @media (min-width: 2560px) {
         width:380px;
    }

    @media (min-width: 3440px) {
         width:400px;
    }
    }
  }
`;
