import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GitHubRepoSlide.css'

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
  );
};

export default GitHubRepoSlide;



//GitHubRepoSlide.js


























/*import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// Define the Card component here or import it from the appropriate file
const Card = ({ imagen }) => (
  <div className="card">
    <img src={imagen} alt="Card" />
  </div>
);

// Define the Carousel component here or import it from the appropriate file
const Carousel = ({ cards }) => (
  <div className="carousel">
    {cards.map((card) => (
      <Card key={card.key} imagen={card.content.props.imagen} />
    ))}
  </div>
);

function GitHubCarousel() {
  let cards = [
    // ... the cards array from your example ...
  ];

  return (
    <div className="GitHubCarousel">
      <Carousel cards={cards} />
    </div>
  );
}

export default GitHubCarousel;

*/



