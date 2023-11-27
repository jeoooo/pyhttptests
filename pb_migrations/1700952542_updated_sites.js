/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6rogvylacwirtjm")

  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER()) AS id,\n    website.id AS website_id,\n    website.school_id,\n    school.school_name AS school_name,\n    website.type,\n    website.url\nFROM\n    website\nJOIN\n    school ON website.school_id = school.id;\n"
  }

  // remove
  collection.schema.removeField("pssn84kt")

  // remove
  collection.schema.removeField("ive52j8o")

  // remove
  collection.schema.removeField("rbdzszxe")

  // remove
  collection.schema.removeField("szlmksyl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s67a3hyx",
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
    "id": "ygisrzeo",
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
    "id": "tr0ywuxf",
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
    "id": "tcqgekpa",
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
    "id": "ubrhelxh",
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
  const collection = dao.findCollectionByNameOrId("6rogvylacwirtjm")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, website.school_id, website_name, type, url\nFROM website;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pssn84kt",
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
    "id": "ive52j8o",
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
    "id": "rbdzszxe",
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
    "id": "szlmksyl",
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
  collection.schema.removeField("s67a3hyx")

  // remove
  collection.schema.removeField("ygisrzeo")

  // remove
  collection.schema.removeField("tr0ywuxf")

  // remove
  collection.schema.removeField("tcqgekpa")

  // remove
  collection.schema.removeField("ubrhelxh")

  return dao.saveCollection(collection)
})
