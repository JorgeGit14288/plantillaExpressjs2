controller ={};

controller.getTest = function(req, res, next){
    console.log("test controller GET");
    var respuesta = {
        "respuesta": "Test GET succesful"
    };
    return res.json(respuesta);
}

module.exports = controller;