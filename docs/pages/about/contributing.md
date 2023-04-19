---
transparentnav: false
fixednav: true
logosnav: true
layout: markdown
group: About
---
<p style="color: #f47d21">{{ page.group }}</p>

# Contributing to the website

This ELIXIR SCO Community website is hosted by Github and follows the Github Pages using Jekyll. With a few exceptions, most pages can be created using simple markdown text, just like this page itself. You can download this page markdown and edit it locally via `git clone` or directly on Github.

## Ways to contribute

### Page editing via GitHub

Virtually all pages can be edited directly on the [SCO GH-repo](https://github.com/elixir-europe/sco-community) for the SCO repository. You simply just need to go to the file you want to modify and click on "Edit". This is particularly useful in case of editing small bugs or editing a Markdown file from an Event, for example.


### Page editing via Pull Request

The easiest way to contribute with hands-on designs is to:

1. Do a fork on the top right corner from the [SCO GH-repo](https://github.com/elixir-europe/sco-community)
2. `git clone` to your own machine
3. Then, go to the `docs` folder and run the `bash jekyll.sh`
4. The script will pull the Docker container and create a version of the website locally.
5. Now open your browser and go to `http://0.0.0.0/4000` and voilà!

<br>

Once you are happy with the changes made, you can now create a **pull request** (PR) to the main page like so:

1. Start by add you changes with `git add .`.
2. Commit them with `git commit -m 'SHORT MESSAGE OF WHAT YOU CHANGED'`.
3. Do `git push` to upload your modifications to Github.
4. Then on your Github page will appear a link to `contribute to the main repository via pull request`.
5. Add a short message of your alterations (it can be the same as in `"SHORT MESSAGE OF WHAT YOU CHANGED"`) and click on the green button to create the pull request.

<br>

***


## Editing the website

### About, Training, Tools, Data and News sections

In these page sections, you can add information and lists of resources:
  - **About:**
    - [/docs/pages/about/index.md](https://github.com/elixir-europe/sco-community/blob/dc4753c5c767f94b94e09ce3390553d36d1c438d/docs/pages/about/index.md)
    - This section is designed to host information about the SCO community itself, how to get involved, how to contribute and additional funding opportunities, either nationally or internationally, including i.e. ELIXIR staff-exchange programme.
  - **Training:**
    - [/docs/pages/training/index.md](https://github.com/elixir-europe/sco-community/blob/dc4753c5c767f94b94e09ce3390553d36d1c438d/docs/pages/training/index.md)
    - This section contains information about the training materials and resources on SCO. Here, we should include a section of news and events related to training, such as upcoming courses and news regarding training. Also, learning paths and training gaps.
  - **Tools:**
    - [/docs/pages/tools/index.md](https://github.com/elixir-europe/sco-community/blob/dc4753c5c767f94b94e09ce3390553d36d1c438d/docs/pages/tools/index.md)
    - This section will provide list of papers in tool benchmarking, tool overview, some general recommendations and resources that can be used to test and deploy analysis workflows in SCO. It will also contain links to events and news, such as workshops and hackathons.
  - **Data:**
    - [/docs/pages/data/index.md](https://github.com/elixir-europe/sco-community/blob/dc4753c5c767f94b94e09ce3390553d36d1c438d/docs/pages/data/index.md)
    - This section hosts information about SCO data, including database recommendations for the different omics, data curation guidelines, annotation tools (e.g. UBERON) and help materials to achieve interoperability. News and events related to Data will also be highlighted here.
  - **News:**
    - [/docs/pages/news/index.md](https://github.com/elixir-europe/sco-community/blob/dc4753c5c767f94b94e09ce3390553d36d1c438d/docs/pages/news/index.md)
    - This section engulfs all News and Events related to SCO communities, including 3rd party events (i.e. HCA GM, ELIXIR AHM, etc) and focused events.

<br>

### Updating News and Events

You can list News and Upcoming events to the this file: [`/docs/pages/news/new_and_events.csv`](../../pages/news/new_and_events.csv). There, you should simply add a new line and fill the information for all columns. 

If you would like to create an SCO Community event, you need to do these ### steps:
  1. Create a markdown file in this folder: [`/docs/pages/news/events`](../../pages/news/events). Please use this naming convention: "YYYYMMDD_Event_Title.md", where "YYYY-MM-DD" is the 1st day of the event incase of multiple days.
  2. Then, in this markdown, you can use [`20230321_SCO_trainer_workshop.md`](../../pages/news/events/20230321_SCO_trainer_workshop.md) event as a template as inspiration. In your event, you should add the relevant sections, i.e.:
    - Brief introduction (please polish to maximum 100 words)
    - Dates and city/country
    - Venue details, including Travel information and Accommodation
    - Online Attendance options
    - Participating institution logos/names
    - Footnotes/References.
  3. With your Markdown description set, you can add the summary information to the [`/docs/pages/news/new_and_events.csv`](../../pages/news/new_and_events.csv).

<br>

***

## Website templates

### Page Layouts

There are 2 major HTML layout files can be found in the `docs/_layouts` folder:
- `default.html`: this layout is filled with boxes and links to the different webpage functionalities. The main webpage uses this layout.

![]({{site.baseurl}}/images/main.svg)

- `markdown.html`: this layout is formatted to display markdown text, such as events news and other information in text format.

![]({{site.baseurl}}/images/markdown.svg)

<br>

### Page sections

In addition to the main layouts, the source files used by the webpage sections are found in these four files:

`header.html`: this is a invisible section, used to load the CSS styles, scripts and other functions.

![]({{site.baseurl}}/images/header.svg)

`topnav.html`:

![]({{site.baseurl}}/images/navbar.svg)

`tertiary_content.html`

![]({{site.baseurl}}/images/thirdparty.svg)

`footer.html`: this is the last visible dark blue section at the bottom of the page, and it is used to display information about the webpage itself and load-and-run additional scripts that need to be executed after the content is loaded (eg. the script to create the side table of contents).

![]({{site.baseurl}}/images/footer.svg)

<br>

### CSS styles

All website scripts and custom functions are found in the `docs/css` folder.

<br>

### JS functions

All website scripts and custom functions are found in the `docs/javascript` folder.

<br>

***

## Markdown tips

### YAML header

When creating a markdown file, please make sure to include this header in the beginning so it can be rendered with the correct template `markdown` and with the correct group (one of the following: About, News, Events, Data, Tools, Training). For example:

```
---
transparentnav: false
fixednav: true
logosnav: true
layout: markdown
group: Events
---
```

<br>

### Time-restricted Application

In case of event pages that require a time-sensitive button for application, that can be achieved by setting 2 things. First, make sure that in you YAML header you include the `application_open` and `application_close` values to a date in "YYYY-MM-DD" format.

```
---
transparentnav: false
fixednav: true
logosnav: true
layout: markdown
application_open: 2023-01-20
application_close: 2023-03-12
group: Events
---
```

Second, you can now add the following code just below your event header to add an automatic button that will become active or inactive when application has passed.

```
`<button id="apply_button" class="" open="{{ page.application_open }}" close="{{ page.application_close }}" onclick="{{ page.application_open }}"></button>`
```

This HTML above use those variables `application_open` and `application_close` to decide when to activate and when to close the applications, simply by re-styling the button.

<br>

***

### Table of Contents

All other markdown tools and formatting options will be rendered as usual, and the table of contents (TOC) sidebar will be updated automatically using a javascript. So please

```
<p style="color: #f47d21">{{ page.group }}</p> (IGNORED THE TOC)

# Title 1 (IGNORED THE TOC)
## Title 2
### Title 3
#### Title 4
##### Title 5
###### Title 6

<br> //To add  some extra blank line

Some text in **bold** and *italics* and as a [clickable link](https://www.czarnewski.com).
```

The line `<p style="color: #f47d21">{{ page.group }}</p>` automatically adds the page group from the [YAML header](### YAML header)

<br>

### Code highlighting

Syntax highlighting styles stolen from `github-pages-leap-day` theme generated by [rouge](http://rouge.jneen.net/), original base16 by [Chris Kempson](https://github.com/chriskempson/base16).

```
git add .
for i in 1..10
do
  echo $i
done
```


















.
