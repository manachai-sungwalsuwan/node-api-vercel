exports.getAll = (req, res) => {
    res.status(200).json([
        { id: 1, name: 'item 1'},
        { id: 2, name: 'item 2'},
        { id: 3, name: 'item 3'},
    ])
}

exports.getById = (req, res) => {
    const id = req.params.id
    res.status(200).json({ id: id, name: `item ${id}`})
}