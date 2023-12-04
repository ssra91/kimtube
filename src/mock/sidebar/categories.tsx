import {
  IconGame,
  IconLearning,
  IconLive,
  IconMovie,
  IconMusic,
  IconPodcasts,
  IconPopular,
  IconShopping,
  IconSports,
} from "@/src/components/Header/Sidebar/Icons";
import React, { JSX } from "react";

export interface ILinkData {
  text: string;
  links: string;
  icon: JSX.Element;
}

const questLinkData: ILinkData[] = [
  { text: "인기 급상승", links: "/", icon: <IconPopular /> },
  { text: "쇼핑", links: "/", icon: <IconShopping /> },
  { text: "음악", links: "/", icon: <IconMusic /> },
  { text: "영화", links: "/", icon: <IconMovie /> },
  { text: "실시간", links: "/", icon: <IconLive /> },
  { text: "게임", links: "/", icon: <IconGame /> },
  { text: "스포츠", links: "/", icon: <IconSports /> },
  { text: "학습", links: "/", icon: <IconLearning /> },
  { text: "팟캐스트", links: "/", icon: <IconPodcasts /> },
];
export default questLinkData;
