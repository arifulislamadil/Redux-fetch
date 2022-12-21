import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts} from '../features/posts/PostsSlice';

const Post = () => {
    const {posts} = useSelector(state=>state.post);

    const dispatch = useDispatch();
    useEffect(()=>{
            dispatch(fetchPosts())
    },[])

    return (
        <div>
          <h3>  {posts.length}</h3>
            {
                posts.map(post=>
                <div key={post.id} style={{border: "2px solid #A52A2A", padding: '20px',margin: "20px"}}>
                   <div>
                   <h3>{post.title}</h3>
                   {post.body}
                   </div>
                </div>)
            }

            
        </div>
    );
};

export default Post;