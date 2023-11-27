/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0xvlqtr1r3aqpq2",
    "created": "2023-11-25 11:14:47.383Z",
    "updated": "2023-11-25 11:14:47.383Z",
    "name": "api_key",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vqkhvb9d",
        "name": "api_key",
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
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0xvlqtr1r3aqpq2");

  return dao.deleteCollection(collection);
})
