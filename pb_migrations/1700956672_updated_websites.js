/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlivjho6av2jsmr")

  collection.options = {
    "query": "WITH JoinedData AS (\n    SELECT\n        ROW_NUMBER() OVER() AS \"id\",\n        s.id AS \"school_id\",\n  w.id AS \"website_id\",\n        w.type AS \"type\",\n        w.url AS \"url\"\n    FROM\n        website w\n    JOIN\n        school s ON s.id = w.school_id\n)\n\nSELECT\n    \"id\",\n    \"school_id\",\n    \"type\",\n    \"url\"\nFROM\n    JoinedData;\n"
  }

  // remove
  collection.schema.removeField("btsqbo5u")

  // remove
  collection.schema.removeField("tfr1nuep")

  // remove
  collection.schema.removeField("ih7fgy1p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "trcv3lfh",
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
    "id": "y4oqqzce",
    "name": "type",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iuerfpvv",
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
  const collection = dao.findCollectionByNameOrId("jlivjho6av2jsmr")

  collection.options = {
    "query": "WITH JoinedData AS (\n    SELECT\n        ROW_NUMBER() OVER() AS \"id\",\n        s.id AS \"school_id\",\n        w.type AS \"type\",\n        w.url AS \"url\"\n    FROM\n        website w\n    JOIN\n        school s ON s.id = w.school_id\n)\n\nSELECT\n    \"id\",\n    \"school_id\",\n    \"type\",\n    \"url\"\nFROM\n    JoinedData;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "btsqbo5u",
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
    "id": "tfr1nuep",
    "name": "type",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ih7fgy1p",
    "name": "url",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("trcv3lfh")

  // remove
  collection.schema.removeField("y4oqqzce")

  // remove
  collection.schema.removeField("iuerfpvv")

  return dao.saveCollection(collection)
})
