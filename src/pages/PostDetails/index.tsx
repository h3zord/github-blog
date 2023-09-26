import { useEffect, useState } from 'react'
import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'
import { useParams } from 'react-router-dom'
import { IPostContent } from '../../interfaces'
import { Loader } from '../../components/Loading'

export function PostDetails() {
  const [fetchPostContent, setFetchPostContent] = useState({} as IPostContent)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    const getPostContent = async () => {
      setIsLoading(true)

      try {
        const data = await fetch(
          `https://api.github.com/repos/h3zord/github-blog/issues/${id}`,
        ).then((response) => response.json())

        setFetchPostContent(data)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.error(error)
      }
    }

    getPostContent()
  }, [id])

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <PostInfo fetchPostContent={fetchPostContent} />
      <PostContent fetchPostContent={fetchPostContent} />
    </>
  )
}
