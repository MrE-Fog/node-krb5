var krb5 = require('../lib/');


krb5.kinit({
  principal: 'admin',
  password: 'adm1n_p4ssw0rd',
  realm: 'KRB.LOCAL'
}, function (err, ccname) {
  if (err) {
    console.log(err)
  } else {
    console.log('Credentials saved in', ccname)

    krb5.spnego({
      service_fqdn: 'rest.krb.local'
    }, function (err, token) {
      if (err) {
        console.log(err)
      } else {
        console.log('SPNEGO token :', token)
      }
    })
  }
});


