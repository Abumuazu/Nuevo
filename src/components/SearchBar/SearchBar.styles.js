import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--white);
  padding: 0 20px;
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--white);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--medGrey);
    box-shadow: 0 6px 20px 0 rgb(0 0 0 / 10%);

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;

  }

  input {
    font-size: var(--fontBig);
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--medGrey);

    :focus {
      outline: none;
    }

    @media screen and (max-width: 720px) {
      font-size: 28px;
    }
  }
`;
