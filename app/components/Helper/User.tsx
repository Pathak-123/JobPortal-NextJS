"use client"

import { Session } from "next-auth"
import { signOut } from "next-auth/react"

interface Props {
    session: Session
}

export default function User({session}:Props){
    return <div onClick={()=>{
        signOut({callbackUrl:`${process.env.NEXT_PUBLIC_URL}/signup`});
    }} 
    className="cursor-pointer">
        <img src={`${session?.user?.image}`} alt="user" className="w-[50px] h-[50px] rounded-full"></img>
        
    </div>

}