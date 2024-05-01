import { FC, ReactNode } from "react";

import BeCard from "../BeCard/BeCard";
import MetricDisplay, {
  MetricDisplayProps,
} from "../MetricDisplay/MetricDisplay";

interface MetricsCardProps {
  title?: ReactNode;
  metrics: MetricDisplayProps[];
  numColumn?: number;
  gridColumn?: boolean;
  maxwidth?: string;
}

const MetricsCard: FC<MetricsCardProps> = ({
  title,
  metrics,
  gridColumn,
  maxwidth,
}) => {
  return (
    <BeCard
      title={title}
      toggleStyle={false}
      maxwidth={maxwidth}
      content={
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            gridColumn ? "lg:grid-cols-3" : "lg:grid-cols-4"
          } md:gap-9 gap-2`}
        >
          {metrics.map((item, index) => (
            <MetricDisplay
              key={index}
              metric={item.metric}
              columnIndex={index}
              sizeMetric={metrics.length > 1}
              isLastCard={index === metrics.length - 1}
            />
          ))}
        </div>
      }
    />
  );
};

export default MetricsCard;
