import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      prevArticles: [],
      loading: false,
      totalResult: 0,
      page: 1
    };
  }

  async componentDidMount() {
    try {
      let url = `https://gnews.io/api/v4/${this.props.type}?country=${!this.props.search?this.props.country:"in"}&q=${this.props.search}&category=${this.props.category}&apikey=eed928c2f5eadb730fd757590b0394f1&page=${this.state.page}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      if (data.status === 429) {
        throw new CheckCondition("API PER MINUTE LIMIT EXCCEDED "); 
      }
      if (data.status === 403) {
        throw new CheckCondition("API DAILY LIMIT EXCCEDED "); 
      }
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        totalResult: parsedData.totalResult,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

   capitalizeFirstLowercaseRest = (str) => {
    return (
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    );
  };

  render() {
    return (
      <>
        <h2 className={`text-center text-${this.props.mode==='light'?'dark':'light'}`} style={{marginTop:"80px"}} >NEWSTIME - Top {this.capitalizeFirstLowercaseRest(this.props.category)} Headlines</h2>
        <div className={`custom-control custom-switch text-${this.props.mode==='light'?'dark':'light'}`} style={{display:"flex" ,justifyContent:"end", marginRight: "25px" }} >
            <input type="checkbox" className="custom-control-input" onClick={this.props.toggleMode} id="customSwitch1"/>
            <label className="custom-control-label" htmlFor="customSwitch1">Enable {this.props.mode==='light'?'Dark':'Light'}Mode</label>
        </div>
        {this.state.loading && <Spinner/>}
          <div className="container">
            <div className="row">
              {this.state.articles && this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imgUrl={element.image}
                      url={element.url}
                      author={element.author}
                      publishedAt={element.publishedAt}
                      mode={this.props.mode}
                    />
                  </div>
                );
              })}
            </div>
          </div>

      </>
    );
  }
}

class CheckCondition extends Error { 
  constructor(msg) { 
      super(msg); 
  } 
} 