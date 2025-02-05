import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/marked-element/marked-element.js";
import "@polymer/polymer/lib/elements/dom-if.js";
import "@lrnwebcomponents/image-inspector/image-inspector.js";
import "@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js";
import "@lrnwebcomponents/word-count/word-count.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
import "@lrnwebcomponents/lrnsys-button/lrnsys-button.js";
import "@lrnwebcomponents/lrndesign-contentblock/lrndesign-contentblock.js";
import "@lrnwebcomponents/lrnsys-layout/lib/lrnsys-dialog.js";
import { wipeSlot } from "@lrnwebcomponents/utils/utils.js";

class LrnappStudioSubmissionDisplay extends PolymerElement {
  static get template() {
    return html`
      <style>
        [hidden] {
          display: none !important;
        }
        :host {
          display: block;
        }
        p {
          font-size: 14px;
          line-height: 18px;
        }
        h1,
        h2,
        h3 {
          margin: 0;
          text-align: left;
        }
        iron-selector {
          line-height: 1em;
        }
        iron-selector lrnsys-button {
          display: inline-flex;
        }
        marked-element {
          display: block;
          margin: 0 5em 0 5em;
        }
        img.image {
          margin: 0 0.5em;
        }
        lrnsys-dialog {
          display: inline;
        }
        .contain {
          width: 10em;
          height: 10em;
          background: #ddd;
        }
        .center {
          margin: auto;
          width: 100%;
        }
        .title {
          color: #222;
          font-size: 2rem;
          font-weight: 600;
          line-height: 2.5rem;
          padding: 0.25rem 0;
          white-space: nowrap;
          overflow-x: hidden;
          text-overflow: ellipsis;
          margin-top: 1rem;
          text-align: center;
        }
        .author {
          color: #555;
          font-size: 1rem;
          font-weight: 500;
          font-style: normal;
          line-height: 1rem;
          padding: 0.25rem 0 0.5rem 0;
          margin: 0;
          text-transform: capitalize;
        }
        .date {
          color: #555;
          font-size: 16px;
          font-style: normal;
          padding: 0.25rem 0 0.5rem 0;
          margin: 0;
        }
        .flex-wrap {
          display: flex;
        }
        .submission-page-card {
          margin: 0;
          padding: 16px;
        }
        :host([edit-page]) .submission-page {
          width: 100%;
        }
        .image-dialog-header {
          display: flex;
        }
        app-toolbar {
          width: 36em;
          background: #ddd;
        }
        lrnsys-button {
          padding: 0.75em;
        }
        .top {
          top: 8em;
        }
        div.card {
          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
        }
      </style>
      <div class="submission-page">
        <div class="submission-page-card ferpa-protect card">
          <div class="card-content">
            <lrndesign-avatar
              class="center"
              label="[[submission.relationships.author.data.name]]"
              src="[[submission.relationships.author.data.avatar]]"
            ></lrndesign-avatar>
            <div class="author center">
              [[submission.relationships.author.data.display_name]]
            </div>
            <h2 class="title center">[[submission.attributes.title]]</h2>
            <div class="date center">
              Created: [[date(submission.meta.created)]]
            </div>
            <div class="date center">
              Last updated: [[date(submission.meta.changed)]]
            </div>
            <!-- ----- Text Submission ----- -->
            <word-count>
              <marked-element id="markedarea"> </marked-element>
            </word-count>
            <!-- ----- Images Submission ----- -->
            <template is="dom-if" if="[[submission.attributes.images]]">
              <lrndesign-contentblock class="center">
                <template
                  is="dom-repeat"
                  items="[[_toArray(submission.attributes.images)]]"
                  as="image"
                >
                  <lrnsys-dialog alt="View Image">
                    <div class="image-dialog-header"></div>
                    <span slot="button">
                      <img
                        style="width:200px; height:200px; background-color: lightgray;"
                        class="contain image"
                        src$="[[_getImageThumbnail(image)]]"
                        loading="lazy"
                      />
                    </span>
                    <div style="text-align: center;">
                      <div hidden$="[[_isGif(image)]]">
                        <image-inspector src$="[[_getImageUrl(image)]]">
                          <span slot="toolbar" style="display: inline-flex;">
                            <lrnsys-button
                              alt="Download all images"
                              icon="icons:file-download"
                              href="[[submission.attributes.download_files]]"
                              target="_blank"
                            ></lrnsys-button>
                          </span>
                        </image-inspector>
                      </div>
                      <div hidden$="[[!_isGif(image)]]">
                        <lrnsys-button
                          alt="Download all images"
                          icon="icons:file-download"
                          href="[[submission.attributes.download_files]]"
                          target="_blank"
                        ></lrnsys-button>
                        <img
                          style="width:500px; height:500px; background-color: lightgray;"
                          class="contain image"
                          src$="[[_getImageUrl(image)]]"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </lrnsys-dialog>
                </template>
              </lrndesign-contentblock>
            </template>
            <!-- ----- Video Submission ----- -->
            <template is="dom-if" if="[[submission.attributes.video]]">
              <lrndesign-contentblock class="center">
                <template
                  is="dom-repeat"
                  items="[[_toArray(submission.attributes.video)]]"
                  as="video"
                >
                  <iframe
                    width="460"
                    height="249"
                    src="[[video.video_src]]"
                  ></iframe>
                </template>
              </lrndesign-contentblock>
            </template>
            <!-- ----- Links Submission ----- -->
            <template is="dom-if" if="[[submission.attributes.links]]">
              <lrndesign-contentblock>
                <template
                  is="dom-repeat"
                  items="[[_toArray(submission.attributes.links)]]"
                  as="link"
                >
                  <p>
                    <strong>[[link.title]]:</strong>
                    <a class="link" href="[[link.url]]" target="_blank"
                      >[[link.url]]</a
                    >
                  </p>
                </template>
              </lrndesign-contentblock>
            </template>
            <!-- ----- Files Submission ----- -->
            <template is="dom-if" if="[[submission.attributes.files]]">
              <lrndesign-contentblock title="Files Submitted">
                <template
                  is="dom-repeat"
                  items="[[_toArray(submission.attributes.files)]]"
                  as="file"
                >
                  <p>
                    <strong>[[file.filename]]:</strong>
                    <a class="link" href="[[file.url]]" target="_blank"
                      >[[file.url]]</a
                    >
                  </p>
                </template>
              </lrndesign-contentblock>
            </template>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "lrnapp-studio-submission-display";
  }
  static get properties() {
    return {
      /**
       * Object that has all the details of a submission that
       * is being viewed.
       */
      submission: {
        type: Object,
        notify: true,
        observer: "_submissionLoaded",
      },
      elmslnCourse: {
        type: String,
      },
      elmslnSection: {
        type: String,
      },
      basePath: {
        type: String,
      },
      csrfToken: {
        type: String,
      },
      endPoint: {
        type: String,
      },
    };
  }
  /**
   * Submission loaded has to carefully remove what's in the markdown area
   */
  _submissionLoaded(newValue, oldValue) {
    // wipe the slot of the marked area
    if (this.shadowRoot && this.shadowRoot.querySelector("#markedarea")) {
      wipeSlot(this.shadowRoot.querySelector("#markedarea"));
      var mdscript = document.createElement("script");
      mdscript.type = "text/markdown";
      mdscript.innerHTML = "";
      if (newValue && newValue.attributes) {
        setTimeout(() => {
          mdscript.innerHTML = newValue.attributes.body;
          this.shadowRoot.querySelector("#markedarea").appendChild(mdscript);
          this.shadowRoot.querySelector("#markedarea").markdown =
            newValue.attributes.body;
        }, 0);
      }
      // help ensure if a fast object switch of inner content
      // we make sure it's wiped fully
      else if (oldValue && !newValue) {
        this.shadowRoot.querySelector("#markedarea").appendChild(mdscript);
        this.shadowRoot.querySelector("#markedarea").markdown = "";
      }
    }
  }

  date(time) {
    if (time) {
      var parts = time.split("-");
      let times = time.split("T");
      let month = parts[2].split("T");
      times = times[1].split("-");
      return parts[1] + "/" + month[0] + " - " + times[0];
    }
  }
  /**
   * Simple way to convert from object to array.
   */
  _toArray(obj) {
    if (typeof obj === "object" && obj !== null) {
      return Object.keys(obj).map(function (key) {
        return obj[key];
      });
    }
    return [];
  }
  /**
   * get thumbnail or just the image data directly based on truncated data
   */
  _getImageThumbnail(image) {
    if (image) {
      if (image.thumbnail) {
        return image.thumbnail;
      }
      return image;
    }
    return "";
  }
  /**
   * get url or just the image data directly based on truncated data
   */
  _getImageUrl(image) {
    if (image) {
      if (image.url) {
        return image.url;
      }
      return image;
    }
    return "";
  }
  /**
   * See if this is a GIF, if it is then report back so we
   * know which player to display.
   */
  _isGif(image) {
    // get url from image normalizing for simplified data
    let url = this._getImageUrl(image);
    if (url != "" && url.indexOf(".gif") != -1) {
      return true;
    }
    return false;
  }
}
window.customElements.define(
  LrnappStudioSubmissionDisplay.tag,
  LrnappStudioSubmissionDisplay
);
export { LrnappStudioSubmissionDisplay };
