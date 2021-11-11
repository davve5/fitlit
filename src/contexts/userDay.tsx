import React, { createContext, useContext } from 'react';

type Action = { type: 'increment' } | { type: 'decrement' };
type Dispatch = (action: Action) => void;
type State = { count: number };

const UserDayContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

export const useUserDay = () => {
  const context = useContext(UserDayContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }

  return context;
};

type UserDayProviderProps = { children: React.ReactNode };

export const UserDayProvider: React.FC<UserDayProviderProps> = ({
  children,
}) => <UserDayContext.Provider value={{}}>{children}</UserDayContext.Provider>;
