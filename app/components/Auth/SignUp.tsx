"use client"
import ImageUrl from '@/public/images/chair.jpg'
import { signIn } from 'next-auth/react';
import Image from 'next/image'
import react from "react"
export default function SignUp(){
    return(
     <div className="overflow-hidden h-[84vh] flex flex-col items-center justify-center">
       
        <Image src={ImageUrl} alt='image' width={400} height={200} />
        <button onClick={()=>{signIn('google',{callbackUrl:process.env.NEXT_PUBLIC_URL})}} className="px-12 py-3 mt-8 bg-purple-700 hover:bg-purple-900 transition-all duration-300 rounded-lg text-white">
                Sign Up Now
            </button>
            
    </div>
    );
}