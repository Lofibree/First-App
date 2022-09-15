import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import classes from './PostIdPages.module.css';

const PostIdPages = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div className={classes.postAll}>
            <div className={classes.postTitle}>
                <h2>Вы открыли пост</h2>
                {isLoading
                    ? <div style={{alignSelf: 'center'}}><Loader /></div>
                    : <div>
                        <div>ID поста: {post.id}.</div>
                        <div> Название поста: {post.title}</div>
                    </div>
                }
            </div>
            <div className={classes.comments}>
                <h3>Комментарии</h3>
                {isComLoading
                    ? <div style={{alignSelf: 'center'}}><Loader /></div>
                    : <div>
                        {comments.map(comm =>
                            <div key={comm.id} style={{ marginTop: 15 }}>
                                <h5>{comm.email}</h5>
                                <div>{comm.body}</div>
                            </div>
                        )}
                    </div>
                }
            </div>
        </div>
    );
};

export default PostIdPages;