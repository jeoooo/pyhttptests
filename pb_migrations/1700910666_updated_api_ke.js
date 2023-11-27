/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7u8c9w3dmyoas6e")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zbli4p3d",
    "name": "key",
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
  const collection = dao.findCollectionByNameOrId("7u8c9w3dmyoas6e")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zbli4p3d",
    "name": "api_key",
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
})
