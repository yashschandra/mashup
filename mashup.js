var W=1800;
var H=900;
var DX=20;
var DY=10;
var DT=20;
var F=70;
var last1=null, last2=null;
var COLORS=["black"];
var FONTS=["Bree Serif", "Righteous", "Jua", "Gloria Hallelujah"];


function createNewDiv(w, h, t, l, b, f, ff, c, text) {
    var div=document.createElement("DIV");
    div.style.width=w;
    div.style.height=h;
    div.style.left=l;
    div.style.top=t;
    div.style.background=b;
    div.style.fontSize=f;
    div.style.fontFamily=ff;
    div.style.color=c;
    div.style.position="absolute";
    div.style.display="flex";
    div.style.alignItems="center";
    div.style.justifyContent="center";
    div.innerHTML=text;
    document.getElementById("main").appendChild(div);
    return div;
}

function animate(div, w, h, t, l, dx, dy, ft, fl, dt) {
    //console.log("animate");
    var int=setInterval(function() {
        if(t==ft && l==fl) {
            clearInterval(int);
        }
        else {
            t+=dy.t;
            l+=dx.l;
            w+=dx.w;
            h+=dy.h;
            //console.log(t, l, w, h);
            div.style.top=t;
            div.style.left=l;
            div.style.width=w;
            div.style.height=h;
        }
    }, dt);
}

function cleanup(div) {
    if(last2===null) {
        if(last1===null) {
            last1=div;
        }
        else {
            last2=div;
        }
    }
    else {
        last1.parentNode.removeChild(last1);
        last1=last2;
        last2=null;
    }
}

function go() {
    var count=0;
    var w,h,b,f,dx={},dy={},ft,fl,dt,t,l;
    var data;
    var int=setInterval (function() {
        //console.log(count);
        data=[];
        if(count==DATA.length) {
            clearInterval(int);
        }
        else {
            var d=DATA[count];
            if(d.anim==0) {
                data.push({w:W, h:H, t:H, l:W, dx:{w: 0, l: -DX}, dy:{h: 0, t: -DY}, ft:0, fl:0, dt:DT, text: d.text[0]});
            }
            else if(d.anim==1) {
                data.push({w:W, h:H, t:-H, l:-W, dx:{w: 0, l: DX}, dy:{h: 0, t: DY}, ft:0, fl:0, dt:DT, text: d.text[0]});
            }
            else if(d.anim==2) {
                data.push({w:W, h:H, t:0, l:-W, dx:{w: 0, l: DX}, dy:{h: 0, t: 0}, ft:0, fl:0, dt:DT, text: d.text[0]});
            }
            else if(d.anim==3) {
                data.push({w:0, h:0, t:H/2, l:W/2, dx:{w: 2*DX, l: -DX}, dy:{h: 2*DY, t: -DY}, ft:0, fl:0, dt:2*DT, text: d.text[0]});
            }
            else if(d.anim==4) {
                data.push({w:W, h:H/2, t:0, l:W, dx:{w: 0, l: -DX}, dy:{h: 0, t: 0}, ft:0, fl:0, dt:DT, text: d.text[0]});
                data.push({w:W, h:H/2, t:H/2, l:-W, dx:{w: 0, l: DX}, dy:{h: 0, t: 0}, ft:H/2, fl:0, dt:DT, text: d.text[1]});
            }
            else if(d.anim==5) {
                data.push({w:W, h:H/2, t:-H/2, l:0, dx:{w: 0, l: 0}, dy:{h: 0, t: DY}, ft:0, fl:0, dt:DT, text: d.text[0]});
                data.push({w:W, h:H/2, t:H, l:0, dx:{w: 0, l: 0}, dy:{h: 0, t: -DY}, ft:H/2, fl:0, dt:DT, text: d.text[1]});
            }
            else if(d.anim==6) {
                data.push({w:W, h:H/4, t:0, l:-W, dx:{w: 0, l: DX}, dy:{h: 0, t: 0}, ft:0, fl:0, dt:DT, text: d.text[0]});
                data.push({w:W, h:H/4, t:H/4, l:W, dx:{w: 0, l: -DX}, dy:{h: 0, t: 0}, ft:H/4, fl:0, dt:DT, text: d.text[1]});
                data.push({w:W, h:H/4, t:H/2, l:-W, dx:{w: 0, l: DX}, dy:{h: 0, t: 0}, ft:H/2, fl:0, dt:DT, text: d.text[2]});
                data.push({w:W, h:H/4, t:3*H/4, l:W, dx:{w: 0, l: -DX}, dy:{h: 0, t: 0}, ft:3*H/4, fl:0, dt:DT, text: d.text[3]});
            }
            else if(d.anim==7) {
                data.push({w:W, h:H/3, t:H, l:0, dx:{w: 0, l: 0}, dy:{h: 0, t: -DY}, ft:0, fl:0, dt:DT, text: d.text[0]});
                data.push({w:W, h:H/3, t:H, l:0, dx:{w: 0, l: 0}, dy:{h: 0, t: -DY}, ft:H/3, fl:0, dt:DT, text: d.text[1]});
                data.push({w:W, h:H/3, t:H, l:0, dx:{w: 0, l: 0}, dy:{h: 0, t: -DY}, ft:2*H/3, fl:0, dt:DT, text: d.text[2]});
            }
            else if(d.anim==8) {
                data.push({w:W, h:H/3, t:-H/3, l:0, dx:{w: 0, l: 0}, dy:{h: 0, t: DY}, ft:0, fl:0, dt:DT, text: d.text[0]});
                data.push({w:W, h:H/3, t:-H/3, l:0, dx:{w: 0, l: 0}, dy:{h: 0, t: DY}, ft:H/3, fl:0, dt:DT, text: d.text[1]});
                data.push({w:W, h:H/3, t:-H/3, l:0, dx:{w: 0, l: 0}, dy:{h: 0, t: DY}, ft:2*H/3, fl:0, dt:DT, text: d.text[2]});
            }
            else if(d.anim==9) {
                data.push({w:W/2, h:H/2, t:0, l:-W/2, dx:{w: 0, l: DX}, dy:{h: 0, t: 0}, ft:0, fl:0, dt:DT, text: d.text[0]});
                data.push({w:W/2, h:H/2, t:0, l:-W/2, dx:{w: 0, l: DX}, dy:{h: 0, t: 0}, ft:0, fl:W/2, dt:DT, text: d.text[1]});
                data.push({w:W, h:H/2, t:-H/2, l:0, dx:{w: 0, l: 0}, dy:{h: 0, t: DY}, ft:H/2, fl:0, dt:DT, text: d.text[2]});
            }
            else if(d.anim==10) {
                data.push({w:W/2, h:H, t:0, l:-W/2, dx:{w: 0, l: DX}, dy:{h: 0, t: 0}, ft:0, fl:0, dt:DT, text: d.text[0]});
                data.push({w:W/2, h:H, t:0, l:-W/2, dx:{w: 0, l: DX}, dy:{h: 0, t: 0}, ft:0, fl:W/2, dt:DT, text: d.text[1]});                
            }
            else if(d.anim==11) {
                data.push({w:W, h:H/4, t:0, l:W, dx:{w: 0, l: -DX}, dy:{h: 0, t: 0}, ft:0, fl:0, dt:DT, text: d.text[0]});
                data.push({w:W, h:H/4, t:H/4, l:-W, dx:{w: 0, l: DX}, dy:{h: 0, t: 0}, ft:H/4, fl:0, dt:DT, text: d.text[1]});
                data.push({w:W, h:H/4, t:H/2, l:W, dx:{w: 0, l: -DX}, dy:{h: 0, t: 0}, ft:H/2, fl:0, dt:DT, text: d.text[2]});
                data.push({w:W, h:H/4, t:3*H/4, l:-W, dx:{w: 0, l: DX}, dy:{h: 0, t: 0}, ft:3*H/4, fl:0, dt:DT, text: d.text[3]});
            }
            else if(d.anim==12) {
                data.push({w:W, h:H, t:-H, l:0, dx:{w: 0, l: 0}, dy:{h: 0, t: DY}, ft:0, fl:0, dt:DT, text: d.text[0]});
            }
            else if(d.anim==13) {
                data.push({w:W/2, h:H/2, t:0, l:W, dx:{w: 0, l: -DX}, dy:{h: 0, t: 0}, ft:0, fl:0, dt:DT, text: d.text[0]});
                data.push({w:W/2, h:H/2, t:0, l:W, dx:{w: 0, l: -DX}, dy:{h: 0, t: 0}, ft:0, fl:W/2, dt:DT, text: d.text[1]});
                data.push({w:W, h:H/2, t:-H/2, l:0, dx:{w: 0, l: 0}, dy:{h: 0, t: DY}, ft:H/2, fl:0, dt:DT, text: d.text[2]});
            }
            count++;
            run(data);
        }
        
    }, 2000);
        
}

function getColor() {
    var i=Math.floor(Math.random()*COLORS.length);
    return COLORS[i];
}

function getFont() {
    var i=Math.floor(Math.random()*FONTS.length);
    return FONTS[i];
}

function run(data) {
    var b;
    var f=F;
    var c="white";
    var ff=getFont();
    for(var i=0; i<data.length; i++) {
        var d=data[i];
        b=getColor();
        var div=createNewDiv(d.w, d.h, d.t, d.l, b, f, ff, c, d.text);
        animate(div, d.w, d.h, d.t, d.l, d.dx, d.dy, d.ft, d.fl, d.dt);
    }
}

go();