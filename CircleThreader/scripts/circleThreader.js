import '../libs/victor.js';
import { Circle } from './circle.js';
import { Thread } from './thread.js';
import { ExplodingCircle } from './explodingCircle.js';
import { AudioManager } from './audioManager.js';

export function CircleThreader (svg) {
    var self = this,
        _svg = svg,
        _height = 0,
        _width = 0,
        _radius = 0,
        _centre = new Victor(0, 0),
        _resizeObserver,
        _circle,
        _bouncingCircle,
        _threads = [],

        _circleSpeed, // pixels / ms
        _bounceDirection = new Victor(0, 1),
        _lastFrameTime = 0,
        _frameId,
        _pauseFrameId,

        _pointerCoords = {},

        _radiusChangePolarity = -1,
        RADIUS_DELTA = 5,
        _lowerBound = 20,
        _upperBound,

        _minFrameTime = 50,

        _inProgress = false,

        _pauseStrokeWidth = 0,
        UPPER_PAUSE_STROKE_WIDTH = 20,
        PAUSE_STROKE_WIDTH_DELTA = 0.4,
        _pauseStrokeColor,

        _audioManager,

    _initSvg = () => {
        _height = _svg.clientHeight;
        _width = _svg.clientWidth;
        _calculateRadius();
        _circleSpeed = _radius / 1000, // pixels / ms
        _centre.x =  _width / 2;
        _centre.y =  _height / 2;
        _circle = new Circle(_svg, _centre, _radius);
        _circle.color = '#424242';
        _circle.svgElement.setAttributeNS(null, 'cursor', 'auto');
        _bouncingCircle = new Circle(_svg, _centre, _radius - 10);
        _bouncingCircle.color = '#c45911';
        _svg.style.cursor = 'pointer';
        
        _initEvents();
    },

    _initEvents = () => {
        // Init bouncing circle events
        _bouncingCircle.svgElement.addEventListener('pointerdown', _bouncingCirclePointerDown);
    },

    _bouncingCirclePointerDown = (evt) => {
        evt.stopPropagation();
        if (_inProgress) {
            _pauseBounce();
        }
        // Add pointer up
        window.addEventListener('pointerup', _bouncingCirclePointerUp);
        // Add pointer move.
        window.addEventListener('pointermove', _onPointerMove);
        // Add on blur event
        window.addEventListener('blur', _bouncingCirclePointerUp);

        _pointerCoords.x = evt.clientX;
        _pointerCoords.y = evt.clientY;
    },

    _removeAuxillaryEvents = () => {
        window.removeEventListener('pointerup', _bouncingCirclePointerUp);
        window.removeEventListener('pointermove', _onPointerMove);
        window.removeEventListener('blur', _bouncingCirclePointerUp);
    },

    _bouncingCirclePointerUp = (evt) => {
        evt.stopPropagation();
        _removeAuxillaryEvents();
    },

    _onPointerMove = (evt) => {
        var deltaX = evt.clientX - _pointerCoords.x, deltaY = evt.clientY - _pointerCoords.y;
        
        _pointerCoords.x = evt.clientX;
        _pointerCoords.y = evt.clientY;
        
        var newPosition = _bouncingCircle.position.clone().add(new Victor(deltaX, deltaY));
        _bounceDirection.x = deltaX;
        _bounceDirection.y = deltaY;
        _bounceDirection.normalize();
        
        if (_setBouncingCirclePosition(newPosition)) {
            _removeAuxillaryEvents();
            if (!_inProgress) {
                _startBounce();
            }
        }
    },

    _correctAngle = (vector) => {
        if (Math.abs(vector.x) < 0.001) {
            vector.x = 0;
        }
        if (Math.abs(vector.y) < 0.001) {
            vector.y = 0;
        }
    },

    _randomizeSpeed = () => {
        var max = _radius / 250, min = _radius / 1000;
        _circleSpeed = Math.random() * (max - min) + min;
    },

    _getRandomColorComponent = () => {
        var color = Math.floor(Math.random() * (256)).toString(16);
        return color.length < 2 ? `0${color}` : color;
    },

    _getRandomColor = () => {
        var r = _getRandomColorComponent(), g = _getRandomColorComponent(), b = _getRandomColorComponent();
        return `#${r}${g}${b}`;
    },

    _calculateRadius = () => {
        _radius = Math.min(_height, _width) / 2;
        _upperBound = _radius - RADIUS_DELTA;
    },

    _setPauseStrokeColor = () => {
        _pauseStrokeColor = _bouncingCircle.color + 'AA';
    },
    
    _onResize = () => {
        // Handle resize.
        _height = _svg.clientHeight;
        _width = _svg.clientWidth;
        _centre.x =  _width / 2;
        _centre.y =  _height / 2;
        _circle.position = _centre;
        _calculateRadius();

        _threads.forEach((thread) => thread.resize(_radius))
    },

    _varyBouncingCircleRadius = () => {        
        _bouncingCircle.radius = _bouncingCircle.radius + _radiusChangePolarity * RADIUS_DELTA;
        if (_bouncingCircle.radius < _lowerBound) {
            _bouncingCircle.radius = _lowerBound;
            _radiusChangePolarity = 1;
            return;
        }
        if (_bouncingCircle.radius >=  _upperBound) {
            _bouncingCircle.radius = _upperBound;
            _radiusChangePolarity = -1;
            return;
        }
    },

    _setBouncingCirclePosition = (newPosition) => {
        var length = newPosition.distance(_centre) + _bouncingCircle.radius, bounced = false;
        if (length >= _radius) {
            bounced = true;
            // Do bounce stuff
            // Color change
            _bouncingCircle.color = _getRandomColor();

            // direction to circle
            var directionToCircle = newPosition.clone();
            directionToCircle.subtract(_centre);
            directionToCircle.normalize();
            var distanceToCircle = directionToCircle.clone();

            // Vary bounce circle radius.
            _varyBouncingCircleRadius();

            newPosition = _centre.clone();
            distanceToCircle.multiply(new Victor(_radius - _bouncingCircle.radius, _radius - _bouncingCircle.radius))
            newPosition.add(distanceToCircle);
            
            // Draw thread.
            var thread = new Thread(
                _svg, 
                {
                    circleRadius: _radius, 
                    circleCenter: _circle.position, 
                    bouncingCircleCenter: _bouncingCircle.position, 
                    direction: directionToCircle.clone(), 
                    color: _bouncingCircle.color,
                    insertBefore: _bouncingCircle.svgElement,
                }
            );
            _threads.push(thread);
            thread.explode();

            // Explode circle
            new ExplodingCircle(_svg, thread.end, thread.color);

            // Play ding
            _audioManager.playRandomDing();

            // Direction change by random angle between 80 and 130 degrees.
            _bounceDirection.rotateDeg(Math.floor(Math.random() * (40) + 80));
            _correctAngle(_bounceDirection);

            // Speed change
            _randomizeSpeed();
        }
        _bouncingCircle.position = newPosition;

        _threads.forEach((thread) => thread.redraw());

        return bounced;
    },
    
    _bounceCirle = () => {
        var now = Date.now(), timeElapsed = now - _lastFrameTime;

        if (timeElapsed < _minFrameTime) {
            _frameId = requestAnimationFrame(_bounceCirle);
            return;
        }
        _lastFrameTime = now;

        var distance = timeElapsed * _circleSpeed;
        var newPosition = _bouncingCircle.position.clone();
        var direction = _bounceDirection.clone();
        direction.multiply(new Victor(distance, distance));
        newPosition.add(direction);

        _setBouncingCirclePosition(newPosition);

        _frameId = requestAnimationFrame(_bounceCirle);
    },

    _runPauseAnimation = () => {
        _pauseStrokeWidth += PAUSE_STROKE_WIDTH_DELTA;
        if (_pauseStrokeWidth > UPPER_PAUSE_STROKE_WIDTH){
            _pauseStrokeWidth = 0;
        }
        _bouncingCircle.svgElement.setAttributeNS(null, 'stroke-width', _pauseStrokeWidth);
        _pauseFrameId = requestAnimationFrame(_runPauseAnimation);
    },

    _startPauseAnimation = () => {
        _setPauseStrokeColor();
        _pauseStrokeWidth = 0;
        _bouncingCircle.svgElement.setAttributeNS(null, 'stroke', _pauseStrokeColor);
        _bouncingCircle.svgElement.setAttributeNS(null, 'stroke-width', _pauseStrokeWidth);
        _pauseFrameId = requestAnimationFrame(_runPauseAnimation);
    },

    _stopPauseAnimation = () => {
        _bouncingCircle.svgElement.setAttributeNS(null, 'stroke-width', 0);
        _pauseStrokeWidth = 0;
        cancelAnimationFrame(_pauseFrameId);
    },
    
    _startBounce = () => {
        _stopPauseAnimation();
        _inProgress = true;
        _lastFrameTime = Date.now();
        _frameId = requestAnimationFrame(_bounceCirle);
    },
    
    _pauseBounce = () => {
        _inProgress = false;
        cancelAnimationFrame(_frameId);
        _startPauseAnimation();
    },
    
    _cleanUp = () => {
        _bouncingCircle.svgElement.removeEventListener('pointerdown', _bouncingCirclePointerDown);
        _removeAuxillaryEvents();
        cancelAnimationFrame(_frameId);
        cancelAnimationFrame(_pauseFrameId);
        _resizeObserver.disconnect();
        _resizeObserver = null;
        _circle.cleanUp();
        _svg = null;
        _circle = null;
        _bouncingCircle.cleanUp();
        _bouncingCircle = null;
        _threads.forEach((thread) => thread.cleanUp());
        _threads = [];
    };
    
    _initSvg();
    _audioManager = new AudioManager();
    _startPauseAnimation();
    _resizeObserver = new ResizeObserver(_onResize);
    
    _resizeObserver.observe(_svg);



    return {
        cleanUp: _cleanUp,
        toggle: () => {
            if (_inProgress) {
                _pauseBounce();
            } else {
                _startBounce();
            }
        },
        stop: () => {
            if (_inProgress) {
                _pauseBounce();
            }
        },
        mute: () => {
            _audioManager?.mute();
        },
        unmute: () => {
            _audioManager?.unmute();
        },
    };
};