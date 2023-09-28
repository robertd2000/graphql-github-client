import { RepoInfo } from "../../../widgets/repo-info";
import { RepoOverviewIssues } from "../../../widgets/repo-overview-issues";

export const RepoOverviewPage = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <RepoOverviewIssues />
      </div>
      <div>
        <RepoInfo />
      </div>
    </div>
  );
};
