import JobCart from "@/app/components/Helper/JobCart";
import { authOptions } from "@/auth";
import JobData from "@/data";
import { getServerSession } from "next-auth";
import React from "react";
import Apply from "@/app/components/Helper/Apply";
import Link from "next/link";



interface Params {
    id: string;
}

interface JobDetailsProps {
    params: Params;
}

export default async function jobdetails({ params }:JobDetailsProps){
    const singleJob=JobData.find((job)=>job.id.toString()==params.id);
    const session= await getServerSession(authOptions);

    const firstFourJob=JobData.slice(0,4);
    if (!singleJob) {
        return (
            <div className="mt-20 mb-12">
                <div className="w-[80%] mx-auto">
                    Job not found
                </div>
            </div>
        );
    }
    return <div className="mt-20 mb-12">
        <div className="block sm:flex items-center justify-between w-[80%] mx-auto">
            <div className="flex-[0.7]">
                <JobCart job={singleJob} />
            </div>
            {session && <Apply />}
            {!session && (
                <Link href='/signup'>
                    <button className="px-8 py-3 bg-emerald-600 rounded-lg text-white">
                        SignUp to Apply
                    </button>
                </Link>
            )}
        </div>
        <div className="mt-16 w-[80%] mx-auto">
            <h1 className="text-[20px] font-semibold">Job Description</h1>
            <p className="mt-4 text-black text-opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita, ab modi asperiores veritatis excepturi dignissimos et at pariatur, optio rem inventore vero exercitationem esse laboriosam provident? Quidem delectus deleniti provident obcaecati quod sapiente quam, modi quos similique enim? Aut nulla repellendus consequuntur. Tenetur alias, ea excepturi reiciendis dolor laborum!</p>

            <h1 className="text-[20px] mt-8 font-semibold">Key Responsibility</h1>
            <p className="mt-4 text-black text-opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita, ab modi asperiores veritatis excepturi dignissimos et at pariatur, optio rem inventore vero exercitationem esse laboriosam provident? Quidem delectus deleniti provident obcaecati quod sapiente quam, modi quos similique enim? Aut nulla repellendus consequuntur. Tenetur alias, ea excepturi reiciendis dolor laborum!</p>

            <h1 className="text-[20px] mt-8 font-semibold">Skills</h1>
            <ul className="mt-4">
                <li className="mt-4 text-black text-opacity-70"> ReactJS</li>
                <li className="mt-4 text-black text-opacity-70"> JavaScript</li>
                <li className="mt-4 text-black text-opacity-70"> TypeScript</li>
                <li className="mt-4 text-black text-opacity-70"> NodeJS</li>
                <li className="mt-4 text-black text-opacity-70"> ExpressJS</li>
                <li className="mt-4 text-black text-opacity-70"> NextJS</li>
            </ul>
            <h1 className="text-[20px] mt-8 font-semibold">Related Jobs</h1>
            <div className="mt-4">
            {
                firstFourJob.map((job)=>{
                    return <Link href={`/job/jobdetails/${job.id}`} className="space-y-6" key={job.id}>
                        <JobCart job={job}/>
                        </Link>
                })
            }
        </div>


        </div>
    
    </div>
}