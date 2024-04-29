import React from 'react'

export const Cards = ({cards, selectedCard, setSelectedCard}) => {
    return <div className="my-1">
        <h3>Select Card</h3>
        {cards.map((value, index, array) => {
            return <div
                key={index}
                className={'mx-1 btn ' + (selectedCard === index ? "active" : '')}
                onClick={() => {
                    if (selectedCard !== index)
                        setSelectedCard(index)
                }}>
                <img width={40} height={40} src={value.img} alt=""/>
                <div>{value.name}</div>
                <div>{value.price > 0 ? `${value.price} AED` : '(Free)'}</div>
            </div>
        })}
    </div>
}