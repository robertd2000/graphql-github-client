import { IssueMenu } from "../../../entities/issue-menu";
import { CreateIssueForm } from "./form";

export const CreateIssue = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3">
        <CreateIssueForm />
      </div>
      <div className="col-span-1">
        <IssueMenu />
      </div>
    </div>
  );
};
