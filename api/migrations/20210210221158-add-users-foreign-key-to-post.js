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
  await db.addForeignKey(
    "posts",
    "users",
    "posts_user_id_fkey",
    {
      user_id: "id",
    },
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  );
};

exports.down = async function (db) {
  await db.removeForeignKey("posts", "posts_user_id_fkey");
};

exports._meta = {
  version: 1,
};
