import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Avatar from "../../common/Avatar/Avatar";
import BorderContainer from "../../common/BorderContainer/BorderContainer";

const PreviewProposal = () => {
  return (
    <div className="md:px-4 space-y-4 md:space-y-9 max-w-[950px] md:py-16 py-4 px-0 ">
      <h3 className="text-be-navy-blue-500 text-xl font-bold">
        Proposition Name
      </h3>
      <div className="flex items-center gap-4">
        <p className="text-gray-500 text-sm">Proposed by</p>
        <Avatar
          imgSrc="https://via.placeholder.com/48"
          size="sm"
          name="by gundamdweeb.eth"
        />
      </div>
      <h4 className="text-be-navy-blue-500 text-base font-bold">Description</h4>
      <p className="text-gray-500 text-sm">
        Faucibus tincidunt quis sapien porttitor. Tortor in libero quam non
        pulvinar justo condimentum purus. Donec leo nunc vel pulvinar maecenas
        felis. Euismod donec sem dictumst auctor id ac elementum mi quam. Lectus
        amet sed ac leo ornare habitant elit turpis id. Sit eu adipiscing orci
        vitae felis. Sit integer ac bibendum nullam viverra turpis vitae nisi.
        Sapien sit eu sit vitae magna sit nulla aliquet tellus. Nisl et vel eu
        porta nunc metus nibh sit rhoncus. Vitae lorem eget eu bibendum tempor
        eget fermentum purus. Ornare lacus varius euismod malesuada. Integer
        aliquam id tincidunt neque viverra. Eu tortor risus faucibus a pretium
        enim est sapien. Scelerisque enim diam at dapibus lectus. Magna tempor
        et lectus interdum pulvinar ultricies arcu donec risus. Nisl tellus
        etiam interdum rhoncus habitasse eu enim. At vitae ipsum eu sed enim et
        quisque proin. Adipiscing adipiscing lacus sit lectus ultricies enim
        dignissim. Turpis rhoncus vitae interdum purus diam. Mauris elementum
        senectus sit elementum maecenas nulla. Eget quis quis quis aliquet nibh
        adipiscing magnis et quis. Pulvinar donec at vestibulum praesent nunc
        duis pulvinar eu nisl. Accumsan rhoncus arcu morbi sodales ultricies
        ridiculus neque. Tellus sed mollis faucibus proin eget quis eu eget
        malesuada. Lorem potenti varius elit sapien enim. Commodo sapien sed
        iaculis consequat in non fermentum. Sit vitae ut sed tempor mauris sit
        diam id. Consectetur ut egestas scelerisque porttitor elit diam in
        convallis. Mauris orci morbi elementum mattis nulla et vulputate felis
        parturient. Tincidunt scelerisque aliquam odio egestas urna et
        sollicitudin. Vitae egestas enim ultrices vulputate erat tristique.
        Libero egestas volutpat aliquet sed egestas. Ultrices bibendum dictum in
        habitasse lacus dolor nisi. Aliquam dui hendrerit sit morbi. Ut erat
        dignissim volutpat eu tellus pulvinar habitant. Sed rhoncus etiam sed
        euismod. Ultrices in risus consequat vestibulum viverra. Massa ipsum
        amet ac faucibus ultricies ipsum at in. Felis mollis in at proin mauris.
        Mattis accumsan velit lacus egestas semper pellentesque commodo. Ac diam
        fermentum ornare augue consectetur sed sit id risus. Praesent augue
        tristique nunc ut cras adipiscing cursus in. Sapien adipiscing pretium
        eu imperdiet erat ligula massa egestas facilisi. Volutpat mi viverra
        duis lectus id pellentesque cursus blandit. Tellus tellus pellentesque
        malesuada nunc semper in. Ipsum bibendum molestie amet volutpat augue
        lacus mauris. Massa mauris sem cras sagittis neque tristique amet. Massa
        consectetur tellus felis lacus eu morbi habitant pellentesque. Tortor
        ornare rhoncus pulvinar facilisi quam. Integer ut lacus id pellentesque
        amet. Arcu ullamcorper tortor risus nisl. Aliquet vitae id varius amet
        sed. Malesuada faucibus nunc tempor vitae purus faucibus. Mattis aliquam
        leo lorem eu mauris consectetur vulputate egestas tellus. Arcu
        pellentesque felis vitae augue volutpat donec. Adipiscing hendrerit
        varius accumsan lorem bibendum. Eu tempor neque.
      </p>
      <h4 className="text-be-navy-blue-500 font-bold">Action</h4>
      <h5 className="text-blue-500 text-base font-bold">Function 1:</h5>
      <BorderContainer className="flex flex-col items-center gap-6 justify-center">
        <span className="text-xs tracking-widest text-be-navy-blue-700 font-bold uppercase">
          swap
        </span>
        <div className="flex items-center gap-6 text-be-navy-blue-700 text-3xl font-medium ">
          <span>0 JSM </span>
          <ArrowRightIcon className="h-6 w-6 text-gray-500" />
          <span>~0 USD </span>
        </div>
        <div className="flex gap-4 items-center">
          <Avatar
            name="Project Name"
            imgSrc="https://via.placeholder.com/48"
            size="md"
            background
          />
          <ArrowRightIcon className=" h-6 w-6 text-gray-500 " />
          <Avatar name="" imgSrc="https://via.placeholder.com/48" size="md" />
        </div>
        <div className="flex flex-col  justify-center  items-center text-base font-medium">
          <span className="font-bold">Price checker</span>
          <span>Slippage: 10%</span>
          <div>
            <span>Pool path :</span>
            <span className="text-blue-500"> WETH/USDT</span>
          </div>
        </div>
      </BorderContainer>
    </div>
  );
};

export default PreviewProposal;
