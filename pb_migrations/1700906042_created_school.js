/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ag8jz5n4uk6pmtj",
    "created": "2023-11-25 09:54:02.611Z",
    "updated": "2023-11-25 09:54:02.611Z",
    "name": "school",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3owhxloo",
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
  const collection = dao.findCollectionByNameOrId("ag8jz5n4uk6pmtj");

  return dao.deleteCollection(collection);
})
