function quotemeta (str) {
  // From: http://phpjs.org/functions
  // +   original by: Paulo Freitas
  // *     example 1: quotemeta(". + * ? ^ ( $ )");
  // *     returns 1: '\. \+ \* \? \^ \( \$ \)'
  return (str + '').replace(/([\.\\\+\*\?\[\^\]\$\(\)])/g, '\\$1');
}
