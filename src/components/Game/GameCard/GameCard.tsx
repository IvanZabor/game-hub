import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import Game from "../../../entities/Game";
import getCroppedImageUrl from "../../../services/image-url";
import CriticScore from "../../CriticScore";
import Emoji from "../../Emoji";
import PlatformIconList from "../../Platform/PlatformIconList";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="1xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </HStack>
        <HStack justifyContent="space-between">
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
