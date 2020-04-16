/* @flow */
/*
This file is used via .flowconfig:
module.name_mapper.extension='svg' -> '<PROJECT_ROOT>/src/SVGFlowStub.js'
*/

const stub = {
  viewBox: '',
  id: ''
};

export type Glyph = typeof stub;

// Flow will treat imports from '.svg' as if it were imports from this file
export default stub;
