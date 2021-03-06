'use strict'

const User = use('App/Models/User')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Mauricio Silva',
      email: 'mausilva828@hotmail.com',
      password: '123456'
    })

    await user.teams().create({
      name: 'Rocketseat',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
