import merge from 'lodash.merge'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const stage = process.env.STAGE || 'local'
let envConfig;

if (stage === 'production') {
  envConfig = require('./production').default
} else if (stage === 'staging') {
  envConfig = require('./staging').default
} else {
  envConfig = require('./local').default
}

export default merge({
  stage,
  port: 3000,
  env: process.env.NODE_ENV,
  secrets: {
    jwt: process.env.JWT_SECRET,
    dbUrl: process.env.DATABASE_URL
  }
}, envConfig)