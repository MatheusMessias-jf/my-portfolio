export type ResponseRepositoriesType = {
  user: {
    pinnedItems: {
      nodes: Array<{
        name: string
        url: string
        description: string
        defaultBranchRef: {
          id: string
          name: string
        }
      }>
    }
  }
}

export interface RepositoryType {
  name: string
  url: string
  description: string
  imageUrl: string
}

export function toRepositoryType({
  user,
}: ResponseRepositoriesType): RepositoryType[] {
  return user.pinnedItems.nodes.map((repositorie) => {
    return {
      name: repositorie.name,
      url: repositorie.url,
      description: repositorie.description,
      imageUrl: `https://raw.githubusercontent.com/MatheusMessias-jf/${repositorie.name}/${repositorie.defaultBranchRef.name}/public/project-image.png`,
    }
  })
}
