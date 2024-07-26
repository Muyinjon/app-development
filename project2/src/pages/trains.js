import Card from "../component/card";
import cardinfo from "../cardinfo.json";
import Modal from "../component/modal";
import React, { useState } from 'react';
function Trains() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (jet) => {
        setSelectedCard(jet);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedCard(null);
    };
    return (
        <div>
            <h1>Trains</h1>
            <div className="card-container">
            {cardinfo[2].Trains.map((trains, index) => (
                <Card 
                    key={index}
                    title={trains.Name} 
                    description={trains.Description} 
                    cardimg={trains.imglocation} 
                    rank={index + 1} // Assuming rank is based on the order
                    onClick={() => handleCardClick(trains)}

                />
            ))}
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title={selectedCard?.Name}
                description={selectedCard?.Description}
                cardimg={selectedCard?.imglocation}
            />
            </div>
        </div>
    );
}
export default Trains