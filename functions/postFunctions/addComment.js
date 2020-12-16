const {validationResult} = require("express-validator");
const Post = require('../../schemas/Post');
const User = require('../../schemas/User');

module.exports = async(req,res) => {

    try{
        let post = await Post.findById(req.params.post_id);
        let user = await User.findById(req.user.id).select("-password");

        const { textOfTheComment} = req.body;
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({errors: errors.array() });


        if(!user) return res.status(404).json("User no encontrado");
        if(!post) return res.status(404).json("Post no encontrado");

        let newComment = {
            textOfTheComment,
            name: user.name,
            avatar: user.avatar
        };

        post.comments.unshift(newComment);

        await post.save();
        res.json("Comentario Agregado");


    } catch(error) {
        console.error(error);
        return res.status(500).json("Server Error");
    };
}