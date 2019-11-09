(function ($) {
    app.ui.addBinding(function (scope) {
        $('[data-rel=tooltip]', scope).tooltip({ container: 'body' });
        $('[data-rel=popover]', scope).popover({
            container: 'body',
            html: true,
            content: function () {
                return $(this).find('.popover-content-container').html();
            }
        });

        $('.panel-scroll', scope).slimscroll({
            height: '300px',
            color: '#0368b4',
            opacity: 1
        });

        //$('.fancy-box', scope).fancybox();

        $('.bx-slider', scope).each(function () {
            var slider = $(this);
            var slideMode = slider.attr('data-slide-mode') || 'horizontal';
            var slideWidth = slider.attr('data-slide-width') || undefined;
            var minSlides = slider.attr('data-min-slides') || 1;
            var maxSlides = slider.attr('data-max-slides') || 1;
            var slideMargin = 20;
            if ($.trim(slider.attr('data-slide-margin')).length > 0) {
                slideMargin = slider.attr('data-slide-margin');
            }
            var pager = slider.attr('data-pager') || false;
            var autoStart = slider.attr('data-auto-start') || false;
            var speed = slider.attr('data-speed') || 0;
            var delay = slider.attr('data-delay') || speed;
            slider.bxSlider({
                mode: slideMode,
                slideWidth: slideWidth,
                minSlides: minSlides,
                maxSlides: maxSlides,
                slideMargin: slideMargin,
                pager: pager,
                infiniteLoop: true,
                auto: autoStart,
                autoStart: autoStart,
                autoDelay: delay,
                speed: speed,
                controls: false
            });
        });

        $('.typeahead.users', scope).typeahead({
            name: 'users',
            remote: app.typeahead.users,
            template: [
                '<p>',
                '<img src="{{avatar}}" />',
                '<span class="fullname">{{fullname}}</span>',
                '<span class="username">{{username}}</span>',
                '</p>'
            ].join(''),
            engine: MicroTemplate,
            limit: 10
        });

        // comments
        $('#commentlistwrapper', scope).on('click', '.reply', function (ev) {
            var write = $('#commentaddwrapper');
            var li = $(this).closest('li');
            if (write && li) {
                li.append(write);

                write.find('.btn-cancel').show().removeClass('hide');
                write.find('#ParentId').val(li.attr('data-id'));
            }
            return false;
        });

        $('#commentlistwrapper', scope).on('click', '.comment-write .btn-cancel', function (ev) {
            var write = $('#commentaddwrapper');
            if (write && write.parent().attr('id') != 'commentlistwrapper') {
                $('#commentlistwrapper').append(write);

                write.find('.btn-cancel').hide();
                write.find('#ParentId').val('');
            }
            return false;
        });

        $('#commentlistwrapper', scope).on('click', '.like,.dislike', function (ev) {
            var me = $(this);
            var postData = {};
            postData[app.csrf.getKey()] = app.csrf.getValue();
            $.ajax(me.attr('href'), {
                type: 'POST',
                data: postData,
                success: function (response) {

                }
            });

            return false;
        });

        // search
        $('#searchdropdown').on('click', 'a', function (ev) {
            $('#searchform input[name="sid"]').val($(this).attr('data-sid'));

            $('#searchdropdown li').removeClass('active');
            $(this).parent().addClass('active');

            return true;
        });

        $(".search-close").click(function () {
            $('#searchBar').hide();
            $('#topBar').show();
        });

        /*
        $(".dropdown-toggle").click(
            function () {
                $(this).parent().addClass("open");
            },
            function () {
                $(this).parent().removeClass("open");
            }
        );
        */
        // seren
        $('.bxslider', scope).each(function (index, el) {
            var slider = $(el).bxSlider({
                auto: true,
                autoHover: true,
                pause: 3000,
                controls: true,
                hideControlOnEnd: true,
                pager: false
            });

            $(el).data('_slider', slider);
        });
    });

    app.ui.addAfterShown(function (target) {
        $('.bxslider', target).each(function () {
            var me = $(this);
            var slider = me.data('_slider');
            if (slider) {
                slider.reloadSlider();
            }
        });
    });

    $(function () {
        var MENU_SELECTOR = '#main-menu2';
        function handleMenuSelected(link, menuLiSelector, menuSelector) {
            var container = $(link).closest(menuSelector);

            $(menuLiSelector, container).removeClass('active');

            var li = $(link).closest('li');

            var parent = li.parent().parent();
            if (parent.is('li')) {
                $(menuLiSelector, container).each(function () {
                    if (!$.contains(parent[0], this)) {
                        $(this).removeClass('open').removeClass('active');
                    }
                });

                $(menuLiSelector + ' .submenu', container).each(function () {
                    if (!$.contains(parent[0], this)) {
                        $(this).hide();
                    }
                });

                if (!parent.hasClass('open')) {
                    //parent.addClass('open');
                }

                if (!parent.hasClass('active')) {
                    parent.addClass('active');
                }
            }

            li.addClass('active');
        };

        $(window).on(app.event.AJAXIFY_ACTIVATED, function () {
            $(MENU_SELECTOR).on('click', 'a', function (e) {
                //handleMenuSelected(this, 'li', MENU_SELECTOR);
            });

            $('.account-menu').on('click', 'a', function (e) {
                $('.account-menu li').removeClass('active');

                var li = $(this).closest('li');
                li.addClass('active');
            });
        });

        $(window).on(app.event.AJAXIFY_AFTER_HANDLE, function (e, data) {
            if (data.json.type === 'html') {                
                if (data.json.breadcrumb) {
                    for (var i = data.json.breadcrumb.items.length - 1; i >= 0; i--) {
                        var link = $(MENU_SELECTOR + ' li a[href="' + data.json.breadcrumb.items[i].url + '"]');
                        if (link.length > 0) {
                            link.each(function () {
                                handleMenuSelected($(this), 'li', MENU_SELECTOR);
                            });

                            break;
                        }
                    }
                }

                // when switching from front area to member area, target will not be found
                // in that case, force full reload
                var target = $('#' + data.json.target);
                if (target.length == 0) {
                    document.location.href = data.url;

                    // this will cause lost flash messages, find a way to persist them
                }
            }
        });

        $(document.body).on(app.event.MODAL_LOADED, function (e, slot, html, form) {
            // header
            var slotTitle = slot.ui.find('.modal-title');
            var pageHeader = $('.page-header', html);
            if (pageHeader.length > 0) {
                slotTitle.html(pageHeader.text());
                pageHeader.remove();
            }

            // form
            if (form) {
                $('.form-group > .col-sm-3', form).removeClass('col-sm-3').addClass('col-sm-12');
                $('.form-group > .col-sm-9', form).removeClass('col-sm-9').addClass('col-sm-12');
                $('.form-group > .col-sm-offset-3', form).removeClass('col-sm-offset-3');
                $('.form-group .control-label', form).removeClass('control-label');
            }

            // 
            var pageContainer = slot.ui.find('.page-container');
            if (pageContainer.length > 0) {
                pageContainer.removeClass('page-container').removeClass('page-style-flat');
            }

            var footer = slot.ui.find('.modal-footer');
            var links = slot.ui.find('.form-actions a');

            var linkWrapper = $('<div></div>');
            linkWrapper.addClass('modal-links');

            linkWrapper.appendTo(footer);

            links.appendTo(linkWrapper);
        });

        $(window).on(app.event.NAVIGATING, function (e, trigger) {
            trigger = $(trigger);

            if (trigger.hasClass('authenticated') && !app.authenticated) {
                var url = new Url(app.login);
                url.query['next'] = new Url().path;
                url = url.toString();

                app.ui.modal.open(url, trigger);

                e.preventDefault();
            }
        });

        $(window).on(app.event.AJAXIFY_NAVIGATED, function (e) {
            //$('[data-rel="tooltip"]').tooltip('hide');
            //$('[data-rel="popover"]').popover('hide');

            $('.tooltip').remove();
        });

        $(document.body).on('siteselected.app', function (ev, sid) {
            $('[data-site-aware]').each(function () {
                NProgress.done(true);
                NProgress.start();

                app.ui.load(this, true, { sid: sid }, function () {
                    NProgress.done();
                });
            });
        });

        if (app.site && app.site.selectedId) {
            $(document.body).trigger('siteselected.app', [app.site.selectedId]);
        }

        var video = document.getElementById("my-video");

        if (video && video.addEventListener) {
            video.addEventListener("canplay", function () {
                video.play();
            });
        }

        var wnd = $(window);
        var intro = $('.intro');

        /*
        var offsetTop = 0;
        if (intro.length > 0) {
            if ($('.intro').css('display') == 'none') {
            } else {
                offsetTop = (wnd.height() - 60);
            }
        }
        */
        /*
        function getOffset() {
            var offsetS = 0;
            if (intro.length > 0) {
                if ($('.intro').css('display') == 'none') {
                } else {
                    offsetS = (wnd.height() - 60);
                }
            }
            return offsetS;
        }
        $('#nav').affix({
            offset: {
                top: getOffset
            }
        }).on('affix.bs.affix', function () {
            $('#nav').css('top', 0);
            $('a.back-to-top').fadeIn('slow');
        }).on('affix-top.bs.affix', function () {
            $('a.back-to-top').fadeOut('slow');
        });
        */

        $('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');
        $('a.back-to-top').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 700);
            return false;
        });
        

        $(window).on(app.event.AJAXIFY_NAVIGATED, function (e) {
            intro.hide();
        });

        $('.dropdown').on('show.bs.dropdown', function (e) {
            var dd = $(this);
            dd.find('.dropdown-menu').first().show('slide', { direction: 'right' }, 100);
        });
        $('.dropdown').on('hide.bs.dropdown', function (e) {
            var dd = $(this);
            dd.find('.dropdown-menu').first().hide('slide', { direction: 'left' }, 100);
        });

        $('nav .navbar-nav > li > a').click(function () {
            if (scrollAnimate) {
                scrollAnimate();
            }            

            return true;
        });

        $('.ddm-open').show('slide', { direction: 'right' }, 200);

    });
})(jQuery);