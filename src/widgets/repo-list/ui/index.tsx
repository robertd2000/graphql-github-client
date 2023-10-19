import { useUserRepoList } from "../model";
import { RepoCardList } from "../../../entities/repo-card-list";
import { RepositoryCard } from "../../../entities/repository-card";
import { DotSeparator } from "../../../shared/ui/dot-separator";
import { StarRepoButton } from "../../../features/star-repo";
import { RepositoryTypeBadge } from "../../../shared/ui/repo-type";
import { RepositoryType } from "../../../shared/types";
import { getUserRepoList } from "../api";
import { SimplePagination } from "../../../shared/ui/pagination-simple";

export const UserRepoList = () => {
  const { setPage, ...config } = useUserRepoList();
  const { data, pageInfo, loading } = getUserRepoList(config);

  return (
    <>
      <RepoCardList loading={loading}>
        {data?.map((repo) => (
          <RepositoryCard
            repository={repo}
            key={repo.id}
            title={
              <RepositoryCard.Title>
                <RepositoryCard.NameShort />
                <RepositoryTypeBadge
                  isPrivate={(repo as RepositoryType).isPrivate}
                />
              </RepositoryCard.Title>
            }
            content={
              <RepositoryCard.Content>
                <RepositoryCard.Description />
                <RepositoryCard.Topics />
              </RepositoryCard.Content>
            }
            footer={
              <>
                {repo.primaryLanguage && <DotSeparator />}
                {repo.stargazerCount ? (
                  <>
                    {" "}
                    <RepositoryCard.StargazersCount />
                    <DotSeparator />{" "}
                  </>
                ) : null}

                <RepositoryCard.Updated />
              </>
            }
            action={
              <StarRepoButton
                id={repo.id}
                viewerHasStarred={repo.viewerHasStarred}
              />
            }
          />
        ))}
      </RepoCardList>
      <SimplePagination pageInfo={pageInfo!} setPage={setPage} />
    </>
  );
};
