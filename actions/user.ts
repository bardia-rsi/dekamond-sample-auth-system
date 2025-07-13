"use server";

import type { UserResponse } from "@/types/Responses/User";

const getUserData = async (): Promise<UserResponse> => {

    const res = await fetch(
        "https://randomuser.me/api/?results=1&nat=us",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }
    );

    if (!res.ok || res.status !== 200) {
        throw new Error("API Call: something went wrong!");
    }

    return res.json();

}

export { getUserData };