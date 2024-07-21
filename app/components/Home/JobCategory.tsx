import Heading from "../Helper/Heading";
import JobCategoryCard from "../Helper/JobCategoryCard";

export default function JobCategory(){
    return <div className="pt-20 pb-12">
        <Heading mainHeading="Popular Job Categories" subHeading="2024 jobs live-293 added today" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem] items-center">
        
            <JobCategoryCard image='/images/icon1.png' category="Finance" openPosition='23' />
            <JobCategoryCard image='/images/icon2.png' category="Marketing" openPosition='33' />
            <JobCategoryCard image='/images/icon3.png' category="Design" openPosition='13' />
            <JobCategoryCard image='/images/icon4.png' category="Development" openPosition='43' />
            <JobCategoryCard image='/images/icon5.png' category="Human Resource" openPosition='203' />
            <JobCategoryCard image='/images/icon6.png' category="Automotive" openPosition='230' />
            <JobCategoryCard image='/images/icon7.png' category="Customer Services" openPosition='23' />
            <JobCategoryCard image='/images/icon8.png' category="Health & Care" openPosition='23' />
            <JobCategoryCard image='/images/icon9.png' category="Project Manager" openPosition='23' />
            
        
      </div>
    </div>
}