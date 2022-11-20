const fs = require('fs');
const path = require('path');
const sass = require('node-sass');

const getComponents = () => {
  const types = ['atoms', 'molecules', 'organisms'];
  const allComponents = [];

  types.forEach(type => {
    const allFiles = fs.readdirSync(`src/${type}`)
      .map(file => ({
        input:  `src/${type}/${file}`,
        output: `lib/${file.slice(0, -4) + 'css'}`,
      }));

    allComponents.push(...allFiles);
  });

  return allComponents;
}

const compile = (pathName, fileName) => {
  const result = sass.renderSync({
    data: fs.readFileSync(
      path.resolve(pathName),
    ).toString(),
    outputStyle: 'expanded',
    includePaths: [path.resolve('src')],
  });

  fs.writeFileSync(
    path.resolve(fileName),
    result.css.toString(),
  );
}

compile('src/global.scss', 'lib/global.css');
getComponents().forEach(component => compile(component.input, component.output));
