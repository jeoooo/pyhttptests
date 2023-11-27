/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("atb186xwydizx88")

  collection.options = {
    "query": "WITH SchoolWebsiteCounts AS (\n    SELECT\n        s.id AS school_id,\n        s.school_name,\n        ROW_NUMBER() OVER() AS id,\n        MAX(w.url) AS url\n    FROM\n        school s\n    LEFT JOIN\n        website w ON s.id = w.school_id\n    GROUP BY\n        s.id, s.school_name\n)\n\nSELECT\n    id,\n    school_id,\n    school_name,\n    url\nFROM\n    SchoolWebsiteCounts;\n"
  }

  // remove
  collection.schema.removeField("ozoxuqwg")

  // remove
  collection.schema.removeField("jar6te1c")

  // remove
  collection.schema.removeField("z8m9k7sy")

  // remove
  collection.schema.removeField("d3nrurug")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ezu9hpmi",
    "name": "school_id",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "drc2vy3f",
    "name": "school_name",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uq4rw3aj",
    "name": "url",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("atb186xwydizx88")

  collection.options = {
    "query": "WITH SchoolWebsiteCounts AS (\n    SELECT\n        s.id AS school_id,\n        s.school_name,\n        ROW_NUMBER() OVER() AS id,\n        COUNT(w.id) AS number_of_rows,\n        MAX(w.url) AS url\n    FROM\n        school s\n    LEFT JOIN\n        website w ON s.id = w.school_id\n    GROUP BY\n        s.id, s.school_name\n)\n\nSELECT\n    id,\n    school_id,\n    school_name,\n    number_of_rows,\n    url\nFROM\n    SchoolWebsiteCounts;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ozoxuqwg",
    "name": "school_id",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jar6te1c",
    "name": "school_name",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z8m9k7sy",
    "name": "number_of_rows",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d3nrurug",
    "name": "url",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("ezu9hpmi")

  // remove
  collection.schema.removeField("drc2vy3f")

  // remove
  collection.schema.removeField("uq4rw3aj")

  return dao.saveCollection(collection)
})
