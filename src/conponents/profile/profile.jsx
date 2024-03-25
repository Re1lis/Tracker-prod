import React, { useState, useEffect } from "react";
import './profile.css'

export default function ProfileUser ({ selectedAvatar, items }) {
  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    email: '',
    years: '',
    height: '',
  });
  const [isEditMode, setIsEditMode] = useState(true);
  const [searchResult, setSearchResult] = useState('');
  const [userDataBackup, setUserDataBackup] = useState(null);

  const saveDataToLocalStorage = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const loadUserDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  };

  useEffect(() => {
    loadUserDataFromLocalStorage();
  }, []);

  const handleSearch = () => {
    setSearchResult('Пользователь не найден');
    setTimeout(() => {
      setSearchResult('');
    }, 2000);

    
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const saveEdit = () => {
    saveDataToLocalStorage(userData); 
    setIsEditMode(!isEditMode);
    if (!isEditMode) {
      setUserDataBackup(null);
    }
  };

  const handleCancelEdit = () => {
    localStorage.removeItem("userData"); 
    setUserData({ 
      name: '',
      surname: '',
      email: '',
      years: '',
      height: '',
    });
    setIsEditMode(!isEditMode);
  };

  return (
    <div id="profile-user">
      <h2 className="title-section">Профиль пользователя</h2>
      <div className="container-user-profile">
        <div className="information-input">
          <div className="input-form-label">
            <label htmlFor="name">Имя: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={inputChange}
              disabled={!isEditMode}
              placeholder="Введите имя"
            />
          </div>
          <div className="input-form-label">
            <label htmlFor="surname">Почта: </label>
            <input
              type="text"
              id="surname"
              name="surname"
              placeholder="Введите фамилию"
              value={userData.surname}
              onChange={inputChange}
              disabled={!isEditMode}
            />
          </div>
          <div className="input-form-label">
            <label htmlFor="email">Почта: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={inputChange}
              disabled={!isEditMode}
              placeholder="Введите почту"
            />
          </div>
          <div className="input-form-label">
            <label htmlFor="years">Сколько лет: </label>
            <input
              type="text"
              id="years"
              name="years"
              value={userData.years}
              onChange={inputChange}
              disabled={!isEditMode}
              placeholder="Введите возраст"
            />
          </div>
          <div className="input-form-label">
            <label htmlFor="height">Рост: </label>
            <input
              type="text"
              id="name"
              name="height"
              value={userData.height}
              onChange={inputChange}
              disabled={!isEditMode}
              placeholder="Введите свой рост"
            />
          </div>
          <div>
            {isEditMode ? (
              <>
                <button onClick={saveEdit}>Сохранить данные</button>
                <button onClick={() => { setIsEditMode(!isEditMode); handleCancelEdit(); }}>Отмена</button>
              </>
            ) : (
              <button onClick={() => setIsEditMode(!isEditMode)}>Редактировать данные</button>
            )}
          </div>
        </div>
        <div className="information-user-add-friends">
          <div className="avatar-user">
            {selectedAvatar !== null && items && (
              <div>
                <img src={items[selectedAvatar].image} alt={`Selected Avatar`} />
              </div>
            )}
          </div>

          <div className="result-information">
            <h3>Результат:</h3>
            <p>Имя: {userData.name}</p>
            <p>Фамилия: {userData.surname}</p>
            <p>Email: {userData.email}</p>
            <p>Лет: {userData.years}</p>
            <p>Рост: {userData.height}</p>
          </div>

          <div className='search-friends'>
            <input type="text" placeholder="Найти друзей" />
            <button onClick={handleSearch}>Начать поиск</button>
          </div>
          {searchResult && <p>{searchResult}</p>}
        </div>
      </div>
    </div>
  );
}
