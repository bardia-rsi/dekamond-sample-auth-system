import type { FC, ReactElement } from "react";
import AuthPageLoginForm from "@/components/pages/Auth/LoginForm";
import style from "./page.module.scss";

const AuthPage: FC = (): ReactElement => {
  return (
      <main className={style.auth_page}>
        <AuthPageLoginForm />
      </main>
  );
}

export default AuthPage;