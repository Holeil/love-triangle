/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  counts = 0;
  for(var i = 0; i < preferences.length; i++) {
    var a, b;
    if(preferences[i] < 0 || preferences[i] > preferences.length) continue;
    a = preferences[i] - 1;
    if(preferences[a] < 0 || preferences[a] > preferences.length || preferences[a] == preferences[i]) continue;
    b = preferences[a] - 1;
    if(preferences[b]-1 == i) counts++;
    preferences[i] = -1;
  }
  return counts;
};
