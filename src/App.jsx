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
    { price: 15, image: "avatars/avatar-sheep.png" },
    { price: 25, image: "avatars/bear-avatar.png" },
    { price: 40, image: "avatars/tiger-avatar.png" },
    { price: 50, image: "avatars/sheep-avatar-second.png" },
    { price: 60, image: "avatars/dog-avatar-second.png" },
    { price: 70, image: "avatars/dog-avatar-first.png" },
    { price: 80, image: 'avatars/bird-avatar.png'},
    { price: 85, image: "avatars/hadgehog-avatar.png" },
    { price: 90, image: "avatars/foxy-avatar.png"},
    { price: 95, image: "avatars/elk-avatar.png" },
    { price: 100, image: "avatars/wolf-avatar.png"},
    { price: 110, image: "avatars/cat-avatar-first.png" },
    { price: 115, image: "avatars/cat-avatar-second.png" },
    { price: 130, image: "avatars/cat-avatar-third.png" },
    { price: 150, image: "avatars/cookie-avatar.png" },
  ];

  const resetSelectedAvatar = () => {
    setSelectedAvatar(null);
  };

  return (
    <>
      <header className={`header ${isNewLevelReached ? 'new-level-reached' : ''}`}> 
        <h1 className="main-title">Tracker привычек</h1>
        
        <div className="container-for-coins">
          <img src="first-coin-image.png" alt="" />
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
