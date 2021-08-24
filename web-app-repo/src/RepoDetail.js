import React, { useState, useEffect } from "react";
import {arrRepos} from './Constant';
import "./App.css";

function RepoDetail(props) {

  const [repoDetail, setRepoDetail] = useState({});

  useEffect(() => {
    const repoID = parseInt(props.match.params.repoid);
    const index = arrRepos.findIndex((repo) => repo.repoID === repoID);
    if (index !== -1){
      setRepoDetail(arrRepos[index])
    }
  }, []);

  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card">
          {
            Object.keys(repoDetail).length > 0 && <>
            <p>{`#${repoDetail.repoID}`}</p>
            <p>{repoDetail.repoName}</p>
            <p>{repoDetail.repoDetail}</p>
            <p>{repoDetail.repoURL}</p>
            </>
          }
          {
            Object.keys(repoDetail).length === 0 && 
            <p>We're sorry, Cound't find repo</p>
          }
        </div>
      </div>
    </div>
  );
}

export default RepoDetail;
