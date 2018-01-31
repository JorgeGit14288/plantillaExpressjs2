controller = {};

controller.postLogin = function(req, res, next){
    console.log('LOGIN CONTROLLER POST');
    let user = req.body.user;
    let pass = req.body.pass;

    if(user===null|| user==='' || pass ===null || pass ===''){
        respuesta ={
            "respuesta": "Debe de llenar los campos requeridos"
        }
    }
    else
    {
    
            console.log("llegaron parametros ");
            if(user==="jorge" && pass==="hola"  )
            {
                respuesta ={
                    "respuesta": true
            }
                       
            }
            else{
                respuesta ={
                    "respuesta": false
            }
    
            }
    }
    return res.json(respuesta);
}

module.exports = controller;