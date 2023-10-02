import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link, useParams } from 'react-router-dom';
import './GitHubRepoCarousel.css';
import pyramid from './static/pyramid-double.gif';
import GITHUB_API_TOKEN from './config/config.js';

console.log("GitHub API Token:", GITHUB_API_TOKEN);

const GitHubRepoCarousel = () => {
  const { repoOwner } = useParams();

  const [repoData, setRepoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${repoOwner}/repos?per_page=10&page=1`, {
        headers: {
          Authorization: `${GITHUB_API_TOKEN}`,
        },
      })
      .then((response) => {
        setRepoData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching repository data:', error);
        setIsLoading(false);
      });
  }, [repoOwner]);

  const carouselSettings = {
    infinite: true,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider
        {...carouselSettings}
        style={{
          maxWidth: '90%', // Adjust the width as needed
          margin: '0 auto', // Center-align the Slider
        }}
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          repoData.map((repo) => (
            <div key={repo.id} className="github-repo-slide">
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>
              <p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </p>
              <p>Last Updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
              <p>Primary Language: {repo.language}</p>
            </div>
          ))
        )}
      </Slider>

      <div className="button-container">
        <Link to="/" className="home-link-button">
          <div className="button-content">
            <img src={pyramid} alt="Pyramid" className="button-image" />
            <span>Go Back to Home</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GitHubRepoCarousel;



// GitHubRepoCarousel.js