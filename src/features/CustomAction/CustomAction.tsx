import React, { FC, useState } from "react";
import TextInput from "../common/TextInput/TextInput";
import ToggleSwitch from "../common/ToggleSwitch/ToggleSwitch";

type CustomActionProps = {
  disabledAction: boolean;
};

const CustomAction: FC<CustomActionProps> = ({ disabledAction }) => {
  const [customActionToggle, setCustomActionToggle] = useState(false);
  const handleCustomActionToggle = () => {
    setCustomActionToggle(!customActionToggle);
  };
  return (
    <div className="space-y-9">
      <TextInput
        label="Target contract address"
        placeholder="Enter the target address ..."
        disabled={disabledAction}
      />
      <TextInput
        label="Select an ABI or upload yours"
        placeholder="ERC-20"
        isSelect
        disabled={disabledAction}
        options={["Ac amet dolor dis", "Eu tellus tellus"]}
      />
      <TextInput
        label="Contract method"
        placeholder="Burn"
        isSelect
        disabled={disabledAction}
        options={["Ac amet dolor dis", "Eu tellus tellus"]}
      />
      <TextInput
        label="Calldatas"
        placeholder="unit256"
        disabled={disabledAction}
        paragraph="The data for the function arguments you wish to send when the action executes"
      />
      <ToggleSwitch
        label="Also send Ether to target address? (this is not common)"
        checked={customActionToggle}
        disabled={disabledAction}
        onChange={handleCustomActionToggle}
      />
    </div>
  );
};

export default CustomAction;
