import { useState } from "react";

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const loadingStart = () => setIsLoading(true);
  const loadingEnd = () => setIsLoading(false);
  return {
    isLoading,
    loadingStart,
    loadingEnd,
  };
};
