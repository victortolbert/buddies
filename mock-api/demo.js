const lodash = require('lodash')
const faker = require('faker')

const airports = require('./data/airports')
const companies = require('./data/companies.json')
const customers = require('./data/customers.json')
const plants = require('./data/plants.json')
const products = require('./data/products')
const projects = require('./data/projects')
const projectStatuses = require('./data/project-statuses.json')
const serviceTypes = require('./data/service-types.json')
const tags = require('./data/tags')
const team = require('./data/team.json')
const users = require('./data/users.json')

function data() {
  return {
    plants,
    projects,
  }
}

module.exports = data
