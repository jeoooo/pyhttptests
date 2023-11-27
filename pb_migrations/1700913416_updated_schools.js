/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8rzkuw3379f85yd")

  collection.options = {
    "query": "SELECT\n    website.id,\n    website.school_id,\n    school.school_name AS school_name,\n    website.type,\n    website.url\nFROM\n    website\nJOIN\n    school ON website.school_id = school.id;\n"
  }

  // remove
  collection.schema.removeField("f6nkshmk")

  // remove
  collection.schema.removeField("vfszvkhv")

  // remove
  collection.schema.removeField("8mv8nbps")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dppmaock",
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
    "id": "uwxbzjhr",
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
    "id": "zu1cmsoq",
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
    "id": "g8cpypq6",
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
    "query": "SELECT\n    website.id,\n    \n    school.school_name AS school_name,\n    website.type,\n    website.url\nFROM\n    website\nJOIN\n    school ON website.school_id = school.id;\n"
  }

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

  // remove
  collection.schema.removeField("dppmaock")

  // remove
  collection.schema.removeField("uwxbzjhr")

  // remove
  collection.schema.removeField("zu1cmsoq")

  // remove
  collection.schema.removeField("g8cpypq6")

  return dao.saveCollection(collection)
})
