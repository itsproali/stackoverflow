import React from "react";
import {
  MdLocationOn,
  MdSettingsRemote,
  MdArrowForwardIos,
} from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import icon from "../../assets/stackoverflow_icon_logo.svg";

const Jobs = () => {
  const jobs = [
    {
      title: "Front End Developer with Angular",
      company: "WalletHub",
      location: "Washington, DC",
      work_location: "Remote",
      tags: ["angular js", "cordova"],
    },
    {
      title: "Senior iOS / iPhone Engineer",
      company: "Perk.com INC",
      location: "Bengaluru, India",
      work_location: "In Office",
      tags: ["iOS", "iPhone"],
    },
    {
      title: "Software Engineer",
      company: "SparkNET Technologies",
      salary: "$25,000 - $40,000",
      location: "No Location",
      work_location: "Remote",
      tags: ["iOS", "ruby on rails"],
    },
  ];
  return (
    <div className="w-[30%] bg-gray-100 p-8 hidden lg:block">
      {/* Jobs */}
      <h1 className="my-8 heading-style jobs-heading text-xl font-semibold relative">
        Looking out for...
      </h1>

      <div className="flex gap-6 mt-14">
        <div className="flex items-center flex-col">
          <input type="radio" name="first" id="first" />
          <div className="bg-accent w-[1px] h-44"></div>
          <input type="radio" name="second" id="second" />
          <div className="bg-accent w-[1px] h-44"></div>
          <input type="radio" name="third" id="third" />
          <div className="bg-accent w-[1px] h-40"></div>
        </div>
        <div className="flex items-start flex-col gap-6">
          {jobs?.map((job) => (
            <div key={job.title} className="pb-6 border-b">
              <h2 className="text-secondary">{job.title}</h2>
              <h3 className="mb-1">{job.company}</h3>
              {job.salary && (
                <h3 className="mb-1 text-green-700">{job?.salary}</h3>
              )}
              <div className="flex items-center text-xs gap-3 mb-3">
                <div className="flex items-center gap-1">
                  <span>
                    <MdLocationOn />
                  </span>
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>
                    {job.work_location === "Remote" ? (
                      <MdSettingsRemote />
                    ) : (
                      <FaBuilding />
                    )}
                  </span>
                  <span>{job.work_location}</span>
                </div>
              </div>
              <div className="flex gap-2 text-xs">
                {job.tags.map((tag) => (
                  <div key={tag} className="rounded-full px-2 py-1 border">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button className="text-secondary flex items-center gap-2">
            <span className=" hover:underline">View All Jobs</span>
            <span>
              <MdArrowForwardIos />
            </span>
          </button>
        </div>
      </div>

      {/* Network Question */}
      <h1 className="mt-32 mb-8 heading-style network-heading text-xl font-semibold relative">
        Network Questions
      </h1>

      <div className="flex flex-col items-start gap-4 mt-14">
        <div className="w-full flex items-start gap-1 pb-2 border-b">
          <div>
            <img src={icon} alt="icon" className="inline-block h-[30px] w-[30px]" />
          </div>
          <h2 className="text-secondary text-xs hover:underline cursor-pointer">
            Where there who were against giving women the right to vote?
          </h2>
        </div>
        <div className="w-full flex items-start gap-1 pb-2 border-b">
          <div>
            <img src={icon} alt="icon" className="inline-block h-[30px] w-[30px]" />
          </div>
          <h2 className="text-secondary text-xs hover:underline cursor-pointer">
           Why does everybody typedef over standard C types?
          </h2>
        </div>
        <div className="w-full flex items-start gap-1 pb-2 border-b">
          <div>
            <img src={icon} alt="icon" className="inline-block h-[30px] w-[30px]" />
          </div>
          <h2 className="text-secondary text-xs hover:underline cursor-pointer">
            An English word describing a pseudo-job
          </h2>
        </div>
        <div className="w-full flex items-start gap-1 pb-2 border-b">
          <div>
            <img src={icon} alt="icon" className="inline-block h-[30px] w-[30px]" />
          </div>
          <h2 className="text-secondary text-xs hover:underline cursor-pointer">
            Are you obligated to run to make it to the next gate on a connection?
          </h2>
        </div>
        <div className="w-full flex items-start gap-1 pb-2 border-b">
          <div>
            <img src={icon} alt="icon" className="inline-block h-[30px] w-[30px]" />
          </div>
          <h2 className="text-secondary text-xs hover:underline cursor-pointer">
            Does 1 pixel have a standard size?
          </h2>
        </div>
        <button className="text-secondary flex items-center gap-2">
            <span className=" hover:underline">Show All Questions</span>
            <span>
              <MdArrowForwardIos />
            </span>
          </button>
      </div>
    </div>
  );
};

export default Jobs;
