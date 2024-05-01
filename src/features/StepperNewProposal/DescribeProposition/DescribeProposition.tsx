import { FileInput, Label } from "flowbite-react";
import TextInput from "../../common/TextInput/TextInput";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import PropositionEditor from "./PropositionEditor/PropositionEditor";

const DescribeProposition = () => {
  return (
    <div className="md:px-4 md:py-16 py-5 px-0 space-y-4 md:space-y-9">
      <p className="text-be-navy-blue-500">
        Give your proposal a title and a description. They will be public when
        your proposal goes live!
      </p>
      <TextInput
        label="Name"
        placeholder="Enter the title of your proposal ..."
      />
      <PropositionEditor />
      <div className="flex w-full items-center justify-center">
        <Label
          htmlFor="dropzone-file"
          className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center text-center w-[155px] h-auto pb-6 pt-5 space-y-6">
            <ArrowUpTrayIcon className="w-6 h-6 text-be-navy-blue-500" />
            <p className="mb-2 text-sm text-be-navy-blue-500">
              <span className="font-semibold text-be-navy-blue-700">
                Drag and Drop a file
              </span>{" "}
              or
            </p>
            <div className="relative">
              <div className="flex justify-center items-center bg-be-navy-blue-50 border border-be-navy-blue-100 rounded-lg p-2 text-center font-semibold h-8 w-auto text-sm text-be-navy-blue-700">
                Browse
              </div>
              <FileInput id="dropzone-file" className="absolute hidden" />
            </div>
            <span className="text-[10px] text-gray-500 text-center">
              PNG, JPG or GIF <br /> Max. File Size: 30 MB
            </span>
          </div>
        </Label>
      </div>
    </div>
  );
};

export default DescribeProposition;
