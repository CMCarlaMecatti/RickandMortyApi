const {Favorite}= require('../DB_connection');

const deleteFav = async(req, res)=>{
    try {
        const{id}= req.params;
        const deletedFav= await Favorite.findByPk(id);
        await deletedFav.destroy();
        const allFavorites= await Favorite.findAll();
        return res.status(200).json(allFavorites)
    } catch (error) {
        return res.status(500).send(error.message);
    }
    
    

}

module.exports= {deleteFav};