<h1 style="text-align: center">
CRA Starter Kit
</h1>

---

<p style="text-align: center">Данный репозиторий содержит заготовку
проекта на основе CRA для базового стека</p>



## Roadmap
- [ ] Задокументировать все примеры где это необходимо ([JIM-68](https://youtrack.inostudio.net/issue/JIM-68))
- [ ] Сделать примеры компонентов в папке shared ([JIM-69](https://youtrack.inostudio.net/issue/JIM-69))
- [ ] Сделать примеры для разграничения роутинга по ролям ([JIM-70](https://youtrack.inostudio.net/issue/JIM-70))
- [ ] Добавить пример с мульти лейаутом ([JIM-71](https://youtrack.inostudio.net/issue/JIM-71))
- [ ] Добавить пример по работе со стилями ([JIM-72](https://youtrack.inostudio.net/issue/JIM-72))
- [ ] Добавить докер файл и базовый конфиг nginx ([JIM-73](https://youtrack.inostudio.net/issue/JIM-73))

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
├── build                         # результат билда
├── public                        # публичные файлы, которые будут скопирваны в папку билда без пост/пре-процессинга
└── src                           # исходники
    ├── api                       # содержит все что связано с api слоем
    │   ├── dto                   # интерфейсы и типы для data transfer object
    │   ├── services              # классы для общения с апи
    │   └── interceptors          # промежуточные обработчики серверных запросов
    ├── assets                    # содержат статические ресурсы(картинки, css и прочее) используемые в процессе билда
    ├── modules                   # большие фичи, обычно это страницы приложения
    │   └── Home                  # пример - домашняя страница
    ├── services                  # глобальные сервисы системы, могут быть перемещены в shared
    │   └── Auth                  # сервис авторизации
    ├── shared                    # переиспользуемый код приложения
    │   └── ...shared
    ├── store                     # стор - хранение данных
    └── typings                   # глобальные типы .d.ts
```

```
── shared            # переиспользуемый код приложения, может быть использован как на уровне всего приложение, так и отдельного модуля
    ├── components   # общие компоненты
    ├── constants    # общесистемные константы
    ├── hooks        # хуки реакта
    ├── layouts      # системные лэйауты
    ├── models       # интерфесы и методы для работы над сущностями
    └── utils        # методы и хелперы общего назначения
```

```
── Home                       # пример модуля
    ├── index.ts              # файл для экспорта
    ├── Home.tsx              # файл компонета
    ├── Home.module.scss      # файл стилей
    └── ...shared             # может содержать любую папку из shared для использования переиспользуемого кода на уровне модуля
```

## Общие рекомендации

[styleguide](https://git.inostudio.net/jim/style-guide/-/blob/main/style-guide.md)
