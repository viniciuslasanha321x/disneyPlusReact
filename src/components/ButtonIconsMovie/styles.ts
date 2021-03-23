import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25px;

  .iconAddMovie {
    background-color: rgba(0, 0, 0, 0.6);
    width: 45px;
    height: 45px;
    margin-right: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all 300ms;
    border: 2px solid #fff;

    &:hover {
      background-color: #fff;
    }

    @media (max-width: 960px) {
      margin-right: 15px;
      width: 35px;
      height: 35px;
    }

    svg {
      width: 30px;
      height: 30px;

      &:hover {
        fill: #000;
      }
      @media (max-width: 960px) {
        width: 30px;
        height: 30px;
      }
    }
  }

  .iconGroupWatch {
    background-color: rgba(0, 0, 0, 0.6);
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all 300ms;
    border: 2px solid #fff;

    &:hover {
      background-color: #fff;
    }

    @media (max-width: 960px) {
      width: 35px;
      height: 35px;
    }

    svg {
      fill: #fff;
      width: 40px;
      height: 40px;

      &:hover {
        fill: #000;
      }

      @media (max-width: 960px) {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

interface TooltipProps {
  isVisible: boolean;
}

export const ContentTooltip = styled.div<TooltipProps>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  width: 250px;
  position: absolute;
  left: 371px;
  transform: translateX(50%);
  transform: translateY(90%);
  background: #0072d2;
  border: 1px solid rgb(151, 151, 151, 0.34);
  border-radius: 8px;
  padding: 10px 20px 10px 20px;

  @media (max-width: 960px) {
    transform: translateY(80%);
    left: 243px;
  }

  .tooltip__Text {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
