import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";
import useGenres from "../../hooks/useGenres";
import usePlatform from "../../hooks/usePlatform";
import useGenre from "../../hooks/useGenre";

interface Props {
  gameQuary: GameQuery;
}

const GameHeading = ({ gameQuary }: Props) => {
  const genre = useGenre(gameQuary.genreId);
  const platform = usePlatform(gameQuary.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
