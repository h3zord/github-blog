import { ResumeContainer } from './style'
import repositoryIcon from '../../../../assets/repository-icon.svg'
import arrowUp from '../../../../assets/arrow-up.svg'
import githubIcon from '../../../../assets/github-icon.svg'
import followersIcon from '../../../../assets/followers-icon.svg'
import { useEffect, useState } from 'react'
import { IGithubInfo } from '../../../../interfaces'

export function Resume() {
  const [fetchGithubInfo, setFetchGithubInfo] = useState({} as IGithubInfo)

  const getGithubInfo = async () => {
    try {
      const data = await fetch('https://api.github.com/users/h3zord').then(
        (response) => response.json(),
      )

      setFetchGithubInfo(data)
    } catch (error) {
      return console.error(error)
    }
  }

  useEffect(() => {
    getGithubInfo()
  }, [])

  return (
    <ResumeContainer>
      <img src={fetchGithubInfo.avatar_url} alt="" />
      <div className="resume-information">
        <div className="name-and-github">
          <h2>{fetchGithubInfo.name}</h2>
          <a
            href={fetchGithubInfo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB <img src={arrowUp} alt="" />
          </a>
        </div>
        <p>{fetchGithubInfo.bio}</p>
        <div className="aditional-information">
          <div>
            <img src={githubIcon} alt="" />
            <span>{fetchGithubInfo.login}</span>
          </div>
          <div>
            <img src={repositoryIcon} alt="" />
            <span>{`${fetchGithubInfo.public_repos} repositórios`}</span>
          </div>
          <div>
            <img src={followersIcon} alt="" />
            <span>{`${fetchGithubInfo.followers} seguidores`}</span>
          </div>
        </div>
      </div>
    </ResumeContainer>
  )
}
