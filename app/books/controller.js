import Controller from '@ember/controller';
import { task } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default Controller.extend({
  ajax: service(),

  createBooksTask: task(function* () {
    yield this.ajax.post('/api/books');
  }),

  actions: {
    createBooks() {
      try {
        this.createBooksTask.perform()
      } catch (error) {
        console.log(`I caught ec task error: ${error}`)
      }
    }
  }
});
