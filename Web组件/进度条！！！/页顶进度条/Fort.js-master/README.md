#Fort.js

Modern progress bar for form completion.
All you do is add the form and Fort.js' algorithm will take care of the rest. Best of all, it's super small. [Check out the demo!](https://idriskhenchil.me/fort)

##Usage
Using Fort is so simple, it's simple. All you do is insert `fort.min.js` and `fort.min.css` into the `<head>` then pop in an `<input>` into `<div class="form">`. Anything outside of the `<div>` won't count. Now you just call the effect (Scroll down to the the "Effects" section for more). Yep, that's all there is to it. Fort does the rest.
```html
<head>
  <script src="fort.min.js"></script>
  <link rel="stylesheet" href="fort.min.css">
</head>
<body>
<div class="form">
  <form method="post">
    <input type="text">
  </form>
</div>
  <script>
      Fort.flash("#009DFF", "#000", "#6638F0");
  </script>
</body>
```


Think the progress bar speed is too slow or too fast? No worries. In `fort.min.css` just change the speed to your desired liking.
```css
transition: all 1s;
```
Additionally if you prefer the bottom rather than the top, just change `top: 0;` to `bottom: 0;` in `fort.min.css`.

Want to change the height? Open the stylesheet and change `height: 4px;` to your liking.

**Certain fields:**

If you want to include only certain fields add a class named `ignore` to the field. Fort will not detect the field after you do so.
##Effects
 * [Default](https://idriskhenchil.me/fort/) - `solid()`
 * [Gradient](https://idriskhenchil.me/fort/gradient) - `gradient()`
 * [Sections](https://idriskhenchil.me/fort/sections) - `sections()`
 * [Flash](https://idriskhenchil.me/fort/flash) - `flash()`
 * [Merge](https://idriskhenchil.me/fort/merge) - `merge()`



**Changing the colors:**
* Solid - `Fort.solid("#009DFF")` Keepin' it simple

* Gradient - `Fort.gradient("#009DFF", "#47B9FF")` Note that only two values should be passed.

* Sections - `Fort.sections("#009DFF", "#4AF2A1", "#FB5229")` The more colors you add, the more sections you get!

* Flash - `Fort.flash("#009DFF", "#000", "#6638F0");` Old school, yet unique.

* Merge `Fort.merge("#009DFF");` *Tip*: Add a few more colors and see what you get (Not 100% tested)

##Browser Support
 * Safari 7.0 
 * Opera 21 
 * Mozila Firefox 29 and up
 * Google Chrome 34 and up
 * Internet Exporer 8.0 and up 
 
##Coming soon
 * More effects. Have an idea? [Email](mailto:idriskhenchil@gmail.com) me!

##License
Fort.js is licensed under the MIT license.(http://opensource.org/licenses/MIT)
It's pretty simple, but here's the definition we get

The MIT License is a permissive license that is short and to the point. It lets people do anything they want with your code as long as they provide attribution back to you and don't hold you liable.
##Acknowledgements

**Fort.js** is authored and maintained by [Idris Khenchil](https://idriskhenchil.me)




Feel free to check out the demo [here](https://idriskhenchil.me/fort). Used Fort in a project? I'd love to see it, [email](mailto:idriskhenchil@gmail.com) me.
