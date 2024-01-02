const fs = require('fs');
const { EleventyI18nPlugin } = require('@11ty/eleventy');
const eleventySass = require('eleventy-sass');
const esbuild = require('esbuild');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: 'en',
  });

  eleventyConfig.addPlugin(eleventySass, {
    sass: {
      sourceMap: true,
      sourceMapIncludeSources: true,
    },
    compileOptions: {
      permalink: function (contents, inputPath) {
        return (data) => {
          return data.page.filePathStem.replace(/^\/_sass\//, '/css/') + '.css';
        };
      },
    },
  });

  fs.readdirSync('./public').forEach((file) => {
    eleventyConfig.addPassthroughCopy({ [`public/${file}`]: file });
  });

  eleventyConfig.on('afterBuild', () => {
    return esbuild.build({
      entryPoints: ['src/_js/language.js', 'src/_js/script.js'],
      outdir: 'dist/js',
      bundle: true,
      minify: true,
      sourcemap: true,
    });
  });
  eleventyConfig.addWatchTarget('./src/_js/');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
}
