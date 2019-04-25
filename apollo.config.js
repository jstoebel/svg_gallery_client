module.exports = {
  client: {
    service: {
      name: 'svg_gallery',
      localSchemaFile: './src/graphql/schema.json',
    },
    includes: ['src/graphql/queries/*.ts']
  },
};