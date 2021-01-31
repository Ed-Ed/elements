const filterProps = (props: Object, keys: string[]) => {
  if (props) {
    const propsCopy = Object.assign({}, props);

    keys.forEach(k => delete propsCopy[k]);

    return propsCopy;
  }

  return {};
};

export { filterProps };
