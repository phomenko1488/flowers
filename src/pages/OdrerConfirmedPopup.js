import React from 'react';
import '../Popup.css';

const OrderConfirmPopup = ({onClose, id}) => {
    return (
        <div className="popup-container">
            <div className="popup text-center w-75">
                <div className="row">
                    <h2 className={'mb-2'}>Заказ успешно оформлен</h2>
                </div>
                <h3>
                    ID заявки : {id}
                </h3>
                <h4>Ваш заказ успешно оформлен, в близжайшее время с Вами свяжется наш менеджер.</h4>
                <button className={'btn btn-outline-dark w-100'} onClick={onClose}>Ок</button>
            </div>
        </div>
    )
        ;
};

export default OrderConfirmPopup;