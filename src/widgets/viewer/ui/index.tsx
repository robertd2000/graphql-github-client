import { getViewer } from "../api";
import { ViewerCard } from "./viewer-card";
import { ViewerRepositories } from "./viewer-repositories";

export const Viewer = () => {
  const { data, loading } = getViewer();

  return (
    <div>
      <ViewerCard data={data} loading={loading} />
      <ViewerRepositories
        repositories={data?.topRepositories.nodes}
        loading={false}
        viewerName={data?.login}
      />
    </div>
  );
};
