export default {
  async getTechnologies () {
    await new Promise(resolve => {
      setTimeout(resolve, 1000)
    })
    return ['AngularJS', 'ReactJS', 'ES6', 'Babel', 'Webpack']
  }
}
