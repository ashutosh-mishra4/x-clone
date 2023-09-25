import React, { useState, useEffect } from "react";
import { trendingHashtags } from "../mockData";

function MiniTrending() {
  const [trendingData, setTrendingData] = useState([]);
  const firstFiveHashtags = trendingHashtags.slice(0, 5);

  useEffect(() => {
    setTrendingData(firstFiveHashtags);
  }, []);

  return (
    <div className="bg-slate-50 flex flex-col gap-2 w-72 ml-4 p-4">
      <p className="font-bold text-xl">What's Happening?</p>
      {firstFiveHashtags.map((hashtag) => {
        return (
          <article key={hashtag.id} className="pb-2">
            <div className="flex text-sm text-lightGray">
              <p className="">{hashtag.category} •</p>
              <p className="">Trending</p>
            </div>
            <p className="font-bold">{hashtag.hashtag}</p>
            <p className="text-lightGray text-sm">
              {hashtag.numberOfPosts} posts
            </p>
          </article>
        );
      })}
      <p className="text-twitterBlue">Show more</p>
    </div>
  );
}

export default MiniTrending;
