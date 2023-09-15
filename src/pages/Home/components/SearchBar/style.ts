import styled from 'styled-components'

export const SearchBarContainer = styled.section`
  width: 54rem;
  line-height: 1.6;
  margin: 8rem auto;

  .publication {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .publication h4 {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .publication span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }

  & > input {
    margin-top: 0.75rem;
    border: none;
    border-radius: 6px;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    width: 100%;
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-input']};
  }

  & > input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  & > input:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
  }
`
