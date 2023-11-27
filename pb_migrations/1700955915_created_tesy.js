/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jlivjho6av2jsmr",
    "created": "2023-11-25 23:45:15.435Z",
    "updated": "2023-11-25 23:45:15.435Z",
    "name": "tesy",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "08jzl22l",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\nw.school_id\nFROM website w\nJOIN\nschool s ON s.id = w.school_id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jlivjho6av2jsmr");

  return dao.deleteCollection(collection);
})
