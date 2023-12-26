/* eslint-disable react/prop-types */

const NewsArticle = ({ article }) => {
  const {
    author,
    content,
    description,
    publishedAt,
    source,
    title,
    url,
    urlToImage
  } = article;

  return (
    <div className="news-article">
      <h2>{title}</h2>
      <p>Published by: {source.name}</p>
      <p>Author: {author}</p>
      <p>Published at: {publishedAt}</p>
      <p>Description: {description}</p>
      <img src={urlToImage} alt={title} />
      <p>Content: {content}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>
    </div>
  );
};

export default NewsArticle;