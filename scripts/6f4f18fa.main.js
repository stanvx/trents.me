function sketchProc(a){function b(b,c,d){var e=d,f=Math.cos(e),g=Math.sin(e),h=f*b-g*c+j.x,i=g*b+f*c+j.y;return new a.PVector(h,i)}function c(){for(var b=0;b<l.length;b++){var c=l[b];c.Update(),c.getLastY()>screen.height&&l.splice(b,1),a.fill(255,255,255,150),a.stroke(255,255,255,25),a.line(c.getX(),c.getY(),c.getLastX(),c.getLastY()),a.ellipse(c.getX(),c.getY(),2,2)}}function d(){for(var c=0;c<k.length;c++){var d=k[c],e=b(d.getX(),d.getY(),m);e.y-j.y<=0&&(d.size>1?(a.noStroke(),a.fill(255,255,255,d.alpha),a.ellipse(d.getX(),d.getY(),d.size,d.size)):(a.noFill(),a.stroke(255,255,255,d.alpha),a.point(d.getX(),d.getY())))}}function e(){for(var b=a.color(55,99,130),c=a.color(8,8,16),d=0;d<=a.height;d++){var e=a.map(d,0,a.height,0,1),f=a.lerpColor(c,b,e);a.stroke(f),a.line(0,d,a.width,d)}}function f(b,c,d){this.position=new a.PVector(b,c),this.size=3*Math.random(),this.alpha=d,this.speed=this.size/10+.1,this.getX=function(){return Math.round(this.position.get().x)},this.getY=function(){return Math.round(this.position.get().y)},this.flip=function(){this.position=new a.PVector(this.position.x,-1*this.position.y)}}function g(){this.position=new a.PVector(Math.round(Math.random()*screen.width),-100),this.positionTail=new a.PVector(this.position.get().x,this.position.get().y),this.speed=5*Math.random()+10,this.tail=20*Math.random()+50,this.getX=function(){return Math.round(this.position.get().x)},this.getY=function(){return Math.round(this.position.get().y)},this.getLastX=function(){return Math.round(this.positionTail.get().x)},this.getLastY=function(){return Math.round(this.positionTail.get().y)},this.Update=function(){var b=new a.PVector(this.tail,-this.tail),c=new a.PVector(-this.speed,this.speed);this.position=a.PVector.add(this.position,c),this.positionTail=a.PVector.add(this.position,b)}}var h,i,j,k=[],l=[],m=0,n=100,o=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;a.setup=function(){jProcessingJS(this,{fullscreen:!0,mouseoverlay:!1}),a.frameRate(25),j=new a.PVector(this.width/2,this.height+n),i=this.height;var b;b=this.width>this.height?2.5*this.width:2.5*this.height,h=o?3*b:4*b;for(var c=0;h>c;c++){var d=255*Math.random();d>50&&k.push(new f(-1*b+Math.round(2*Math.random()*b),-1*b+Math.round(2*Math.random()*b),100))}},a.draw=function(){a.background(0),e(),a.noStroke(),a.pushMatrix(),a.translate(j.x,j.y),a.rotate(m),d(),m-=.002,m<=-2*a.PI&&(m=0),a.popMatrix(),l.length<1&&Math.random()>.98&&l.push(new g),c()}}var canvas=document.getElementById("bgcanvas"),p=new Processing(canvas,sketchProc);