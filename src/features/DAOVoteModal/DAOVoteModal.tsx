import { useState } from "react";
import {
  CustomFlowbiteTheme,
  Flowbite,
  Label,
  Modal,
  Spinner,
  Textarea,
} from "flowbite-react";

import Button from "../common/Button/Button";
import Avatar from "../common/Avatar/Avatar";
import DAOVoteChoices from "./DAOVoteChoices/DAOVoteChoices";

import { InformationCircleIcon, WalletIcon } from "@heroicons/react/24/outline";

const modalTheme: CustomFlowbiteTheme = {
  modal: {
    root: {
      base: "fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
      show: {
        on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
        off: "hidden",
      },
      sizes: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl",
      },
    },
    content: {
      base: "relative h-full w-full p-4 md:h-auto",
      inner:
        "relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col w-[467px] ",
    },
    body: {
      base: "p-6 flex-1 overflow-auto",
      popup: "pt-0",
    },
    header: {
      base: "flex items-center justify-center rounded-t p-5",
      popup: "p-2 border-b-0",
      title: "text-2xl font-bold text-be-navy-blue-700 text-center w-full",
      close: {
        base: "ml-auto inline-flex items-center border border-be-navy-blue-100 rounded-lg bg-be-navy-blue-50 p-1.5 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        icon: "h-5 w-5",
      },
    },
    footer: {
      base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
      popup: "border-t",
    },
  },
};

const DAOVoteModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        color="red"
        disabled
        icon={<WalletIcon className="h-4 w-4" />}
        label="Vote on-chain"
        onClick={() => setOpenModal(true)}
      />
      <Flowbite theme={{ theme: modalTheme }}>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Voting</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <div className="flex gap-2">
                <Avatar imgSrc="" />
                <span className="text-be-navy-blue-700 font-bold">
                  {"0x4c459d7188016bc58c07f006de033c6cc26f6a0f5f2733772b171cf08760c35b7".substring(
                    0,
                    37,
                  )}
                  {"..."}
                </span>
              </div>
              <div className="rounded-lg border border-gray-300 py-4 px-6">
                <h3 className="uppercase font-normal text-xs text-gray-500 md:mb-4">
                  Voting Power
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-be-navy-blue-500 text-4xl font-medium">
                    4
                  </span>
                  <InformationCircleIcon className="w-6 h-6 text-gray-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-be-navy-blue-700 md:mb-4 capitalize">
                  Vel quis fusce at integer et est
                </h3>
                <div className="flex items-center gap-5 mb-4">
                  <span className="text-gray-500 text-xs">
                    Proposed on: Aug 23rd, 2023
                  </span>
                  <div className="bg-be-navy-blue-50 flex items-center gap-2 p-1 px-4 rounded-full">
                    <Avatar imgSrc="" size="xs" />
                    <span className="capitalize text-be-navy-blue-700">
                      project name
                    </span>
                  </div>
                </div>
                <DAOVoteChoices />
                <div className="max-w-full">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="comment"
                      value="Your message"
                      className="mb-4 font-bold text-be-navy-blue-700"
                    />
                  </div>
                  <Textarea
                    id="comment"
                    placeholder="Tell the community what are your thoughts"
                    required
                    rows={4}
                    className="bg-white border-be-navy-blue-100"
                  />
                </div>
              </div>
              <Button
                color="red"
                label={
                  isLoading ? (
                    <Spinner aria-label="Loading" size="sm" />
                  ) : (
                    "Submit"
                  )
                }
                className="w-full"
                disabled={isLoading}
                onClick={handleClick}
              />
            </div>
          </Modal.Body>
        </Modal>
      </Flowbite>
    </>
  );
};

export default DAOVoteModal;
