export default [
        {
            category:"develop",
            title:"Методологии разработки ПО",
            subtitle:"24ч. Уровень: Начальный",
            icon:"developer-board",
            text:["Предметом курса являются обзор различных методологий создания информационных систем, подходы к организации, планированию и управлению всем жизненным циклом разработки - от концепции до ввода в эксплуатацию."],
        },
        {
            category:"develop",
            title:"Паттерны проектирования и рефакторинг ПО",
            subtitle:"8ч. Уровень: Средний",
            icon:"lock-pattern",
            text:["Курс рассматривает причины появления \"запахов\" кода, различные приёмы рефакторинга и паттерны проектирования (GoF). "]
        },
        {
            category:"develop",
            title:"Использование XML, Xpath и XSLT",
            subtitle:"16ч. Уровень: Начальный",
            icon:"xml",
            text:["В курсе рассказывается о технологиях XML, XSD, XSLT, Xpath."]
        },
        {
            category:"develop",
            title:"Основы тестирования",
            subtitle:"8ч. Уровень: Начальный",
            icon:"test-tube",
            text:["В курсе описываюся теоретические основы процедуры тестирования, особое внимание уделяется документированию этого процесса."]
        },
        {
            category:"develop",
            title:"Тестирование REST API",
            subtitle:"16ч. Уровень: Средний",
            icon:"test-tube",
            text:["Курс посвящен вопросам тестирования и документирования REST API."]
        },
        {
            category:"develop",
            title:"Работа с системой контроля версий Git",
            subtitle:"16ч. Уровень: Начальный",
            icon:"git",
            disabled:false,
            file:"git.pdf",
            text:["Курс посвящен самой популярной системой контроля версий — Git."]
        },
        {
            id:"terraform",
            category:"devops",
            title:"Terraform: Инфраструктура как код (IaC)",
            icon:"terraform",
            duration:16,
            level:1,
            text:["Курс предназначен для системных администраторов, инженеров DevOps и инженеров облачных сервисов, желающих изучить вопросы применения Terraform для реализации подхода \"Инфраструктура как код\" "],
            skills:"Понимание работы API, умение работать с реактором кода",
            topics:[
                "Основы Terraform",
                "Синтаксис HCL",
                "Язык HCL — Блоки",
                "Модули в Terraform",
                "Работа с состоянием"
            ]
        },
        {
            id:"ansible",
            category:"devops",
            title:"Ansible: Управление конфигурациями",
            icon:"ansible",
            duration:24,
            level:1,
            text:["Курс предназначен для системных администраторов, инженеров DevOps и инженеров облачных сервисов, желающих получить навыки практического использования управления конфигурациями при помощи Ansible"],
            target:"",
            skills:"Знания и умения в объеме курса \"Использование GNU/Linux\", умение работать с редактором кода",
            topics:[
                "Установка Ansible",
                "Файлы конфигурации Ansible",
                "Использование файла инвентаризации (INI и YAML)",
                "Модули Ansible и использование Ad Hoc команд",
                "Основы написания Playbook в Ansible",
                "Работа с переменными (Variables) и фактами (Facts)",
                "Использование циклы (Loops) и условия (Conditions)",
                "Использование обработчиков (Handlers)",
                "Использование блоков (Blocks)",
                "Работа с файлами по шаблонам Jinja2",
                "Использование ролей в Ansible (Ansible Roles)",
                "Использование Ansible Galaxy"
            ]
        },
        {
            category:"devops",
            title:"Контейнеризация приложений при помощи Docker/Podman",
            subtitle:"16ч. Уровень: Начальный",
            icon:"docker",
            disabled:true,
            text:["Разработка курса запланирована на осень 2022г."]
        },
        {
            category:"devops",
            title:"Развертывание приложений в кластере Kubernetes",
            subtitle:"40ч. Уровень: Начальный",
            icon:"kubernetes",
            disabled:true,
            text:["Запланирована разработка курса"]
        },
        {
            category:"javascript",
            title:"Разработка веб-страниц с использованием HTML5 и CSS3",
            subtitle:"16ч. Уровень: Начальный",
            icon:"language-html5",
            disabled:true,    
            text:["Запланирована разработка курса."]
        },
        {
            category:"javascript",
            title:"JavaScript базовый",
            subtitle:"24ч. Уровень: Начальный",
            icon:"language-javascript",
            text:["Базовый курс по JavaScript. Подходит для обучения программированию с нуля."]
        },
        {
            category:"javascript",
            title:"Использование TypeScript",
            subtitle:"8ч. Уровень: Начальный",
            icon:"language-typescript",
            disabled:false,
            text:["В курсе рассматривается использование TypeScript, в том числе в ReactJS и VUE."]
        },
        {
            category:"javascript",
            title:"VUE - прогрессивный JS фреймворк",
            subtitle:"24ч. Уровень: Начальный",
            icon:"vuejs",
            text:["В курсе рассказывается как ведется разработка веб-интерфейсов при помощи Vue — прогрессивного JavaScript-фреймворка."]
        },
        {
            category:"javascript",
            title:"VUE - продвинутые темы",
            subtitle:"40ч. Уровень: Средний",
            icon:"vuetify",
            text:["В курсе рассматриваются \"продвинутые\" возможности использования фреймворка VUE."]
        },        
        {
            category:"javascript",
            title:"Основы разработки на ReactJS",
            subtitle:"16ч. Уровень: Средний",
            icon:"react",
            text:["В курсе рассказываются основные понятия ReactJS - библиотеки от разработчиков Facebook и Instagram."]
        },
        {
            category:"javascript",
            title:"Разработка на ReactJS",
            subtitle:"40ч. Уровень: Средний",
            icon:"react",
            text:["В курсе рассказывается как ведется разработка веб-интерфейсов при помощи библиотеки ReactJS от разработчиков Facebook и Instagram."]
        },
        {
            category:"javascript",
            title:"Дополнительные главы ReactJS",
            subtitle:"40ч. Уровень: Продвинутый",
            icon:"react",
            disabled:true,
            text:["Запланирована разработка курса."]
        },
        {
            category:"java",
            title:"Java базовый курс",
            subtitle:"40ч. Уровень: Начальный",
            icon:"language-java",
            text:["Базовый курс по Java SE. Подходит для обучения программированию с нуля."]
        },
        {
            category:"java",
            title:"Дополнительные главы Java SE",
            subtitle:"40ч. Уровень: Средний",
            icon:"language-java",
            text:["Продолжение базового курса по Java SE."]
        },
        {
            category:"java",
            title:"Spring Framework",
            subtitle:"40ч. Уровень: Средний",
            icon:"leaf",
            text:["В курсе рассматриваются вопросы современной Java-разработки с использованием Spring Framework."]
        },
        {
            category:"domino",
            title:"Администрирование HCL/IBM/Lotus Domino",
            subtitle:"40ч. Уровень: Начальный",
            icon:"account-group",
            text:["Курс посвящен вопросам установки, настройки и обслуживания сервера приложений HCL/IBM/Lotus Domino."]
        },
        {
            category:"domino",
            title:"Разработка классических приложений для HCL/IBM/Lotus Domino и Notes",
            subtitle:"40ч. Уровень: Начальный",
            icon:"account-group",
            text:["В данном курсе рассматриваются вопросы разработки приложений для сервера Domino и клиента Notes."]
        },
        {
            category:"domino",
            title:"Разработка web-приложений для HCL/IBM/Lotus Domino с использованием XPages",
            subtitle:"40ч. Уровень: Средний",
            icon:"account-group",
            text:["Данный курс продолжает курс для разработчиков и освещает вопросы разработки web-приложений с использованием технологии XPages."]
        },
        {
            category:"os",
            title:"Использование GNU/Linux",
            subtitle:"40ч. Уровень: Начальный",
            icon:"linux",
            disabled:true,
            text:["Запланирована разработка курса."]
        },
        {
            category:"os",
            title:"Администрирование GNU/Linux",
            subtitle:"40ч. Уровень: Средний",
            icon:"linux",
            disabled:true,
            text:["Запланирована разработка курса."]
        },
        {
            category:"database",
            title:"Администрирование MongoDB",
            subtitle:"40ч. Уровень: Начальный",
            icon:"database-outline",
            disabled:true,
            text:["Запланирована разработка курса."]
        },
        {
            category:"database",
            title:"Разработка с использованием MongoDB",
            subtitle:"40ч. Уровень: Начальный",
            icon:"database-outline",
            disabled:true,
            text:["Запланирована разработка курса."]
        }
]