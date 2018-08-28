export const adminLteConf = {
  skin: 'blue',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    {label: '고급과정', iconClasses: 'fa fa-th-list', children: [
      {label: '입력처리', route: 'advanced/aginput'},
      {label: '탭', route: 'advanced/agtap'},
      {label: '모달', route: 'advanced/agmodal'},
      {label: '매스크', route: 'advanced/agmask'},
      {label: '애니메이션' , route: 'advanced/animations'}
      ]},

    {label: 'Layout', iconClasses: 'fa fa-th-list', children: [
        {label: 'Configuration', route: 'layout/configuration'},
      ]},
  ]
};
