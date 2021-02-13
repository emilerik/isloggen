"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = async function (db) {
  await db.createTable("posts", {
    id: {
      type: "uuid",
      primaryKey: true,
      notNull: true,
    },
    comment: { type: "string", notNull: true },
    rating: { type: "int", notNull: true },
    location_id: { type: "string", notNull: true },
    user_id: { type: "string", notNull: true },
    created_at: { type: "timestamp", notNull: true },
    observation_timestamp: { type: "timestamp", notNull: true },
  });
};

exports.down = async function (db) {
  await db.dropTable("posts");
};

exports._meta = {
  version: 1,
};
