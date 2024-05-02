import React, {useState} from 'react';
import Popup from "../../pages/Popup";

const Item = ({heading, img, children}) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const openPopup = () => {
        if (!isPopupOpen)
            setIsPopupOpen(() => true);
    };

    const closePopup = () => {
        if (isPopupOpen)
            setIsPopupOpen(() => false);
    };

    return <div className={'w-25'}>
        <div onClick={() => openPopup()} className={'outside-animated shadowed my-2'} style={{cursor: 'pointer'}}>
            <div className={'bg-white p-3 d-flex justify-content-center'}>
                <img src={img} alt="" className={'img-fluid outside-image'} />
            </div>
            <div className={'p-2 white-blue-bg text-center text-white'}>
                <div>{heading}</div>
            </div>
            {isPopupOpen === true && <Popup onClose={closePopup} children={children}/>}
        </div>
    </div>
};

export default Item;