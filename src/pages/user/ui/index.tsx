import { Outlet } from "react-router";
import { UserSider } from "../../../widgets/user-sider";
import { RepoHeader } from "../../../widgets/repo-header";
import { ScrollArea } from "../../../shared/components";

export const UserPage = () => {
  return (
    <div className="grid grid-flow-row-dense auto-rows-max grid-cols-3 gap-4 mx-auto max-w-screen-xl mt-4">
      <div className="col-span-1">
        <ScrollArea className="h-[80vh] w-full">
          <UserSider />
        </ScrollArea>
      </div>
      <div className="col-span-2">
        <div className="divide-x mb-2">
          <RepoHeader />
        </div>
        <ScrollArea className="h-[80vh] w-full">
          <Outlet />
        </ScrollArea>
      </div>
    </div>
  );
};

export * from "./overview";
export * from "./repositories";
export * from "./stars";
