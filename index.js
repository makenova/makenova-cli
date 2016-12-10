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
    return `
    ${this.name} is a ${config.formal ? this.formalTitle : this.title} from Nigeria who lives and works in ${this.location}
    `
  }
}

module.exports = Makenova
