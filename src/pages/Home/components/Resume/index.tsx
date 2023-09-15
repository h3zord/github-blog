import { ResumeContainer } from './style'
import photoExample from '../../../../assets/photo-example.svg'
import arrowUp from '../../../../assets/arrow-up.svg'
import githubIcon from '../../../../assets/github-icon.svg'
import companyIcon from '../../../../assets/company-icon.svg'
import followersIcon from '../../../../assets/followers-icon.svg'

export function Resume() {
  return (
    <ResumeContainer>
      <img src={photoExample} alt="" />
      <div className="resume-information">
        <div className="name-and-github">
          <h2>Cameron Williamson</h2>
          <a
            href="https://github.com/h3zord"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB <img src={arrowUp} alt="" />
          </a>
        </div>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div className="aditional-information">
          <div>
            <img src={githubIcon} alt="" />
            <span>cameronwll</span>
          </div>
          <div>
            <img src={companyIcon} alt="" />
            <span>Rocketseat</span>
          </div>
          <div>
            <img src={followersIcon} alt="" />
            <span>32 seguidores</span>
          </div>
        </div>
      </div>
    </ResumeContainer>
  )
}
