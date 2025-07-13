"use client"

import type { SWRMutationResponse } from "swr/mutation";
import type { UserResponse } from "@/types/Responses/User";
import useSWRMutation from "swr/mutation";
import { getUserData } from "@/actions/user";

type GetUserDataMutation = SWRMutationResponse<UserResponse, unknown, SWRKey, undefined>;

type SWRKey = "get-user-data"

const useGetUserData = (): GetUserDataMutation => {
    return useSWRMutation<UserResponse, unknown, SWRKey, undefined>(
        "get-user-data",
        async (): Promise<UserResponse> => {
            return await getUserData();
        }
    );
}

export { useGetUserData };