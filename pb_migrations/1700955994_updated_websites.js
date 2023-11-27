/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlivjho6av2jsmr")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\ns.school_name,\nw.url\nFROM website w\nJOIN\nschool s ON s.id = w.school_id"
  }

  // remove
  collection.schema.removeField("secddnot")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dqi5xcym",
    "name": "school_name",
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
    "id": "ls2havaf",
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
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nw.url\nFROM website w\nJOIN\nschool s ON s.id = w.school_id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "secddnot",
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
  collection.schema.removeField("dqi5xcym")

  // remove
  collection.schema.removeField("ls2havaf")

  return dao.saveCollection(collection)
})
