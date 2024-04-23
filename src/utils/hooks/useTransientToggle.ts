import {
  useEffect,
  useState,
} from 'react';

const DEFAULT_DURATION_MS = 10_000;

type UseTransientToggleProps = {
  durationMs?: number,
};

export const useTransientToggle = ({ durationMs = DEFAULT_DURATION_MS }: UseTransientToggleProps = {}) => {
  const [
    isOn,
    setIsOn,
  ] = useState(false);

  useEffect(() => {
    if (isOn) {
      setTimeout(() => setIsOn(false), durationMs);
    }
  }, [
    isOn,
  ]);

  return {
    isOn,
    setIsOn,
  };
};
