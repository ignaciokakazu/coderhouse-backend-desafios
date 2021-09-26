import dotenv from 'dotenv';
dotenv.config();

const venv = {
  PORT: process.env.PORT || 8080,
  //MONGO_ATLAS
  MONGO_ATLAS_USER: process.env.MONGO_ATLAS_USER || 'user1234',
  MONGO_ATLAS_PASSWORD: process.env.MONGO_ATLAS_PASSWORD || 'RjPDXWOh3m4xsGad',
  MONGO_ATLAS_CLUSTER: process.env.MONGO_ATLAS_CLUSTER || 'cluster0.tc0bp.mongodb.net',
  MONGO_ATLAS_DBNAME: process.env.MONGO_ATLAS_DBNAME || 'ecommerce',
  //MONGO_LOCAL
  MONGO_LOCAL_DBNAME: process.env.MONGO_LOCAL_DBNAME || 'ecommerce',
  //FIREBASE
  FIREBASE_TYPE: "service_account",
  FIREBASE_PROJECT_ID: "backend-6a3c8",
  FIREBASE_PRIVATEKEY_ID: "24a17187b310cb2e351ece7bb1b1e9fcd8120827",
  FIREBASE_PRIVATE_KEY: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDEsMtRJL2kHYJx\nLceUOjIE41mHwYfFck4NHg895piRXcPPNQ2MkXN5HScz9YPGiPJXooo6C1nNbyD5\n3PTbqD5N/89wbY0/Rl/jHRI3VD7Lsv6pt4QmTBl5yp3K4j6wtMdEf8zK8Pl3j05/\n4tdp7xCyRCyVFyAef8yMGChkmDRmqWJXhvlxrgQRpDZCgddKo2ei/9KHxW0RIV8H\nlIDKDAYyQQ/+yF6PifxiXWMwrpKgyLs8KMOazqiVbq/FSNM9mroC58PQwZnE7jcv\n1FoB84Se8BHPkrDjnmmugrCG6P38V120ZMnbA5AnoE3Go0/jWkuk3//MjuOl4I84\nAXwqjn0hAgMBAAECggEABTymwGMAT3yW/OwwUV70XS7SEOXMxE25WTfLifZAnSOO\npJMttU6xCqgWlrmSVuVv4quUjyBptW1cLSSG7ctacZdYDJd53MB+zEkbmdshTjpW\nfkgwMPZyzzKsIaoWUgTNIF5w3h95/obxVqevZWghkDT+E/RG31GMT74PDcx62cJ1\noThcFnfzPf72wFeUapaKLUOoz8rCOM9vuaarsi+vV8DicZWAMUCVnPbeUFVVBDvO\nx8Hd7hVsedwezLgxvjWWw+f2h+MBdZozW4qCvibC+cSDHaUV+rInax6add07smwc\nueWzYZCJTFhfylMh29D3aIf974HUJNk5OvHmW52eiQKBgQDo+6natwwUPJi4AFWa\nBgwGU+fnfdmoC23cnfZP/9jfufl2yGFEir6BzxpXmCTBgWap39mgfTWDWsttPIgJ\nnGweWaP1tf79mp+/gPY8gQRE6mfsHvB9kSNEHxm+IUO/9dfFRUHa5vHBpZ3WMEc0\noH1f/vqP4s1MZybA1+0fJPq6pwKBgQDYH0ObHaWUHeGAqyY9dV/FsAtPNwOr7fb0\n8QXEIzJ53T3n/upLKfIBUlhgFM4fc5JfZWh01LCdf/Q+wMScy1tMvxEYttSQxQJA\nndRU///3CQOvTQlYHC25uhv5yAaL3yE4Iclosaay5Q7UYcLB4gfGoiFxFQB+JW2L\nVU+8l3Mq9wKBgQC2jySMPiyX2tesLo7k7uITP0ITMZkQxUvjuF8eVpMA1AA25FLb\nW4BlxPuWMaBzhEsGx2IHELWS5N1MDkdmiIxrx7/jNCXHYJbWf13zEQFgYvDlo2S8\nb7LbmScZxYUJ8MCPUnKE7bv4CidAg3n4Md2sD+cUQhquSJGkQE4MvnQ9NwKBgAfm\nvLYDE3ai0Qe/OhqtG99CXGd8/2ldvdWeqjNNhh7mc8jzjOVKl0ptFEYO/Koxs3xB\nXNxImlxnvSo+KfIBjUj1A08AAC16xmZOXuDsqxMBBV13V4wdG57aqwMqyPJ8Kd6/\nfXmSZSHNNgmVuWUVOmuMqeRUfDwgaizZ5ZxjfRZpAoGBANEosH4HS6HQj44+Yr9e\nHSGXVTsOEbStgPgdult3Fe2Q5RKfFmsk3hnOYcbgma2D/ImR/DsycHkuCVlWzYVX\nIPE3OaO/pBZTI41i6LcYoCVbUZoXrVjRxLtx2aRuLxN1rt3eayV3Ozo8mlezvfK0\nawsWcmoVnd7UJuH2aV1WUzpH\n-----END PRIVATE KEY-----\n",
  FIREBASE_CLIENT_EMAIL: "firebase-adminsdk-tmso2@backend-6a3c8.iam.gserviceaccount.com",
  FIREBASE_CLIENT_ID: "115741114265399446009",
  FIREBASE_AUTH_URI: "https://accounts.google.com/o/oauth2/auth",
  FIREBASE_TOKEN_URI: "https://oauth2.googleapis.com/token",
  FIREBASE_AUTH_PROVIDER_X509_CERT_URL: "https://www.googleapis.com/oauth2/v1/certs",
  FIREBASE_CLIENT_X509_CERT_URL: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-tmso2%40backend-6a3c8.iam.gserviceaccount.com"
};

export default venv;