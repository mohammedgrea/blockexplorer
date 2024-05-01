import { FC } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { usePublicClient } from "wagmi";

import Button from "../../features/common/Button/Button";
// import MetricsCard from "../../features/common/MetricsCard/MetricsCard";
import SearchBar from "../../features/common/Searchbar/Searchbar";
import DisplayRows from "../../features/common/HomeTable/DisplayTable/DisplayRows";
import { scrollToTop } from "../../helpers/scrollToTop";
import Container from "../../features/common/Container/Container";

import { TransactionsData, blocksData } from "../../assets/Data/data";

import iconArrow from "../../assets/icons/iconArrow.svg";
import iconCube from "../../assets/icons/iconCube.svg";
// import iconCurrentPrice from "../../assets/icons/iconCurrentPrice.svg";
// import iconServer from "../../assets/icons/iconServer.svg";
// import iconGlobeAlt from "../../assets/icons/iconGlobeAlt.svg";
// import { ClockIcon } from "@heroicons/react/24/outline";
import iconSwitchHorizontal from "../../assets/icons/iconSwitchHorizontal.svg";

const Home: FC = () => {
  const publicClient = usePublicClient();
  publicClient.getBlockNumber().then((result) => {
    console.log(result);
  });
  // const metricsData = [
  //   {
  //     metric: [
  //       {
  //         contents: [
  //           {
  //             label: "Current price",
  //             value: (
  //               <div className="flex items-center flex-wrap space-x-1 mt-0.5">
  //                 <span className="font-semibold"> $438.34</span>
  //                 <span className="break-all text-base font-sans text-be-navy-blue-300">
  //                   @0.01636BTC
  //                 </span>
  //                 <span className="break-all text-base text-green-500">
  //                   (+ 2.34%)
  //                 </span>
  //               </div>
  //             ),
  //           },
  //         ],
  //         icon: <img src={iconCurrentPrice} alt="Current Price icon" />,
  //       },
  //       {
  //         contents: [
  //           {
  //             label: "Market Cap",
  //             value: (
  //               <div className="flex flex-row flex-wrap space-x-1 mt-0.5">
  //                 <span className="break-all text-base font-sans font-semibold">
  //                   $225,036,739,555.00
  //                 </span>
  //               </div>
  //             ),
  //           },
  //         ],
  //         icon: <img src={iconGlobeAlt} alt="Current Price icon" />,
  //       },
  //     ],
  //   },

  //   {
  //     metric: [
  //       {
  //         contents: [
  //           {
  //             label: "TRANSACTIONS",
  //             value: (
  //               <div className="flex flex-col md:flex-row  md:items-center  space-x-1 mt-0.5">
  //                 <span className="font-semibold text-base">1,989.73 M</span>
  //                 <span className="break-all text-base font-sans text-be-navy-blue-300">
  //                   (12.8 TPS)
  //                 </span>
  //               </div>
  //             ),
  //           },
  //           {
  //             label: "MED GAS PRICE",
  //             value: (
  //               <div className="flex flex-row  items-center flex-wrap space-x-1 mt-0.5">
  //                 <span className="font-semibold text-base">26 Gwei</span>
  //                 <span className="break-all text-base font-sans  text-be-navy-blue-300">
  //                   ($1.2)
  //                 </span>
  //               </div>
  //             ),
  //           },
  //         ],
  //         icon: <img src={iconServer} alt="Current Price icon" />,
  //       },
  //       {
  //         contents: [
  //           {
  //             label: "LAST FINALIZED BLOCK",
  //             value: (
  //               <div className="flex flex-row flex-wrap space-x-1 mt-0.5">
  //                 <span className="break-all text-base font-sans font-semibold	 ">
  //                   17412450
  //                 </span>
  //               </div>
  //             ),
  //           },
  //           {
  //             label: "LAST SAFE BLOCK",
  //             value: (
  //               <div className="flex flex-row flex-wrap space-x-1 mt-0.5">
  //                 <span className="break-all text-base font-sans  font-semibold	">
  //                   17412482
  //                 </span>
  //               </div>
  //             ),
  //           },
  //         ],
  //         icon: <ClockIcon className="h-6 w-6 text-blue-500" />,
  //       },
  //     ],
  //   },

  //   {
  //     metric: [
  //       {
  //         contents: [
  //           {
  //             label: "TRANSACTION HISTORY IN 14 DAYS",
  //             value: <div className="flex flex-row space-x-1"></div>,
  //           },
  //         ],
  //         icon: "",
  //       },
  //     ],
  //   },
  // ];

  return (
    <Container className="pt-8 md:pt-10 " variant="secondary">
      <div className="font-sans md:m-[-10px] lg:m-0 space-y-3  md:space-y-6">
        <div className="container w-full">
          <h1 className="text-white text-xl font-semibold">
            Joseon Blockchain Explorer
          </h1>
          <SearchBar
            placeholder="Hash, Address, Tx, Block N°..."
            sizes="medium"
          />
          <p className="text-be-navy-blue-300 text-sm">
            Morbi felis vitae vulputate semper mauris dictum. Nibh et praesent
            elit libero.
          </p>
        </div>
        {/* <div className="container rounded-lg  drop-shadow my-5">
          <div className=" grid place-items-center w-full h-full">
            <MetricsCard metrics={metricsData} gridColumn />
          </div>
        </div> */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6 pt-3 container  ">
          <div className="w-full lg:w-1/2  rounded-2xl border-2  border-be-navy-blue-100 bg-white">
            <div className="flex gap-2 items-center md:pl-0 pl-0 md:pt-0 pt-2 pb-1 md:pb-0 md:border-0 border-b border-gray-200">
              <div className="md:hidden bg-be-navy-blue-50 rounded-lg h-[38px] w-[38px] md:p-3 p-2 ">
                <img src={iconCube} alt="cube icon" className="w-full h-full" />
              </div>
              <h1 className="text-lg md:p-4 md:pl-6 font-bold">
                Lastest Blocks
              </h1>
            </div>
            <Table>
              <Table.Body>
                {/* @ts-ignore */}
                <DisplayRows type="block" data={blocksData} />
              </Table.Body>
            </Table>
            <div className="flex justify-end border border-t-grey-100 py-2 md:py-3 px-2">
              <Link to="/blocks">
                <Button
                  color="blueTransparent"
                  outline
                  icondirection="right"
                  label="View All Blocks"
                  icon={<img src={iconArrow} alt="Arrow icon" />}
                  onClick={scrollToTop}
                />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 rounded-2xl border-2  bg-white border-be-navy-blue-100 ">
            <div className="flex gap-2 items-center md:pl-0 pl-0 md:pt-0 pt-2 pb-1 md:pb-0 md:border-0 border-b border-gray-200">
              <div className="md:hidden bg-be-navy-blue-50 rounded-lg h-[38px] w-[38px] md:p-3 p-2 ">
                <img
                  src={iconSwitchHorizontal}
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <h1 className="text-lg md:p-4 md:pl-6 font-bold">
                Lastest Transactions
              </h1>
            </div>
            <Table>
              <Table.Body>
                {/* @ts-ignore */}
                <DisplayRows type="transaction" data={TransactionsData} />
              </Table.Body>
            </Table>
            <div className="flex justify-end border border-t-grey-100 py-3 px-2">
              <Link to="/transactions">
                <Button
                  color="blueTransparent"
                  outline
                  className="flex flex-col-reverse"
                  icondirection="right"
                  label="View All Transactions"
                  icon={<img src={iconArrow} alt="Arrow icon" />}
                  onClick={scrollToTop}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
