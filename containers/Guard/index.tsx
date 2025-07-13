"use client";

import type { ReactNode, FC, ReactElement } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
    children: ReactNode;
}

const AuthGuard: FC<Props> = ({ children }): ReactElement => {

    const pathname = usePathname();
    const router = useRouter();
    const isLoggedIn: boolean = Boolean(typeof window !== "undefined" ? localStorage.getItem("user") : null);

    useEffect(
        (): void => {

            if (pathname.startsWith("/auth") && isLoggedIn) {
                return router.replace("/dashboard");
            }

            if (pathname.startsWith("/dashboard") && !isLoggedIn) {
                return router.replace("/auth");
            }

        },
        [pathname, isLoggedIn, router]
    )

    return (
        <>
            { children }
        </>
    );

}

export default AuthGuard;