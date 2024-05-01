import React, { FC, useState } from "react";
import { RangeSlider } from "flowbite-react";

import ToggleSwitch from "../common/ToggleSwitch/ToggleSwitch";
import Dropdown from "../common/Dropdown/Dropdown";
import Button from "../common/Button/Button";
import TextInput from "../common/TextInput/TextInput";
import BorderContainer from "../common/BorderContainer/BorderContainer";
import Avatar from "../common/Avatar/Avatar";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

type TransferTokensProps = {
  disabledAction: boolean;
};

const TransferTokens: FC<TransferTokensProps> = ({ disabledAction }) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [isHideDustTokensToggled, setIsHideDustTokensToggled] = useState(false);
  const [isContributorRewardsToggled, setIsContributorRewardsToggled] =
    useState(false);

  const disabledStyle = {
    color: disabledAction ? "#C8CCD2" : "",
  };

  const handleContributorRewardsToggled = () => {
    setIsContributorRewardsToggled(!isContributorRewardsToggled);
  };

  const handleHideDustTokensToggled = () => {
    setIsHideDustTokensToggled(!isHideDustTokensToggled);
  };

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <div className="space-y-9" style={disabledStyle}>
      <div className="space-y-9">
        <TextInput
          disabled={disabledAction}
          label="Target wallet address..."
          placeholder="Enter the target address ..."
        />
        <div className="space-y-4">
          <h4 className="font-bold text-be-navy-blue-700" style={disabledStyle}>
            value
          </h4>
          <ToggleSwitch
            checked={isHideDustTokensToggled}
            label="Hide dust tokens?"
            disabled={disabledAction}
            onChange={handleHideDustTokensToggled}
          />
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
              <span className="text-be-navy-blue-500" style={disabledStyle}>
                Balance: {"<"} 0.01
              </span>
            </div>
            <div className="flex flex-col justify-end gap-4">
              <span
                className="text-3xl text-be-navy-blue-700 font-medium ml-auto"
                style={disabledStyle}
              >
                0
              </span>
              <span
                className="text-be-navy-blue-500 text-xs tracking-wider	uppercase"
                style={disabledStyle}
              >
                enter amount
              </span>
            </div>
          </BorderContainer>

          <div className="space-y-4">
            <ToggleSwitch
              checked={isContributorRewardsToggled}
              disabled={disabledAction}
              onChange={handleContributorRewardsToggled}
              label="Contributor Rewwards"
              labelWeight="bold"
            />
            <p
              className="font-medium text-base text-be-navy-blue-500"
              style={disabledStyle}
            >
              Reward those that made this proposal possible. Contributor will
              split 1% of the transfer amount.
            </p>

            {isContributorRewardsToggled && (
              <>
                <BorderContainer className="flex flex-col gap-3">
                  <span className="text-center text-xl font-semibold text-gray-300">
                    {sliderValue}% (0 JSM)
                  </span>
                  <RangeSlider
                    className="range-slider w-full"
                    max={10}
                    sizing="lg"
                    onChange={handleSlider}
                    disabled={disabledAction}
                  />
                  <div className="flex justify-between text-base font-medium text-be-navy-blue-500">
                    <span>{sliderValue / 100}%</span>
                    <span>10</span>
                  </div>
                </BorderContainer>
                <Button
                  color="white"
                  label="Add Recipient"
                  className="w-full"
                  disabled={disabledAction}
                />
              </>
            )}
            <BorderContainer className="flex justify-center">
              <div className="flex flex-col justify-center items-center gap-4">
                <span
                  className="text-xs tracking-widest	 text-be-navy-blue-700 font-medium uppercase"
                  style={disabledStyle}
                >
                  Transferring
                </span>
                <span
                  className="text-be-navy-blue-700 font-bold text-3xl"
                  style={disabledStyle}
                >
                  0 JSM (~0 USD)
                </span>
                <div className="flex gap-4 items-center">
                  <Avatar
                    name="Project Name"
                    imgSrc="https://via.placeholder.com/48"
                    size="md"
                    disabled={disabledAction}
                    background
                  />
                  <ArrowRightIcon
                    className=" h-6 w-6 text-be-navy-blue-700 "
                    style={disabledStyle}
                  />
                  <Avatar
                    name=""
                    imgSrc="https://via.placeholder.com/48"
                    size="md"
                  />
                </div>
              </div>
            </BorderContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferTokens;
