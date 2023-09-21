import { useEffect, useState } from 'react'
import { Posts } from './components/Posts'
import { Resume } from './components/Resume'
import { SearchBar } from './components/SearchBar'
import { IPostList, IUseFormInputs } from '../../interfaces'
import { api } from '../../lib/axios'
import { FormProvider, useForm } from 'react-hook-form'

export function Home() {
  const [fetchPostList, setFetchPostList] = useState({} as IPostList)

  const isLoading = Object.keys(fetchPostList).length

  const methods = useForm<IUseFormInputs>({
    defaultValues: {
      search_input: '',
    },
  })

  const { watch } = methods

  const searchInput = watch('search_input')

  const getPostList = async (query = '') => {
    try {
      const { data } = await api.get('', {
        params: {
          q: `${query} repo:h3zord/github-blog`,
        },
      })

      setFetchPostList(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setTimeout(() => getPostList(searchInput), 2000)
  }, [searchInput])

  return (
    isLoading && (
      <>
        <Resume />
        <FormProvider {...methods}>
          <SearchBar fetchPostList={fetchPostList} />
          <Posts fetchPostList={fetchPostList} />
        </FormProvider>
      </>
    )
  )
}
