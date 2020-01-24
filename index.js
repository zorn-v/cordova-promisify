module.exports = function (cdvFunc) {
  return function () {
    return new Promise((resolve, reject) => {
      cdvFunc(...arguments, resolve, reject)
    })
  }
}
