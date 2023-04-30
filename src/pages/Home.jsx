import React, { useState } from 'react';
import InputForm from '../components/Main';
import Catalogue from '../components/Catalogue';

const Home = () => {
  const [cards, setCards] = useState([]);

  function handleAddCard(title, body) {
    const newCard = {
      id: Date.now(),
      title,
      body,
    };

    setCards([...cards, newCard]);
  }

  function handleEditCard(editedCard) {
    const cardIndex = cards.findIndex((card) => card.id === editedCard.id);

    if (cardIndex >= 0) {
      const updatedCards = [...cards];
      updatedCards[cardIndex] = editedCard;
      setCards(updatedCards);
    }
  }

  function handleDeleteCard(id) {
    const cardIndex = cards.findIndex((card) => card.id === id);

    if (cardIndex >= 0) {
      const updatedCards = [...cards];
      updatedCards.splice(cardIndex, 1);
      setCards(updatedCards);
    }
  }

  return (
    <div>
      <InputForm onSubmit={handleAddCard} />
      <Catalogue cards={cards} onEdit={handleEditCard} onDelete={handleDeleteCard} />
    </div>
  );
};

export default Home;
