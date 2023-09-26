import styled from 'styled-components'

export const LoaderContainer = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: block;
  border-top: 3px solid #fff;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  margin: 3rem auto;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
