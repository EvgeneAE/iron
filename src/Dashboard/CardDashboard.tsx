import React from 'react';
import { Reorder } from 'framer-motion';
import { Element } from '../List/Types/ElemType';

function CardDashboard({ el }: { el: Element }): JSX.Element {
  console.log(el);
  return (
    <Reorder.Item value={el}>
      <div className="el">
        <div>{el.id}</div>
        <div>{el.title}</div>
        <img src={el.thumbnailUrl} alt="foto" />
      </div>
    </Reorder.Item>
  );
}

export default CardDashboard;
