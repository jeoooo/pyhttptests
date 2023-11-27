/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8rzkuw3379f85yd",
    "created": "2023-11-25 10:56:36.257Z",
    "updated": "2023-11-25 10:56:36.257Z",
    "name": "schools",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ilv8alox",
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
      },
      {
        "system": false,
        "id": "tr5dvapk",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, school_name, acronym\nFROM school;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8rzkuw3379f85yd");

  return dao.deleteCollection(collection);
})
