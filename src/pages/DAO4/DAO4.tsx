import { useState } from "react";

import Button from "../../features/common/Button/Button";
import StepperNewProposal from "../../features/StepperNewProposal/StepperNewProposal";
import Avatar from "../../features/common/Avatar/Avatar";
import CreateProposalActions from "../../features/StepperNewProposal/ CreateProposalActions/ CreateProposalActions";
import ConnectWalletProposal from "../../features/StepperNewProposal/ConnectWalletProposal/ConnectWalletProposal";
import DescribeProposition from "../../features/StepperNewProposal/DescribeProposition/DescribeProposition";
import PreviewProposal from "../../features/StepperNewProposal/PreviewProposal/PreviewProposal";
import Container from "../../features/common/Container/Container";

const DAO4 = () => {
  const [step, setStep] = useState(1);

  let stepComponent;

  switch (step) {
    case 1:
      stepComponent = <ConnectWalletProposal />;
      break;
    case 2:
      stepComponent = <DescribeProposition />;
      break;
    case 3:
      stepComponent = <CreateProposalActions />;
      break;
    case 4:
      stepComponent = <PreviewProposal />;
      break;
  }

  return (
    <Container className=" pt-16 md:pt-28">
      <div className="container h-full  rounded">
        <div className=" rounded-2xl border border-gray-200 bg-white  py-1 shadow-lg shadow-gray-200/40">
          <div className="flex lg:flex-row flex-col flex-wrap items-center bg-white gap-6 lg:justify-between border-b py-4 px-2 md:p-6 rounded-t-lg  drop-shadow-md ">
            <div className="flex flex-row lg:flex-col justify-between lg:gap-4 w-full lg:w-fit ">
              <h3 className="text-base md:text-xl  whitespace-nowrap text-be-navy-blue-700 font-bold ">
                Create new proposal
              </h3>
              <Avatar
                name="Project Name"
                imgSrc="https://via.placeholder.com/48"
                size="sm"
                background
              />
            </div>
            <StepperNewProposal step={step} />
            <div className="flex items-center gap-3 justify-end md:w-full lg:w-fit ">
              <Button
                color="white"
                label="Cancel"
                size="md"
                className="md:w-fit w-full"
              />
              {step === 1 ? (
                <></>
              ) : (
                <div className="flex gap-4">
                  <Button
                    size="md"
                    label="Back"
                    color="white"
                    onClick={() => setStep(step - 1)}
                    className="md:w-fit w-full"
                  />
                  <Button
                    size="md"
                    color="redTransparent"
                    outline
                    className="md:w-fit w-full"
                    label="Save as Draft"
                  />
                </div>
              )}
              {step === 4 && (
                <Button
                  size="md"
                  color="red"
                  label="Submit"
                  className="md:w-fit w-full"
                />
              )}
              {step === 4 ? (
                <></>
              ) : (
                <Button
                  size="md"
                  color={"red"}
                  label="Continue"
                  onClick={() => setStep(step + 1)}
                  className="md:w-fit w-full"
                />
              )}
            </div>
          </div>
          <div className="lg:mx-[200px] mx-2 md:mx-4">{stepComponent}</div>
        </div>
      </div>
    </Container>
  );
};

export default DAO4;
