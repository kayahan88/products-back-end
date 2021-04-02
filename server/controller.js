module.exports = {
    createProduct: (req, res) => {
        const db = req.app.get('db');
        const {itemName, itemDescription, itemPrice, itemImageUrl} = req.body;

        db.create_product(itemName, itemDescription, itemPrice, itemImageUrl)
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => console.log(err))
    },
    readProducts: (req, res) => {
        const db = req.app.get('db');
        db.read_products()
            .then(dbRes => {
                res.status(200).send(dbRes)
                // console.log(dbRes)
            })
            .catch(err => console.log(err))
    },
    readProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        console.log(id);
        db.read_product(id)
            .then(dbRes => {
                console.log(dbRes)
                res.status(200).send(dbRes)
            })
            .catch(err => console.log(err))
    },
    updateProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const {description} = req.body;

        db.update_product([id, description])
            .then(dbRes => {
                res.status(200).send(dbRes)
                console.log(dbRes)
            })
            .catch(err => console.log(err))
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.delete_product(id)
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => console.log(err))
    }
}