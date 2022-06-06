import React from "react";
import styles from "./Sidebar.module.scss";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import avatar1 from '../../assets/avatar-1.webp'
import avatar2 from '../../assets/avatar-2.png'
import avatar3 from '../../assets/avatar-3.webp'
import avatar4 from '../../assets/avatar-4.webp'
import { StaticImageData } from "next/image";
import { RoomAvatar } from "../RoomAvatar";


interface IChannel  {
  roomId: number,
  roomName: string,
  avatar: StaticImageData,
}

const dummyChannel:IChannel[] = [
  {
    roomId: 1,
    roomName: "general",
    avatar: avatar1
  },
  {
    roomId: 2,
    roomName: "random",
    avatar: avatar2
  },
  {
    roomId: 3,
    roomName: "chill",
    avatar: avatar3
  },  
  {
    roomId: 4,
    roomName: "buildspace",
    avatar: avatar4
  }
]


const Sidebar = () => {
  const router = useRouter();
const [channels, setChannels] = useState(dummyChannel);

  return <div className={styles.wrapper}>Sidebar</div>;
};

export default Sidebar;
