---
transparentnav: false
fixednav: true
logosnav: true
layout: markdown
group: About
---
<p style="color: #f47d21">{{ page.group }}</p>

# Contributing to the website

This ELIXIR SCO Community website is hosted by Github and follows the Github Pages using Jekyll.
With a few exceptions, most pages can be created using simple markdown text, just like this page itself. You can download this page markdown and edit it locally via `git clone` or directly on Github.

## Website templates

### HTML Layouts

There are 2 major HTML layout files can be found in the `docs/_layouts` folder:
- `default.html`: this layout is filled with boxes and links to the different webpage functionalities. The main webpage uses this layout.
- `markdown.html`: this layout is formatted to display markdown text, such as events news and other information in text format.

### HTML sections

In addition to the main layouts, the source files used by the webpage sections are found in these four files:
- `header.html`: this is a invisible section, used to load the CSS styles, scripts and other functions.
- `topnav.html`:
- `tertiary_content.html`
- `footer.html`: this is the last visible dark blue section at the bottom of the page, and it is used to display information about the webpage itself and load-and-run additional scripts that need to be executed after the content is loaded (eg. the script to create the side table of contents).



### CSS styles

All website scripts and custom functions are found in the `docs/css` folder.

### JS functions

All website scripts and custom functions are found in the `docs/javascript` folder.

<br>

## Markdown tips

When creating a markdown file, please make sure to include this header in the beginning so it can be rendered with the correct template `markdown` and with the correct group (one of the following: About, News, Data, Tools, Training). For example:

```
---
transparentnav: false
fixednav: true
logosnav: true
layout: markdown
group: About
---

<p style="color: #f47d21">{{ page.group }}</p>

# YOUR PAGE TITLE

[...]
```

All other markdown tools and formatting options will be rendered as usual, and the table of contents (TOC) sidebar will be updated automatically.

```
# Single Cell Omics Community (THIS TITLE IS NOT LISTED IN THE TOC)

Identifies and addresses challenges in single-cell and spatial omics.
[link](pages/news/events/20230321_SCO_trainer_workshop.html)

## Title 2

### Title 3

#### Title 4

##### Title 5

###### Title 6

Some text

Some text in **bold**

Some text in *italics*


[link](https://www.czarnewski.com)


  git add .
  for i in 1..10
  do
    echo $i
  done

```
