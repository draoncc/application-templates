# Creative & Clean application template

An application template written mainly in HTML & CSS, with wrappers for [slm]() and [html-pdf]().

## Usage
Use `npm run watch` to recompile on file change and open a livereload server at 8080, `npm run build:pdf` to compile to pdf. See `npm run` for a full list of scripts.

To edit your personal information, edit `src/partials/base_mixins.slm`. Adjust every other partial as needed. Partials starting with an underscore are individual pages.
To add further pages, place any .pdf file in `src/assets/attachments`.

Make sure to have pdftk installed to build the final application.pdf.
