var faker = require('faker')
var fs = require('fs')

var file = 'tableContent.csv'

function generateData() {
  var name = faker.name.findName()
  var age = Math.floor(Math.random() * 100)
  var email = faker.internet.email()
  var phone = faker.phone.phoneNumber()

  return name + ',' + age + ',' + email + ',' +  phone
}

function content(number) {
  var content = ""
  for (var i = 0; i <= number; i++) {
    if (i == 0) {
      content += "name,age,email,phone"
    } else {
      content += generateData()
    }
    content += "\n"
  }
  return content;
}

fs.writeFile(file, content(10), function (err, file) {
  if (err) throw err;
  });
