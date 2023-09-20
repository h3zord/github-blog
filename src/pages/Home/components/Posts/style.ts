import styled from 'styled-components'

export const PostsContainer = styled.main`
  width: 54rem;
  margin: 3rem auto 3rem auto;
  display: flex;
  row-gap: 2rem;
  justify-content: space-between;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }
`

export const PostContent = styled.article`
  border: 2px solid transparent;
  border-radius: 10px;
  line-height: 1.6;
  height: 16.25rem;
  width: 26rem;
  padding: 2rem;
  transition: 0.3s;
  background-color: ${(props) => props.theme['base-post']};

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  & > div {
    display: flex;
    justify-content: space-between;
    width: 22rem;
    height: 4rem;
  }

  h3 {
    font-size: 1.25rem;
    width: 17rem;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    margin-top: 5px;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }

  p {
    margin-top: 2rem;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${(props) => props.theme['base-text']};
  }
`
