// @flow
export const isFocusInside = (element: HTMLElement): bool => {
  const focused = document.activeElement;
  return element === focused || element.contains(focused);
}

export const isFocusInsideRef = (ref: { current: HTMLElement | null }): bool => {
  return (ref && ref.current && isFocusInside(ref.current)) || false;
}
