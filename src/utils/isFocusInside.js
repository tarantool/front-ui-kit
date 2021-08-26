// @flow
export const isFocusInside = (element: HTMLElement): boolean => {
  const focused = document.activeElement;
  return element === focused || element.contains(focused);
}

export const isFocusInsideRef = (ref: { current: HTMLElement | null }): boolean => {
  return (ref && ref.current && isFocusInside(ref.current)) || false;
}
