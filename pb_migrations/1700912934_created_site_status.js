/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "d9z805x1ghlf0x6",
    "created": "2023-11-25 11:48:54.394Z",
    "updated": "2023-11-25 11:48:54.394Z",
    "name": "site_status",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gcqpytgs",
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
      },
      {
        "system": false,
        "id": "w6grmbn8",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, status_code, description\nFROM status;"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("d9z805x1ghlf0x6");

  return dao.deleteCollection(collection);
})
