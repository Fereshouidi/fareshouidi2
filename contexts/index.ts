import { NavOptionsProps, StatusBannerContextParams } from "@/types";
import { createContext } from "react";

export const NavOptionsContext = createContext<NavOptionsProps | undefined>(undefined);
export const StatusBannerContext = createContext<StatusBannerContextParams | undefined>(undefined);