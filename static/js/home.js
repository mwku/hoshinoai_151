let page = 0;
let isplay = false;
let isask = false;
let ismusic = false;
let playing = false;
const audio = new Audio('./static/mp3/idol.mp3');
audio.loop = true;
const music_data = [
    'https://open.spotify.com/embed/track/7ovUcF5uHTBRzUpB6ZOmvt?utm_source=generator',
    'https://open.spotify.com/embed/track/0T4AitQuq8IJhWBWuZwkFA?utm_source=generator',
    'https://open.spotify.com/embed/track/3dPtXHP0oXQ4HCWHsOA9js?utm_source=generator',
    'https://open.spotify.com/embed/track/62Lv9WcrfzJqhvYDbilJy3?utm_source=generator',
    'https://open.spotify.com/embed/track/5ptl2PXkiSth54HCuGO7vN?utm_source=generator',
    `https://open.spotify.com/embed/track/5NxmDq0yXBYGfCbMqvIXuv?utm_source=generator`,
    `https://open.spotify.com/embed/track/42lDvdAmBr7H5hLzvr882L?utm_source=generator`,
    `https://open.spotify.com/embed/track/43DrDpSiIZWEiEfsQQHoQi?utm_source=generator`
];
function playAudio() {
    audio.play().then(() => {
        document.removeEventListener('pointerdown', playAudio);
    }).catch((error) => {
        console.error('播放失敗：', error);
    });
}

function iframeLoaded() {
    const old = document.getElementById('music_box');
    const music_area = document.getElementById('music_box_new');
    music_area.hidden = false;
    music_area.style.animation = 'in_r 0.3s';
    old.remove();
    music_area.id = 'music_box';
}
document.addEventListener('DOMContentLoaded', function () {
    const backgroundImg = document.getElementById('bg');

    function handleAnimationEnd() {
        backgroundImg.style.animation = 'backgroundImg 3s infinite';
        backgroundImg.removeEventListener('animationend', handleAnimationEnd);
    }

    backgroundImg.addEventListener('animationend', handleAnimationEnd);

    function CreateOneLineTextBox(content) {
        return `<div class="text-box_oneLine"><div class="text-index"><p>${content}</p></div></div>`
    }
    function CreateTwoLineTextBox(content) {
        return `<div class="text-box_twoLine"><div class="text-index"><p>${content}</p></div></div>`
    }
    function CreateThreeLineTextBox(content) {
        return `<div class="text-box_threeLine"><div class="text-index"><p>${content}</p></div></div>`
    }

    let isPageChanging = true;
    const main = document.getElementById('main');
    function changepage() {
        if (ismusic && playing) {
            audio.play();
            const playbutton = document.getElementById('PlayButton');
            playbutton.src = './static/img/stop.png';
        }
        if (page === 0) {
            const igicon = new Image();
            igicon.src = './static/img/igicon.jpg';
            igicon.alt = 'icon';
            igicon.className = 'igicon';
            igicon.onload = function () {
                main.appendChild(igicon);
                const igname = '<div class="igname"><p>hoshinoai_151</p></div>'
                const slide_up = '<div class="slide-up"><p>▲</p><p>向上滑動</p></div>'
                setTimeout(function () {
                    main.insertAdjacentHTML('beforeend', igname);
                    main.insertAdjacentHTML('beforeend', slide_up);
                    isPageChanging = false;
                }, 2000);
            };
        }
        else if (page === 1) {
            const tourGuideImg = new Image();
            tourGuideImg.src = './static/img/tour.png';
            tourGuideImg.alt = 'tour';
            tourGuideImg.className = 'tour-guide';
            tourGuideImg.onload = function () {
                main.appendChild(tourGuideImg);
                const text_box = CreateTwoLineTextBox('你好呀～我是星野愛，也是今天負責陪伴你的導覽員呦！請多多指教啦～');
                setTimeout(function () {
                    main.insertAdjacentHTML('beforeend', text_box);
                    isPageChanging = false;
                }, 2000);
            };
        }
        else if (page === 2) {
            const birthday = new Image();
            birthday.src = './static/img/birthday.png';
            birthday.alt = 'birthday';
            birthday.className = 'birthday';
            birthday.onload = function () {
                main.appendChild(birthday);
                const tourGuideImg = new Image();
                tourGuideImg.src = './static/img/tour.png';
                tourGuideImg.alt = 'tour';
                tourGuideImg.className = 'tour-guide';
                tourGuideImg.onload = function () {
                    main.appendChild(tourGuideImg);
                    const text_box = CreateTwoLineTextBox('寶寶的生日在8月18日喔～是閃亮亮的獅子座呢！');
                    setTimeout(function () {
                        main.insertAdjacentHTML('beforeend', text_box);
                        isPageChanging = false;
                    }, 2000);
                };
            };
        }
        else if (page === 3) {
            const mbti = new Image();
            mbti.src = './static/img/entp.png';
            mbti.alt = 'entp';
            mbti.className = 'mbti';
            mbti.onload = function () {
                main.appendChild(mbti);
                const tourGuideImg = new Image();
                tourGuideImg.src = './static/img/tour.png';
                tourGuideImg.alt = 'tour';
                tourGuideImg.className = 'tour-guide';
                tourGuideImg.onload = function () {
                    main.appendChild(tourGuideImg);
                    const text_box = CreateTwoLineTextBox('MBTI則是辯論家型的ENTP～是超有創意又熱愛冒險的人呀!');
                    setTimeout(function () {
                        main.insertAdjacentHTML('beforeend', text_box);
                        isPageChanging = false;
                    }, 2000);
                };
            };
        }
        else if (page === 4) {
            const bedminton = new Image();
            bedminton.src = './static/img/bedminton.png';
            bedminton.alt = 'hoshinoai';
            bedminton.className = 'ai';
            bedminton.onload = function () {
                main.appendChild(bedminton);
                const tourGuideImg = new Image();
                tourGuideImg.src = './static/img/tour.png';
                tourGuideImg.alt = 'tour';
                tourGuideImg.className = 'tour-guide';
                tourGuideImg.onload = function () {
                    main.appendChild(tourGuideImg);
                    const text_box = CreateOneLineTextBox('最喜歡的運動？當然是羽毛球啦～');
                    setTimeout(function () {
                        main.insertAdjacentHTML('beforeend', text_box);
                        isPageChanging = false;
                    }, 2000);
                };
            };
        }
        else if (page === 5) {
            const script_text = `<div class="script_text">
            <div class="t">派系</div>
            <div class="i">
                咖哩:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不拌<br>
                火鍋:&nbsp;不加芋頭<br>
                香菜:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加爆<br>
                薯條:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;原味
            </div>
        </div>`
            main.insertAdjacentHTML('beforeend', script_text);
            // main.appendChild(script_text);
            const tourGuideImg = new Image();
            tourGuideImg.src = './static/img/tour.png';
            tourGuideImg.alt = 'tour';
            tourGuideImg.className = 'tour-guide';
            tourGuideImg.onload = function () {
                main.appendChild(tourGuideImg);
                const text_box = CreateTwoLineTextBox('食物這樣吃才是最完美的嘛～完全符合我星野愛的標準喔！');
                setTimeout(function () {
                    main.insertAdjacentHTML('beforeend', text_box);
                    isPageChanging = false;
                }, 2000);
            };
        }
        else if (page === 6) {
            const ai = new Image();
            ai.src = './static/img/ai.png';
            ai.alt = 'hoshinoai';
            ai.className = 'ai';
            ai.onload = function () {
                main.appendChild(ai);
                const tourGuideImg = new Image();
                tourGuideImg.src = './static/img/tour.png';
                tourGuideImg.alt = 'tour';
                tourGuideImg.className = 'tour-guide';
                tourGuideImg.onload = function () {
                    main.appendChild(tourGuideImg);
                    const text_box = CreateTwoLineTextBox('二次元的本命推肯定是我囉～因為我可是究極完美的偶像！');
                    setTimeout(function () {
                        main.insertAdjacentHTML('beforeend', text_box);
                        isPageChanging = false;
                    }, 2000);
                };
            };
        }
        else if (page === 7) {
            if (ismusic && playing) {
                audio.pause();
                const playbutton = document.getElementById('PlayButton');
                playbutton.src = './static/img/play.png';
            }
            const spotify_icon = `<a
             class="spotify_icon" id="spotify_icon" href="https://open.spotify.com/artist/64tJ2EAv1R6UaZqc4iOCyj"
             target="_blank"></a>`
            main.insertAdjacentHTML('beforeend', spotify_icon);
            const music_area = `<div class="spotify_box" id="sb">
                                    <iframe src="https://open.spotify.com/embed/track/7ovUcF5uHTBRzUpB6ZOmvt?utm_source=generator" width="100%"
                                        height="152" frameborder="0" allowfullscreen=""
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" id="0">
                                    </iframe>
                                    <iframe src="https://open.spotify.com/embed/track/0T4AitQuq8IJhWBWuZwkFA?utm_source=generator" width="100%"
                                        height="152" frameborder="0" allowfullscreen=""
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" id="1" hidden>
                                    </iframe>
                                    <iframe src="https://open.spotify.com/embed/track/3dPtXHP0oXQ4HCWHsOA9js?utm_source=generator" width="100%"
                                        height="152" frameborder="0" allowfullscreen=""
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" id="2" hidden>
                                    </iframe>
                                    <iframe src="https://open.spotify.com/embed/track/62Lv9WcrfzJqhvYDbilJy3?utm_source=generator" width="100%"
                                        height="152" frameborder="0" allowfullscreen=""
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" id="3" hidden>
                                    </iframe>
                                    <iframe src="https://open.spotify.com/embed/track/5ptl2PXkiSth54HCuGO7vN?utm_source=generator" width="100%"
                                        height="152" frameborder="0" allowfullscreen=""
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" id="4" hidden>
                                    </iframe>
                                    <iframe src="https://open.spotify.com/embed/track/5NxmDq0yXBYGfCbMqvIXuv?utm_source=generator" width="100%"
                                        height="152" frameborder="0" allowfullscreen=""
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" id="5" hidden>
                                    </iframe>
                                    <iframe src="https://open.spotify.com/embed/track/42lDvdAmBr7H5hLzvr882L?utm_source=generator" width="100%"
                                        height="152" frameborder="0" allowfullscreen=""
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" id="6" hidden>
                                    </iframe>
                                    <iframe src="https://open.spotify.com/embed/track/43DrDpSiIZWEiEfsQQHoQi?utm_source=generator" width="100%"
                                        height="152" frameborder="0" allowfullscreen=""
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" id="7" hidden>
                                    </iframe>
                                </div>
                                <div hidden id="music">0</div>`
            main.insertAdjacentHTML('beforeend', music_area);
            const atentiontext = `<div class="atention_text" id="atention_text">
                                        左右滑動切換歌曲
                                    </div>`
            main.insertAdjacentHTML('beforeend', atentiontext);
            const text = document.querySelector('.atention_text');
            text.addEventListener('animationend', function () {
                text.style.animation = 'left-right 2s infinite';
            });
            const tourGuideImg = new Image();
            tourGuideImg.src = './static/img/tour.png';
            tourGuideImg.alt = 'tour';
            tourGuideImg.className = 'music_tour-guide';
            tourGuideImg.onload = function () {
                main.appendChild(tourGuideImg);
                const text_box = `<div class="music_text-box"><div class="text-index"><p>YOASOBI可是他最喜歡的樂團啊，沒抽到 超現実 的票，讓他難過了好久呢！</p></div></div>`
                setTimeout(function () {
                    main.insertAdjacentHTML('beforeend', text_box);
                    isPageChanging = false;
                    console.log(isPageChanging)
                }, 2000);
            };
        }
    }
    function clearpageUp() {
        const childElements = Array.from(main.children);
        const h = document.getElementById('music');
        if (h) {
            h.remove();
        }
        let elementsToRemove = childElements.length;
        if (elementsToRemove === 0) {
            changepage();
            return;
        }
        if (page === 0 && !isask) {
            const music_ask = `<div class="ask" id="ask">
                                <div class="cover_" id="cover_"></div>
                                <div class="ask_box" id="ask_box">
                                    <p class="q_text">是否同意此網站播放音樂？</p>
                                    <div class="ask_button_area">
                                        <div class="ask_button" id="Decline" style="background-color: #eeeeee;">拒絕</div>
                                        <div class="ask_button" id="accept" style="background-color: #e3007f;">接受</div>
                                    </div>
                                </div>
                            </div>`
            document.body.insertAdjacentHTML('beforeend', music_ask);
            const cover_ = document.getElementById('cover_');
            const Decline = document.getElementById('Decline');
            const accept = document.getElementById('accept');
            const ask = document.getElementById('ask');
            cover_.addEventListener('click', function () {
                isPageChanging = false;
                ask.remove();
            })
            Decline.addEventListener('click', function () {
                isask = true;
                isPageChanging = false;
                ask.style.animation = 'leave-up 2s';
                clearpageUp();
                setTimeout(function () {
                    ask.remove();
                }, 2000)
            });
            accept.addEventListener('click', function () {
                isask = true;
                isPageChanging = false;
                ismusic = true;
                ask.style.animation = 'leave-up 2s';
                clearpageUp();
                setTimeout(function () {
                    ask.remove();
                }, 2000)
                const playbutton_add = '<img src="./static/img/stop.png" id="PlayButton" class="PlayButton">'
                document.body.insertAdjacentHTML('beforeend', playbutton_add);
                let play = true;
                const playbutton = document.getElementById('PlayButton');
                playbutton.addEventListener('click', function () {
                    if (!play) {
                        audio.play();
                        play = true;
                        playing = true
                        playbutton.src = './static/img/stop.png';
                    }
                    else {
                        audio.pause();
                        play = false;
                        playing = false
                        playbutton.src = './static/img/play.png';
                    }
                });
                playing = true
                isplay = true
                console.log('play')
                playAudio()
            })
        }
        else {
            page++;
            const h = document.getElementById('music');
            if (h) {
                h.remove();
            }
            for (let i = 0; i < childElements.length; i++) {
                const element = childElements[i];
                element.style.animation = 'leave-up 2s';
                element.addEventListener('animationend', function () {
                    this.remove();
                    elementsToRemove--;
                    if (elementsToRemove === 0) {
                        console.log('c')
                        changepage();
                    }
                });
            }
        }
    }
    function clearpageDown() {
        const h = document.getElementById('music');
        if (h) {
            h.remove();
        }
        const childElements = Array.from(main.children);
        let elementsToRemove = childElements.length;
        page--;

        if (elementsToRemove === 0) {
            changepage();
            return;
        }
        for (let i = 0; i < childElements.length; i++) {
            const element = childElements[i];
            element.style.animation = 'leave-down 2s';
            element.addEventListener('animationend', function () {
                this.remove();
                elementsToRemove--;
                if (elementsToRemove === 0) {
                    console.log('c')
                    changepage();
                }
            });
        }
    }

    function nextsong() {
        if (page === 7) {
            const at = document.getElementById('atention_text')
            if (at) {
                at.remove();
            }

            const now = document.getElementById('music').innerText;
            const old = document.getElementById(now);
            const new_ = document.getElementById((Number(now) + 1) % 8);
            console.log('old:', old, 'new:', new_)
            old.style.zIndex = '3000';
            new_.hidden = false;
            old.style.animation = 'leave_l 0.3s';
            setTimeout(function () {
                old.style.zIndex = '2000';
                old.hidden = true;
                old.style.animation = 'none';
                document.getElementById('music').innerText = String((Number(now) + 1) % 8);
            }, 300)

            // let src_ = 0;
            // if (now === '7') {
            //     document.getElementById('music').innerText = '0';
            //     src_ = music_data[0];
            // } else {
            //     document.getElementById('music').innerText = String(Number(now) + 1);
            //     src_ = music_data[Number(now) + 1];
            // }
            // const music_area = `<iframe src="${src_}" width="100%"
            //     height="152" frameborder="0" allowfullscreen=""
            //     allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" id="music_box">
            // </iframe>`
            // const old = document.getElementById('music_box');
            // old.style.zIndex = '3000';
            // const spotify_box = document.getElementById('sb');
            // old.id = 'old';
            // old.style.animation = 'leave_l 0.3s';
            // old.addEventListener('animationend', function () {
            //     this.remove();
            //     spotify_box.insertAdjacentHTML('beforeend', music_area);
            // });
        }
    }
    function previoussong() {
        if (page === 7) {
            const at = document.getElementById('atention_text')
            if (at) {
                at.remove();
            }
            const now = document.getElementById('music').innerText;
            const old = document.getElementById(now);
            let new_ = document.getElementById(Number(now) - 1);
            document.getElementById('music').innerText = String(Number(now) - 1);
            if (Number(now) === 0) {
                new_ = document.getElementById('7');
                document.getElementById('music').innerText = '7';
            }
            new_.style.zIndex = '3000';
            new_.hidden = false;
            new_.style.animation = 'in_r 0.3s';
            // function handleAnimationEnd() {
            //     old.hidden = true;
            //     new_.style.zIndex = '2000';
            //     new_.removeEventListener('animationend', handleAnimationEnd);
            // }
            // new_.addEventListener('animationend', handleAnimationEnd);
            setTimeout(function () {
                old.hidden = true;
                new_.style.zIndex = '2000';
                new_.style.animation = 'none';
                new_.removeEventListener('animationend', handleAnimationEnd);
            }, 300)
            // const now = document.getElementById('music').innerText;
            // let src_ = 0;
            // if (now === '0') {
            //     document.getElementById('music').innerText = '7';
            //     src_ = music_data[7];
            // } else {
            //     document.getElementById('music').innerText = String(Number(now) - 1);
            //     src_ = music_data[Number(now) - 1];
            // }
            // const music_area = `<iframe src="${src_}" width="100%"
            //     height="152" frameborder="0" allowfullscreen=""
            //     allow="autoplay; clipboard-write; encrypted-media; 
            //     fullscreen; picture-in-picture" id="music_box_new" style="z-index: 3000;" hidden onload="iframeLoaded()">
            // </iframe>`

            // const spotify_box = document.getElementById('sb');
            // spotify_box.insertAdjacentHTML('beforeend', music_area);


        }
    }

    let touchStartY = 0;
    let touchEndY = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function (event) {
        touchStartY = event.changedTouches[0].screenY;
        touchStartX = event.changedTouches[0].screenX;
    }, false);

    document.addEventListener('touchend', function (event) {
        touchEndY = event.changedTouches[0].screenY;
        touchEndX = event.changedTouches[0].screenX;
        handleGesture();
    }, false);
    document.addEventListener('mousedown', function (event) {
        touchStartY = event.screenY;
        touchStartX = event.screenX;
    }, false);

    document.addEventListener('mouseup', function (event) {
        touchEndY = event.screenY;
        touchEndX = event.screenX;
        handleGesture();
    }, false);

    function handleGesture() {
        if (isPageChanging) {
            return;
        }
        let deltaY = touchStartY - touchEndY;
        let deltaX = touchStartX - touchEndX;
        if (Math.abs(deltaX) < Math.abs(deltaY)) {
            if (deltaY > 30) {

                if (page < 7) {
                    isPageChanging = true
                    console.log('page:', page, 'isPageChanging:', isPageChanging)
                    clearpageUp();
                }
            } else if (touchEndY - touchStartY > 30) {
                if (page > 0) {
                    isPageChanging = true
                    clearpageDown();
                }
            }
        } else if (page === 7) {
            if (deltaX > 30) {
                nextsong();
            } else if (deltaX < -30) {
                previoussong();
            }
        }
    }
    changepage(); // 初始化第一頁
});
