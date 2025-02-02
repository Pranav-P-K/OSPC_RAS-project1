'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <div className="main-content">
          <h1 className="main-title">Mission</h1>
          <h2 className="subtitle">Data Impossible</h2>
          <p className="event-info">6th AI/ML data set event</p>
          <div className="logos">
            <div className="logo-placeholder">
              <Image src="/ras.png" alt="RAS Logo" width={50} height={50} />
            </div>
            <span className="separator">X</span>
            <div className="logo-placeholder">
              <Image src="/ospc.png" alt="OPSC Logo" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="card">
          <h1 className="prize-pool">Prize Pool: ₹55,000</h1>
          <div className="content">
            <div className="details">
              <p>📆 4/2/25</p>
              <p>🕒 9am - 6pm</p>
            </div>
            <div className="line"></div>
            <div className="team-pricing">
              <p>Team of 1: ₹100</p>
              <p>Team of 2: ₹180</p>
              <p>Team of 3: ₹260</p>
              <button className="register-btn">Register Now</button>
            </div>
            <div className="line"></div>
            <div className="details">
              <p>📍 kamaraj <br /> auditorium <br /> AB3, VIT Chennai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}