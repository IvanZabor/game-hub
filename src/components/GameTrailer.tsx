import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const firts = data?.results[0];

  return firts ? (
    <video src={firts.data[480]} poster={firts.preview} controls />
  ) : null;
};

export default GameTrailer;
