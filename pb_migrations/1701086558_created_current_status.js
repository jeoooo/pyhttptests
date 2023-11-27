/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cwwavm0el2xmbay",
    "created": "2023-11-27 12:02:38.787Z",
    "updated": "2023-11-27 12:02:38.808Z",
    "name": "current_status",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mhfgmnhd",
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
        "id": "k9szrfmf",
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
        "id": "vu35cjtn",
        "name": "raw_url",
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
        "id": "hl2dg3ig",
        "name": "status_code",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "p6x64lwo",
        "name": "status_description",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "z7cri8qq",
        "name": "last_status_time",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "h9sxjuuj",
        "name": "school_description",
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
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "WITH RankedWebsiteStatus AS (\n    SELECT\n        ws.website_id,\n        ws.status_code,\n        ws.description,\n        ws.created,\n        LAG(ws.created) OVER (PARTITION BY ws.website_id ORDER BY ws.created) AS prev_created,\n        ROW_NUMBER() OVER (PARTITION BY ws.website_id ORDER BY ws.created DESC) AS row_num\n    FROM\n        website_status ws\n)\nSELECT\n    (ROW_NUMBER() OVER ()) as id,\n    w.website_name,\n    w.type,\n    w.url AS raw_url,\n    rws.status_code,\n    rws.description as status_description,\n    strftime('%Y-%m-%d %H:%M:%S', rws.created) AS last_status_time,\n    s.description AS school_description\nFROM\n    website w\nJOIN\n    RankedWebsiteStatus rws ON w.id = rws.website_id AND rws.row_num = 1\nJOIN\n    school s ON w.school_id = s.id;\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cwwavm0el2xmbay");

  return dao.deleteCollection(collection);
})
