const { use } = require("passport");


let users = [
  {
    id: 1,
    username: 'Nabeel22',
    email: 'nabeel@mail.com',
    password: '$2y$06$eQav1OaIyWSUnlvPSaFXRe5gWRqXd.s9vac1SV1GafxAr8hdmsgCy', // johndoepassword
    validApiKey: null
  },
];

module.exports = {
  getUserById: (id) => users.find(u => u.id == id),
  getUserByName: (username) => users.find(u => u.username == username),

  

}