/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "dev.html",
    "revision": "534e7f263d1ad8c3867d0d7c43a67928"
  },
  {
    "url": "dev2.html",
    "revision": "02c8ae0bae25bf882c40d1b7c7447786"
  },
  {
    "url": "flip-cards.html",
    "revision": "306e87def18d4b6b4be2b4fcb60fdc39"
  },
  {
    "url": "javascript.html",
    "revision": "129ae69d0f9273884ce33b257e80a42c"
  },
  {
    "url": "video-background.html",
    "revision": "8b7d68b09143c564febf806042d1a4e8"
  },
  {
    "url": "assets/_data/cards-portfolio.json",
    "revision": "e13e23bb61b2d5ad9967996d5ce51867"
  },
  {
    "url": "assets/content/EmailMarketing/NewProduct/stylesheets/email.css",
    "revision": "7092a4f0eba15c5666c5d7dfc033c1b0"
  },
  {
    "url": "assets/css/fonts.css",
    "revision": "1c294b4c6f38cd3839586fa189c973a1"
  },
  {
    "url": "assets/css/swiper.css",
    "revision": "8b2d341f29130c911a6fd07f056a6488"
  },
  {
    "url": "assets/css/test.css",
    "revision": "4caad7d3083fe1b0be7ec24b3b9e8ddb"
  },
  {
    "url": "assets/css/theme-dark-mode.css",
    "revision": "417a3a7644e377c981109280fe6038f9"
  },
  {
    "url": "assets/css/TTII-DesignDev.css",
    "revision": "c90806742bcbdc396a72d5f09946a6a9"
  },
  {
    "url": "assets/fa-5140/css/brands.css",
    "revision": "6f401ab29d7a4d8dd943cae0d87f8362"
  },
  {
    "url": "assets/fa-5140/css/brands.min.css",
    "revision": "733eb07cd729deb0cbeb98919af9eaa6"
  },
  {
    "url": "assets/fa-5140/css/regular.css",
    "revision": "ed3b07cc320e884328bfcea970eda92d"
  },
  {
    "url": "assets/fa-5140/css/regular.min.css",
    "revision": "937d314b8b94ec1519066e40f410489e"
  },
  {
    "url": "assets/fa-5140/css/solid.css",
    "revision": "6b60bef98ded7f1d3b6cd3b662268423"
  },
  {
    "url": "assets/fa-5140/css/solid.min.css",
    "revision": "eaff8f91a0fa41a4237d2dd86a77163d"
  },
  {
    "url": "assets/fa-5140/css/svg-with-js.css",
    "revision": "e1473a28b6a842076684e0cecbb1fe4b"
  },
  {
    "url": "assets/fa-5140/css/svg-with-js.min.css",
    "revision": "9fdb84996e7caf24e943507643203ef4"
  },
  {
    "url": "assets/fa-5140/css/v4-shims.css",
    "revision": "151e4dc384ff258463dba3f06b6274f6"
  },
  {
    "url": "assets/fa-5140/css/v4-shims.min.css",
    "revision": "6594c66c112461991bc746527d86004b"
  },
  {
    "url": "assets/fa-5140/js/conflict-detection.js",
    "revision": "2cfcd9b1279f804a4ed354c7db030758"
  },
  {
    "url": "assets/fa-5140/js/conflict-detection.min.js",
    "revision": "3e6ba790007078ff5958bf7c75a3142d"
  },
  {
    "url": "assets/fa-5140/js/fontawesome.min.js",
    "revision": "0c4f2b4fea4f5d4b3336fb4b2a20f7ae"
  },
  {
    "url": "assets/fa-5140/js/v4-shims.js",
    "revision": "f745594c5f01c3960603b4e5ba36996a"
  },
  {
    "url": "assets/fa-5140/js/v4-shims.min.js",
    "revision": "cd53a56fd5accc9a5396a8eb66752d20"
  },
  {
    "url": "assets/fa-5140/metadata/shims.json",
    "revision": "bfc4c4e5da2c9ce5e35b87c968d82c71"
  },
  {
    "url": "assets/img/icons/bootstrap-icons-1.3.0/bootstrap-icons.json",
    "revision": "42ba37ed4dfda08a0c93290ea9a38fa3"
  },
  {
    "url": "assets/js/autofill-dectector/autofill-detector.js",
    "revision": "498e1ba65d16ab4c82abb17e0c4336ea"
  },
  {
    "url": "assets/js/even-height/even-height.js",
    "revision": "4c522817d6ff5f167d670903b447994a"
  },
  {
    "url": "assets/js/even-height/index.js",
    "revision": "f5eebe6229c613cceb5c6fe34ca29778"
  },
  {
    "url": "assets/js/HeathScript.js",
    "revision": "d9fabe62ec40ad1df7419c789e58a11d"
  },
  {
    "url": "assets/js/hs-3d-rotate/hs-3d-rotate.js",
    "revision": "6d98c602aaeee7cd37701bcdeb634c46"
  },
  {
    "url": "assets/js/hs-3d-rotate/index.js",
    "revision": "a6bbba5a484fd7c3d2b46a5779cd0f93"
  },
  {
    "url": "assets/js/hs-timeline/hs-timeline-ts.js",
    "revision": "1d13e5dc751312cc06c7a75d397e7f8c"
  },
  {
    "url": "assets/js/hs-timeline/hs-timeline.js",
    "revision": "2fa2e86cf79ac7eeafe45dbfdf278356"
  },
  {
    "url": "assets/js/hs-timeline/index.js",
    "revision": "19d31c69ac0f1b0eff0e41a5d2310605"
  },
  {
    "url": "assets/js/scss2cssVars/scss2cssVars.js",
    "revision": "c38306de22081d957d516e537a05a411"
  },
  {
    "url": "assets/js/show-more-fadebar/bak/show-more.js",
    "revision": "74826a1757d7754cca84a059e1648c2a"
  },
  {
    "url": "assets/js/show-more-fadebar/bak/show-more.snippit.js",
    "revision": "6ed59a26b747a152a3531ec80f36ea05"
  },
  {
    "url": "assets/js/test.js",
    "revision": "2d302d9271b706aec22c54de2f77ff15"
  },
  {
    "url": "assets/js/theme-switcher/index.js",
    "revision": "43ceef6e352451e1df2f9cf8aeb751c9"
  },
  {
    "url": "assets/js/theme-switcher/theme-switcher.js",
    "revision": "8f283d0614fbeb4c72ac9a265c251c89"
  },
  {
    "url": "assets/js/time-stamper/index.js",
    "revision": "e98e6c4549827db938c9ba8eb67693f0"
  },
  {
    "url": "assets/js/time-stamper/time-stamper-backup.js",
    "revision": "5c9ceb083bc0eee510446493ac468fe7"
  },
  {
    "url": "assets/js/time-stamper/time-stamper.js",
    "revision": "5c9ceb083bc0eee510446493ac468fe7"
  },
  {
    "url": "assets/js/validate-url/index.js",
    "revision": "237814bce853adc36b3abeb60c5b2a36"
  },
  {
    "url": "assets/js/validate-url/validate-url.js",
    "revision": "54a77892da634ad9d9c32ea165c87ea5"
  },
  {
    "url": "assets/js/vendor/jqBootstrapValidation.js",
    "revision": "dd9a308ce57e64ec43ec056c063b2d26"
  },
  {
    "url": "assets/js/vendor/jquery.ui.widget.js",
    "revision": "3d0f0f5ca5d86c5a4b4fc33cda374a17"
  },
  {
    "url": "components/app-globals-0f993ce5.js",
    "revision": "8372a2a3eccde49725077fdf00761935"
  },
  {
    "url": "components/css-shim-abbef754.js",
    "revision": "5ce075eff57f71311f45535212beb428"
  },
  {
    "url": "components/dom-fb6a473e.js",
    "revision": "4c1cc9e2d832758945f321474ac71db0"
  },
  {
    "url": "components/hs-back-to-top.entry.js",
    "revision": "0582ee6f01b924e299873756f8eb0695"
  },
  {
    "url": "components/hs-button.entry.js",
    "revision": "f7ac3082e1661cf2156c23fa1a0516a4"
  },
  {
    "url": "components/hs-card-body.entry.js",
    "revision": "0312f966c408b962d688970fa8aa1708"
  },
  {
    "url": "components/hs-card-button.entry.js",
    "revision": "7bebd90c884d8fbf88ad03a797c5466c"
  },
  {
    "url": "components/hs-card-footer.entry.js",
    "revision": "7bfb458ed9f2e2ef0617234e9dc8b43b"
  },
  {
    "url": "components/hs-card-header.entry.js",
    "revision": "2dd7cadbfea2756edc813bbcef8e12ea"
  },
  {
    "url": "components/hs-card-img-header.entry.js",
    "revision": "b84af50d997bbdfabd9e953680646db6"
  },
  {
    "url": "components/hs-card.entry.js",
    "revision": "4c37f0440f1e8035fd807a0018477621"
  },
  {
    "url": "components/hs-fetcher.entry.js",
    "revision": "67707ae6fcde959cda323709215dd628"
  },
  {
    "url": "components/hs-flipper.entry.js",
    "revision": "5bd750284a3c77d1b4c4e65e4b1dc642"
  },
  {
    "url": "components/hs-media-image.entry.js",
    "revision": "0fb19cbdf22d13ecb079b7c4f19b64d9"
  },
  {
    "url": "components/hs-media-item.entry.js",
    "revision": "a38534a9613d72f43ff6e777f54012af"
  },
  {
    "url": "components/hs-modal.entry.js",
    "revision": "2a1c03148677e729439e0f746dd95bfe"
  },
  {
    "url": "components/hs-progress-bar.entry.js",
    "revision": "ad69f47abfd13798c0b888896f5f399e"
  },
  {
    "url": "components/hs-progress.entry.js",
    "revision": "ca76b1acb30ca902cab9e13dbcc6b967"
  },
  {
    "url": "components/hs-rotator3d.entry.js",
    "revision": "230a1113d7327833fefc1b4bc1d0988a"
  },
  {
    "url": "components/hs-slider.entry.js",
    "revision": "b94ba4182f539880b1995ca8cb115e30"
  },
  {
    "url": "components/hs-sticky.entry.js",
    "revision": "51dc3631dabb5043e9043b1f80145744"
  },
  {
    "url": "components/hs-tab.entry.js",
    "revision": "615a82f45b2cfa795c5da7984ada13dc"
  },
  {
    "url": "components/hs-tabs.entry.js",
    "revision": "74be0f5bd2f41fc18d62a14495b472fc"
  },
  {
    "url": "components/hs-timeline-item.entry.js",
    "revision": "cd9865df053dfd0e2ceb16655b680442"
  },
  {
    "url": "components/hs-timeline.entry.js",
    "revision": "50eb6dc45690c36af8da80f63b7f6f21"
  },
  {
    "url": "components/index-012f6e02.js",
    "revision": "d3705e18ea0ad949116a5628d2e4c4c8"
  },
  {
    "url": "components/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "components/p-01ba47ab.entry.js"
  },
  {
    "url": "components/p-01e22d9a.entry.js"
  },
  {
    "url": "components/p-05012b44.entry.js"
  },
  {
    "url": "components/p-073944ff.entry.js"
  },
  {
    "url": "components/p-08b60e53.entry.js"
  },
  {
    "url": "components/p-16377a03.entry.js"
  },
  {
    "url": "components/p-191d0134.entry.js"
  },
  {
    "url": "components/p-192617cb.entry.js"
  },
  {
    "url": "components/p-1ccbbf93.entry.js"
  },
  {
    "url": "components/p-211c42df.entry.js"
  },
  {
    "url": "components/p-2233fdf4.entry.js"
  },
  {
    "url": "components/p-2582453e.entry.js"
  },
  {
    "url": "components/p-284eee02.entry.js"
  },
  {
    "url": "components/p-2d376790.entry.js"
  },
  {
    "url": "components/p-2f2cb478.entry.js"
  },
  {
    "url": "components/p-31ab7514.js"
  },
  {
    "url": "components/p-321bb4dc.entry.js"
  },
  {
    "url": "components/p-3dff6cee.entry.js"
  },
  {
    "url": "components/p-45210f50.entry.js"
  },
  {
    "url": "components/p-52df85fb.entry.js"
  },
  {
    "url": "components/p-5368a0cc.entry.js"
  },
  {
    "url": "components/p-56557113.entry.js"
  },
  {
    "url": "components/p-5fbdbc7e.entry.js"
  },
  {
    "url": "components/p-67f29d42.entry.js"
  },
  {
    "url": "components/p-6a299d1c.entry.js"
  },
  {
    "url": "components/p-6b10f5e6.entry.js"
  },
  {
    "url": "components/p-6e4a8b1b.entry.js"
  },
  {
    "url": "components/p-75951b06.entry.js"
  },
  {
    "url": "components/p-84064c8f.entry.js"
  },
  {
    "url": "components/p-8bcc6d76.entry.js"
  },
  {
    "url": "components/p-8c9f1b46.entry.js"
  },
  {
    "url": "components/p-91877407.entry.js"
  },
  {
    "url": "components/p-9858e49e.entry.js"
  },
  {
    "url": "components/p-9f73421c.entry.js"
  },
  {
    "url": "components/p-a1e95ba0.entry.js"
  },
  {
    "url": "components/p-a81d7bc9.entry.js"
  },
  {
    "url": "components/p-aeb3a34f.entry.js"
  },
  {
    "url": "components/p-b044bdf3.entry.js"
  },
  {
    "url": "components/p-b07750dd.entry.js"
  },
  {
    "url": "components/p-b298f745.entry.js"
  },
  {
    "url": "components/p-b4401363.entry.js"
  },
  {
    "url": "components/p-b69bf048.js"
  },
  {
    "url": "components/p-bc6a1e7a.entry.js"
  },
  {
    "url": "components/p-c19c4966.entry.js"
  },
  {
    "url": "components/p-c5c9b84c.entry.js"
  },
  {
    "url": "components/p-c97cad84.entry.js"
  },
  {
    "url": "components/p-d1961367.entry.js"
  },
  {
    "url": "components/p-d263027a.entry.js"
  },
  {
    "url": "components/p-d69f8e9f.entry.js"
  },
  {
    "url": "components/p-dc831be0.entry.js"
  },
  {
    "url": "components/p-e5171f3d.entry.js"
  },
  {
    "url": "components/p-eb0a1039.entry.js"
  },
  {
    "url": "components/p-ee2fe603.entry.js"
  },
  {
    "url": "components/p-efd30943.entry.js"
  },
  {
    "url": "components/p-f7a492be.entry.js"
  },
  {
    "url": "components/p-fb421050.entry.js"
  },
  {
    "url": "components/p-fc5bf42c.entry.js"
  },
  {
    "url": "components/p-fcf8cf9b.entry.js"
  },
  {
    "url": "components/p-fe37fadf.entry.js"
  },
  {
    "url": "components/shadow-css-23c95dd7.js",
    "revision": "5f5d3bc10391f18c64b6cfab54ad7468"
  },
  {
    "url": "global/3dRotator.json",
    "revision": "74fd2f82fd8dc13134985f4163e4f1db"
  },
  {
    "url": "global/variables.css",
    "revision": "1bf30925f8c655af5e7a20cca2d0d3da"
  },
  {
    "url": "php/vendor/composer/installed.json",
    "revision": "06159f2c18114d2119d125423a77f08f"
  },
  {
    "url": "php/vendor/phpmailer/phpmailer/composer.json",
    "revision": "d15b796eba5520ef91086db17777b459"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
