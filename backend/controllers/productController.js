const getAllProducts  = (req, res) => {
    res.status(200).json({msg: "Route is working fine!"})
}

module.exports = {
    getAllProducts,
}