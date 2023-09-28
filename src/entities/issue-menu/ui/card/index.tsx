import { Settings } from "lucide-react";

export const IssueMenuCard = () => {
  return (
    <div className="block align-middle gap-1 pt-4">
      <div className="flex justify-between gap-2 align-middle mb-1 text-[#656d76] items-center text-md hover:text-blue-500 cursor-pointer">
        <div className="">Settings A</div>
        <Settings />
      </div>
      <p className="text-sm text-muted-foreground">Some</p>
    </div>
  );
};
