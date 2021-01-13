const { response } = require('express');
const { MongoClient } = require('mongodb');
const url = "mongodb://localhost/frontier";
const client = new MongoClient(url, { useUnifiedTopology: true });

async function main() {
    try{
        await client.connect();
        console.log('MONGODB CONNECTED');
    } catch(e) {
        console.error(e);
    }

}

main().catch(console.err);

const tareaController = {};

tareaController.createTarea = async ( req, res) => {
    const obj = req.body;
    console.log(obj);
    const result = await client.db("dbtareas").collection("tareas").insertOne(obj, function(err, result) {
        if(err){
            res.status(500).json({
                error: err
            })
        } else {
            res.status(200).json({
                message: 'tarea inserted',
                tarea: result
            })
        }
    })

}

tareaController.getTareas = async (req, res) => {
    const objs = await client.db("dbtareas").collection("tareas").find({}).toArray(function(err, result){
        if(err) {
            throw err;
        } else {
            console.log(result);
            res.status(200).json({
                message: 'Tareas listed!',
                lista: result
            });
        }
    })
}

module.exports = tareaController;

