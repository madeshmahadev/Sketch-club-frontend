import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const Card = ({ article }) => {
  const imageUrl = "https://sketchclub.herokuapp.com" + article.Media.url;
  return (





                <a class="ui card" href={`/events/${article.id}`}>
                  <div class="image">
                    <div className="ui yellow ribbon label">{article.category.Name}</div>
                      <img src={imageUrl} alt={article.Title} />
                  </div>

                </a>








  );
};

export default Card;
