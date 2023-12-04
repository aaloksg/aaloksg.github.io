import '../libs/victor.js';

export function Thread (svgParent, options) {
    var self = this,
        _svgParent = svgParent,
        _radius = options.circleRadius,
        _startPoint = options.circleCenter,
        _middlePoint = options.bouncingCircleCenter,
        _direction = options.direction.clone(),
        _color = options.color,
        _endPoint = _startPoint.clone().add(_direction.clone().multiply(new Victor(_radius,_radius))),
        _svgElement,

    _initSvg = () => {
        _svgElement = document.createElementNS( 'http://www.w3.org/2000/svg', 'polyline' );
        _svgElement.setAttributeNS(null, 'fill', 'none');
        _svgElement.setAttributeNS(null, 'stroke-width', 2);
        _svgElement.setAttributeNS(null, 'stroke', _color);
        _redraw();
        if (options.insertBefore) {
            _svgParent.insertBefore(_svgElement, options.insertBefore);
        } else {
            _svgParent.appendChild(_svgElement);
        }
    },

    _getPoints = () => {
        return `${_middlePoint.x},${_middlePoint.y} ${_endPoint.x},${_endPoint.y}`;
    },

    _redraw = () => {
        _svgElement.setAttributeNS(null, 'points', _getPoints());
    },

    _resize = (radius) => {
        _radius = radius;
        _endPoint = _startPoint.clone().add(_direction.clone().multiply(new Victor(_radius,_radius)));
    },
    
    _cleanUp = () => {
        // Do clean up
        _svgElement = null;
        _svgParent = null;
    },

    _setColor = (color) => {
        _color = color;
        _svgElement.setAttributeNS(null, 'stroke', _color);
    };

    _initSvg();

    return {
        cleanUp: _cleanUp,
        resize: _resize,
        get position () {
            return _position;
        },
        get end () {
            return _endPoint;
        },
        set position(pos) {
            _setPosition(pos);
        },
        set color(color) {
            _setColor(color);
        },
        get color () {
            return _color;
        },
        get radius () {
            return _radius;
        },
        set radius(r) {
            _setRadius(r);
        },
        redraw: _redraw,
        get svgElement () {
            return _svgElement;
        },
    };
};