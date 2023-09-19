import styled from 'styled-components'

export const PostContainer = styled.article`
  width: 54rem;
  padding: 2.5rem 2rem;
  height: 422px;
  margin: 5.25rem auto;

  p {
    line-height: 1.6;
    color: ${(props) => props.theme['base-text']};
  }
`
