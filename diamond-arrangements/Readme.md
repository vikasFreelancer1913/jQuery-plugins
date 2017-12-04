# JQuery Plugin

This is the custom made jQuery plugin to Arrange Diamond shape on dom

## Getting Started

Follow the instruction to include and use of this plugin.
* Include jQuery - Optional
* Include jQuery.pack.js - Mandatory
* Include DiamondArrange.jQuery.js - Mandatory
* Use element (class or id) selector to call pluign method DiamondArrange() - Mandatory
* You can pass {'margin': anynumber} as parameter, by default it will take 8px as margin - Optional
* Now the boxes are square it is mandatory and in css you can use transfrom rotate property to rotate it to make diamond shape.


## Example

```
  <html>
    <body>
      <div class="list-wrap js-listWrap"></div>

      <script src="jQuery.pack.js"></script>
      <script src="center.jQuery.js"></script>
      <script>
        $('.js-listWrap').DiamondArrange(); // Without margin params
        $('.js-listWrap').DiamondArrange({
          'margin': '10'
        }); // With margin params
      </script>
    </body>
  </html>
```
