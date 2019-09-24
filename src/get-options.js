const getOptions = modifiers => {
  if (!modifiers) {
    return { delay: defaultDelay, initial: false };
  }
  const { initial = false } = modifiers;
  let delay = Object.keys(modifiers)
    .map(k => parseInt(k))
    .find(v => !isNaN(v));
  delay = delay || defaultDelay;
  return { delay, initial };
};

export default getOptions;
