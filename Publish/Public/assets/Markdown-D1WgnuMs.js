import { defineComponent, computed, onMounted, nextTick, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import DOMPurify from "dompurify";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Markdown",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      required: true
    },
    enableHtmlParsing: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const createMarkdownRenderer = () => {
      const md2 = new MarkdownIt({
        html: props.enableHtmlParsing,
        linkify: true,
        typographer: true,
        breaks: true,
        highlight: (str, lang) => {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return `<pre class="hljs code-block"><code class="language-${lang}">${hljs.highlight(str, { language: lang, ignoreIllegals: true }).value}</code></pre>`;
            } catch (_) {
              console.error("Highlighting error");
            }
          }
          return `<pre class="hljs code-block"><code>${md2.utils.escapeHtml(str)}</code></pre>`;
        }
      });
      return md2;
    };
    const md = createMarkdownRenderer();
    const sanitizedMarkdown = computed(() => {
      if (!props.content) return "";
      const decodedContent = decodeHTMLEntities(props.content);
      const renderedContent = md.render(decodedContent);
      return DOMPurify.sanitize(renderedContent, {
        ALLOWED_TAGS: [
          "p",
          "br",
          "strong",
          "em",
          "u",
          "s",
          "sup",
          "sub",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "ul",
          "ol",
          "li",
          "blockquote",
          "code",
          "pre",
          "a",
          "img",
          "table",
          "thead",
          "tbody",
          "tr",
          "th",
          "td"
        ],
        ALLOWED_ATTR: ["href", "name", "target", "src", "alt", "width", "height", "class"],
        FORBID_TAGS: ["script", "style"],
        FORBID_ATTR: ["onerror", "onclick", "onload", "onmouseover"]
      });
    });
    function decodeHTMLEntities(text) {
      const textarea = document.createElement("textarea");
      textarea.innerHTML = text;
      return textarea.value;
    }
    onMounted(async () => {
      await nextTick();
      document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightElement(block);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-content" }, _attrs))} data-v-ee279668>${sanitizedMarkdown.value ?? ""}</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/Comment/Markdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MarkdownRenderer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ee279668"]]);
export {
  MarkdownRenderer as M
};
