import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link
import './GitHubRepoSlide.css';
import pyramid from './static/pyramid-double.gif';
// export default GitHubRepoSlide;

const GitHubRepoSlide = ({ repoOwner, repoName }) => {
  const [repoData, setRepoData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      axios
        .get(`https://api.github.com/repos/${repoOwner}/${repoName}`)
        .then((response) => {
          setRepoData(response.data);
          setIsLoading(false); // Set isLoading to false when data is fetched
        })
        .catch((error) => {
          console.error('Error fetching repository data:', error);
          setIsLoading(false); // Set isLoading to false on error as well
        });
    }
  }, [repoOwner, repoName, isLoading]);

  return (
    <div>
      <div className="github-repo-slide">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2>{repoData?.name}</h2>
            <p>{repoData?.description}</p>
            <p>
              <a href={repoData?.html_url} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </p>
            <p>Last Updated: {new Date(repoData?.updated_at).toLocaleDateString()}</p>
            <p>Primary Language: {repoData?.language}</p>
          </>
        )}
      </div>
      {/* Add a div for the "Go Back to Home" button */}
      <div className="button-container">
        {/* Add a className to the link for styling */}
        <Link to="/" className="home-link-button">
          <div className="button-content"> {/* Add a class for styling */}
            <img src={pyramid} alt="Pyramid" />
            <span>Go Back to Home</span>
          </div>
        </Link>
      </div>
    </div>
  );
        };
  
export default GitHubRepoSlide;







