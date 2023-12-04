export function AudioManager () {
    var _dings = [],
        _audioPlayed,
        STANDARD_VOLUME = 0.5,
    _init = () => {
        _dings.push(new Audio('CircleThreader/sounds/ding1.mp3'));
        _dings.push(new Audio('CircleThreader/sounds/ding2.mp3'));
        _dings.push(new Audio('CircleThreader/sounds/ding3.mp3'));
        _dings.forEach((ding) => {
            ding.loop = false;
            ding.volume = STANDARD_VOLUME;
        });
    },

    _setVolume = (vol) => {
        _dings.forEach((ding) => {
            ding.volume = vol;
        });
    },

    _stopAudio = (audio) => {
        if (!audio) {
            return;
        }
        audio.pause();
        audio.currentTime = 0;
    },

    _playDing = (index) => {
        _stopAudio(_audioPlayed);
        _audioPlayed = _dings[index] ?? _dings[0];
        _audioPlayed.play();
    },

    _playRandomDing = () => {
        _stopAudio(_audioPlayed);
        var index = Math.floor(Math.random() * (_dings.length));
        _audioPlayed = _dings[index]
        _audioPlayed.play();
    };

    _init();

    return {
        playDing: _playDing,
        playRandomDing: _playRandomDing,
        mute: () => {
            _setVolume(0);
        },
        unmute: () => {
            _setVolume(STANDARD_VOLUME);
        },
    };
};