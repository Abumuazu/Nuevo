import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateMovieThumb 0.5s;
  box-shadow: 0 6px 20px 0 rgb(0 0 0 / 10%);


  :hover {
    opacity: 0.8;
    box-shadow: 0 6px 20px 0 rgb(0 0 0 / 90%);
    transform: translateY(-20px)
  }

  @keyframes animateMovieThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
`;
