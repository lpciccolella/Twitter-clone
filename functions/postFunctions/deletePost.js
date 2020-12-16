const Post = require('../../schemas/Post');

module.exports = async(req,res) => {
    try {
        let post = await Post.findById(req.params.post_id);

        if(!post) return res.status(404).json("Post no encontrado");

        if(post.user.toString() !== req.user._id.toString()) 
            return res.status(404).json("No esta permitido");

        await post.remove();
        res.json("Post eliminado");
    } catch (error) {
        console.error(error);
        return res.status(500).json("Server Error");
    }
}