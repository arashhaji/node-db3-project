const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    
};

function find() {
    return db('schemes');
}
function findById(id) {
    return db('schemes').where('id', id).first();
}
function findSteps(id) {
    // SELECT * FROM steps
    // JOIN schemes ON steps.scheme_id = schemes.id
    // WHERE scheme_id = 1;
    return db
    .select('*')
    .from('steps')
    .join('schemes', 'steps.id', '=', 'steps.scheme_id')
    .where('schemes.id', id);
}
function add(scheme) {
    return db('schemes').insert(scheme);
}
function update(changes, id) {
    return db('schemes').where({ id }).update(changes);
}
function remove(id) {
    return db('schemes').where({ id }).del();
}

