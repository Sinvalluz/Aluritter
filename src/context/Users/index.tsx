'use client';

import { createContext, useContext, useState } from 'react';
// Defina a interface para o contexto
interface UserContextType {
	userLog: string;
	setUserLog: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextType>({ userLog: '', setUserLog: () => {} });

export function UserProvider({ children }: { children: React.ReactNode }) {
	const [userLog, setUserLog] = useState<string>('');

	return <UserContext.Provider value={{ userLog, setUserLog }}>{children}</UserContext.Provider>;
}

export const UseUserContext = () => useContext(UserContext);
