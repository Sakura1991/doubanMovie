/**
 * Created by Administrator on 2016/10/23.
 */
(function () {
    var willModule = angular.module('doubanApp.willModule',[]);
    willModule.controller('WillCtrl',['$scope', function ($scope) {
            $scope.subjects=[
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "历史",
                        "战争"
                    ],
                    "title": "大会师",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1321811/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/51437.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/51437.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/51437.jpg"
                            },
                            "name": "王晖",
                            "id": "1321811"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1274228/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/710.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/710.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/710.jpg"
                            },
                            "name": "侯勇",
                            "id": "1274228"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1318604/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1464835121.86.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1464835121.86.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1464835121.86.jpg"
                            },
                            "name": "侯祥玲",
                            "id": "1318604"
                        }
                    ],
                    "collect_count": 47,
                    "original_title": "大会师",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1315152/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/28955.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/28955.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/28955.jpg"
                            },
                            "name": "安澜",
                            "id": "1315152"
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2391136541.jpg",
                        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2391136541.jpg",
                        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2391136541.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26897495/",
                    "id": "26897495"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "悬疑",
                        "惊悚"
                    ],
                    "title": "但丁密码",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1054450/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/551.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/551.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/551.jpg"
                            },
                            "name": "汤姆·汉克斯",
                            "id": "1054450"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1013981/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/42373.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/42373.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/42373.jpg"
                            },
                            "name": "费莉西蒂·琼斯",
                            "id": "1013981"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1040512/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/2150.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/2150.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/2150.jpg"
                            },
                            "name": "本·福斯特",
                            "id": "1040512"
                        }
                    ],
                    "collect_count": 567,
                    "original_title": "Inferno",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1031844/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1366641135.85.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1366641135.85.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1366641135.85.jpg"
                            },
                            "name": "朗·霍华德",
                            "id": "1031844"
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2388072933.jpg",
                        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2388072933.jpg",
                        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2388072933.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/24860318/",
                    "id": "24860318"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "喜剧"
                    ],
                    "title": "驴得水",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1362973/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/1475988303.89.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/1475988303.89.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/1475988303.89.jpg"
                            },
                            "name": "任素汐",
                            "id": "1362973"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1355797/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/1458442004.38.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/1458442004.38.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/1458442004.38.jpg"
                            },
                            "name": "大力",
                            "id": "1355797"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1337891/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/1392696207.67.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/1392696207.67.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/1392696207.67.jpg"
                            },
                            "name": "刘帅良",
                            "id": "1337891"
                        }
                    ],
                    "collect_count": 1661,
                    "original_title": "驴得水",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1362256/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1475988453.85.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1475988453.85.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1475988453.85.jpg"
                            },
                            "name": "周申",
                            "id": "1362256"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1362257/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/1475988524.57.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/1475988524.57.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/1475988524.57.jpg"
                            },
                            "name": "刘露",
                            "id": "1362257"
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2387822905.jpg",
                        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2387822905.jpg",
                        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2387822905.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/25921812/",
                    "id": "25921812"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "动画",
                        "奇幻",
                        "冒险"
                    ],
                    "title": "魔发精灵",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1040987/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/419.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/419.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/419.jpg"
                            },
                            "name": "贾斯汀·汀布莱克",
                            "id": "1040987"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1013789/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/31847.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/31847.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/31847.jpg"
                            },
                            "name": "安娜·肯德里克",
                            "id": "1013789"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1017966/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1761.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1761.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1761.jpg"
                            },
                            "name": "詹姆斯·柯登",
                            "id": "1017966"
                        }
                    ],
                    "collect_count": 49,
                    "original_title": "Trolls",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1292230/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                            },
                            "name": "迈克·米歇尔",
                            "id": "1292230"
                        },
                        {
                            "alt": null,
                            "avatars": null,
                            "name": "Walt Dohrn",
                            "id": null
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2387527802.jpg",
                        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2387527802.jpg",
                        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2387527802.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/7065238/",
                    "id": "7065238"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "惊悚",
                        "恐怖"
                    ],
                    "title": "枕边有张脸2",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1353049/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1448537867.92.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1448537867.92.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1448537867.92.jpg"
                            },
                            "name": "赵慧仙",
                            "id": "1353049"
                        },
                        {
                            "alt": null,
                            "avatars": null,
                            "name": "田家大",
                            "id": null
                        },
                        {
                            "alt": null,
                            "avatars": null,
                            "name": "胡睿",
                            "id": null
                        }
                    ],
                    "collect_count": 47,
                    "original_title": "枕边有张脸2",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1323628/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1435833583.66.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1435833583.66.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1435833583.66.jpg"
                            },
                            "name": "赵小溪",
                            "id": "1323628"
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2384442426.jpg",
                        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2384442426.jpg",
                        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2384442426.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26880771/",
                    "id": "26880771"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "惊悚",
                        "恐怖"
                    ],
                    "title": "育婴室",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1316703/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/1421138015.79.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/1421138015.79.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/1421138015.79.jpg"
                            },
                            "name": "邱敏敏",
                            "id": "1316703"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1318883/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1469384955.41.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1469384955.41.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1469384955.41.jpg"
                            },
                            "name": "朱一龙",
                            "id": "1318883"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1315812/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/39261.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/39261.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/39261.jpg"
                            },
                            "name": "徐洁儿",
                            "id": "1315812"
                        }
                    ],
                    "collect_count": 58,
                    "original_title": "育婴室",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1327529/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                            },
                            "name": "皮查农·塔玛杰拉",
                            "id": "1327529"
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2372301645.jpg",
                        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2372301645.jpg",
                        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2372301645.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26318896/",
                    "id": "26318896"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 7.1,
                        "stars": "35",
                        "min": 0
                    },
                    "genres": [
                        "剧情"
                    ],
                    "title": "导火新闻线",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1016771/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/45481.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/45481.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/45481.jpg"
                            },
                            "name": "吴孟达",
                            "id": "1016771"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1321491/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/1430325832.7.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/1430325832.7.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/1430325832.7.jpg"
                            },
                            "name": "周家怡",
                            "id": "1321491"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1305834/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1355903796.03.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1355903796.03.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1355903796.03.jpg"
                            },
                            "name": "杨淇",
                            "id": "1305834"
                        }
                    ],
                    "collect_count": 101,
                    "original_title": "導火新聞線",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": null,
                            "avatars": null,
                            "name": "方俊华",
                            "id": null
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2386843341.jpg",
                        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2386843341.jpg",
                        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2386843341.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26717012/",
                    "id": "26717012"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "喜剧"
                    ],
                    "title": "小明和他的小伙伴们",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1316368/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1473410979.5.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1473410979.5.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1473410979.5.jpg"
                            },
                            "name": "乔杉",
                            "id": "1316368"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1362516/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1474529068.86.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1474529068.86.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1474529068.86.jpg"
                            },
                            "name": "许君聪",
                            "id": "1362516"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1362518/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1474529389.5.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1474529389.5.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1474529389.5.jpg"
                            },
                            "name": "费伟妮",
                            "id": "1362518"
                        }
                    ],
                    "collect_count": 41,
                    "original_title": "小明和他的小伙伴们",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": null,
                            "avatars": null,
                            "name": "王鑫",
                            "id": null
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2382206861.jpg",
                        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2382206861.jpg",
                        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2382206861.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26869052/",
                    "id": "26869052"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "剧情",
                        "战争"
                    ],
                    "title": "何去何从",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1313655/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/42407.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/42407.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/42407.jpg"
                            },
                            "name": "中泉英雄",
                            "id": "1313655"
                        },
                        {
                            "alt": null,
                            "avatars": null,
                            "name": "漆子美",
                            "id": null
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1336630/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/1442643624.48.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/1442643624.48.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/1442643624.48.jpg"
                            },
                            "name": "李婳",
                            "id": "1336630"
                        }
                    ],
                    "collect_count": 18,
                    "original_title": "何去何从",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": null,
                            "avatars": null,
                            "name": "关晶",
                            "id": null
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2390248405.jpg",
                        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2390248405.jpg",
                        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2390248405.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26581128/",
                    "id": "26581128"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "惊悚",
                        "恐怖"
                    ],
                    "title": "恐怖笔记",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1324188/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1396248458.84.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1396248458.84.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1396248458.84.jpg"
                            },
                            "name": "赵泳鑫",
                            "id": "1324188"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1321055/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/50068.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/50068.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/50068.jpg"
                            },
                            "name": "檀健次",
                            "id": "1321055"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1337324/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1390480054.14.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1390480054.14.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1390480054.14.jpg"
                            },
                            "name": "冯家妹",
                            "id": "1337324"
                        }
                    ],
                    "collect_count": 49,
                    "original_title": "恐怖笔记",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1359365/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                            },
                            "name": "闵晋涛",
                            "id": "1359365"
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2389179356.jpg",
                        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2389179356.jpg",
                        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2389179356.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/25953613/",
                    "id": "25953613"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "儿童",
                        "喜剧",
                        "动画"
                    ],
                    "title": "功夫四侠",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1359920/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1468223589.2.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1468223589.2.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1468223589.2.jpg"
                            },
                            "name": "徐康",
                            "id": "1359920"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1345272/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1468222995.05.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1468222995.05.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1468222995.05.jpg"
                            },
                            "name": "朱蓉蓉",
                            "id": "1345272"
                        }
                    ],
                    "collect_count": 49,
                    "original_title": "功夫四侠",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1359893/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/1468218084.77.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/1468218084.77.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/1468218084.77.jpg"
                            },
                            "name": "刘邦邦",
                            "id": "1359893"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1359894/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/1468218137.08.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/1468218137.08.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/1468218137.08.jpg"
                            },
                            "name": "孙友树",
                            "id": "1359894"
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2367924473.jpg",
                        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2367924473.jpg",
                        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2367924473.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26831514/",
                    "id": "26831514"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 6.9,
                        "stars": "35",
                        "min": 0
                    },
                    "genres": [
                        "剧情",
                        "动作",
                        "悬疑"
                    ],
                    "title": "脑残粉",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1041117/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/1479.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/1479.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/1479.jpg"
                            },
                            "name": "沙鲁克·汗",
                            "id": "1041117"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1325052/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1353463815.65.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1353463815.65.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1353463815.65.jpg"
                            },
                            "name": "伊利亚娜·狄克鲁兹",
                            "id": "1325052"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1338020/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/214kd2VnJocel_avatar_uploaded1392369876.19.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/214kd2VnJocel_avatar_uploaded1392369876.19.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/214kd2VnJocel_avatar_uploaded1392369876.19.jpg"
                            },
                            "name": "瓦妮·卡普尔",
                            "id": "1338020"
                        }
                    ],
                    "collect_count": 469,
                    "original_title": "Fan",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1334355/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                            },
                            "name": "玛尼什·莎玛",
                            "id": "1334355"
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2358671873.jpg",
                        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2358671873.jpg",
                        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2358671873.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/25824009/",
                    "id": "25824009"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 8.5,
                        "stars": "45",
                        "min": 0
                    },
                    "genres": [
                        "动作",
                        "科幻"
                    ],
                    "title": "终结者2：审判日",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1035643/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/989.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/989.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/989.jpg"
                            },
                            "name": "阿诺·施瓦辛格",
                            "id": "1035643"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1027821/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/45249.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/45249.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/45249.jpg"
                            },
                            "name": "琳达·汉密尔顿",
                            "id": "1027821"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1022600/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/20874.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/20874.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/20874.jpg"
                            },
                            "name": "爱德华·福隆",
                            "id": "1022600"
                        }
                    ],
                    "collect_count": 168287,
                    "original_title": "Terminator 2: Judgment Day",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1022571/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/33715.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/33715.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/33715.jpg"
                            },
                            "name": "詹姆斯·卡梅隆",
                            "id": "1022571"
                        }
                    ],
                    "year": "1991",
                    "images": {
                        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p1910909085.jpg",
                        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1910909085.jpg",
                        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910909085.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/1291844/",
                    "id": "1291844"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "冒险",
                        "奇幻"
                    ],
                    "title": "奇异博士",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1009405/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/41072.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/41072.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/41072.jpg"
                            },
                            "name": "本尼迪克特·康伯巴奇",
                            "id": "1009405"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1025152/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/3546.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/3546.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/3546.jpg"
                            },
                            "name": "蒂尔达·斯文顿",
                            "id": "1025152"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1040529/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/57893.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/57893.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/57893.jpg"
                            },
                            "name": "麦斯·米科尔森",
                            "id": "1040529"
                        }
                    ],
                    "collect_count": 250,
                    "original_title": "Doctor Strange",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1320372/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/49077.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/49077.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/49077.jpg"
                            },
                            "name": "斯科特·德瑞克森",
                            "id": "1320372"
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2388132117.jpg",
                        "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2388132117.jpg",
                        "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2388132117.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/3025375/",
                    "id": "3025375"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "剧情",
                        "悬疑",
                        "惊悚"
                    ],
                    "title": "捉迷藏",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1015713/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1414655610.66.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1414655610.66.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1414655610.66.jpg"
                            },
                            "name": "霍建华",
                            "id": "1015713"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1274437/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/48635.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/48635.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/48635.jpg"
                            },
                            "name": "秦海璐",
                            "id": "1274437"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1315477/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1409894362.63.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1409894362.63.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1409894362.63.jpg"
                            },
                            "name": "万茜",
                            "id": "1315477"
                        }
                    ],
                    "collect_count": 125,
                    "original_title": "捉迷藏",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1274348/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/1372060655.97.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/1372060655.97.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/1372060655.97.jpg"
                            },
                            "name": "刘杰",
                            "id": "1274348"
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2388060654.jpg",
                        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2388060654.jpg",
                        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2388060654.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26757373/",
                    "id": "26757373"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "剧情",
                        "爱情",
                        "家庭"
                    ],
                    "title": "一句顶一万句",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1315488/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/1458782554.68.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/1458782554.68.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/1458782554.68.jpg"
                            },
                            "name": "毛孩",
                            "id": "1315488"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1313760/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/1411387657.99.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/1411387657.99.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/1411387657.99.jpg"
                            },
                            "name": "李倩",
                            "id": "1313760"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1304661/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/27755.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/27755.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/27755.jpg"
                            },
                            "name": "刘蓓",
                            "id": "1304661"
                        }
                    ],
                    "collect_count": 128,
                    "original_title": "一句顶一万句",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1361863/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/6hKOEUaShmkcel_avatar_uploaded1472732748.85.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/6hKOEUaShmkcel_avatar_uploaded1472732748.85.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/6hKOEUaShmkcel_avatar_uploaded1472732748.85.jpg"
                            },
                            "name": "刘雨霖",
                            "id": "1361863"
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2389970856.jpg",
                        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2389970856.jpg",
                        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2389970856.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26389466/",
                    "id": "26389466"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 6.8,
                        "stars": "35",
                        "min": 0
                    },
                    "genres": [
                        "剧情"
                    ],
                    "title": "盛先生的花儿",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1040392/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/47549.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/47549.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/47549.jpg"
                            },
                            "name": "颜丙燕",
                            "id": "1040392"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1316770/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/1421289595.95.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/1421289595.95.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/1421289595.95.jpg"
                            },
                            "name": "王德顺",
                            "id": "1316770"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1276893/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/43970.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/43970.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/43970.jpg"
                            },
                            "name": "艾丽娅",
                            "id": "1276893"
                        }
                    ],
                    "collect_count": 88,
                    "original_title": "盛先生的花儿",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1358857/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/1466329291.28.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/1466329291.28.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/1466329291.28.jpg"
                            },
                            "name": "朱员成",
                            "id": "1358857"
                        }
                    ],
                    "year": "2015",
                    "images": {
                        "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2389189579.jpg",
                        "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2389189579.jpg",
                        "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2389189579.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26779337/",
                    "id": "26779337"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "剧情",
                        "喜剧",
                        "爱情"
                    ],
                    "title": "不离不弃",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1315027/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/27989.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/27989.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/27989.jpg"
                            },
                            "name": "袁成杰",
                            "id": "1315027"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1318973/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/45144.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/45144.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/45144.jpg"
                            },
                            "name": "曹云金",
                            "id": "1318973"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1275719/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/33404.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/33404.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/33404.jpg"
                            },
                            "name": "江若琳",
                            "id": "1275719"
                        }
                    ],
                    "collect_count": 13,
                    "original_title": "不离不弃",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1317479/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/40005.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/40005.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/40005.jpg"
                            },
                            "name": "蒋钦民",
                            "id": "1317479"
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2390063620.jpg",
                        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2390063620.jpg",
                        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2390063620.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26828548/",
                    "id": "26828548"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "剧情",
                        "喜剧",
                        "爱情"
                    ],
                    "title": "非常父子档",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1274292/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/10300.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/10300.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/10300.jpg"
                            },
                            "name": "李治廷",
                            "id": "1274292"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1107868/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/40858.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/40858.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/40858.jpg"
                            },
                            "name": "金荷娜",
                            "id": "1107868"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1313976/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/26441.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/26441.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/26441.jpg"
                            },
                            "name": "文梅森",
                            "id": "1313976"
                        }
                    ],
                    "collect_count": 23,
                    "original_title": "非常父子档",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1345724/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                            },
                            "name": "曹溱模",
                            "id": "1345724"
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2391176999.jpg",
                        "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2391176999.jpg",
                        "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2391176999.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26253737/",
                    "id": "26253737"
                },
                {
                    "rating": {
                        "max": 10,
                        "average": 0,
                        "stars": "00",
                        "min": 0
                    },
                    "genres": [
                        "喜剧",
                        "运动"
                    ],
                    "title": "笑林足球",
                    "casts": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1275268/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/19696.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/19696.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/19696.jpg"
                            },
                            "name": "信",
                            "id": "1275268"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1314048/",
                            "avatars": {
                                "small": "https://img3.doubanio.com/img/celebrity/small/22025.jpg",
                                "large": "https://img3.doubanio.com/img/celebrity/large/22025.jpg",
                                "medium": "https://img3.doubanio.com/img/celebrity/medium/22025.jpg"
                            },
                            "name": "周奇奇",
                            "id": "1314048"
                        },
                        {
                            "alt": "https://movie.douban.com/celebrity/1316230/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/1394666862.9.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/1394666862.9.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/1394666862.9.jpg"
                            },
                            "name": "张继聪",
                            "id": "1316230"
                        }
                    ],
                    "collect_count": 42,
                    "original_title": "笑林足球",
                    "subtype": "movie",
                    "directors": [
                        {
                            "alt": "https://movie.douban.com/celebrity/1314402/",
                            "avatars": {
                                "small": "https://img1.doubanio.com/img/celebrity/small/33988.jpg",
                                "large": "https://img1.doubanio.com/img/celebrity/large/33988.jpg",
                                "medium": "https://img1.doubanio.com/img/celebrity/medium/33988.jpg"
                            },
                            "name": "林子聪",
                            "id": "1314402"
                        }
                    ],
                    "year": "2016",
                    "images": {
                        "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2388701313.jpg",
                        "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2388701313.jpg",
                        "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2388701313.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/26547005/",
                    "id": "26547005"
                }
            ]
    }])
})();