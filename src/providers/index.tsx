import React from "react";
import AuthProvider from "./AuthProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
	return <AuthProvider>{children}</AuthProvider>;
}
