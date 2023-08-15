import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Element } from '../List/Types/ElemType';
import { Reorder } from 'framer-motion';
import '../App.css';
import CardDashboard from './CardDashboard';

function Dashboard(): JSX.Element {
  const navigate = useNavigate();
  const selectedList = useSelector(
    (store: RootState) => store.elements.selected
  );
  const [elem, setElem] = useState(selectedList);

  return (
    <>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <button onClick={() => navigate('./List')}>List</button>
        <span>{selectedList.length}</span>
        <Reorder.Group as="ul" axis="y" values={elem} onReorder={setElem}>
          <div className="elBox"></div>
          {elem.map((el) => (
            <CardDashboard key={el.id} el={el} />
          ))}
        </Reorder.Group>
      </div>
    </>
  );
}

export default Dashboard;
