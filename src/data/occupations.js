// 職業卡列表
// 每個職業包含以下資訊：
// name_zh - 職業名稱（中文）
// name_en - 職業名稱（英文）
// star_level - 星等（1~3）
// work_income - 工作收入
// initial_expenditure - 生活總開銷
// expenditure_per_child - 每生一個小孩所增加支出
// initial_savings - 起始儲蓄
// is_special - 是特殊職業卡（有角色技能）

export default [
  {
    name_zh: '行政人員',
    name_en: 'Administrative Staff',
    star_level: 1,
    work_income: 22000,
    initial_expenditure: 17000,
    expenditure_per_child: 7000,
    initial_savings: 300000,
    is_special: false,
    meta: {
      icon_type: 'fa',
      icon: 'paste',
    },
  },
  {
    name_zh: '廚師',
    name_en: 'Chef',
    star_level: 2,
    work_income: 38000,
    initial_expenditure: 27000,
    expenditure_per_child: 10000,
    initial_savings: 660000,
    is_special: false,
    meta: {
      icon_type: 'fa',
      icon: 'hat-chef',
    },
  },
  {
    name_zh: '公務員',
    name_en: 'Civil Servant',
    star_level: 2,
    work_income: 43000,
    initial_expenditure: 32000,
    expenditure_per_child: 10000,
    initial_savings: 660000,
    is_special: false,
    meta: {
      icon_type: 'fa',
      icon: 'glasses',
    },
  },
  {
    name_zh: '設計師',
    name_en: 'Designer',
    star_level: 2,
    work_income: 33000,
    initial_expenditure: 24500,
    expenditure_per_child: 10000,
    initial_savings: 510000,
    is_special: false,
    meta: {
      icon_type: 'fa',
      icon: 'palette',
    },
  },
  {
    name_zh: '醫生',
    name_en: 'Doctor',
    star_level: 3,
    work_income: 150000,
    initial_expenditure: 99000,
    expenditure_per_child: 15000,
    initial_savings: 3060000,
    is_special: false,
    meta: {
      icon_type: 'fa',
      icon: 'stethoscope',
    },
  },
  {
    name_zh: '工程師',
    name_en: 'Engineer',
    star_level: 3,
    work_income: 100000,
    initial_expenditure: 66000,
    expenditure_per_child: 15000,
    initial_savings: 2040000,
    is_special: false,
    meta: {
      icon_type: 'fa',
      icon: 'laptop-code',
    },
  },
  {
    name_zh: '護理師',
    name_en: 'Nurse',
    star_level: 2,
    work_income: 45000,
    initial_expenditure: 34000,
    expenditure_per_child: 10000,
    initial_savings: 660000,
    is_special: false,
    meta: {
      icon_type: 'fa',
      icon: 'user-nurse',
    },
  },
  {
    name_zh: '水電工',
    name_en: 'Plumber',
    star_level: 2,
    work_income: 65000,
    initial_expenditure: 39000,
    expenditure_per_child: 10000,
    initial_savings: 1560000,
    is_special: false,
    meta: {
      icon_type: 'fa',
      icon: 'wrench',
    },
  },
  {
    name_zh: '保全人員',
    name_en: 'Security Personnel',
    star_level: 1,
    work_income: 28000,
    initial_expenditure: 21000,
    expenditure_per_child: 7000,
    initial_savings: 420000,
    is_special: false,
    meta: {
      icon_type: 'fa',
      icon: 'walkie-talkie',
    },
  },
  {
    name_zh: '老師',
    name_en: 'Teacher',
    star_level: 2,
    work_income: 50000,
    initial_expenditure: 36000,
    expenditure_per_child: 10000,
    initial_savings: 840000,
    is_special: false,
    meta: {
      icon_type: 'fa',
      icon: 'chalkboard-teacher',
    },
  },
  // 特殊角色
  {
    name_zh: '富二代',
    name_en: 'Fuerdai',
    star_level: 3,
    work_income: 70000,
    initial_expenditure: 63000,
    expenditure_per_child: 15000,
    initial_savings: 420000,
    is_special: true,
    meta: {
      icon_type: 'fa',
      icon: 'coins',
    },
  },
  {
    name_zh: '證券營業員',
    name_en: 'Stock Broker',
    star_level: 2,
    work_income: 40000,
    initial_expenditure: 27000,
    expenditure_per_child: 10000,
    initial_savings: 780000,
    is_special: true,
    meta: {
      icon_type: 'fa',
      icon: 'chart-bar',
    },
  },
  {
    name_zh: '保險業務員',
    name_en: 'Insurance Agent',
    star_level: 2,
    work_income: 30000,
    initial_expenditure: 21000,
    expenditure_per_child: 10000,
    initial_savings: 540000,
    is_special: true,
    meta: {
      icon_type: 'fa',
      icon: 'piggy-bank',
    },
  },
  {
    name_zh: '房屋仲介',
    name_en: 'Property Agent',
    star_level: 2,
    work_income: 55000,
    initial_expenditure: 39000,
    expenditure_per_child: 10000,
    initial_savings: 960000,
    is_special: true,
    meta: {
      icon_type: 'fa',
      icon: 'home',
    },
  },
];
