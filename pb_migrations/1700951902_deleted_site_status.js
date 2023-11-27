/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("d9z805x1ghlf0x6");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "d9z805x1ghlf0x6",
    "created": "2023-11-25 11:48:54.394Z",
    "updated": "2023-11-25 22:26:35.535Z",
    "name": "site_status",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uum8xhha",
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
      },
      {
        "system": false,
        "id": "tseamfrl",
        "name": "type",
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
        "id": "um0v5sxq",
        "name": "url",
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
        "id": "yx2thwp1",
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
        "id": "icsy66wd",
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
      "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    w.website_name,\n    w.type,\n    w.url,\n    s.status_code,\n    s.description\nFROM\n    website w\nJOIN\n    website_status s ON w.url = s.website_url;\n"
    }
  });

  return Dao(db).saveCollection(collection);
})
