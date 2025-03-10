# Моя сборка webpack для создания проектов на React.

### `npm start`

Запускает сборку на [http://localhost:8080]

### `npm run build`

Собирает сборку в dist.

# Структура проекта
ui хранит небольшие переиспользуемые компоненты: кнопки, заголовки, списки, карточки товара и другие элементы;
pages содержит компоненты — страницы приложения (главная, купить билет);
layout хранит компоненты, отвечающие за отображение обёртки для контента страниц (шапка, подвал и другие);
blocks включает большие компоненты страниц, которые пока не будут использоваться, но их полезно выделить для структурирования проекта.
app — это компонент приложения, своего рода точка входа в другие компоненты. Может возникнуть вопрос, зачем нужен App, когда всё можно поместить в index.js, но с развитием приложения мы поймём, что внутри app есть своя логика, которую удобно хранить в отдельном компоненте.
