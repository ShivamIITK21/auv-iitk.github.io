[![Build Status](https://travis-ci.org/AUV-IITK/auv-iitk.github.io.svg?branch=master)](https://travis-ci.org/AUV-IITK/auv-iitk.github.io)

## Meghna-Hugo template

We have developed a website based on the [Hugo](https://gohugo.io/), and the template is [meghna-hugo](https://themes.gohugo.io/meghna-hugo/). The website is served at [auv-iitk.github.io](auv-iitk.github.io).

## Build Instructions

1. Install `hugo` for Ubuntu:
```
snap install hugo --channel=extended
// The apt install does not support multi-lingual documents, and leads to build errors
```

2. Install the submodule:
```
cd ~/auv-iitk.github.io
git submodule add https://github.com/themefisher/meghna-hugo themes/meghna-hugo
```
3. Run the website locally:
```
hugo server
```
4. Make changes for deployment:
```
hugo
```

## Usage

Fork the repo
Rename to `username.github.io`
Replace all the posts and images with your data

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/auv-iitk/auv-iitk.github.io/issues) here on GitHub

## Copyright and License

Copyright AUV-IITK.

All rights reserved by AUV-IITK for the files in `assest`, `_posts`,and `_data`; the rest of the code is released under the [MIT](https://opensource.org/licenses/mit-license.php) license.
