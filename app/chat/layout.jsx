'use client';

import useAuth from "@/libs/hooks/useAuth";
import AuthPage from "@/components/AuthPage";
import { auth } from "@/libs/firebase";

const Layout = ({ children }) => {
  const isAuthenticated = useAuth();
  return (
      <div className="text">
        {isAuthenticated ? (
        <main className="app">
        {children}
        </main>) : (
            <>
              <AuthPage/>
            </>
          )}
      </div>
  );
};

export default Layout;
