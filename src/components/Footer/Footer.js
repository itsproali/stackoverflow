import React from "react";
import { FaTwitter, FaFacebook, FaDribbble } from "react-icons/fa";

const Footer = () => {
  const technologies = [
    "Stack Overflow",
    "Programmers",
    "Server Fault",
    "Unix & Linux",
    "Super User",
    "Ask Different (Apple)",
    "Web Applications",
    "WordPress Development",
    "Ask Ubuntu",
    "Geographic Information System",
    "Webmasters",
    "Electrical Engineering",
    "Game Development",
    "Android Enthusiasts",
    "TeX = LaTeX",
  ];
  const life_arts = [
    "Photography",
    "Science Fiction & Fantasy",
    "Graphic Design",
    "Movies & TV",
    "Seasoned Advice (cooking)",
    "Home Improvement",
    "Personal Finance & Money",
  ];
  const culture_recreation = [
    "English Language & Usage",
    "Skeptics",
    "Mi Yodeya (Jodaism)",
    "Travel",
    "Christianity",
    "Arqade (Gaming)",
    "Bicycles",
  ];
  const science = [
    "Mathematics",
    "Cross Validated (stats)",
    "Theoretical Computer Science",
    "Physics",
    "MathOverflow",
    "Chemistry",
    "Biology",
  ];
  const others = [
    "Stack Apps",
    "Meta Stack Exchange",
    "Area 51",
    "Stack Overflow Careers",
  ];
  return (
    <div className="w-full container mx-auto">
      <div className="flex items-center justify-between flex-col sm:flex-row my-8">
        <div className="flex items-center flex-wrap gap-6">
          <span className="hover:underline cursor-pointer">About</span>
          <span className="hover:underline cursor-pointer">Tour</span>
          <span className="hover:underline cursor-pointer">Help</span>
          <span className="hover:underline cursor-pointer">Blog</span>
          <span className="hover:underline cursor-pointer">Chat</span>
          <span className="hover:underline cursor-pointer">Legal</span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Work here</span>
          <span className="hover:underline cursor-pointer">
            advertising info
          </span>
          <span className="hover:underline cursor-pointer">Contact us</span>
          <span className="hover:underline cursor-pointer">Feedback</span>
        </div>
        <div className="flex items-center gap-3">
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaDribbble />
          </span>
        </div>
      </div>

      <div className="h-[1px] w-full bg-accent"></div>

      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Technology */}
        <div>
          <h2 className="font-semibold mb-4 uppercase">Technology</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {technologies?.map((technology) => (
              <div key={technology}>
                <span className="hover:underline cursor-pointer text-xs">
                  {technology}
                </span>
              </div>
            ))}
            <span className="hover:underline cursor-pointer text-xs font-semibold">
              50 + more
            </span>
          </div>
        </div>

        {/* Life And Culture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Life/Arts */}
          <div>
            <h2 className="font-semibold mb-4 uppercase">LIfe/Arts</h2>
            {life_arts?.map((item) => (
              <div key={item}>
                <span className="hover:underline cursor-pointer text-xs">{item}</span>
              </div>
            ))}
            <span className="hover:underline cursor-pointer text-xs font-semibold">
              19 more
            </span>
          </div>
          {/* Culture/Recreation */}
          <div>
            <h2 className="font-semibold mb-4 uppercase">
              CUlture/Recreation
            </h2>
            {culture_recreation?.map((item) => (
              <div key={item}>
                <span className="hover:underline cursor-pointer text-xs">{item}</span>
              </div>
            ))}
            <span className="hover:underline cursor-pointer text-xs font-semibold">
              21 more
            </span>
          </div>
        </div>

        {/* Science And Others */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Science*/}
          <div>
            <h2 className="font-semibold mb-4 uppercase">Science</h2>
            {science?.map((item) => (
              <div key={item}>
                <span className="hover:underline cursor-pointer text-xs">{item}</span>
              </div>
            ))}
            <span className="hover:underline cursor-pointer text-xs font-semibold">
              5 more
            </span>
          </div>
          {/* Others */}
          <div>
            <h2 className="font-semibold mb-4 uppercase">Others</h2>
            {others?.map((item) => (
              <div key={item}>
                <span className="hover:underline cursor-pointer text-xs">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-accent"></div>

      <div className="flex items-center justify-between flex-col md:flex-row text-xs my-8">
        <p>site design / logo &copy; 2016 Stack Exchange Inc; user contribution licensed under cc by-sa 3.0 attribution required.</p>
        <p>rev 2016.8.1.3852</p>
      </div>
    </div>
  );
};

export default Footer;
