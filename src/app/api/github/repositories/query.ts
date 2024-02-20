import { octokit } from '@/app/lib/octokit'
import { ResponseRepositoriesType, toRepositoryType } from './mapper'

export async function FetchRepositories() {
  const response = await octokit.graphql<ResponseRepositoriesType>(`
      query {
        user(login:"MatheusMessias-jf") {
          pinnedItems(first: 2) {
            nodes{
              ... on Repository {
                name
                url
                description
                defaultBranchRef {
                  id
                  name
                }
              }
            }
          }
        }
      }
  `)

  return toRepositoryType(response)
}
