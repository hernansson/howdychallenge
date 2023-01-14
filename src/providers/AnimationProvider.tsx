import { createContext, useContext, useState } from 'react';

interface IAnimationContext {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<boolean>;
}
export const AnimationContext = createContext<IAnimationContext>({
  isOpen: false,
});

export const useAnimationContext = () => useContext(AnimationContext);

export function AnimationProvider({ children }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <AnimationContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AnimationContext.Provider>
  );
}
