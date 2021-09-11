
import styled from 'styled-components';

export const Wrapper = styled.button`
  display: block;
  background: var(--pitch);
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--white);
  border: 0;
  font-size: var(--fontBig);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
    box-shadow: 0 6px 20px 0 rgb(0 0 0 / 18%);
  }
`;
