// NOTE: this is for internal Cypress types that we don't want exposed in the public API but want for development
// TODO: find a better place for this

declare namespace Cypress {

  interface Cypress {
    /**
     * Access and set Cypress's internal state.
     */
    state: State

  }

  interface State {
    (k: '$autIframe', v?: JQuery<HTMLIFrameElement>): JQuery<HTMLIFrameElement> | undefined
  }
}
