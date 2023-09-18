import { ResponseAPI } from "@/interfaces/Response.interface";
import { Dispatch, SetStateAction, createContext } from "react";

export const PageContext = createContext<{
  // setRefresh: Dispatch<SetStateAction<boolean>>;
  companies: ResponseAPI[]
  globalData: ResponseAPI[]
  setCompanies: Dispatch<SetStateAction<ResponseAPI[]>>;
  darkmode: boolean | null;
  setDarkmode: Dispatch<SetStateAction<boolean>>
}>({
  companies: [],
  globalData: [],
  setCompanies: () => {},
  darkmode: false,
  setDarkmode: () => {}
});