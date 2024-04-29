import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

const PageableItems = ({pageable, URL}) => {
    const navigate = useNavigate()
    const [isUnderline, setIsUnderline] = useState({value: false, index: 0})
    return <div>
        <div className="row">
            {pageable.content.map((value, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                     onClick={() => navigate(`/products/${value.id}`)}
                     style={{cursor: 'pointer'}}
                >
                    <div className="card h-100 border-0 rounded-0 text-center onHideUnderline"
                         onMouseEnter={() => setIsUnderline({value: true, index: index})}
                         onMouseLeave={() => setIsUnderline({value: false, index: 0})}>
                        {/* Добавим обертку для изображения, чтобы его размеры сохранялись */}
                        <div style={{maxHeight: '200px', overflow: 'hidden'}}>
                            {/* Добавим проверку на наличие изображений */}
                            {value.photos && value.photos.length > 0 && (
                                <img
                                    src={value.photos[0]} // Предполагается, что первое изображение основное
                                    className="card-img-top img-fluid"
                                    alt={value.name}
                                />
                            )}
                        </div>
                        <div className="card-body">
                            <div className={`h5 card-title ` + (isUnderline.value &&isUnderline.index===index ? 'underlined' : '')}>{value.name}</div>
                            {/* Добавим обрезание описания, если оно слишком длинное */}
                            <div className="card-text mb-1">{value.price} грн</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${pageable.first ? 'disabled' : ''}`}>
                    <Link className="page-link" to={`${URL}page=${pageable.number - 1}`}>Previous</Link>
                </li>
                {[...Array(pageable.totalPages)].map((_, i) => {
                    const pageNum = i + 1;
                    const isActive = pageNum === pageable.number + 1;
                    const isInRange = pageNum >= pageable.number - 1 && pageNum <= pageable.number + 3;
                    if (isActive || isInRange) {
                        return (
                            <li key={i} className={`page-item ${isActive ? 'active' : ''}`}>
                                <Link className="page-link" to={`${URL}page=${i}`}>{pageNum}</Link>
                            </li>
                        );
                    }
                    return null;
                })}
                <li className={`page-item ${pageable.last ? 'disabled' : ''}`}>
                    <Link className="page-link" to={`${URL}page=${pageable.number + 1}`}>Next</Link>
                </li>
            </ul>
        </nav>
    </div>
};

export default PageableItems;