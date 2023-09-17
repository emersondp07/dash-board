
import { faker } from '@faker-js/faker';
import { Factory, Model, createServer } from 'miragejs';

export type User = {
  name: string,
  email: string,
  created_at: string,
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },
    factories: {
      user: Factory.extend({
        name(i) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase()
        },
        createAt() {
          return faker.date.recent()
        }
      })
    },

    seeds(server) {
      server.createList('user', 10)
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users');
      this.post('users/create');

      this.namespace = '';
      this.passthrough()
    }
  })

  return server
}