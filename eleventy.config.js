const fs = require('fs');
const { EleventyI18nPlugin } = require('@11ty/eleventy');
const eleventySass = require('eleventy-sass');
const esbuild = require('esbuild');

module.exports = (eleventyConfig) => {
  eleventyConfig.setServerOptions({
    port: 8000,
  });

  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'en',
  });

  eleventyConfig.addPlugin(eleventySass, {
    sass: {
      loadPaths: [`${__dirname}/node_modules`],
      sourceMap: process.env.NODE_ENVIRONMENT != 'production',
      sourceMapIncludeSources: true,
    },
    compileOptions: {
      permalink: (contents, inputPath) => {
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
      sourcemap: process.env.NODE_ENVIRONMENT != 'production',
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
