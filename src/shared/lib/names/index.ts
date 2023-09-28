export const getNames = (nameWithOwner: string) => {
  const [ownerName, repoName] = nameWithOwner.split("/");

  return {
    repoName,
    ownerName,
  };
};
