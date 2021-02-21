const devConfig = {
  dburl: "postgres://postgres:password@127.0.0.1:5432/isloggendb",
  dbssl: false,
};

const prodConfig = {
  dburl: process.env.DATABASE_URL,
  dbssl: { rejectUnauthorized: false },
};

module.exports = {
  config: process.env.ENV === "prod" ? prodConfig : devConfig,
};
