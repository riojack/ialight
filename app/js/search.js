function doSearch(searchTerm, resultLimit) {
  const results = [];
  for (let i = 0; i < photos.length; i++) {
    if (i === resultLimit) {
      break;
    }
    const photo = photos[i];
    if (photo.title.toLowerCase().indexOf(searchTerm) >= 0) {
      results.push(photo);
    }

  }
  return results;
}
