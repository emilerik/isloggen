#!/usr/bin/env node
require("dotenv").config();

const axios = require("axios");

const ManagementClient = require("auth0").ManagementClient;

const auth0 = new ManagementClient({
  domain: "isinfo.eu.auth0.com",
  clientId: "BGfRq8yDzG0PBhEMOoxemIW9gTOur5Mf",
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: "read:users",
});

const auth0ToDb = async () => {
  const mgmtToken = await auth0.getAccessToken();

  const getOptions = {
    method: "GET",
    url: "https://isinfo.eu.auth0.com/api/v2/users",
    params: { q: "", search_engine: "v3", page: 0 }, // Need to add more pages if >50 users
    headers: { authorization: `Bearer ${mgmtToken}` },
  };

  const res = await axios.request(getOptions);
  const users = res.data;

  const postOptions = {
    headers: { "Content-Type": "application/json" },
  };

  users.forEach(async (user) => {
    console.log(user);
    await axios.post(
      "http://localhost:3001/register",
      { id: user.user_id, name: user?.user_metadata?.name || user.name },
      postOptions
    );
  });
};

auth0ToDb();
