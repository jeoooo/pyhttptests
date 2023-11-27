/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlivjho6av2jsmr")

  collection.options = {
    "query": "WITH JoinedData AS (\n    SELECT\n        ROW_NUMBER() OVER() AS \"id\",\n        s.id AS \"school_id\",\n        w.type AS \"type\",\n        w.url AS \"url\"\n    FROM\n        website w\n    JOIN\n        school s ON s.id = w.school_id\n)\n\nSELECT\n    \"id\",\n    \"school_id\",\n    \"type\",\n    \"url\"\nFROM\n    JoinedData;\n"
  }

  // remove
  collection.schema.removeField("wwypdlru")

  // remove
  collection.schema.removeField("8ofdtwof")

  // remove
  collection.schema.removeField("jbwrr2au")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "btsqbo5u",
    "name": "school_id",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tfr1nuep",
    "name": "type",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ih7fgy1p",
    "name": "url",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlivjho6av2jsmr")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\ns.school_name,\nw.type,\nw.url\nFROM website w\nJOIN\nschool s ON s.id = w.school_id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wwypdlru",
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
    "id": "8ofdtwof",
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
    "id": "jbwrr2au",
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
  collection.schema.removeField("btsqbo5u")

  // remove
  collection.schema.removeField("tfr1nuep")

  // remove
  collection.schema.removeField("ih7fgy1p")

  return dao.saveCollection(collection)
})
