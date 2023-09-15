import { ResponseAPI } from "@/interfaces/Response.interface";
import { createContext } from "react";

export const PageContext = createContext<{
  // setRefresh: Dispatch<SetStateAction<boolean>>;
  companies: ResponseAPI[]
}>({
  companies: []
});