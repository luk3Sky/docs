
# Usage instructions

You can find the current documentation articles in the directory, './docs/'. Can use any folder structure for organize the md files. 
Use the header file start three dashes and end with three dashes for define the properties of each page.

```md
---
layout: default                 # keep it as 'default'
parent: MQTT                    # title of the parent article in the navigation tree
grand_parent: Communication     # optional, use if the article is a grandchild in the navigation tree
title: Robot Protocols          # title of the page
nav_order: 1                    # You can use this number to define the order the items in navigation bar. otherwise it will use alphabetical order
permalink: communication/mqtt   # this is the actual url of the article (Here, https://pera-swarm.ce.pdn.ac.lk/docs/communication/mqtt.html)
has_children: true              # Make this true if there any child pages under this page
---
```

More details on these properties can be found in [Navigation Structure](https://pmarsceill.github.io/just-the-docs/docs/navigation-structure/)

Possible Markdown techniques can be found in [here](https://pera-swarm.ce.pdn.ac.lk/docs/markdown-tech) and you can see the syntax from [here](https://raw.githubusercontent.com/Pera-Swarm/docs/main/docs/theme/index-test.md).

Please refer [typography details](https://pmarsceill.github.io/just-the-docs/docs/utilities/typography/) and [layout options](https://pmarsceill.github.io/just-the-docs/docs/utilities/layout/) for any advanced uses.

----
# Original documentation from the Developers 

<p align="right">
    <a href="https://badge.fury.io/rb/just-the-docs"><img src="https://badge.fury.io/rb/just-the-docs.svg" alt="Gem version"></a> <a href="https://github.com/pmarsceill/just-the-docs/actions?query=workflow%3A%22Master+branch+CI%22"><img src="https://github.com/pmarsceill/just-the-docs/workflows/Master%20branch%20CI/badge.svg" alt="Build status"></a>
</p>
<br><br>
<p align="center">
    <h1 align="center">Just the Docs</h1>
    <p align="center">A modern, highly customizable, and responsive Jekyll theme for documentation with built-in search.<br>Easily hosted on GitHub Pages with few dependencies.</p>
    <p align="center"><strong><a href="https://pmarsceill.github.io/just-the-docs/">See it in action!</a></strong></p>
    <br><br><br>
</p>

![jtd](https://user-images.githubusercontent.com/896475/47384541-89053c80-d6d5-11e8-98dc-dba16e192de9.gif)

## Installation

Add this line to your Jekyll site's Gemfile:

```ruby
gem "just-the-docs"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: just-the-docs
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install just-the-docs

Alternatively, you can run it inside Docker while developing your site

    $ docker-compose up

## Usage

[View the documentation](https://pmarsceill.github.io/just-the-docs/) for usage information.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/pmarsceill/just-the-docs. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

### Submitting code changes:

- Open a [Pull Request](https://github.com/pmarsceill/just-the-docs/pulls)
- Ensure all CI tests pass
- Await code review
- Bump the version number in `just-the-docs.gemspec` and `package.json` according to [semantic versioning](https://semver.org/).

### Design and development principles of this theme:

1. As few dependencies as possible
2. No build script needed
3. First class mobile experience
4. Make the content shine

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is set up just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When the theme is released, only the files in `_layouts`, `_includes`, and `_sass` tracked with Git will be released.

## License

The theme is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
