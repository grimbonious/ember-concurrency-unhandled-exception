# ember-concurrency-unhandled-exception

How does one stop an unhandled exception from occuring when `ember-ajax` receives a `422` response code within an `ember-concurrency` task?

## Problem

Within an `ember-concurrency` task, if I make a POST request using `ember-ajax` and said request throws an `InvalidError` upon receiving a `422` status code from the server, how can I stop the exception from bubbling to the RSVP.onerrorDefault handler, as a `422` response is expected in some circumstances?

| Dependency | Version |
| --- | --- |
| `ember` | `3.5.1` |
| `ember-concurrency` | `0.8.27` |
| `ember-ajax` | `3.1.3` |

## Solution

Make the action an asynchronous function and `await` on the `TaskInstance` returned from `perform()`. This is
possible as `TaskInstance` has a promise like interface. Thanks to the `await`, the code within the try block will not complete until the task has, stopping the `createBooks` action from leaving the try block prematurely and enabling us to catch any exceptions thrown within the task.

## References

- [RSVP.js Error Handling](https://github.com/tildeio/rsvp.js#error-handling)
- [Ember Concurrency Task Lifecycle Events](http://ember-concurrency.com/docs/task-lifecycle-events)


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ec-error-handling`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
