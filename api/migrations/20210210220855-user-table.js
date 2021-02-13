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
  await db.createTable("users", {
    id: {
      type: "string",
      primaryKey: true,
      notNull: true,
    },
    name: { type: "string", notNull: true },
  });
};

exports.down = async function (db) {
  await db.dropTable("users");
};

exports._meta = {
  version: 1,
};
