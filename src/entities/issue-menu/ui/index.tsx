import { IssueMenuCard } from "./card";

export const IssueMenu = () => {
  return (
    <div className="flex flex-wrap flex-col gap-4 divide-y pb-4">
      <IssueMenuCard />
      <IssueMenuCard />
      <IssueMenuCard />
      <IssueMenuCard />
      <IssueMenuCard />
      <div className="block align-middle gap-1 pt-4">
        <div className="flex justify-between gap-2 align-middle mb-1 items-center text-md">
          <div className="">Helpful resources</div>
        </div>
        <a
          href="https://docs.github.com/articles/github-community-guidelines"
          className="text-sm text-muted-foreground text-blue-500 cursor-pointer"
        >
          GitHub Community Guidelines
        </a>
      </div>
    </div>
  );
};
