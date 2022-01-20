declare module '*.svg' {
  type SVGContent = {
    content: string;
    id: string;
    node: SVGSVGElement;
    viewBox: string;
  };

  const content: SVGContent;
  export default content;
}
