const shoes = [
    {
        id: 0,
        brand: `Jordan 11 Retro Concord`,
        releaseInfo: `OG 1995, Retro 2018`,
        purchaseInfo: `Nike.com, 2018`,
        marketValue: `$266`
    },
    {
        id: 1,
        brand: `Jordan 6 Carmine`,
        releaseInfo: `OG 2014`,
        purchaseInfo: `eBay, 2016`,
        marketValue: `$339`
    }
];
let id = 2;

//  FUNCTIONALITY TO SERVER //
module.exports = {
    // GET REQUEST
    getShoes: (req,res) => {
        res.status(200).send(shoes)
    },
    // POST REQUEST
    newPurch: (req,res) => {
        const {brand,releaseInfo,purchaseInfo,marketValue} = req.body;
        shoes.push({
            id,
            brand,
            releaseInfo,
            purchaseInfo,
            marketValue
        })
        id++;
        res.status(200).send(shoes);
    },
    // PUT REQUEST
    updateShoes: (req,res) => {
        const {id} = req.params;
        const {releaseInfo,marketValue} = req.body;

        let index = shoes.findIndex(shoe => shoe.id == id);
        let foundShoe = shoes[index];

        foundShoe.releaseInfo = releaseInfo || foundShoe.releaseInfo
        foundShoe.marketValue = marketValue || foundShoe.marketValue

        shoes.splice(index,1,foundShoe);
        res.status(200).send(shoes);
    },
    // DELETE REQUEST
    deleteShoe: (req,res) => {
        const {id} = req.params;
        const index = shoes.findIndex(shoe => shoe.id == id);
        shoes.splice(index,1);
        res.status(200).send(shoes);
    }
}