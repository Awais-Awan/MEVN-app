import Product from "../models/Product.js";

const getProducts = async (req, res)=>{
try{
    const products = await Product.find({});
    res.json(products);
}
catch(error){
res.status(500).json({message : "Failed to fetch the products!"});
}
};

export {getProducts};