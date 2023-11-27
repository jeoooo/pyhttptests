/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d9z805x1ghlf0x6")

  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER()) as id,\n    s.status_code,\n    s.description,\n    s.website_url\nFROM\n    status s\nJOIN\n    website w ON s.website_url = w.url;\n"
  }

  // remove
  collection.schema.removeField("sibtjvzu")

  // remove
  collection.schema.removeField("jgtl6zy0")

  // remove
  collection.schema.removeField("emxw1285")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "grseuopj",
    "name": "status_code",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mx4qzl7i",
    "name": "description",
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
    "id": "n5jd6cqm",
    "name": "website_url",
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
  const collection = dao.findCollectionByNameOrId("d9z805x1ghlf0x6")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, status_code, description, website_url\nFROM status;"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sibtjvzu",
    "name": "status_code",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jgtl6zy0",
    "name": "description",
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
    "id": "emxw1285",
    "name": "website_url",
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
  collection.schema.removeField("grseuopj")

  // remove
  collection.schema.removeField("mx4qzl7i")

  // remove
  collection.schema.removeField("n5jd6cqm")

  return dao.saveCollection(collection)
})
