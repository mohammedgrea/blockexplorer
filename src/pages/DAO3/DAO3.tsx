import { Flowbite, Progress, CustomFlowbiteTheme } from "flowbite-react";

import Wrapper from "../../features/common/Wrapper/Wrapper";
import DAOTabs from "../../features/DAOTabs/DAOTabs";
import DAOstatus from "../../features/DAOstatus/DAOstatus";
import Badge from "../../features/common/Badge/Badge";
import Button from "../../features/common/Button/Button";
import Avatar from "../../features/common/Avatar/Avatar";
import BeTab from "../../features/common/BlockTabs/BlockTabs";

import {
  XCircleIcon,
  LinkIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

import DAOVoteModal from "../../features/DAOVoteModal/DAOVoteModal";
import Container from "../../features/common/Container/Container";

const progressTheme: CustomFlowbiteTheme = {
  progress: {
    base: "w-full overflow-hidden rounded-full bg-be-navy-blue-100 dark:bg-gray-700 ",
    label: "mb-1 flex justify-between font-medium dark:text-white",
    bar: "rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100 space-x-2 bg-red-500",
    color: {
      dark: "bg-gray-600 dark:bg-gray-300",
      blue: "bg-blue-500",
    },
    size: {
      sm: "h-1",
      md: "h-2.5",
      lg: "h-4",
      xl: "h-6",
    },
  },
};

const tabItems = [
  {
    title: "Description",
    content: (
      <div className="text-gray-500 text-xs md:text-sm font-medium space-y-2 px-2">
        <p>
          Faucibus tincidunt quis sapien porttitor. Tortor in libero quam non
          pulvinar justo condimentum purus. Donec leo nunc vel pulvinar maecenas
          felis. Euismod donec sem dictumst auctor id ac elementum mi quam.
          Lectus amet sed ac leo ornare habitant elit turpis id. Sit eu
          adipiscing orci vitae felis. Sit integer ac bibendum nullam viverra
          turpis vitae nisi. Sapien sit eu sit vitae magna sit nulla aliquet
          tellus. Nisl et vel eu porta nunc metus nibh sit rhoncus. Vitae lorem
          eget eu bibendum tempor eget fermentum purus. Ornare lacus varius
          euismod malesuada. Integer aliquam id tincidunt neque viverra. Eu
          tortor risus faucibus a pretium enim est sapien. Scelerisque enim diam
          at dapibus lectus. Magna tempor et lectus interdum pulvinar ultricies
          arcu donec risus. Nisl tellus etiam interdum rhoncus habitasse eu
          enim. At vitae ipsum eu sed enim et quisque proin. Adipiscing
          adipiscing lacus sit lectus ultricies enim dignissim.
        </p>
        <p>
          Turpis rhoncus vitae interdum purus diam. Mauris elementum senectus
          sit elementum maecenas nulla. Eget quis quis quis aliquet nibh
          adipiscing magnis et quis. Pulvinar donec at vestibulum praesent nunc
          duis pulvinar eu nisl. Accumsan rhoncus arcu morbi sodales ultricies
          ridiculus neque. Tellus sed mollis faucibus proin eget quis eu eget
          malesuada. Lorem potenti varius elit sapien enim. Commodo sapien sed
          iaculis consequat in non fermentum. Sit vitae ut sed tempor mauris sit
          diam id. Consectetur ut egestas scelerisque porttitor elit diam in
          convallis. Mauris orci morbi elementum mattis nulla et vulputate felis
          parturient. Tincidunt scelerisque aliquam odio egestas urna et
          sollicitudin. Vitae egestas enim ultrices vulputate erat tristique.
          Libero egestas volutpat aliquet sed egestas.
        </p>
        <p>
          Ultrices bibendum dictum in habitasse lacus dolor nisi. Aliquam dui
          hendrerit sit morbi. Ut erat dignissim volutpat eu tellus pulvinar
          habitant. Sed rhoncus etiam sed euismod. Ultrices in risus consequat
          vestibulum viverra. Massa ipsum amet ac faucibus ultricies ipsum at
          in. Felis mollis in at proin mauris. Mattis accumsan velit lacus
          egestas semper pellentesque commodo. Ac diam fermentum ornare augue
          consectetur sed sit id risus. Praesent augue tristique nunc ut cras
          adipiscing cursus in. Sapien adipiscing pretium eu imperdiet erat
          ligula massa egestas facilisi. Volutpat mi viverra duis lectus id
          pellentesque cursus blandit. Tellus tellus pellentesque malesuada nunc
          semper in. Ipsum bibendum molestie amet volutpat augue lacus mauris.
          Massa mauris sem cras sagittis neque tristique amet. Massa consectetur
          tellus felis lacus eu morbi habitant pellentesque. Tortor ornare
          rhoncus pulvinar facilisi quam. Integer ut lacus id pellentesque amet.
          Arcu ullamcorper tortor risus nisl. Aliquet vitae id varius amet sed.
          Malesuada faucibus nunc tempor vitae purus faucibus. Mattis aliquam
          leo lorem eu mauris consectetur vulputate egestas tellus. Arcu
          pellentesque felis vitae augue volutpat donec. Adipiscing hendrerit
          varius accumsan lorem bibendum. Eu tempor neque.
        </p>
      </div>
    ),
  },
  {
    title: "Executable code",
    content: (
      <div className="px-2 font-source text-sm break-words font-medium text-gray-500 whitespace-wrap">
        Signature:
        <br />
        transfer(address,uint256)
        <br />
        Calldatas:
        <br />
        address: 0xb4Ed960387e67F5354E29eA2dbc31E1AD2DE8FF0
        <br />
        uint256: 10000000000000000000
        <br />
        Target:0x90DE74265a416e1393A450752175AED98fe11517
        <br />
        Value:
        <br />0
      </div>
    ),
  },
];

const DAO3 = () => {
  return (
    <Flowbite theme={{ theme: progressTheme }}>
      <Container className="pt-16 md:pt-28">
        <div className="container space-y-3  md:space-y-6">
          <Wrapper>
            <div className="p-2 px-1 md:px-2">
              <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                <div className="flex items-center justify-between md:gap-2">
                  <h2 className="text-lg font-bold">Proposition Name</h2>
                  <Badge status="Active" />
                </div>
                <div className="md:hidden">
                  <Avatar
                    imgSrc="https://via.placeholder.com/48"
                    size="sm"
                    name="by gundamdweeb.eth"
                    date="Aug 23rd, 2023"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex gap-2">
                    <DAOVoteModal />
                  </div>
                  <div className="flex gap-1">
                    <Button
                      color="white"
                      icon={<LinkIcon className="h-4 w-4" />}
                    />
                    <Button
                      color="white"
                      icon={<ArrowTopRightOnSquareIcon className="h-4 w-4" />}
                    />
                    <Button
                      color="white"
                      icon={<XCircleIcon className="h-4 w-4" />}
                    />
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <Avatar
                  imgSrc="https://via.placeholder.com/48"
                  size="sm"
                  name="by gundamdweeb.eth"
                  date="Aug 23rd, 2023"
                />
              </div>
            </div>
            <hr className="bg-be-navy-blue-100 my-2" />
            <span className="font-bold text-base text-be-navy-blue-700">
              Status
            </span>
            <DAOstatus />
          </Wrapper>
          <Wrapper>
            <div className="flex font-bold text-base md:text-lg items-center gap-2 m-0 p-0">
              <div className="flex items-center">
                <span>Votes</span>
                <hr className="h-[70px] bg-gray-200 w-[1px] rounded-lg ml-2 mr-0 md:ml-6 md:mr-4" />
              </div>
              <span className="font-medium text-xs md:text-sm text-gray-500">
                Participation Rate
              </span>
              <div className="flex-1">
                <Flowbite theme={{ theme: progressTheme }}>
                  <Progress color="blue" size="sm" progress={25} />
                </Flowbite>
              </div>
              <span className=" text-sm md:text-base">25%</span>
            </div>
            <hr className="-mt-3.5 bg-gray-200 h-[1.5px]" />
            <DAOTabs />
          </Wrapper>
          <Wrapper title="Details">
            <BeTab tabItems={tabItems} />
          </Wrapper>
        </div>
      </Container>
    </Flowbite>
  );
};

export default DAO3;
