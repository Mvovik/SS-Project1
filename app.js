const button = document.querySelector('.fans-post__form-textarea + button');
const appeal = document.querySelector('.fans-post__form-textarea');
const appealsParent = document.getElementsByClassName('article__wrapper')[0];
const date = new Date();


button.addEventListener('click', () => {
    if (appeal.value == "") {
        alert("Textarea must be filled out");
        return false;
    } else
        appealsParent.insertAdjacentHTML(
            'beforeend',
            `<article class="content__article fans-post__article">
        <p class="content__text fans-post__text">
        ${appeal.value}
        </p>
        <div class="fans-post__description">
        <span>${date.toLocaleDateString()}, ${date.toLocaleTimeString().slice(0,5)}</span>
        <h3>ShootingFan2000</h3>
        </div>
        </article>`
        )
    appeal.value = '';
})
