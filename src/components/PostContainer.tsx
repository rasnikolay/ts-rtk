import  { useState, useEffect  } from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer = () => {
    const [limit, setLimit] = useState(8);

    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit, {
        //longPolling
        pollingInterval: 1000*60,
    });

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLimit(3)
    //     }, 3000)
    // },)

    return (
        <div>
            {/* <button onClick={() => refetch()}>REFEATCH</button> */}
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Упс, произошла ошибка</h1>}
            {posts && posts.map(post => 
                <PostItem key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostContainer;