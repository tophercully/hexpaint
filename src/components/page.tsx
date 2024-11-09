import React, { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="flex h-fit min-h-[100svh] w-screen flex-col items-center justify-center overflow-y-auto p-4 pt-0 font-overused md:p-10">
      {children}
    </div>
  );
};

export default Page;
