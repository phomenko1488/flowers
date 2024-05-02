import React from 'react';
import Logo from '../../img/1xbet.svg'

const Header = () => (
    <div className={'row blue-bg'}>
        <div className="col-3">
        <img src={Logo} alt="Logo" width={160} height={90}/>
        </div>
        <div className="col-9"></div>
    </div>
);

export default Header;