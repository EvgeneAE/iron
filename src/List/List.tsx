import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import CardList from './CardList';
import { Element } from './Types/ElemType';
// import styles from './List.module.scss';
import '../App.css';

function List(): JSX.Element {
  const elements = useSelector((store: RootState) => store.elements.elements);

  const [arrEl, setArrEl] = useState(elements);
  const [curPage, setCurPage] = useState(2);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (fetching) {
      fetch(
        ` https://jsonplaceholder.typicode.com/albums/1/photos?_page=${curPage}&_limit=20 `
      )
        .then((data) => data.json())
        .then((list) => {
          setArrEl([...arrEl, ...list]);
          setCurPage((prev) => prev + 1);
        })
        .finally(() => setFetching(false));
    }
    console.log('object');
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  const scrollHandler = (e: any): void => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };
  return (
    <>
      {/* <div className={styles.elemList}> */}
      <div className="elemList">
        {arrEl.map((elem: Element) => (
          <CardList key={elem.id} elem={elem} />
        ))}
      </div>
    </>
  );
}

export default List;
