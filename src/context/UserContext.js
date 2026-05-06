import { createContext } from "react";

export const currentUser = {
    id: 1,
    name: "Sam Wilson",
    role: "ADMIN",
}

export const UserContext = createContext(currentUser);