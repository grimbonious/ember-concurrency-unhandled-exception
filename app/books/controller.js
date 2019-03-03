import Controller from '@ember/controller';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';
// import RSVP from 'rsvp'
import Evented, { on } from '@ember/object/evented'

export default Controller.extend(Evented, {
  ajax: service(),

  createBooksTask: task(function* () {
    yield this.ajax.post('/api/books');
  }).evented(),

  createBooksTaskErrored: on('createBooksTask:errored', function (taskInstance, error) {
    console.log(`Task createBooksTask: AJAX failed because of '${error.message}'`);
  }),


  // BEGIN-SNIPPET create-books-action
  actions: {
    createBooks() {
      this.createBooksTask.perform()
    },
  }
  // END-SNIPPET
});
