import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, CartItem, selectCartItem } from '../redux/slices/cartSlice.ts';

type BicycleItemProps = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};
export const BicycleItem: FC<BicycleItemProps> = ({ id, title, price, imageUrl, sizes, types }) => {
  const dispatch = useDispatch();
  const [typeActiv, setTypeActive] = useState(0);
  const [sizesActiv, setSizesActive] = useState(0);
  const typesNames = ['Черный', 'Серебро'];
  const cartItem = useSelector(selectCartItem(id));

  const added = cartItem ? cartItem.count : 0;

  const onClickAddItems = () => {
    const itemCart: CartItem = {
      id,
      title,
      price,
      imageUrl,
      type: typesNames[typeActiv],
      size: sizesActiv,
      count: 0,
    };
    dispatch(addItem(itemCart));
  };

  return (
    <div className="bycicle-block__wrapper">
      <div className="bycicle-block">
        <img className="bycicle-block__image" src={imageUrl} alt="Bike" />
        <h4 className="bycicle-block__title">{title}</h4>
        <div className="bycicle-block__selector">
          <p>Цвет рамы</p>
          <ul>
            {types.map((item, index) => {
              return (
                <li
                  onClick={() => setTypeActive(index)}
                  className={typeActiv === index ? 'active' : ''}
                  key={item}
                >
                  {typesNames[item]}
                </li>
              );
            })}
          </ul>
          <p>Размер рамы</p>
          <ul>
            {sizes.map((item, index) => {
              return (
                <li
                  onClick={() => setSizesActive(index)}
                  className={sizesActiv === index ? 'active' : ''}
                  key={index}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bycicle-block__bottom">
          <div className="bycicle-block__price">от {price} ₽</div>
          <button onClick={onClickAddItems} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {added > 0 && <i>{added}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};
