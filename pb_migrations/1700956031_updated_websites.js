/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlivjho6av2jsmr")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\ns.school_name,\nw.type,\nw.url\nFROM website w\nJOIN\nschool s ON s.id = w.school_id"
  }

  // remove
  collection.schema.removeField("dqi5xcym")

  // remove
  collection.schema.removeField("ls2havaf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4ytkaa27",
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
    "id": "ipqpw1dv",
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
    "id": "ptr02bth",
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
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\ns.school_name,\nw.url\nFROM website w\nJOIN\nschool s ON s.id = w.school_id"
  }

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

  // remove
  collection.schema.removeField("4ytkaa27")

  // remove
  collection.schema.removeField("ipqpw1dv")

  // remove
  collection.schema.removeField("ptr02bth")

  return dao.saveCollection(collection)
})
