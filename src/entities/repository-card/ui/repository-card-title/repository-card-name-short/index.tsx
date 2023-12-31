import { Link } from "react-router-dom";
import { useRepositoryCardContext } from "../../../model";

export const RepositoryCardNameShort = () => {
  const { repository } = useRepositoryCardContext();

  return (
    <>
      <Link
        to={`/repository/${repository?.owner?.login}/${repository?.name}`}
        className="text-blue-500 font-semibold break-words"
      >
        {repository?.name}
      </Link>
    </>
  );
};
