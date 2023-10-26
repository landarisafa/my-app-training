import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  setAuthentication: (value: boolean) => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {

  let isLoginTrue: boolean = false;
  if (localStorage.hasOwnProperty("login")) {
    const storageItem = localStorage.getItem("login");
    if (storageItem !== null) {
      try {
        const parsedItem = JSON.parse(storageItem);
        if (parsedItem && typeof parsedItem.userLogin === "boolean") {
          isLoginTrue = parsedItem.userLogin;
        }
      } catch (e) {
        // Handle JSON parsing errors, if needed
        isLoginTrue = false;
      }
    }
  }

  const [isAuthenticated, setIsAuthenticated] = useState(isLoginTrue);

  // Function to set the authentication status
  const setAuthentication = (value: boolean) => {
    setIsAuthenticated(value);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
}

// Create a custom hook to access the context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
