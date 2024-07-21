import JobCart from "@/app/components/Helper/JobCart";
import JobData from "@/data";
import Link from "next/link";

export default function(){
    return <div className="mt-12 w-[80%] mx-auto mb-12">
        <div className="mb-[2rem]">
            <h1 className="font-semibold">Show Result ({JobData.length})</h1>
        </div>
        <div className="space-y-8">
            {
                JobData.map((job)=>{
                    return <Link href={`/job/jobdetails/${job.id}`} key={job.id}>
                        <JobCart job={job}/>
                        </Link>
                })
            }
        </div>
    </div>
}