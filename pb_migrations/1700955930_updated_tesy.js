/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlivjho6av2jsmr")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nw.url\nFROM website w\nJOIN\nschool s ON s.id = w.school_id"
  }

  // remove
  collection.schema.removeField("08jzl22l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bo9ke24v",
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
  const collection = dao.findCollectionByNameOrId("jlivjho6av2jsmr")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nw.school_id\nFROM website w\nJOIN\nschool s ON s.id = w.school_id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "08jzl22l",
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

  // remove
  collection.schema.removeField("bo9ke24v")

  return dao.saveCollection(collection)
})
