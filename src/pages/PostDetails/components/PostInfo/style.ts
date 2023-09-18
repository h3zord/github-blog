import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  width: 54rem;
  height: 10.5rem;
  position: relative;
  border-radius: 10px;
  margin: -5.25rem auto;
  padding: 2rem 2.5rem;
  background-color: ${(props) => props.theme['base-profile']};

  .back-and-github-buttons {
    display: flex;
    justify-content: space-between;
  }

  .back-and-github-buttons button {
    display: flex;
    gap: 0.5rem;
    border: none;
    background-color: transparent;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 700;
    border-bottom: 1.5px solid transparent;
    cursor: pointer;
    color: ${(props) => props.theme.blue};
  }

  .back-and-github-buttons button:hover {
    border-bottom: 1.5px solid ${(props) => props.theme.blue};
  }

  .back-and-github-buttons a {
    font-size: 0.75rem;
    height: 19px;
    font-weight: 700;
    display: flex;
    gap: 0.5rem;
    text-decoration: none;
    border-bottom: 1.5px solid transparent;
    color: ${(props) => props.theme.blue};
  }

  .back-and-github-buttons a:hover {
    border-bottom: 1.5px solid ${(props) => props.theme.blue};
  }

  .back-and-github-buttons a img {
    width: 14px;
    height: 14px;
    margin: 0;
  }

  & > h1 {
    margin-top: 1.25rem;
    line-height: 1.3;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    overflow: hidden;
  }

  .aditional-information {
    display: inline-grid;
    grid-template-columns: auto auto auto;
    gap: 2rem;
    margin-top: 0.5rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .aditional-information div {
    display: flex;
    align-items: center;
  }

  .aditional-information span {
    margin-left: 0.5rem;
  }
`
