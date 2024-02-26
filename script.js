// Сменять картинку космоса при клике на изображение
    // Номер текущего изображения фона
    var i = 0; 
    // Массив с адресами фонов
    var images = ['img/space1.jpg', 'img/space2.jpg', 'img/space3.jpg', 'img/space4.jpg', 'img/space5.jpg'];
    
    // Сменить картинку фона космоса на следующую
    function changeSpace() {
        // Получить элемент с картинкой 
        var spaceImg = document.getElementById('space');

        // Добавить к картинке класс, активирующий анимацию смены картинки
        spaceImg.classList.add('animateSlide');

        // Через 600 мс сменить картинку на следующую (когда картинка уедет налево) 
        setTimeout(() =>{
            // Сменить индекс картинки на следующий 
            i = i + 1;

            // Если индекс больше чем адресов картинок в массиве, обнулить индекс
            if (i > images.length-1){
                i = 0;
            }

            // Сменить адрес картинки на текущий в массиве
            spaceImg.src = images[i];
        }, 600)


        // Через 1300 мс удалить класс с анимацией с картинки
        setTimeout(() => {
            spaceImg.classList.remove('animateSlide');
        },  1300);
    }



// Изменять тему по нажатию кнопки сменить тему
    function changeTheme() {
        // Включить или отключить класс blue-theme у элемента с класом .header и .footer
        document.getElementsByClassName('header')[0].classList.toggle('blue-theme');
        document.getElementsByClassName('footer')[0].classList.toggle('blue-theme');
    }


// Показывать описание книги при нажатии на неё
    // Прошлая открытая книга
    var lastBook = 0;

    function showBook(bookElement) {
        // Если описание прошлой книги сейчас открыто
        if (lastBook != 0){
            // Закрыть описание прошлой книги
            var lastDescription = lastBook.querySelector('.book-description');
            lastDescription.classList.toggle('show-description');
        }
        
        // Записать эту книгу как открытую
        lastBook = bookElement;
        // Найти элемент с описанием внутри элемента книги
        var description = bookElement.querySelector('.book-description');
        description.classList.toggle('show-description');
    }