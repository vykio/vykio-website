import { useRouter } from 'next/router';

const Post = () => {
    const router = useRouter();
    const { id, comment } = router.query;
    return <p>ID: {id} - COMMENT: {comment}</p>
}

export default Post;