/* eslint-disable react/prop-types */
import React from "react";

const ArticleList = ({ articles }) => {
  return (
    <div className="flex items-center justify-center px-10">
      <ul className="grid items-center grid-cols-2 justify-around gap-10">
        {articles.map((article) => (
          <li key={article.article_id} className="w-[650px] bg-slate-300 h-fit">
            <div className="relative w-full p-8">
              <img
                src={article.image_url}
                alt="News Image"
                className="w-full"
              />
              <span className="absolute bottom-4 bg-white py-2 px-6 rounded-sm text-zinc-800 left-4 font-semibold text-xl">
                {article.country}
              </span>
              <span className="absolute bottom-4 bg-white py-2 px-6 rounded-sm text-zinc-800 right-4 font-semibold  text-xl">
                {article.category}
              </span>
            </div>
            {/* <img src={article.image_url} alt="" /> */}
            <div className="px-4 py-2">
        <h1 className="text-3xl font-bold">
          {article.title}
        </h1>
      </div>
      <div className="px-4 py-2 ">
        <p className="text-[18px] text-justify text-zinc-700 font-semibold">
          {article.content}
        </p>
      </div>
      <div className="px-4 py-2 flex items-center justify-between">
        <div>
            <h1 className="text-slate-800 font-extrabold text-lg">{article.source_id}</h1>
            <h1 className="text-slate-800 font-extrabold text-lg">{article.pubDate}</h1>
        </div>
        <div>
          <a 
          href={article.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-6 py-3 bg-zinc-800 text-xl hover:bg-zinc-950 duration-300 text-white rounded-md">
            Full Article
          </a>
        </div>
      </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
