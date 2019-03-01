import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | books', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /books', async function (assert) {
    server.post('/books', { message: 'subscription expired' }, 422)

    await visit('/books');

    assert.equal(currentURL(), '/books');

    await click('button')
  });
});
