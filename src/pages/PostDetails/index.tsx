import { useEffect, useState } from 'react'
import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'
import { useParams } from 'react-router-dom'
import { IPostContent } from '../../interfaces'

export function PostDetails() {
  const [fetchPostContent, setFetchPostContent] = useState({} as IPostContent)

  const isLoading = Object.keys(fetchPostContent).length

  const { id } = useParams()

  useEffect(() => {
    const getPostContent = async () => {
      try {
        const data = await fetch(
          `https://api.github.com/repos/h3zord/github-blog/issues/${id}`,
        ).then((response) => response.json())

        setFetchPostContent(data)
      } catch (error) {
        return console.error(error)
      }
    }

    getPostContent()
  }, [id])

  return (
    isLoading && (
      <>
        <PostInfo fetchPostContent={fetchPostContent} />
        <PostContent fetchPostContent={fetchPostContent} />
      </>
    )
  )
}
