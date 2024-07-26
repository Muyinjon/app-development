import React, { useState } from 'react';

import Card from "../component/card";

import cardinfo from "../cardinfo.json";

import Modal from "../component/modal";
function Planes() {
    console.log(cardinfo)
    console.log(cardinfo[0].jets[0].imglocation)
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
            <h1>Planes</h1>
            <div className="card-container">
            {cardinfo[0].jets.map((jet, index) => (
                <Card 
                    key={index}
                    title={jet.Name} 
                    description={jet.Description} 
                    cardimg={jet.imglocation} 
                    rank={index + 1} // Assuming rank is based on the order
                    onClick={() => handleCardClick(jet)}

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
export default Planes
