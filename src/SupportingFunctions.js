const reformatDateToMMDDYYYY = (YYYYMMDDdate) => {
  const pattern = /(\d{4})\-(\d{2})\-(\d{2})(.*)/;
  if (!YYYYMMDDdate || !YYYYMMDDdate.match(pattern)) {
    return YYYYMMDDdate;
  }
  return YYYYMMDDdate.replace(pattern, '$2/$3/$1$4');
}

export { reformatDateToMMDDYYYY }