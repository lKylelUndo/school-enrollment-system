import React, { createContext, useContext, useState } from "react";

type AuthType = {
  isAuthenticated: boolean | string;
  userId: number | null;
  username: string;
  isAdmin?: boolean;
};

type AuthContextType = {
  auth: AuthType;
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthType>({
    userId: null,
    username: "",
    isAdmin: true,
    isAuthenticated: true,
  });

  const [loading, setLoading] = useState(true);
  return (
    <AuthContext.Provider value={{ auth, setAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuthContext must be used within an AuthProvider");

  return context;
};

export default AuthProvider;
