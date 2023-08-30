var F1DataVis = F1DataVis || {};
F1DataVis.IdStore = F1DataVis.IdStore || {};

F1DataVis.slider = function ( parent, width, id, cbFunction ) {
    var _height = 15,
        _width = width,
        _xPos = 0,
        _yPos = 0,
        _id = id,
        _parent = parent,
        _sliderGrp,
        _rect,
        _transitionSpeed = 1500,
        _callback = cbFunction,
        _textProps = {
            smallFontSize: 14,
            smallBBox: {},
                fontFamily: 'bahnschrift',
            largeFontSize: 22,
            largeBBox: {}
        },

        _init = function () {

        // Create group for slider and append to main svg
            _sliderGrp = _parent
                .append( 'g' )
                .attr( 'id', _id )
                .attr( 'transform', 'translate(' + _xPos + ',' + _yPos + ')' );
            _rect = _buttonSVG
                .append( 'rect' )
                .attr( 'x', 0 )
                .attr( 'y', 0 )
                .attr( 'width', _size )
                .attr( 'height', _size )
                .attr( 'rx', _size * 0.25 )
                .attr( 'ry', _size * 0.25 )
                .attr( 'stroke', '#005AD4' )
                .attr( 'stroke-width', 1 );
        },
        _createPath = function () {
            var path = [];
            if ( _isLeft ) {
                path.push( [_size * 0.75, _size * 0.25] );
                path.push( [_size * 0.25, _size * 0.5] );
                path.push( [_size * 0.75, _size * 0.75] );
            } else {
                path.push( [_size * 0.25, _size * 0.25] );
                path.push( [_size * 0.75, _size * 0.5] );
                path.push( [_size * 0.25, _size * 0.75] );
            }
            return path;
        },
        _onClicked = function () {
            _callback( _isLeft );
        };

    _init();
};