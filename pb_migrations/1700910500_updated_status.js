/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th5lov3d2sbey0o")

  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th5lov3d2sbey0o")

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
