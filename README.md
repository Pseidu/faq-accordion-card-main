# Frontend Mentor - FAQ accordion card solution
This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam).

## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview
### The challenge

Users should be able to:
- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot
./screenshot.jpg

### Links
- Solution URL: https://github.com/Pseidu/faq-accordion-card-main.git
- Live Site URL: https://pseidu.github.io/faq-accordion-card-main/

## My process
### Built with
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
HTML: I used details and picture elements for the first time
CSS: An element positioned absolute references first ancestor positioned.

Styling details element:
```css
details[open] summary {
    font-weight: bold;
}

details[open] p {
    height: auto;
    margin-top: 15px;
}

details[open] img {
    /*-webkit-transform:rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);*/
    transform: rotate(180deg);
}

```

## Author
- Rafael Soriano
- Frontend Mentor - [@pseidu]
