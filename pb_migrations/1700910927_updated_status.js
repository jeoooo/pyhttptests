/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th5lov3d2sbey0o")

  collection.createRule = "@collection.api_key.api_key=\"ea2f3eff-bbd0-47e0-ad90-142d28a212fa\""
  collection.updateRule = "@collection.api_key.api_key=\"ea2f3eff-bbd0-47e0-ad90-142d28a212fa\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th5lov3d2sbey0o")

  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
})
