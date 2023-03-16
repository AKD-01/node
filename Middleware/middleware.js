const reqFilter=(req,res,next) => { //Middleware
    if(!req.query.age) {
       res.send("Please provide age");
    }
    else if(req.query.age < 18) {
       res.send("You cannot access page.")
    }
    else {
       next();
    }
}

module.exports = reqFilter;