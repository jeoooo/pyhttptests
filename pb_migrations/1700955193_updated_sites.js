/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6rogvylacwirtjm")

  collection.options = {
    "query": "WITH SchoolWebsiteCounts AS (\n    SELECT\n        s.id AS school_id,\n        s.school_name,\n        ROW_NUMBER() OVER() AS id,\n        MAX(w.url) AS url\n    FROM\n        school s\n    LEFT JOIN\n        website w ON s.id = w.school_id\n    GROUP BY\n        s.id, s.school_name\n)\n\nSELECT\n    id,\n    school_id,\n    school_name,\n    url\nFROM\n    SchoolWebsiteCounts;\n"
  }

  // remove
  collection.schema.removeField("dkhoskiw")

  // remove
  collection.schema.removeField("bmlrefi7")

  // remove
  collection.schema.removeField("gwfye9nv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u4d9yuul",
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
    "id": "byophio1",
    "name": "school_name",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6lfqllac",
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
  const collection = dao.findCollectionByNameOrId("6rogvylacwirtjm")

  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER()) AS id,\n    website.id AS website_id,\n    website.school_id,\n    school.school_name AS school_name\n   -- website.type\n   -- website.url\nFROM\n    website\nJOIN\n    school ON website.school_id = school.id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dkhoskiw",
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
    "id": "bmlrefi7",
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
    "id": "gwfye9nv",
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

  // remove
  collection.schema.removeField("u4d9yuul")

  // remove
  collection.schema.removeField("byophio1")

  // remove
  collection.schema.removeField("6lfqllac")

  return dao.saveCollection(collection)
})
