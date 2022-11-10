export const helpers = array => {
  return array.map(
    ({ id, webformatURL: webURL, largeImageURL: largeURL, tags }) => ({
      id,
      webURL,
      largeURL,
      tags,
    })
  );
};
