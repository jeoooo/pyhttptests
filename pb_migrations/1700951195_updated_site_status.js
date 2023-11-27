/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d9z805x1ghlf0x6")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    w.website_name,\n    w.type,\n    w.url,\n    s.status_code,\n    s.description\nFROM\n    website w\nJOIN\n    website_status s ON w.url = s.website_url;\n"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uum8xhha",
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
    "id": "tseamfrl",
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
    "id": "um0v5sxq",
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
    "id": "yx2thwp1",
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
    "id": "icsy66wd",
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
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    w.website_name,\n    w.type,\n    w.url,\n    s.status_code,\n    s.description\nFROM\n    website w\nJOIN\n    status s ON w.url = s.website_url;\n"
  }

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

  // remove
  collection.schema.removeField("uum8xhha")

  // remove
  collection.schema.removeField("tseamfrl")

  // remove
  collection.schema.removeField("um0v5sxq")

  // remove
  collection.schema.removeField("yx2thwp1")

  // remove
  collection.schema.removeField("icsy66wd")

  return dao.saveCollection(collection)
})
