/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6rogvylacwirtjm",
    "created": "2023-11-25 10:52:58.981Z",
    "updated": "2023-11-25 10:52:58.981Z",
    "name": "schools",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "w3x7lnxo",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, website_name\nFROM website;\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6rogvylacwirtjm");

  return dao.deleteCollection(collection);
})
