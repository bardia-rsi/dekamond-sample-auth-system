import type { FC, ReactElement } from "react";
import LogoutButton from "@/components/pages/Dashboard/LogoutButton";
import style from "./page.module.scss";

const DashboardPage: FC = (): ReactElement => {
    return (
        <main className={style.dashboard_page}>
            <h3 className={style.dashboard_page__title}>Welcome to Dashboard</h3>
            <LogoutButton />
        </main>
    );
}

export default DashboardPage;