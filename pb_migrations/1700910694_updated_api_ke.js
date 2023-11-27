/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7u8c9w3dmyoas6e")

  collection.name = "api_key"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7u8c9w3dmyoas6e")

  collection.name = "api_ke"

  return dao.saveCollection(collection)
})
