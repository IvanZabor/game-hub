import { Box, Grid, GridItem, Flex } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
import GameGrid from "../components/Game/GameGrid";
import GameHeading from "../components/Game/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/Platform/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={10}>
          <GameHeading />
          <Flex>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};
export default HomePage;
