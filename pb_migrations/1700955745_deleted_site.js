/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("atb186xwydizx88");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "atb186xwydizx88",
    "created": "2023-11-25 23:31:00.360Z",
    "updated": "2023-11-25 23:31:42.421Z",
    "name": "site",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ezu9hpmi",
        "name": "school_id",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "drc2vy3f",
        "name": "school_name",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "uq4rw3aj",
        "name": "url",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "WITH SchoolWebsiteCounts AS (\n    SELECT\n        s.id AS school_id,\n        s.school_name,\n        ROW_NUMBER() OVER() AS id,\n        MAX(w.url) AS url\n    FROM\n        school s\n    LEFT JOIN\n        website w ON s.id = w.school_id\n    GROUP BY\n        s.id, s.school_name\n)\n\nSELECT\n    id,\n    school_id,\n    school_name,\n    url\nFROM\n    SchoolWebsiteCounts;\n"
    }
  });

  return Dao(db).saveCollection(collection);
})
