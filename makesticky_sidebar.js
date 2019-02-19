var mql = window['matchMedia']('screen and (min-width: 600px)');
if (mql['matches']) {
    function makemeSticky(_0xae2fx3) {
        function _0xae2fx4() {
            var _0xae2fx3 = _0xae2fx6['getBoundingClientRect']();
            _0xae2fx3['top'] < 0 ? (_0xae2fx5['className'] = _0xae2fx8 + ' makesticking', _0xae2fx5['style']['width'] = _0xae2fx7 + 'px') : _0xae2fx5['className'] = _0xae2fx8
        }
        var _0xae2fx5 = document['getElementById'](_0xae2fx3),
            _0xae2fx6 = document['createElement']('div');
        _0xae2fx5['parentNode']['insertBefore'](_0xae2fx6, _0xae2fx5);
        var _0xae2fx7 = _0xae2fx5['offsetWidth'],
            _0xae2fx8 = _0xae2fx5['className'] + ' makesticky';
        window['addEventListener']('scroll', _0xae2fx4, !1)
    }
    makemeSticky('sidebar')
};