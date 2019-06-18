import Vue from 'vue'
import JSEncrypt from 'jsencrypt'

// const NodeRSA = require('node-rsa')

console.log('> > > plugins/encrypt... ')

Vue.prototype.$EncryptionRSA = (stringToEncrypt, publicKey, rsaEncrypt = true) => {
  // cf : https://github.com/travist/jsencrypt

  console.log('> > > plugin EncryptionRSA / stringToEncrypt : ', stringToEncrypt)
  // console.log('> > > plugin EncryptionRSA / publicKey : ', publicKey)

  console.log('> > > plugin EncryptionRSA / process.env : ', process.env)
  console.log('> > > plugin EncryptionRSA / rsaEncrypt : ', rsaEncrypt)

  let encrypted

  if (rsaEncrypt) {
    // JSENCRYPT

    // Encrypt with the public key...
    var encrypt = new JSEncrypt()
    // console.log('> > > plugin EncryptString / encrypt : ', encrypt)
    encrypt.setPublicKey(publicKey)
    encrypted = encrypt.encrypt(stringToEncrypt)
    // console.log('> > > plugin EncryptString / encrypted : ', encrypted)
  } else {
    encrypted = stringToEncrypt
  }

  return {
    salt: publicKey,
    hashed: encrypted
  }
}
