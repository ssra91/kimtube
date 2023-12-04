import {
  IconDescribed,
  IconHome,
  IconShorts,
} from "@/src/components/Header/Sidebar/Icons";
import React, { JSX } from "react";

export interface ILinkData {
  text: string;
  links: string;
  icon: JSX.Element;
}

const linkData: ILinkData[] = [
  { text: "홈", links: "/", icon: <IconHome /> },
  { text: "Shorts", links: "/shorts", icon: <IconShorts /> },
  { text: "구독", links: "/describe", icon: <IconDescribed /> },
];

export default linkData;
