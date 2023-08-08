import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import PlatformIconList from "./Platform/PlatformIconList";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="1xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.platforms.map((p) => p.platform)} />
        </HStack>
        <HStack justifyContent="space-between">
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
