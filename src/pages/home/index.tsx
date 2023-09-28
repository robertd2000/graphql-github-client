import { ScrollArea } from "../../shared/components";
import { ExploreStarredRepos } from "../../widgets/explore-starred-repos";
import { Topics } from "../../widgets/topics/ui";
import { Viewer } from "../../widgets/viewer";
import { Explore } from "./explore";

const HomePage = () => {
  return (
    <div className="grid grid-flow-row-dense auto-rows-max grid-cols-4 gap-4 mx-auto max-w-screen-xl mt-4">
      <div className="col-span-1">
        <ScrollArea className="h-[90vh] w-full">
          <Viewer />
        </ScrollArea>
      </div>
      <div className="col-span-2">
        <ScrollArea className="h-[90vh] w-full">
          <Explore />
          <ExploreStarredRepos />
        </ScrollArea>
      </div>
      <div className="col-span-1">
        <ScrollArea className="h-[90vh] w-full">
          <Topics />
        </ScrollArea>
      </div>
    </div>
  );
};

export default HomePage;
