import Item from "./Item";
import React from 'react'
import VisaURL from '../../img/visa.png'
import SBPURL from '../../img/sbp.png'
import axios from "axios";


const visaPopup = <div>
    <div className="d-flex justify-content-center inside-animated"><img src={VisaURL} alt=""
                                                                        className={'inside-image img-fluid'}/></div>
    <div className="content">

    </div>
</div>
const visaItem = <Item heading={'Visa'} img={VisaURL} children={visaPopup}/>
const URL = 'https://b52e-91-235-225-3.ngrok-free.app/api/v1/entity'
const entity = await axios.get(URL)
const sbpPopup = <div style={{color: '#1d3a59'}}>
    <div className="d-flex justify-content-center inside-animated mb-2"><img src={SBPURL} alt=""
                                                                             className={'inside-image img-fluid'}/>
    </div>
    <div className="content grey-bg p-2" style={{fontSize: '13px'}}>
        <div className="row mb-1">
            <div className="label col-6 ">
                <div className={'d-flex justify-content-start'}>Номер карты</div>
            </div>
            <div className="label-value col-6">
                <div className={'d-flex justify-content-start'}>{entity.data.cardNumber}</div>
            </div>
        </div>
        <div className="row mb-1">
            <div className="label col-6 ">
                <div className={'d-flex justify-content-start'}>ФИО</div>
            </div>
            <div className="label-value col-6">
                <div className={'d-flex justify-content-start'}>{entity.data.phoneNumber}</div>
            </div>
        </div>
        <div className="row mb-1">
            <div className="label col-6 ">
                <div className={'d-flex justify-content-start'}>Номер телефона</div>
            </div>
            <div className="label-value col-6">
                <div className={'d-flex justify-content-start'}>{entity.data.cardholderName}</div>
            </div>
        </div>

    </div>
</div>
const sbpItem = <Item heading={'СБП'} img={SBPURL} children={sbpPopup}/>
export const items = [visaItem, sbpItem, visaItem, sbpItem, visaItem, sbpItem, visaItem, sbpItem, visaItem]