import Controller from '@ember/controller';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default Controller.extend({
  ajax: service(),

  createBooksTask: task(function* () {
    yield this.ajax.post('/api/books');
  }),


  // BEGIN-SNIPPET create-books-action
  actions: {
    createBooks() {
      this.createBooksTask.perform()
    },
  }
  // END-SNIPPET
});
