import { useQuery } from 'react-query'

function TSQ() {
  // 1)
  const { isLoading, isError, error, data } = useQuery('repoData', () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
      res.json()
    )
  )
  
  // 2)
  if (isLoading) return 'Loading...'
  if (isError) return 'An error has occurred: ' + error.message
    
  // 3)
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}

export default TSQ;