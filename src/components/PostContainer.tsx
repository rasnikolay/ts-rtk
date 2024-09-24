import  { useState, useEffect  } from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../models/IPost';

const PostContainer = () => {
    const [limit, setLimit] = useState(100);

    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit, {
        //longPolling
        pollingInterval: 1000*60,
    });

    const [createPost, {}] = postAPI.useCreatePostMutation();

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLimit(3)
    //     }, 3000)
    // },)

    const handleCreatePost= async () => {
        const title = prompt();
        await createPost({title, body: title} as IPost)
    }

    return (
        <div className='post__list'>
            {/* <button onClick={() => refetch()}>REFEATCH</button> */}
            <button onClick={handleCreatePost}>Добавить пост</button>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Упс, произошла ошибка</h1>}
            {posts && posts.map(post => 
                <PostItem key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostContainer;