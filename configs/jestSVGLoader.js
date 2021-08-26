const path = require('path');

const getAttr = (svg, attr) => {
  const start = svg.indexOf(`${attr}="`);

  if (start === -1) return null;

  const leftTrimmed = svg.slice(start + attr.length + 2);
  return leftTrimmed.slice(0, leftTrimmed.indexOf('"'));
}

const getViewBox = svg => {

  const start = svg.indexOf('<svg');
  const leftTrimmed = svg.slice(start);
  const firstTag = leftTrimmed.slice(0, leftTrimmed.indexOf('>'));

  return getAttr(firstTag, 'viewBox') || `0 0 ${getAttr(svg, 'width')} ${getAttr(svg, 'height')}`;
}

module.exports = {
  process(src, filename, config, options) {
    const SVGDescriptor = {
      content: src,
      id: path.basename(filename).slice(0, -path.extname(filename).length),
      node: null,
      viewBox: getViewBox(src)
    };

    return `module.exports = ${JSON.stringify(SVGDescriptor)};`;
  }
};