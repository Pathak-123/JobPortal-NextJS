import react from "react"
import Hero from "./Hero"
import JobCategory from "./JobCategory"
import FeaturedJobs from "./FeaturedJobs"

export default function HomePage(){
    return (
        <div>
            <Hero />
            <JobCategory />
            <FeaturedJobs />

        </div>
    )
}