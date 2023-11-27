/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th5lov3d2sbey0o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1txo3rni",
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
  const collection = dao.findCollectionByNameOrId("th5lov3d2sbey0o")

  // remove
  collection.schema.removeField("1txo3rni")

  return dao.saveCollection(collection)
})
