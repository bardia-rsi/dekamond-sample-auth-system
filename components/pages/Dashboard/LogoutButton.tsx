"use client"

import type { FC, ReactElement } from "react"
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

const LogoutButton: FC = (): ReactElement => {

    const router = useRouter();

    const clickHandler: VoidFunction = useCallback<VoidFunction>(
        (): void => {
            localStorage.removeItem("user");
            router.push("/auth");
        },
        [router]
    );

    return (
        <Button onClick={clickHandler}>
            Logout
        </Button>
    );

}

export default LogoutButton;