import { Textarea } from "flowbite-react";
import EditorTools from "../../../../assets/images/Right-Content.png";

const PropositionEditor = () => {
  return (
    <div className="rounded-lg">
      <div className="flex items-center pl-3 bg-gray-100 border border-be-navy-blue-100 text-be-navy-blue-500 h-10 rounded-t-lg">
        <img src={EditorTools} alt="" />
      </div>
      <Textarea
        id="comment"
        placeholder="Enter the title of your proposal ..."
        required
        rows={6}
        className="bg-white rounded-t-none"
      />
    </div>
  );
};

export default PropositionEditor;
