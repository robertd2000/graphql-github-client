import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../../../../shared/components";
import { ViewerRepositoryType } from "../..";
import { ViewerRepoSkeleton } from "./viewer-repo-skeleton";
import { getNames } from "../../../../shared/lib/names";

export interface ViewerRepositoriesProps {
  repositories: ViewerRepositoryType[] | undefined;
  loading: boolean;
  viewerName: string | undefined;
}

export const ViewerRepositories: FC<ViewerRepositoriesProps> = ({
  repositories,
  loading,
  viewerName,
}) => {
  return (
    <Command className="rounded-lg border shadow-md mt-4">
      <CommandList>
        <CommandGroup
          heading="Top Repositories"
          className="divide-y  min-h-[450px]"
        >
          {loading ? (
            <ViewerRepoSkeleton />
          ) : (
            <>
              {repositories?.map((repo) => {
                const { repoName, ownerName } = getNames(repo.nameWithOwner);

                return (
                  <CommandItem key={repo.id} className="align-middle gap-1">
                    <div className="w-[30px] h-[30px]">
                      <img
                        className="object-contain w-30 h-30 rounded-full"
                        src={
                          repo.owner.avatarUrl ||
                          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                        }
                        alt=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link
                        to={`/repository/${ownerName}/${repoName}`}
                        className="hover:underline hover:text-blue-500"
                      >
                        {repo.nameWithOwner}
                      </Link>
                    </div>
                  </CommandItem>
                );
              })}
              <CommandItem>
                <Link
                  to={`/user/${viewerName}/repositories`}
                  className="hover:underline hover:text-blue-500"
                >
                  Show More
                </Link>
              </CommandItem>
            </>
          )}
        </CommandGroup>
      </CommandList>{" "}
    </Command>
  );
};
