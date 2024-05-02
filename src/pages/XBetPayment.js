import React from 'react';
import {Container} from "react-bootstrap";
import Header from "../components/xbet/Header";
import ItemsGroup from "../components/xbet/ItemsGroup";
import {items} from "../components/xbet/paymentMethods";

const XBetPayment = (props) => {
    return <div className={'d-flex justify-content-center align-items-center main-container'}>
        <Container className={'border rounded-1 border-black'}>
            <Header/>
            <div className="content p-3">
                <h5>ПОПОЛНЕНИЕ СЧЁТА</h5>
                <div>
                    <ItemsGroup heading={'РЕКОМЕНДУЕМЫЕ СПОСОБЫ'} items={items}/>
                </div>
            </div>
        </Container>
    </div>
};

export default XBetPayment;