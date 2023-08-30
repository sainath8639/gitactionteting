export const getComponentAttribute = (props, attributeName) => {
  if (props.container.attributes[attributeName]) {
    return props.container.attributes[attributeName].nodeValue;
  }
  return undefined;
};
