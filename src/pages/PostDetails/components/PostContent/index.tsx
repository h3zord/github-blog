import { IPostDetailsProps } from '../../../../interfaces'
import { PostContainer } from './style'
import ReactMarkdown from 'react-markdown'

export function PostContent({ fetchPostContent }: IPostDetailsProps) {
  return (
    <PostContainer>
      <ReactMarkdown>{fetchPostContent.body}</ReactMarkdown>
    </PostContainer>
  )
}
