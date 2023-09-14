import { HeaderContainer } from './style'
import githubLogo from '../../assets/github-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={githubLogo} alt="" />
    </HeaderContainer>
  )
}
