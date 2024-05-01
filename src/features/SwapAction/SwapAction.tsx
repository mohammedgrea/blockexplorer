import React, { FC } from "react";

import Dropdown from "../common/Dropdown/Dropdown";
import TextInput from "../common/TextInput/TextInput";
import Alert from "../common/Alert/Alert";
import BorderContainer from "../common/BorderContainer/BorderContainer";

import {
  ArrowDownIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

type SwapActionProps = {
  disabledAction: boolean;
};

const SwapAction: FC<SwapActionProps> = ({ disabledAction }) => {
  const disabledStyle = {
    color: disabledAction ? "#C8CCD2" : "",
  };
  return (
    <div className="space-y-9" style={disabledStyle}>
      <p>
        Want to learn more about Swaps? Check out our docs here. Don't see an
        asset here? Reach out on Discord or via the chat button to let us know
        which tokens you'd like to see supported.
      </p>
      <div className="relative space-y-1">
        <BorderContainer className="flex justify-between">
          <div className="relative flex flex-col items-start gap-6 ">
            <Dropdown
              label="Join"
              disabled={disabledAction}
              size="sm"
              color="grey"
              alignment="left"
              options={[
                [
                  {
                    value: "Joseon Mun (JSM)",
                  },
                  {
                    value: "Ethereum (ETH)",
                  },
                ],
              ]}
            />
          </div>
          <div className="flex flex-col justify-end gap-4">
            <span
              className="text-3xl text-be-navy-blue-700 font-medium ml-auto"
              style={disabledStyle}
            >
              0
            </span>
            <span className="text-be-navy-blue-500 text-xs tracking-wider	uppercase">
              enter amount
            </span>
          </div>
        </BorderContainer>
        <div className="flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 bg-white border border-be-navy-blue-300 rounded-full">
          <ArrowDownIcon className="h-4 w-4 text-be-navy-blue-700" />
        </div>
        <BorderContainer className="flex justify-between">
          <div className="relative flex flex-col items-start gap-6 ">
            <Dropdown
              label="Buy"
              disabled={disabledAction}
              size="sm"
              color="grey"
              alignment="left"
              options={[
                [
                  {
                    value: "Joseon Mun (JSM)",
                  },
                  {
                    value: "Ethereum (ETH)",
                  },
                ],
              ]}
            />
          </div>
          <div className="flex flex-col justify-end gap-4">
            <span
              className="text-3xl text-be-navy-blue-700 font-medium ml-auto"
              style={disabledStyle}
            >
              ~0.0
            </span>
            <span className="text-be-navy-blue-500 text-xs tracking-wider	uppercase">
              enter amount
            </span>
          </div>
        </BorderContainer>
      </div>
      <div className="space-y-4">
        <div
          className="flex justify-between text-base text-be-navy-blue-700"
          style={disabledStyle}
        >
          <span className="font-bold">value</span>
          <span
            className="font-medium text-be-navy-blue-500"
            style={disabledStyle}
          >
            N/A
          </span>
        </div>
        <div className="flex justify-between text-base">
          <span className="font-bold">Execution cost</span>
          <span
            className="font-medium text-be-navy-blue-500"
            style={disabledStyle}
          >
            0 (~$0.00)
          </span>
        </div>
        <div className="flex justify-between text-base">
          <span className="font-bold flex gap-2">
            Free <ExclamationCircleIcon className="h-6 w-5 text-gray-500" />{" "}
          </span>
          <span
            className="font-medium text-be-navy-blue-500"
            style={disabledStyle}
          >
            0$
          </span>
        </div>
      </div>
      <TextInput
        label="Price Checker"
        placeholder="Uniswap v3 price oracle"
        disabled={disabledAction}
        isSelect
        options={["Ac amet dolor dis", "Eu tellus tellus"]}
      />
      <TextInput label="Slippage" placeholder="2" disabled={disabledAction} />{" "}
      <Alert
        color="warning"
        icons={<ExclamationCircleIcon className="text-orange-500 w-6 h-6" />}
      >
        <span>
          Duis tempus felis commodo nunc dignissim feugiat tortor curabitur
          fermentum. Vel elementum aenean et interdum condimentum mauris massa
          eget nisl. Fermentum dignissim.
        </span>
      </Alert>
      <Alert
        color="info"
        icons={<ExclamationCircleIcon className="text-blue-500 w-6 h-6" />}
      >
        <span>
          Sed etiam nisl orci justo ultrices ipsum at nulla aenean. Elit nunc
          habitant enim gravida amet. Quam at sed sagittis id aliquam et ac
          arcu. Purus est aliquam a magna luctus. Bibendum enim pharetra et
          nulla egestas auctor nullam. Pellentesque lectus id vitae et pharetra
          convallis et nibh.
        </span>
      </Alert>
    </div>
  );
};

export default SwapAction;
