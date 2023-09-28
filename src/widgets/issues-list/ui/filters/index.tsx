import { CheckCircle2, CircleDot } from "lucide-react";
import { Button } from "../../../../shared/components";
import { Link } from "react-router-dom";

export const IssuesFilters = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="flex flex-wrap gap-4 cursor-pointer">
        <div className="flex flex-wrap gap-2 text-gray-400 hover:text-gray-600 transition-colors">
          <CircleDot /> Open
        </div>
        <div className="flex flex-wrap gap-2 text-gray-400 hover:text-gray-600 transition-colors">
          <CheckCircle2 /> Closed
        </div>
      </div>
      <Link to={"new"} className="">
        <Button
          variant="outline"
          className="bg-green-600 border-none text-white"
        >
          New issue
        </Button>
      </Link>
    </div>
  );
};
