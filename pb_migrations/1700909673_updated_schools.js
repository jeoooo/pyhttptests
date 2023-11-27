/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6rogvylacwirtjm")

  collection.name = "sites"

  // remove
  collection.schema.removeField("w3x7lnxo")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6rogvylacwirtjm")

  collection.name = "schools"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w3x7lnxo",
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
  collection.schema.removeField("inoq7j49")

  return dao.saveCollection(collection)
})
