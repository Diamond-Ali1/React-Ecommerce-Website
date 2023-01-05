import { useState } from 'react';

const useToggle = intial => {
  const [state, setState] = useState(intial || false);
  const handleToggle = () => {
    setState(!state);
  };

  return [state, handleToggle];
};

export { useToggle };
