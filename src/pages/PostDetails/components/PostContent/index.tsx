import { IPostDetailsProps } from '../../../../interfaces'
import { PostContainer } from './style'

export function PostContent({ fetchPostContent }: IPostDetailsProps) {
  return (
    <PostContainer>
      <p>{fetchPostContent.body}</p>
    </PostContainer>
  )
}
