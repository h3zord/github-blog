import styled from 'styled-components'

export const PostContainer = styled.article`
  width: 54rem;
  padding: 2.5rem 2rem;
  margin: 5.25rem auto;
  line-height: 1.6;
  color: ${(props) => props.theme['base-text']};

  a {
    color: ${(props) => props.theme.blue};
  }

  p {
    margin-bottom: 20px;
  }

  h1 {
    margin-bottom: 35px;
  }

  h2 {
    margin-bottom: 30px;
  }

  h3 {
    margin-bottom: 25px;
  }

  img {
    width: 100%;
  }

  pre {
    background-color: ${(props) => props.theme['base-post']};
    padding: 1rem;
    margin-bottom: 20px;
  }

  ol,
  ul {
    margin-left: 30px;
    margin-bottom: 20px;
  }
`
