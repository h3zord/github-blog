import styled from 'styled-components'

export const ResumeContainer = styled.section`
  width: 54rem;
  height: 13.25rem;
  border: none;
  border-radius: 10px;
  position: relative;
  margin: -5.25rem auto;
  padding: 2rem 2.5rem;
  display: flex;
  background-color: ${(props) => props.theme['base-profile']};

  & > img {
    margin-right: 2rem;
  }

  .resume-information {
    margin-top: 0.5rem;
    width: 100%;
  }

  .name-and-github {
    display: flex;
    justify-content: space-between;
  }

  .name-and-github h2 {
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
  }

  .name-and-github a {
    font-size: 0.75rem;
    font-weight: 700;
    display: flex;
    gap: 0.5rem;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }

  .name-and-github a:hover {
    text-decoration: underline;
  }

  .name-and-github a img {
    width: 14px;
    height: 14px;
    margin: 0;
  }

  .resume-information p {
    margin-top: 0.5rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-text']};
  }

  .aditional-information {
    display: inline-grid;
    grid-template-columns: auto auto auto;
    gap: 2rem;
    margin-top: 1.5rem;
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
