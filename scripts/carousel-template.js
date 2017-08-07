
class CarouselTemplate {
    constructor(id, classes, perSlide, images) {
        this.id = id;
        this.classes = classes;
        this.perSlide = perSlide;
        this.images = images;
    }
    init() {
        const images = this.images;
        const slide = this.perSlide;
        function createInner(el) {


            let i;
            let counter = 0;
            const l = images.length / slide;
            function indicatorsTemplate(el) {
                let thisTemplate = ``;
                for (let i = 0; i < Math.ceil(l); i++) {
                    if (i === 0) {
                        thisTemplate += `<li data-target="#${el}" data-slide-to="${i}" class="active"></li>`;
                    } else {
                        thisTemplate += `<li data-target="#${el}" data-slide-to="${i}"></li>`
                    }
                }
                return thisTemplate;
            }
            let thisHTML = `
                <ol class="carousel-indicators">
                    ${indicatorsTemplate(el)}
                </ol>`;
            thisHTML += `<div class="carousel-inner" role="listbox">`;
            for (i = 0; i < l; i++) {
                thisHTML += `
                  <div class="item ${ counter === 0 ? 'active' : ' ' } ">
                `;
                let x;
                for (x = 0; x < slide ; x++) {
                    thisHTML += `<img class="img-responsive  by-width" src="${images[counter].url}" alt="${images[counter].alt}">`;
                    if (x % slide === 0 && x != 0) {
                        x = 0;
                    }
                    counter++;
                }
                thisHTML += `</div>`;
            }
            thisHTML += `</div>`;
            return thisHTML;
        }
        return `
            <div id="${this.id}" class="carousel slide ${this.classes}" data-ride="carousel">
                <!-- Wrapper for slides -->
                ${createInner(this.id)}
            </div>
        `;
    }
}
