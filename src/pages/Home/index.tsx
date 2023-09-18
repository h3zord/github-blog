import { Posts } from './components/Posts'
import { Resume } from './components/Resume'
import { SearchBar } from './components/SearchBar'

export function Home() {
  return (
    <>
      <Resume />
      <SearchBar />
      <Posts />
    </>
  )
}
