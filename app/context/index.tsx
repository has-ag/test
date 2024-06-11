import { createContext, useState, useContext } from 'react';

type Context = { JWT: string | null };

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({ JWT: null });

  return <AppContext.Provider value={{ user, setUser }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
