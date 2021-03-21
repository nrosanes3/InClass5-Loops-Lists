window.addEventListener('load', function(e){
    let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
    let currentImg = 0;

    document.querySelector('.carousel>img').src = 'images/' + images[0];

    document.querySelector('.carousel').addEventListener('click', function(evt){
        let target = evt.target;
        if (target.classList.contains('control')){
            if (target.classList.contains('next')){
                currentImg +=1;
            } else if (target.classList.contains('prev')){
                currentImg -= 1;
            }
            if (currentImg > 2){
                currentImg = 2;
            }
            if (currentImg < 0){
                currentImg = 0;
            }
            document.querySelector('.carousel>img').src = 'images/' + images[currentImg];
        }
    })
})