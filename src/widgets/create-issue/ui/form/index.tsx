import { Input } from "../../../../shared/components";
import { Textarea } from "../../../../shared/components";
import { Button } from "../../../../shared/components";

export const CreateIssueForm = () => {
  return (
    <div className="flex flex-wrap flex-col gap-4 border border-solid rounded-md p-4">
      <div className="grid w-fullitems-center gap-1.5">
        <Input type="email" id="email" placeholder="Email" className="w-full" />
      </div>
      <div className="grid w-fullitems-center gap-1.5">
        <Textarea className="h-[40vh]" placeholder="Type your message here." />
      </div>
      <div className="flex flex-wrap justify-between">
        <a
          className="text-blue-500 cursor-pointer text-md"
          href="https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"
        >
          Styling with Markdown is supported
        </a>
        <Button
          variant="outline"
          className="bg-green-600 border-none text-white text-md"
        >
          Submit new issue
        </Button>
      </div>
    </div>
  );
};
