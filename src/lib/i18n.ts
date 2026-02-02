export type Language = 'en' | 'ru' | 'kk';

export interface Translations {
  // Navigation
  home: string;
  aiConsultant: string;
  medicineCabinet: string;
  map: string;
  firstAid: string;
  symptomTracker: string;
  articles: string;
  about: string;
  signIn: string;
  signUp: string;
  signOut: string;
  
  // Common
  search: string;
  save: string;
  cancel: string;
  delete: string;
  edit: string;
  add: string;
  loading: string;
  error: string;
  success: string;
  
  // Auth
  email: string;
  password: string;
  confirmPassword: string;
  displayName: string;
  createAccount: string;
  alreadyHaveAccount: string;
  dontHaveAccount: string;
  forgotPassword: string;
  
  // AI Consultant
  askQuestion: string;
  typeSymptoms: string;
  voiceInput: string;
  uploadImage: string;
  analyzing: string;
  riskLevel: string;
  possibleConditions: string;
  recommendations: string;
  whenToSeeDoctor: string;
  
  // Risk Levels
  lowRisk: string;
  mediumRisk: string;
  highRisk: string;
  emergency: string;
  
  // Medicine Cabinet
  addMedicine: string;
  medicineName: string;
  purpose: string;
  dosage: string;
  quantity: string;
  expirationDate: string;
  expired: string;
  expiringSoon: string;
  findPharmacy: string;
  formType: string;
  tags: string;
  notes: string;
  
  // Form Types
  tablet: string;
  capsule: string;
  liquid: string;
  injection: string;
  cream: string;
  drops: string;
  inhaler: string;
  patch: string;
  
  // Map
  findCare: string;
  nearbyFacilities: string;
  pharmacy: string;
  hospital: string;
  clinic: string;
  getDirections: string;
  openNow: string;
  closed: string;
  
  // Symptom Tracker
  logSymptoms: string;
  severity: string;
  mood: string;
  sleepHours: string;
  symptoms: string;
  trends: string;
  improving: string;
  worsening: string;
  stable: string;
  
  // First Aid
  firstAidGuide: string;
  emergencyProcedures: string;
  stepByStep: string;
  callEmergency: string;
  
  // Disclaimer
  medicalDisclaimer: string;
  disclaimerText: string;
  
  // Language names
  english: string;
  russian: string;
  kazakh: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    home: 'Home',
    aiConsultant: 'AI Consultant',
    medicineCabinet: 'Medicine Cabinet',
    map: 'Find Care',
    firstAid: 'First Aid',
    symptomTracker: 'Symptom Tracker',
    articles: 'Health Articles',
    about: 'About',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    signOut: 'Sign Out',
    
    // Common
    search: 'Search',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    
    // Auth
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    displayName: 'Display Name',
    createAccount: 'Create Account',
    alreadyHaveAccount: 'Already have an account?',
    dontHaveAccount: "Don't have an account?",
    forgotPassword: 'Forgot password?',
    
    // AI Consultant
    askQuestion: 'Ask a question',
    typeSymptoms: 'Describe your symptoms...',
    voiceInput: 'Voice Input',
    uploadImage: 'Upload Image',
    analyzing: 'Analyzing...',
    riskLevel: 'Risk Level',
    possibleConditions: 'Possible Conditions',
    recommendations: 'Recommendations',
    whenToSeeDoctor: 'When to See a Doctor',
    
    // Risk Levels
    lowRisk: 'Low Risk',
    mediumRisk: 'Medium Risk',
    highRisk: 'High Risk',
    emergency: 'Emergency',
    
    // Medicine Cabinet
    addMedicine: 'Add Medicine',
    medicineName: 'Medicine Name',
    purpose: 'Purpose / Symptoms',
    dosage: 'Dosage Instructions',
    quantity: 'Quantity',
    expirationDate: 'Expiration Date',
    expired: 'Expired',
    expiringSoon: 'Expiring Soon',
    findPharmacy: 'Find Nearby Pharmacies',
    formType: 'Form Type',
    tags: 'Tags',
    notes: 'Notes / Warnings',
    
    // Form Types
    tablet: 'Tablet',
    capsule: 'Capsule',
    liquid: 'Liquid',
    injection: 'Injection',
    cream: 'Cream/Ointment',
    drops: 'Drops',
    inhaler: 'Inhaler',
    patch: 'Patch',
    
    // Map
    findCare: 'Find Care',
    nearbyFacilities: 'Nearby medical facilities',
    pharmacy: 'Pharmacy',
    hospital: 'Hospital',
    clinic: 'Clinic',
    getDirections: 'Get Directions',
    openNow: 'Open Now',
    closed: 'Closed',
    
    // Symptom Tracker
    logSymptoms: 'Log Symptoms',
    severity: 'Severity',
    mood: 'Mood',
    sleepHours: 'Hours of Sleep',
    symptoms: 'Symptoms',
    trends: 'Trends',
    improving: 'Improving',
    worsening: 'Worsening',
    stable: 'Stable',
    
    // First Aid
    firstAidGuide: 'First Aid Guide',
    emergencyProcedures: 'Emergency Procedures',
    stepByStep: 'Step-by-step instructions',
    callEmergency: 'Call Emergency Services',
    
    // Disclaimer
    medicalDisclaimer: 'Medical Disclaimer',
    disclaimerText: 'This platform provides informational triage guidance and does not replace professional medical diagnosis.',
    
    // Language names
    english: 'English',
    russian: 'Русский',
    kazakh: 'Қазақша',
  },
  
  ru: {
    // Navigation
    home: 'Главная',
    aiConsultant: 'ИИ Консультант',
    medicineCabinet: 'Аптечка',
    map: 'Найти помощь',
    firstAid: 'Первая помощь',
    symptomTracker: 'Дневник симптомов',
    articles: 'Статьи о здоровье',
    about: 'О нас',
    signIn: 'Войти',
    signUp: 'Регистрация',
    signOut: 'Выйти',
    
    // Common
    search: 'Поиск',
    save: 'Сохранить',
    cancel: 'Отмена',
    delete: 'Удалить',
    edit: 'Редактировать',
    add: 'Добавить',
    loading: 'Загрузка...',
    error: 'Ошибка',
    success: 'Успешно',
    
    // Auth
    email: 'Электронная почта',
    password: 'Пароль',
    confirmPassword: 'Подтвердите пароль',
    displayName: 'Имя пользователя',
    createAccount: 'Создать аккаунт',
    alreadyHaveAccount: 'Уже есть аккаунт?',
    dontHaveAccount: 'Нет аккаунта?',
    forgotPassword: 'Забыли пароль?',
    
    // AI Consultant
    askQuestion: 'Задать вопрос',
    typeSymptoms: 'Опишите ваши симптомы...',
    voiceInput: 'Голосовой ввод',
    uploadImage: 'Загрузить фото',
    analyzing: 'Анализирую...',
    riskLevel: 'Уровень риска',
    possibleConditions: 'Возможные состояния',
    recommendations: 'Рекомендации',
    whenToSeeDoctor: 'Когда обратиться к врачу',
    
    // Risk Levels
    lowRisk: 'Низкий риск',
    mediumRisk: 'Средний риск',
    highRisk: 'Высокий риск',
    emergency: 'Экстренная ситуация',
    
    // Medicine Cabinet
    addMedicine: 'Добавить лекарство',
    medicineName: 'Название лекарства',
    purpose: 'Назначение / Симптомы',
    dosage: 'Инструкция по дозировке',
    quantity: 'Количество',
    expirationDate: 'Срок годности',
    expired: 'Истёк срок годности',
    expiringSoon: 'Скоро истечёт',
    findPharmacy: 'Найти ближайшие аптеки',
    formType: 'Форма выпуска',
    tags: 'Теги',
    notes: 'Заметки / Предупреждения',
    
    // Form Types
    tablet: 'Таблетка',
    capsule: 'Капсула',
    liquid: 'Жидкость',
    injection: 'Инъекция',
    cream: 'Крем/Мазь',
    drops: 'Капли',
    inhaler: 'Ингалятор',
    patch: 'Пластырь',
    
    // Map
    findCare: 'Найти помощь',
    nearbyFacilities: 'Ближайшие медучреждения',
    pharmacy: 'Аптека',
    hospital: 'Больница',
    clinic: 'Клиника',
    getDirections: 'Построить маршрут',
    openNow: 'Открыто',
    closed: 'Закрыто',
    
    // Symptom Tracker
    logSymptoms: 'Записать симптомы',
    severity: 'Тяжесть',
    mood: 'Настроение',
    sleepHours: 'Часы сна',
    symptoms: 'Симптомы',
    trends: 'Тенденции',
    improving: 'Улучшение',
    worsening: 'Ухудшение',
    stable: 'Стабильно',
    
    // First Aid
    firstAidGuide: 'Справочник первой помощи',
    emergencyProcedures: 'Экстренные процедуры',
    stepByStep: 'Пошаговые инструкции',
    callEmergency: 'Вызвать скорую помощь',
    
    // Disclaimer
    medicalDisclaimer: 'Медицинский отказ от ответственности',
    disclaimerText: 'Эта платформа предоставляет информационную поддержку и не заменяет профессиональную медицинскую диагностику.',
    
    // Language names
    english: 'English',
    russian: 'Русский',
    kazakh: 'Қазақша',
  },
  
  kk: {
    // Navigation
    home: 'Басты бет',
    aiConsultant: 'ЖИ Кеңесші',
    medicineCabinet: 'Дәрі қорабы',
    map: 'Көмек табу',
    firstAid: 'Алғашқы көмек',
    symptomTracker: 'Симптом журналы',
    articles: 'Денсаулық мақалалары',
    about: 'Біз туралы',
    signIn: 'Кіру',
    signUp: 'Тіркелу',
    signOut: 'Шығу',
    
    // Common
    search: 'Іздеу',
    save: 'Сақтау',
    cancel: 'Бас тарту',
    delete: 'Жою',
    edit: 'Өңдеу',
    add: 'Қосу',
    loading: 'Жүктелуде...',
    error: 'Қате',
    success: 'Сәтті',
    
    // Auth
    email: 'Электрондық пошта',
    password: 'Құпия сөз',
    confirmPassword: 'Құпия сөзді растаңыз',
    displayName: 'Көрсетілетін аты',
    createAccount: 'Аккаунт жасау',
    alreadyHaveAccount: 'Аккаунтыңыз бар ма?',
    dontHaveAccount: 'Аккаунтыңыз жоқ па?',
    forgotPassword: 'Құпия сөзді ұмыттыңыз ба?',
    
    // AI Consultant
    askQuestion: 'Сұрақ қою',
    typeSymptoms: 'Симптомдарыңызды сипаттаңыз...',
    voiceInput: 'Дауыспен енгізу',
    uploadImage: 'Сурет жүктеу',
    analyzing: 'Талдау...',
    riskLevel: 'Тәуекел деңгейі',
    possibleConditions: 'Мүмкін жағдайлар',
    recommendations: 'Ұсыныстар',
    whenToSeeDoctor: 'Дәрігерге қашан бару керек',
    
    // Risk Levels
    lowRisk: 'Төмен тәуекел',
    mediumRisk: 'Орташа тәуекел',
    highRisk: 'Жоғары тәуекел',
    emergency: 'Төтенше жағдай',
    
    // Medicine Cabinet
    addMedicine: 'Дәрі қосу',
    medicineName: 'Дәрі атауы',
    purpose: 'Мақсаты / Симптомдар',
    dosage: 'Дозалау нұсқаулары',
    quantity: 'Саны',
    expirationDate: 'Жарамдылық мерзімі',
    expired: 'Мерзімі өткен',
    expiringSoon: 'Мерзімі аяқталуда',
    findPharmacy: 'Жақын дәріханаларды табу',
    formType: 'Шығарылу түрі',
    tags: 'Тегтер',
    notes: 'Ескертулер',
    
    // Form Types
    tablet: 'Таблетка',
    capsule: 'Капсула',
    liquid: 'Сұйықтық',
    injection: 'Инъекция',
    cream: 'Крем/Жақпа май',
    drops: 'Тамшылар',
    inhaler: 'Ингалятор',
    patch: 'Пластырь',
    
    // Map
    findCare: 'Көмек табу',
    nearbyFacilities: 'Жақын медициналық мекемелер',
    pharmacy: 'Дәріхана',
    hospital: 'Аурухана',
    clinic: 'Клиника',
    getDirections: 'Бағыт салу',
    openNow: 'Қазір ашық',
    closed: 'Жабық',
    
    // Symptom Tracker
    logSymptoms: 'Симптомдарды жазу',
    severity: 'Ауырлық',
    mood: 'Көңіл-күй',
    sleepHours: 'Ұйқы сағаттары',
    symptoms: 'Симптомдар',
    trends: 'Үрдістер',
    improving: 'Жақсаруда',
    worsening: 'Нашарлауда',
    stable: 'Тұрақты',
    
    // First Aid
    firstAidGuide: 'Алғашқы көмек нұсқаулығы',
    emergencyProcedures: 'Төтенше жағдай процедуралары',
    stepByStep: 'Қадамдық нұсқаулар',
    callEmergency: 'Жедел жәрдем шақыру',
    
    // Disclaimer
    medicalDisclaimer: 'Медициналық ескерту',
    disclaimerText: 'Бұл платформа ақпараттық қолдау көрсетеді және кәсіби медициналық диагностиканы алмастырмайды.',
    
    // Language names
    english: 'English',
    russian: 'Русский',
    kazakh: 'Қазақша',
  },
};

export const getTranslation = (lang: Language) => translations[lang];

export const languageNames: Record<Language, string> = {
  en: 'English',
  ru: 'Русский',
  kk: 'Қазақша',
};
