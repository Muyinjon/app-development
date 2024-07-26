import Card from "../component/card";
import React, { useState } from 'react';

import cardinfo from "../cardinfo.json";
import Modal from "../component/modal";


function Cars() {
    console.log(cardinfo)
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (car) => {
        setSelectedCard(car);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedCard(null);
    };





    return (
        <div>
            <h1>Cars</h1>
            <div className="card-container">
            {cardinfo[1].Cars.map((car, index) => (
                <Card 
                    key={index}
                    title={car.Name} 
                    description={car.Description} 
                    cardimg={car.imglocation} 
                    rank={index + 1} // Assuming rank is based on the order
                    onClick={() => handleCardClick(car)}

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
export default Cars