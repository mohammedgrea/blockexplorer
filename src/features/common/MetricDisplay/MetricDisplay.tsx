import { FC, ReactNode, Fragment } from "react";

export interface MetricDisplayProps {
  metric: {
    contents: {
      label: ReactNode | string;
      value?: ReactNode;
    }[];
    icon: ReactNode;
  }[];
  columnIndex?: number;
  sizeMetric?: boolean;
  isLastCard?: boolean;
}

const MetricDisplay: FC<MetricDisplayProps> = ({
  metric,
  columnIndex,
  sizeMetric,
  isLastCard,
}) => {
  return (
    <>
      {sizeMetric ? (
        <div className="flex md:flex-row flex-col md:gap-9 gap-2">
          <div
            className={`rounded ${
              columnIndex !== undefined &&
              ((columnIndex - 1) % 4 === 0 || columnIndex % 4 === 0)
                ? "border-b-0 border-r-0"
                : ""
            } space-y-6 p-0 w-full`}
          >
            {metric.map((item, index) => (
              <div
                key={index}
                className={`hover:bg-be-navy-blue-50 rounded-lg grid grid-cols-6 items-start md:items-center justify-between p-1 gap-2`}
              >
                {item.icon && (
                  <div className="col-span-1 flex sm:justify-center">
                    {item.icon}
                  </div>
                )}

                <div
                  className={`col-span-5 grid ${
                    item.contents.length <= 1 ? "grid-cols-1" : "grid-cols-2"
                  } gap-2`}
                >
                  {item.contents.map((content, i) => (
                    <div
                      className="flex flex-col justify-between md:gap-4"
                      key={i}
                    >
                      {content.label && (
                        <span className="items-start text-be-navy-blue-300 -py-2 md:py-2 text-xs uppercase tracking-wide col-span-1">
                          {content.label}
                        </span>
                      )}
                      <span className="items-end text-black font-semibold mb-auto col-span-1">
                        {content.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
            className={`${
              isLastCard ? "hidden" : "block"
            } md:h-full md:w-[1px] h-[1px] w-full bg-grey-100`}
          />
        </div>
      ) : (
        <>
          {metric.map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 ${
                isLastCard ? "" : "border-r"
              }`}
            >
              {item.contents.map((content, i) => (
                <Fragment key={i}>
                  <span className="text-lg font-medium text-black">
                    {content.label}
                  </span>
                  <span className="text-lg font-medium text-be-navy-blue-300">
                    {content.value}
                  </span>
                </Fragment>
              ))}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default MetricDisplay;
