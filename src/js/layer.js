/**
 * layer.js
 * 弹层插件
 */


(function () {
    function Layer ( layer, config ) {
        this.layer = layer;
        this.config = config;
    }

    Layer.prototype = {

        getHeight: function () {
            var titleH = this.layer.find('.layer-title').length > 0 ? 51: 0,
                contH = this.layer.find('.layer-cont').outerHeight(),
                bottomH = this.layer.find('.layer-bottom').length > 0 ? 56 : 0;

            return titleH + contH + bottomH;
        },

        show: function ( callback ) {

            if ( typeof this.config != 'undefined' && this.config.animate ) {
                this.layer.addClass('animated bounceIn');
            }
            this.layer.show();
            this.layer.height( this.getHeight() );

            // page layer
            $('#J-page-layer').show();

            this.layer.css({
                opacity: 1
            });

            var _this = this;

            this.layer.find('.layer-close').click(function () {
                _this.close();
                return false;
            });
            callback&&callback(this.layer);
        },

        close: function () {
            $('#J-page-layer').hide();
            this.layer.remove();
        }

    };
    window.Layer = Layer;
})();