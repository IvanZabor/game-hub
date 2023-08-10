import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platfomrs } = usePlatforms();
  return platfomrs?.results.find((p) => p.id === id);
};

export default usePlatform;
