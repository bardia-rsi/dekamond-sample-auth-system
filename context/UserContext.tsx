"use client";

import type { ReactNode, Context, FC, ReactElement } from "react";
import { createContext, useState } from "react";
import type { UserResponse } from "@/types/Responses/User";

interface UserContextStructure {
    user: UserResponse | null;
    setUser: (data: UserResponse) => void;
}

interface Props {
    children: ReactNode;
}

const defaultContext: UserContextStructure = {
    user: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user") ?? "null") ?? null : null,
    setUser: (): void => {},
}

const UserContext: Context<UserContextStructure> = createContext<UserContextStructure>(defaultContext);

const UserContextProvider: FC<Props> = ({ children }): ReactElement => {

    const [user, setUser] = useState<UserResponse | null>(defaultContext.user);

    const updateUser = (data: UserResponse): void => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
    }

    return (
        <UserContext
            value={{
                user: user,
                setUser: updateUser
            }}
        >
            { children }
        </UserContext>
    );

}

export type { UserContextStructure };

export { UserContext };

export default UserContextProvider;