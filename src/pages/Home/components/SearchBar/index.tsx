import { useFormContext } from 'react-hook-form'
import { ISearchBarProps } from '../../../../interfaces'
import { SearchBarContainer } from './style'

export function SearchBar({ fetchPostList }: ISearchBarProps) {
  const { register } = useFormContext()

  return (
    <SearchBarContainer>
      <div className="publication">
        <h4>Publicações</h4>
        <span>{`${fetchPostList.total_count} publicações`}</span>
      </div>
      <input {...register('search_input')} placeholder="Buscar conteúdo" />
    </SearchBarContainer>
  )
}
