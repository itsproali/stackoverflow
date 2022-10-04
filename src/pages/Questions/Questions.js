import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineLike, AiFillEye } from "react-icons/ai";
import { BsChatRight } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import ReactTimeAgo from "react-time-ago";
import logo from "../../assets/stackoverflow_icon_logo.svg";
import Loading from "../../components/Loading/Loading";

const Questions = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow"
        );
        setQuestions(data?.items);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return <Loading/>;
  }

  return (
    <div className="w-[100%]">
      <h1 className="my-8 heading-style questions-heading text-xl font-semibold relative">
        Questions
      </h1>

      <div className="flex flex-wrap items-center gap-2 md:gap-6 mb-3">
        <button className="text-white bg-primary px-3 py-1 rounded-full">
          Interesting
        </button>
        <button className="px-3 py-1">Featured</button>
        <button className="px-3 py-1">Hot</button>
        <button className="px-3 py-1">Week</button>
        <button className="px-3 py-1">Month</button>
      </div>

      <hr />

      <div className="flex flex-col gap-4 mx-4 my-8">
        {questions?.map((question) => {
          const {
            title,
            tags,
            question_id,
            view_count,
            link,
            answer_count,
            score,
            last_activity_date,
            owner,
          } = question;
          return (
            <div
              key={question_id}
              className="py-2 flex items-center justify-between gap-4 border-b"
            >
              <div className="max-w-lg flex flex-col gap-4">
                <h2 className="font-semibold text-secondary">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-xs">
                  {tags?.map((tag, index) => (
                    <button
                      key={index}
                      className="px-2 py-1 border rounded-full"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <div className="flex items-center text-xs gap-2">
                  <span className="border p-1 text-primary rounded-full">
                    <HiOutlineDocumentText />
                  </span>
                  <span>
                    last activity:{" "}
                    <ReactTimeAgo date={last_activity_date} locale="UTC" />{" "}
                    <b>{owner.display_name}</b>
                  </span>
                </div>
              </div>

              {/* Right Side Activities */}
              <div className="hidden md:flex items-center gap-6">
                {/* Votes */}
                <div className="flex flex-col items-center gap-2">
                  <span>{score}</span>
                  <span>Votes</span>
                  <span>
                    <AiOutlineLike />
                  </span>
                </div>
                {/* Answer */}
                <div className="flex flex-col items-center gap-2">
                  <span>{answer_count}</span>
                  <span>Answer</span>
                  <span>
                    <BsChatRight />
                  </span>
                </div>
                {/* Views */}
                <div className="flex flex-col items-center gap-2">
                  <span>{view_count}</span>
                  <span>Views</span>
                  <span>
                    <AiFillEye />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="my-16 flex flex-col items-center justify-center text-center">
        <div className="mb-8">
          <button className="rounded-full bg-white shadow-lg shadow-primary p-3 mb-8">
            <img src={logo} alt="stackoverflow" className="inline-block w-20 h-20" />
          </button>
          <div className="flex items-center gap-1">
            <div className="h-1 w-10 bg-primary rounded-full"></div>
            <div className="h-1 w-2 bg-secondary rounded-full"></div>
            <div className="h-1 w-32 bg-primary rounded-full"></div>
            <div className="h-1 w-1 bg-primary rounded-full"></div>
            <div className="h-1 w-14 bg-secondary rounded-full"></div>
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl">Looking for more?</h2>
          <p className="my-2 max-w-lg">
            Browse the{" "}
            <span className="text-secondary hover:underline cursor-pointer">
              complete list of questions
            </span>
            , or{" "}
            <span className="text-secondary hover:underline cursor-pointer">
              popular tags
            </span>
            . Help us answer unanswered questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
