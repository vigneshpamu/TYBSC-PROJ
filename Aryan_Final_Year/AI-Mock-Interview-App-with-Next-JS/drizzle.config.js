/** @type { import("drizzle-kit").Config } */
export default {
  schema: './utils/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai-intervier-mocker_owner:mwjhV40JkAcI@ep-empty-sun-a50zlj6o.us-east-2.aws.neon.tech/ai-intervier-mocker?sslmode=require',
  },
}
