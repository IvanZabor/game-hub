import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation3: FaPlaystation,
    playstation4: FaPlaystation,
    playstation5: FaPlaystation,
    "ps-vita": FaPlaystation,
    xbox360: FaXbox,
    "xbox-one": FaXbox,
    "xbox-old": FaXbox,
    "xbox-series-x": FaXbox,
    "nintendo-switch": SiNintendo,
    macos: FaApple,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={"10px"}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color="gray.500"
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;

//   <>
//     {platforms.map((platform) => (
//       <Text>{platform.slug}</Text>
//     ))}
//   </>

// <HStack>
//   {platforms.map((platform) => (
//     <Icon as={iconMap[platform.slug]} color="gray.500"></Icon>
//   ))}
// </HStack>
