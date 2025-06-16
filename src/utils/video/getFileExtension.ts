const getFileExtension = (path: string): string => {
  if (path == null) return '';

  const lastIndex = path.lastIndexOf('.');
  if (lastIndex > -1) {
    return path.substr(lastIndex + 1);
  }

  return '';
};

export default getFileExtension;
