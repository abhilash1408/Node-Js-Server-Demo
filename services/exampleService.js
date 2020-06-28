const Items = require("../models/Items");

module.exports = {

    getItems : async(req,res)=>{
        try{
            var items = await Items.find({});
            res.status(200).send({data : items})
        }catch(e){
            // internal server error
            res.status(500).send({error : e})
        }
    },
    createItem : async(req,res)=>{
        try{
            // create item data entry
            var data = {
                Name : req.body.Name,
                Price : req.body.Price,
                Discount : req.body.Discount,
                Combos : []
            }
            console.log(data)
            // create mongoose item object
            var item = new Items(data);
            // save the item
            
            // using promise
            // item.save().then(()=>{
            //     console.log("item saved")
            // },(err)=>{
            //     console.log(err)
            // });

            // using async await
            await item.save()
            // send response to client
            res.status(200).send({message : "item created"})
        }catch(e){
            console.log(e)
            res.status(500).send({error : e})
        }
        
    }
}