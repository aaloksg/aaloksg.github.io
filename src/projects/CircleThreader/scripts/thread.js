import '@/projects/CircleThreader/libs/victor.js';

export function Thread(svgParent, options) {
    var _svgParent = svgParent,
        _radius = options.circleRadius,
        _startPoint = options.circleCenter,
        _middlePoint = options.bouncingCircleCenter,
        _direction = options.direction.clone(),
        _color = options.color,
        _endPoint = _startPoint
            .clone()
            .add(_direction.clone().multiply(new Victor(_radius, _radius))),
        _svgElement,
        STROKE_WIDTH = 2,
        _exploding = false,
        _explodingStrokeWidth = 0,
        UPPER_STROKE_WIDTH = 25,
        STROKE_WIDTH_DELTA = 0.5,
        EXPLODE_ALPHA = 'BB',
        _explodingStrokeColor = _color + EXPLODE_ALPHA,
        _explodingSvg,
        _explodingFrameId,
        _explode = () => {
            _explodingStrokeWidth += STROKE_WIDTH_DELTA;
            _explodingSvg.setAttributeNS(null, 'stroke-width', _explodingStrokeWidth);
            if (_explodingStrokeWidth <= UPPER_STROKE_WIDTH) {
                _explodingFrameId = requestAnimationFrame(_explode);
            } else {
                _finishExplosion();
            }
        },
        _createExplosion = () => {
            _explodingStrokeWidth = STROKE_WIDTH;
            _explodingStrokeColor = _color + EXPLODE_ALPHA;
            _explodingSvg = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
            _explodingSvg.setAttributeNS(null, 'fill', 'none');
            _explodingSvg.setAttributeNS(null, 'stroke-width', _explodingStrokeWidth);
            _explodingSvg.setAttributeNS(null, 'stroke', _explodingStrokeColor);
            _explodingSvg.setAttributeNS(null, 'cursor', 'auto');
            _redraw();
            _svgParent.insertBefore(_explodingSvg, options.insertBefore || _svgElement);
        },
        _finishExplosion = () => {
            _exploding = false;
            _svgParent.removeChild(_explodingSvg);
            _explodingSvg = null;
            cancelAnimationFrame(_explodingFrameId);
            _explodingFrameId = undefined;
        },
        _startExplosion = () => {
            if (_exploding) {
                return;
            }
            _exploding = true;
            _createExplosion();
            _explodingFrameId = requestAnimationFrame(_explode);
        },
        _initSvg = () => {
            _svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
            _svgElement.setAttributeNS(null, 'fill', 'none');
            _svgElement.setAttributeNS(null, 'stroke-width', STROKE_WIDTH);
            _svgElement.setAttributeNS(null, 'stroke', _color);
            _svgElement.setAttributeNS(null, 'cursor', 'auto');
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
            _explodingSvg?.setAttributeNS(null, 'points', _getPoints());
        },
        _resize = (radius) => {
            _radius = radius;
            _endPoint = _startPoint
                .clone()
                .add(_direction.clone().multiply(new Victor(_radius, _radius)));
        },
        _cleanUp = () => {
            // Do clean up
            if (_exploding) {
                _finishExplosion();
            }
            _svgParent.removeChild(_svgElement);
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
        get position() {
            return _position;
        },
        get end() {
            return _endPoint;
        },
        set position(pos) {
            _setPosition(pos);
        },
        set color(color) {
            _setColor(color);
        },
        get color() {
            return _color;
        },
        get radius() {
            return _radius;
        },
        set radius(r) {
            _setRadius(r);
        },
        redraw: _redraw,
        get svgElement() {
            return _svgElement;
        },
        explode: _startExplosion,
    };
}
