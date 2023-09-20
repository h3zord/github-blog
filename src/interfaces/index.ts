export interface IGithubInfo {
  name: string
  avatar_url: string
  bio: string
  login: string
  html_url: string
  followers: number
  public_repos: number
}

export interface IPostList {
  total_count: number
  items: {
    title: string
    body: string
    update_at: Date
    number: number
  }[]
}

export interface ISearchBarProps {
  fetchPostList: IPostList
}

export interface IPostsProps {
  fetchPostList: IPostList
}

export interface IUseFormInputs {
  search_input: string
}
