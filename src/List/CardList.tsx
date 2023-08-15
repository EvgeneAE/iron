import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../store';
import { addSelected } from './listSlice';
import { Element } from './Types/ElemType';

function CardList({ elem }: { elem: Element }): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selected = useSelector((store: RootState) => store.elements.selected);

  const buttonIsSelected = selected.find((el) => el.id === elem.id);

  return (
    <>
      <div className="itemElemList">
        <div>{elem.id}</div>
        <div>{elem.title}</div>
        {/* <img src={elem.url} alt="foto" /> */}
        <img src={elem.thumbnailUrl} alt="foto" />
        <button type="button" onClick={() => navigate(-1)}>
          Go to dashboard
        </button>

        {!buttonIsSelected ? (
          <button type="button" onClick={() => dispatch(addSelected(elem))}>
            Make your choise
          </button>
        ) : (
          <button type="button" disabled>
            Already selected
          </button>
        )}
      </div>
    </>
  );
}

export default CardList;
