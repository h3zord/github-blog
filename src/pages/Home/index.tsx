import { useEffect, useRef, useState } from 'react'
import { Posts } from './components/Posts'
import { Resume } from './components/Resume'
import { SearchBar } from './components/SearchBar'
import { IPostList, IUseFormInputs } from '../../interfaces'
import { api } from '../../lib/axios'
import { FormProvider, useForm } from 'react-hook-form'

export function Home() {
  const [fetchPostList, setFetchPostList] = useState({} as IPostList)

  const abortControllerRef = useRef(new AbortController())

  const isLoading = Object.keys(fetchPostList).length

  const methods = useForm<IUseFormInputs>({
    defaultValues: {
      search_input: '',
    },
  })

  const { watch } = methods

  const searchInput = watch('search_input')

  useEffect(() => {
    const getPostList = async (query = '') => {
      try {
        abortControllerRef.current.abort()
        const newAbortController = new AbortController()
        abortControllerRef.current = newAbortController

        const { data } = await api.get('', {
          params: {
            q: `${query} repo:h3zord/github-blog`,
          },
          signal: newAbortController.signal,
        })

        setFetchPostList(data)
      } catch (error) {
        console.error(error)
      }
    }

    getPostList(searchInput)
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
