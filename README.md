# React 01-stock-app

## `Kurulum`

```
yarn
yarn create react-app folder-name
```

## Project Skeleton Example

```
Milestone Blog App (folder for context)
|       # Given to the students (Definition of the project)
SOLUTION
├── src
│    ├── index.js
│    ├── App.js
│    ├── index.css
│    ├── app
│    │   └── Store.jsx
│    ├── assets
│    │   └── loagin.gif
│    │   └── loaginImage.png
│    │   └── loginNewCar.png
│    │   └── loginOldCar.png
│    │   └── loginTitle
│    │   └── result.svg
│    ├── components
│    │   │   ├── BrandCard.jsx
│    │   │   ├── brandModal.jsx
│    │   │   ├── DashboardList.jsx
│    │   │   ├── FinancalIndicator.jsx
│    │   │   ├── FirmCard.jsx
│    │   │   ├── FirmModal.jsx
│    │   │   ├── productList.jsx
│    │   │   ├── ProductsModal.jsx
│    │   │   ├── PurchasesModal.jsx
│    │   │   ├── PurchasesTable.jsx
│    │   │   ├── RegisterForm.jsx
│    │   │   ├── salesModal.jsx
│    │   │   └── salesTable.jsx
│    ├── feature
│    │   ├── authSlice.jsx
│    │   └── stockSlice.jsx
│    ├── helper
│    │   └── ToastNotify.jsx
│    ├── pages
│    │   ├── Brands.jsx
│    │   ├── Dashboard.jsx
│    │   ├── Firms.jsx
│    │   ├── Home.jsx
│    │   ├── Login.jsx
│    │   ├── Products.jsx
│    │   ├── Profile.jsx
│    │   ├── Purchases.jsx
│    │   ├── Register.jsx
│    │   └── Sales.jsx
│    ├── router
│    │   ├── AppRouter.jsx
│    │   └── PrivateRouter.jsx
│    ├── service
│    │   ├── useAuthRequest.jsx
│    │   ├── useStockRequest.jsx
│    │   └── useAxios.jsx
│    └── styles
│    │   ├── login.css
│        └── globalStyles.jsx
```

## `Kullanilan Kutuphaneler`

- `@reduxjs/toolkit`
- `react-redux`
- `axios`
- `react-router-dom`
- `@mui/material-ui`
- `@emotion/react`
- `@emotion/styled`
- `@mui/icons-material`
- `react-toastify`
- `formik`
- `yup`

## `Kullanilacak Araclar`

- `Redux Dev Tools` : Chrome uzerinde calisan ve global state uzerinde yapilan tum degisikliklerin takip edilmesini saglayan tarayici uzantisidir. Indirmek icin [tiklayiniz.](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?utm_source=chrome-ntp-icon)`

## Uygulamanın Canlı Ornegi:

https://stock-app-postclass.vercel.app/