const Logs = require('../Modelos/Logs');


exports.gettLogs = async (req,resp) =>{

  try {
  
      const result =await Logs.findAll();
      resp.json(result)
  
    } catch (error) {
      resp.status(500).json({error: 'Ocurrio un error' + error})
    }

}



exports.postLogs = async (req,resp) =>{

    try {
    
        const result =await Logs.create(req.body);
        resp.json(result)
    
      } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
      }

}


