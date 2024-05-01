import {
  CheckCircleIcon,
  MinusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { Label, Radio } from "flowbite-react";

const VoteChoices = [
  {
    title: "for",
    icon: (
      <CheckCircleIcon className="w-6 h-6 fill-green-100 stroke-green-500" />
    ),
  },
  {
    title: "against",
    icon: <XCircleIcon className="w-6 h-6 fill-red-100 stroke-red-500" />,
  },
  {
    title: "abstain",
    icon: (
      <MinusCircleIcon className="w-6 h-6 fill-be-navy-blue-100 stroke-be-navy-blue-500" />
    ),
  },
];

const DAOVoteChoices = () => {
  return (
    <fieldset className="flex flex-col gap-4 mb-4">
      <legend className="mb-4 font-bold text-be-navy-blue-700">
        Choose your vote
      </legend>
      {VoteChoices.map((choice, index) => (
        <div className="flex justify-between items-center border rounded-lg py-4 px-6 w-full">
          <Label htmlFor={choice.title} className="flex items-center gap-2">
            {choice.icon}
            <span className="font-bold text-base leading-[17.6px] text-be-navy-blue-700">
              {choice.title}
            </span>
          </Label>
          <Radio id={choice.title} name="votes" value={choice.title} />
        </div>
      ))}
    </fieldset>
  );
};

export default DAOVoteChoices;
