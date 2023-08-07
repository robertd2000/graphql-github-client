export const getNames = (nameWithOwner: string) => {
  const [repoName, ownerName] = nameWithOwner.split('/')

  return {
    repoName,
    ownerName,
  }
}
