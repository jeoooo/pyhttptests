/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8rzkuw3379f85yd")

  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER()) AS id,\n   school_name,\n  acronym\nFROM\n    school\n\n"
  }

  // remove
  collection.schema.removeField("shuiydov")

  // remove
  collection.schema.removeField("pegvjen6")

  // remove
  collection.schema.removeField("svsecnpx")

  // remove
  collection.schema.removeField("smvvgvzf")

  // remove
  collection.schema.removeField("ofl2dvjz")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8rzkuw3379f85yd")

  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER()) AS id,\n    website.id AS website_id,\n    website.school_id,\n    school.school_name AS school_name,\n    website.type,\n    website.url\nFROM\n    website\nJOIN\n    school ON website.school_id = school.id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "shuiydov",
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
    "id": "pegvjen6",
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
    "id": "svsecnpx",
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
    "id": "smvvgvzf",
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
    "id": "ofl2dvjz",
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
  collection.schema.removeField("3ogkljch")

  // remove
  collection.schema.removeField("ljkinil4")

  return dao.saveCollection(collection)
})
