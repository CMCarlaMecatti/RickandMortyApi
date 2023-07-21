const URL= "https://rickandmortyapi.com/api/character/"
const axios= require('axios')


const getChartById = async (req, res) =>{
    try { 
    
    const { id }= req.params
   const {data}= await axios(`${URL}/${id}`)
    
    
        if(!data.name) throw Error(`ID: ${id} not found`);
            
        const character= {
                id: data.id,
                name: data.name,
                status: data.status,
                image: data.image,
                gender: data.gender,
                origin: data.origin,
                species: data.species
            }
        return res.status(200).json(character)
    }
   
   catch (error) {
    return error.message.includes('ID')
    ? res.status(404).send(error.message)
    : res.status(500).send(error.message)}
}



module.exports=  {
    getChartById
} 