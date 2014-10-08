var Post = require('../mongoose_models/post.js');

//------------------------------------------Post logic------------------------------------ 
//Find all posts
exports.getPosts = function (req, res){
	
	Post.find(function(err, posts){
    res.send(posts);
  });
};

//Find a post 
exports.getPost = function (req, res){
	return Post.findById( req.params.id, function( err, post) {
        if( !err ) {
            return res.send( post );
            res.writeHead(200, { 'Content-Type': contentType, 'Access-Control-Allow-Origin': '*' });
        } else {
            return console.log( err );
        }

    });
};

exports.createPost = function (req, res){
        var post = new Post({
            postDate: req.body.postDate,
            category: req.body.category,
            country: req.body.country,
            year: req.body.year,
            month: req.body.month,
            postTitle: req.body.postTitle,
            pbody: req.body.pbody,
            image: req.body.image
        });
        post.save( function (err){              
            if (err) return handleError (err);          
        });
        return res.send(post);
};
