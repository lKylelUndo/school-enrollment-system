import React, { createContext, useContext, useEffect, useState } from "react";

type AuthType = {
  isAuthenticated: boolean | string;
  userId: number | null;
  firstName: string;
  middleName: string;
  lastName: string;
  isAdmin?: boolean;
} | null;

type AuthContextType = {
  auth: AuthType;
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthType>({
    userId: null,
    firstName: "",
    middleName: "",
    lastName: "",
    isAdmin: false,
    isAuthenticated: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVerifyUser = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/verify-user", {
          method: "GET",
          credentials: "include",
        });

        const responseData = await response.json();
        console.log(responseData);

        if (!response.ok) {
          setAuth({
            userId: null,
            firstName: "",
            middleName: "",
            lastName: "",
            isAdmin: false,
            isAuthenticated: false,
          });

          return;
        }

        setAuth({
          userId: responseData.user.id,
          firstName: responseData.user.firstName,
          middleName: responseData.user.middleName,
          lastName: responseData.user.lastName,
          isAdmin: responseData.user.isAdmin,
          isAuthenticated: true,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVerifyUser();
  }, []);

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
