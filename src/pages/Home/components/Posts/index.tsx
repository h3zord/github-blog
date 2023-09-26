import { Link } from 'react-router-dom'
import { IPostsProps } from '../../../../interfaces'
import { PostContent, PostsContainer } from './style'
import { formatDistanceStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function Posts({ fetchPostList }: IPostsProps) {
  return (
    <PostsContainer>
      {fetchPostList.items?.map((post) => (
        <Link to={`${post.number}`} key={post.number}>
          <PostContent>
            <div>
              <h3>{post.title}</h3>
              <span>
                {`Há ${formatDistanceStrict(
                  new Date(),
                  new Date(post.updated_at),
                  {
                    locale: ptBR,
                  },
                )}`}
              </span>
            </div>
            <p>{post.body}</p>
          </PostContent>
        </Link>
      ))}
    </PostsContainer>
  )
}
