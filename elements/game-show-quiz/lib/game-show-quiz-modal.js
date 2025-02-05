import { LitElement, html, css } from "lit";
/**
 * `game-show-quiz-modal`
 * @element game-show-quiz-modal
 * `Modal for the quiz show`
 *  @microcopy - the mental model for this element
 *  - game show - a display board in the style of Jeopardy
 */
class GameShowQuizModal extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        paper-dialog:not(:defined) {
          display: none;
        }
        paper-dialog {
          min-width: 60%;
          top: 2%;
          bottom: 2%;
          margin: 0;
          padding: 0;
          left: 8%;
          right: 8%;
          position: fixed;
          overflow: hidden;
        }
        .content {
          font-size: 16px;
          overflow: scroll;
          min-height: 60vh;
          height: 80vh;
          margin: 0;
          padding: 0;
        }
        h2 {
          font-size: 24px;
          background-color: var(--game-show-bg-color);
          color: var(--game-show-text-color);
          margin: 0;
          padding: 8px;
          text-align: center;
        }
        .buttons {
          font-size: 20px;
          font-weight: bold;
          background-color: var(--game-show-bg-color);
          bottom: 0;
          position: absolute;
          left: 0;
          right: 0;
        }
        .buttons ::slotted(*) {
          width: 50%;
          margin: 0 auto;
          color: var(--game-show-bg-color);
          background-color: var(--game-show-text-color);
        }
        .buttons ::slotted(*[disabled]) {
          background: #eaeaea;
          color: #a8a8a8;
        }
        .buttons ::slotted(#continue) {
          color: var(--simple-colors-default-theme-blue-11);
          background-color: var(--simple-colors-default-theme-blue-1);
        }
        @media screen and (max-width: 600px) {
          paper-dialog {
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
          }
          h2 {
            font-size: 20px;
          }
          .buttons {
            font-size: 12px;
          }
          .buttons ::slotted(*) {
            width: 100%;
          }
          .content {
            font-size: 12px;
          }
        }
      `,
    ];
  }
  static get tag() {
    return "game-show-quiz-modal";
  }
  static get properties() {
    return { title: { type: String } };
  }
  constructor() {
    super();
    import("@polymer/paper-dialog/paper-dialog.js");
  }
  render() {
    return html`
      <paper-dialog modal>
        <h2>${this.title}</h2>
        <div class="content"><slot name="content"></slot></div>
        <div class="buttons"><slot name="buttons"></slot></div>
      </paper-dialog>
    `;
  }
  /**
   * Basic bridge to the toggle function in paper-dialog
   */
  toggle() {
    this.shadowRoot.querySelector("paper-dialog").toggle();
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);
  }
}
window.customElements.define(GameShowQuizModal.tag, GameShowQuizModal);
export { GameShowQuizModal };
