exports.docPortal = (req,res,next) => {
    res.render('docPortal',{title:'Welcome Dr.'})
}


exports.docRegistration = (req,res,next) => {
    res.render('docRegistration',{title:'Registration'})
}


exports.patientHistory = (req,res,next) => {
    res.render('patientHistory',{title:'Patient History'});
}


