"use client";

import type { UserContextStructure } from "@/context/UserContext";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const useUserContext = (): UserContextStructure => {
    return useContext<UserContextStructure>(UserContext);
}

export { useUserContext };