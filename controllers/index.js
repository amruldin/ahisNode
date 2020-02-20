


exports.indexPage = (req,res,next) =>{
    res.render('index',{title:'AHIS Home Page'});
}


exports.pageNotFound = (req,res,next) =>{
    res.render('error',{title:'Page Not Found'});
}