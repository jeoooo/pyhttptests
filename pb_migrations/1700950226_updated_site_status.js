/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d9z805x1ghlf0x6")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, status_code, description, website_url\nFROM status;"
  }

  // remove
  collection.schema.removeField("gcqpytgs")

  // remove
  collection.schema.removeField("w6grmbn8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sibtjvzu",
    "name": "status_code",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jgtl6zy0",
    "name": "description",
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
    "id": "emxw1285",
    "name": "website_url",
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
  const collection = dao.findCollectionByNameOrId("d9z805x1ghlf0x6")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, status_code, description\nFROM status;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gcqpytgs",
    "name": "status_code",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w6grmbn8",
    "name": "description",
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
  collection.schema.removeField("sibtjvzu")

  // remove
  collection.schema.removeField("jgtl6zy0")

  // remove
  collection.schema.removeField("emxw1285")

  return dao.saveCollection(collection)
})
