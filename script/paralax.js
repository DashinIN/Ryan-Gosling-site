

window.onload = function () {

    const paralax = document.querySelector('.paralax');

    if (paralax) {
        const headImage = document.querySelector('.paralax__image');

        const forImage = 30;
        
        const speed = 0.1;

        let positionX = 0, positionY = 0;
        let coordXpencent = 0, coordYpencent = 0;





        function setMouseParalaxStyle() {
            const distX = coordXpencent - positionX;
            const distY = coordYpencent - positionY;

            positionX+=distX*speed;
            positionY+=distY*speed;

            headImage.style.cssText = `transform: translate(${positionX/forImage}%, ${positionY/forImage}%);`;

          requestAnimationFrame(setMouseParalaxStyle);

        }

        setMouseParalaxStyle();

        paralax.addEventListener('mousemove', function(e) {

            const paralaxWidth = paralax.offsetWidth;
            const paralaxHeight = paralax.offsetHeight;

            const coordX = e.pageX- paralaxWidth/2;
            const coordY = e.pageY - paralaxHeight/2;

            coordXpencent = coordX / paralaxWidth*100;
            coordYpencent = coordY / paralaxHeight *100;
            

            console.log(coordX);
            console.log(coordY);
            console.log(coordXpencent);
            console.log(coordYpencent);


        })
    }

}