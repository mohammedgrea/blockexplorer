import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Flowbite } from "flowbite-react";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import globalTheme from "../../../../theme/theme";

interface PageLayoutProps {}

const PageLayout: FC<PageLayoutProps> = () => {
  console.log("toto");

  return (
    <Flowbite theme={{ theme: globalTheme }}>
      <div className="min-h-screen">
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </Flowbite>
  );
};

export default PageLayout;
