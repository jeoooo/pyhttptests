/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6rogvylacwirtjm")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, website_name, type, url\nFROM website;\n"
  }

  // remove
  collection.schema.removeField("inoq7j49")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7rfehlcl",
    "name": "website_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e4lc3irc",
    "name": "type",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aq9mqhz2",
    "name": "url",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6rogvylacwirtjm")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, website_name\nFROM website;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "inoq7j49",
    "name": "website_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("7rfehlcl")

  // remove
  collection.schema.removeField("e4lc3irc")

  // remove
  collection.schema.removeField("aq9mqhz2")

  return dao.saveCollection(collection)
})
