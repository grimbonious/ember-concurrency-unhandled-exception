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

  actions: {
    // BEGIN-SNIPPET create-books-action
    createBooks() {
      try {
        this.createBooksTask.perform()
      } catch (e) {
        console.log(`I never run!`)
      }
    },
    // END-SNIPPET
    // BEGIN-SNIPPET create-books-action-async
    async createBooksBlocking() {
      try {
        await this.createBooksTask.perform()
      } catch (e) {
        console.log(`Caught it! ${e}`)
      }
    },
    // END-SNIPPET
  }
});
