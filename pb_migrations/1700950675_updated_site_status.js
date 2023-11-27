/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d9z805x1ghlf0x6")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    w.website_name,\n    w.type,\n    w.url,\n    s.status_code,\n    s.description\nFROM\n    website w\nJOIN\n    status s ON w.url = s.website_url;\n"
  }

  // remove
  collection.schema.removeField("grseuopj")

  // remove
  collection.schema.removeField("mx4qzl7i")

  // remove
  collection.schema.removeField("n5jd6cqm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1a1wgb4b",
    "name": "website_name",
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
    "id": "dqebsjsd",
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
    "id": "pmehr2ul",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "revta6fb",
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
    "id": "eorpzopx",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d9z805x1ghlf0x6")

  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER()) as id,\n    s.status_code,\n    s.description,\n    s.website_url\nFROM\n    status s\nJOIN\n    website w ON s.website_url = w.url;\n"
  }

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

  // remove
  collection.schema.removeField("1a1wgb4b")

  // remove
  collection.schema.removeField("dqebsjsd")

  // remove
  collection.schema.removeField("pmehr2ul")

  // remove
  collection.schema.removeField("revta6fb")

  // remove
  collection.schema.removeField("eorpzopx")

  return dao.saveCollection(collection)
})
