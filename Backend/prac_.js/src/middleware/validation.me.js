const {body,validationResult}=require("express-validator")

function signup_valid(){
    
    

    return [body("name").isLength({min:3}).withMessage("etleast 3 length is required"),
    body("email").isEmail().withMessage("please enter valid email"),
    body("password").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]{5,}/,).withMessage('Password should be combination of one uppercase , one lower case, one special char, one digit and min 8 , max 20 char long')
];
}
function login_valid(){
    return [body("email").isLength({min:3}).withMessage("etleast 3 length is required"),
    body("password").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]{5,}/,).withMessage('Password should be combination of one uppercase , one lower case, one special char, one digit and min 8 , max 20 char long')]
}

module.exports={signup_valid,login_valid,validationResult}