/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7u8c9w3dmyoas6e");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "7u8c9w3dmyoas6e",
    "created": "2023-11-25 11:10:26.590Z",
    "updated": "2023-11-25 11:11:34.404Z",
    "name": "api_key",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zbli4p3d",
        "name": "key",
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
})
