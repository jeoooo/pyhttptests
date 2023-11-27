/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8rzkuw3379f85yd")

  collection.options = {
    "query": "SELECT\n    website.id,\n    \n    school.school_name AS school_name,\n    website.type,\n    website.url\nFROM\n    website\nJOIN\n    school ON website.school_id = school.id;\n"
  }

  // remove
  collection.schema.removeField("dzcxik7d")

  // remove
  collection.schema.removeField("n0f5pc0o")

  // remove
  collection.schema.removeField("xb5nvkkx")

  // remove
  collection.schema.removeField("it7b3srv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f6nkshmk",
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
    "id": "vfszvkhv",
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
    "id": "8mv8nbps",
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
  const collection = dao.findCollectionByNameOrId("8rzkuw3379f85yd")

  collection.options = {
    "query": "SELECT\n    website.id,\n    website.school_id,\n    school.school_name AS school_name,\n    website.type,\n    website.url\nFROM\n    website\nJOIN\n    school ON website.school_id = school.id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dzcxik7d",
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
    "id": "n0f5pc0o",
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
    "id": "xb5nvkkx",
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
    "id": "it7b3srv",
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
  collection.schema.removeField("f6nkshmk")

  // remove
  collection.schema.removeField("vfszvkhv")

  // remove
  collection.schema.removeField("8mv8nbps")

  return dao.saveCollection(collection)
})
