document.addEventListener('DOMContentLoaded',function(){
    main=document.getElementById('main');
    // <div class="id-card" style="background-color: #E6E6FA;">
    //             <div class="id-card-left">
    //                 <div class="id-card-photo" style="background-image: url(./static/img/ailysa.jpg);">
    //                 </div>
    //                 <div class="id-card-name">
    //                     艾莉莎·米哈伊羅夫納·九條
    //                 </div>
    //             </div>
    //             <div class="id-card-script-text">
    //                 生日:11/7
    //                 <br>
    //                 原作:不時輕聲地以俄語<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;遮羞的鄰座艾莉同學
    //                 <br>
    //                 聲優:上坂菫
    //                 <br>
    //                 <p style="font-family: 'Segoe Script', 'Dancing Script', cursive; font-style: italic;">И на меня тоже обрати внимание.</p>
    //             </div>
    //         </div>
    data=[
        {'photo_path':'./static/img/igicon.jpg','background':' #e5698e','name':'星野&nbsp;愛',
        'birthday':'不詳','from':'【推しの子】','ver':'高橋李依','text':'嘘はとびきりの愛なん<br>だよ。'},
        {'photo_path':'./static/img/chinatsu.jpg','background':' #93c2e7','name':'鹿野&nbsp;千夏',
            'birthday':'8/26','from':'アオのハコ','ver':'上田麗奈','text':'だったらプレーで実力見せつけるしかないんだよね。'},
        {'photo_path':'./static/img/hina.jpg','background':' #f2d3db','name':'蝶野&nbsp;雛',
            'birthday':'3/2','from':'アオのハコ','ver':'鬼頭明里','text':'私は１人で戦わないと。１人で平気だもん。'},
        {'photo_path':'./static/img/uika.jpg','background':" #b79cd9",'name':'三角&nbsp;初音',
            'birthday':'6/26','from':'Ave&nbsp;Mujica','ver':'佐佐木李子','text':'小祥小祥小祥小祥小祥小祥小祥'},
        {'photo_path':'./static/img/cat.jpg','background':" #4a7c59",'name':'貓貓',
            'birthday':'不詳','from':'薬屋のひとりごと','ver':'悠木碧','text':'運命にはあらがうことはできない。'},
        {'photo_path':'./static/img/saki.jpg','background':" #bcbdde",'name':'豐川&nbsp;祥子',
            'birthday':'2/14','from':'Ave&nbsp;Mujica','ver':'高尾奏音','text':'私たちは運命共同体。'},
        {'photo_path':'./static/img/ano.jpg','background':" #ff8899",'name':'千早&nbsp;愛音',
            'birthday':'9/8','from':'MyGo!!!!!','ver':'立石凜','text':'我愛慕虛榮啦'},
        {'photo_path':'./static/img/soyo.jpg','background':" #ffdd77",'name':'長崎&nbsp;そよ',
            'birthday':'5/27','from':'MyGo!!!!!','ver':'小日向美香','text':'なんで春日影やったの？！！'},
        {'photo_path':'./static/img/ailysa.jpg','background':' #e6e6fa','name':'艾莉莎·米哈伊羅夫納·九條',
        'birthday':'11/7','from':'不時輕聲地以俄語<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;遮羞的鄰座艾莉同學','ver':'上坂菫','text':'И на меня тоже обрати внимание.'},
    ];
    let div=document.createElement('div');
        // <div class="cards">
    div.className='cards';
    div.id='cards';
    main.appendChild(div);
    for(let i=0;i<data.length;i++){
        let e='';
        if(i>0){
            e=`<div class="id-card" style="background-color: ${data[i].background}; id="${i}" hidden>
                    <div class="id-card-left">
                        <div class="id-card-photo" style="background-image: url(${data[i].photo_path});">
                        </div>
                        <div class="id-card-name">
                            ${data[i].name}
                        </div>
                    </div>
                    <div class="id-card-script-text">
                        生日:${data[i].birthday}
                        <br>
                        原作:${data[i].from}
                        <br>
                        聲優:${data[i].ver}
                        <br>
                        <p style="font-family: 'Segoe Script', 'Dancing Script', cursive; font-style: italic;">${data[i].text}</p>
                    </div>
                </div>`;  
        }
        else{
            e=`<div class="id-card" style="background-color: ${data[i].background}; id="${i}">
                    <div class="id-card-left">
                        <div class="id-card-photo" style="background-image: url(${data[i].photo_path});">
                        </div>
                        <div class="id-card-name">
                            ${data[i].name}
                        </div>
                    </div>
                    <div class="id-card-script-text">
                        生日:${data[i].birthday}
                        <br>
                        原作:${data[i].from}
                        <br>
                        聲優:${data[i].ver}
                        <br>
                        <p style="font-family: 'Segoe Script', 'Dancing Script', cursive; font-style: italic;">${data[i].text}</p>
                    </div>
                </div>`;
        }
        let c=document.getElementById('cards');
        c.insertAdjacentHTML('beforeend',e);

    }
})