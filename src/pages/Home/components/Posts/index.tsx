import { IPostsProps } from '../../../../interfaces'
import { PostContent, PostsContainer } from './style'

export function Posts({ fetchPostList }: IPostsProps) {
  return (
    <PostsContainer>
      {fetchPostList.items &&
        fetchPostList.items.map((post) => (
          <PostContent key={post.number}>
            <div>
              <h3>{post.title}</h3>
              <span>Há 1 dia</span>
            </div>
            <p>{post.body}</p>
          </PostContent>
        ))}
    </PostsContainer>
  )
}
