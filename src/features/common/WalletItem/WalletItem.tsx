import React, { FC, HTMLAttributes } from "react";
interface WalletItemProps extends HTMLAttributes<HTMLButtonElement> {
  walletImag: string;
  WalletName: string;
}
const WalletItem: FC<WalletItemProps> = ({
  walletImag,
  WalletName,
  ...props
}) => {
  return (
    <button
      className="bg-be-navy-blue-50 transition duration-150 ease-in-out hover:bg-blue-200 flex items-center gap-6 md:px-6 py-2 text-base font-semibold rounded-lg w-full"
      {...props}
    >
      <img src={walletImag} alt={WalletName} className="w-8 h-full" />
      MetaMask
    </button>
  );
};

export default WalletItem;
