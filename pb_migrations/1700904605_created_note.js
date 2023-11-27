/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "svklp3jhctmfnxi",
    "created": "2023-11-25 09:30:05.054Z",
    "updated": "2023-11-25 09:30:05.054Z",
    "name": "note",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "trthbhop",
        "name": "note",
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
  const collection = dao.findCollectionByNameOrId("svklp3jhctmfnxi");

  return dao.deleteCollection(collection);
})
