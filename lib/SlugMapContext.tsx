import React, { createContext, useContext, useMemo } from 'react';

interface SlugMap {
  [id: string]: {
    [locale: string]: string;
  };
}

interface SlugMapContextType {
  slugMap: SlugMap;
}

const SlugMapContext = createContext<SlugMapContextType>({ slugMap: {} });

export const SlugMapProvider: React.FC<{ slugMap: SlugMap; children: React.ReactNode }> = ({ slugMap, children }) => {
  const value = useMemo(() => ({ slugMap }), [slugMap]);
  return <SlugMapContext.Provider value={value}>{children}</SlugMapContext.Provider>;
};

export const useSlugMap = () => useContext(SlugMapContext);