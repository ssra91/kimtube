import { IconHistory, IconMine } from "@/src/components/Header/Sidebar/Icons";
import React, { JSX } from "react";

export interface ILinkData {
  text: string;
  links: string;
  icon: JSX.Element;
}

const historyLinkData: ILinkData[] = [
  { text: "나", links: "/", icon: <IconMine /> },
  { text: "시청기록", links: "/shorts", icon: <IconHistory /> },
];

export default historyLinkData;
