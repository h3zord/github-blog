import { useEffect, useRef, useState } from 'react'
import { Posts } from './components/Posts'
import { Resume } from './components/Resume'
import { SearchBar } from './components/SearchBar'
import { IPostList, IUseFormInputs } from '../../interfaces'
import { api } from '../../lib/axios'
import { FormProvider, useForm } from 'react-hook-form'
import { Loader } from '../../components/Loading'
import { CanceledError } from 'axios'

export function Home() {
  const [fetchPostList, setFetchPostList] = useState({} as IPostList)
  const [isLoading, setIsLoading] = useState(true)

  const abortControllerRef = useRef(new AbortController())

  const methods = useForm<IUseFormInputs>({
    defaultValues: {
      search_input: '',
    },
  })

  const { watch } = methods

  const searchInput = watch('search_input')

  useEffect(() => {
    const getPostList = async (query = '') => {
      setIsLoading(true)

      abortControllerRef.current.abort()
      const newAbortController = new AbortController()
      abortControllerRef.current = newAbortController

      setTimeout(async () => {
        try {
          const { data } = await api.get('', {
            params: {
              q: `${query} repo:h3zord/github-blog`,
            },
            signal: newAbortController.signal,
          })

          setFetchPostList(data)
          setIsLoading(false)
        } catch (error) {
          setIsLoading(false)

          if (error instanceof CanceledError) {
            return
          }

          console.error(error)
        }
      }, 1000)
    }

    getPostList(searchInput)
  }, [searchInput])

  return (
    <>
      <Resume />
      <FormProvider {...methods}>
        <SearchBar fetchPostList={fetchPostList} />
        {isLoading ? <Loader /> : <Posts fetchPostList={fetchPostList} />}
      </FormProvider>
    </>
  )
}
