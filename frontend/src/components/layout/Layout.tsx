import { PropsWithChildren } from "react";
import Header from "../Header";

function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Layout;