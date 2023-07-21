let myFavorites= [];

const postFav= (req, res)=> {
    
    try {
        
        const character = req.body;
        const characterRepeated= myFavorites.find(fav=> fav.id === character.id);
        if(characterRepeated) throw Error('This character is alredy in favorites');
        
        myFavorites.push(character)
        return res.json(myFavorites)
    
    } catch (error) {
    return res.status(404).send(error.message)
}
}

const deleteFav=(req, res)=>{
 const { id }= req.params;
 myFavorites = myFavorites.filter((character)=> character.id !== +id )
 return res.json(myFavorites)
}

module.exports= {
    postFav,
    deleteFav
}