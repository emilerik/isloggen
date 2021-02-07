const devConfig = {
  url: "http://localhost:3001",
};

const prodConfig = {
  url: "https://isinfo.herokuapp.com",
};

export const config =
  process.env.REACT_APP_ENV === "prod" ? prodConfig : devConfig;
