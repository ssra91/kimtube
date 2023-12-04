import {
  IconCs,
  IconDeclaration,
  IconOpinion,
  IconSetting,
} from "@/src/components/Header/Sidebar/Icons";
import React, { JSX } from "react";

export interface ILinkData {
  text: string;
  links: string;
  icon: JSX.Element;
}

const settingLinkData: ILinkData[] = [
  { text: "설정", links: "/", icon: <IconSetting /> },
  { text: "신고 기록", links: "/Music", icon: <IconDeclaration /> },
  { text: "고객센터", links: "/Kids", icon: <IconCs /> },
  { text: "의견 보내기", links: "/Kids", icon: <IconOpinion /> },
];

export default settingLinkData;
