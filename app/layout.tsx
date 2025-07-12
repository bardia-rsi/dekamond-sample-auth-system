import type { ReactNode, FC, ReactElement } from "react";
import "@/styles/index.scss";

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }): ReactElement => {

  return (
      <html lang="en" dir="ltr">
        <body>
            { children }
        </body>
      </html>
  );

}

export default RootLayout;