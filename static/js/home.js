let page = 0;
let isplay = false;
let isask = false;
let ismusic = false;
let playing = false;
const audio = new Audio('./static/mp3/idol.mp3');
audio.loop = true;
const data_id_card=[
    {'photo_path':'./static/img/igicon.jpg','background':' #e5698e','name':'星野&nbsp;愛',
    'birthday':'不詳','from':'【推しの子】','ver':'高橋李依','text':'嘘はとびきりの愛なん<br>だよ。'},
    {'photo_path':'./static/img/chinatsu.jpg','background':' #93c2e7','name':'鹿野&nbsp;千夏',
        'birthday':'8/26','from':'アオのハコ','ver':'上田麗奈','text':'だったらプレーで実力見せつけるしかないんだよね。'},
    {'photo_path':'./static/img/hina.jpg','background':' #f2d3db','name':'蝶野&nbsp;雛',
        'birthday':'3/2','from':'アオのハコ','ver':'鬼頭明里','text':'私は１人で戦わないと。１人で平気だもん。'},
    {'photo_path':'./static/img/uika.jpg','background':" #b79cd9",'name':'三角&nbsp;初音',
        'birthday':'6/26','from':'Ave&nbsp;Mujica','ver':'佐々木李子','text':'小祥小祥小祥小祥小祥小祥小祥'},
    {'photo_path':'./static/img/cat.jpg','background':" #4a7c59",'name':'貓貓',
        'birthday':'不詳','from':'薬屋のひとりごと','ver':'悠木碧','text':'運命にはあらがうことはできない。'},
    {'photo_path':'./static/img/saki.jpg','background':" #bcc3de",'name':'豐川&nbsp;祥子',
        'birthday':'2/14','from':'Ave&nbsp;Mujica','ver':'高尾奏音','text':'私たちは運命共同体。'},
    {'photo_path':'./static/img/hatsumi.png','background':" #c7d8c6",'name':'若葉&nbsp;睦',
        'birthday':'1/14','from':'Ave&nbsp;Mujica','ver':'渡瀬結月','text':'健康によくない'},
    {'photo_path':'./static/img/ano.jpg','background':" #ff8899",'name':'千早&nbsp;愛音',
        'birthday':'9/8','from':'MyGo!!!!!','ver':'立石凜','text':'我愛慕虛榮啦'},
    {'photo_path':'./static/img/soyo.jpg','background':" #ffdd77",'name':'長崎&nbsp;そよ',
        'birthday':'5/27','from':'MyGo!!!!!','ver':'小日向美香','text':'なんで春日影やったの？！！'},
    {'photo_path':'./static/img/ailysa.jpg','background':' #e6e6fa','name':'艾莉莎·米哈伊羅夫納·九條',
    'birthday':'11/7','from':'不時輕聲地以俄語<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;遮羞的鄰座艾莉同學','ver':'上坂すみれ','text':'И на меня тоже обрати внимание.'},
];
const data_music=['7ovUcF5uHTBRzUpB6ZOmvt','0T4AitQuq8IJhWBWuZwkFA','3dPtXHP0oXQ4HCWHsOA9js','62Lv9WcrfzJqhvYDbilJy3','5ptl2PXkiSth54HCuGO7vN','5NxmDq0yXBYGfCbMqvIXuv','42lDvdAmBr7H5hLzvr882L','43DrDpSiIZWEiEfsQQHoQi'];
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
            igicon.src = './static/img/igicon.jpeg';
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
                }, 1500);
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
                }, 1000);
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
                    }, 1000);
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
                    }, 1000);
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
                    }, 1000);
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
                }, 1000);
            };
        }
        else if (page === 6) {
                
                let div=document.createElement('div');
                    // <div class="cards">
                div.className='cards';
                div.id='cards';
                main.appendChild(div);
                for(let i=0;i<data_id_card.length;i++){
                    let e='';
                    if(i>0){
                        e=`<div class="id-card" style="background-color: ${data_id_card[i].background};" id="${i}" hidden>
                                <div class="id-card-left">
                                    <div class="id-card-photo" style="background-image: url(${data_id_card[i].photo_path});">
                                    </div>
                                    <div class="id-card-name">
                                        ${data_id_card[i].name}
                                    </div>
                                </div>
                                <div class="id-card-script-text">
                                    生日:${data_id_card[i].birthday}
                                    <br>
                                    原作:${data_id_card[i].from}
                                    <br>
                                    聲優:${data_id_card[i].ver}
                                    <br>
                                    <p style="font-family: 'Dancing Script', 'Bradley Hand', 'Brush Script MT', cursive; font-style: italic;">${data_id_card[i].text}</p>
                                </div>
                            </div>`;  
                    }
                    else{
                        e=`<div class="id-card" style="background-color: ${data_id_card[i].background};" id="${i}">
                                <div class="id-card-left">
                                    <div class="id-card-photo" style="background-image: url(${data_id_card[i].photo_path});">
                                    </div>
                                    <div class="id-card-name">
                                        ${data_id_card[i].name}
                                    </div>
                                </div>
                                <div class="id-card-script-text">
                                    生日:${data_id_card[i].birthday}
                                    <br>
                                    原作:${data_id_card[i].from}
                                    <br>
                                    聲優:${data_id_card[i].ver}
                                    <br>
                                    <p style="font-family: 'Dancing Script', 'Bradley Hand', 'Brush Script MT', cursive; font-style: italic;">${data_id_card[i].text}</p>
                                </div>
                            </div>`;
                    }
                    let c=document.getElementById('cards');
                    c.insertAdjacentHTML('beforeend',e);
                }
                const atentiontext = `<div class="atention_text_id-card" id="atention_text">
                                        左右滑動切換角色
                                    </div>
                                    <div hidden id="counter">0</div>`
                main.insertAdjacentHTML('beforeend', atentiontext);
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
                    }, 1000);
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
            
            let music_area='';
            for(let i=0;i<data_music.length;i++){
                if(i===0){
                    music_area+=`<iframe src="https://open.spotify.com/embed/track/${data_music[i]}?utm_source=generator" width="100%"
                                    height="152" frameborder="0" allowfullscreen=""
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" id="${i}">
                                </iframe>`}
                else{
                    music_area+=`<iframe src="https://open.spotify.com/embed/track/${data_music[i]}?utm_source=generator" width="100%"
                                    height="152" frameborder="0" allowfullscreen=""
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" id="${i}" hidden>
                                </iframe>`
                }
            }
            music_area = '<div class="spotify_box" id="sb">'+music_area+'</div>'+'<div hidden id="music">0</div>'
            main.insertAdjacentHTML('beforeend', music_area);
            // console.log(music_area)
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
                }, 1000);
            };
        }
        else if (page === 8) {
            const find_me = `<div class="find_me">
                <div class="findme_group">
                    <a href="https://www.instagram.com/hoshinoai_151/" class="ins" target="_blank"></a>
                    <a href="https://www.facebook.com/brian.ku.353" class="fb" target="_blank"></a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="yt" target="_blank"></a>
                </div>
                <div class="findme_group">
                    <a href="mailto:kumingwei0818@gmail.com" class="mail" target="_blank"></a>
                    <a href="https://github.com/mwku" class="github" target="_blank"></a>
                    <a href="https://line.me/ti/p/31O4Ce56P-" class="line" target="_blank"></a>
                </div>
                </div>`
            console.log('8')
            main.insertAdjacentHTML('beforeend', find_me);
            // const tourGuideImg = new Image();
            // tourGuideImg.src = './static/img/akua.png';
            // tourGuideImg.id = 'akua';
            // tourGuideImg.alt = 'tour';
            // tourGuideImg.className = 'tour-guide';
            // tourGuideImg.onload = function () {
            //     main.appendChild(tourGuideImg);
            //     const text_box = CreateOneLineTextBox('今天就到這裡囉，應該沒有爛尾吧');
            //     setTimeout(function () {
            //         main.insertAdjacentHTML('beforeend', text_box);
            //     }, 2000);
            // };
            // setTimeout(function () {
            //     const sea = new Image();
            //     sea.src = './static/img/sea.png';
            //     sea.id = 'sea';
            //     sea.alt = 'sea';
            //     sea.className = 'sea';
            //     main.appendChild(sea);
            //     sea.onload = function () {
            //         const akua = document.getElementById('akua');
            //         akua.style.animation = 'akua 1s cubic-bezier(0.5, 0, 1, 1)';
            //         const text_box = document.querySelector('.text-box_oneLine');
            //         text_box.style.animation = 'akua 1s cubic-bezier(0.5, 0, 1, 1)';
            //         akua.addEventListener('animationend', function () {
            //             akua.remove();
            //             text_box.remove();
            //             sea.remove();
            //         })
            //     }
            // }, 6000)
            // setTimeout(function () {
            const ft_ = `<a href="https://github.com/mwku/hoshinoai_151" class="finally_text" target="_blank">
                Design&nbsp;by<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-mwku
            </a>`
            main.insertAdjacentHTML('beforeend', ft_);
            function End() {
                isPageChanging = false;
                ft.removeEventListener('animationend', handleAnimationEnd);
            }
            const ft = document.querySelector('.finally_text');
            ft.addEventListener('animationend', End);
            // }, 7500)


        }
    }
    function clearpageUp() {
        const h_=document.getElementById('counter')
        const h = document.getElementById('music');
        if (h) {
            h.remove();
        }
        if(h_){
            h_.remove();
        }
        const childElements = Array.from(main.children);
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
                // isask = true;
                ask.remove();
                isPageChanging = false;
                
            })
            Decline.addEventListener('click', function () {
                isask = true;
                isPageChanging = false;
                ask.style.animation = 'leave-up 1s';
                clearpageUp();
                setTimeout(function () {
                    ask.remove();
                }, 1000)
            });
            accept.addEventListener('click', function () {
                isask = true;
                isPageChanging = false;
                ismusic = true;
                ask.style.animation = 'leave-up 1s';
                clearpageUp();
                setTimeout(function () {
                    ask.remove();
                }, 1000)
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
            const h_ = document.getElementById('counter')
            const h = document.getElementById('music');
            if (h) {
                h.remove();
            }
            if (h_) {
                h_.remove();
            }
            for (let i = 0; i < childElements.length; i++) {
                const element = childElements[i];
                element.style.animation = 'leave-up 1s';
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
        const h_ = document.getElementById('counter')
        const h = document.getElementById('music');
        if (h) {
            h.remove();
        }
        if(h_){
            h_.remove();
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
            element.style.animation = 'leave-down 1s';
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

    function nextcard() {
        if (page === 6) {
            const at = document.getElementById('atention_text')
            if (at) {
                at.remove();
            }
            const now = document.getElementById('counter').innerText;
            const old = document.getElementById(now);
            const new_ = document.getElementById(String((Number(now) + 1) % data_id_card.length));
            // console.log(now, new_, old,typeof(now),(Number(now) + 1) % data_id_card.length)
            old.style.zIndex = '3000';
            new_.hidden = false;
            old.style.animation = 'leave_l 0.3s';
            setTimeout(function () {
                old.style.zIndex = '2000';
                old.hidden = true;
                old.style.animation = 'none';
                document.getElementById('counter').innerText = String((Number(now) + 1) % data_id_card.length);
            }, 300)
        }
    }

    function previouscard() {
        if (page === 6) {
            const at = document.getElementById('atention_text')
            if (at) {
                at.remove();
            }
            const now = document.getElementById('counter').innerText;
            const old = document.getElementById(now);
            let new_ = document.getElementById(Number(now) - 1);
            document.getElementById('counter').innerText = String(Number(now) - 1);
            if (Number(now) === 0) {
                new_ = document.getElementById(String(data_id_card.length - 1));
                document.getElementById('counter').innerText = String(data_id_card.length - 1);
            }
            // console.log(now, new_, old,typeof(now))
            new_.style.zIndex = '3000';
            new_.hidden = false;
            new_.style.animation = 'in_r 0.3s';
            setTimeout(function () {
                old.hidden = true;
                new_.style.zIndex = '2000';
                new_.style.animation = 'none';
                new_.removeEventListener('animationend', handleAnimationEnd);
            }, 300)
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
            const new_ = document.getElementById(String((Number(now) + 1) % data_music.length));
            old.style.zIndex = '3000';
            new_.hidden = false;
            old.style.animation = 'leave_l 0.3s';
            setTimeout(function () {
                old.style.zIndex = '2000';
                old.hidden = true;
                old.style.animation = 'none';
                document.getElementById('music').innerText = String((Number(now) + 1) % data_music.length);
            }, 300)
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
                new_ = document.getElementById(String(data_music.length - 1));
                document.getElementById('music').innerText = String(data_music.length - 1);
            }
            new_.style.zIndex = '3000';
            new_.hidden = false;
            new_.style.animation = 'in_r 0.3s';
            setTimeout(function () {
                old.hidden = true;
                new_.style.zIndex = '2000';
                new_.style.animation = 'none';
                new_.removeEventListener('animationend', handleAnimationEnd);
            }, 300)
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

                if (page < 8) {
                    isPageChanging = true
                    console.log('page:', page, 'isPageChanging:', isPageChanging)
                    clearpageUp();
                }
            } else if (touchEndY - touchStartY > 30) {
                if (page > 0) {
                    console.log('c')
                    isPageChanging = true
                    clearpageDown();
                }
            }
        }else if(page==6){
            if (deltaX > 30) {
                nextcard();
            } else if (deltaX < -30) {
                previouscard();
            }
        } else if (page === 7) {
            if (deltaX > 30) {
                nextsong();
            } else if (deltaX < -30) {
                previoussong();
            }
        }
    }
    changepage();
});
