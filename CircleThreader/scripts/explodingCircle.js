import '../libs/victor.js';

export function ExplodingCircle (svgParent, position, color) {
    var self = this,
        _svgParent = svgParent,
        _position = position.clone(),
        _svgElement,
        _color = color,
        RADIUS = 10,

        _strokeWidth = 0,
        UPPER_STROKE_WIDTH = 25,
        STROKE_WIDTH_DELTA = 1,
        EXPLODE_ALPHA = 'AA',
        _strokeColor = color + EXPLODE_ALPHA,

    _initSvg = () => {
        _svgElement = document.createElementNS( 'http://www.w3.org/2000/svg', 'circle' );
        _svgElement.setAttributeNS(null, 'cx', _position.x);
        _svgElement.setAttributeNS(null, 'cy', _position.y);
        _svgElement.setAttributeNS(null, 'r', RADIUS);
        _svgElement.setAttributeNS(null, 'stroke-width', _strokeWidth);
        _svgElement.setAttributeNS(null, 'stroke', _strokeColor);
        _svgElement.setAttributeNS(null, 'cursor', 'auto');
        _svgElement.style.fill = `${_color}`;
        _svgParent.appendChild(_svgElement);
    },

    _explode = () => {
        _strokeWidth += STROKE_WIDTH_DELTA;
        _svgElement.setAttributeNS(null, 'stroke-width', _strokeWidth);
        if (_strokeWidth <= UPPER_STROKE_WIDTH) {
            requestAnimationFrame(_explode);
        } else {
            _cleanUp();
        }
    },
    
    _cleanUp = () => {
        // Do clean up
        _svgParent.removeChild(_svgElement);
        _svgElement = null;
        _svgParent = null;
    };

    _initSvg();
    requestAnimationFrame(_explode);

    return {
        cleanUp: _cleanUp
    };
};