import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import List from './List/List';
import { getFirstTwenty } from './List/listSlice';
import { useAppDispatch } from './store';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFirstTwenty());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
