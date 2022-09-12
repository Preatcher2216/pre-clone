<h1 style="text-align: center">
CRA Starter Kit
</h1>

---

<p style="text-align: center">Данный репозиторий содержит заготовку
проекта на основе CRA для базового стека</p>



## Roadmap
- [ ] Задокументировать все примеры где это необходимо
- [ ] Сделать примеры компонентов в папке shared
- [ ] Сделать примеры для разграничения роутинга по ролям
- [ ] Добавить пример с мульти лейаутом
- [ ] Добавить пример по работе со стилями
- [ ] Добавить докер файл и базовый конфиг nginx
- [ ] Добавить рекомендации к ведению файловой структуры, импортов, нейминга

## Cтек
- typescript
- react
- react-router
- redux
- @reduxjs/toolkit
- axios
- css modules(sass)
- classnames
- eslint
- husky
- lint-staged
- prettier

## Структура проекта
```
├── build                # результат билда
├── public               # публичные файлы, которые будут скопирваны в папку билда без пост/пре-процессинга
└── src                  # исходники
    ├── api              # содержит все что связано с api слоем
    │   ├── dto          # интерфейсы и типы для data transfer object
    │   ├── services     # классы для общения с апи
    │   └── interceptors # промежуточные обработчики серверных запросов
    ├── assets           # содержат статические ресурсы(картинки, css и прочее) используемые в процессе билда
    ├── modules          # большие фичи, обычно это страницы приложения
    │   └── Home         # пример - домашняя страница
    ├── services         # глобальные сервисы системы, могут быть перемещены в shared
    │   └── Auth         # сервис авторизации
    ├── shared           # переиспользуемый код приложения
    │   ├── components   # общие компоненты
    │   ├── constants    # общесистемные константы
    │   ├── hooks        # хуки реакта
    │   ├── layouts      # системные лэйауты
    │   ├── models       # интерфесы и методы для работы над сущностями
    │   └── utils        # методы и хелперы общего назначения
    ├── store            # стор - хранение данных
    └── typings          # глобальные типы .d.ts
```

## Общие рекомендации фаловой структуре
- С больших букв называются только компоненты, классы, типы или интерфейсы
- Допускются компоненты без папок, если компонент = 1 файл
