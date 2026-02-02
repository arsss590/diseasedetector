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
  forum: string;
  doctorWorkplace: string;
  adminPanel: string;
  
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
  submit: string;
  close: string;
  back: string;
  next: string;
  previous: string;
  viewAll: string;
  noResults: string;
  confirm: string;
  required: string;
  optional: string;
  
  // Auth
  email: string;
  password: string;
  confirmPassword: string;
  displayName: string;
  createAccount: string;
  alreadyHaveAccount: string;
  dontHaveAccount: string;
  forgotPassword: string;
  welcomeBack: string;
  createYourAccount: string;
  
  // Roles
  user: string;
  doctor: string;
  admin: string;
  verifiedDoctor: string;
  
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
  aiDisclaimer: string;
  
  // Risk Levels
  lowRisk: string;
  mediumRisk: string;
  highRisk: string;
  emergency: string;
  selfMonitoring: string;
  doctorVisitNeeded: string;
  
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
  lowStock: string;
  inStock: string;
  
  // Form Types
  tablet: string;
  capsule: string;
  liquid: string;
  injection: string;
  cream: string;
  drops: string;
  inhaler: string;
  patch: string;
  powder: string;
  
  // Map
  findCare: string;
  nearbyFacilities: string;
  pharmacy: string;
  hospital: string;
  clinic: string;
  getDirections: string;
  openNow: string;
  closed: string;
  distance: string;
  contactInfo: string;
  website: string;
  address: string;
  
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
  doNot: string;
  
  // Disclaimer
  medicalDisclaimer: string;
  disclaimerText: string;
  
  // Language names
  english: string;
  russian: string;
  kazakh: string;
  
  // Forum
  forumTitle: string;
  askCommunity: string;
  newQuestion: string;
  postQuestion: string;
  yourQuestion: string;
  questionTitle: string;
  questionDetails: string;
  selectTags: string;
  markAsUrgent: string;
  replies: string;
  reply: string;
  writeReply: string;
  replyAnonymously: string;
  doctorAnswer: string;
  views: string;
  answered: string;
  open: string;
  flagged: string;
  seekProfessionalHelp: string;
  communityGuidelines: string;
  
  // Doctor Workplace
  clinicalCases: string;
  newCase: string;
  caseDetails: string;
  ageRange: string;
  keySymptoms: string;
  duration: string;
  diagnosticMarkers: string;
  clinicalInsights: string;
  addToCollection: string;
  myCollections: string;
  createCollection: string;
  collectionName: string;
  patternMatching: string;
  similarCases: string;
  aiSuggestions: string;
  privateCase: string;
  
  // Admin Panel
  dashboard: string;
  userManagement: string;
  contentModeration: string;
  analytics: string;
  activityLogs: string;
  totalUsers: string;
  activeToday: string;
  pendingReviews: string;
  flaggedContent: string;
  aggregatedData: string;
  regionBreakdown: string;
  trendingTopics: string;
  
  // Privacy
  privacySettings: string;
  analyticsOptIn: string;
  analyticsDescription: string;
  dataUsageInfo: string;
  
  // Articles
  healthArticles: string;
  readMore: string;
  readTime: string;
  publishedBy: string;
  relatedArticles: string;
  mythOrFact: string;
  didYouKnow: string;
  
  // Notifications
  expirationAlert: string;
  lowStockAlert: string;
  newReply: string;
  
  // Errors
  errorOccurred: string;
  tryAgain: string;
  networkError: string;
  unauthorized: string;
  notFound: string;
  serverError: string;
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
    forum: 'Forum',
    doctorWorkplace: 'Doctor Workplace',
    adminPanel: 'Admin Panel',
    
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
    submit: 'Submit',
    close: 'Close',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    viewAll: 'View All',
    noResults: 'No results found',
    confirm: 'Confirm',
    required: 'Required',
    optional: 'Optional',
    
    // Auth
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    displayName: 'Display Name',
    createAccount: 'Create Account',
    alreadyHaveAccount: 'Already have an account?',
    dontHaveAccount: "Don't have an account?",
    forgotPassword: 'Forgot password?',
    welcomeBack: 'Welcome back',
    createYourAccount: 'Create your account',
    
    // Roles
    user: 'User',
    doctor: 'Doctor',
    admin: 'Administrator',
    verifiedDoctor: 'Verified Doctor',
    
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
    aiDisclaimer: 'AI provides guidance only and does not replace professional medical advice.',
    
    // Risk Levels
    lowRisk: 'Low Risk',
    mediumRisk: 'Medium Risk',
    highRisk: 'High Risk',
    emergency: 'Emergency',
    selfMonitoring: 'Self-Monitoring',
    doctorVisitNeeded: 'Doctor Visit Needed',
    
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
    lowStock: 'Low Stock',
    inStock: 'In Stock',
    
    // Form Types
    tablet: 'Tablet',
    capsule: 'Capsule',
    liquid: 'Liquid',
    injection: 'Injection',
    cream: 'Cream/Ointment',
    drops: 'Drops',
    inhaler: 'Inhaler',
    patch: 'Patch',
    powder: 'Powder',
    
    // Map
    findCare: 'Find Care',
    nearbyFacilities: 'Nearby medical facilities',
    pharmacy: 'Pharmacy',
    hospital: 'Hospital',
    clinic: 'Clinic',
    getDirections: 'Get Directions',
    openNow: 'Open Now',
    closed: 'Closed',
    distance: 'Distance',
    contactInfo: 'Contact Information',
    website: 'Website',
    address: 'Address',
    
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
    doNot: 'What NOT to Do',
    
    // Disclaimer
    medicalDisclaimer: 'Medical Disclaimer',
    disclaimerText: 'This platform provides informational triage guidance and does not replace professional medical diagnosis.',
    
    // Language names
    english: 'English',
    russian: 'Русский',
    kazakh: 'Қазақша',
    
    // Forum
    forumTitle: 'Health Forum',
    askCommunity: 'Ask the Community',
    newQuestion: 'New Question',
    postQuestion: 'Post Question',
    yourQuestion: 'Your Question',
    questionTitle: 'Question Title',
    questionDetails: 'Question Details',
    selectTags: 'Select Tags',
    markAsUrgent: 'Mark as Urgent',
    replies: 'Replies',
    reply: 'Reply',
    writeReply: 'Write a reply...',
    replyAnonymously: 'Reply Anonymously',
    doctorAnswer: 'Doctor\'s Answer',
    views: 'Views',
    answered: 'Answered',
    open: 'Open',
    flagged: 'Flagged',
    seekProfessionalHelp: 'This question may require professional medical attention. Please consult a healthcare provider.',
    communityGuidelines: 'Community Guidelines',
    
    // Doctor Workplace
    clinicalCases: 'Clinical Cases',
    newCase: 'New Case',
    caseDetails: 'Case Details',
    ageRange: 'Age Range',
    keySymptoms: 'Key Symptoms',
    duration: 'Duration',
    diagnosticMarkers: 'Diagnostic Markers',
    clinicalInsights: 'Clinical Insights',
    addToCollection: 'Add to Collection',
    myCollections: 'My Collections',
    createCollection: 'Create Collection',
    collectionName: 'Collection Name',
    patternMatching: 'Pattern Matching',
    similarCases: 'Similar Cases',
    aiSuggestions: 'AI Suggestions',
    privateCase: 'Private Case',
    
    // Admin Panel
    dashboard: 'Dashboard',
    userManagement: 'User Management',
    contentModeration: 'Content Moderation',
    analytics: 'Analytics',
    activityLogs: 'Activity Logs',
    totalUsers: 'Total Users',
    activeToday: 'Active Today',
    pendingReviews: 'Pending Reviews',
    flaggedContent: 'Flagged Content',
    aggregatedData: 'Aggregated Data',
    regionBreakdown: 'Region Breakdown',
    trendingTopics: 'Trending Topics',
    
    // Privacy
    privacySettings: 'Privacy Settings',
    analyticsOptIn: 'Analytics Opt-In',
    analyticsDescription: 'Allow anonymized data collection for health trend analysis',
    dataUsageInfo: 'Your data is anonymized and used only for aggregate trend detection.',
    
    // Articles
    healthArticles: 'Health Articles',
    readMore: 'Read More',
    readTime: 'min read',
    publishedBy: 'Published by',
    relatedArticles: 'Related Articles',
    mythOrFact: 'Health Myth Busted!',
    didYouKnow: 'Did You Know?',
    
    // Notifications
    expirationAlert: 'Medicine expiration alert',
    lowStockAlert: 'Low stock alert',
    newReply: 'New reply to your question',
    
    // Errors
    errorOccurred: 'An error occurred',
    tryAgain: 'Try again',
    networkError: 'Network error. Please check your connection.',
    unauthorized: 'You are not authorized to perform this action.',
    notFound: 'Resource not found',
    serverError: 'Server error. Please try again later.',
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
    forum: 'Форум',
    doctorWorkplace: 'Кабинет врача',
    adminPanel: 'Панель администратора',
    
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
    submit: 'Отправить',
    close: 'Закрыть',
    back: 'Назад',
    next: 'Далее',
    previous: 'Назад',
    viewAll: 'Смотреть все',
    noResults: 'Ничего не найдено',
    confirm: 'Подтвердить',
    required: 'Обязательно',
    optional: 'Необязательно',
    
    // Auth
    email: 'Электронная почта',
    password: 'Пароль',
    confirmPassword: 'Подтвердите пароль',
    displayName: 'Имя пользователя',
    createAccount: 'Создать аккаунт',
    alreadyHaveAccount: 'Уже есть аккаунт?',
    dontHaveAccount: 'Нет аккаунта?',
    forgotPassword: 'Забыли пароль?',
    welcomeBack: 'С возвращением',
    createYourAccount: 'Создайте свой аккаунт',
    
    // Roles
    user: 'Пользователь',
    doctor: 'Врач',
    admin: 'Администратор',
    verifiedDoctor: 'Верифицированный врач',
    
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
    aiDisclaimer: 'ИИ предоставляет только рекомендации и не заменяет профессиональную медицинскую консультацию.',
    
    // Risk Levels
    lowRisk: 'Низкий риск',
    mediumRisk: 'Средний риск',
    highRisk: 'Высокий риск',
    emergency: 'Экстренная ситуация',
    selfMonitoring: 'Самонаблюдение',
    doctorVisitNeeded: 'Требуется визит к врачу',
    
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
    lowStock: 'Мало на складе',
    inStock: 'В наличии',
    
    // Form Types
    tablet: 'Таблетка',
    capsule: 'Капсула',
    liquid: 'Жидкость',
    injection: 'Инъекция',
    cream: 'Крем/Мазь',
    drops: 'Капли',
    inhaler: 'Ингалятор',
    patch: 'Пластырь',
    powder: 'Порошок',
    
    // Map
    findCare: 'Найти помощь',
    nearbyFacilities: 'Ближайшие медучреждения',
    pharmacy: 'Аптека',
    hospital: 'Больница',
    clinic: 'Клиника',
    getDirections: 'Построить маршрут',
    openNow: 'Открыто',
    closed: 'Закрыто',
    distance: 'Расстояние',
    contactInfo: 'Контактная информация',
    website: 'Веб-сайт',
    address: 'Адрес',
    
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
    doNot: 'Чего НЕ делать',
    
    // Disclaimer
    medicalDisclaimer: 'Медицинский отказ от ответственности',
    disclaimerText: 'Эта платформа предоставляет информационную поддержку и не заменяет профессиональную медицинскую диагностику.',
    
    // Language names
    english: 'English',
    russian: 'Русский',
    kazakh: 'Қазақша',
    
    // Forum
    forumTitle: 'Форум здоровья',
    askCommunity: 'Спросить сообщество',
    newQuestion: 'Новый вопрос',
    postQuestion: 'Опубликовать вопрос',
    yourQuestion: 'Ваш вопрос',
    questionTitle: 'Заголовок вопроса',
    questionDetails: 'Детали вопроса',
    selectTags: 'Выберите теги',
    markAsUrgent: 'Отметить как срочный',
    replies: 'Ответы',
    reply: 'Ответить',
    writeReply: 'Написать ответ...',
    replyAnonymously: 'Ответить анонимно',
    doctorAnswer: 'Ответ врача',
    views: 'Просмотры',
    answered: 'Отвечен',
    open: 'Открыт',
    flagged: 'Помечен',
    seekProfessionalHelp: 'Этот вопрос может требовать профессиональной медицинской помощи. Пожалуйста, обратитесь к врачу.',
    communityGuidelines: 'Правила сообщества',
    
    // Doctor Workplace
    clinicalCases: 'Клинические случаи',
    newCase: 'Новый случай',
    caseDetails: 'Детали случая',
    ageRange: 'Возрастной диапазон',
    keySymptoms: 'Ключевые симптомы',
    duration: 'Продолжительность',
    diagnosticMarkers: 'Диагностические маркеры',
    clinicalInsights: 'Клинические наблюдения',
    addToCollection: 'Добавить в коллекцию',
    myCollections: 'Мои коллекции',
    createCollection: 'Создать коллекцию',
    collectionName: 'Название коллекции',
    patternMatching: 'Сопоставление паттернов',
    similarCases: 'Похожие случаи',
    aiSuggestions: 'Предложения ИИ',
    privateCase: 'Приватный случай',
    
    // Admin Panel
    dashboard: 'Панель управления',
    userManagement: 'Управление пользователями',
    contentModeration: 'Модерация контента',
    analytics: 'Аналитика',
    activityLogs: 'Журнал активности',
    totalUsers: 'Всего пользователей',
    activeToday: 'Активных сегодня',
    pendingReviews: 'Ожидают проверки',
    flaggedContent: 'Помеченный контент',
    aggregatedData: 'Агрегированные данные',
    regionBreakdown: 'Разбивка по регионам',
    trendingTopics: 'Трендовые темы',
    
    // Privacy
    privacySettings: 'Настройки конфиденциальности',
    analyticsOptIn: 'Согласие на аналитику',
    analyticsDescription: 'Разрешить сбор анонимных данных для анализа тенденций здоровья',
    dataUsageInfo: 'Ваши данные анонимизируются и используются только для обнаружения общих тенденций.',
    
    // Articles
    healthArticles: 'Статьи о здоровье',
    readMore: 'Читать далее',
    readTime: 'мин чтения',
    publishedBy: 'Опубликовано',
    relatedArticles: 'Связанные статьи',
    mythOrFact: 'Развенчиваем мифы!',
    didYouKnow: 'Знаете ли вы?',
    
    // Notifications
    expirationAlert: 'Истекает срок годности лекарства',
    lowStockAlert: 'Заканчивается запас',
    newReply: 'Новый ответ на ваш вопрос',
    
    // Errors
    errorOccurred: 'Произошла ошибка',
    tryAgain: 'Попробовать снова',
    networkError: 'Ошибка сети. Проверьте подключение.',
    unauthorized: 'У вас нет прав для выполнения этого действия.',
    notFound: 'Ресурс не найден',
    serverError: 'Ошибка сервера. Попробуйте позже.',
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
    forum: 'Форум',
    doctorWorkplace: 'Дәрігер кабинеті',
    adminPanel: 'Әкімші панелі',
    
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
    submit: 'Жіберу',
    close: 'Жабу',
    back: 'Артқа',
    next: 'Келесі',
    previous: 'Алдыңғы',
    viewAll: 'Барлығын көру',
    noResults: 'Нәтиже табылмады',
    confirm: 'Растау',
    required: 'Міндетті',
    optional: 'Міндетті емес',
    
    // Auth
    email: 'Электрондық пошта',
    password: 'Құпия сөз',
    confirmPassword: 'Құпия сөзді растаңыз',
    displayName: 'Көрсетілетін аты',
    createAccount: 'Аккаунт жасау',
    alreadyHaveAccount: 'Аккаунтыңыз бар ма?',
    dontHaveAccount: 'Аккаунтыңыз жоқ па?',
    forgotPassword: 'Құпия сөзді ұмыттыңыз ба?',
    welcomeBack: 'Қайта келгеніңізбен',
    createYourAccount: 'Аккаунтыңызды жасаңыз',
    
    // Roles
    user: 'Пайдаланушы',
    doctor: 'Дәрігер',
    admin: 'Әкімші',
    verifiedDoctor: 'Расталған дәрігер',
    
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
    aiDisclaimer: 'ЖИ тек ұсыныстар береді және кәсіби медициналық кеңесті алмастырмайды.',
    
    // Risk Levels
    lowRisk: 'Төмен тәуекел',
    mediumRisk: 'Орташа тәуекел',
    highRisk: 'Жоғары тәуекел',
    emergency: 'Төтенше жағдай',
    selfMonitoring: 'Өзін-өзі бақылау',
    doctorVisitNeeded: 'Дәрігерге бару қажет',
    
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
    lowStock: 'Қалдық аз',
    inStock: 'Қоймада бар',
    
    // Form Types
    tablet: 'Таблетка',
    capsule: 'Капсула',
    liquid: 'Сұйықтық',
    injection: 'Инъекция',
    cream: 'Крем/Жақпа май',
    drops: 'Тамшылар',
    inhaler: 'Ингалятор',
    patch: 'Пластырь',
    powder: 'Ұнтақ',
    
    // Map
    findCare: 'Көмек табу',
    nearbyFacilities: 'Жақын медициналық мекемелер',
    pharmacy: 'Дәріхана',
    hospital: 'Аурухана',
    clinic: 'Клиника',
    getDirections: 'Бағыт салу',
    openNow: 'Қазір ашық',
    closed: 'Жабық',
    distance: 'Қашықтық',
    contactInfo: 'Байланыс ақпараты',
    website: 'Веб-сайт',
    address: 'Мекенжай',
    
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
    doNot: 'Не істемеу керек',
    
    // Disclaimer
    medicalDisclaimer: 'Медициналық ескерту',
    disclaimerText: 'Бұл платформа ақпараттық қолдау көрсетеді және кәсіби медициналық диагностиканы алмастырмайды.',
    
    // Language names
    english: 'English',
    russian: 'Русский',
    kazakh: 'Қазақша',
    
    // Forum
    forumTitle: 'Денсаулық форумы',
    askCommunity: 'Қоғамдастықтан сұрау',
    newQuestion: 'Жаңа сұрақ',
    postQuestion: 'Сұрақ жариялау',
    yourQuestion: 'Сіздің сұрағыңыз',
    questionTitle: 'Сұрақ тақырыбы',
    questionDetails: 'Сұрақ мәліметтері',
    selectTags: 'Тегтерді таңдаңыз',
    markAsUrgent: 'Шұғыл деп белгілеу',
    replies: 'Жауаптар',
    reply: 'Жауап беру',
    writeReply: 'Жауап жазу...',
    replyAnonymously: 'Жасырын жауап беру',
    doctorAnswer: 'Дәрігер жауабы',
    views: 'Қаралымдар',
    answered: 'Жауап берілді',
    open: 'Ашық',
    flagged: 'Белгіленген',
    seekProfessionalHelp: 'Бұл сұрақ кәсіби медициналық көмекті қажет етуі мүмкін. Дәрігерге хабарласыңыз.',
    communityGuidelines: 'Қоғамдастық ережелері',
    
    // Doctor Workplace
    clinicalCases: 'Клиникалық жағдайлар',
    newCase: 'Жаңа жағдай',
    caseDetails: 'Жағдай мәліметтері',
    ageRange: 'Жас аралығы',
    keySymptoms: 'Негізгі симптомдар',
    duration: 'Ұзақтығы',
    diagnosticMarkers: 'Диагностикалық маркерлер',
    clinicalInsights: 'Клиникалық түсініктер',
    addToCollection: 'Жинаққа қосу',
    myCollections: 'Менің жинақтарым',
    createCollection: 'Жинақ жасау',
    collectionName: 'Жинақ атауы',
    patternMatching: 'Үлгі сәйкестігі',
    similarCases: 'Ұқсас жағдайлар',
    aiSuggestions: 'ЖИ ұсыныстары',
    privateCase: 'Жеке жағдай',
    
    // Admin Panel
    dashboard: 'Басқару панелі',
    userManagement: 'Пайдаланушыларды басқару',
    contentModeration: 'Мазмұнды модерациялау',
    analytics: 'Аналитика',
    activityLogs: 'Белсенділік журналы',
    totalUsers: 'Барлық пайдаланушылар',
    activeToday: 'Бүгін белсенді',
    pendingReviews: 'Тексеруді күтуде',
    flaggedContent: 'Белгіленген мазмұн',
    aggregatedData: 'Жиынтық деректер',
    regionBreakdown: 'Аймақтық бөлу',
    trendingTopics: 'Трендтегі тақырыптар',
    
    // Privacy
    privacySettings: 'Құпиялылық параметрлері',
    analyticsOptIn: 'Аналитикаға келісім',
    analyticsDescription: 'Денсаулық үрдістерін талдау үшін анонимді деректерді жинауға рұқсат беру',
    dataUsageInfo: 'Сіздің деректеріңіз анонимделеді және тек жалпы үрдістерді анықтау үшін пайдаланылады.',
    
    // Articles
    healthArticles: 'Денсаулық мақалалары',
    readMore: 'Толығырақ оқу',
    readTime: 'мин оқу',
    publishedBy: 'Жариялаған',
    relatedArticles: 'Байланысты мақалалар',
    mythOrFact: 'Мифтерді жоққа шығару!',
    didYouKnow: 'Сіз білесіз бе?',
    
    // Notifications
    expirationAlert: 'Дәрінің мерзімі аяқталуда',
    lowStockAlert: 'Қор аяқталуда',
    newReply: 'Сұрағыңызға жаңа жауап',
    
    // Errors
    errorOccurred: 'Қате орын алды',
    tryAgain: 'Қайта байқап көріңіз',
    networkError: 'Желі қатесі. Байланысты тексеріңіз.',
    unauthorized: 'Сізде бұл әрекетті орындауға құқық жоқ.',
    notFound: 'Ресурс табылмады',
    serverError: 'Сервер қатесі. Кейінірек қайталап көріңіз.',
  },
};

export const getTranslation = (lang: Language) => translations[lang];

export const languageNames: Record<Language, string> = {
  en: 'English',
  ru: 'Русский',
  kk: 'Қазақша',
};
