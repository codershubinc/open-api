
# CodersHub Inc. Open API Server  

Welcome to the **CodersHub Inc. Open API Server** repository! This document provides an overview of the directory structure to help you navigate the codebase and contribute effectively.  

## Directory Structure  

```  
codershubinc-open-api.git/  
├── index.js  
├── package.json  
├── vercel.json  
├── src/  
│   ├── controllers/  
│   │   ├── api/  
│   │   │   ├── v0.1/  
│   │   │   │   ├── data.js  
│   │   │   │   ├── randomImage/  
│   │   │   │   │   └── randomImages.controller.js  
│   │   │   │   └── randomUser/  
│   │   │   │       └── randomUser.controller.js  
│   │   │   └── v1.0/  
│   │   │       ├── address/  
│   │   │       │   └── address.controller.js  
│   │   │       ├── countryInfo/  
│   │   │       │   └── country.controller.js  
│   │   │       ├── gitHub/  
│   │   │       │   ├── commonFuncs.js  
│   │   │       │   └── getUser.controller.js  
│   │   │       ├── gravatar/  
│   │   │       │   └── gravatar.controller.js  
│   │   │       ├── saavnCDN/  
│   │   │       │   ├── saavnCDN.controller.js  
│   │   │       │   └── search/  
│   │   │       │       └── saavnCDN.search.controller.js  
│   │   │       └── user/  
│   │   │           └── user.controller.js  
│   │   └── homePageApi/  
│   │       └── homePageApi.controller.js  
│   ├── lib/  
│   │   └── data/  
│   │       ├── userData.js  
│   │       ├── userData0.js  
│   │       ├── userData1.js  
│   │       ├── userData2.js  
│   │       └── api/  
│   │           └── v1.0/  
│   │               ├── common/  
│   │               │   └── hobbies.js  
│   │               └── country/  
│   │                   ├── allCountryCodes.js  
│   │                   └── [Country-Specific Data Files]  
│   ├── routes/  
│   │   ├── homePage.routes.js  
│   │   └── api/  
│   │       ├── v0.1/  
│   │       │   ├── index.routes.js  
│   │       │   └── randomImages/  
│   │       │       └── randomImage.routes.js  
│   │       └── v1.0/  
│   │           ├── index.routes.js  
│   │           └── [API-Specific Routes]  
│   └── utils/  
│       ├── asyncHandler.js  
│       ├── func/  
│       │   └── [Utility Functions]  
│       └── response/  
│           └── api/  
│               ├── error.api.js  
│               └── response.api.js  
```  

## Key Directories  

### `controllers/`  
Contains logic for handling API requests. Organized by API version (`v0.1`, `v1.0`).  

### `routes/`  
Defines the API endpoints and maps them to their respective controllers.  

### `lib/`  
Holds reusable data modules, such as user data and country-specific information.  

### `utils/`  
Includes utility functions for error handling, cryptography, and other shared functionalities.  

### `src/`  
Main source code directory. All core components of the API reside here.  

## Contribution Guidelines  

- **Follow Naming Conventions:** Ensure files and folders are named descriptively and consistently.  
- **Document New Features:** Update this README when adding new directories or significant changes.  
- **Test Your Code:** Add unit tests for new functionality in the `tests/` directory.  
- **Keep It Modular:** Avoid adding large functions to controllers or routes. Use `utils/` or `lib/` for shared logic.  

If you have questions, feel free to reach out to the maintainers!  
