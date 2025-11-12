document.addEventListener('DOMContentLoaded', function() {

    // 1. Динамическое добавление стилей для темной темы
    const darkThemeStyles = `
        body.dark-mode {
            background-color: #121212;
            color: #e0e0e0;
        }
        body.dark-mode .title_products,
        body.dark-mode .product_title,
        body.dark-mode .product_price,
        body.dark-mode .rooms_title,
        body.dark-mode .sub_room_title {
            color: #ffffff;
        }
        body.dark-mode .product_description,
        body.dark-mode .product_sale,
        body.dark-mode .rooms_small_text,
        body.dark-mode .sub_room_small_text {
            color: #b0b0b0;
        }
        body.dark-mode .product,
        body.dark-mode .rooms_container {
            background-color: #1e1e1e;
        }
        body.dark-mode .button_show_more {
            background: #1e1e1e;
            color: #B88E2F;
            border-color: #B88E2F;
        }
        body.dark-mode .button_show_more:hover {
            background: #B88E2F;
            color: #ffffff;
        }
        body.dark-mode .button_explore_more {
            background: #B88E2F;
            color: #ffffff;
        }
        body.dark-mode .button_explore_more:hover {
            background: #ffffff;
            color: #B88E2F;
        }
        body.dark-mode .sub_room_container {
            background-color: rgba(40, 40, 40, 0.85);
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = darkThemeStyles;
    document.head.appendChild(styleSheet);

    // 2. Поиск кнопки в HTML
    const themeToggleButton = document.getElementById('theme-toggle-btn');

    // 3. Проверка и применение сохраненной темы
    // По умолчанию тема светлая. Код ниже применит темную тему,
    // только если она была сохранена при прошлом визите.
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleButton.innerText = '☀️';
    }

    // 4. Обработчик клика для переключения темы
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeToggleButton.innerText = '☀️';
        } else {
            themeToggleButton.innerText = '🌙';
        }
        localStorage.setItem('theme', theme);
    });
});