import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import PostContainer from './components/PostContainer';

const App = () => {
  // пример
  // const dispatch = useAppDispatch();
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer);

  // useEffect(() => {
  //     dispatch(fetchUsers())
  // }, [])

  return (
    <div>
      {/* {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}  */}
      <PostContainer/>
    </div>
  );
};

export default App;