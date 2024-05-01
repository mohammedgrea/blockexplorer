import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import { copyToClipboard } from "../../helpers/copyToClipboard";
import { substring } from "../../helpers/substring";

interface DAOcontactCardProps {
  title: string;
  params: Object;
  icon?: boolean;
}

const DAOcontactCard: FC<DAOcontactCardProps> = ({ icon, title, params }) => {
  return (
    <div className="w-[306px] lg:h-[187px] h-full bg-gray-50 border-[1px] border-be-navy-blue-100 rounded-lg p-4">
      <h3 className="text-blue-500">{title}</h3>
      {Object.entries(params).map(([key, param]) => (
        <div className="flex justify-between w-full" key={key}>
          <h5 className="font-semibold">{param.label}</h5>
          <div className="flex">
            <h5
              className={`text-ellipsis" + ${
                icon ? "font-semibold text-blue-500" : "text-gray-500"
              } `}
            >
              {substring(param.value)}
            </h5>
            {icon && (
              <div
                className="cursor-pointer"
                onClick={() => copyToClipboard(param.value)}
              >
                <DocumentDuplicateIcon className="text-be-navy-blue-100 hover:text-be-navy-blue-700 w-4 h-4" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DAOcontactCard;
