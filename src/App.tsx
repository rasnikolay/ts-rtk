import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';

const App = () => {
  const dispatch = useAppDispatch();
  const {users} = useAppSelector(state => state.userReducer);

  useEffect(() => {
      dispatch(fetchUsers())
  }, [])

  return (
    <div>
      {JSON.stringify(users, null, 2)} 
    </div>
  );
};

export default App;