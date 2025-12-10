import React, { useEffect, useState } from 'react';
import TiltCard from './TiltCard';
import './Dashboard.css';

const Dashboard = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const topSongs = Array(10).fill(null).map((_, i) => ({
        id: i,
        title: `Song Title ${i + 1}`,
        artist: `Artist Name ${i + 1}`,
        cover: `https://via.placeholder.com/50?text=${i + 1}`
    }));

    const genres = [
        { name: 'Pop', percent: 80 },
        { name: 'Rock', percent: 60 },
        { name: 'Hip-Hop', percent: 45 },
        { name: 'Jazz', percent: 30 }
    ];

    const friends = [
        { name: 'Alice', match: '95%' },
        { name: 'Bob', match: '82%' },
        { name: 'Charlie', match: '60%' }
    ];

    const recommendations = Array(5).fill(null).map((_, i) => ({
        id: i,
        title: `New Gem ${i + 1}`,
        artist: `Undiscovered Artist`,
        link: 'https://open.spotify.com'
    }));

    return (
        <div className={`dashboard-container ${isVisible ? 'visible' : ''}`}>
            <nav className="glass-panel navbar">
                <h2 className="logo">MusicAnalyzer</h2>
                <div className="user-profile">Hello, Music Lover</div>
            </nav>

            <main className="dashboard-grid">
                {/* Top 10 Songs */}
                <TiltCard className="glass-panel section-card songs-section">
                    <h3>Top 10 Songs</h3>
                    <ul className="song-list">
                        {topSongs.map((song, i) => (
                            <li key={song.id} className="song-item" style={{ animationDelay: `${i * 0.1}s` }}>
                                <span className="rank">{i + 1}</span>
                                <div className="song-info">
                                    <div className="song-title">{song.title}</div>
                                    <div className="song-artist">{song.artist}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </TiltCard>

                {/* Right Column */}
                <div className="right-column">
                    {/* Genres */}
                    <TiltCard className="glass-panel section-card genres-section">
                        <h3>Top Genres</h3>
                        <div className="genre-bars">
                            {genres.map(g => (
                                <div key={g.name} className="genre-row">
                                    <span>{g.name}</span>
                                    <div className="progress-bar-bg">
                                        <div className="progress-bar-fill" style={{ width: `${g.percent}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TiltCard>

                    {/* Friends Comparison */}
                    <TiltCard className="glass-panel section-card friends-section">
                        <h3>Compare with Friends</h3>
                        <div className="friends-list">
                            {friends.map(f => (
                                <div key={f.name} className="friend-item">
                                    <span>{f.name}</span>
                                    <span className="match-score">{f.match} Match</span>
                                </div>
                            ))}
                        </div>
                    </TiltCard>

                    {/* Recommendations */}
                    <TiltCard className="glass-panel section-card recs-section">
                        <h3>Recommended For You</h3>
                        <ul className="recs-list">
                            {recommendations.map(r => (
                                <li key={r.id} className="rec-item">
                                    <div className="rec-info">
                                        <div className="song-title">{r.title}</div>
                                        <div className="song-artist">{r.artist}</div>
                                    </div>
                                    <a href={r.link} target="_blank" rel="noopener noreferrer" className="spotify-link">
                                        Open
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </TiltCard>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
