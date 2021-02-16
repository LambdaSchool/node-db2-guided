
exports.up = function(knex) {
    return knex.schema.createTable("fruits", table =>{
        table.increments()
        table.text("name",128).unique().notNullable()
        table.decimal("avgWeightOz")
        table.boolean("delicious")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("fruits")
};
