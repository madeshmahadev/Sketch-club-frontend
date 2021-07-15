import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";


import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

import Footer from "../App/components/Footer"
import Nav from "../App/components/Nav"
import SocialMedia from "../App/components/SocialMedia"

import ARTICLE_QUERY from "../../queries/article/article";


const Article = () => {
  let { id } = useParams();
  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { article } }) => {
        const imageUrl = article.Media.url;

        const gall = Object.values(article.Gallery);
        const gallery = [];
        for(var i in gall){ gallery.push(gall[i].url) }
        return (

          <div className="pusher">

          <div className="ui inverted vertical masthead center aligned segment" style={{background:"unset", minHeight: "fit-content", marginBottom: "3rem"}}>
            <Nav />
            <div className="ui text container">
              <img class="ui medium circular image" src={imageUrl} style={{margin: "auto"}} />
              <h1 className="ui header massive label" id="article-massive-label" style={{fontWeight: "900", textTransform: "uppercase"}}>{article.Title}</h1>

              <div className="article-content">
                <a class="ui teal ribbon label">
                  {article.category.Name}
                </a>
                  <ReactMarkdown linkTargets="_blank"  />
                    <div class="ui medium images">
                          {
                              Object.entries(gallery).map(([key, val]) =>
                                        <img src={val} />
                              )
                          }
                    </div>

                    <div class="ui label" style={{marginTop: "2rem"}}>
                      Published Date
                      <div class="detail"><Moment format="MMM Do YYYY">{article.PublishedDate}</Moment></div>
                    </div>
              </div>
            </div>
            </div>



            <SocialMedia />
            <Footer />
          </div>




        );
      }}
    </Query>
  );
};

export default Article;
