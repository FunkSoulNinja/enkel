function createId(length: number = 12) {
  return Math.random()
    .toString(36)
    .substring(length)
}

export default createId
