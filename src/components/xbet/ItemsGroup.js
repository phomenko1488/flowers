import React from 'react';

const ItemsGroup = ({heading, items}) => {
    return <div style={{backgroundColor: '#d0dae1'}} className={'p-1'}>
        <p className={'text-center'}>{heading}</p>
        <div className={'p-1'}>
            <div className={'row row-cols-md-4 row-cols-sm-2 row-cols-lg-5'}>{items}</div>
        </div>

    </div>
};

export default ItemsGroup;