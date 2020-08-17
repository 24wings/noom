export let logind = {
  result: {
    user: {
      name: 'admin3',
      surname: 'admin',
      userName: 'admin',
      emailAddress: 'admin@aspnetzero.com',
      profilePictureId: null,
      id: 8,
    },
    tenant: null,
    application: {
      version: '8.1.0.0',
      releaseDate: '2020-06-25T23:33:23+08:00',
      currency: 'USD',
      currencySign: '$',
      allowTenantsToChangeEmailSettings: false,
      features: {},
    },
    theme: {
      baseSettings: {
        theme: 'default',
        layout: { layoutType: 'fluid' },
        header: {
          desktopFixedHeader: true,
          mobileFixedHeader: false,
          headerSkin: 'light',
          minimizeDesktopHeaderType: null,
          headerMenuArrows: false,
        },
        subHeader: { fixedSubHeader: true, subHeaderStyle: 'solid' },
        menu: {
          position: 'left',
          asideSkin: 'light',
          fixedAside: true,
          allowAsideMinimizing: true,
          defaultMinimizedAside: false,
          submenuToggle: 'false',
          searchActive: false,
        },
        footer: { fixedFooter: false },
      },
      isLeftMenuUsed: true,
      isTopMenuUsed: false,
      isTabMenuUsed: false,
      allowMenuScroll: true,
    },
  },
  targetUrl: null,
  success: true,
  error: null,
  unAuthorizedRequest: false,
  __abp: true,
};