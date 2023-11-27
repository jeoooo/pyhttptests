/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6rogvylacwirtjm")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, website_name, type, url, website.school_id\nFROM website;\n"
  }

  // remove
  collection.schema.removeField("7rfehlcl")

  // remove
  collection.schema.removeField("e4lc3irc")

  // remove
  collection.schema.removeField("aq9mqhz2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fj4eqrlk",
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
    "id": "hqxefawf",
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
    "id": "4nkjillz",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tg43k77h",
    "name": "school_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ag8jz5n4uk6pmtj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6rogvylacwirtjm")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, website_name, type, url\nFROM website;\n"
  }

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

  // remove
  collection.schema.removeField("fj4eqrlk")

  // remove
  collection.schema.removeField("hqxefawf")

  // remove
  collection.schema.removeField("4nkjillz")

  // remove
  collection.schema.removeField("tg43k77h")

  return dao.saveCollection(collection)
})
