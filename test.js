/* const fs = require('fs');
const path = require('path');

function fileList(dir, excludeDirs) {
    return fs.readdirSync(dir).reduce(function (list, file) {
        const name = path.join(dir, file);
        if (fs.statSync(name).isDirectory()) {
            if (excludeDirs && excludeDirs.length) {
                excludeDirs = excludeDirs.map(d => path.normalize(d));
                const idx = name.indexOf(path.sep);
                const directory = name.slice(0, idx === -1 ? name.length : idx);
                if (excludeDirs.indexOf(directory) !== -1)
                    return list;
            }
            return list.concat(fileList(name, excludeDirs));
        }
        return list.concat([name]);
    }, []);
}

console.log(fileList('.', ['node_modules', 'typings', 'bower_components', '.git'])); */

(function(){
  var fs = require('fs');

  const dree = require('dree');
  const tree = dree.scan('.', {exclude: /node_modules|\.git/, extensions: ['vue'], depth: 10});
  // console.log(tree);
  // return tree;
  fs.writeFile('./public/result.json', JSON.stringify(tree), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
})();


