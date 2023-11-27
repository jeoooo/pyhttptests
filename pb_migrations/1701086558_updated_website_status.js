/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th5lov3d2sbey0o")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = "api_key = @collection.api_keys.api_key && @collection.api_keys.type =\"CREATE/INSERT DATA IN STATUS\""
  collection.updateRule = "api_key = @collection.api_keys.api_key && @collection.api_keys.type =\"UPDATE DATA IN STATUS\""

  // remove
  collection.schema.removeField("aorety2f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jn9aw5df",
    "name": "api_key",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("th5lov3d2sbey0o")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aorety2f",
    "name": "timestamp",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("jn9aw5df")

  return dao.saveCollection(collection)
})
