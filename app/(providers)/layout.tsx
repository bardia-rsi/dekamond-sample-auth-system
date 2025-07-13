import type { ReactNode, FC, ReactElement } from "react";
import UserContextProvider from "@/context/UserContext";
import Guard from "@/containers/Guard";

interface Props {
  children: ReactNode;
}

const ProvidersLayout: FC<Props> = ({ children }): ReactElement => {

  return (
      <UserContextProvider>
          <Guard>
              { children }
          </Guard>
      </UserContextProvider>
  );

}

export default ProvidersLayout;