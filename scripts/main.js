const DOT_CONTAINER_CLASS = 'dot-container only-in-portrait';
const DOT_CLASS = 'dot-div';
const ACTIVE_DOT_CLASS = `${DOT_CLASS} active`;
const INTERSECTION_OPTIONS = {
    threshold: 0.7,
  };

(function Initializer () {
    // Initialize the scroll indicators.
    const _sections = document.getElementsByClassName('section');
    const TRANSLATE_Y = 1;

    if (!_sections?.length) {
        return;
    }
    

    const _getDotTranslate = (dotIndex) => {
        return `translateY(${dotIndex * TRANSLATE_Y}em)`;
    };

    const _goToSection = (dotIndex) => {
        _sections[dotIndex].scrollIntoView({
            behavior: 'smooth'
        });
        _setActiveDot(dotIndex);
    };

    const dotContainer = document.createElement('div');
    dotContainer.className = DOT_CONTAINER_CLASS;
    document.body.appendChild(dotContainer);

    const _activeDot = document.createElement('div');
    _activeDot.className = ACTIVE_DOT_CLASS;

    const ACTIVE_DOT_LAG = 200;
    let _activeDotTimer;
    let _activeDotIndex = 0;
    const _setActiveDot = (dotIndex) => {
        _activeDotIndex = dotIndex;
        if (_activeDotTimer){
            clearTimeout(_activeDotTimer);
        }
        _activeDotTimer = setTimeout(() => {
            _activeDot.style.transform = _getDotTranslate(_activeDotIndex);
            _activeDotTimer = null;
        }, ACTIVE_DOT_LAG);
    };

    const {length} = _sections;
    for (let index = 0; index < length; index++) {
        const section = _sections[index];
        const dotDiv = document.createElement('div');
        dotDiv.className = DOT_CLASS;
        const transform = _getDotTranslate(index);
        dotDiv.style.transform = transform;
        dotContainer.appendChild(dotDiv);

        dotDiv.addEventListener('click', () => {
            _goToSection(index);
        });
            
        new IntersectionObserver(() => {
            _setActiveDot(index);
        }, INTERSECTION_OPTIONS).observe(section);
    }
    
    dotContainer.appendChild(_activeDot);

    _goToSection(0);
})();