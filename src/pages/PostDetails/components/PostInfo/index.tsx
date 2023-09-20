import { Link } from 'react-router-dom'
import { PostInfoContainer } from './style'
import arrowUp from '../../../../assets/arrow-up.svg'
import arrowBack from '../../../../assets/arrow-back.svg'
import githubIcon from '../../../../assets/github-icon.svg'
import dateIcon from '../../../../assets/date-icon.svg'
import commentIcon from '../../../../assets/comment-icon.svg'
import { IPostDetailsProps } from '../../../../interfaces'
import { formatDistanceStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function PostInfo({ fetchPostContent }: IPostDetailsProps) {
  return (
    <PostInfoContainer>
      <div className="back-and-github-buttons">
        <Link to="/">
          <img src={arrowBack} alt="" />
          VOLTAR
        </Link>
        <a
          href={fetchPostContent.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          VER NO GITHUB <img src={arrowUp} alt="" />
        </a>
      </div>
      <h1>{fetchPostContent.title}</h1>
      <div className="aditional-information">
        <div>
          <img src={githubIcon} alt="" />
          <span>{fetchPostContent.user.login}</span>
        </div>
        <div>
          <img src={dateIcon} alt="" />
          <span>{`Há ${formatDistanceStrict(
            new Date(),
            new Date(fetchPostContent.updated_at),
            {
              locale: ptBR,
            },
          )}`}</span>
        </div>
        <div>
          <img src={commentIcon} alt="" />
          <span>{`${fetchPostContent.comments} comentários`}</span>
        </div>
      </div>
    </PostInfoContainer>
  )
}
