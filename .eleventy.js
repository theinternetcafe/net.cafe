module.exports = function(eleventyConfig) {
    // Copy `src/static/` to `_site/`
    eleventyConfig.addPassthroughCopy({ "src/static": "/"});

    // Add posts collection
    eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByGlob("src/posts/*.md").reverse().slice(0, 3);
    });

    return {
        templateFormats: ["html", "md", "njk"],
        dir: {
            input: "src",
            output: "_site"
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        passthroughFileCopy: false,
    }
}