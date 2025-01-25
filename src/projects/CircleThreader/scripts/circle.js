import '@/projects/CircleThreader/libs/victor.js';

export function Circle(svgParent, position, radius) {
    var _svgParent = svgParent,
        _radius = radius,
        _position = position.clone(),
        _svgElement,
        _color = '#ffffff',
        _alpha = 'ff',
        _initSvg = () => {
            _svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            _svgElement.setAttributeNS(null, 'cx', _position.x);
            _svgElement.setAttributeNS(null, 'cy', _position.y);
            _svgElement.setAttributeNS(null, 'r', _radius);
            _setColor(_color);
            _svgParent.appendChild(_svgElement);
        },
        _cleanUp = () => {
            // Do clean up
            _svgElement = null;
            _svgParent = null;
        },
        _setRadius = (r) => {
            _radius = r < 1 ? 1 : r;
            _svgElement.setAttributeNS(null, 'r', _radius);
        },
        _setAlpha = (alpha) => {
            _alpha = alpha;
            _setColor(_color);
        },
        _setColor = (color) => {
            _color = color;
            _svgElement.style.fill = color.includes('#') ? `${_color}${_alpha}` : `${_color}`;
        },
        _setPosition = (position) => {
            _position.x = position.x;
            _position.y = position.y;
            _svgElement.setAttributeNS(null, 'cx', _position.x);
            _svgElement.setAttributeNS(null, 'cy', _position.y);
        };

    _initSvg();

    return {
        cleanUp: _cleanUp,
        get color() {
            return _color;
        },
        get position() {
            return _position;
        },
        set position(pos) {
            _setPosition(pos);
        },
        set color(color) {
            _setColor(color);
        },
        set alpha(alpha) {
            _setAlpha(alpha);
        },
        get radius() {
            return _radius;
        },
        set radius(r) {
            _setRadius(r);
        },
        get svgElement() {
            return _svgElement;
        },
    };
}
