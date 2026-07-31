function resolveMongoUri(env = process.env) {
  const configuredUri = env.MONGO_URL || env.MONGODB_URI || env.MONGODB_URL;

  if (!configuredUri || configuredUri.includes("<db_username>") || configuredUri.includes("<password>")) {
    return "mongodb://127.0.0.1:27017/Library";
  }

  return configuredUri;
}

module.exports = {
  resolveMongoUri,
};
