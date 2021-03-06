---
layout: page
title: "JavaScript stristr function"
comments: true
sharing: true
footer: true
alias:
- /functions/view/stristr:538
- /functions/view/stristr
- /functions/view/538
- /functions/stristr:538
- /functions/538
---
<!-- Generated by Rakefile:build -->
A JavaScript equivalent of PHP's stristr

{% codeblock strings/stristr.js lang:js https://raw.github.com/kvz/phpjs/master/functions/strings/stristr.js raw on github %}
function stristr (haystack, needle, bool) {
  // From: http://phpjs.org/functions
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   bugfxied by: Onno Marsman
  // *     example 1: stristr('Kevin van Zonneveld', 'Van');
  // *     returns 1: 'van Zonneveld'
  // *     example 2: stristr('Kevin van Zonneveld', 'VAN', true);
  // *     returns 2: 'Kevin '
  var pos = 0;

  haystack += '';
  pos = haystack.toLowerCase().indexOf((needle + '').toLowerCase());
  if (pos == -1) {
    return false;
  } else {
    if (bool) {
      return haystack.substr(0, pos);
    } else {
      return haystack.slice(pos);
    }
  }
}
{% endcodeblock %}

 - [Raw function on GitHub](https://github.com/kvz/phpjs/blob/master/functions/strings/stristr.js)

Please note that php.js uses JavaScript objects as substitutes for PHP arrays, they are 
the closest match to this hashtable-like data structure. 

Please also note that php.js offers community built functions and goes by the 
[McDonald's Theory](https://medium.com/what-i-learned-building/9216e1c9da7d). We'll put online 
functions that are far from perfect, in the hopes to spark better contributions. 
Do you have one? Then please just: 

 - [Edit on GitHub](https://github.com/kvz/phpjs/edit/master/functions/strings/stristr.js)

### Example 1
This code
{% codeblock lang:js example %}
stristr('Kevin van Zonneveld', 'Van');
{% endcodeblock %}

Should return
{% codeblock lang:js returns %}
'van Zonneveld'
{% endcodeblock %}

### Example 2
This code
{% codeblock lang:js example %}
stristr('Kevin van Zonneveld', 'VAN', true);
{% endcodeblock %}

Should return
{% codeblock lang:js returns %}
'Kevin '
{% endcodeblock %}


### Other PHP functions in the strings extension
{% render_partial _includes/custom/strings.html %}
