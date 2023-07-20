const reqFilter = (request, response, next)=>{
    const userAge = request.query.age;
    if(!userAge){
        response.send(`Please Provide the age`);
    }else if(userAge<18){
        response.send(`You are Underage`)
    }else{
        next();
    }
}

module.exports = reqFilter;