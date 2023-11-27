/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlivjho6av2jsmr")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    s.id AS school_id,\n    w.id AS website_id,\n    w.url\nFROM\n    school s\nJOIN\n    website w ON s.id = w.school_id;\n"
  }

  // remove
  collection.schema.removeField("5amkxu0x")

  // remove
  collection.schema.removeField("tdmse5ee")

  // remove
  collection.schema.removeField("mgogvwd3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oqsdkfq5",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9d3lopqd",
    "name": "website_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "h659njd7xdqln6c",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ea7wl3v6",
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
    "query": "WITH JoinedData AS (\n    SELECT\n        ROW_NUMBER() OVER() AS \"id\",\n        s.id AS \"school_id\",\n  w.id AS \"website_id\",\n        w.type AS \"type\",\n        w.url AS \"url\"\n    FROM\n        website w\n    JOIN\n        school s ON s.id = w.school_id\n)\n\nSELECT\n    \"id\",\n    \"school_id\",\n  \"website_id\"\n    \"type\",\n    \"url\"\nFROM\n    JoinedData;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5amkxu0x",
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
    "id": "tdmse5ee",
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
    "id": "mgogvwd3",
    "name": "url",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("oqsdkfq5")

  // remove
  collection.schema.removeField("9d3lopqd")

  // remove
  collection.schema.removeField("ea7wl3v6")

  return dao.saveCollection(collection)
})
