const db = require('../data/dbConfig');

module.exports = {
    addNote,
    find,
    findBy,
    findById,
    updateNote,
    deleteNote
};

function find() {
    return db('notes').select('id', 'title');
};

function findBy(filter) {
    return db('notes').where(filter);
};

async function addNote(recipe) {
    const [id] = await db('notes').insert(recipe, 'id');
    return findById(id);
};

function findById(id) {
    return db('notes').where({ id }).first();
};

function updateNote(id, newData) {
    return findById( id ).update(newData);
};

function deleteNote(id) {
    return findById( id ).del();
}