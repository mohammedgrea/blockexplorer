import React, { useState, ReactElement, Fragment } from "react";

import Button from "../../common/Button/Button";
import TransferTokens from "../../TransferTokens/TransferTokens";
import SwapAction from "../../SwapAction/SwapAction";
import CustomAction from "../../CustomAction/CustomAction";

import {
  ArrowPathIcon,
  ArrowRightIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

interface Action {
  action: ReactElement;
}

const CreateProposalActions = () => {
  const [actions, setActions] = useState<Action[]>([]);
  const [showActonButtons, setShowActionButtons] = useState(true);

  const showActionButtons = () => {
    setShowActionButtons(true);
  };

  const addElement = (action: any) => {
    const updatedActions = actions.map((actionElement) => ({
      ...actionElement,
      action: React.cloneElement(actionElement.action, {
        disabledAction: true,
      }),
    }));
    setShowActionButtons(false);
    setActions([
      ...updatedActions,
      {
        action: action,
      },
    ]);
  };

  const removeAction = (index: number): void => {
    const updatedActions = [...actions];
    updatedActions.splice(index, 1);
    setActions(updatedActions);
  };
  const editAction = (indexElement: number): void => {
    const updatedActions = actions.map((actionElement, index) => ({
      ...actionElement,
      action: React.cloneElement(actionElement.action, {
        disabledAction: index === indexElement ? false : true,
      }),
    }));
    setActions(updatedActions);
  };

  return (
    <div className="space-y-9 my-9">
      <p>
        Actions are onchain calls that will execute after a proposal passes and
        then gets executed. You can add up to 10 actions. If you choose to skip
        this step, a transfer of O ETH to you (the proposer) will be added, as
        Governor requires one executable action for the proposal to be submitted
        onchain.
      </p>
      <hr className="border-grey-100  w-full border-1 "></hr>

      <div className="space-y-9">
        {actions.map((action, index) => (
          <Fragment key={index}>
            <h3 className="text-base font-bold text-red-500">
              Action #{index + 1}
            </h3>

            {action.action}
            <div className="flex gap-2.5 justify-end ml-auto">
              <Button
                color="white"
                label="Remove action"
                onClick={() => removeAction(index)}
              />
              <Button
                color="white"
                label="Edit"
                onClick={() => editAction(index)}
              />
            </div>
            <hr className="border-grey-100  w-full border-1"></hr>
          </Fragment>
        ))}
      </div>

      {(showActonButtons || actions.length === 0) && (
        <div className="space-y-2">
          <h3 className="text-base font-bold text-red-500">
            Action #{actions.length + 1}
          </h3>
          <Button
            className="justify-start min-w-[300px]"
            color="white"
            label="Transfer tokens"
            icon={<ArrowRightIcon className="h-5 w-5 text-blue-600" />}
            onClick={() =>
              addElement(<TransferTokens disabledAction={false} />)
            }
          />
          <Button
            className="justify-start min-w-[300px]"
            color="white"
            label="Swap"
            onClick={() => addElement(<SwapAction disabledAction={false} />)}
            icon={<ArrowPathIcon className="h-5 w-5 text-blue-600" />}
          />

          <Button
            className="justify-start min-w-[300px]"
            color="white"
            label="Custom"
            icon={<PencilSquareIcon className="h-5 w-5 text-blue-600" />}
            onClick={() => addElement(<CustomAction disabledAction={false} />)}
          />
        </div>
      )}
      <div className="flex gap-2.5 justify-end ml-auto">
        <Button color="white" label="Remove action" />
        <Button color="white" label="Add action" onClick={showActionButtons} />
        <Button color="redTransparent" outline label="Save action" />
      </div>
    </div>
  );
};

export default CreateProposalActions;
