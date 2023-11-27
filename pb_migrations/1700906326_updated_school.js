/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ag8jz5n4uk6pmtj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7vipvlkq",
    "name": "acronym",
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
  const collection = dao.findCollectionByNameOrId("ag8jz5n4uk6pmtj")

  // remove
  collection.schema.removeField("7vipvlkq")

  return dao.saveCollection(collection)
})
