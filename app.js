(function () {
  const contact1 = "@hxxhaa";
  const allowedHost = "jxstab1.github.io";
  const allowedPath = "OJ!DBWjb1BNsbi!9237.html";
  if (window.location.hostname !== allowedHost && window.location.pathname.indexOf(allowedPath) === -1) {
    console.warn("THEFT DETECTED. REPORT TO " + contact1);
    document.documentElement.innerHTML = "<div style=\"background:#000;color:red;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:monospace;text-align:center;padding:20px;\"><h1 style=\"font-size:50px;\">🚨 COPY DETECTED 🚨</h1><h2>ЭТОТ САЙТ БЫЛ УКРАДЕН У JXTEC</h2><p>Скрипт защиты обнаружил запуск на чужом домене или с неверным именем файла.</p><h3>Оригинал и поддержка: <br><a href=\"https://t.me/jxtec\" style=\"color:#0f0;font-size:30px;text-decoration:none;\">@jxtec</a></h3><h4>Add your phone here: <a href=\"https://t.me/hxxhaa\" style=\"color:#0f0;\">@hxxhaa</a></h4></div>";
    throw new Error("Site stolen from " + contact1);
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const phonesData = {
    Iphone8: { image: "phones/Iphone8.png", stabilizationPoint: { x: "34.38%", y: "12.64%" }, specs: { processor: "A11 Bionic", camera: "12MP Wide" } },
    RealmeP3: { image: "phones/RealmeP3.png", stabilizationPoint: { x: "38.00%", y: "20.00%" }, specs: { processor: "Snapdragon 6 Gen 1", camera: "50MP Sony" } },
    "RedmiNote14Pro+": { image: "phones/RedmiNote14Pro+.png", stabilizationPoint: { x: "39.50%", y: "18.50%" }, specs: { processor: "Dimensity 7350", camera: "200MP OIS" } },
    Pixel9A: { image: "phones/Pixel9A.png", stabilizationPoint: { x: "35.00%", y: "16.00%" }, specs: { processor: "Tensor G4", camera: "64MP AI" } },
    Redmi15C: { image: "phones/Redmi15C.png", stabilizationPoint: { x: "37.00%", y: "19.00%" }, specs: { processor: "Helio G85", camera: "50MP AI" } },
    IqooZ9: { image: "phones/IqooZ9.png", stabilizationPoint: { x: "41.00%", y: "15.00%" }, specs: { processor: "Dimensity 7200", camera: "50MP Sony IMX" } },
    InfinixHot30I: { image: "phones/InfinixHot30I.png", stabilizationPoint: { x: "43.30%", y: "23.70%" }, specs: { processor: "Unisoc T606", camera: "13MP Dual AI" } },
    Iphone13PM: { image: "phones/Iphone13PM.png", stabilizationPoint: { x: "37.28%", y: "26.39%" }, specs: { processor: "A15 Bionic", camera: "12MP Pro System" } },
    "HONOR LLY-LX2": { image: "phones/HONOR LLY-LX2.png", stabilizationPoint: { x: "36.61%", y: "12.27%" }, specs: { processor: "Snapdragon 6 Gen 1", camera: "108MP Matrix" } },
    RedmiNote10Pro: { image: "phones/RedmiNote10Pro.png", stabilizationPoint: { x: "37.97%", y: "11.50%" }, specs: { processor: "Snapdragon 732G", camera: "108MP Wide" } },
    SamsungA32: { image: "phones/SamsungA32.png", stabilizationPoint: { x: "34.67%", y: "18.66%" }, specs: { processor: "Helio G80", camera: "64MP Quad" } },
    Iphone16ProMax: { image: "phones/Iphone16ProMax.png", stabilizationPoint: { x: "50.00%", y: "20.00%" }, specs: { processor: "A18 Pro", camera: "48MP Fusion" } },
    IIIF150H2022: { image: "phones/IIIF150H2022.png", stabilizationPoint: { x: "35.51%", y: "19.20%" }, specs: { processor: "Helio G95", camera: "20MP Night Vision" } },
    SamsungS21FE: { image: "phones/SamsungS21FE.png", stabilizationPoint: { x: "31.54%", y: "19.61%" }, specs: { processor: "Snapdragon 888", camera: "12MP Pro-Grade" } },
    SamsungA16: { image: "phones/SamsungA16.png", stabilizationPoint: { x: "31.75%", y: "19.81%" }, specs: { processor: "Exynos 1330", camera: "50MP Main" } },
    SamsungS2: { image: "phones/SamsungS2.png", stabilizationPoint: { x: "45.70%", y: "17.37%" }, specs: { processor: "Exynos 4210", camera: "8MP Retro" } },
    Iphone11Pro: { image: "phones/Iphone11Pro.png", stabilizationPoint: { x: "31.04%", y: "21.44%" }, specs: { processor: "A13 Bionic", camera: "Triple 12MP" } },
    HuaweiPuraX: { image: "phones/HuaweiPuraX.png", stabilizationPoint: { x: "24.00%", y: "19.36%" }, specs: { processor: "Kirin 9010 Proto", camera: "XMAGE Concept" } },
    "IqooZ10Turbo+": { image: "phones/IqooZ10Turbo+.png", stabilizationPoint: { x: "42.42%", y: "15.00%" }, specs: { processor: "Dimensity 9300+", camera: "50MP Flagship" } },
    PocoM3Pro5G: { image: "phones/PocoM3Pro5G.png", stabilizationPoint: { x: "34.80%", y: "8.28%" }, specs: { processor: "Dimensity 700", camera: "48MP AI Triple" } },
    Honor200: { image: "phones/Honor200.png", stabilizationPoint: { x: "37.75%", y: "19.30%" }, specs: { processor: "Snapdragon 7 Gen 3", camera: "50MP Harcourt" } },
    HonorX8C: { image: "phones/HonorX8C.png", stabilizationPoint: { x: "28.51%", y: "14.43%" }, specs: { processor: "Snapdragon 680", camera: "High-Res Matrix" } },
    HuaweiMateXTU: { image: "phones/HuaweiMateXTU.png", stabilizationPoint: { x: "43.08%", y: "27.12%" }, specs: { processor: "Kirin 9010", camera: "Tri-Fold Cam" } },
    HuaweiPura70U: { image: "phones/HuaweiPura70U.png", stabilizationPoint: { x: "45.37%", y: "25.02%" }, specs: { processor: "Kirin 9010", camera: "1-inch Retractable" } },
    HuaweiY9C: { image: "phones/HuaweiY9C.png", stabilizationPoint: { x: "37.74%", y: "16.04%" }, specs: { processor: "Kirin 710F", camera: "Pop-Up AI" } },
    InfinixHot12P: { image: "phones/InfinixHot12P.png", stabilizationPoint: { x: "36.08%", y: "20.08%" }, specs: { processor: "Unisoc T616", camera: "50MP SuperNight" } },
    InfinixHot40I: { image: "phones/InfinixHot40I.png", stabilizationPoint: { x: "41.80%", y: "25.00%" }, specs: { processor: "Unisoc T606", camera: "50MP AI" } },
    Iphone11: { image: "phones/Iphone11.png", stabilizationPoint: { x: "33.62%", y: "18.59%" }, specs: { processor: "A13 Bionic", camera: "12MP Dual" } },
    Iphone17ProMax: { image: "phones/Iphone17ProMax.png", stabilizationPoint: { x: "31.29%", y: "23.91%" }, specs: { processor: "A19 Pro Bionic", camera: "Tetraprism 2.0" } },
    IphoneXSM: { image: "phones/IphoneXSM.png", stabilizationPoint: { x: "30.57%", y: "12.43%" }, specs: { processor: "A12 Bionic", camera: "12MP Dual" } },
    IqooNeo9SPP: { image: "phones/IqooNeo9SPP.png", stabilizationPoint: { x: "37.70%", y: "11.79%" }, specs: { processor: "Snapdragon 8 Gen 3", camera: "IMX920" } },
    MeizuLucky08: { image: "phones/MeizuLucky08.png", stabilizationPoint: { x: "50.00%", y: "16.46%" }, specs: { processor: "Snapdragon 7s Gen 2", camera: "Flyme AI" } },
    Nothing1: { image: "phones/Nothing1.png", stabilizationPoint: { x: "38.65%", y: "15.57%" }, specs: { processor: "Snapdragon 778G+", camera: "50MP Dual" } },
    OnePlus11R: { image: "phones/OnePlus11R.png", stabilizationPoint: { x: "37.86%", y: "26.56%" }, specs: { processor: "Snapdragon 8+ Gen 1", camera: "50MP IMX890" } },
    OnePlus12: { image: "phones/OnePlus12.png", stabilizationPoint: { x: "39.71%", y: "20.12%" }, specs: { processor: "Snapdragon 8 Gen 3", camera: "Hasselblad 4" } },
    Pixel8P: { image: "phones/Pixel8P.png", stabilizationPoint: { x: "21.34%", y: "16.57%" }, specs: { processor: "Tensor G3", camera: "50MP Pro" } },
    PocoX7Pro: { image: "phones/PocoX7Pro.png", stabilizationPoint: { x: "40.49%", y: "13.94%" }, specs: { processor: "Dimensity 8400", camera: "200MP" } },
    Realme9i: { image: "phones/Realme9i.png", stabilizationPoint: { x: "37.86%", y: "12.34%" }, specs: { processor: "Snapdragon 680", camera: "50MP Matrix" } },
    RealmeC71: { image: "phones/RealmeC71.png", stabilizationPoint: { x: "37.30%", y: "22.39%" }, specs: { processor: "Unisoc T612", camera: "50MP AI" } },
    RealmeGT6: { image: "phones/RealmeGT6.png", stabilizationPoint: { x: "39.55%", y: "19.52%" }, specs: { processor: "Snapdragon 8s Gen 3", camera: "AI Nightscape" } },
    RealmeGT7Pro: { image: "phones/RealmeGT7Pro.png", stabilizationPoint: { x: "38.82%", y: "26.66%" }, specs: { processor: "Snapdragon 8 Elite", camera: "200MP OIS" } },
    Redmi13C: { image: "phones/Redmi13C.png", stabilizationPoint: { x: "38.43%", y: "15.76%" }, specs: { processor: "Helio G85", camera: "50MP AI" } },
    Redmi9A: { image: "phones/Redmi9A.png", stabilizationPoint: { x: "34.93%", y: "9.04%" }, specs: { processor: "Helio G25", camera: "13MP AI" } },
    SamsungA15: { image: "phones/SamsungA15.png", stabilizationPoint: { x: "40.55%", y: "19.38%" }, specs: { processor: "Helio G99", camera: "50MP Vision" } },
    SamsungA72: { image: "phones/SamsungA72.png", stabilizationPoint: { x: "40.45%", y: "21.88%" }, specs: { processor: "Snapdragon 720G", camera: "64MP OIS" } },
    SamsungJ4: { image: "phones/SamsungJ4.png", stabilizationPoint: { x: "50.34%", y: "16.35%" }, specs: { processor: "Exynos 7570", camera: "13MP" } },
    "SamsungS10+": { image: "phones/SamsungS10+.png", stabilizationPoint: { x: "53.21%", y: "18.73%" }, specs: { processor: "Exynos 9820", camera: "16MP Ultra-Wide" } },
    SamsungS21U: { image: "phones/SamsungS21U.png", stabilizationPoint: { x: "19.31%", y: "17.25%" }, specs: { processor: "Exynos 2100", camera: "108MP Pro-Grade" } },
    SamsungS25U: { image: "phones/SamsungS25U.png", stabilizationPoint: { x: "37.38%", y: "25.63%" }, specs: { processor: "Snapdragon 8 Elite", camera: "ISOCELL HPX" } },
    "SamsungS9+": { image: "phones/SamsungS9+.png", stabilizationPoint: { x: "50.58%", y: "21.00%" }, specs: { processor: "Exynos 9810", camera: "Dual Aperture" } },
    SamsungXCover7: { image: "phones/SamsungXCover7.png", stabilizationPoint: { x: "37.36%", y: "13.14%" }, specs: { processor: "Dimensity 6100+", camera: "Rugged 50MP" } },
    SamsungZFlip6: { image: "phones/SamsungZFlip6.png", stabilizationPoint: { x: "35.54%", y: "9.70%" }, specs: { processor: "Snapdragon 8 Gen 3", camera: "FlexiCam" } },
    SonyXperia1M7: { image: "phones/SonyXperia1M7.png", stabilizationPoint: { x: "26.07%", y: "22.78%" }, specs: { processor: "Snapdragon 8 Elite", camera: "Exmor T" } },
    TecnoPova4: { image: "phones/TecnoPova4.png", stabilizationPoint: { x: "36.98%", y: "13.54%" }, specs: { processor: "Helio G99", camera: "50MP Dual" } },
    VivoX200U: { image: "phones/VivoX200U.png", stabilizationPoint: { x: "44.55%", y: "35.46%" }, specs: { processor: "Dimensity 9400", camera: "Zeiss APO" } },
    Xiaomi10U: { image: "phones/Xiaomi10U.png", stabilizationPoint: { x: "37.75%", y: "31.02%" }, specs: { processor: "Snapdragon 865", camera: "120x Zoom" } },
    Xiaomi13TPro: { image: "phones/Xiaomi13TPro.png", stabilizationPoint: { x: "38.20%", y: "23.34%" }, specs: { processor: "Dimensity 9200+", camera: "50MP Leica" } },
    Xiaomi15U: { image: "phones/Xiaomi15U.png", stabilizationPoint: { x: "42.09%", y: "34.85%" }, specs: { processor: "Snapdragon 8 Elite", camera: "Leica 1.5-inch" } },
    Xiaomi17Pro: { image: "phones/Xiaomi17Pro.png", stabilizationPoint: { x: "34.07%", y: "22.39%" }, specs: { processor: "Snapdragon 8 Gen 5", camera: "Leica Next-Gen" } },
    Xiaomi9: { image: "phones/Xiaomi9.png", stabilizationPoint: { x: "35.43%", y: "10.67%" }, specs: { processor: "Snapdragon 855", camera: "48MP" } },
    ZteNubiaZ70U: { image: "phones/ZteNubiaZ70U.png", stabilizationPoint: { x: "39.47%", y: "15.76%" }, specs: { processor: "Snapdragon 8 Elite", camera: "35mm UDC" } },
    HonorX8: { image: "phones/HonorX8.png", stabilizationPoint: { x: "37.10%", y: "22.57%" }, specs: { processor: "Snapdragon 680", camera: "64MP Quad" } },
    "InfinixNote50Pro+": { image: "phones/InfinixNote50Pro+.png", stabilizationPoint: { x: "33.26%", y: "19.36%" }, specs: { processor: "Dimensity 8200", camera: "108MP VIP" } },
    Iphone16: { image: "phones/Iphone16.png", stabilizationPoint: { x: "35.55%", y: "22.57%" }, specs: { processor: "A18", camera: "48MP Fusion" } },
    RedmiNote13: { image: "phones/RedmiNote13.png", stabilizationPoint: { x: "37.10%", y: "9.91%" }, specs: { processor: "Dimensity 6080", camera: "108MP AI" } },
    SoneXperia5Mark3: { image: "phones/SoneXperia5Mark3.png", stabilizationPoint: { x: "28.00%", y: "12.00%" }, specs: { processor: "Snapdragon 888", camera: "12MP Zeiss" } },
    TCL20SE: { image: "phones/TCL20SE.png", stabilizationPoint: { x: "37.21%", y: "16.73%" }, specs: { processor: "Snapdragon 460", camera: "16MP AI Quad" } },
    Nothing3A: { image: "phones/Nothing3A.png", stabilizationPoint: { x: "38.82%", y: "24.67%" }, specs: { processor: "Snapdragon 7s Gen 3", camera: "50MP Dual OIS" } },
    OppoReno14F: { image: "phones/OppoReno14F.png", stabilizationPoint: { x: "39.90%", y: "21.92%" }, specs: { processor: "Dimensity 6300", camera: "50MP Cosmo Ring" } },
    Xiaomi14T: { image: "phones/Xiaomi14T.png", stabilizationPoint: { x: "35.17%", y: "25.09%" }, specs: { processor: "Dimensity 8300 Ultra", camera: "Leica 50MP" } },
    RedmiNote8Pro: { image: "phones/RedmiNote8Pro.png", stabilizationPoint: { x: "50.00%", y: "19.17%" }, specs: { processor: "Helio G90T", camera: "64MP Quad" } },
    RedmiNote14_4G: { image: "phones/RedmiNote14_4G.png", stabilizationPoint: { x: "38.00%", y: "17.00%" }, specs: { processor: "Snapdragon 685", camera: "108MP Main" } },
    GoogleFold2: { image: "phones/GoogleFold2.png", stabilizationPoint: { x: "56.18%", y: "18.97%" }, specs: { processor: "Tensor G4", camera: "Pixel Fold Cam" } },
    HonorMagic6P: { image: "phones/HonorMagic6P.png", stabilizationPoint: { x: "45.07%", y: "32.88%" }, specs: { processor: "Snapdragon 8 Gen 3", camera: "180MP Falcon" } },
    HonorMagicX9C: { image: "phones/HonorMagicX9C.png", stabilizationPoint: { x: "44.36%", y: "18.07%" }, specs: { processor: "Snapdragon 6 Gen 1", camera: "108MP Matrix" } },
    HuaweiPura80U: { image: "phones/HuaweiPura80U.png", stabilizationPoint: { x: "40.66%", y: "37.10%" }, specs: { processor: "Kirin 9020", camera: "XMAGE Variable" } },
    IqooNeo10PP: { image: "phones/IqooNeo10PP.png", stabilizationPoint: { x: "41.58%", y: "20.20%" }, specs: { processor: "Snapdragon 8 Elite", camera: "Vivo V3+" } },
    LgK10: { image: "phones/LgK10.png", stabilizationPoint: { x: "49.68%", y: "13.74%" }, specs: { processor: "MT6753", camera: "13MP AF" } },
    OnePlusAce3: { image: "phones/OnePlusAce3.png", stabilizationPoint: { x: "43.10%", y: "19.66%" }, specs: { processor: "Snapdragon 8 Gen 2", camera: "IMX890" } },
    PocoM5s: { image: "phones/PocoM5s.png", stabilizationPoint: { x: "23.45%", y: "8.55%" }, specs: { processor: "Helio G95", camera: "64MP AI Quad" } },
    PocoX6P: { image: "phones/PocoX6P.png", stabilizationPoint: { x: "38.69%", y: "13.81%" }, specs: { processor: "Dimensity 8300 Ultra", camera: "64MP OIS" } },
    Redmi10: { image: "phones/Redmi10.png", stabilizationPoint: { x: "37.86%", y: "20.12%" }, specs: { processor: "Helio G88", camera: "50MP Quad" } },
    SamsungA21s: { image: "phones/SamsungA21s.png", stabilizationPoint: { x: "17.32%", y: "13.95%" }, specs: { processor: "Exynos 850", camera: "48MP Quad" } },
    SamsungA9: { image: "phones/SamsungA9.png", stabilizationPoint: { x: "33.56%", y: "17.20%" }, specs: { processor: "Snapdragon 660", camera: "Quad Cam" } },
    SamsungJ1: { image: "phones/SamsungJ1.png", stabilizationPoint: { x: "49.66%", y: "23.50%" }, specs: { processor: "Spreadtrum SC9830", camera: "5MP f/2.2" } },
    SamsungS24U: { image: "phones/SamsungS24U.png", stabilizationPoint: { x: "37.92%", y: "22.29%" }, specs: { processor: "Snapdragon 8 Gen 3", camera: "200MP HP2X" } },
    SamsungS4Zoom: { image: "phones/SamsungS4Zoom.png", stabilizationPoint: { x: "50.14%", y: "30.74%" }, specs: { processor: "Dual-Core 1.5GHz", camera: "16MP 10x Zoom" } },
    XiaomiMixAlpha: { image: "phones/XiaomiMixAlpha.png", stabilizationPoint: { x: "38.38%", y: "12.03%" }, specs: { processor: "Snapdragon 855+", camera: "108MP Surround" } },
    XiaomiMixFlip: { image: "phones/XiaomiMixFlip.png", stabilizationPoint: { x: "41.80%", y: "22.10%" }, specs: { processor: "Snapdragon 8 Gen 3", camera: "Leica Flip" } },
    "Samsung-S20_Ultra": { image: "phones/Samsung-S20_Ultra.png", stabilizationPoint: { x: "21.10%", y: "17.85%" }, specs: { processor: "Exynos 990", camera: "108MP" } },
    "Honor-robot": { image: "phones/Honor-robot.png", stabilizationPoint: { x: "47.67%", y: "9.40%" }, specs: { processor: "Unknown", camera: "Unknown" } },
    "Iphone15": { image: "phones/Iphone15.png", stabilizationPoint: { x: "47.85%", y: "20.12%" }, specs: { processor: "A16 Bionic", camera: "48MP Main" } }
  };

  const textLocales = {
    ru: {
      controls_title: "Панель Управления", phone_model_label: "Устройство", info_button_text: "Инфо",
      settings_button_text: "Настройки", support_button_text: "Добавить ваш телефон", language_modal_title: "Язык",
      settings_title: "Настройки", settings_white_fire: "Rage Glow (Огонь)", settings_shadows: "3D Тени",
      settings_stabilization: "Стабилизация (OIS)", settings_super_fps: "FPS Boost (Lite Mode)", close_button: "Закрыть",
      info_title: "О Проекте", info_development_title: "Разработка", loader_welcome: "STABFX ULTIMATE",
      loader_support: "Симулятор стабилизации кинематографического уровня", loader_reactions: "100 Реакций — Обнова",
      loader_enter: "Войти в приложение", donation_text: "Поддержать разработку", settings_light_theme: "Светлая тема",
      music_toggle_text: "Музыка", processor_title: "Процессор", camera_title: "Камера", turbo_title: "Turbo Propeller",
      launch_btn: "ЗАПУСТИТЬ", fx_title: "FX Studio", settings_stretch: "Растяжение (Ширина)",
      settings_fps: "FPS (Производительность)", photo_mode_title: "Фото Режим",
      photo_mode_desc: "Создать красивый скриншот", photo_nick_label: "Твой Никнейм", photo_generate: "Создать Вид",
      add_phone_button: "Добавить свой телефон", add_phone_title: "Добавить свой телефон", add_phone_name: "Название модели",
      add_phone_image: "Изображение телефона", add_phone_upload: "Выберите PNG, JPG или WEBP",
      add_phone_cpu: "Процессор", add_phone_cam: "Камера", add_phone_save: "Сохранить телефон",
      add_phone_error: "Введите название и выберите изображение", custom_list_title: "Мои устройства",
      add_phone_saved_text: "Телефон добавлен! Для точной настройки точки стабилизации введите camera() в консоли (F12) и кликните по камере на картинке."
    },
    en: {
      controls_title: "Controls", phone_model_label: "Device", info_button_text: "Info",
      settings_button_text: "Settings", support_button_text: "Add your phone", language_modal_title: "Language",
      settings_title: "Settings", settings_white_fire: "Rage Glow", settings_shadows: "3D Shadows",
      settings_stabilization: "OIS Stabilization", settings_super_fps: "FPS Boost (Lite Mode)", close_button: "Close",
      info_title: "About", info_development_title: "Team", loader_welcome: "STABFX ULTIMATE",
      loader_support: "Cinema-grade stabilization simulator", loader_reactions: "100 Reactions — Update",
      loader_enter: "Enter Application", donation_text: "Support development", settings_light_theme: "Light Theme",
      music_toggle_text: "Music", processor_title: "Processor", camera_title: "Camera", turbo_title: "Turbo Propeller",
      launch_btn: "LAUNCH", fx_title: "FX Studio", settings_stretch: "Stretch (Width)",
      settings_fps: "FPS (Performance)", photo_mode_title: "Photo Mode",
      photo_mode_desc: "Create a beautiful screenshot", photo_nick_label: "Your Nickname", photo_generate: "Generate View",
      add_phone_button: "Add Your Phone", add_phone_title: "Add Your Phone", add_phone_name: "Model Name",
      add_phone_image: "Phone Image", add_phone_upload: "Choose PNG, JPG or WEBP",
      add_phone_cpu: "Processor", add_phone_cam: "Camera", add_phone_save: "Save Phone",
      add_phone_error: "Enter a name and select an image", custom_list_title: "My Devices",
      add_phone_saved_text: "Phone added! For precise stabilization point calibration type camera() in the console (F12) and click the camera on the image."
    }
  };

  let currentRotation = 0;
  let targetRotation = 0;
  let fireIntensity = 0;
  let fireTimeout;
  let particlesObj = null;
  let lastAngle = 0;
  let isDragging = false;
  let mouseXPercent = 0;
  let mouseYPercent = 0;
  let lastFpsTime = performance.now();
  let frameCount = 0;
  let isPropellerActive = false;
  let propellerTimeoutId = null;
  let activeFx = "none";
  let dragStartX = 0;
  let dragStartY = 0;
  let isDebugMode = false;
  let autoSpinMode = false;
  let stretchScale = 1;
  let currentFpsLimit = 60;
  let lastFrameTime = 0;
  let customPhones = {};

  const loaderScreen = document.getElementById("loader-overlay");
  const enterBtn = document.getElementById("enter-site-btn");
  const bgMusic = document.getElementById("background-music");
  const menuBtn = document.getElementById("menu-btn");
  const autoSpinBtn = document.getElementById("auto-spin-btn");
  const photoModeBtn = document.getElementById("photo-mode-btn");
  const mainMenuModal = document.getElementById("main-menu-modal");
  const settingsModal = document.getElementById("settings-modal");
  const infoModal = document.getElementById("info-modal");
  const fxModal = document.getElementById("fx-modal");
  const languageModal = document.getElementById("language-modal");
  const musicModal = document.getElementById("music-modal");
  const photoModal = document.getElementById("photo-modal");
  const addPhoneModal = document.getElementById("add-phone-modal");
  const addPhoneBtn = document.getElementById("add-phone-btn");
  const saveCustomBtn = document.getElementById("save-custom-phone");
  const customNameInput = document.getElementById("custom-phone-name");
  const customCpuInput = document.getElementById("custom-phone-cpu");
  const customCamInput = document.getElementById("custom-phone-cam");
  const customFileInput = document.getElementById("custom-phone-image");
  const customList = document.getElementById("custom-phones-list");
  const fileDropText = document.getElementById("file-drop-text");
  const settingsBtn = document.getElementById("settings-btn");
  const infoBtn = document.getElementById("info-btn");
  const fxPanelBtn = document.getElementById("fx-panel-btn");
  const phoneSelect = document.getElementById("phone-select");
  const phoneImg = document.getElementById("phone-image");
  const phoneInfoCont = document.getElementById("phone-info-container");
  const cpuInfo = document.getElementById("phone-processor-info");
  const camInfo = document.getElementById("phone-camera-info");
  const fpsCounter = document.getElementById("fps-counter");
  const fireEffectEl = document.getElementById("white-fire-effect");
  const joystickEl = document.getElementById("floating-joystick");
  const joystickHandle = document.getElementById("joystick-handle");
  const wrapperBg = document.getElementById("wrapper-bg");
  const lightThemeToggle = document.getElementById("light-theme-toggle");
  const whiteFireToggle = document.getElementById("white-fire-toggle");
  const shadowsToggle = document.getElementById("shadows-toggle");
  const stabilizationToggle = document.getElementById("stabilization-toggle");
  const boostToggle = document.getElementById("super-fps-boost-toggle");
  const viewfinderToggle = document.getElementById("viewfinder-toggle");
  const bgSelect = document.getElementById("bg-select");
  const musicToggleBtn = document.getElementById("music-toggle-btn");
  const stretchInput = document.getElementById("stretch-input");
  const fpsInput = document.getElementById("fps-input");
  const propBtn = document.getElementById("propeller-btn");
  const propSettingsToggle = document.getElementById("propeller-settings-toggle");
  const propSettingsPanel = document.getElementById("propeller-settings-panel");
  const propTimeInput = document.getElementById("propeller-time");
  const propPowerInput = document.getElementById("propeller-power");
  const fxButtons = document.querySelectorAll(".fx-btn");
  const musicTrackBtns = document.querySelectorAll(".music-track-btn");
  const genPhotoBtn = document.getElementById("generate-photo-btn");
  const photoNickInput = document.getElementById("photo-nick-input");
  const photoCardOverlay = document.getElementById("photo-card-overlay");
  const pcNick = document.getElementById("pc-nick");
  const pcPhone = document.getElementById("pc-phone");
  const pcCpu = document.getElementById("pc-cpu");
  const pcCam = document.getElementById("pc-cam");
  const photoExitBtn = document.getElementById("photo-exit-btn");

  function getLocaleText(key) {
    const lang = document.documentElement.lang || "ru";
    return (textLocales[lang] && textLocales[lang][key]) || textLocales.ru[key] || "";
  }

  function setupDebug() {
    window.camera = function () {
      isDebugMode = true;
      wrapperBg.style.cursor = "crosshair";
      autoSpinMode = false;
      targetRotation = 0;
      currentRotation = 0;
      if (phoneImg) phoneImg.style.transform = `perspective(1000px) rotateZ(0deg) scaleX(${stretchScale})`;
      console.log("%c[DEBUG] Calibration mode ON. Click the camera on the phone.", "color: lime; font-weight: bold; font-size: 14px;");
    };
    window.off = function () {
      isDebugMode = false;
      wrapperBg.style.cursor = "default";
      console.log("%c[DEBUG] Calibration mode OFF.", "color: red; font-weight: bold; font-size: 14px;");
    };
    console.log("%c[DEBUG] Type camera() to start calibration, off() to disable.", "color: cyan; font-weight: bold;");
  }

  const MAX_CUSTOM = 10;
  const MAX_INPUT_BYTES = 8 * 1024 * 1024;
  const MAX_STORED_CHARS = 380000;
  const SAFE_DATA_IMG = /^data:image\/png;base64,[A-Za-z0-9+/]+=*$/;
  const SAFE_BUILTIN_IMG = /^phones\/[\w .+\-]+\.png$/;
  const EXT_OK = /\.(png|jpe?g|jfif|pjpeg|pjp|webp|gif|bmp|avif)$/i;
  const MSG = {
    ru: {
      limit: "Максимум 10 своих телефонов. Удалите один, чтобы добавить новый.",
      noName: "Введите название модели.",
      noFile: "Выберите изображение телефона.",
      type: "Формат не поддерживается. Разрешены PNG, JPG, JFIF, WEBP, GIF, BMP, AVIF.",
      size: "Файл больше 8 МБ.",
      decode: "Не удалось прочитать файл. Он повреждён или это не изображение.",
      big: "Изображение слишком тяжёлое. Выберите файл поменьше.",
      storage: "Память браузера заполнена. Удалите один из телефонов.",
      saved: "Телефон добавлен. Точку камеры можно уточнить кнопкой ◎ в списке.",
      noPoint: "Отметьте на картинке, где находится камера.",
      pickHint: "Нажмите на камеру телефона — вокруг этой точки он будет стабилизироваться.",
      calib: "Нажмите на камеру телефона.",
      point: "Точка камеры сохранена."
    },
    en: {
      limit: "You can add up to 10 phones. Delete one to add another.",
      noName: "Enter a model name.",
      noFile: "Choose a phone image.",
      type: "Unsupported format. Allowed: PNG, JPG, JFIF, WEBP, GIF, BMP, AVIF.",
      size: "File is larger than 8 MB.",
      decode: "Could not read the file. It is damaged or not an image.",
      big: "Image is too heavy. Choose a smaller file.",
      storage: "Browser storage is full. Delete one of your phones.",
      saved: "Phone added. You can fine-tune the camera point with ◎ in the list.",
      noPoint: "Mark where the camera is on the image.",
      pickHint: "Tap the phone's camera — it stabilizes around this point.",
      calib: "Tap the camera on the phone.",
      point: "Camera point saved."
    }
  };

  function tr(key) {
    const lang = MSG[document.documentElement.lang] ? document.documentElement.lang : "ru";
    return MSG[lang][key] || key;
  }

  function toast(msg, kind) {
    document.querySelectorAll(".toast").forEach(n => n.remove());
    const el = document.createElement("div");
    el.className = "toast " + (kind || "");
    el.setAttribute("role", "status");
    el.textContent = msg;
    document.body.appendChild(el);
    requestAnimationFrame(() => el.classList.add("show"));
    setTimeout(() => {
      el.classList.remove("show");
      setTimeout(() => el.remove(), 300);
    }, 3400);
  }

  function isSafeImage(src) {
    return typeof src === "string" && (SAFE_BUILTIN_IMG.test(src) || (src.length < 600000 && SAFE_DATA_IMG.test(src)));
  }

  function cleanText(value, max) {
    return String(value == null ? "" : value)
      .replace(/[\u0000-\u001f\u007f<>"'`&\\]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, max);
  }

  function pct(value, fallback) {
    const n = parseFloat(value);
    return (isFinite(n) ? Math.min(100, Math.max(0, n)) : fallback) + "%";
  }

  function newId() {
    return "custom_" + Array.from(crypto.getRandomValues(new Uint8Array(6)), b => (b % 36).toString(36)).join("");
  }

  function sniffImage(b) {
    const s = (i, n) => String.fromCharCode.apply(null, Array.from(b.slice(i, i + n)));
    if (b[0] === 0x89 && s(1, 3) === "PNG") return "png";
    if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return "jpeg";
    if (s(0, 4) === "GIF8") return "gif";
    if (s(0, 4) === "RIFF" && s(8, 4) === "WEBP") return "webp";
    if (s(0, 2) === "BM") return "bmp";
    if (s(4, 8) === "ftypavif") return "avif";
    return null;
  }

  function loadCustomPhones() {
    customPhones = {};
    let stored = null;
    try { stored = JSON.parse(localStorage.getItem("jxCustomPhones")); } catch (err) { stored = null; }
    if (!stored || typeof stored !== "object") return;
    Object.keys(stored).slice(0, MAX_CUSTOM).forEach(key => {
      const p = stored[key];
      if (!p || !isSafeImage(p.image)) return;
      const id = /^custom_[a-z0-9]{6}$/.test(key) ? key : newId();
      const pt = p.stabilizationPoint || {};
      const specs = p.specs || {};
      const entry = {
        name: cleanText(p.name || key, 32) || "Phone",
        image: p.image,
        stabilizationPoint: { x: pct(pt.x, 37.5), y: pct(pt.y, 17.5) },
        specs: { processor: cleanText(specs.processor, 32) || "Custom", camera: cleanText(specs.camera, 32) || "Custom" }
      };
      customPhones[id] = entry;
      phonesData[id] = entry;
    });
  }

  function persistCustomPhones() {
    try {
      localStorage.setItem("jxCustomPhones", JSON.stringify(customPhones));
      return true;
    } catch (err) {
      toast(tr("storage"), "err");
      return false;
    }
  }

  function makeRowButton(iconClass, title, cls, onClick) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.title = title;
    btn.setAttribute("aria-label", title);
    if (cls) btn.className = cls;
    const icon = document.createElement("i");
    icon.className = iconClass;
    btn.appendChild(icon);
    btn.addEventListener("click", onClick);
    return btn;
  }

  function renderCustomPhonesList() {
    if (!customList) return;
    customList.replaceChildren();
    const ids = Object.keys(customPhones);
    const counter = document.getElementById("custom-count");
    if (counter) counter.textContent = ids.length + " / " + MAX_CUSTOM;
    if (saveCustomBtn) saveCustomBtn.disabled = ids.length >= MAX_CUSTOM;
    if (!ids.length) return;

    const title = document.createElement("p");
    title.className = "custom-list-title";
    title.textContent = getLocaleText("custom_list_title");
    customList.appendChild(title);

    ids.forEach(id => {
      const row = document.createElement("div");
      row.className = "custom-phone-row";
      const thumb = document.createElement("img");
      thumb.alt = "";
      thumb.draggable = false;
      if (isSafeImage(customPhones[id].image)) thumb.src = customPhones[id].image;
      const label = document.createElement("span");
      label.textContent = customPhones[id].name;
      const cal = makeRowButton("fas fa-crosshairs", "Camera point", "", () => {
        toggleElement(addPhoneModal, false);
        phoneSelect.value = id;
        updatePhoneSelection();
        window.camera();
        toast(tr("calib"), "ok");
      });
      const del = makeRowButton("fas fa-trash-can", "Delete", "danger", () => {
        delete customPhones[id];
        delete phonesData[id];
        persistCustomPhones();
        populatePhoneList();
        updatePhoneSelection();
        renderCustomPhonesList();
      });
      row.append(thumb, label, cal, del);
      customList.appendChild(row);
    });
  }

  async function processImageFile(file) {
    if (file.size > MAX_INPUT_BYTES) throw new Error("size");
    if (!EXT_OK.test(file.name)) throw new Error("type");
    const head = new Uint8Array(await file.slice(0, 16).arrayBuffer());
    if (!sniffImage(head)) throw new Error("type");

    const url = URL.createObjectURL(file);
    try {
      const img = await new Promise((resolve, reject) => {
        const i = new Image();
        i.onload = () => resolve(i);
        i.onerror = () => reject(new Error("decode"));
        i.src = url;
      });
      if (!img.width || !img.height || img.width * img.height > 40000000) throw new Error("decode");
      let side = 640;
      for (let n = 0; n < 6; n++) {
        const scale = Math.min(1, side / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        const out = canvas.toDataURL("image/png");
        if (out.length <= MAX_STORED_CHARS) return out;
        side = Math.round(side * 0.8);
      }
      throw new Error("big");
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  let pendingImage = null;
  let pendingPoint = null;
  let pickToken = 0;

  function resetPicker() {
    pickToken++;
    pendingImage = null;
    pendingPoint = null;
    const box = document.getElementById("point-picker");
    const marker = document.getElementById("point-marker");
    const img = document.getElementById("point-preview");
    if (box) box.classList.add("hidden");
    if (marker) marker.classList.add("hidden");
    if (img) img.removeAttribute("src");
  }

  async function onPhoneFileChosen() {
    const file = customFileInput.files && customFileInput.files[0];
    resetPicker();
    if (fileDropText) {
      fileDropText.textContent = file ? (file.name.length > 26 ? file.name.slice(0, 24) + "..." : file.name) : getLocaleText("add_phone_upload");
    }
    if (!file) return;
    const token = pickToken;
    try {
      const image = await processImageFile(file);
      if (token !== pickToken) return;
      pendingImage = image;
      document.getElementById("point-preview").src = image;
      document.getElementById("point-hint").textContent = tr("pickHint");
      document.getElementById("point-picker").classList.remove("hidden");
    } catch (err) {
      toast(tr(MSG.ru[err.message] ? err.message : "decode"), "err");
      customFileInput.value = "";
      if (fileDropText) fileDropText.textContent = getLocaleText("add_phone_upload");
    }
  }

  function onPointPick(e) {
    const img = document.getElementById("point-preview");
    const marker = document.getElementById("point-marker");
    const r = img.getBoundingClientRect();
    if (!pendingImage || !r.width || !r.height) return;
    const x = Math.min(100, Math.max(0, (e.clientX - r.left) / r.width * 100));
    const y = Math.min(100, Math.max(0, (e.clientY - r.top) / r.height * 100));
    pendingPoint = { x: x.toFixed(2) + "%", y: y.toFixed(2) + "%" };
    marker.style.left = x + "%";
    marker.style.top = y + "%";
    marker.classList.remove("hidden");
  }

  async function saveCustomPhoneEntry() {
    if (Object.keys(customPhones).length >= MAX_CUSTOM) return toast(tr("limit"), "err");
    const name = cleanText(customNameInput && customNameInput.value, 32);
    if (!name) return toast(tr("noName"), "err");
    if (!pendingImage) return toast(tr("noFile"), "err");
    if (!pendingPoint) return toast(tr("noPoint"), "err");

    const id = newId();
    const entry = {
      name,
      image: pendingImage,
      stabilizationPoint: { x: pendingPoint.x, y: pendingPoint.y },
      specs: {
        processor: cleanText(customCpuInput && customCpuInput.value, 32) || "Custom",
        camera: cleanText(customCamInput && customCamInput.value, 32) || "Custom"
      }
    };
    customPhones[id] = entry;
    phonesData[id] = entry;
    if (!persistCustomPhones()) {
      delete customPhones[id];
      delete phonesData[id];
      return;
    }
    populatePhoneList();
    phoneSelect.value = id;
    updatePhoneSelection();
    if (customNameInput) customNameInput.value = "";
    if (customCpuInput) customCpuInput.value = "";
    if (customCamInput) customCamInput.value = "";
    if (customFileInput) customFileInput.value = "";
    if (fileDropText) fileDropText.textContent = getLocaleText("add_phone_upload");
    resetPicker();
    renderCustomPhonesList();
    toggleElement(addPhoneModal, false);
    toast(tr("saved"), "ok");
  }

  function initApplication() {
    setupDebug();

    if (enterBtn) {
      enterBtn.addEventListener("click", () => {
        if (loaderScreen) {
          loaderScreen.style.opacity = "0";
          setTimeout(() => loaderScreen.classList.add("hidden"), 500);
        }
      });
    }

    initLanguage();

    if (stabilizationToggle) stabilizationToggle.checked = true;

    loadCustomPhones();
    loadSavedSettings();
    populatePhoneList();
    updatePhoneSelection();
    renderCustomPhonesList();

    if (menuBtn) menuBtn.addEventListener("click", () => toggleElement(mainMenuModal, true));
    if (autoSpinBtn) autoSpinBtn.addEventListener("click", toggleAutoSpin);

    if (addPhoneBtn) {
      addPhoneBtn.addEventListener("click", () => {
        toggleElement(mainMenuModal, false);
        toggleElement(addPhoneModal, true);
      });
    }

    if (customFileInput) customFileInput.addEventListener("change", onPhoneFileChosen);
    const pointStage = document.getElementById("point-stage");
    if (pointStage) pointStage.addEventListener("click", onPointPick);

    if (saveCustomBtn) saveCustomBtn.addEventListener("click", saveCustomPhoneEntry);

    const headerAddBtn = document.getElementById("header-add-btn");
    if (headerAddBtn) {
      headerAddBtn.addEventListener("click", () => {
        toggleElement(mainMenuModal, false);
        toggleElement(addPhoneModal, true);
      });
    }

    document.addEventListener("keydown", e => {
      if (e.key !== "Escape") return;
      document.querySelectorAll(".modal-overlay:not(.hidden)").forEach(m => { if (m !== languageModal) m.classList.add("hidden"); });
    });

    if (photoModeBtn) {
      photoModeBtn.addEventListener("click", () => {
        toggleElement(photoModal, true);
        toggleElement(mainMenuModal, false);
      });
    }

    if (settingsBtn) {
      settingsBtn.addEventListener("click", () => {
        toggleElement(mainMenuModal, false);
        toggleElement(settingsModal, true);
      });
    }

    if (infoBtn) {
      infoBtn.addEventListener("click", () => {
        toggleElement(mainMenuModal, false);
        toggleElement(infoModal, true);
      });
    }

    if (fxPanelBtn) {
      fxPanelBtn.addEventListener("click", () => {
        toggleElement(mainMenuModal, false);
        toggleElement(fxModal, true);
      });
    }

    document.querySelectorAll(".modal-close-btn").forEach(btn => {
      btn.addEventListener("click", e => toggleElement(e.target.closest(".modal-overlay"), false));
    });

    if (wrapperBg) {
      wrapperBg.addEventListener("mousedown", handleDragStart);
      wrapperBg.addEventListener("touchstart", handleDragStart, { passive: false });

      wrapperBg.addEventListener("click", e => {
        if (!isDebugMode) return;
        e.stopPropagation();
        const rect = phoneImg.getBoundingClientRect();
        if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) return;
        const xPos = e.clientX - rect.left;
        const yPos = e.clientY - rect.top;
        const xPerc = (xPos / rect.width * 100).toFixed(2);
        const yPerc = (yPos / rect.height * 100).toFixed(2);
        const model = phoneSelect.value;
        phonesData[model].stabilizationPoint = { x: `${xPerc}%`, y: `${yPerc}%` };
        if (customPhones[model]) {
          customPhones[model].stabilizationPoint = phonesData[model].stabilizationPoint;
          persistCustomPhones();
        }
        updatePhoneSelection();
        const imgFileName = phonesData[model].image.startsWith("data:") ? "CUSTOM" : phonesData[model].image.split("/").pop();
        const proc = phonesData[model].specs ? phonesData[model].specs.processor : "Unknown";
        const cam = phonesData[model].specs ? phonesData[model].specs.camera : "Unknown";
        const codeOutput = `'${model}': {\n    image: 'phones/${imgFileName}',\n    stabilizationPoint: { x: '${xPerc}%', y: '${yPerc}%' },\n    specs: { processor: '${proc}', camera: '${cam}' }\n},`;
        console.log("Copy this code and update 'phonesData' in app.js:\n\n", codeOutput);
        toast(tr("point"), "ok");
        window.off();
      }, true);
    }

    document.addEventListener("mousemove", e => {
      mouseXPercent = e.clientX / window.innerWidth - 0.5;
      mouseYPercent = e.clientY / window.innerHeight - 0.5;
    });

    if (phoneSelect) phoneSelect.addEventListener("change", updatePhoneSelection);
    if (bgSelect) {
      bgSelect.addEventListener("change", () => {
        applyBackgroundStyle();
        saveCurrentSettings();
      });
    }

    [lightThemeToggle, whiteFireToggle, shadowsToggle, stabilizationToggle, boostToggle, viewfinderToggle].forEach(toggle => {
      if (toggle) {
        toggle.addEventListener("change", () => {
          applySettingsLogic();
          saveCurrentSettings();
        });
      }
    });

    if (stretchInput) {
      stretchInput.addEventListener("input", e => {
        stretchScale = parseFloat(e.target.value);
        saveCurrentSettings();
      });
    }

    if (fpsInput) {
      fpsInput.addEventListener("change", e => {
        currentFpsLimit = parseInt(e.target.value);
        saveCurrentSettings();
      });
    }

    if (fxButtons) {
      fxButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          fxButtons.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          activeFx = btn.dataset.fx;
          applyFxParticles();
          saveCurrentSettings();
        });
      });
    }

    if (musicToggleBtn) {
      musicToggleBtn.addEventListener("click", () => {
        toggleElement(mainMenuModal, false);
        toggleElement(musicModal, true);
      });
    }

    if (musicTrackBtns) {
      musicTrackBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          if (bgMusic) {
            if (!/^[\w\-]+\.mp3$/.test(btn.dataset.src || "")) return;
            bgMusic.src = btn.dataset.src;
            bgMusic.play().catch(console.error);
          }
          toggleElement(musicModal, false);
        });
      });
    }

    if (genPhotoBtn) genPhotoBtn.addEventListener("click", buildPhotoCard);
    if (photoExitBtn) photoExitBtn.addEventListener("click", closePhotoCard);

    if (propSettingsToggle) propSettingsToggle.addEventListener("click", () => propSettingsPanel.classList.toggle("hidden"));
    if (propBtn) propBtn.addEventListener("click", triggerPropeller);

    requestAnimationFrame(renderEngine);
  }

  function toggleElement(el, show) {
    if (!el) return;
    if (show) el.classList.remove("hidden");
    else el.classList.add("hidden");
  }

  function toggleAutoSpin() {
    autoSpinMode = !autoSpinMode;
    if (autoSpinBtn) {
      if (autoSpinMode) autoSpinBtn.classList.add("active");
      else autoSpinBtn.classList.remove("active");
    }
  }

  function switchLanguage(langCode) {
    if (!textLocales[langCode]) langCode = "ru";
    document.documentElement.lang = langCode;
    document.querySelectorAll("[data-translate-key]").forEach(el => {
      const key = el.dataset.translateKey;
      if (textLocales[langCode][key]) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = textLocales[langCode][key];
        } else {
          const icon = el.querySelector("i");
          if (icon) {
            el.innerHTML = "";
            el.appendChild(icon);
            el.append(" " + textLocales[langCode][key]);
          } else {
            el.textContent = textLocales[langCode][key];
          }
        }
      }
    });
    renderCustomPhonesList();
  }

  function initLanguage() {
    const savedLang = localStorage.getItem("selectedLang");
    if (savedLang) {
      switchLanguage(savedLang);
    } else if (languageModal) {
      languageModal.classList.remove("hidden");
    }
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const selected = btn.dataset.lang;
        switchLanguage(selected);
        localStorage.setItem("selectedLang", selected);
        if (languageModal) languageModal.classList.add("hidden");
      });
    });
  }

  async function applyFxParticles() {
    if (particlesObj) {
      await particlesObj.destroy();
      particlesObj = null;
    }
    if (activeFx === "none" || (boostToggle && boostToggle.checked)) return;

    let particleConfig = {};
    const isLight = lightThemeToggle && lightThemeToggle.checked;
    const pColor = isLight ? "#000000" : "#ffffff";
    const moveOpts = { enable: true, speed: 3, direction: "bottom", outModes: "out", random: false, straight: false };

    if (activeFx === "snow") {
      particleConfig = {
        fpsLimit: 60,
        particles: {
          number: { value: 100 },
          color: { value: pColor },
          shape: { type: "circle" },
          opacity: { value: 0.6, random: true },
          size: { value: 3, random: true },
          move: { ...moveOpts, speed: 2 }
        }
      };
    } else if (activeFx === "text") {
      particleConfig = {
        fpsLimit: 60,
        particles: {
          number: { value: 30 },
          shape: { type: "text", options: { text: { value: ["JX", "JELIKTON", "@jxstab_bot"], font: { size: 40, weight: "bold" } } } },
          color: { value: pColor },
          size: { value: 16, random: { enable: true, minimumValue: 10 } },
          opacity: { value: 0.9 },
          move: { ...moveOpts, speed: 3 },
          rotate: { animation: { enable: true, speed: 5, sync: false } }
        }
      };
    } else if (activeFx === "phones" || activeFx === "mix") {
      const keys = Object.keys(phonesData).filter(k => isSafeImage(phonesData[k].image));
      const imagesArr = keys.map(k => ({ src: phonesData[k].image, width: 200, height: 400 }));
      let shapeCfg = { type: "image", options: { image: imagesArr } };

      if (activeFx === "mix") {
        shapeCfg = {
          type: ["text", "image"],
          options: {
            image: imagesArr,
            text: { value: ["JX", "@jelikton"], font: { size: 40, weight: "bold" } }
          }
        };
      }

      particleConfig = {
        fpsLimit: 60,
        particles: {
          number: { value: 20 },
          shape: shapeCfg,
          size: { value: 40, random: { enable: true, minimumValue: 25 } },
          move: { enable: true, speed: 5, direction: "bottom", outModes: "out" },
          rotate: { value: 0, random: true, animation: { enable: true, speed: 5, sync: false } },
          wobble: { enable: true, distance: 10, speed: 5 },
          opacity: { value: 1 }
        }
      };
    }

    particlesObj = await tsParticles.load("tsparticles", particleConfig);
  }

  function populatePhoneList() {
    if (!phoneSelect) return;
    const names = Object.keys(phonesData).sort((a, b) => (!!customPhones[b] - !!customPhones[a]) || a.localeCompare(b));
    phoneSelect.innerHTML = "";
    names.forEach(name => {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = customPhones[name] ? "★ " + customPhones[name].name : name;
      phoneSelect.appendChild(opt);
    });
  }

  function updatePhoneSelection() {
    if (!phoneSelect || !phoneImg) return;
    const selName = phoneSelect.value;
    if (!phonesData[selName]) return;

    const data = phonesData[selName];
    phoneImg.src = isSafeImage(data.image) ? data.image : "";

    if (stabilizationToggle && stabilizationToggle.checked) {
      phoneImg.style.transformOrigin = `${data.stabilizationPoint.x} ${data.stabilizationPoint.y}`;
    } else {
      phoneImg.style.transformOrigin = "50% 50%";
    }

    if (data.specs && phoneInfoCont) {
      if (cpuInfo) cpuInfo.textContent = data.specs.processor;
      if (camInfo) camInfo.textContent = data.specs.camera;
      phoneInfoCont.classList.remove("hidden");
    } else if (phoneInfoCont) {
      phoneInfoCont.classList.add("hidden");
    }
  }

  function triggerPropeller() {
    if (isPropellerActive) return;
    toggleElement(mainMenuModal, false);
    autoSpinMode = false;
    if (autoSpinBtn) autoSpinBtn.classList.remove("active");

    const timeSec = parseInt(propTimeInput ? propTimeInput.value : 5) || 5;
    const pwr = parseInt(propPowerInput ? propPowerInput.value : 25) || 25;
    const animDur = Math.max(0.01, 1 - pwr * 0.019);

    isPropellerActive = true;
    phoneImg.classList.add("propeller-active");
    phoneImg.style.animationDuration = animDur + "s";

    if (propellerTimeoutId) clearTimeout(propellerTimeoutId);
    propellerTimeoutId = setTimeout(() => {
      isPropellerActive = false;
      phoneImg.classList.remove("propeller-active");
      phoneImg.style.animationDuration = "";
      currentRotation = 0;
      targetRotation = 0;
    }, timeSec * 1000);
  }

  function buildPhotoCard() {
    const nick = cleanText(photoNickInput.value, 24) || "USER";
    const phone = phoneSelect.value;
    const data = phonesData[phone];

    pcNick.textContent = nick;
    pcPhone.textContent = data.name || phone;
    pcCpu.textContent = data.specs.processor || "Unknown";
    pcCam.textContent = data.specs.camera || "Unknown";

    toggleElement(photoModal, false);
    document.querySelector(".app-header").style.display = "none";
    document.getElementById("donation-bar").style.display = "none";
    document.getElementById("camera-viewfinder").style.display = "none";
    phoneInfoCont.style.display = "none";
    photoCardOverlay.classList.remove("hidden");
  }

  function closePhotoCard() {
    photoCardOverlay.classList.add("hidden");
    document.querySelector(".app-header").style.display = "";
    document.getElementById("donation-bar").style.display = "";
    if (viewfinderToggle && viewfinderToggle.checked) {
      document.getElementById("camera-viewfinder").style.display = "";
    }
    phoneInfoCont.style.display = "";
  }

  function renderEngine() {
    const now = performance.now();
    const dt = now - lastFrameTime;

    if (currentFpsLimit && currentFpsLimit < 120 && dt < 1000 / currentFpsLimit) {
      requestAnimationFrame(renderEngine);
      return;
    }
    lastFrameTime = now;
    frameCount++;

    if (now - lastFpsTime >= 1000) {
      if (fpsCounter) fpsCounter.innerText = frameCount + " FPS";
      frameCount = 0;
      lastFpsTime = now;
    }

    if (!isPropellerActive) {
      if (autoSpinMode && !isDragging) {
        targetRotation += 2;
      }

      if (isDragging || Math.abs(targetRotation - currentRotation) > 0.01 || autoSpinMode) {
        currentRotation += (targetRotation - currentRotation) * 0.15;
      }

      let transformStr = `perspective(1000px) rotateZ(${currentRotation}deg) scaleX(${stretchScale})`;

      if (shadowsToggle && shadowsToggle.checked && boostToggle && !boostToggle.checked) {
        const rx = mouseYPercent * 12;
        const ry = mouseXPercent * -12;
        transformStr += ` rotateX(${rx}deg) rotateY(${ry}deg)`;
      }

      if (phoneImg) phoneImg.style.transform = transformStr;

      const vFinder = document.getElementById("camera-viewfinder");
      const vHorizon = document.getElementById("viewfinder-horizon");
      if (vFinder && !vFinder.classList.contains("hidden") && vHorizon) {
        if (stabilizationToggle && stabilizationToggle.checked) {
          vHorizon.style.transform = `translate(-50%, -50%) rotate(${-currentRotation}deg)`;
        } else {
          vHorizon.style.transform = `translate(-50%, -50%) rotate(0deg)`;
        }
      }
    }
    requestAnimationFrame(renderEngine);
  }

  function handleDragStart(e) {
    if (e.target.closest(".modal-overlay") || e.target.closest(".app-header") || isPropellerActive || isDebugMode) return;
    e.preventDefault();
    isDragging = true;

    if (autoSpinMode) {
      autoSpinMode = false;
      if (autoSpinBtn) autoSpinBtn.classList.remove("active");
    }

    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;
    dragStartX = clientX;
    dragStartY = clientY;

    if (joystickEl) {
      joystickEl.style.left = clientX + "px";
      joystickEl.style.top = clientY + "px";
      joystickEl.classList.remove("hidden");
    }

    lastAngle = Math.atan2(clientY - dragStartY, clientX - dragStartX) * (180 / Math.PI);

    const moveHandler = ev => {
      if (!isDragging) return;
      const x = ev.type.includes("touch") ? ev.touches[0].clientX : ev.clientX;
      const y = ev.type.includes("touch") ? ev.touches[0].clientY : ev.clientY;
      const angle = Math.atan2(y - dragStartY, x - dragStartX) * (180 / Math.PI);

      let diff = angle - lastAngle;
      if (diff > 180) diff -= 360;
      if (diff < -180) diff += 360;

      lastAngle = angle;
      targetRotation += diff;
      checkFireEffect();

      const dx = x - dragStartX;
      const dy = y - dragStartY;
      const dist = Math.min(35, Math.hypot(dx, dy));
      const angRad = Math.atan2(dy, dx);

      if (joystickHandle) {
        joystickHandle.style.transform = `translate(-50%, -50%) translate(${dist * Math.cos(angRad)}px, ${dist * Math.sin(angRad)}px)`;
      }
    };

    const endHandler = () => {
      isDragging = false;
      if (joystickEl) joystickEl.classList.add("hidden");
      document.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseup", endHandler);
      document.removeEventListener("touchmove", moveHandler);
      document.removeEventListener("touchend", endHandler);
    };

    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseup", endHandler);
    document.addEventListener("touchmove", moveHandler, { passive: false });
    document.addEventListener("touchend", endHandler);
  }

  function checkFireEffect() {
    if (!whiteFireToggle || !whiteFireToggle.checked || (boostToggle && boostToggle.checked)) return;
    fireIntensity += 5;
    if (fireIntensity > 100 && fireEffectEl) fireEffectEl.classList.add("active");

    clearTimeout(fireTimeout);
    fireTimeout = setTimeout(() => {
      fireIntensity = 0;
      if (fireEffectEl) fireEffectEl.classList.remove("active");
    }, 200);
  }

  function applyBackgroundStyle() {
    if (!lightThemeToggle || !bgSelect) return;
    document.body.className = lightThemeToggle.checked ? "light-theme" : "dark-theme";
    if (/^bg-[a-z]+$/.test(bgSelect.value)) document.body.classList.add(bgSelect.value);
  }

  function applySettingsLogic() {
    const isBoost = boostToggle && boostToggle.checked;
    if (isBoost) {
      if (whiteFireToggle) whiteFireToggle.checked = false;
      if (shadowsToggle) shadowsToggle.checked = false;
      if (particlesObj) particlesObj.stop();
    } else {
      applyFxParticles();
    }

    updatePhoneSelection();
    applyBackgroundStyle();

    const vFinder = document.getElementById("camera-viewfinder");
    if (viewfinderToggle && vFinder) {
      if (viewfinderToggle.checked) vFinder.classList.remove("hidden");
      else vFinder.classList.add("hidden");
    }
  }

  function saveCurrentSettings() {
    const prefs = {
      lang: document.documentElement.lang,
      lightTheme: lightThemeToggle ? lightThemeToggle.checked : false,
      fxMode: activeFx,
      fire: whiteFireToggle ? whiteFireToggle.checked : false,
      shadows: shadowsToggle ? shadowsToggle.checked : false,
      stabilization: stabilizationToggle ? stabilizationToggle.checked : true,
      boost: boostToggle ? boostToggle.checked : false,
      viewfinder: viewfinderToggle ? viewfinderToggle.checked : false,
      bg: bgSelect ? bgSelect.value : "bg-default",
      stretch: stretchScale,
      fps: currentFpsLimit
    };
    localStorage.setItem("jxStabSettings_V3", JSON.stringify(prefs));
  }

  function loadSavedSettings() {
    let stored = null;
    try { stored = JSON.parse(localStorage.getItem("jxStabSettings_V3")); } catch (e) { stored = null; }
    if (stored && typeof stored !== "object") stored = null;
    if (stored) {
      if (lightThemeToggle) lightThemeToggle.checked = stored.lightTheme || false;
      activeFx = ["none", "snow", "text", "phones", "mix"].includes(stored.fxMode) ? stored.fxMode : "none";
      if (whiteFireToggle) whiteFireToggle.checked = stored.fire;
      if (shadowsToggle) shadowsToggle.checked = stored.shadows;
      if (stabilizationToggle) stabilizationToggle.checked = stored.stabilization;
      if (boostToggle) boostToggle.checked = stored.boost;
      if (viewfinderToggle) viewfinderToggle.checked = stored.viewfinder;
      if (bgSelect) bgSelect.value = stored.bg || "bg-default";
      if (stored.stretch) {
        stretchScale = Math.min(2, Math.max(0.5, Number(stored.stretch) || 1));
        if (stretchInput) stretchInput.value = stretchScale;
      }
      if (stored.fps) {
        currentFpsLimit = [30, 60, 120].includes(Number(stored.fps)) ? Number(stored.fps) : 60;
        if (fpsInput) fpsInput.value = currentFpsLimit;
      }
      if (fxButtons) {
        fxButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.fx === activeFx));
      }
    } else if (stabilizationToggle) {
      stabilizationToggle.checked = true;
    }
    applySettingsLogic();
  }

  initApplication();
});