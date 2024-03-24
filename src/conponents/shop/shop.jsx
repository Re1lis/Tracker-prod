import React, { useState } from "react";
import Modal from './modal-window';

function Shop ({ coinsCount, setCoinsCount, downCountCoins, setSelectedAvatar, items, resetSelectedAvatar }) {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [purchasedItemIndex, setPurchasedItemIndex] = useState(null);
  const [lastPurchasedItemIndex, setLastPurchasedItemIndex] = useState(null);
  const [purchasedItems, setPurchasedItems] = useState([]);



  const buyItem = (itemIndex) => {
    const item = items[itemIndex];
    if (coinsCount >= item.price) {
      if (lastPurchasedItemIndex !== null) {
        setCoinsCount(coinsCount + items[lastPurchasedItemIndex].price);
      }
      setCoinsCount(coinsCount - item.price);
      setModalMessage(`Поздравляем! Вы купили предмет за ${item.price} пряникcов.`);
      setShowModal(true);
      setPurchasedItemIndex(itemIndex);
      setLastPurchasedItemIndex(itemIndex);
      setSelectedAvatar(itemIndex);
      setPurchasedItems([...purchasedItems, itemIndex]); 
    } else {
      setModalMessage("Недостаточно пряникcов для покупки.");
      setShowModal(true);
    }
  };

  const returnItem = (itemIndex) => {
    setCoinsCount(coinsCount + items[itemIndex].price);
    setPurchasedItems(purchasedItems.filter(index => index !== itemIndex)); 
    resetSelectedAvatar();
  };

  const isItemPurchased = (index) => purchasedItems.includes(index); 

  return (
    <div className="shop" id="shop-section">
      {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
      <h2 className="title-section">Магазин аватарок</h2>
      <ul className="list-shop">
        {items.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={"Аватар для вашего профиля"} /> <br />
            {isItemPurchased(index) ? (
              <button onClick={() => returnItem(index)}>Вернуть</button>
            ) : (
              <button onClick={() => buyItem(index)}>{item.price} пряникcов</button>
            )}
          </li>
        ))}
      </ul>     
    </div>
  );
};

export default Shop;
