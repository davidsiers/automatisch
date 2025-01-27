import capitalize from './text/capitalize.js';
import extractEmailAddress from './text/extract-email-address.js';
import extractNumber from './text/extract-number.js';
import htmlToMarkdown from './text/html-to-markdown.js';
import lowercase from './text/lowercase.js';
import markdownToHtml from './text/markdown-to-html.js';
import pluralize from './text/pluralize.js';
import replace from './text/replace.js';
import trimWhitespace from './text/trim-whitespace.js';
import useDefaultValue from './text/use-default-value.js';
import performMathOperation from './numbers/perform-math-operation.js';
import randomNumber from './numbers/random-number.js';
import formatNumber from './numbers/format-number.js';
import formatPhoneNumber from './numbers/format-phone-number.js';
import formatDateTime from './date-time/format-date-time.js';

const options = {
  capitalize,
  extractEmailAddress,
  extractNumber,
  htmlToMarkdown,
  lowercase,
  markdownToHtml,
  pluralize,
  replace,
  trimWhitespace,
  useDefaultValue,
  performMathOperation,
  randomNumber,
  formatNumber,
  formatPhoneNumber,
  formatDateTime,
};

export default {
  name: 'List fields after transform',
  key: 'listTransformOptions',

  async run($) {
    return options[$.step.parameters.transform];
  },
};
