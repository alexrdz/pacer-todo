export function slugify(str) {
  return str.replace(/ /g, '-').toLowerCase();
}