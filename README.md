
# AIU Portal in Quarto

These are notes on how to migrate the different (frankenstein-like) parts of the
current AIU Portal based on blogdown and Hugo to a Quarto based version.

# Migration Steps

1. rename all `.md` and all `.Rmd` to `.qmd`
1. copy `content/` one level up
1. review where `_common.R` is really used/needed
1. top-level setup, not ToC for page, i.e. `toc: false` in `_quarto.yml`.
   BUT it can be enabled locally; maybe useful for Methodology ages.
1. add `library` as a resource in `_quarto.yml`: this is to store the PDF of interesting
   blibliography works or other materia, typically PDF files.
1. in **Methodology**: links to images either the markdown way, i.e. remove
   `knitr::include_graphics()` or remove `/images/`
1. in **Methodology** main page: remove images from the bullets, too difficult to
   port it in Quarto.
   Create a directory for every page and move to `index.qmd` with its own images
1. **Acronyms**: listing in Quarto can take care of it.
   *TODO*: do we want to have the letter of alphabets links?
1. **Data**: embed the params in the YML for the file


# Notes

## shortcodes

We use many custom (in `themes/pru-theme/layout/shortcodes`) and hugo shortcodes,
here is how to migrate them or alternative
solutiuons for where they are used:

* `a_blank_xyzzy` can be changed to `a_blank xyzzy`: we have a new Quarto extension
   `qlink` with the new definition
* `attn_i`, `csv_i`, `..._i`: we use the [Quarto extension for fontawesome][fa]
   for the relevant icons in the custom shortcodes
* `relrel` and `rel`: link directly to the `xxx.qmd`, see examples in `acronym`

## Relative URLs

The various pages are full of 

[fa]: <https://github.com/quarto-ext/fontawesome> "Fontawesome Quarto extension"