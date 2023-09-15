import { SearchBarContainer } from './style'

export function SearchBar() {
  return (
    <SearchBarContainer>
      <div className="publication">
        <h4>Publicações</h4>
        <span>6 publicações</span>
      </div>
      <input placeholder="Buscar conteúdo" />
    </SearchBarContainer>
  )
}
