'use strict'

class Makenova {
  constructor() {
    this.name = `Mayiawo Aken'Ova`
    this.alias = 'makenova'
    this.twitter = '@make_nova'
    this.github = 'https://github.com/makenova'
    this.website = 'http://makenova.com'
    this.title = 'Code pusher'
    this.formalTitle = 'Programmer'
    this.location = 'Oklahoma City, OK'
  }

  whois(config) {
    if(!config) config = {}
    // TODO: write a string template function that wraps at 80 lines
    return `
    ${this.name} is a ${config.formal ? this.formalTitle : this.title} from Nigeria who lives and works in ${this.location}.
    He is "${this.alias}" on the internet ...for the most part.

    Twitter: https://twitter.com/${this.twitter}
    Github: ${this.github}
    Website: ${this.website}
    `
  }
}

module.exports = Makenova
