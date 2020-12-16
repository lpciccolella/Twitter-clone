const Post = require('../../schemas/Post');

module.exports = async(req,res) => {
    // const { textOfTheComment} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors: errors.array() });

    try{
        let post = await Post.findById(req.params.post_id);
        if(!post) return res.status(404).json("Post no encontrado");

        const commentFromPost = post.comments.find(comment => 
            comment._id.toString() === req.params.comment_id.toString())

        if(!commentFromPost) return res.status(404).json("Comentario no encontrado");

        let newLike = {
            user: req.user.id
        };

        commentFromPost.likes.unshift(newLike);

        await post.save();
        res.json("Comentario Likeado")

    } catch(error) {
        console.error(error);
        return res.status(500).json("Server Error");
    };
}