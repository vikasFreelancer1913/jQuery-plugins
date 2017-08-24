# JQuery Plugin

This is the custom made jQuery plugin to Arrange different Height box on dom

## Getting Started

Follow the instruction to include and use of this plugin.
* Include jQuery - Optional
* Include jQuery.pack.js - Mandatory
* Include boxArrange.jQuery.js - Mandatory
* Use element (class or id) selector to call pluign method BoxArrange() - Mandatory
* You can pass {'margin': anynumber} as parameter, by default it will take 8px as margin - Optional


## Example

```
  <html>
    <body>
      <div class="list-wrap js-listWrap"></div>

      <script src="jQuery.pack.js"></script>
      <script src="center.jQuery.js"></script>
      <script>
        $('.js-listWrap').BoxArrange(); // Without margin params
        $('.js-listWrap').BoxArrange({
          'margin': '10'
        }); // With margin params
      </script>
    </body>
  </html>
```
