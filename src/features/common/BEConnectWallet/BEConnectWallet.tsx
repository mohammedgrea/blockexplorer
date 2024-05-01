import React, { useState } from "react";
import { CustomFlowbiteTheme, Modal, Spinner } from "flowbite-react";
import {
  ExclamationTriangleIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import Button from "../Button/Button";
import WalletItem from "../WalletItem/WalletItem";

import MetaMaskIcon from "../../../assets/icons/metamask-icon.svg";

const BEConnectWallet = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState<any>(null);

  const handleLinkClick = () => {
    setIsLoading(true);
    setError(null);
    setTimeout(() => {
      setIsLoading(false);
      setError("An error has occurred.");
    }, 2000);
  };

  const modalTheme: CustomFlowbiteTheme["modal"] = {
    root: {
      base: "fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full md:px-0 px-6 md;py-0 py-16",
      show: {
        on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
        off: "hidden",
      },
      sizes: {
        sm: "max-w-sm",
        md: "max-w-[467px]",
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
      base: "relative h-full w-full md:p-4  md:h-auto",
      inner:
        "relative rounded-2xl bg-white shadow dark:bg-gray-700 flex flex-col md:max-h-[90vh] md:min-h-[664px]",
    },
    body: {
      base: `md:mx-6 px-4 md:px-0 py-6 md:py-9 flex-1 overflow-auto ${isLoading || Error ? "" : "border-t"
        }`,
      popup: "pt-0",
    },
    header: {
      base: `flex text-center items-center justify-center rounded-t p-5 py-6 md:py-9 w-full`,
      popup: "p-2 border-b-0",
      title: "text-2xl font-bold text-be-navy-blue-700 mt-9",
      close: {
        base: "ml-auto absolute top-5 right-5 rounded-lg bg-be-navy-blue-50 p-1.5 text-sm text-gray-700 border hover:bg-be-navy-blue-100 hover:text-gray-900",
        icon: "h-5 w-5",
      },
    },
    footer: {
      base: "flex items-center justify-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
      popup: "border-0",
    },
  };

  const spinnerTheme: CustomFlowbiteTheme["spinner"] = {
    base: "inline animate-spin text-gray-200",
    color: {
      default: "fill-be-navy-blue-700",
    },
  };

  return (
    <>
      <Button
        color="redTransparent"
        label="Connect Wallet"
        size="xs"
        outline
        icon={<RectangleStackIcon className="w-4 h-4" />}
        onClick={() => setOpenModal("default")}
        className="md:w-fit w-full"
      />
      <Modal
        theme={modalTheme}
        show={openModal === "default"}
        onClose={() => setOpenModal(undefined)}
        size={"md"}
      >
        <Modal.Header>
          {isLoading || Error ? (
            <></>
          ) : (
            <>
              Connect your wallet
              <p className="max-w-[259px] mt-4 w-full text-center text-gray-500 text-sm font-normal">
                If you don’t have a wallet, you can select a provider and create
                one now.
              </p>
            </>
          )}
        </Modal.Header>
        <Modal.Body
          className={
            isLoading || Error ? "flex mb-32 items-center justify-center" : ""
          }
        >
          {isLoading ? (
            <div className="flex flex-col justify-center items-center h-full gap-16">
              <div className="flex flex-col items-center gap-4 text-center">
                <h3 className="text-be-navy-blue-700 text-2xl font-bold">
                  Connecting to your wallet...
                </h3>
                <p className="max-w-[259px] text-sm text-gray-500">
                  In at tempor fusce consequat commodo purus risus nullam arcu.
                  Porttitor turpis.
                </p>
              </div>
              <Spinner theme={spinnerTheme} color="default" />
            </div>
          ) : Error ? (
            <div className="flex flex-col items-center text-center h-full gap-4">
              <ExclamationTriangleIcon className="w-12 h-12 text-red-500" />
              <h3 className="text-red-500 text-2xl font-bold mt-2">
                An error has occurred
              </h3>
              <p className="max-w-[259px] text-sm text-gray-500">
                In at tempor fusce consequat commodo purus risus nullam arcu.
                Porttitor turpis.
              </p>
            </div>
          ) : (
            <WalletItem
              walletImag={MetaMaskIcon}
              WalletName="MetaMask"
              onClick={handleLinkClick}
            />
          )}
        </Modal.Body>
        {isLoading || Error ? (
          <></>
        ) : (
          <Modal.Footer>
            <Button
              size="sm"
              color="white"
              label="Show More"
              onClick={() => setOpenModal(undefined)}
            />
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};

export default BEConnectWallet;
