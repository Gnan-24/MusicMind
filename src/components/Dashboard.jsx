import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TiltCard from './TiltCard';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
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
                {/* Music Insights (Consolidated) - Top: 100px */}
                <div className="section-wrapper" style={{ position: 'sticky', top: '100px', zIndex: 1, width: '1000px' }}>
                    <TiltCard className="glass-panel section-card insights-card">
                        <h3>Music Insights</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '60%' }}>
                            <div style={{ textAlign: 'center' }}>
                                <h4 style={{ fontSize: '3rem', color: 'var(--accent-color)', margin: 0 }}>Top Songs</h4>
                                <p style={{ color: 'var(--text-secondary)' }}>Your most played hits</p>
                            </div>
                            <div style={{ width: '1px', height: '100px', background: 'var(--glass-border)' }}></div>
                            <div style={{ textAlign: 'center' }}>
                                <h4 style={{ fontSize: '3rem', color: '#a29bfe', margin: 0 }}>Genres</h4>
                                <p style={{ color: 'var(--text-secondary)' }}>Your vibe profile</p>
                            </div>
                        </div>
                        <button className="explore-btn" onClick={() => navigate('/music-insights')}>View Full Insights</button>
                    </TiltCard>
                </div>

                {/* Friends Comparison - Top: 180px */}
                <div className="section-wrapper" style={{ position: 'sticky', top: '180px', zIndex: 3, width: '1000px' }}>
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
                </div>

                {/* Recommendations - Top: 220px */}
                <div className="section-wrapper" style={{ position: 'sticky', top: '220px', zIndex: 4, width: '1000px' }}>
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
