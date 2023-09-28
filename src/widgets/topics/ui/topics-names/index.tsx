import { FC } from "react";
import { Link } from "react-router-dom";
import { getNames } from "../../../../shared/lib/names";

interface TopicNamesProps {
  nameWithOwner: string;
}

export const TopicNames: FC<TopicNamesProps> = ({ nameWithOwner }) => {
  const { repoName, ownerName } = getNames(nameWithOwner);

  return (
    <div className=" flex items-center">
      <Link
        to={`/repository/${ownerName}/${repoName}`}
        className="text-blue-500 hover:underline"
      >
        {repoName} / {ownerName}
      </Link>
    </div>
  );
};
