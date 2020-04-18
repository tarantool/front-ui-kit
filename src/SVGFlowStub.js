/* @flow */
/*
This file is used via .flowconfig:
module.name_mapper.extension='svg' -> '<PROJECT_ROOT>/src/SVGFlowStub.js'
*/

const stub: SVGGlyph = {
  content: '',
  id: '',
  node: document.createElementNS('http://www.w3.org/2000/svg', 'symbol'),
  viewbox: ''
};

// Flow will treat imports from '.svg' as if it were imports from this file
export default stub;
