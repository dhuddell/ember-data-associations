export default function() {

  this.get('/api/pokemon');
  this.get('/api/pokemon/:id');
  this.post('/api/pokemon');
  this.put('/api/pokemon/:id');
  this.del('/api/pokemon/:id');

  this.get('/api/items');
  this.get('/api/items/:id');
  this.post('/api/items');
  this.put('/api/items/:id');
  this.del('/api/items/:id');

  this.get('/api/generations');
  this.get('/api/generations/:id');
  this.post('/api/generations');
  this.put('/api/generations/:id');
  this.del('/api/generations/:id');

  this.get('/api/regions');
  this.get('/api/regions/:id');
  this.post('/api/regions');
  this.put('/api/regions/:id');
  this.del('/api/regions/:id');

  this.get('/api/types');
  this.get('/api/types/:id');
  this.post('/api/types');
  this.put('/api/types/:id');
  this.del('/api/types/:id');

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
