```
Directory structure:
└── codershubinc-open-api/
├── README.md
├── CNAME
├── CONTRIBUTING.md
├── index.js
├── LICENSE
├── package.json
├── USES.md
├── vercel.json
├── constants/
│ └── api.constants.js
├── src/
│ ├── controllers/
│ │ ├── api/
│ │ │ ├── v0.1/
│ │ │ │ ├── data.js
│ │ │ │ ├── randomImage/
│ │ │ │ │ └── randomImages.controller.js
│ │ │ │ └── randomUser/
│ │ │ │ └── randomUser.controller.js
│ │ │ └── v1.0/
│ │ │ ├── address/
│ │ │ │ └── address.controllere.js
│ │ │ ├── contryInfo/
│ │ │ │ └── contry.controller.js
│ │ │ ├── crypto/
│ │ │ │ └── crypto.controller.js
│ │ │ ├── gitHub/
│ │ │ │ ├── commonFuncs.js
│ │ │ │ └── getUser.controller.js
│ │ │ ├── gravatar/
│ │ │ │ └── gravatar.controller.js
│ │ │ ├── saavnCDN/
│ │ │ │ ├── saavnCDN.controller.js
│ │ │ │ └── search/
│ │ │ │ └── saavnCDN.search.controller.js
│ │ │ └── user/
│ │ │ └── user.controller.js
│ │ └── homePageApi/
│ │ └── homePageApi.controller.js
│ ├── lib/
│ │ └── data/
│ │ ├── userData.js
│ │ ├── userData0.js
│ │ ├── userData1.js
│ │ ├── userData2.js
│ │ └── api/
│ │ └── v1.0/
│ │ ├── common/
│ │ │ └── hobbys.js
│ │ └── country/
│ │ ├── allContryCodes.js
│ │ ├── AU/
│ │ │ ├── citys.js
│ │ │ ├── femailFirstName.js
│ │ │ ├── firstName.js
│ │ │ ├── index.js
│ │ │ ├── lastName.js
│ │ │ ├── maleFirstName.js
│ │ │ ├── states.js
│ │ │ └── streets.js
│ │ ├── BR/
│ │ │ ├── citys.js
│ │ │ ├── femailFirstName.js
│ │ │ ├── firstName.js
│ │ │ ├── index.js
│ │ │ ├── lastName.js
│ │ │ ├── maleFirstName.js
│ │ │ ├── states.js
│ │ │ └── streets.js
│ │ ├── CA/
│ │ │ ├── citys.js
│ │ │ ├── femailFirstName.js
│ │ │ ├── firstName.js
│ │ │ ├── index.js
│ │ │ ├── lastName.js
│ │ │ ├── maleFirstName.js
│ │ │ ├── states.js
│ │ │ └── streets.js
│ │ ├── CH/
│ │ │ ├── citys.js
│ │ │ ├── femailFirstName.js
│ │ │ ├── firstName.js
│ │ │ ├── index.js
│ │ │ ├── lastName.js
│ │ │ ├── maleFirstName.js
│ │ │ ├── states.js
│ │ │ └── streets.js
│ │ ├── DE/
│ │ │ ├── citys.js
│ │ │ ├── femailFirstName.js
│ │ │ ├── firstName.js
│ │ │ ├── index.js
│ │ │ ├── lastName.js
│ │ │ ├── maleFirstName.js
│ │ │ ├── states.js
│ │ │ └── streets.js
│ │ ├── DK/
│ │ │ ├── citys.js
│ │ │ ├── femailFirstName.js
│ │ │ ├── firstName.js
│ │ │ ├── index.js
│ │ │ ├── lastName.js
│ │ │ ├── maleFirstName.js
│ │ │ ├── states.js
│ │ │ └── streets.js
│ │ ├── ES/
│ │ │ ├── citys.js
│ │ │ ├── femailFirstName.js
│ │ │ ├── firstName.js
│ │ │ ├── index.js
│ │ │ ├── lastName.js
│ │ │ ├── maleFirstName.js
│ │ │ ├── states.js
│ │ │ └── streets.js
│ │ ├── GB/
│ │ │ ├── citys.js
│ │ │ ├── femailFirstName.js
│ │ │ ├── firstName.js
│ │ │ ├── index.js
│ │ │ ├── lastName.js
│ │ │ ├── maleFirstName.js
│ │ │ ├── states.js
│ │ │ └── streets.js
│ │ ├── IN/
│ │ │ ├── citys.js
│ │ │ ├── femailFirstName.js
│ │ │ ├── firstName.js
│ │ │ ├── index.js
│ │ │ ├── lastName.js
│ │ │ ├── maleFirstName.js
│ │ │ ├── states.js
│ │ │ └── streets.js
│ │ └── US/
│ │ ├── citys.js
│ │ ├── femailFirstName.js
│ │ ├── firstName.js
│ │ ├── index.js
│ │ ├── lastName.js
│ │ ├── maleFirstName.js
│ │ ├── middleName.js
│ │ ├── states.js
│ │ ├── streets.js
│ │ └── timeZone.js
│ ├── routes/
│ │ ├── homePage.routes.js
│ │ └── api/
│ │ ├── v0.1/
│ │ │ ├── index.routes.js
│ │ │ ├── randomImages/
│ │ │ │ └── randomImage.routes.js
│ │ │ └── randomUser/
│ │ │ └── randomUser.router.js
│ │ └── v1.0/
│ │ ├── index.routes.js
│ │ ├── address/
│ │ │ └── address.routes.js
│ │ ├── contry/
│ │ │ └── contry.routes.js
│ │ ├── crypt/
│ │ │ └── crypt.routes.js
│ │ ├── gitHub/
│ │ │ └── github.routes.js
│ │ ├── gravatar/
│ │ │ └── gravatar.routes.js
│ │ ├── saavnCDN/
│ │ │ └── saavnCDN.routes.js
│ │ └── user/
│ │ └── user.routes.js
│ └── utils/
│ ├── asyncHandler.js
│ ├── func/
│ │ ├── address.js
│ │ ├── constants.js
│ │ ├── contryByContryCode.js
│ │ ├── contryInfo.js
│ │ ├── crypt.js
│ │ ├── cryptoUtil.js
│ │ ├── Image.js
│ │ ├── jwt.js
│ │ ├── name.js
│ │ ├── Random.js
│ │ └── timeZoneByContryCode.js
│ └── responce/
│ └── api/
│ ├── error.api.js
│ └── responce.api.js
└── static/
└── assets/

```
