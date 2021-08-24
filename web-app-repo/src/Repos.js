import React, { useState, useEffect } from "react";
import {
  Link
} from "react-router-dom";
import "./App.css";

class App extends React.Component {
  state = {
    filter: "",
    arrRepos : [
      {
        "repoID": "1",
        "repoName": "ReactJS Component 1",
        "repoDetail": "This reactjs component 1.",
        "repoURL": "https://github.com/mohsinniveus/react-redux-jwt-auth"
      },
      {
        "repoID": "2",
        "repoName": "ReactJS Component 2",
        "repoDetail": "This reactjs component 2.",
        "repoURL": "https://github.com/mohsinniveus/react-redux-jwt-auth"
      },
      {
        "repoID": "3",
        "repoName": "ReactJS Component 3",
        "repoDetail": "This reactjs component 3.",
        "repoURL": "https://github.com/mohsinniveus/react-redux-jwt-auth"
      }
    ]
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };


  render() {
    const { filter, arrRepos } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = arrRepos.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    return (
      <div>
        <input value={filter} onChange={this.handleChange} />
        {filteredData.map(repo => (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-5">
          <div className="card">
            <Link to={{pathname: `/repodetail/${repo.blogID}`, id: repo.blogID, item: repo}} >
              <div class="card-body">
                <h5 class="card-title">{`#${repo.repoID}`}</h5>
                <p class="card-text">{repo.repoName}</p>
                <p class="card-text">{repo.repoURL}</p>
              </div>
            </Link>
          </div>
        </div>
          
        ))}
      </div>
    );
  }
}

export default App;