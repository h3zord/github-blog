import { PostInfoContainer } from './style'
import arrowUp from '../../../../assets/arrow-up.svg'
import arrowBack from '../../../../assets/arrow-back.svg'
import githubIcon from '../../../../assets/github-icon.svg'
import dateIcon from '../../../../assets/date-icon.svg'
import commentIcon from '../../../../assets/comment-icon.svg'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <div className="back-and-github-buttons">
        <button>
          <img src={arrowBack} alt="" />
          VOLTAR
        </button>
        <a
          href="https://github.com/h3zord"
          target="_blank"
          rel="noopener noreferrer"
        >
          VER NO GITHUB <img src={arrowUp} alt="" />
        </a>
      </div>
      <h1>JavaScript data types and data structures</h1>
      <div className="aditional-information">
        <div>
          <img src={githubIcon} alt="" />
          <span>cameronwll</span>
        </div>
        <div>
          <img src={dateIcon} alt="" />
          <span>Há 1 dia</span>
        </div>
        <div>
          <img src={commentIcon} alt="" />
          <span>5 comentários</span>
        </div>
      </div>
    </PostInfoContainer>
  )
}
