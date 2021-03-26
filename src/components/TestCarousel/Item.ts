import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  a {
    max-width: 90%;
    transition: 300ms;

    &:hover {
      border-radius: 4px;
      border:
      transition: 300ms;
      transform: scale(1.1);
    }

    img {
      width:200px;
      border-radius:4px;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;

        @media (min-width: 1700px) {
         width:250px;
    }

        @media (min-width: 2560px) {
         width:400px;
    }

    @media (min-width: 3100px) {
         width:600px;
    }

      &:hover {
        border: 4px solid #fff;
      }
    }
    .button{
      background-color:transparent;
    }
  }
`;
