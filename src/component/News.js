import React, { Component } from "react";
import Newsitems from "./Newsitems";
import PropTypes from "prop-types";

export default class News extends Component {
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
  };
  constructor() {
    super();
    console.log("constructor run");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  preClick = async () => {
    console.log("perclick");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=37732deb474643c594a7afef1656ff5c&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);

    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };
  nextClick = async () => {
    console.log("next");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=37732deb474643c594a7afef1656ff5c&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;

      let data = await fetch(url);

      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };

  async componentDidMount() {
    // console.log("dnjdhge");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=37732deb474643c594a7afef1656ff5c&page=1&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);

    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
  }

  render() {
    return (
      <>
        <div className="container  ">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 mx-5" key={element.url}>
                  <Newsitems
                    title={element.title ? element.title : " "}
                    description={
                      element.description ? element.description : " "
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://image.cnbcfm.com/api/v1/image/106792254-1605109106759-gettyimages-1229548499-20090101201109-99-269063.jpeg?v=1605109305&w=1920&h=1080  "
                    }
                    // default img url
                    newsUrl={element.url ? element.url : "    "}
                    author={element.author ? element.author : "Hindustantimes"}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-info"
            onClick={this.preClick}
          >
            Previous
          </button>
          <button
            type="button" className="btn btn-info" onClick={this.nextClick} > Next</button>
        </div>
      </>
    );
  }
}
