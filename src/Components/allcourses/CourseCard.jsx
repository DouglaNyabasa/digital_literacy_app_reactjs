
import React, { useEffect, useState } from 'react';
import { coursesCard } from "../../dummydata";
import video6 from "../../videos/video6.mp4";


const CourseCard = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=digital%20literacy&type=video&maxResults=20&key=AIzaSyCaOLPlP8g-piUR_FWK03wgwR1PtLm-S9Y`);
       
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setVideos(data.items || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <div>Loading videos...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <div className="videos-container">
      <h2>Digital Literacy Videos</h2>
      <div className="videos-grid">
        {videos.length === 0 ? (
          <p>No videos found.</p>
        ) : (
          videos.map((video, index) => (
            <div className="video-card" key={index}>
              <img 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.title} 
                className="video-image" 
              />
              <h3 className="video-title">{video.snippet.title}</h3>
              <p className="video-description">{video.snippet.description || 'No description available.'}</p>
              <a 
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="watch-button"
              >
                Watch Video
              </a>
            </div>
          ))
        )}
      </div>
    </div>
    </>
  );
};

export default CourseCard;
