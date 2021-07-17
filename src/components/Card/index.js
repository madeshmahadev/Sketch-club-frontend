import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

function col (article) 
{
  if(article.category.Name == "Upcoming Event")
    {
      return(<div className="ui teal ribbon label">{article.category.Name}</div>);
    }
  else
    {
      return(<div className="ui yellow ribbon label">{article.category.Name}</div>);
    }
}

const Card = ({ article }) => {
  const imageUrl =  article.Media.url;
  return (
                <a class="ui card" href={`/events/${article.id}`}>
                  <div class="image">
                   {col(article)}
                      <img src={imageUrl} alt={article.Title} />
                  </div>
                </a>

  );
};

export default Card;
