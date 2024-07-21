"use client"
import React from "react"
import { SessionProvider } from "next-auth/react"
// import { Children } from "react"

interface Props{
    children: React.ReactNode
}
export default function ClientProvider({ children }: Props) {
    return <SessionProvider>{children}</SessionProvider>;
}