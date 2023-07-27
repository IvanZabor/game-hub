import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuary: GameQuery;
}

const GameHeading = ({ gameQuary }: Props) => {
  const heading = `${gameQuary.platform?.name || ""} ${
    gameQuary.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
