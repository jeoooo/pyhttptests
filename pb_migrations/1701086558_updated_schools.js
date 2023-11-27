/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8rzkuw3379f85yd")

  collection.listRule = ""
  collection.viewRule = ""
  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER()) AS id,\n   school_name,\n  acronym,\n  description AS school_description\nFROM\n    school\n\n"
  }

  // remove
  collection.schema.removeField("3ogkljch")

  // remove
  collection.schema.removeField("ljkinil4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9suqfj6p",
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
    "id": "3jlknfw9",
    "name": "acronym",
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
    "id": "eholi672",
    "name": "school_description",
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

  collection.listRule = null
  collection.viewRule = null
  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER()) AS id,\n   school_name,\n  acronym\nFROM\n    school\n\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3ogkljch",
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
    "id": "ljkinil4",
    "name": "acronym",
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
  collection.schema.removeField("9suqfj6p")

  // remove
  collection.schema.removeField("3jlknfw9")

  // remove
  collection.schema.removeField("eholi672")

  return dao.saveCollection(collection)
})
