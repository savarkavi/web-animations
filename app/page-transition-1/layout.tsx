import { ReactNode } from "react";
import { emily } from "../../fonts/fonts";
import Header from "./Header";
import { TransitionProvider } from "./TransitionProvider";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <TransitionProvider>
      <div className={`${emily.className} flex h-screen flex-col bg-[#f9f4eb]`}>
        <Header />
        <div className="flex h-full items-center justify-center text-9xl">
          {children}
        </div>
      </div>
    </TransitionProvider>
  );
};

export default Layout;
