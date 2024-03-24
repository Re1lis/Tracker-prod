import React, { useState, useEffect } from "react";
import Shop from './conponents/shop/shop'
import ProfileUser from './conponents/profile/profile'
import GoalList from './conponents/arrayGoals/arrayGoals'
import HomeSection from "./conponents/home-section-site/home-section";

export default function App() {
  const [coinsCount, setCoinsCount] = useState(parseInt(localStorage.getItem('coinsCount')) || 0);
  const [level, setLevel] = useState(parseInt(localStorage.getItem('level')) || 1);
  const [progress, setProgress] = useState(parseInt(localStorage.getItem('progress')) || 0);
  const [showUpNewLevel, setShowUpNewLevel] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [isNewLevelReached, setIsNewLevelReached] = useState(false); 

  const changeCountCoins = () => {
    setCoinsCount(coinsCount + 5);
  };

  useEffect(() => {
    if (progress === 70) {
      setProgress(0);
      setLevel((prevLevel) => prevLevel + 1);
      setShowUpNewLevel(true);
      setIsNewLevelReached(true);
      setTimeout(() => {
        setShowUpNewLevel(false);
        setIsNewLevelReached(false); 
      }, 3000);
    }
  }, [progress]);

  const changeProgressCount = () => {
    setProgress(progress + 10);

    if (progress === 80) {
      setProgress(0);
      setLevel(level + 1);
    }
  };

  const downCountCoins = () => {
    setCoinsCount(coinsCount - 7);
  };

  if (coinsCount < 0) {
    setCoinsCount(0); 
  }

  localStorage.setItem('coinsCount', JSON.parse(coinsCount))
  localStorage.setItem('level', JSON.parse(level))
  localStorage.setItem('progress', JSON.parse(progress))

  const items = [
    { price: 10, image: "../public/avatars/avatar-sheep.png" },
    { price: 15, image: "../public/avatars/bear-avatar.png" },
    { price: 25, image: "../public/avatars/tiger-avatar.png" },
    { price: 35, image: "../public/avatars/sheep-avatar-second.png" },
    { price: 50, image: "../public/avatars/dog-avatar-second.png" },
    { price: 50, image: "../public/avatars/dog-avatar-first.png" },
    { price: 70, image: "../public/avatars/hadgehog-avatar.png" },
    { price: 85, image: "../public/avatars/elk-avatar.png" },
    { price: 90, image: "../public/avatars/cat-avatar-first.png" },
    { price: 95, image: "../public/avatars/cat-avatar-second.png" },
    { price: 95, image: "../public/avatars/cat-avatar-third.png" },
    { price: 100, image: "../public/avatars/cookie-avatar.png" },
  ];

  const resetSelectedAvatar = () => {
    setSelectedAvatar(null);
  };

  return (
    <>
      <header className={`header ${isNewLevelReached ? 'new-level-reached' : ''}`}> 
        <h1 className="main-title">Tracker привычек</h1>
        
        <div className="container-for-coins">
          <img src="../public/first-coin-image.png" alt="" />
          {coinsCount}
        </div>
        <div className="level">
          Ваш уровень: {level} <strong>| </strong> <br />
          {progress} / 70
        </div>
      </header>

      {showUpNewLevel && (
        <div className="level-up-notification">
          Поздравляем! Вы достигли нового уровня: {level}
        </div>
      )}

      <HomeSection />
      <GoalList
        updateCountCoins={changeCountCoins}
        changeProgress={changeProgressCount}
        downCountCoins={downCountCoins}
        setSelectedAvatar={setSelectedAvatar}
      />
      <Shop
        coinsCount={coinsCount}
        setCoinsCount={setCoinsCount}
        downCountCoins={downCountCoins}
        setSelectedAvatar={setSelectedAvatar}
        items={items}
        resetSelectedAvatar={resetSelectedAvatar} 
      />
      <ProfileUser selectedAvatar={selectedAvatar} items={items} resetSelectedAvatar={resetSelectedAvatar} /> 
    </>
  );
}