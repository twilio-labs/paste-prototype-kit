const fs = require('fs').promises;
const path = require('path');

const walk = async (dir) => {
  let files = await fs.readdir(dir);
  files = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const stats = await fs.stat(filePath);
      if (stats.isDirectory()) return walk(filePath);
      else if (stats.isFile()) return filePath;
    }),
  );

  return files.reduce((all, folderContents) => all.concat(folderContents), []);
};

export default async (req, res) => {
  const pages = await walk('./pages');
  const filteredPages = pages.reduce((pages, page) => {
    // split based on file path
    const currentPagePath = page.replace('pages/', '').replace('.js', '').split('/');

    let newPagesToReturn = { ...pages };

    if (currentPagePath.length > 1 && currentPagePath[0] !== 'api') {
      // if this has sub pages and it's not the api folder
      if (pages[currentPagePath[0]]) {
        // if it's not the first time we've encountered this directory
        // add the current page to the existing ones for that directory
        newPagesToReturn = {
          ...pages,
          [currentPagePath[0]]: [...pages[currentPagePath[0]], currentPagePath[1]],
        };
      } else {
        // if it is the first time we've encountered this directory before
        // create a new directory on the pages object with the current page
        newPagesToReturn = {
          ...pages,
          [currentPagePath[0]]: [currentPagePath[1]],
        };
      }
    }
    if (
      currentPagePath.length === 1 &&
      currentPagePath[0] !== '_app' &&
      currentPagePath[0] !== '_document' &&
      currentPagePath[0] !== 'index'
    ) {
      // if it's just a page in the root and it's not the _app, _document or index page
      // add the current page to the end of the pages
      newPagesToReturn = {
        ...pages,
        [currentPagePath[0]]: [],
      };
    }
    // index always comes first no matter what
    return { index: [], ...newPagesToReturn };
  }, {});
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify(filteredPages));
};
