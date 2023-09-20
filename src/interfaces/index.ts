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
    updated_at: string
    number: number
  }[]
}

export interface IPostContent {
  title: string
  updated_at: string
  comments: number
  html_url: string
  body: string
  user: {
    login: string
  }
}

export interface ISearchBarProps {
  fetchPostList: IPostList
}

export interface IPostsProps {
  fetchPostList: IPostList
}

export interface IPostDetailsProps {
  fetchPostContent: IPostContent
}

export interface IUseFormInputs {
  search_input: string
}
