const Post = require('../../schemas/Post');

module.exports = async(req,res) => {
    try {
        let post = await Post.findById(req.params.post_id);

        if(!post) return res.status(404).json("Post no encontrado");

       const comment =  post.comments.filter(comment => comment._id.toString() === 
        req.params.comment_id.toString())

        const removeLikeFromComment =  comment.likes.filter(like =>  like._id.toString() !== 
        req.params.like_id.toString())

        comment.likes = removeLikeFromComment;
        await post.save();
        res.json(post);


    } catch (error) {
        console.error(error);
        return res.status(500).json("Server Error");
    }
}