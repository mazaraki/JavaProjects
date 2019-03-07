(function(a,b){"object"===typeof exports&&"undefined"!==typeof module?b(exports):"function"===typeof define&&define.amd?define(["exports"],b):b(a.THREE=a.THREE||{})
})(this,function(ex){function b5(){}function e0(n,m){this.x=n||0;
this.y=m||0
}function eR(N,L,K,F,D,C,z,w,n,m){Object.defineProperty(this,"id",{value:cw++});
this.uuid=eN.generateUUID();
this.name="";
this.image=void 0!==N?N:eR.DEFAULT_IMAGE;
this.mipmaps=[];
this.mapping=void 0!==L?L:eR.DEFAULT_MAPPING;
this.wrapS=void 0!==K?K:1001;
this.wrapT=void 0!==F?F:1001;
this.magFilter=void 0!==D?D:1006;
this.minFilter=void 0!==C?C:1008;
this.anisotropy=void 0!==n?n:1;
this.format=void 0!==z?z:1023;
this.type=void 0!==w?w:1009;
this.offset=new e0(0,0);
this.repeat=new e0(1,1);
this.generateMipmaps=!0;
this.premultiplyAlpha=!1;
this.flipY=!0;
this.unpackAlignment=4;
this.encoding=void 0!==m?m:3000;
this.version=0;
this.onUpdate=null
}function eM(n,m,z,w){this.x=n||0;
this.y=m||0;
this.z=z||0;
this.w=void 0!==w?w:1
}function aZ(n,m,w){this.uuid=eN.generateUUID();
this.width=n;
this.height=m;
this.scissor=new eM(0,0,n,m);
this.scissorTest=!1;
this.viewport=new eM(0,0,n,m);
w=w||{};
void 0===w.minFilter&&(w.minFilter=1006);
this.texture=new eR(void 0,void 0,w.wrapS,w.wrapT,w.magFilter,w.minFilter,w.format,w.type,w.anisotropy,w.encoding);
this.depthBuffer=void 0!==w.depthBuffer?w.depthBuffer:!0;
this.stencilBuffer=void 0!==w.stencilBuffer?w.stencilBuffer:!0;
this.depthTexture=void 0!==w.depthTexture?w.depthTexture:null
}function aG(n,m,w){aZ.call(this,n,m,w);
this.activeMipMapLevel=this.activeCubeFace=0
}function c8(n,m,z,w){this._x=n||0;
this._y=m||0;
this._z=z||0;
this._w=void 0!==w?w:1
}function ew(n,m,w){this.x=n||0;
this.y=m||0;
this.z=w||0
}function eQ(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
}function e1(P,O,N,L,K,F,D,C,z,w,m,n){eR.call(this,null,F,D,C,z,w,L,K,m,n);
this.image={data:P,width:O,height:N};
this.magFilter=void 0!==z?z:1003;
this.minFilter=void 0!==w?w:1003;
this.flipY=this.generateMipmaps=!1;
this.unpackAlignment=1
}function bS(N,L,K,F,D,C,z,w,n,m){N=void 0!==N?N:[];
eR.call(this,N,void 0!==L?L:301,K,F,D,C,z,w,n,m);
this.flipY=!1
}function au(n,m,D){var C=n[0];
if(0>=C||0<C){return n
}var z=m*D,w=fz[z];
void 0===w&&(w=new Float32Array(z),fz[z]=w);
if(0!==m){for(C.toArray(w,0),C=1,z=0;
C!==m;
++C){z+=D,n[C].toArray(w,z)
}}return w
}function fh(n,m){var z=aW[m];
void 0===z&&(z=new Int32Array(m),aW[m]=z);
for(var w=0;
w!==m;
++w){z[w]=n.allocTextureUnit()
}return z
}function cj(n,m){n.uniform1f(this.addr,m)
}function b0(n,m){n.uniform1i(this.addr,m)
}function bI(n,m){void 0===m.x?n.uniform2fv(this.addr,m):n.uniform2f(this.addr,m.x,m.y)
}function bw(n,m){void 0!==m.x?n.uniform3f(this.addr,m.x,m.y,m.z):void 0!==m.r?n.uniform3f(this.addr,m.r,m.g,m.b):n.uniform3fv(this.addr,m)
}function bk(n,m){void 0===m.x?n.uniform4fv(this.addr,m):n.uniform4f(this.addr,m.x,m.y,m.z,m.w)
}function a2(n,m){n.uniformMatrix2fv(this.addr,!1,m.elements||m)
}function aJ(n,m){void 0===m.elements?n.uniformMatrix3fv(this.addr,!1,m):(aD.set(m.elements),n.uniformMatrix3fv(this.addr,!1,aD))
}function ax(n,m){void 0===m.elements?n.uniformMatrix4fv(this.addr,!1,m):(aq.set(m.elements),n.uniformMatrix4fv(this.addr,!1,aq))
}function aj(n,m,z){var w=z.allocTextureUnit();
n.uniform1i(this.addr,w);
z.setTexture2D(m||U,w)
}function G(n,m,z){var w=z.allocTextureUnit();
n.uniform1i(this.addr,w);
z.setTextureCube(m||x,w)
}function h(n,m){n.uniform2iv(this.addr,m)
}function fF(n,m){n.uniform3iv(this.addr,m)
}function fu(n,m){n.uniform4iv(this.addr,m)
}function o(m){switch(m){case 5126:return cj;
case 35664:return bI;
case 35665:return bw;
case 35666:return bk;
case 35674:return a2;
case 35675:return aJ;
case 35676:return ax;
case 35678:case 36198:return aj;
case 35680:return G;
case 5124:case 35670:return b0;
case 35667:case 35671:return h;
case 35668:case 35672:return fF;
case 35669:case 35673:return fu
}}function b(n,m){n.uniform1fv(this.addr,m)
}function fy(n,m){n.uniform1iv(this.addr,m)
}function e9(n,m){n.uniform2fv(this.addr,au(m,this.size,2))
}function aV(n,m){n.uniform3fv(this.addr,au(m,this.size,3))
}function aC(n,m){n.uniform4fv(this.addr,au(m,this.size,4))
}function ap(n,m){n.uniformMatrix2fv(this.addr,!1,au(m,this.size,4))
}function T(n,m){n.uniformMatrix3fv(this.addr,!1,au(m,this.size,9))
}function v(n,m){n.uniformMatrix4fv(this.addr,!1,au(m,this.size,16))
}function g(n,m,C){var z=m.length,w=fh(C,z);
n.uniform1iv(this.addr,w);
for(n=0;
n!==z;
++n){C.setTexture2D(m[n]||U,w[n])
}}function fE(n,m,C){var z=m.length,w=fh(C,z);
n.uniform1iv(this.addr,w);
for(n=0;
n!==z;
++n){C.setTextureCube(m[n]||x,w[n])
}}function ft(m){switch(m){case 5126:return b;
case 35664:return e9;
case 35665:return aV;
case 35666:return aC;
case 35674:return ap;
case 35675:return T;
case 35676:return v;
case 35678:return g;
case 35680:return fE;
case 5124:case 35670:return fy;
case 35667:case 35671:return h;
case 35668:case 35672:return fF;
case 35669:case 35673:return fu
}}function e3(n,m,w){this.id=n;
this.addr=w;
this.setValue=o(m.type)
}function eE(n,m,w){this.id=n;
this.addr=w;
this.size=m.size;
this.setValue=ft(m.type)
}function e4(m){this.id=m;
this.seq=[];
this.map={}
}function eD(P,O,N){this.seq=[];
this.map={};
this.renderer=N;
N=P.getProgramParameter(O,P.ACTIVE_UNIFORMS);
for(var L=0;
L<N;
++L){var K=P.getActiveUniform(O,L),F=P.getUniformLocation(O,K.name),D=this,C=K.name,z=C.length;
for(di.lastIndex=0;
;
){var w=di.exec(C),m=di.lastIndex,n=w[1],Q=w[3];
"]"===w[2]&&(n|=0);
if(void 0===Q||"["===Q&&m+2===z){C=D;
K=void 0===Q?new e3(n,K,F):new eE(n,K,F);
C.seq.push(K);
C.map[K.id]=K;
break
}else{Q=D.map[n],void 0===Q&&(Q=new e4(n),n=D,D=Q,n.seq.push(D),n.map[D.id]=D),D=Q
}}}}function e2(n,m,w){return void 0===m&&void 0===w?this.set(n):this.setRGB(n,m,w)
}function c5(n,m){this.min=void 0!==n?n:new e0(Infinity,Infinity);
this.max=void 0!==m?m:new e0(-Infinity,-Infinity)
}function eo(ad,ac,ab,aa,X){var W,V,S,R,Q,L,O,D,F,P,C,z,n,N,w,K;
this.render=function(cg,bg,ce,cd){if(0!==cg.length){bg=new ew;
var be=cd.w/cd.z,m=0.5*cd.z,da=0.5*cd.w,bd=16/cd.w,af=new e0(bd*be,bd),db=new ew(1,1,0),bb=new e0(1,1),ag=new c5;
ag.min.set(cd.x,cd.y);
ag.max.set(cd.x+(cd.z-16),cd.y+(cd.w-16));
if(void 0===N){var bd=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),cf=new Uint16Array([0,1,2,0,2,3]);
C=ac.createBuffer();
z=ac.createBuffer();
ac.bindBuffer(ac.ARRAY_BUFFER,C);
ac.bufferData(ac.ARRAY_BUFFER,bd,ac.STATIC_DRAW);
ac.bindBuffer(ac.ELEMENT_ARRAY_BUFFER,z);
ac.bufferData(ac.ELEMENT_ARRAY_BUFFER,cf,ac.STATIC_DRAW);
w=ac.createTexture();
K=ac.createTexture();
ab.bindTexture(ac.TEXTURE_2D,w);
ac.texImage2D(ac.TEXTURE_2D,0,ac.RGB,16,16,0,ac.RGB,ac.UNSIGNED_BYTE,null);
ac.texParameteri(ac.TEXTURE_2D,ac.TEXTURE_WRAP_S,ac.CLAMP_TO_EDGE);
ac.texParameteri(ac.TEXTURE_2D,ac.TEXTURE_WRAP_T,ac.CLAMP_TO_EDGE);
ac.texParameteri(ac.TEXTURE_2D,ac.TEXTURE_MAG_FILTER,ac.NEAREST);
ac.texParameteri(ac.TEXTURE_2D,ac.TEXTURE_MIN_FILTER,ac.NEAREST);
ab.bindTexture(ac.TEXTURE_2D,K);
ac.texImage2D(ac.TEXTURE_2D,0,ac.RGBA,16,16,0,ac.RGBA,ac.UNSIGNED_BYTE,null);
ac.texParameteri(ac.TEXTURE_2D,ac.TEXTURE_WRAP_S,ac.CLAMP_TO_EDGE);
ac.texParameteri(ac.TEXTURE_2D,ac.TEXTURE_WRAP_T,ac.CLAMP_TO_EDGE);
ac.texParameteri(ac.TEXTURE_2D,ac.TEXTURE_MAG_FILTER,ac.NEAREST);
ac.texParameteri(ac.TEXTURE_2D,ac.TEXTURE_MIN_FILTER,ac.NEAREST);
var bd=n={vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},cf=ac.createProgram(),bc=ac.createShader(ac.FRAGMENT_SHADER),ae=ac.createShader(ac.VERTEX_SHADER),bf="precision "+X.precision+" float;\n";
ac.shaderSource(bc,bf+bd.fragmentShader);
ac.shaderSource(ae,bf+bd.vertexShader);
ac.compileShader(bc);
ac.compileShader(ae);
ac.attachShader(cf,bc);
ac.attachShader(cf,ae);
ac.linkProgram(cf);
N=cf;
F=ac.getAttribLocation(N,"position");
P=ac.getAttribLocation(N,"uv");
W=ac.getUniformLocation(N,"renderType");
V=ac.getUniformLocation(N,"map");
S=ac.getUniformLocation(N,"occlusionMap");
R=ac.getUniformLocation(N,"opacity");
Q=ac.getUniformLocation(N,"color");
L=ac.getUniformLocation(N,"scale");
O=ac.getUniformLocation(N,"rotation");
D=ac.getUniformLocation(N,"screenPosition")
}ab.useProgram(N);
ab.initAttributes();
ab.enableAttribute(F);
ab.enableAttribute(P);
ab.disableUnusedAttributes();
ac.uniform1i(S,0);
ac.uniform1i(V,1);
ac.bindBuffer(ac.ARRAY_BUFFER,C);
ac.vertexAttribPointer(F,2,ac.FLOAT,!1,16,0);
ac.vertexAttribPointer(P,2,ac.FLOAT,!1,16,8);
ac.bindBuffer(ac.ELEMENT_ARRAY_BUFFER,z);
ab.disable(ac.CULL_FACE);
ab.buffers.depth.setMask(!1);
cf=0;
for(bc=cg.length;
cf<bc;
cf++){if(bd=16/cd.w,af.set(bd*be,bd),ae=cg[cf],bg.set(ae.matrixWorld.elements[12],ae.matrixWorld.elements[13],ae.matrixWorld.elements[14]),bg.applyMatrix4(ce.matrixWorldInverse),bg.applyMatrix4(ce.projectionMatrix),db.copy(bg),bb.x=cd.x+db.x*m+m-8,bb.y=cd.y+db.y*da+da-8,!0===ag.containsPoint(bb)){ab.activeTexture(ac.TEXTURE0);
ab.bindTexture(ac.TEXTURE_2D,null);
ab.activeTexture(ac.TEXTURE1);
ab.bindTexture(ac.TEXTURE_2D,w);
ac.copyTexImage2D(ac.TEXTURE_2D,0,ac.RGB,bb.x,bb.y,16,16,0);
ac.uniform1i(W,0);
ac.uniform2f(L,af.x,af.y);
ac.uniform3f(D,db.x,db.y,db.z);
ab.disable(ac.BLEND);
ab.enable(ac.DEPTH_TEST);
ac.drawElements(ac.TRIANGLES,6,ac.UNSIGNED_SHORT,0);
ab.activeTexture(ac.TEXTURE0);
ab.bindTexture(ac.TEXTURE_2D,K);
ac.copyTexImage2D(ac.TEXTURE_2D,0,ac.RGBA,bb.x,bb.y,16,16,0);
ac.uniform1i(W,1);
ab.disable(ac.DEPTH_TEST);
ab.activeTexture(ac.TEXTURE1);
ab.bindTexture(ac.TEXTURE_2D,w);
ac.drawElements(ac.TRIANGLES,6,ac.UNSIGNED_SHORT,0);
ae.positionScreen.copy(db);
ae.customUpdateCallback?ae.customUpdateCallback(ae):ae.updateLensFlares();
ac.uniform1i(W,2);
ab.enable(ac.BLEND);
for(var bf=0,cb=ae.lensFlares.length;
bf<cb;
bf++){var cc=ae.lensFlares[bf];
0.001<cc.opacity&&0.001<cc.scale&&(db.x=cc.x,db.y=cc.y,db.z=cc.z,bd=cc.size*cc.scale/cd.w,af.x=bd*be,af.y=bd,ac.uniform3f(D,db.x,db.y,db.z),ac.uniform2f(L,af.x,af.y),ac.uniform1f(O,cc.rotation),ac.uniform1f(R,cc.opacity),ac.uniform3f(Q,cc.color.r,cc.color.g,cc.color.b),ab.setBlending(cc.blending,cc.blendEquation,cc.blendSrc,cc.blendDst),aa.setTexture2D(cc.texture,1),ac.drawElements(ac.TRIANGLES,6,ac.UNSIGNED_SHORT,0))
}}}ab.enable(ac.CULL_FACE);
ab.enable(ac.DEPTH_TEST);
ab.buffers.depth.setMask(!0);
ab.reset()
}}
}function bL(L,K,F,D,C,z,w,n,m){eR.call(this,L,K,F,D,C,z,w,n,m);
this.needsUpdate=!0
}function d5(bf,be,bd,bc,bb){var ag,af,ae,ac,ab,S,W,P,Q,X,O,L,F,V,K,R,N;
function z(cb,m){return cb.renderOrder!==m.renderOrder?cb.renderOrder-m.renderOrder:cb.z!==m.z?m.z-cb.z:m.id-cb.id
}var ad,aa,C,n,bg=new ew,D=new c8,w=new ew;
this.render=function(da,cc,cd){if(0!==da.length){if(void 0===C){var ce=new Float32Array([-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]),cf=new Uint16Array([0,1,2,0,2,3]);
ad=be.createBuffer();
aa=be.createBuffer();
be.bindBuffer(be.ARRAY_BUFFER,ad);
be.bufferData(be.ARRAY_BUFFER,ce,be.STATIC_DRAW);
be.bindBuffer(be.ELEMENT_ARRAY_BUFFER,aa);
be.bufferData(be.ELEMENT_ARRAY_BUFFER,cf,be.STATIC_DRAW);
ce=be.createProgram();
cf=be.createShader(be.VERTEX_SHADER);
var cg=be.createShader(be.FRAGMENT_SHADER);
be.shaderSource(cf,["precision "+bb.precision+" float;","#define SHADER_NAME SpriteMaterial\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
be.shaderSource(cg,["precision "+bb.precision+" float;","#define SHADER_NAME SpriteMaterial\nuniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
be.compileShader(cf);
be.compileShader(cg);
be.attachShader(ce,cf);
be.attachShader(ce,cg);
be.linkProgram(ce);
C=ce;
R=be.getAttribLocation(C,"position");
N=be.getAttribLocation(C,"uv");
ag=be.getUniformLocation(C,"uvOffset");
af=be.getUniformLocation(C,"uvScale");
ae=be.getUniformLocation(C,"rotation");
ac=be.getUniformLocation(C,"scale");
ab=be.getUniformLocation(C,"color");
S=be.getUniformLocation(C,"map");
W=be.getUniformLocation(C,"opacity");
P=be.getUniformLocation(C,"modelViewMatrix");
Q=be.getUniformLocation(C,"projectionMatrix");
X=be.getUniformLocation(C,"fogType");
O=be.getUniformLocation(C,"fogDensity");
L=be.getUniformLocation(C,"fogNear");
F=be.getUniformLocation(C,"fogFar");
V=be.getUniformLocation(C,"fogColor");
K=be.getUniformLocation(C,"alphaTest");
ce=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");
ce.width=8;
ce.height=8;
cf=ce.getContext("2d");
cf.fillStyle="white";
cf.fillRect(0,0,8,8);
n=new bL(ce)
}bd.useProgram(C);
bd.initAttributes();
bd.enableAttribute(R);
bd.enableAttribute(N);
bd.disableUnusedAttributes();
bd.disable(be.CULL_FACE);
bd.enable(be.BLEND);
be.bindBuffer(be.ARRAY_BUFFER,ad);
be.vertexAttribPointer(R,2,be.FLOAT,!1,16,0);
be.vertexAttribPointer(N,2,be.FLOAT,!1,16,8);
be.bindBuffer(be.ELEMENT_ARRAY_BUFFER,aa);
be.uniformMatrix4fv(Q,!1,cd.projectionMatrix.elements);
bd.activeTexture(be.TEXTURE0);
be.uniform1i(S,0);
cf=ce=0;
(cg=cc.fog)?(be.uniform3f(V,cg.color.r,cg.color.g,cg.color.b),cg.isFog?(be.uniform1f(L,cg.near),be.uniform1f(F,cg.far),be.uniform1i(X,1),cf=ce=1):cg.isFogExp2&&(be.uniform1f(O,cg.density),be.uniform1i(X,2),cf=ce=2)):(be.uniform1i(X,0),cf=ce=0);
for(var m=0,cb=da.length;
m<cb;
m++){cg=da[m],cg.modelViewMatrix.multiplyMatrices(cd.matrixWorldInverse,cg.matrixWorld),cg.z=-cg.modelViewMatrix.elements[14]
}da.sort(z);
for(var dd=[],m=0,cb=da.length;
m<cb;
m++){cg=da[m];
var db=cg.material;
if(!1!==db.visible){cg.onBeforeRender(bf,cc,cd,void 0,db,void 0);
be.uniform1f(K,db.alphaTest);
be.uniformMatrix4fv(P,!1,cg.modelViewMatrix.elements);
cg.matrixWorld.decompose(bg,D,w);
dd[0]=w.x;
dd[1]=w.y;
var dc=0;
cc.fog&&db.fog&&(dc=cf);
ce!==dc&&(be.uniform1i(X,dc),ce=dc);
null!==db.map?(be.uniform2f(ag,db.map.offset.x,db.map.offset.y),be.uniform2f(af,db.map.repeat.x,db.map.repeat.y)):(be.uniform2f(ag,0,0),be.uniform2f(af,1,1));
be.uniform1f(W,db.opacity);
be.uniform3f(ab,db.color.r,db.color.g,db.color.b);
be.uniform1f(ae,db.rotation);
be.uniform2fv(ac,dd);
bd.setBlending(db.blending,db.blendEquation,db.blendSrc,db.blendDst,db.blendEquationAlpha,db.blendSrcAlpha,db.blendDstAlpha,db.premultipliedAlpha);
bd.buffers.depth.setTest(db.depthTest);
bd.buffers.depth.setMask(db.depthWrite);
bc.setTexture2D(db.map||n,0);
be.drawElements(be.TRIANGLES,6,be.UNSIGNED_SHORT,0);
cg.onAfterRender(bf,cc,cd,void 0,db,void 0)
}}bd.enable(be.CULL_FACE);
bd.reset()
}}
}function eP(){Object.defineProperty(this,"id",{value:dS++});
this.uuid=eN.generateUUID();
this.name="";
this.type="Material";
this.lights=this.fog=!0;
this.blending=1;
this.side=0;
this.flatShading=!1;
this.vertexColors=0;
this.opacity=1;
this.transparent=!1;
this.blendSrc=204;
this.blendDst=205;
this.blendEquation=100;
this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;
this.depthFunc=3;
this.depthWrite=this.depthTest=!0;
this.clippingPlanes=null;
this.clipShadows=this.clipIntersection=!1;
this.colorWrite=!0;
this.precision=null;
this.polygonOffset=!1;
this.polygonOffsetUnits=this.polygonOffsetFactor=0;
this.dithering=!1;
this.alphaTest=0;
this.premultipliedAlpha=!1;
this.overdraw=0;
this.visible=!0;
this.userData={};
this.needsUpdate=!0
}function fD(m){eP.call(this);
this.type="ShaderMaterial";
this.defines={};
this.uniforms={};
this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
this.linewidth=1;
this.wireframe=!1;
this.wireframeLinewidth=1;
this.morphNormals=this.morphTargets=this.skinning=this.clipping=this.lights=this.fog=!1;
this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};
this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};
this.index0AttributeName=void 0;
void 0!==m&&(void 0!==m.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(m))
}function bG(m){eP.call(this);
this.type="MeshDepthMaterial";
this.depthPacking=3200;
this.morphTargets=this.skinning=!1;
this.displacementMap=this.alphaMap=this.map=null;
this.displacementScale=1;
this.displacementBias=0;
this.wireframe=!1;
this.wireframeLinewidth=1;
this.lights=this.fog=!1;
this.setValues(m)
}function bu(m){eP.call(this);
this.type="MeshDistanceMaterial";
this.referencePosition=new ew;
this.nearDistance=1;
this.farDistance=1000;
this.morphTargets=this.skinning=!1;
this.displacementMap=this.alphaMap=this.map=null;
this.displacementScale=1;
this.displacementBias=0;
this.lights=this.fog=!1;
this.setValues(m)
}function dl(n,m){this.min=void 0!==n?n:new ew(Infinity,Infinity,Infinity);
this.max=void 0!==m?m:new ew(-Infinity,-Infinity,-Infinity)
}function av(n,m){this.center=void 0!==n?n:new ew;
this.radius=void 0!==m?m:0
}function bp(){this.elements=[1,0,0,0,1,0,0,0,1];
0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
}function fl(n,m){this.normal=void 0!==n?n:new ew(1,0,0);
this.constant=void 0!==m?m:0
}function cI(n,m,D,C,z,w){this.planes=[void 0!==n?n:new fl,void 0!==m?m:new fl,void 0!==D?D:new fl,void 0!==C?C:new fl,void 0!==z?z:new fl,void 0!==w?w:new fl]
}function ep(ad,ac,ab){function aa(bf,be,bd,bc,bb,ag){var af=bf.geometry;
var m=O;
var ae=bf.customDepthMaterial;
bd&&(m=D,ae=bf.customDistanceMaterial);
ae?m=ae:(ae=!1,be.morphTargets&&(af&&af.isBufferGeometry?ae=af.morphAttributes&&af.morphAttributes.position&&0<af.morphAttributes.position.length:af&&af.isGeometry&&(ae=af.morphTargets&&0<af.morphTargets.length)),bf.isSkinnedMesh&&!1===be.skinning&&console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",bf),bf=bf.isSkinnedMesh&&be.skinning,af=0,ae&&(af|=1),bf&&(af|=2),m=m[af]);
ad.localClippingEnabled&&!0===be.clipShadows&&0!==be.clippingPlanes.length&&(af=m.uuid,ae=be.uuid,bf=F[af],void 0===bf&&(bf={},F[af]=bf),af=bf[ae],void 0===af&&(af=m.clone(),bf[ae]=af),m=af);
m.visible=be.visible;
m.wireframe=be.wireframe;
ae=be.side;
K.renderSingleSided&&2==ae&&(ae=0);
K.renderReverseSided&&(0===ae?ae=1:1===ae&&(ae=0));
m.side=ae;
m.clipShadows=be.clipShadows;
m.clippingPlanes=be.clippingPlanes;
m.clipIntersection=be.clipIntersection;
m.wireframeLinewidth=be.wireframeLinewidth;
m.linewidth=be.linewidth;
bd&&m.isMeshDistanceMaterial&&(m.referencePosition.copy(bc),m.nearDistance=bb,m.farDistance=ag);
return m
}function X(bg,bf,be,bc){var bd;
if(!1!==bg.visible){if(bg.layers.test(bf.layers)&&(bg.isMesh||bg.isLine||bg.isPoints)&&bg.castShadow&&(!bg.frustumCulled||W.intersectsObject(bg))){bg.modelViewMatrix.multiplyMatrices(be.matrixWorldInverse,bg.matrixWorld);
var af=ac.update(bg),cc=bg.material;
if(Array.isArray(cc)){for(var ae=af.groups,ag=0,bb=ae.length;
ag<bb;
ag++){var cb=ae[ag];
(bd=cc[cb.materialIndex])&&bd.visible&&(bd=aa(bg,bd,bc,L,be.near,be.far),ad.renderBufferDirect(be,null,af,bd,bg,cb))
}}else{cc.visible&&(bd=aa(bg,cc,bc,L,be.near,be.far),ad.renderBufferDirect(be,null,af,bd,bg,null))
}}bg=bg.children;
af=0;
for(cc=bg.length;
af<cc;
af++){X(bg[af],bf,be,bc)
}}}var W=new cI,V=new eQ,S=new e0,R=new e0(ab,ab),Q=new ew,L=new ew,O=Array(4),D=Array(4),F={},P=[new ew(1,0,0),new ew(-1,0,0),new ew(0,0,1),new ew(0,0,-1),new ew(0,1,0),new ew(0,-1,0)],C=[new ew(0,1,0),new ew(0,1,0),new ew(0,1,0),new ew(0,1,0),new ew(0,0,1),new ew(0,0,-1)],z=[new eM,new eM,new eM,new eM,new eM,new eM];
for(ab=0;
4!==ab;
++ab){var n=0!==(ab&1),N=0!==(ab&2),w=new bG({depthPacking:3201,morphTargets:n,skinning:N});
O[ab]=w;
n=new bu({morphTargets:n,skinning:N});
D[ab]=n
}var K=this;
this.enabled=!1;
this.autoUpdate=!0;
this.needsUpdate=!1;
this.type=1;
this.renderSingleSided=this.renderReverseSided=!0;
this.render=function(be,bc,bb){if(!1!==K.enabled&&(!1!==K.autoUpdate||!1!==K.needsUpdate)&&0!==be.length){var ae=ad.state;
ae.disable(ad.context.BLEND);
ae.buffers.color.setClear(1,1,1,1);
ae.buffers.depth.setTest(!0);
ae.setScissorTest(!1);
for(var cc,m=0,af=be.length;
m<af;
m++){var cb=be[m];
cc=cb.shadow;
var bf=cb&&cb.isPointLight;
if(void 0===cc){console.warn("THREE.WebGLShadowMap:",cb,"has no shadow.")
}else{var ag=cc.camera;
S.copy(cc.mapSize);
S.min(R);
if(bf){var bd=S.x,bg=S.y;
z[0].set(2*bd,bg,bd,bg);
z[1].set(0,bg,bd,bg);
z[2].set(3*bd,bg,bd,bg);
z[3].set(bd,bg,bd,bg);
z[4].set(3*bd,0,bd,bg);
z[5].set(bd,0,bd,bg);
S.x*=4;
S.y*=2
}null===cc.map&&(cc.map=new aZ(S.x,S.y,{minFilter:1003,magFilter:1003,format:1023}),cc.map.texture.name=cb.name+".shadowMap",ag.updateProjectionMatrix());
cc.isSpotLightShadow&&cc.update(cb);
bd=cc.map;
bg=cc.matrix;
L.setFromMatrixPosition(cb.matrixWorld);
ag.position.copy(L);
bf?(cc=6,bg.makeTranslation(-L.x,-L.y,-L.z)):(cc=1,Q.setFromMatrixPosition(cb.target.matrixWorld),ag.lookAt(Q),ag.updateMatrixWorld(),bg.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),bg.multiply(ag.projectionMatrix),bg.multiply(ag.matrixWorldInverse));
ad.setRenderTarget(bd);
ad.clear();
for(cb=0;
cb<cc;
cb++){bf&&(Q.copy(ag.position),Q.add(P[cb]),ag.up.copy(C[cb]),ag.lookAt(Q),ag.updateMatrixWorld(),ae.viewport(z[cb])),V.multiplyMatrices(ag.projectionMatrix,ag.matrixWorldInverse),W.setFromMatrix(V),X(bc,bb,ag,bf)
}}}K.needsUpdate=!1
}}
}function dF(n){var m={};
return{get:function(w){w.isInterleavedBufferAttribute&&(w=w.data);
return m[w.uuid]
},remove:function(z){z.isInterleavedBufferAttribute&&(z=z.data);
var w=m[z.uuid];
w&&(n.deleteBuffer(w.buffer),delete m[z.uuid])
},update:function(K,F){K.isInterleavedBufferAttribute&&(K=K.data);
var D=m[K.uuid];
if(void 0===D){var D=K.uuid,C=K.array,z=K.dynamic?n.DYNAMIC_DRAW:n.STATIC_DRAW,w=n.createBuffer();
n.bindBuffer(F,w);
n.bufferData(F,C,z);
K.onUploadCallback();
F=n.FLOAT;
C instanceof Float32Array?F=n.FLOAT:C instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):C instanceof Uint16Array?F=n.UNSIGNED_SHORT:C instanceof Int16Array?F=n.SHORT:C instanceof Uint32Array?F=n.UNSIGNED_INT:C instanceof Int32Array?F=n.INT:C instanceof Int8Array?F=n.BYTE:C instanceof Uint8Array&&(F=n.UNSIGNED_BYTE);
m[D]={buffer:w,type:F,bytesPerElement:C.BYTES_PER_ELEMENT,version:K.version}
}else{D.version<K.version&&(C=K,w=C.array,z=C.updateRange,n.bindBuffer(F,D.buffer),!1===C.dynamic?n.bufferData(F,w,n.STATIC_DRAW):-1===z.count?n.bufferSubData(F,0,w):0===z.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):(n.bufferSubData(F,z.offset*w.BYTES_PER_ELEMENT,w.subarray(z.offset,z.offset+z.count)),z.count=-1),D.version=K.version)
}}}
}function bj(n,m,z,w){this._x=n||0;
this._y=m||0;
this._z=z||0;
this._order=w||bj.DefaultOrder
}function cZ(){this.mask=1
}function ev(){Object.defineProperty(this,"id",{value:dt++});
this.uuid=eN.generateUUID();
this.name="";
this.type="Object3D";
this.parent=null;
this.children=[];
this.up=ev.DefaultUp.clone();
var n=new ew,m=new bj,z=new c8,w=new ew(1,1,1);
m.onChange(function(){z.setFromEuler(m,!1)
});
z.onChange(function(){m.setFromQuaternion(z,void 0,!1)
});
Object.defineProperties(this,{position:{enumerable:!0,value:n},rotation:{enumerable:!0,value:m},quaternion:{enumerable:!0,value:z},scale:{enumerable:!0,value:w},modelViewMatrix:{value:new eQ},normalMatrix:{value:new bp}});
this.matrix=new eQ;
this.matrixWorld=new eQ;
this.matrixAutoUpdate=ev.DefaultMatrixAutoUpdate;
this.matrixWorldNeedsUpdate=!1;
this.layers=new cZ;
this.visible=!0;
this.receiveShadow=this.castShadow=!1;
this.frustumCulled=!0;
this.renderOrder=0;
this.userData={}
}function dX(){ev.call(this);
this.type="Camera";
this.matrixWorldInverse=new eQ;
this.projectionMatrix=new eQ
}function ah(n,m,D,C,z,w){dX.call(this);
this.type="OrthographicCamera";
this.zoom=1;
this.view=null;
this.left=n;
this.right=m;
this.top=D;
this.bottom=C;
this.near=void 0!==z?z:0.1;
this.far=void 0!==w?w:2000;
this.updateProjectionMatrix()
}function cW(n,m,z,w){dX.call(this);
this.type="PerspectiveCamera";
this.fov=void 0!==n?n:50;
this.zoom=1;
this.near=void 0!==z?z:0.1;
this.far=void 0!==w?w:2000;
this.focus=10;
this.aspect=void 0!==m?m:1;
this.view=null;
this.filmGauge=35;
this.filmOffset=0;
this.updateProjectionMatrix()
}function c2(n,m,D,C,z,w){this.a=n;
this.b=m;
this.c=D;
this.normal=C&&C.isVector3?C:new ew;
this.vertexNormals=Array.isArray(C)?C:[];
this.color=z&&z.isColor?z:new e2;
this.vertexColors=Array.isArray(z)?z:[];
this.materialIndex=void 0!==w?w:0
}function eO(){Object.defineProperty(this,"id",{value:cN++});
this.uuid=eN.generateUUID();
this.name="";
this.type="Geometry";
this.vertices=[];
this.colors=[];
this.faces=[];
this.faceVertexUvs=[[]];
this.morphTargets=[];
this.morphNormals=[];
this.skinWeights=[];
this.skinIndices=[];
this.lineDistances=[];
this.boundingSphere=this.boundingBox=null;
this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.verticesNeedUpdate=this.elementsNeedUpdate=!1
}function eT(n,m,w){if(Array.isArray(n)){throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.")
}this.uuid=eN.generateUUID();
this.name="";
this.array=n;
this.itemSize=m;
this.count=void 0!==n?n.length/m:0;
this.normalized=!0===w;
this.dynamic=!1;
this.updateRange={offset:0,count:-1};
this.onUploadCallback=function(){};
this.version=0
}function bz(n,m){eT.call(this,new Int8Array(n),m)
}function bn(n,m){eT.call(this,new Uint8Array(n),m)
}function a5(n,m){eT.call(this,new Uint8ClampedArray(n),m)
}function aM(n,m){eT.call(this,new Int16Array(n),m)
}function em(n,m){eT.call(this,new Uint16Array(n),m)
}function aA(n,m){eT.call(this,new Int32Array(n),m)
}function d3(n,m){eT.call(this,new Uint32Array(n),m)
}function es(n,m){eT.call(this,new Float32Array(n),m)
}function am(n,m){eT.call(this,new Float64Array(n),m)
}function d6(){this.indices=[];
this.vertices=[];
this.normals=[];
this.colors=[];
this.uvs=[];
this.uvs2=[];
this.groups=[];
this.morphTargets={};
this.skinWeights=[];
this.skinIndices=[];
this.boundingSphere=this.boundingBox=null;
this.groupsNeedUpdate=this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=!1
}function cC(n){if(0===n.length){return -Infinity
}for(var m=n[0],z=1,w=n.length;
z<w;
++z){n[z]>m&&(m=n[z])
}return m
}function eX(){Object.defineProperty(this,"id",{value:cN++});
this.uuid=eN.generateUUID();
this.name="";
this.type="BufferGeometry";
this.index=null;
this.attributes={};
this.morphAttributes={};
this.groups=[];
this.boundingSphere=this.boundingBox=null;
this.drawRange={start:0,count:Infinity}
}function B(n,m,D,C,z,w){eO.call(this);
this.type="BoxGeometry";
this.parameters={width:n,height:m,depth:D,widthSegments:C,heightSegments:z,depthSegments:w};
this.fromBufferGeometry(new dQ(n,m,D,C,z,w));
this.mergeVertices()
}function dQ(Q,P,O,N,L,K){function F(cf,ce,cd,cc,cb,bg,bf,bc,S,be,bd){var bb=bg/S,ad=bf/be,ae=bg/2,aa=bf/2,X=bc/2;
bf=S+1;
var ag=be+1,W=bg=0,ac,ab,V=new ew;
for(ab=0;
ab<ag;
ab++){var af=ab*ad-aa;
for(ac=0;
ac<bf;
ac++){V[cf]=(ac*bb-ae)*cc,V[ce]=af*cb,V[cd]=X,z.push(V.x,V.y,V.z),V[cf]=0,V[ce]=0,V[cd]=0<bc?1:-1,n.push(V.x,V.y,V.z),w.push(ac/S),w.push(1-ab/be),bg+=1
}}for(ab=0;
ab<be;
ab++){for(ac=0;
ac<S;
ac++){cf=R+ac+bf*(ab+1),ce=R+(ac+1)+bf*(ab+1),cd=R+(ac+1)+bf*ab,C.push(R+ac+bf*ab,cf,cd),C.push(cf,ce,cd),W+=6
}}D.addGroup(m,W,bd);
m+=W;
R+=bg
}eX.call(this);
this.type="BoxBufferGeometry";
this.parameters={width:Q,height:P,depth:O,widthSegments:N,heightSegments:L,depthSegments:K};
var D=this;
N=Math.floor(N)||1;
L=Math.floor(L)||1;
K=Math.floor(K)||1;
var C=[],z=[],n=[],w=[],R=0,m=0;
F("z","y","x",-1,-1,O,P,Q,K,L,0);
F("z","y","x",1,-1,O,P,-Q,K,L,1);
F("x","z","y",1,1,Q,O,P,N,K,2);
F("x","z","y",1,-1,Q,O,-P,N,K,3);
F("x","y","z",1,-1,Q,P,O,N,L,4);
F("x","y","z",-1,-1,Q,P,-O,N,L,5);
this.setIndex(C);
this.addAttribute("position",new es(z,3));
this.addAttribute("normal",new es(n,3));
this.addAttribute("uv",new es(w,2))
}function J(n,m,z,w){eO.call(this);
this.type="PlaneGeometry";
this.parameters={width:n,height:m,widthSegments:z,heightSegments:w};
this.fromBufferGeometry(new dE(n,m,z,w));
this.mergeVertices()
}function dE(S,R,Q,P){eX.call(this);
this.type="PlaneBufferGeometry";
this.parameters={width:S,height:R,widthSegments:Q,heightSegments:P};
var O=S/2,N=R/2;
Q=Math.floor(Q)||1;
P=Math.floor(P)||1;
var L=Q+1,K=P+1,F=S/Q,D=R/P,w=[],z=[],V=[],n=[];
for(S=0;
S<K;
S++){var C=S*D-N;
for(R=0;
R<L;
R++){z.push(R*F-O,-C,0),V.push(0,0,1),n.push(R/Q),n.push(1-S/P)
}}for(S=0;
S<P;
S++){for(R=0;
R<Q;
R++){O=R+L*(S+1),N=R+1+L*(S+1),K=R+1+L*S,w.push(R+L*S,O,K),w.push(O,N,K)
}}this.setIndex(w);
this.addAttribute("position",new es(z,3));
this.addAttribute("normal",new es(V,3));
this.addAttribute("uv",new es(n,2))
}function aO(m){eP.call(this);
this.type="MeshBasicMaterial";
this.color=new e2(16777215);
this.lightMap=this.map=null;
this.lightMapIntensity=1;
this.aoMap=null;
this.aoMapIntensity=1;
this.envMap=this.alphaMap=this.specularMap=null;
this.combine=0;
this.reflectivity=1;
this.refractionRatio=0.98;
this.wireframe=!1;
this.wireframeLinewidth=1;
this.wireframeLinejoin=this.wireframeLinecap="round";
this.lights=this.morphTargets=this.skinning=!1;
this.setValues(m)
}function ds(n,m){this.origin=void 0!==n?n:new ew;
this.direction=void 0!==m?m:new ew
}function k(n,m){this.start=void 0!==n?n:new ew;
this.end=void 0!==m?m:new ew
}function cQ(n,m,w){this.a=void 0!==n?n:new ew;
this.b=void 0!==m?m:new ew;
this.c=void 0!==w?w:new ew
}function dR(n,m){ev.call(this);
this.type="Mesh";
this.geometry=void 0!==n?n:new eX;
this.material=void 0!==m?m:new aO({color:16777215*Math.random()});
this.drawMode=0;
this.updateMorphTargets()
}function c9(N,L,K,F){function D(O,P){L.buffers.color.setClear(O.r,O.g,O.b,P,F)
}var C=new e2(0),z=0,w,n,m;
return{getClearColor:function(){return C
},setClearColor:function(P,O){C.set(P);
z=void 0!==O?O:1;
D(C,z)
},getClearAlpha:function(){return z
},setClearAlpha:function(O){z=O;
D(C,z)
},render:function(O,R,P,Q){R=R.background;
null===R?D(C,z):R&&R.isColor&&(D(R,1),Q=!0);
(N.autoClear||Q)&&N.clear(N.autoClearColor,N.autoClearDepth,N.autoClearStencil);
R&&R.isCubeTexture?(void 0===m&&(m=new dR(new dQ(1,1,1),new fD({uniforms:c7.cube.uniforms,vertexShader:c7.cube.vertexShader,fragmentShader:c7.cube.fragmentShader,side:1,depthTest:!0,depthWrite:!1,polygonOffset:!0,fog:!1})),m.geometry.removeAttribute("normal"),m.geometry.removeAttribute("uv"),m.onBeforeRender=function(V,S,W){V=W.far;
this.matrixWorld.makeScale(V,V,V);
this.matrixWorld.copyPosition(W.matrixWorld);
this.material.polygonOffsetUnits=10*V
},K.update(m.geometry)),m.material.uniforms.tCube.value=R,O.push(m,m.geometry,m.material,0,null)):R&&R.isTexture&&(void 0===w&&(w=new ah(-1,1,1,-1,0,1),n=new dR(new dE(2,2),new aO({depthTest:!1,depthWrite:!1,fog:!1})),K.update(n.geometry)),n.material.map=R,N.renderBufferDirect(w,null,n.geometry,n.material,n,null))
}}
}function cX(n,m){return n.renderOrder!==m.renderOrder?n.renderOrder-m.renderOrder:n.program&&m.program&&n.program!==m.program?n.program.id-m.program.id:n.material.id!==m.material.id?n.material.id-m.material.id:n.z!==m.z?n.z-m.z:n.id-m.id
}function cL(n,m){return n.renderOrder!==m.renderOrder?n.renderOrder-m.renderOrder:n.z!==m.z?m.z-n.z:n.id-m.id
}function cA(){var n=[],m=0,z=[],w=[];
return{opaque:z,transparent:w,init:function(){m=0;
z.length=0;
w.length=0
},push:function(N,L,K,F,D){var C=n[m];
void 0===C?(C={id:N.id,object:N,geometry:L,material:K,program:K.program,renderOrder:N.renderOrder,z:F,group:D},n[m]=C):(C.id=N.id,C.object=N,C.geometry=L,C.material=K,C.program=K.program,C.renderOrder=N.renderOrder,C.z=F,C.group=D);
(!0===K.transparent?w:z).push(C);
m++
},sort:function(){1<z.length&&z.sort(cX);
1<w.length&&w.sort(cL)
}}
}function cp(){var m={};
return{get:function(n,w){n=n.id+","+w.id;
w=m[n];
void 0===w&&(w=new cA,m[n]=w);
return w
},dispose:function(){m={}
}}
}function b6(n,m){return Math.abs(m[1])-Math.abs(n[1])
}function bO(n){var m={},w=new Float32Array(8);
return{update:function(P,O,N,L){var K=P.morphTargetInfluences,F=K.length;
P=m[O.id];
if(void 0===P){P=[];
for(var D=0;
D<F;
D++){P[D]=[D,0]
}m[O.id]=P
}var z=N.morphTargets&&O.morphAttributes.position;
N=N.morphNormals&&O.morphAttributes.normal;
for(D=0;
D<F;
D++){var C=P[D];
0!==C[1]&&(z&&O.removeAttribute("morphTarget"+D),N&&O.removeAttribute("morphNormal"+D))
}for(D=0;
D<F;
D++){C=P[D],C[0]=D,C[1]=K[D]
}P.sort(b6);
for(D=0;
8>D;
D++){if(C=P[D]){if(K=C[0],C=C[1]){z&&O.addAttribute("morphTarget"+D,z[K]);
N&&O.addAttribute("morphNormal"+D,N[K]);
w[D]=C;
continue
}}w[D]=0
}L.getUniforms().setValue(n,"morphTargetInfluences",w)
}}
}function bC(n,m,D){var C,z,w;
this.setMode=function(F){C=F
};
this.setIndex=function(F){z=F.type;
w=F.bytesPerElement
};
this.render=function(F,K){n.drawElements(C,K,z,F*w);
D.calls++;
D.vertices+=K;
C===n.TRIANGLES?D.faces+=K/3:C===n.POINTS&&(D.points+=K)
};
this.renderInstances=function(N,L,K){var F=m.get("ANGLE_instanced_arrays");
null===F?console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."):(F.drawElementsInstancedANGLE(C,K,z,L*w,N.maxInstancedCount),D.calls++,D.vertices+=K*N.maxInstancedCount,C===n.TRIANGLES?D.faces+=N.maxInstancedCount*K/3:C===n.POINTS&&(D.points+=N.maxInstancedCount*K))
}
}function bq(n,m,z){var w;
this.setMode=function(C){w=C
};
this.render=function(C,D){n.drawArrays(w,C,D);
z.calls++;
z.vertices+=D;
w===n.TRIANGLES?z.faces+=D/3:w===n.POINTS&&(z.points+=D)
};
this.renderInstances=function(L,K,F){var D=m.get("ANGLE_instanced_arrays");
if(null===D){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.")
}else{var C=L.attributes.position;
C.isInterleavedBufferAttribute?(F=C.data.count,D.drawArraysInstancedANGLE(w,0,F,L.maxInstancedCount)):D.drawArraysInstancedANGLE(w,K,F,L.maxInstancedCount);
z.calls++;
z.vertices+=F*L.maxInstancedCount;
w===n.TRIANGLES?z.faces+=L.maxInstancedCount*F/3:w===n.POINTS&&(z.points+=L.maxInstancedCount*F)
}}
}function a8(n,m,D){function C(F){F=F.target;
var L=z[F.id];
null!==L.index&&m.remove(L.index);
for(var K in L.attributes){m.remove(L.attributes[K])
}F.removeEventListener("dispose",C);
delete z[F.id];
if(K=w[F.id]){m.remove(K),delete w[F.id]
}if(K=w[L.id]){m.remove(K),delete w[L.id]
}D.geometries--
}var z={},w={};
return{get:function(K,F){var L=z[F.id];
if(L){return L
}F.addEventListener("dispose",C);
F.isBufferGeometry?L=F:F.isGeometry&&(void 0===F._bufferGeometry&&(F._bufferGeometry=(new eX).setFromObject(K)),L=F._bufferGeometry);
z[F.id]=L;
D.geometries++;
return L
},update:function(O){var N=O.index,L=O.attributes;
null!==N&&m.update(N,n.ELEMENT_ARRAY_BUFFER);
for(var K in L){m.update(L[K],n.ARRAY_BUFFER)
}O=O.morphAttributes;
for(K in O){for(var N=O[K],L=0,F=N.length;
L<F;
L++){m.update(N[L],n.ARRAY_BUFFER)
}}},getWireframeAttribute:function(R){var Q=w[R.id];
if(Q){return Q
}Q=[];
var P=R.index;
var L=R.attributes;
if(null!==P){var N=P.array;
for(var O=0,F=N.length;
O<F;
O+=3){var K=N[O+0];
L=N[O+1];
P=N[O+2];
Q.push(K,L,L,P,P,K)
}}else{for(N=L.position.array,O=0,F=N.length/3-1;
O<F;
O+=3){K=O+0,L=O+1,P=O+2,Q.push(K,L,L,P,P,K)
}}Q=new (65535<cC(Q)?d3:em)(Q,1);
m.update(Q,n.ELEMENT_ARRAY_BUFFER);
return w[R.id]=Q
}}
}function aP(){var m={};
return{get:function(n){if(void 0!==m[n.id]){return m[n.id]
}switch(n.type){case"DirectionalLight":var w={direction:new ew,color:new e2,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new e0};
break;
case"SpotLight":w={position:new ew,direction:new ew,color:new e2,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new e0};
break;
case"PointLight":w={position:new ew,color:new e2,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new e0,shadowCameraNear:1,shadowCameraFar:1000};
break;
case"HemisphereLight":w={direction:new ew,skyColor:new e2,groundColor:new e2};
break;
case"RectAreaLight":w={color:new e2,position:new ew,halfWidth:new ew,halfHeight:new ew}
}return m[n.id]=w
}}
}function bT(){var n=new aP,m={hash:"",ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]},C=new ew,z=new eQ,w=new eQ;
return{setup:function(af,ae,ad){for(var ab,aa=0,R=0,V=0,O=0,P=0,X=0,N=0,K=0,W=ad.matrixWorldInverse,S=0,F=af.length;
S<F;
S++){var Q=af[S];
ab=Q.color;
var L=Q.intensity,D=Q.distance,ac=Q.shadow&&Q.shadow.map?Q.shadow.map.texture:null;
if(Q.isAmbientLight){aa+=ab.r*L,R+=ab.g*L,V+=ab.b*L
}else{if(Q.isDirectionalLight){ad=n.get(Q);
ad.color.copy(Q.color).multiplyScalar(Q.intensity);
ad.direction.setFromMatrixPosition(Q.matrixWorld);
C.setFromMatrixPosition(Q.target.matrixWorld);
ad.direction.sub(C);
ad.direction.transformDirection(W);
if(ad.shadow=Q.castShadow){ab=Q.shadow,ad.shadowBias=ab.bias,ad.shadowRadius=ab.radius,ad.shadowMapSize=ab.mapSize
}m.directionalShadowMap[O]=ac;
m.directionalShadowMatrix[O]=Q.shadow.matrix;
m.directional[O]=ad;
O++
}else{if(Q.isSpotLight){ad=n.get(Q);
ad.position.setFromMatrixPosition(Q.matrixWorld);
ad.position.applyMatrix4(W);
ad.color.copy(ab).multiplyScalar(L);
ad.distance=D;
ad.direction.setFromMatrixPosition(Q.matrixWorld);
C.setFromMatrixPosition(Q.target.matrixWorld);
ad.direction.sub(C);
ad.direction.transformDirection(W);
ad.coneCos=Math.cos(Q.angle);
ad.penumbraCos=Math.cos(Q.angle*(1-Q.penumbra));
ad.decay=0===Q.distance?0:Q.decay;
if(ad.shadow=Q.castShadow){ab=Q.shadow,ad.shadowBias=ab.bias,ad.shadowRadius=ab.radius,ad.shadowMapSize=ab.mapSize
}m.spotShadowMap[X]=ac;
m.spotShadowMatrix[X]=Q.shadow.matrix;
m.spot[X]=ad;
X++
}else{if(Q.isRectAreaLight){ad=n.get(Q),ad.color.copy(ab).multiplyScalar(L/(Q.width*Q.height)),ad.position.setFromMatrixPosition(Q.matrixWorld),ad.position.applyMatrix4(W),w.identity(),z.copy(Q.matrixWorld),z.premultiply(W),w.extractRotation(z),ad.halfWidth.set(0.5*Q.width,0,0),ad.halfHeight.set(0,0.5*Q.height,0),ad.halfWidth.applyMatrix4(w),ad.halfHeight.applyMatrix4(w),m.rectArea[N]=ad,N++
}else{if(Q.isPointLight){ad=n.get(Q);
ad.position.setFromMatrixPosition(Q.matrixWorld);
ad.position.applyMatrix4(W);
ad.color.copy(Q.color).multiplyScalar(Q.intensity);
ad.distance=Q.distance;
ad.decay=0===Q.distance?0:Q.decay;
if(ad.shadow=Q.castShadow){ab=Q.shadow,ad.shadowBias=ab.bias,ad.shadowRadius=ab.radius,ad.shadowMapSize=ab.mapSize,ad.shadowCameraNear=ab.camera.near,ad.shadowCameraFar=ab.camera.far
}m.pointShadowMap[P]=ac;
m.pointShadowMatrix[P]=Q.shadow.matrix;
m.point[P]=ad;
P++
}else{Q.isHemisphereLight&&(ad=n.get(Q),ad.direction.setFromMatrixPosition(Q.matrixWorld),ad.direction.transformDirection(W),ad.direction.normalize(),ad.skyColor.copy(Q.color).multiplyScalar(L),ad.groundColor.copy(Q.groundColor).multiplyScalar(L),m.hemi[K]=ad,K++)
}}}}}}m.ambient[0]=aa;
m.ambient[1]=R;
m.ambient[2]=V;
m.directional.length=O;
m.spot.length=X;
m.rectArea.length=N;
m.point.length=P;
m.hemi.length=K;
m.hash=O+","+P+","+X+","+N+","+K+","+ae.length
},state:m}
}function fm(n,m){var w={};
return{update:function(F){var D=m.frame,C=F.geometry,z=n.get(F,C);
w[z.id]!==D&&(C.isGeometry&&z.updateFromObject(F),n.update(z),w[z.id]=D);
return z
},clear:function(){w={}
}}
}function eU(n){n=n.split("\n");
for(var m=0;
m<n.length;
m++){n[m]=m+1+": "+n[m]
}return n.join("\n")
}function dT(n,m,z){var w=n.createShader(m);
n.shaderSource(w,z);
n.compileShader(w);
!1===n.getShaderParameter(w,n.COMPILE_STATUS)&&console.error("THREE.WebGLShader: Shader couldn't compile.");
""!==n.getShaderInfoLog(w)&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",m===n.VERTEX_SHADER?"vertex":"fragment",n.getShaderInfoLog(w),eU(z));
return w
}function dG(m){switch(m){case 3000:return["Linear","( value )"];
case 3001:return["sRGB","( value )"];
case 3002:return["RGBE","( value )"];
case 3004:return["RGBM","( value, 7.0 )"];
case 3005:return["RGBM","( value, 16.0 )"];
case 3006:return["RGBD","( value, 256.0 )"];
case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];
default:throw Error("unsupported encoding: "+m)
}}function cr(n,m){m=dG(m);
return"vec4 "+n+"( vec4 value ) { return "+m[0]+"ToLinear"+m[1]+"; }"
}function ey(n,m){m=dG(m);
return"vec4 "+n+"( vec4 value ) { return LinearTo"+m[0]+m[1]+"; }"
}function eh(n,m){switch(m){case 1:m="Linear";
break;
case 2:m="Reinhard";
break;
case 3:m="Uncharted2";
break;
case 4:m="OptimizedCineon";
break;
default:throw Error("unsupported toneMapping: "+m)
}return"vec3 "+n+"( vec3 color ) { return "+m+"ToneMapping( color ); }"
}function dY(n,m,w){n=n||{};
return[n.derivatives||m.envMapCubeUV||m.bumpMap||m.normalMap||m.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(n.fragDepth||m.logarithmicDepthBuffer)&&w.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",n.drawBuffers&&w.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(n.shaderTextureLOD||m.envMap)&&w.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(r).join("\n")
}function dL(n){var m=[],z;
for(z in n){var w=n[z];
!1!==w&&m.push("#define "+z+" "+w)
}return m.join("\n")
}function r(m){return""!==m
}function du(n,m){return n.replace(/NUM_DIR_LIGHTS/g,m.numDirLights).replace(/NUM_SPOT_LIGHTS/g,m.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,m.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,m.numPointLights).replace(/NUM_HEMI_LIGHTS/g,m.numHemiLights)
}function b8(m){return m.replace(/^[ \t]*#include +<([\w\d.]+)>/gm,function(n,w){n=eL[w];
if(void 0===n){throw Error("Can not resolve #include <"+w+">")
}return b8(n)
})
}function dh(m){return m.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,function(n,C,z,w){n="";
for(C=parseInt(C);
C<parseInt(z);
C++){n+=w.replace(/\[ i \]/g,"[ "+C+" ]")
}return n
})
}function dz(ad,ac,ab,aa,X,W){var V=ad.context,S=aa.defines,R=X.vertexShader,Q=X.fragmentShader,K="SHADOWMAP_TYPE_BASIC";
1===W.shadowMapType?K="SHADOWMAP_TYPE_PCF":2===W.shadowMapType&&(K="SHADOWMAP_TYPE_PCF_SOFT");
var N="ENVMAP_TYPE_CUBE",D="ENVMAP_MODE_REFLECTION",F="ENVMAP_BLENDING_MULTIPLY";
if(W.envMap){switch(aa.envMap.mapping){case 301:case 302:N="ENVMAP_TYPE_CUBE";
break;
case 306:case 307:N="ENVMAP_TYPE_CUBE_UV";
break;
case 303:case 304:N="ENVMAP_TYPE_EQUIREC";
break;
case 305:N="ENVMAP_TYPE_SPHERE"
}switch(aa.envMap.mapping){case 302:case 304:D="ENVMAP_MODE_REFRACTION"
}switch(aa.combine){case 0:F="ENVMAP_BLENDING_MULTIPLY";
break;
case 1:F="ENVMAP_BLENDING_MIX";
break;
case 2:F="ENVMAP_BLENDING_ADD"
}}var P=0<ad.gammaFactor?ad.gammaFactor:1,C=dY(aa.extensions,W,ac),z=dL(S),O=V.createProgram();
aa.isRawShaderMaterial?(S=[z,"\n"].filter(r).join("\n"),ac=[C,z,"\n"].filter(r).join("\n")):(S=["precision "+W.precision+" float;","precision "+W.precision+" int;","#define SHADER_NAME "+X.name,z,W.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+P,"#define MAX_BONES "+W.maxBones,W.useFog&&W.fog?"#define USE_FOG":"",W.useFog&&W.fogExp?"#define FOG_EXP2":"",W.map?"#define USE_MAP":"",W.envMap?"#define USE_ENVMAP":"",W.envMap?"#define "+D:"",W.lightMap?"#define USE_LIGHTMAP":"",W.aoMap?"#define USE_AOMAP":"",W.emissiveMap?"#define USE_EMISSIVEMAP":"",W.bumpMap?"#define USE_BUMPMAP":"",W.normalMap?"#define USE_NORMALMAP":"",W.displacementMap&&W.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",W.specularMap?"#define USE_SPECULARMAP":"",W.roughnessMap?"#define USE_ROUGHNESSMAP":"",W.metalnessMap?"#define USE_METALNESSMAP":"",W.alphaMap?"#define USE_ALPHAMAP":"",W.vertexColors?"#define USE_COLOR":"",W.flatShading?"#define FLAT_SHADED":"",W.skinning?"#define USE_SKINNING":"",W.useVertexTexture?"#define BONE_TEXTURE":"",W.morphTargets?"#define USE_MORPHTARGETS":"",W.morphNormals&&!1===W.flatShading?"#define USE_MORPHNORMALS":"",W.doubleSided?"#define DOUBLE_SIDED":"",W.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+W.numClippingPlanes,W.shadowMapEnabled?"#define USE_SHADOWMAP":"",W.shadowMapEnabled?"#define "+K:"",W.sizeAttenuation?"#define USE_SIZEATTENUATION":"",W.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",W.logarithmicDepthBuffer&&ac.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(r).join("\n"),ac=[C,"precision "+W.precision+" float;","precision "+W.precision+" int;","#define SHADER_NAME "+X.name,z,W.alphaTest?"#define ALPHATEST "+W.alphaTest:"","#define GAMMA_FACTOR "+P,W.useFog&&W.fog?"#define USE_FOG":"",W.useFog&&W.fogExp?"#define FOG_EXP2":"",W.map?"#define USE_MAP":"",W.envMap?"#define USE_ENVMAP":"",W.envMap?"#define "+N:"",W.envMap?"#define "+D:"",W.envMap?"#define "+F:"",W.lightMap?"#define USE_LIGHTMAP":"",W.aoMap?"#define USE_AOMAP":"",W.emissiveMap?"#define USE_EMISSIVEMAP":"",W.bumpMap?"#define USE_BUMPMAP":"",W.normalMap?"#define USE_NORMALMAP":"",W.specularMap?"#define USE_SPECULARMAP":"",W.roughnessMap?"#define USE_ROUGHNESSMAP":"",W.metalnessMap?"#define USE_METALNESSMAP":"",W.alphaMap?"#define USE_ALPHAMAP":"",W.vertexColors?"#define USE_COLOR":"",W.gradientMap?"#define USE_GRADIENTMAP":"",W.flatShading?"#define FLAT_SHADED":"",W.doubleSided?"#define DOUBLE_SIDED":"",W.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+W.numClippingPlanes,"#define UNION_CLIPPING_PLANES "+(W.numClippingPlanes-W.numClipIntersection),W.shadowMapEnabled?"#define USE_SHADOWMAP":"",W.shadowMapEnabled?"#define "+K:"",W.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",W.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",W.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",W.logarithmicDepthBuffer&&ac.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"",W.envMap&&ac.get("EXT_shader_texture_lod")?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",0!==W.toneMapping?"#define TONE_MAPPING":"",0!==W.toneMapping?eL.tonemapping_pars_fragment:"",0!==W.toneMapping?eh("toneMapping",W.toneMapping):"",W.dithering?"#define DITHERING":"",W.outputEncoding||W.mapEncoding||W.envMapEncoding||W.emissiveMapEncoding?eL.encodings_pars_fragment:"",W.mapEncoding?cr("mapTexelToLinear",W.mapEncoding):"",W.envMapEncoding?cr("envMapTexelToLinear",W.envMapEncoding):"",W.emissiveMapEncoding?cr("emissiveMapTexelToLinear",W.emissiveMapEncoding):"",W.outputEncoding?ey("linearToOutputTexel",W.outputEncoding):"",W.depthPacking?"#define DEPTH_PACKING "+aa.depthPacking:"","\n"].filter(r).join("\n"));
R=b8(R);
R=du(R,W);
Q=b8(Q);
Q=du(Q,W);
aa.isShaderMaterial||(R=dh(R),Q=dh(Q));
Q=ac+Q;
R=dT(V,V.VERTEX_SHADER,S+R);
Q=dT(V,V.FRAGMENT_SHADER,Q);
V.attachShader(O,R);
V.attachShader(O,Q);
void 0!==aa.index0AttributeName?V.bindAttribLocation(O,0,aa.index0AttributeName):!0===W.morphTargets&&V.bindAttribLocation(O,0,"position");
V.linkProgram(O);
W=V.getProgramInfoLog(O);
X=V.getShaderInfoLog(R);
K=V.getShaderInfoLog(Q);
D=N=!0;
if(!1===V.getProgramParameter(O,V.LINK_STATUS)){N=!1,console.error("THREE.WebGLProgram: shader error: ",V.getError(),"gl.VALIDATE_STATUS",V.getProgramParameter(O,V.VALIDATE_STATUS),"gl.getProgramInfoLog",W,X,K)
}else{if(""!==W){console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",W)
}else{if(""===X||""===K){D=!1
}}}D&&(this.diagnostics={runnable:N,material:aa,programLog:W,vertexShader:{log:X,prefix:S},fragmentShader:{log:K,prefix:ac}});
V.deleteShader(R);
V.deleteShader(Q);
var L;
this.getUniforms=function(){void 0===L&&(L=new eD(V,O,ad));
return L
};
var w;
this.getAttributes=function(){if(void 0===w){for(var n={},m=V.getProgramParameter(O,V.ACTIVE_ATTRIBUTES),af=0;
af<m;
af++){var ae=V.getActiveAttrib(O,af).name;
n[ae]=V.getAttribLocation(O,ae)
}w=n
}return w
};
this.destroy=function(){V.deleteProgram(O);
this.program=void 0
};
Object.defineProperties(this,{uniforms:{get:function(){console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");
return this.getUniforms()
}},attributes:{get:function(){console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");
return this.getAttributes()
}}});
this.id=dm++;
this.code=ab;
this.usedTimes=1;
this.program=O;
this.vertexShader=R;
this.fragmentShader=Q;
return this
}function c3(n,m,F){function D(L,K){if(L){L.isTexture?N=L.encoding:L.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),N=L.texture.encoding)
}else{var N=3000
}3000===N&&K&&(N=3007);
return N
}var C=[],z={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow"},w="precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering".split(" ");
this.getParameters=function(W,V,S,L,N,X,K){var R=z[W.type];
if(K.isSkinnedMesh){var P=K.skeleton.bones;
if(F.floatVertexTextures){P=1024
}else{var Q=Math.min(Math.floor((F.maxVertexUniforms-20)/4),P.length);
Q<P.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+P.length+" bones. This GPU supports "+Q+"."),P=0):P=Q
}}else{P=0
}Q=F.precision;
null!==W.precision&&(Q=F.getMaxPrecision(W.precision),Q!==W.precision&&console.warn("THREE.WebGLProgram.getParameters:",W.precision,"not supported, using",Q,"instead."));
var O=n.getRenderTarget();
return{shaderID:R,precision:Q,supportsVertexTextures:F.vertexTextures,outputEncoding:D(O?O.texture:null,n.gammaOutput),map:!!W.map,mapEncoding:D(W.map,n.gammaInput),envMap:!!W.envMap,envMapMode:W.envMap&&W.envMap.mapping,envMapEncoding:D(W.envMap,n.gammaInput),envMapCubeUV:!!W.envMap&&(306===W.envMap.mapping||307===W.envMap.mapping),lightMap:!!W.lightMap,aoMap:!!W.aoMap,emissiveMap:!!W.emissiveMap,emissiveMapEncoding:D(W.emissiveMap,n.gammaInput),bumpMap:!!W.bumpMap,normalMap:!!W.normalMap,displacementMap:!!W.displacementMap,roughnessMap:!!W.roughnessMap,metalnessMap:!!W.metalnessMap,specularMap:!!W.specularMap,alphaMap:!!W.alphaMap,gradientMap:!!W.gradientMap,combine:W.combine,vertexColors:W.vertexColors,fog:!!L,useFog:W.fog,fogExp:L&&L.isFogExp2,flatShading:W.flatShading,sizeAttenuation:W.sizeAttenuation,logarithmicDepthBuffer:F.logarithmicDepthBuffer,skinning:W.skinning&&0<P,maxBones:P,useVertexTexture:F.floatVertexTextures,morphTargets:W.morphTargets,morphNormals:W.morphNormals,maxMorphTargets:n.maxMorphTargets,maxMorphNormals:n.maxMorphNormals,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numClippingPlanes:N,numClipIntersection:X,dithering:W.dithering,shadowMapEnabled:n.shadowMap.enabled&&K.receiveShadow&&0<S.length,shadowMapType:n.shadowMap.type,toneMapping:n.toneMapping,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:W.premultipliedAlpha,alphaTest:W.alphaTest,doubleSided:2===W.side,flipSided:1===W.side,depthPacking:void 0!==W.depthPacking?W.depthPacking:!1}
};
this.getProgramCode=function(K,O){var N=[];
O.shaderID?N.push(O.shaderID):(N.push(K.fragmentShader),N.push(K.vertexShader));
if(void 0!==K.defines){for(var L in K.defines){N.push(L),N.push(K.defines[L])
}}for(L=0;
L<w.length;
L++){N.push(O[w[L]])
}N.push(K.onBeforeCompile.toString());
N.push(n.gammaOutput);
return N.join()
};
this.acquireProgram=function(S,R,Q,O){for(var N,K=0,L=C.length;
K<L;
K++){var P=C[K];
if(P.code===O){N=P;
++N.usedTimes;
break
}}void 0===N&&(N=new dz(n,m,O,S,R,Q),C.push(N));
return N
};
this.releaseProgram=function(L){if(0===--L.usedTimes){var K=C.indexOf(L);
C[K]=C[C.length-1];
C.pop();
L.destroy()
}};
this.programs=C
}function cR(ab,aa,X,W,V,S,R){function Q(n,m){if(n.width>m||n.height>m){m/=Math.max(n.width,n.height);
var ac=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");
ac.width=Math.floor(n.width*m);
ac.height=Math.floor(n.height*m);
ac.getContext("2d").drawImage(n,0,0,n.width,n.height,0,0,ac.width,ac.height);
console.warn("THREE.WebGLRenderer: image is too big ("+n.width+"x"+n.height+"). Resized to "+ac.width+"x"+ac.height,n);
return ac
}return n
}function P(m){return eN.isPowerOfTwo(m.width)&&eN.isPowerOfTwo(m.height)
}function O(n,m){return n.generateMipmaps&&m&&1003!==n.minFilter&&1006!==n.minFilter
}function F(m){return 1003===m||1004===m||1005===m?ab.NEAREST:ab.LINEAR
}function K(m){m=m.target;
m.removeEventListener("dispose",K);
ab:{var n=W.get(m);
if(m.image&&n.__image__webglTextureCube){ab.deleteTexture(n.__image__webglTextureCube)
}else{if(void 0===n.__webglInit){break ab
}ab.deleteTexture(n.__webglTexture)
}W.remove(m)
}R.textures--
}function C(m){m=m.target;
m.removeEventListener("dispose",C);
var ac=W.get(m),n=W.get(m.texture);
if(m){void 0!==n.__webglTexture&&ab.deleteTexture(n.__webglTexture);
m.depthTexture&&m.depthTexture.dispose();
if(m.isWebGLRenderTargetCube){for(n=0;
6>n;
n++){ab.deleteFramebuffer(ac.__webglFramebuffer[n]),ac.__webglDepthbuffer&&ab.deleteRenderbuffer(ac.__webglDepthbuffer[n])
}}else{ab.deleteFramebuffer(ac.__webglFramebuffer),ac.__webglDepthbuffer&&ab.deleteRenderbuffer(ac.__webglDepthbuffer)
}W.remove(m.texture);
W.remove(m)
}R.textures--
}function D(af,ac){var bd=W.get(af);
if(0<af.version&&bd.__version!==af.version){var m=af.image;
if(void 0===m){console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined",af)
}else{if(!1===m.complete){console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete",af)
}else{void 0===bd.__webglInit&&(bd.__webglInit=!0,af.addEventListener("dispose",K),bd.__webglTexture=ab.createTexture(),R.textures++);
X.activeTexture(ab.TEXTURE0+ac);
X.bindTexture(ab.TEXTURE_2D,bd.__webglTexture);
ab.pixelStorei(ab.UNPACK_FLIP_Y_WEBGL,af.flipY);
ab.pixelStorei(ab.UNPACK_PREMULTIPLY_ALPHA_WEBGL,af.premultiplyAlpha);
ab.pixelStorei(ab.UNPACK_ALIGNMENT,af.unpackAlignment);
var bb=Q(af.image,V.maxTextureSize);
(1001!==af.wrapS||1001!==af.wrapT||1003!==af.minFilter&&1006!==af.minFilter)&&!1===P(bb)&&(ac=bb,ac instanceof HTMLImageElement||ac instanceof HTMLCanvasElement?(m=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),m.width=eN.nearestPowerOfTwo(ac.width),m.height=eN.nearestPowerOfTwo(ac.height),m.getContext("2d").drawImage(ac,0,0,m.width,m.height),console.warn("THREE.WebGLRenderer: image is not power of two ("+ac.width+"x"+ac.height+"). Resized to "+m.width+"x"+m.height,ac),bb=m):bb=ac);
ac=P(bb);
var m=S.convert(af.format),ad=S.convert(af.type);
N(ab.TEXTURE_2D,af,ac);
var ae=af.mipmaps;
if(af.isDepthTexture){ae=ab.DEPTH_COMPONENT;
if(1015===af.type){if(!w){throw Error("Float Depth Texture only supported in WebGL2.0")
}ae=ab.DEPTH_COMPONENT32F
}else{w&&(ae=ab.DEPTH_COMPONENT16)
}1026===af.format&&ae===ab.DEPTH_COMPONENT&&1012!==af.type&&1014!==af.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),af.type=1012,ad=S.convert(af.type));
1027===af.format&&(ae=ab.DEPTH_STENCIL,1020!==af.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),af.type=1020,ad=S.convert(af.type)));
X.texImage2D(ab.TEXTURE_2D,0,ae,bb.width,bb.height,0,m,ad,null)
}else{if(af.isDataTexture){if(0<ae.length&&ac){for(var bc=0,ag=ae.length;
bc<ag;
bc++){bb=ae[bc],X.texImage2D(ab.TEXTURE_2D,bc,m,bb.width,bb.height,0,m,ad,bb.data)
}af.generateMipmaps=!1
}else{X.texImage2D(ab.TEXTURE_2D,0,m,bb.width,bb.height,0,m,ad,bb.data)
}}else{if(af.isCompressedTexture){for(bc=0,ag=ae.length;
bc<ag;
bc++){bb=ae[bc],1023!==af.format&&1022!==af.format?-1<X.getCompressedTextureFormats().indexOf(m)?X.compressedTexImage2D(ab.TEXTURE_2D,bc,m,bb.width,bb.height,0,bb.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X.texImage2D(ab.TEXTURE_2D,bc,m,bb.width,bb.height,0,m,ad,bb.data)
}}else{if(0<ae.length&&ac){bc=0;
for(ag=ae.length;
bc<ag;
bc++){bb=ae[bc],X.texImage2D(ab.TEXTURE_2D,bc,m,m,ad,bb)
}af.generateMipmaps=!1
}else{X.texImage2D(ab.TEXTURE_2D,0,m,m,ad,bb)
}}}}O(af,ac)&&ab.generateMipmap(ab.TEXTURE_2D);
bd.__version=af.version;
if(af.onUpdate){af.onUpdate(af)
}return
}}}X.activeTexture(ab.TEXTURE0+ac);
X.bindTexture(ab.TEXTURE_2D,bd.__webglTexture)
}function N(ac,n,m){m?(ab.texParameteri(ac,ab.TEXTURE_WRAP_S,S.convert(n.wrapS)),ab.texParameteri(ac,ab.TEXTURE_WRAP_T,S.convert(n.wrapT)),ab.texParameteri(ac,ab.TEXTURE_MAG_FILTER,S.convert(n.magFilter)),ab.texParameteri(ac,ab.TEXTURE_MIN_FILTER,S.convert(n.minFilter))):(ab.texParameteri(ac,ab.TEXTURE_WRAP_S,ab.CLAMP_TO_EDGE),ab.texParameteri(ac,ab.TEXTURE_WRAP_T,ab.CLAMP_TO_EDGE),1001===n.wrapS&&1001===n.wrapT||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",n),ab.texParameteri(ac,ab.TEXTURE_MAG_FILTER,F(n.magFilter)),ab.texParameteri(ac,ab.TEXTURE_MIN_FILTER,F(n.minFilter)),1003!==n.minFilter&&1006!==n.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",n));
!(m=aa.get("EXT_texture_filter_anisotropic"))||1015===n.type&&null===aa.get("OES_texture_float_linear")||1016===n.type&&null===aa.get("OES_texture_half_float_linear")||!(1<n.anisotropy||W.get(n).__currentAnisotropy)||(ab.texParameterf(ac,m.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,V.getMaxAnisotropy())),W.get(n).__currentAnisotropy=n.anisotropy)
}function L(m,af,ae,ad){var n=S.convert(af.texture.format),ac=S.convert(af.texture.type);
X.texImage2D(ad,0,n,af.width,af.height,0,n,ac,null);
ab.bindFramebuffer(ab.FRAMEBUFFER,m);
ab.framebufferTexture2D(ab.FRAMEBUFFER,ae,ad,W.get(af.texture).__webglTexture,0);
ab.bindFramebuffer(ab.FRAMEBUFFER,null)
}function z(m,n){ab.bindRenderbuffer(ab.RENDERBUFFER,m);
n.depthBuffer&&!n.stencilBuffer?(ab.renderbufferStorage(ab.RENDERBUFFER,ab.DEPTH_COMPONENT16,n.width,n.height),ab.framebufferRenderbuffer(ab.FRAMEBUFFER,ab.DEPTH_ATTACHMENT,ab.RENDERBUFFER,m)):n.depthBuffer&&n.stencilBuffer?(ab.renderbufferStorage(ab.RENDERBUFFER,ab.DEPTH_STENCIL,n.width,n.height),ab.framebufferRenderbuffer(ab.FRAMEBUFFER,ab.DEPTH_STENCIL_ATTACHMENT,ab.RENDERBUFFER,m)):ab.renderbufferStorage(ab.RENDERBUFFER,ab.RGBA4,n.width,n.height);
ab.bindRenderbuffer(ab.RENDERBUFFER,null)
}var w="undefined"!==typeof WebGL2RenderingContext&&ab instanceof WebGL2RenderingContext;
this.setTexture2D=D;
this.setTextureCube=function(bb,ac){var cb=W.get(bb);
if(6===bb.image.length){if(0<bb.version&&cb.__version!==bb.version){cb.__image__webglTextureCube||(bb.addEventListener("dispose",K),cb.__image__webglTextureCube=ab.createTexture(),R.textures++);
X.activeTexture(ab.TEXTURE0+ac);
X.bindTexture(ab.TEXTURE_CUBE_MAP,cb.__image__webglTextureCube);
ab.pixelStorei(ab.UNPACK_FLIP_Y_WEBGL,bb.flipY);
ac=bb&&bb.isCompressedTexture;
for(var m=bb.image[0]&&bb.image[0].isDataTexture,bf=[],ae=0;
6>ae;
ae++){bf[ae]=ac||m?m?bb.image[ae].image:bb.image[ae]:Q(bb.image[ae],V.maxCubemapSize)
}var bg=P(bf[0]),bc=S.convert(bb.format),ad=S.convert(bb.type);
N(ab.TEXTURE_CUBE_MAP,bb,bg);
for(ae=0;
6>ae;
ae++){if(ac){for(var ag,be=bf[ae].mipmaps,bd=0,af=be.length;
bd<af;
bd++){ag=be[bd],1023!==bb.format&&1022!==bb.format?-1<X.getCompressedTextureFormats().indexOf(bc)?X.compressedTexImage2D(ab.TEXTURE_CUBE_MAP_POSITIVE_X+ae,bd,bc,ag.width,ag.height,0,ag.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X.texImage2D(ab.TEXTURE_CUBE_MAP_POSITIVE_X+ae,bd,bc,ag.width,ag.height,0,bc,ad,ag.data)
}}else{m?X.texImage2D(ab.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,bc,bf[ae].width,bf[ae].height,0,bc,ad,bf[ae].data):X.texImage2D(ab.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,bc,bc,ad,bf[ae])
}}O(bb,bg)&&ab.generateMipmap(ab.TEXTURE_CUBE_MAP);
cb.__version=bb.version;
if(bb.onUpdate){bb.onUpdate(bb)
}}else{X.activeTexture(ab.TEXTURE0+ac),X.bindTexture(ab.TEXTURE_CUBE_MAP,cb.__image__webglTextureCube)
}}};
this.setTextureCubeDynamic=function(m,n){X.activeTexture(ab.TEXTURE0+n);
X.bindTexture(ab.TEXTURE_CUBE_MAP,W.get(m).__webglTexture)
};
this.setupRenderTarget=function(m){var af=W.get(m),ad=W.get(m.texture);
m.addEventListener("dispose",C);
ad.__webglTexture=ab.createTexture();
R.textures++;
var n=!0===m.isWebGLRenderTargetCube,ae=P(m);
if(n){af.__webglFramebuffer=[];
for(var ac=0;
6>ac;
ac++){af.__webglFramebuffer[ac]=ab.createFramebuffer()
}}else{af.__webglFramebuffer=ab.createFramebuffer()
}if(n){X.bindTexture(ab.TEXTURE_CUBE_MAP,ad.__webglTexture);
N(ab.TEXTURE_CUBE_MAP,m.texture,ae);
for(ac=0;
6>ac;
ac++){L(af.__webglFramebuffer[ac],m,ab.COLOR_ATTACHMENT0,ab.TEXTURE_CUBE_MAP_POSITIVE_X+ac)
}O(m.texture,ae)&&ab.generateMipmap(ab.TEXTURE_CUBE_MAP);
X.bindTexture(ab.TEXTURE_CUBE_MAP,null)
}else{X.bindTexture(ab.TEXTURE_2D,ad.__webglTexture),N(ab.TEXTURE_2D,m.texture,ae),L(af.__webglFramebuffer,m,ab.COLOR_ATTACHMENT0,ab.TEXTURE_2D),O(m.texture,ae)&&ab.generateMipmap(ab.TEXTURE_2D),X.bindTexture(ab.TEXTURE_2D,null)
}if(m.depthBuffer){af=W.get(m);
ad=!0===m.isWebGLRenderTargetCube;
if(m.depthTexture){if(ad){throw Error("target.depthTexture not supported in Cube render targets")
}if(m&&m.isWebGLRenderTargetCube){throw Error("Depth Texture with cube render targets is not supported")
}ab.bindFramebuffer(ab.FRAMEBUFFER,af.__webglFramebuffer);
if(!m.depthTexture||!m.depthTexture.isDepthTexture){throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture")
}W.get(m.depthTexture).__webglTexture&&m.depthTexture.image.width===m.width&&m.depthTexture.image.height===m.height||(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0);
D(m.depthTexture,0);
af=W.get(m.depthTexture).__webglTexture;
if(1026===m.depthTexture.format){ab.framebufferTexture2D(ab.FRAMEBUFFER,ab.DEPTH_ATTACHMENT,ab.TEXTURE_2D,af,0)
}else{if(1027===m.depthTexture.format){ab.framebufferTexture2D(ab.FRAMEBUFFER,ab.DEPTH_STENCIL_ATTACHMENT,ab.TEXTURE_2D,af,0)
}else{throw Error("Unknown depthTexture format")
}}}else{if(ad){for(af.__webglDepthbuffer=[],ad=0;
6>ad;
ad++){ab.bindFramebuffer(ab.FRAMEBUFFER,af.__webglFramebuffer[ad]),af.__webglDepthbuffer[ad]=ab.createRenderbuffer(),z(af.__webglDepthbuffer[ad],m)
}}else{ab.bindFramebuffer(ab.FRAMEBUFFER,af.__webglFramebuffer),af.__webglDepthbuffer=ab.createRenderbuffer(),z(af.__webglDepthbuffer,m)
}}ab.bindFramebuffer(ab.FRAMEBUFFER,null)
}};
this.updateRenderTargetMipmap=function(m){var ac=m.texture,n=P(m);
O(ac,n)&&(m=m.isWebGLRenderTargetCube?ab.TEXTURE_CUBE_MAP:ab.TEXTURE_2D,ac=W.get(ac).__webglTexture,X.bindTexture(m,ac),ab.generateMipmap(m),X.bindTexture(m,null))
}
}function cF(){var m={};
return{get:function(n){n=n.uuid;
var w=m[n];
void 0===w&&(w={},m[n]=w);
return w
},remove:function(n){delete m[n.uuid]
},clear:function(){m={}
}}
}function cv(fb,fa,eg){function ef(m,C,z){var w=new Uint8Array(4),n=fb.createTexture();
fb.bindTexture(m,n);
fb.texParameteri(m,fb.TEXTURE_MIN_FILTER,fb.NEAREST);
fb.texParameteri(m,fb.TEXTURE_MAG_FILTER,fb.NEAREST);
for(m=0;
m<z;
m++){fb.texImage2D(C+m,0,fb.RGBA,1,1,0,fb.RGBA,fb.UNSIGNED_BYTE,w)
}return n
}function ee(m){!0!==bg[m]&&(fb.enable(m),bg[m]=!0)
}function ed(m){!1!==bg[m]&&(fb.disable(m),bg[m]=!1)
}function ec(m,K,C,z,n,w,F,D){0!==m?ee(fb.BLEND):ed(fb.BLEND);
if(5!==m){if(m!==ag||D!==ae){switch(m){case 2:D?(fb.blendEquationSeparate(fb.FUNC_ADD,fb.FUNC_ADD),fb.blendFuncSeparate(fb.ONE,fb.ONE,fb.ONE,fb.ONE)):(fb.blendEquation(fb.FUNC_ADD),fb.blendFunc(fb.SRC_ALPHA,fb.ONE));
break;
case 3:D?(fb.blendEquationSeparate(fb.FUNC_ADD,fb.FUNC_ADD),fb.blendFuncSeparate(fb.ZERO,fb.ZERO,fb.ONE_MINUS_SRC_COLOR,fb.ONE_MINUS_SRC_ALPHA)):(fb.blendEquation(fb.FUNC_ADD),fb.blendFunc(fb.ZERO,fb.ONE_MINUS_SRC_COLOR));
break;
case 4:D?(fb.blendEquationSeparate(fb.FUNC_ADD,fb.FUNC_ADD),fb.blendFuncSeparate(fb.ZERO,fb.SRC_COLOR,fb.ZERO,fb.SRC_ALPHA)):(fb.blendEquation(fb.FUNC_ADD),fb.blendFunc(fb.ZERO,fb.SRC_COLOR));
break;
default:D?(fb.blendEquationSeparate(fb.FUNC_ADD,fb.FUNC_ADD),fb.blendFuncSeparate(fb.ONE,fb.ONE_MINUS_SRC_ALPHA,fb.ONE,fb.ONE_MINUS_SRC_ALPHA)):(fb.blendEquationSeparate(fb.FUNC_ADD,fb.FUNC_ADD),fb.blendFuncSeparate(fb.SRC_ALPHA,fb.ONE_MINUS_SRC_ALPHA,fb.ONE,fb.ONE_MINUS_SRC_ALPHA))
}}be=bd=fc=cd=cg=cc=null
}else{n=n||K;
w=w||C;
F=F||z;
if(K!==cc||n!==fc){fb.blendEquationSeparate(eg.convert(K),eg.convert(n)),cc=K,fc=n
}if(C!==cg||z!==cd||w!==bd||F!==be){fb.blendFuncSeparate(eg.convert(C),eg.convert(z),eg.convert(w),eg.convert(F)),cg=C,cd=z,bd=w,be=F
}}ag=m;
ae=D
}function eb(m){bc!==m&&(m?fb.frontFace(fb.CW):fb.frontFace(fb.CCW),bc=m)
}function ea(m){0!==m?(ee(fb.CULL_FACE),m!==cb&&(1===m?fb.cullFace(fb.BACK):2===m?fb.cullFace(fb.FRONT):fb.cullFace(fb.FRONT_AND_BACK))):ed(fb.CULL_FACE);
cb=m
}function dg(m,w,n){if(m){if(ee(fb.POLYGON_OFFSET_FILL),S!==w||ac!==n){fb.polygonOffset(w,n),S=w,ac=n
}}else{ed(fb.POLYGON_OFFSET_FILL)
}}function dc(m){void 0===m&&(m=fb.TEXTURE0+aa-1);
ad!==m&&(fb.activeTexture(m),ad=m)
}var dd=new function(){var m=!1,z=new eM,w=null,n=new eM(0,0,0,0);
return{setMask:function(C){w===C||m||(fb.colorMask(C,C,C,C),w=C)
},setLocked:function(C){m=C
},setClear:function(C,L,K,F,D){!0===D&&(C*=F,L*=F,K*=F);
z.set(C,L,K,F);
!1===n.equals(z)&&(fb.clearColor(C,L,K,F),n.copy(z))
},reset:function(){m=!1;
w=null;
n.set(-1,0,0,0)
}}
},da=new function(){var m=!1,z=null,w=null,n=null;
return{setTest:function(C){C?ee(fb.DEPTH_TEST):ed(fb.DEPTH_TEST)
},setMask:function(C){z===C||m||(fb.depthMask(C),z=C)
},setFunc:function(C){if(w!==C){if(C){switch(C){case 0:fb.depthFunc(fb.NEVER);
break;
case 1:fb.depthFunc(fb.ALWAYS);
break;
case 2:fb.depthFunc(fb.LESS);
break;
case 3:fb.depthFunc(fb.LEQUAL);
break;
case 4:fb.depthFunc(fb.EQUAL);
break;
case 5:fb.depthFunc(fb.GEQUAL);
break;
case 6:fb.depthFunc(fb.GREATER);
break;
case 7:fb.depthFunc(fb.NOTEQUAL);
break;
default:fb.depthFunc(fb.LEQUAL)
}}else{fb.depthFunc(fb.LEQUAL)
}w=C
}},setLocked:function(C){m=C
},setClear:function(C){n!==C&&(fb.clearDepth(C),n=C)
},reset:function(){m=!1;
n=w=z=null
}}
},db=new function(){var L=!1,K=null,F=null,D=null,C=null,w=null,z=null,n=null,m=null;
return{setTest:function(O){O?ee(fb.STENCIL_TEST):ed(fb.STENCIL_TEST)
},setMask:function(O){K===O||L||(fb.stencilMask(O),K=O)
},setFunc:function(O,Q,P){if(F!==O||D!==Q||C!==P){fb.stencilFunc(O,Q,P),F=O,D=Q,C=P
}},setOp:function(O,Q,P){if(w!==O||z!==Q||n!==P){fb.stencilOp(O,Q,P),w=O,z=Q,n=P
}},setLocked:function(O){L=O
},setClear:function(O){m!==O&&(fb.clearStencil(O),m=O)
},reset:function(){L=!1;
m=n=z=w=C=D=F=K=null
}}
},df=fb.getParameter(fb.MAX_VERTEX_ATTRIBS),de=new Uint8Array(df),cf=new Uint8Array(df),ce=new Uint8Array(df),bg={},af=null,bf=null,ag=null,cc=null,cg=null,cd=null,fc=null,bd=null,be=null,ae=!1,bc=null,cb=null,ab=null,S=null,ac=null,aa=fb.getParameter(fb.MAX_COMBINED_TEXTURE_IMAGE_UNITS),df=parseFloat(/^WebGL\ ([0-9])/.exec(fb.getParameter(fb.VERSION))[1]),W=1<=parseFloat(df),ad=null,V={},X=new eM,bb=new eM,N={};
N[fb.TEXTURE_2D]=ef(fb.TEXTURE_2D,fb.TEXTURE_2D,1);
N[fb.TEXTURE_CUBE_MAP]=ef(fb.TEXTURE_CUBE_MAP,fb.TEXTURE_CUBE_MAP_POSITIVE_X,6);
dd.setClear(0,0,0,1);
da.setClear(1);
db.setClear(0);
ee(fb.DEPTH_TEST);
da.setFunc(3);
eb(!1);
ea(1);
ee(fb.CULL_FACE);
ee(fb.BLEND);
ec(1);
return{buffers:{color:dd,depth:da,stencil:db},initAttributes:function(){for(var n=0,m=de.length;
n<m;
n++){de[n]=0
}},enableAttribute:function(m){de[m]=1;
0===cf[m]&&(fb.enableVertexAttribArray(m),cf[m]=1);
0!==ce[m]&&(fa.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(m,0),ce[m]=0)
},enableAttributeAndDivisor:function(n,m){de[n]=1;
0===cf[n]&&(fb.enableVertexAttribArray(n),cf[n]=1);
ce[n]!==m&&(fa.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(n,m),ce[n]=m)
},disableUnusedAttributes:function(){for(var m=0,n=cf.length;
m!==n;
++m){cf[m]!==de[m]&&(fb.disableVertexAttribArray(m),cf[m]=0)
}},enable:ee,disable:ed,getCompressedTextureFormats:function(){if(null===af&&(af=[],fa.get("WEBGL_compressed_texture_pvrtc")||fa.get("WEBGL_compressed_texture_s3tc")||fa.get("WEBGL_compressed_texture_etc1"))){for(var n=fb.getParameter(fb.COMPRESSED_TEXTURE_FORMATS),m=0;
m<n.length;
m++){af.push(n[m])
}}return af
},useProgram:function(m){return bf!==m?(fb.useProgram(m),bf=m,!0):!1
},setBlending:ec,setMaterial:function(m){2===m.side?ed(fb.CULL_FACE):ee(fb.CULL_FACE);
eb(1===m.side);
!0===m.transparent?ec(m.blending,m.blendEquation,m.blendSrc,m.blendDst,m.blendEquationAlpha,m.blendSrcAlpha,m.blendDstAlpha,m.premultipliedAlpha):ec(0);
da.setFunc(m.depthFunc);
da.setTest(m.depthTest);
da.setMask(m.depthWrite);
dd.setMask(m.colorWrite);
dg(m.polygonOffset,m.polygonOffsetFactor,m.polygonOffsetUnits)
},setFlipSided:eb,setCullFace:ea,setLineWidth:function(m){m!==ab&&(W&&fb.lineWidth(m),ab=m)
},setPolygonOffset:dg,setScissorTest:function(m){m?ee(fb.SCISSOR_TEST):ed(fb.SCISSOR_TEST)
},activeTexture:dc,bindTexture:function(m,w){null===ad&&dc();
var n=V[ad];
void 0===n&&(n={type:void 0,texture:void 0},V[ad]=n);
if(n.type!==m||n.texture!==w){fb.bindTexture(m,w||N[m]),n.type=m,n.texture=w
}},compressedTexImage2D:function(){try{fb.compressedTexImage2D.apply(fb,arguments)
}catch(m){console.error("THREE.WebGLState:",m)
}},texImage2D:function(){try{fb.texImage2D.apply(fb,arguments)
}catch(m){console.error("THREE.WebGLState:",m)
}},scissor:function(m){!1===X.equals(m)&&(fb.scissor(m.x,m.y,m.z,m.w),X.copy(m))
},viewport:function(m){!1===bb.equals(m)&&(fb.viewport(m.x,m.y,m.z,m.w),bb.copy(m))
},reset:function(){for(var m=0;
m<cf.length;
m++){1===cf[m]&&(fb.disableVertexAttribArray(m),cf[m]=0)
}bg={};
ad=af=null;
V={};
cb=bc=ag=bf=null;
dd.reset();
da.reset();
db.reset()
}}
}function ci(W,V,S){function R(m){if("highp"===m){if(0<W.getShaderPrecisionFormat(W.VERTEX_SHADER,W.HIGH_FLOAT).precision&&0<W.getShaderPrecisionFormat(W.FRAGMENT_SHADER,W.HIGH_FLOAT).precision){return"highp"
}m="mediump"
}return"mediump"===m&&0<W.getShaderPrecisionFormat(W.VERTEX_SHADER,W.MEDIUM_FLOAT).precision&&0<W.getShaderPrecisionFormat(W.FRAGMENT_SHADER,W.MEDIUM_FLOAT).precision?"mediump":"lowp"
}var Q,P=void 0!==S.precision?S.precision:"highp",O=R(P);
O!==P&&(console.warn("THREE.WebGLRenderer:",P,"not supported, using",O,"instead."),P=O);
S=!0===S.logarithmicDepthBuffer&&!!V.get("EXT_frag_depth");
var O=W.getParameter(W.MAX_TEXTURE_IMAGE_UNITS),N=W.getParameter(W.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=W.getParameter(W.MAX_TEXTURE_SIZE),K=W.getParameter(W.MAX_CUBE_MAP_TEXTURE_SIZE),z=W.getParameter(W.MAX_VERTEX_ATTRIBS),C=W.getParameter(W.MAX_VERTEX_UNIFORM_VECTORS),X=W.getParameter(W.MAX_VARYING_VECTORS),w=W.getParameter(W.MAX_FRAGMENT_UNIFORM_VECTORS),F=0<N,D=!!V.get("OES_texture_float");
return{getMaxAnisotropy:function(){if(void 0!==Q){return Q
}var m=V.get("EXT_texture_filter_anisotropic");
return Q=null!==m?W.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0
},getMaxPrecision:R,precision:P,logarithmicDepthBuffer:S,maxTextures:O,maxVertexTextures:N,maxTextureSize:L,maxCubemapSize:K,maxAttributes:z,maxVertexUniforms:C,maxVaryings:X,maxFragmentUniforms:w,vertexTextures:F,floatFragmentTextures:D,floatVertexTextures:F&&D}
}function cl(m){cW.call(this);
this.cameras=m||[]
}function bZ(P){function O(){if(null!==L&&L.isPresenting){var R=L.getEyeParameters("left"),S=R.renderWidth,R=R.renderHeight;
Q=P.getPixelRatio();
n=P.getSize();
P.setDrawingBufferSize(2*S,R,1)
}else{N.enabled&&P.setDrawingBufferSize(n.width,n.height,Q)
}}var N=this,L=null,K=null;
"VRFrameData" in window&&(K=new window.VRFrameData);
var F=new eQ,D=new eQ,C=new eQ,z=new cW;
z.bounds=new eM(0,0,0.5,1);
z.layers.enable(1);
var w=new cW;
w.bounds=new eM(0.5,0,0.5,1);
w.layers.enable(2);
var m=new cl([z,w]);
m.layers.enable(1);
m.layers.enable(2);
var n,Q;
window.addEventListener("vrdisplaypresentchange",O,!1);
this.standing=this.enabled=!1;
this.getDevice=function(){return L
};
this.setDevice=function(R){void 0!==R&&(L=R)
};
this.getCamera=function(S){if(null===L){return S
}L.depthNear=S.near;
L.depthFar=S.far;
L.getFrameData(K);
var R=K.pose;
null!==R.position?S.position.fromArray(R.position):S.position.set(0,0,0);
null!==R.orientation&&S.quaternion.fromArray(R.orientation);
S.updateMatrixWorld();
R=L.stageParameters;
this.standing&&R&&(D.fromArray(R.sittingToStandingTransform),C.getInverse(D),S.matrixWorld.multiply(D),S.matrixWorldInverse.multiply(C));
if(!1===L.isPresenting){return S
}z.near=S.near;
w.near=S.near;
z.far=S.far;
w.far=S.far;
m.matrixWorld.copy(S.matrixWorld);
m.matrixWorldInverse.copy(S.matrixWorldInverse);
z.matrixWorldInverse.fromArray(K.leftViewMatrix);
w.matrixWorldInverse.fromArray(K.rightViewMatrix);
this.standing&&R&&(z.matrixWorldInverse.multiply(C),w.matrixWorldInverse.multiply(C));
S=S.parent;
null!==S&&(F.getInverse(S.matrixWorld),z.matrixWorldInverse.multiply(F),w.matrixWorldInverse.multiply(F));
z.matrixWorld.getInverse(z.matrixWorldInverse);
w.matrixWorld.getInverse(w.matrixWorldInverse);
z.projectionMatrix.fromArray(K.leftProjectionMatrix);
w.projectionMatrix.fromArray(K.rightProjectionMatrix);
m.projectionMatrix.copy(z.projectionMatrix);
S=L.getLayers();
S.length&&(S=S[0],null!==S.leftBounds&&4===S.leftBounds.length&&z.bounds.fromArray(S.leftBounds),null!==S.rightBounds&&4===S.rightBounds.length&&w.bounds.fromArray(S.rightBounds));
return m
};
this.getStandingMatrix=function(){return D
};
this.submitFrame=function(){L&&L.isPresenting&&L.submitFrame()
};
this.dispose=function(){window.removeEventListener("vrdisplaypresentchange",O)
}
}function bH(n){var m={};
return{get:function(z){if(void 0!==m[z]){return m[z]
}switch(z){case"WEBGL_depth_texture":var w=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");
break;
case"EXT_texture_filter_anisotropic":w=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
break;
case"WEBGL_compressed_texture_s3tc":w=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
break;
case"WEBGL_compressed_texture_pvrtc":w=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
break;
case"WEBGL_compressed_texture_etc1":w=n.getExtension("WEBGL_compressed_texture_etc1");
break;
default:w=n.getExtension(z)
}null===w&&console.warn("THREE.WebGLRenderer: "+z+" extension not supported.");
return m[z]=w
}}
}function bv(){function N(){m.value!==F&&(m.value=F,m.needsUpdate=0<D);
K.numPlanes=D;
K.numIntersection=0
}function L(P,O,V,S){var R=null!==P?P.length:0,Q=null;
if(0!==R){Q=m.value;
if(!0!==S||null===Q){S=V+4*R;
O=O.matrixWorldInverse;
n.getNormalMatrix(O);
if(null===Q||Q.length<S){Q=new Float32Array(S)
}for(S=0;
S!==R;
++S,V+=4){w.copy(P[S]).applyMatrix4(O,n),w.normal.toArray(Q,V),Q[V+3]=w.constant
}}m.value=Q;
m.needsUpdate=!0
}K.numPlanes=R;
return Q
}var K=this,F=null,D=0,C=!1,z=!1,w=new fl,n=new bp,m={value:null,needsUpdate:!1};
this.uniform=m;
this.numIntersection=this.numPlanes=0;
this.init=function(O,R,Q){var P=0!==O.length||R||0!==D||C;
C=R;
F=L(O,Q,0);
D=O.length;
return P
};
this.beginShadows=function(){z=!0;
L(null)
};
this.endShadows=function(){z=!1;
N()
};
this.setState=function(X,Q,P,R,O,W){if(!C||null===X||0===X.length||z&&!P){z?L(null):N()
}else{P=z?0:D;
var V=4*P,S=O.clippingState||null;
m.value=S;
S=L(X,R,V,W);
for(X=0;
X!==V;
++X){S[X]=F[X]
}O.clippingState=S;
this.numIntersection=Q?this.numPlanes:0;
this.numPlanes+=P
}}
}function cY(n,m){return{convert:function(z){if(1000===z){return n.REPEAT
}if(1001===z){return n.CLAMP_TO_EDGE
}if(1002===z){return n.MIRRORED_REPEAT
}if(1003===z){return n.NEAREST
}if(1004===z){return n.NEAREST_MIPMAP_NEAREST
}if(1005===z){return n.NEAREST_MIPMAP_LINEAR
}if(1006===z){return n.LINEAR
}if(1007===z){return n.LINEAR_MIPMAP_NEAREST
}if(1008===z){return n.LINEAR_MIPMAP_LINEAR
}if(1009===z){return n.UNSIGNED_BYTE
}if(1017===z){return n.UNSIGNED_SHORT_4_4_4_4
}if(1018===z){return n.UNSIGNED_SHORT_5_5_5_1
}if(1019===z){return n.UNSIGNED_SHORT_5_6_5
}if(1010===z){return n.BYTE
}if(1011===z){return n.SHORT
}if(1012===z){return n.UNSIGNED_SHORT
}if(1013===z){return n.INT
}if(1014===z){return n.UNSIGNED_INT
}if(1015===z){return n.FLOAT
}if(1016===z){var w=m.get("OES_texture_half_float");
if(null!==w){return w.HALF_FLOAT_OES
}}if(1021===z){return n.ALPHA
}if(1022===z){return n.RGB
}if(1023===z){return n.RGBA
}if(1024===z){return n.LUMINANCE
}if(1025===z){return n.LUMINANCE_ALPHA
}if(1026===z){return n.DEPTH_COMPONENT
}if(1027===z){return n.DEPTH_STENCIL
}if(100===z){return n.FUNC_ADD
}if(101===z){return n.FUNC_SUBTRACT
}if(102===z){return n.FUNC_REVERSE_SUBTRACT
}if(200===z){return n.ZERO
}if(201===z){return n.ONE
}if(202===z){return n.SRC_COLOR
}if(203===z){return n.ONE_MINUS_SRC_COLOR
}if(204===z){return n.SRC_ALPHA
}if(205===z){return n.ONE_MINUS_SRC_ALPHA
}if(206===z){return n.DST_ALPHA
}if(207===z){return n.ONE_MINUS_DST_ALPHA
}if(208===z){return n.DST_COLOR
}if(209===z){return n.ONE_MINUS_DST_COLOR
}if(210===z){return n.SRC_ALPHA_SATURATE
}if(2001===z||2002===z||2003===z||2004===z){if(w=m.get("WEBGL_compressed_texture_s3tc"),null!==w){if(2001===z){return w.COMPRESSED_RGB_S3TC_DXT1_EXT
}if(2002===z){return w.COMPRESSED_RGBA_S3TC_DXT1_EXT
}if(2003===z){return w.COMPRESSED_RGBA_S3TC_DXT3_EXT
}if(2004===z){return w.COMPRESSED_RGBA_S3TC_DXT5_EXT
}}}if(2100===z||2101===z||2102===z||2103===z){if(w=m.get("WEBGL_compressed_texture_pvrtc"),null!==w){if(2100===z){return w.COMPRESSED_RGB_PVRTC_4BPPV1_IMG
}if(2101===z){return w.COMPRESSED_RGB_PVRTC_2BPPV1_IMG
}if(2102===z){return w.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG
}if(2103===z){return w.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
}}}if(2151===z&&(w=m.get("WEBGL_compressed_texture_etc1"),null!==w)){return w.COMPRESSED_RGB_ETC1_WEBGL
}if(103===z||104===z){if(w=m.get("EXT_blend_minmax"),null!==w){if(103===z){return w.MIN_EXT
}if(104===z){return w.MAX_EXT
}}}return 1020===z&&(w=m.get("WEBGL_depth_texture"),null!==w)?w.UNSIGNED_INT_24_8_WEBGL:0
}}
}function ba(eg){function ef(){O=new bH(fW);
O.get("WEBGL_depth_texture");
O.get("OES_texture_float");
O.get("OES_texture_float_linear");
O.get("OES_texture_half_float");
O.get("OES_texture_half_float_linear");
O.get("OES_standard_derivatives");
O.get("ANGLE_instanced_arrays");
O.get("OES_element_index_uint")&&(eX.MaxIndex=4294967296);
S=new cY(fW,O);
F=new ci(fW,O,eg);
fd=new cv(fW,O,S);
fd.scissor(fg.copy(de).multiplyScalar(fN));
fd.viewport(fH.copy(f4).multiplyScalar(fN));
ad=new cF;
gc=new cR(fW,O,fd,ad,F,S,ac);
ag=new dF(fW);
gg=new a8(fW,ag,ac);
fb=new fm(gg,n);
ab=new bO(fW);
fX=new c3(fQ,O,F);
f2=new bT;
f9=new cp;
ed=new c9(fQ,fd,gg,fU);
gb=new bq(fW,O,n);
f3=new bC(fW,O,n);
f6=new eo(fQ,fW,fd,gc,F);
fS=new d5(fQ,fW,fd,gc,F);
fQ.info.programs=fX.programs;
fQ.context=fW;
fQ.capabilities=F;
fQ.extensions=O;
fQ.properties=ad;
fQ.renderLists=f9;
fQ.state=fd
}function ee(m){m.preventDefault();
console.log("THREE.WebGLRenderer: Context Lost.");
fK=!0
}function ec(m){console.log("THREE.WebGLRenderer: Context Restored.");
fK=!1;
ef()
}function eb(m){m=m.target;
m.removeEventListener("dispose",eb);
ea(m);
ad.remove(m)
}function ea(w){var m=ad.get(w).program;
w.program=void 0;
void 0!==m&&fX.releaseProgram(m)
}function dg(w,m,z){w.render(function(C){fQ.renderBufferImmediate(C,m,z)
})
}function df(m){null!==gd&&gd(m);
(f7.getDevice()||window).requestAnimationFrame(df)
}function dd(V,Q,P){if(V.visible){if(V.layers.test(Q.layers)){if(V.isLight){bg.push(V),V.castShadow&&bd.push(V)
}else{if(V.isSprite){V.frustumCulled&&!fc.intersectsSprite(V)||fY.push(V)
}else{if(V.isLensFlare){fZ.push(V)
}else{if(V.isImmediateRenderObject){P&&gf.setFromMatrixPosition(V.matrixWorld).applyMatrix4(ge),fM.push(V,null,V.material,gf.z,null)
}else{if(V.isMesh||V.isLine||V.isPoints){if(V.isSkinnedMesh&&V.skeleton.update(),!V.frustumCulled||fc.intersectsObject(V)){P&&gf.setFromMatrixPosition(V.matrixWorld).applyMatrix4(ge);
var N=fb.update(V),K=V.material;
if(Array.isArray(K)){for(var D=N.groups,C=0,z=D.length;
C<z;
C++){var w=D[C],m=K[w.materialIndex];
m&&m.visible&&fM.push(V,N,m,gf.z,w)
}}else{K.visible&&fM.push(V,N,K,gf.z,null)
}}}}}}}}V=V.children;
C=0;
for(z=V.length;
C<z;
C++){dd(V[C],Q,P)
}}}function dc(da,aa,X,W){for(var V=0,Q=da.length;
V<Q;
V++){var P=da[V],N=P.object,D=P.geometry,K=void 0===W?P.material:W,P=P.group;
if(X.isArrayCamera){fe=X;
for(var z=X.cameras,ga=0,w=z.length;
ga<w;
ga++){var C=z[ga];
if(N.layers.test(C.layers)){var fa=C.bounds;
fd.viewport(fH.set(fa.x*fI,fa.y*cg,fa.z*fI,fa.w*cg).multiplyScalar(fN));
ce(N,aa,C,D,K,P)
}}}else{fe=null,ce(N,aa,X,D,K,P)
}}}function ce(w,m,N,K,D,C){w.onBeforeRender(fQ,m,N,K,D,C);
w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);
w.normalMatrix.getNormalMatrix(w.modelViewMatrix);
if(w.isImmediateRenderObject){fd.setMaterial(D);
var z=cc(N,m.fog,D,w);
fP="";
dg(w,z,D)
}else{fQ.renderBufferDirect(N,m.fog,K,D,w,C)
}w.onAfterRender(fQ,m,N,K,D,C)
}function cf(z,m,N){var K=ad.get(z);
N=fX.getParameters(z,f2.state,bd,m,f8.numPlanes,f8.numIntersection,N);
var D=fX.getProgramCode(z,N),C=K.program,w=!0;
if(void 0===C){z.addEventListener("dispose",eb)
}else{if(C.code!==D){ea(z)
}else{if(void 0!==N.shaderID){return
}w=!1
}}w&&(N.shaderID?(C=c7[N.shaderID],K.shader={name:z.type,uniforms:ai.clone(C.uniforms),vertexShader:C.vertexShader,fragmentShader:C.fragmentShader}):K.shader={name:z.type,uniforms:z.uniforms,vertexShader:z.vertexShader,fragmentShader:z.fragmentShader},z.onBeforeCompile(K.shader),C=fX.acquireProgram(z,K.shader,N,D),K.program=C,z.program=C);
N=C.getAttributes();
if(z.morphTargets){for(D=z.numSupportedMorphTargets=0;
D<fQ.maxMorphTargets;
D++){0<=N["morphTarget"+D]&&z.numSupportedMorphTargets++
}}if(z.morphNormals){for(D=z.numSupportedMorphNormals=0;
D<fQ.maxMorphNormals;
D++){0<=N["morphNormal"+D]&&z.numSupportedMorphNormals++
}}N=K.shader.uniforms;
if(!z.isShaderMaterial&&!z.isRawShaderMaterial||!0===z.clipping){K.numClippingPlanes=f8.numPlanes,K.numIntersection=f8.numIntersection,N.clippingPlanes=f8.uniform
}K.fog=m;
K.lightsHash=f2.state.hash;
z.lights&&(N.ambientLightColor.value=f2.state.ambient,N.directionalLights.value=f2.state.directional,N.spotLights.value=f2.state.spot,N.rectAreaLights.value=f2.state.rectArea,N.pointLights.value=f2.state.point,N.hemisphereLights.value=f2.state.hemi,N.directionalShadowMap.value=f2.state.directionalShadowMap,N.directionalShadowMatrix.value=f2.state.directionalShadowMatrix,N.spotShadowMap.value=f2.state.spotShadowMap,N.spotShadowMatrix.value=f2.state.spotShadowMatrix,N.pointShadowMap.value=f2.state.pointShadowMap,N.pointShadowMatrix.value=f2.state.pointShadowMatrix);
z=K.program.getUniforms();
z=eD.seqWithValue(z.seq,N);
K.uniformsList=z
}function cc(W,V,Q,P){fV=0;
var N=ad.get(Q);
ae&&(bc||W!==fL)&&f8.setState(Q.clippingPlanes,Q.clipIntersection,Q.clipShadows,W,N,W===fL&&Q.id===fJ);
!1===Q.needsUpdate&&(void 0===N.program?Q.needsUpdate=!0:Q.fog&&N.fog!==V?Q.needsUpdate=!0:Q.lights&&N.lightsHash!==f2.state.hash?Q.needsUpdate=!0:void 0===N.numClippingPlanes||N.numClippingPlanes===f8.numPlanes&&N.numIntersection===f8.numIntersection||(Q.needsUpdate=!0));
Q.needsUpdate&&(cf(Q,V,P),Q.needsUpdate=!1);
var K=!1,D=!1,C=!1,w=N.program,z=w.getUniforms(),m=N.shader.uniforms;
fd.useProgram(w.program)&&(C=D=K=!0);
Q.id!==fJ&&(fJ=Q.id,D=!0);
if(K||W!==fL){z.setValue(fW,"projectionMatrix",W.projectionMatrix);
F.logarithmicDepthBuffer&&z.setValue(fW,"logDepthBufFC",2/(Math.log(W.far+1)/Math.LN2));
fL!==(fe||W)&&(fL=fe||W,C=D=!0);
if(Q.isShaderMaterial||Q.isMeshPhongMaterial||Q.isMeshStandardMaterial||Q.envMap){K=z.map.cameraPosition,void 0!==K&&K.setValue(fW,gf.setFromMatrixPosition(W.matrixWorld))
}(Q.isMeshPhongMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial||Q.skinning)&&z.setValue(fW,"viewMatrix",W.matrixWorldInverse)
}if(Q.skinning&&(z.setOptional(fW,P,"bindMatrix"),z.setOptional(fW,P,"bindMatrixInverse"),W=P.skeleton)){if(K=W.bones,F.floatVertexTextures){if(void 0===W.boneTexture){var K=Math.sqrt(4*K.length),K=eN.nextPowerOfTwo(Math.ceil(K)),K=Math.max(K,4),aa=new Float32Array(K*K*4);
aa.set(W.boneMatrices);
var X=new e1(aa,K,K,1023,1015);
W.boneMatrices=aa;
W.boneTexture=X;
W.boneTextureSize=K
}z.setValue(fW,"boneTexture",W.boneTexture);
z.setValue(fW,"boneTextureSize",W.boneTextureSize)
}else{z.setOptional(fW,W,"boneMatrices")
}}D&&(z.setValue(fW,"toneMappingExposure",fQ.toneMappingExposure),z.setValue(fW,"toneMappingWhitePoint",fQ.toneMappingWhitePoint),Q.lights&&(D=C,m.ambientLightColor.needsUpdate=D,m.directionalLights.needsUpdate=D,m.pointLights.needsUpdate=D,m.spotLights.needsUpdate=D,m.rectAreaLights.needsUpdate=D,m.hemisphereLights.needsUpdate=D),V&&Q.fog&&(m.fogColor.value=V.color,V.isFog?(m.fogNear.value=V.near,m.fogFar.value=V.far):V.isFogExp2&&(m.fogDensity.value=V.density)),Q.isMeshBasicMaterial?cd(m,Q):Q.isMeshLambertMaterial?(cd(m,Q),Q.emissiveMap&&(m.emissiveMap.value=Q.emissiveMap)):Q.isMeshPhongMaterial?(cd(m,Q),Q.isMeshToonMaterial?(db(m,Q),Q.gradientMap&&(m.gradientMap.value=Q.gradientMap)):db(m,Q)):Q.isMeshStandardMaterial?(cd(m,Q),Q.isMeshPhysicalMaterial&&(m.clearCoat.value=Q.clearCoat,m.clearCoatRoughness.value=Q.clearCoatRoughness),m.roughness.value=Q.roughness,m.metalness.value=Q.metalness,Q.roughnessMap&&(m.roughnessMap.value=Q.roughnessMap),Q.metalnessMap&&(m.metalnessMap.value=Q.metalnessMap),Q.emissiveMap&&(m.emissiveMap.value=Q.emissiveMap),Q.bumpMap&&(m.bumpMap.value=Q.bumpMap,m.bumpScale.value=Q.bumpScale),Q.normalMap&&(m.normalMap.value=Q.normalMap,m.normalScale.value.copy(Q.normalScale)),Q.displacementMap&&(m.displacementMap.value=Q.displacementMap,m.displacementScale.value=Q.displacementScale,m.displacementBias.value=Q.displacementBias),Q.envMap&&(m.envMapIntensity.value=Q.envMapIntensity)):Q.isMeshDepthMaterial?(cd(m,Q),Q.displacementMap&&(m.displacementMap.value=Q.displacementMap,m.displacementScale.value=Q.displacementScale,m.displacementBias.value=Q.displacementBias)):Q.isMeshDistanceMaterial?(cd(m,Q),Q.displacementMap&&(m.displacementMap.value=Q.displacementMap,m.displacementScale.value=Q.displacementScale,m.displacementBias.value=Q.displacementBias),m.referencePosition.value.copy(Q.referencePosition),m.nearDistance.value=Q.nearDistance,m.farDistance.value=Q.farDistance):Q.isMeshNormalMaterial?(cd(m,Q),Q.bumpMap&&(m.bumpMap.value=Q.bumpMap,m.bumpScale.value=Q.bumpScale),Q.normalMap&&(m.normalMap.value=Q.normalMap,m.normalScale.value.copy(Q.normalScale)),Q.displacementMap&&(m.displacementMap.value=Q.displacementMap,m.displacementScale.value=Q.displacementScale,m.displacementBias.value=Q.displacementBias)):Q.isLineBasicMaterial?(m.diffuse.value=Q.color,m.opacity.value=Q.opacity,Q.isLineDashedMaterial&&(m.dashSize.value=Q.dashSize,m.totalSize.value=Q.dashSize+Q.gapSize,m.scale.value=Q.scale)):Q.isPointsMaterial?(m.diffuse.value=Q.color,m.opacity.value=Q.opacity,m.size.value=Q.size*fN,m.scale.value=0.5*cg,m.map.value=Q.map,null!==Q.map&&(V=Q.map.offset,Q=Q.map.repeat,m.offsetRepeat.value.set(V.x,V.y,Q.x,Q.y))):Q.isShadowMaterial&&(m.color.value=Q.color,m.opacity.value=Q.opacity),void 0!==m.ltcMat&&(m.ltcMat.value=eS.LTC_MAT_TEXTURE),void 0!==m.ltcMag&&(m.ltcMag.value=eS.LTC_MAG_TEXTURE),eD.upload(fW,N.uniformsList,m,fQ));
z.setValue(fW,"modelViewMatrix",P.modelViewMatrix);
z.setValue(fW,"normalMatrix",P.normalMatrix);
z.setValue(fW,"modelMatrix",P.matrixWorld);
return w
}function cd(w,m){w.opacity.value=m.opacity;
m.color&&(w.diffuse.value=m.color);
m.emissive&&w.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity);
m.map&&(w.map.value=m.map);
m.alphaMap&&(w.alphaMap.value=m.alphaMap);
m.specularMap&&(w.specularMap.value=m.specularMap);
m.envMap&&(w.envMap.value=m.envMap,w.flipEnvMap.value=m.envMap&&m.envMap.isCubeTexture?-1:1,w.reflectivity.value=m.reflectivity,w.refractionRatio.value=m.refractionRatio);
m.lightMap&&(w.lightMap.value=m.lightMap,w.lightMapIntensity.value=m.lightMapIntensity);
m.aoMap&&(w.aoMap.value=m.aoMap,w.aoMapIntensity.value=m.aoMapIntensity);
if(m.map){var z=m.map
}else{m.specularMap?z=m.specularMap:m.displacementMap?z=m.displacementMap:m.normalMap?z=m.normalMap:m.bumpMap?z=m.bumpMap:m.roughnessMap?z=m.roughnessMap:m.metalnessMap?z=m.metalnessMap:m.alphaMap?z=m.alphaMap:m.emissiveMap&&(z=m.emissiveMap)
}void 0!==z&&(z.isWebGLRenderTarget&&(z=z.texture),m=z.offset,z=z.repeat,w.offsetRepeat.value.set(m.x,m.y,z.x,z.y))
}function db(w,m){w.specular.value=m.specular;
w.shininess.value=Math.max(m.shininess,0.0001);
m.emissiveMap&&(w.emissiveMap.value=m.emissiveMap);
m.bumpMap&&(w.bumpMap.value=m.bumpMap,w.bumpScale.value=m.bumpScale);
m.normalMap&&(w.normalMap.value=m.normalMap,w.normalScale.value.copy(m.normalScale));
m.displacementMap&&(w.displacementMap.value=m.displacementMap,w.displacementScale.value=m.displacementScale,w.displacementBias.value=m.displacementBias)
}console.log("THREE.WebGLRenderer","87");
eg=eg||{};
var cb=void 0!==eg.canvas?eg.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),bf=void 0!==eg.context?eg.context:null,be=void 0!==eg.alpha?eg.alpha:!1,f1=void 0!==eg.depth?eg.depth:!0,fT=void 0!==eg.stencil?eg.stencil:!0,f0=void 0!==eg.antialias?eg.antialias:!1,fU=void 0!==eg.premultipliedAlpha?eg.premultipliedAlpha:!0,bb=void 0!==eg.preserveDrawingBuffer?eg.preserveDrawingBuffer:!1,bg=[],bd=[],fM=null,fY=[],fZ=[];
this.domElement=cb;
this.context=null;
this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;
this.clippingPlanes=[];
this.localClippingEnabled=!1;
this.gammaFactor=2;
this.physicallyCorrectLights=this.gammaOutput=this.gammaInput=!1;
this.toneMappingWhitePoint=this.toneMappingExposure=this.toneMapping=1;
this.maxMorphTargets=8;
this.maxMorphNormals=4;
var fQ=this,fK=!1,f5=null,fO=null,fJ=-1,fP="",fL=null,fe=null,fH=new eM,fg=new eM,ff=null,fV=0,fI=cb.width,cg=cb.height,fN=1,f4=new eM(0,0,fI,cg),de=new eM(0,0,fI,cg),fR=!1,fc=new cI,f8=new bv,ae=!1,bc=!1,ge=new eQ,gf=new ew,ac={geometries:0,textures:0},n={frame:0,calls:0,vertices:0,faces:0,points:0};
this.info={render:n,memory:ac,programs:null};
try{be={alpha:be,depth:f1,stencil:fT,antialias:f0,premultipliedAlpha:fU,preserveDrawingBuffer:bb};
var fW=bf||cb.getContext("webgl",be)||cb.getContext("experimental-webgl",be);
if(null===fW){if(null!==cb.getContext("webgl")){throw"Error creating WebGL context with your selected attributes."
}throw"Error creating WebGL context."
}void 0===fW.getShaderPrecisionFormat&&(fW.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}
});
cb.addEventListener("webglcontextlost",ee,!1);
cb.addEventListener("webglcontextrestored",ec,!1)
}catch(L){console.error("THREE.WebGLRenderer: "+L)
}var O,F,fd,ad,gc,ag,gg,fb,f2,fX,f9,ed,ab,gb,f3,f6,fS,S;
ef();
var f7=new bZ(fQ);
this.vr=f7;
var af=new ep(fQ,fb,F.maxTextureSize);
this.shadowMap=af;
this.getContext=function(){return fW
};
this.getContextAttributes=function(){return fW.getContextAttributes()
};
this.forceContextLoss=function(){var m=O.get("WEBGL_lose_context");
m&&m.loseContext()
};
this.forceContextRestore=function(){var m=O.get("WEBGL_lose_context");
m&&m.restoreContext()
};
this.getPixelRatio=function(){return fN
};
this.setPixelRatio=function(m){void 0!==m&&(fN=m,this.setSize(fI,cg,!1))
};
this.getSize=function(){return{width:fI,height:cg}
};
this.setSize=function(w,m,C){var z=f7.getDevice();
z&&z.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(fI=w,cg=m,cb.width=w*fN,cb.height=m*fN,!1!==C&&(cb.style.width=w+"px",cb.style.height=m+"px"),this.setViewport(0,0,w,m))
};
this.getDrawingBufferSize=function(){return{width:fI*fN,height:cg*fN}
};
this.setDrawingBufferSize=function(w,m,z){fI=w;
cg=m;
fN=z;
cb.width=w*z;
cb.height=m*z;
this.setViewport(0,0,w,m)
};
this.setViewport=function(w,m,C,z){f4.set(w,cg-m-z,C,z);
fd.viewport(fH.copy(f4).multiplyScalar(fN))
};
this.setScissor=function(w,m,C,z){de.set(w,cg-m-z,C,z);
fd.scissor(fg.copy(de).multiplyScalar(fN))
};
this.setScissorTest=function(m){fd.setScissorTest(fR=m)
};
this.getClearColor=ed.getClearColor;
this.setClearColor=ed.setClearColor;
this.getClearAlpha=ed.getClearAlpha;
this.setClearAlpha=ed.setClearAlpha;
this.clear=function(w,m,C){var z=0;
if(void 0===w||w){z|=fW.COLOR_BUFFER_BIT
}if(void 0===m||m){z|=fW.DEPTH_BUFFER_BIT
}if(void 0===C||C){z|=fW.STENCIL_BUFFER_BIT
}fW.clear(z)
};
this.clearColor=function(){this.clear(!0,!1,!1)
};
this.clearDepth=function(){this.clear(!1,!0,!1)
};
this.clearStencil=function(){this.clear(!1,!1,!0)
};
this.clearTarget=function(w,m,C,z){this.setRenderTarget(w);
this.clear(m,C,z)
};
this.dispose=function(){cb.removeEventListener("webglcontextlost",ee,!1);
cb.removeEventListener("webglcontextrestored",ec,!1);
f9.dispose();
f7.dispose()
};
this.renderBufferImmediate=function(V,Q,P){fd.initAttributes();
var N=ad.get(V);
V.hasPositions&&!N.position&&(N.position=fW.createBuffer());
V.hasNormals&&!N.normal&&(N.normal=fW.createBuffer());
V.hasUvs&&!N.uv&&(N.uv=fW.createBuffer());
V.hasColors&&!N.color&&(N.color=fW.createBuffer());
Q=Q.getAttributes();
V.hasPositions&&(fW.bindBuffer(fW.ARRAY_BUFFER,N.position),fW.bufferData(fW.ARRAY_BUFFER,V.positionArray,fW.DYNAMIC_DRAW),fd.enableAttribute(Q.position),fW.vertexAttribPointer(Q.position,3,fW.FLOAT,!1,0,0));
if(V.hasNormals){fW.bindBuffer(fW.ARRAY_BUFFER,N.normal);
if(!P.isMeshPhongMaterial&&!P.isMeshStandardMaterial&&!P.isMeshNormalMaterial&&!0===P.flatShading){for(var K=0,D=3*V.count;
K<D;
K+=9){var C=V.normalArray,z=(C[K+0]+C[K+3]+C[K+6])/3,m=(C[K+1]+C[K+4]+C[K+7])/3,w=(C[K+2]+C[K+5]+C[K+8])/3;
C[K+0]=z;
C[K+1]=m;
C[K+2]=w;
C[K+3]=z;
C[K+4]=m;
C[K+5]=w;
C[K+6]=z;
C[K+7]=m;
C[K+8]=w
}}fW.bufferData(fW.ARRAY_BUFFER,V.normalArray,fW.DYNAMIC_DRAW);
fd.enableAttribute(Q.normal);
fW.vertexAttribPointer(Q.normal,3,fW.FLOAT,!1,0,0)
}V.hasUvs&&P.map&&(fW.bindBuffer(fW.ARRAY_BUFFER,N.uv),fW.bufferData(fW.ARRAY_BUFFER,V.uvArray,fW.DYNAMIC_DRAW),fd.enableAttribute(Q.uv),fW.vertexAttribPointer(Q.uv,2,fW.FLOAT,!1,0,0));
V.hasColors&&0!==P.vertexColors&&(fW.bindBuffer(fW.ARRAY_BUFFER,N.color),fW.bufferData(fW.ARRAY_BUFFER,V.colorArray,fW.DYNAMIC_DRAW),fd.enableAttribute(Q.color),fW.vertexAttribPointer(Q.color,3,fW.FLOAT,!1,0,0));
fd.disableUnusedAttributes();
fW.drawArrays(fW.TRIANGLES,0,V.count);
V.count=0
};
this.renderBufferDirect=function(go,gn,gm,gl,gk,gj){fd.setMaterial(gl);
var gi=cc(go,gn,gl,gk);
go=gm.id+"_"+gi.id+"_"+(!0===gl.wireframe);
var gh=!1;
go!==fP&&(fP=go,gh=!0);
gk.morphTargetInfluences&&(ab.update(gk,gm,gl,gi),gh=!0);
var fa=gm.index,ga=gm.attributes.position;
gn=1;
!0===gl.wireframe&&(fa=gg.getWireframeAttribute(gm),gn=2);
go=gb;
if(null!==fa){var V=ag.get(fa);
go=f3;
go.setIndex(V)
}if(gh){gh=void 0;
if(gm&&gm.isInstancedBufferGeometry&&null===O.get("ANGLE_instanced_arrays")){console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.")
}else{void 0===gh&&(gh=0);
fd.initAttributes();
var X=gm.attributes,gi=gi.getAttributes(),P=gl.defaultAttributeValues;
for(D in gi){var da=gi[D];
if(0<=da){var K=X[D];
if(void 0!==K){var aa=K.normalized,C=K.itemSize,N=ag.get(K);
if(void 0!==N){var W=N.buffer,Q=N.type,N=N.bytesPerElement;
if(K.isInterleavedBufferAttribute){var w=K.data,z=w.stride,K=K.offset;
w&&w.isInstancedInterleavedBuffer?(fd.enableAttributeAndDivisor(da,w.meshPerAttribute),void 0===gm.maxInstancedCount&&(gm.maxInstancedCount=w.meshPerAttribute*w.count)):fd.enableAttribute(da);
fW.bindBuffer(fW.ARRAY_BUFFER,W);
fW.vertexAttribPointer(da,C,Q,aa,z*N,(gh*z+K)*N)
}else{K.isInstancedBufferAttribute?(fd.enableAttributeAndDivisor(da,K.meshPerAttribute),void 0===gm.maxInstancedCount&&(gm.maxInstancedCount=K.meshPerAttribute*K.count)):fd.enableAttribute(da),fW.bindBuffer(fW.ARRAY_BUFFER,W),fW.vertexAttribPointer(da,C,Q,aa,0,gh*C*N)
}}}else{if(void 0!==P&&(aa=P[D],void 0!==aa)){switch(aa.length){case 2:fW.vertexAttrib2fv(da,aa);
break;
case 3:fW.vertexAttrib3fv(da,aa);
break;
case 4:fW.vertexAttrib4fv(da,aa);
break;
default:fW.vertexAttrib1fv(da,aa)
}}}}}fd.disableUnusedAttributes()
}null!==fa&&fW.bindBuffer(fW.ELEMENT_ARRAY_BUFFER,V.buffer)
}V=0;
null!==fa?V=fa.count:void 0!==ga&&(V=ga.count);
fa=gm.drawRange.start*gn;
ga=null!==gj?gj.start*gn:0;
var D=Math.max(fa,ga);
gj=Math.max(0,Math.min(V,fa+gm.drawRange.count*gn,ga+(null!==gj?gj.count*gn:Infinity))-1-D+1);
if(0!==gj){if(gk.isMesh){if(!0===gl.wireframe){fd.setLineWidth(gl.wireframeLinewidth*(null===f5?fN:1)),go.setMode(fW.LINES)
}else{switch(gk.drawMode){case 0:go.setMode(fW.TRIANGLES);
break;
case 1:go.setMode(fW.TRIANGLE_STRIP);
break;
case 2:go.setMode(fW.TRIANGLE_FAN)
}}}else{gk.isLine?(gl=gl.linewidth,void 0===gl&&(gl=1),fd.setLineWidth(gl*(null===f5?fN:1)),gk.isLineSegments?go.setMode(fW.LINES):gk.isLineLoop?go.setMode(fW.LINE_LOOP):go.setMode(fW.LINE_STRIP)):gk.isPoints&&go.setMode(fW.POINTS)
}gm&&gm.isInstancedBufferGeometry?0<gm.maxInstancedCount&&go.renderInstances(gm,D,gj):go.render(D,gj)
}};
this.compile=function(w,m){bg.length=0;
bd.length=0;
w.traverse(function(z){z.isLight&&(bg.push(z),z.castShadow&&bd.push(z))
});
f2.setup(bg,bd,m);
w.traverse(function(z){if(z.material){if(Array.isArray(z.material)){for(var C=0;
C<z.material.length;
C++){cf(z.material[C],w.fog,z)
}}else{cf(z.material,w.fog,z)
}}})
};
var R=!1,gd=null;
this.animate=function(m){gd=m;
R||((f7.getDevice()||window).requestAnimationFrame(df),R=!0)
};
this.render=function(w,m,K,D){if(!m||!m.isCamera){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
}else{if(!fK){fP="";
fJ=-1;
fL=null;
!0===w.autoUpdate&&w.updateMatrixWorld();
null===m.parent&&m.updateMatrixWorld();
f7.enabled&&(m=f7.getCamera(m));
ge.multiplyMatrices(m.projectionMatrix,m.matrixWorldInverse);
fc.setFromMatrix(ge);
bg.length=0;
bd.length=0;
fY.length=0;
fZ.length=0;
bc=this.localClippingEnabled;
ae=f8.init(this.clippingPlanes,bc,m);
fM=f9.get(w,m);
fM.init();
dd(w,m,fQ.sortObjects);
!0===fQ.sortObjects&&fM.sort();
ae&&f8.beginShadows();
af.render(bd,w,m);
f2.setup(bg,bd,m);
ae&&f8.endShadows();
n.frame++;
n.calls=0;
n.vertices=0;
n.faces=0;
n.points=0;
void 0===K&&(K=null);
this.setRenderTarget(K);
ed.render(fM,w,m,D);
D=fM.opaque;
var C=fM.transparent;
if(w.overrideMaterial){var z=w.overrideMaterial;
D.length&&dc(D,w,m,z);
C.length&&dc(C,w,m,z)
}else{D.length&&dc(D,w,m),C.length&&dc(C,w,m)
}fS.render(fY,w,m);
f6.render(fZ,w,m,fH);
K&&gc.updateRenderTargetMipmap(K);
fd.buffers.depth.setTest(!0);
fd.buffers.depth.setMask(!0);
fd.buffers.color.setMask(!0);
fd.setPolygonOffset(!1);
f7.enabled&&f7.submitFrame()
}}};
this.setFaceCulling=function(w,m){fd.setCullFace(w);
fd.setFlipSided(0===m)
};
this.allocTextureUnit=function(){var m=fV;
m>=F.maxTextures&&console.warn("THREE.WebGLRenderer: Trying to use "+m+" texture units while this GPU supports only "+F.maxTextures);
fV+=1;
return m
};
this.setTexture2D=function(){var m=!1;
return function(w,z){w&&w.isWebGLRenderTarget&&(m||(console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),m=!0),w=w.texture);
gc.setTexture2D(w,z)
}
}();
this.setTexture=function(){var m=!1;
return function(w,z){m||(console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),m=!0);
gc.setTexture2D(w,z)
}
}();
this.setTextureCube=function(){var m=!1;
return function(w,z){w&&w.isWebGLRenderTargetCube&&(m||(console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),m=!0),w=w.texture);
w&&w.isCubeTexture||Array.isArray(w.image)&&6===w.image.length?gc.setTextureCube(w,z):gc.setTextureCubeDynamic(w,z)
}
}();
this.getRenderTarget=function(){return f5
};
this.setRenderTarget=function(w){(f5=w)&&void 0===ad.get(w).__webglFramebuffer&&gc.setupRenderTarget(w);
var m=null,z=!1;
w?(m=ad.get(w).__webglFramebuffer,w.isWebGLRenderTargetCube&&(m=m[w.activeCubeFace],z=!0),fH.copy(w.viewport),fg.copy(w.scissor),ff=w.scissorTest):(fH.copy(f4).multiplyScalar(fN),fg.copy(de).multiplyScalar(fN),ff=fR);
fO!==m&&(fW.bindFramebuffer(fW.FRAMEBUFFER,m),fO=m);
fd.viewport(fH);
fd.scissor(fg);
fd.setScissorTest(ff);
z&&(z=ad.get(w.texture),fW.framebufferTexture2D(fW.FRAMEBUFFER,fW.COLOR_ATTACHMENT0,fW.TEXTURE_CUBE_MAP_POSITIVE_X+w.activeCubeFace,z.__webglTexture,w.activeMipMapLevel))
};
this.readRenderTargetPixels=function(W,V,Q,P,N,K){if(W&&W.isWebGLRenderTarget){var D=ad.get(W).__webglFramebuffer;
if(D){var C=!1;
D!==fO&&(fW.bindFramebuffer(fW.FRAMEBUFFER,D),C=!0);
try{var w=W.texture,z=w.format,m=w.type;
1023!==z&&S.convert(z)!==fW.getParameter(fW.IMPLEMENTATION_COLOR_READ_FORMAT)?console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."):1009===m||S.convert(m)===fW.getParameter(fW.IMPLEMENTATION_COLOR_READ_TYPE)||1015===m&&(O.get("OES_texture_float")||O.get("WEBGL_color_buffer_float"))||1016===m&&O.get("EXT_color_buffer_half_float")?fW.checkFramebufferStatus(fW.FRAMEBUFFER)===fW.FRAMEBUFFER_COMPLETE?0<=V&&V<=W.width-P&&0<=Q&&Q<=W.height-N&&fW.readPixels(V,Q,P,N,S.convert(z),S.convert(m),K):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."):console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")
}finally{C&&fW.bindFramebuffer(fW.FRAMEBUFFER,fO)
}}}else{console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
}}
}function fx(n,m){this.name="";
this.color=new e2(n);
this.density=void 0!==m?m:0.00025
}function e7(n,m,w){this.name="";
this.color=new e2(n);
this.near=void 0!==m?m:1;
this.far=void 0!==w?w:1000
}function b2(){ev.call(this);
this.type="Scene";
this.overrideMaterial=this.fog=this.background=null;
this.autoUpdate=!0
}function aR(n,m,C,z,w){ev.call(this);
this.lensFlares=[];
this.positionScreen=new ew;
this.customUpdateCallback=void 0;
void 0!==n&&this.add(n,m,C,z,w)
}function aU(m){eP.call(this);
this.type="SpriteMaterial";
this.color=new e2(16777215);
this.map=null;
this.rotation=0;
this.lights=this.fog=!1;
this.setValues(m)
}function e(m){ev.call(this);
this.type="Sprite";
this.material=void 0!==m?m:new aU
}function fB(){ev.call(this);
this.type="LOD";
Object.defineProperties(this,{levels:{enumerable:!0,value:[]}})
}function fj(n,m){n=n||[];
this.bones=n.slice(0);
this.boneMatrices=new Float32Array(16*this.bones.length);
if(void 0===m){this.calculateInverses()
}else{if(this.bones.length===m.length){this.boneInverses=m.slice(0)
}else{for(console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[],n=0,m=this.bones.length;
n<m;
n++){this.boneInverses.push(new eQ)
}}}}function bK(){ev.call(this);
this.type="Bone"
}function by(n,m){dR.call(this,n,m);
this.type="SkinnedMesh";
this.bindMode="attached";
this.bindMatrix=new eQ;
this.bindMatrixInverse=new eQ;
n=this.initBones();
n=new fj(n);
this.bind(n,this.matrixWorld);
this.normalizeSkinWeights()
}function eK(m){eP.call(this);
this.type="LineBasicMaterial";
this.color=new e2(16777215);
this.linewidth=1;
this.linejoin=this.linecap="round";
this.lights=!1;
this.setValues(m)
}function a7(n,m,w){if(1===w){return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),new eJ(n,m)
}ev.call(this);
this.type="Line";
this.geometry=void 0!==n?n:new eX;
this.material=void 0!==m?m:new eK({color:16777215*Math.random()})
}function eJ(n,m){a7.call(this,n,m);
this.type="LineSegments"
}function bm(n,m){a7.call(this,n,m);
this.type="LineLoop"
}function co(m){eP.call(this);
this.type="PointsMaterial";
this.color=new e2(16777215);
this.map=null;
this.size=1;
this.sizeAttenuation=!0;
this.lights=!1;
this.setValues(m)
}function eH(n,m){ev.call(this);
this.type="Points";
this.geometry=void 0!==n?n:new eX;
this.material=void 0!==m?m:new co({color:16777215*Math.random()})
}function aY(){ev.call(this);
this.type="Group"
}function a4(O,N,L,K,F,D,C,z,w){function n(){requestAnimationFrame(n);
O.readyState>=O.HAVE_CURRENT_DATA&&(m.needsUpdate=!0)
}eR.call(this,O,N,L,K,F,D,C,z,w);
this.generateMipmaps=!1;
var m=this;
n()
}function et(P,O,N,L,K,F,D,C,z,w,m,n){eR.call(this,null,F,D,C,z,w,L,K,m,n);
this.image={width:O,height:N};
this.mipmaps=P;
this.generateMipmaps=this.flipY=!1
}function aF(N,L,K,F,D,C,z,w,n,m){m=void 0!==m?m:1026;
if(1026!==m&&1027!==m){throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat")
}void 0===K&&1026===m&&(K=1012);
void 0===K&&1027===m&&(K=1020);
eR.call(this,null,F,D,C,z,w,m,K,n);
this.image={width:N,height:L};
this.magFilter=void 0!==z?z:1003;
this.minFilter=void 0!==w?w:1003;
this.generateMipmaps=this.flipY=!1
}function d9(Q){eX.call(this);
this.type="WireframeGeometry";
var P=[],O,N,L,K=[0,0],F={},D=["a","b","c"];
if(Q&&Q.isGeometry){var C=Q.faces;
var z=0;
for(N=C.length;
z<N;
z++){var n=C[z];
for(O=0;
3>O;
O++){var w=n[D[O]];
var R=n[D[(O+1)%3]];
K[0]=Math.min(w,R);
K[1]=Math.max(w,R);
w=K[0]+","+K[1];
void 0===F[w]&&(F[w]={index1:K[0],index2:K[1]})
}}for(w in F){z=F[w],D=Q.vertices[z.index1],P.push(D.x,D.y,D.z),D=Q.vertices[z.index2],P.push(D.x,D.y,D.z)
}}else{if(Q&&Q.isBufferGeometry){var D=new ew;
if(null!==Q.index){C=Q.attributes.position;
n=Q.index;
var m=Q.groups;
0===m.length&&(m=[{start:0,count:n.count,materialIndex:0}]);
Q=0;
for(L=m.length;
Q<L;
++Q){for(z=m[Q],O=z.start,N=z.count,z=O,N=O+N;
z<N;
z+=3){for(O=0;
3>O;
O++){w=n.getX(z+O),R=n.getX(z+(O+1)%3),K[0]=Math.min(w,R),K[1]=Math.max(w,R),w=K[0]+","+K[1],void 0===F[w]&&(F[w]={index1:K[0],index2:K[1]})
}}}for(w in F){z=F[w],D.fromBufferAttribute(C,z.index1),P.push(D.x,D.y,D.z),D.fromBufferAttribute(C,z.index2),P.push(D.x,D.y,D.z)
}}else{for(C=Q.attributes.position,z=0,N=C.count/3;
z<N;
z++){for(O=0;
3>O;
O++){F=3*z+O,D.fromBufferAttribute(C,F),P.push(D.x,D.y,D.z),F=3*z+(O+1)%3,D.fromBufferAttribute(C,F),P.push(D.x,D.y,D.z)
}}}}}this.addAttribute("position",new es(P,3))
}function at(n,m,w){eO.call(this);
this.type="ParametricGeometry";
this.parameters={func:n,slices:m,stacks:w};
this.fromBufferGeometry(new dW(n,m,w));
this.mergeVertices()
}function dW(V,R,Q){eX.call(this);
this.type="ParametricBufferGeometry";
this.parameters={func:V,slices:R,stacks:Q};
var P=[],O=[],N=[],L=[],K=new ew,F=new ew,D=new ew,w=new ew,z=new ew,X,n,C=R+1;
for(X=0;
X<=Q;
X++){var W=X/Q;
for(n=0;
n<=R;
n++){var S=n/R,F=V(S,W,F);
O.push(F.x,F.y,F.z);
0<=S-0.00001?(D=V(S-0.00001,W,D),w.subVectors(F,D)):(D=V(S+0.00001,W,D),w.subVectors(D,F));
0<=W-0.00001?(D=V(S,W-0.00001,D),z.subVectors(F,D)):(D=V(S,W+0.00001,D),z.subVectors(D,F));
K.crossVectors(w,z).normalize();
N.push(K.x,K.y,K.z);
L.push(S,W)
}}for(X=0;
X<Q;
X++){for(n=0;
n<R;
n++){V=X*C+n+1,K=(X+1)*C+n+1,F=(X+1)*C+n,P.push(X*C+n,V,F),P.push(V,K,F)
}}this.setIndex(P);
this.addAttribute("position",new es(O,3));
this.addAttribute("normal",new es(N,3));
this.addAttribute("uv",new es(L,2))
}function Z(n,m,z,w){eO.call(this);
this.type="PolyhedronGeometry";
this.parameters={vertices:n,indices:m,radius:z,detail:w};
this.fromBufferGeometry(new ao(n,m,z,w));
this.mergeVertices()
}function ao(L,K,F,D){function C(N){n.push(N.x,N.y,N.z)
}function z(N,O){N*=3;
O.x=L[N+0];
O.y=L[N+1];
O.z=L[N+2]
}function w(O,N,Q,P){0>P&&1===O.x&&(m[N]=O.x-1);
0===Q.x&&0===Q.z&&(m[N]=P/2/Math.PI+0.5)
}eX.call(this);
this.type="PolyhedronBufferGeometry";
this.parameters={vertices:L,indices:K,radius:F,detail:D};
F=F||1;
D=D||0;
var n=[],m=[];
(function(ac){for(var aa=new ew,W=new ew,V=new ew,S=0;
S<K.length;
S+=3){z(K[S+0],aa);
z(K[S+1],W);
z(K[S+2],V);
var Q,R,P=aa,ab=W,O=V,ae=Math.pow(2,ac),N=[];
for(R=0;
R<=ae;
R++){N[R]=[];
var af=P.clone().lerp(O,R/ae),ad=ab.clone().lerp(O,R/ae),X=ae-R;
for(Q=0;
Q<=X;
Q++){N[R][Q]=0===Q&&R===ae?af:af.clone().lerp(ad,Q/X)
}}for(R=0;
R<ae;
R++){for(Q=0;
Q<2*(ae-R)-1;
Q++){P=Math.floor(Q/2),0===Q%2?(C(N[R][P+1]),C(N[R+1][P]),C(N[R][P])):(C(N[R][P+1]),C(N[R+1][P+1]),C(N[R+1][P]))
}}}})(D);
(function(O){for(var N=new ew,P=0;
P<n.length;
P+=3){N.x=n[P+0],N.y=n[P+1],N.z=n[P+2],N.normalize().multiplyScalar(O),n[P+0]=N.x,n[P+1]=N.y,n[P+2]=N.z
}})(F);
(function(){for(var X=new ew,W=0;
W<n.length;
W+=3){X.x=n[W+0],X.y=n[W+1],X.z=n[W+2],m.push(Math.atan2(X.z,-X.x)/2/Math.PI+0.5,1-(Math.atan2(-X.y,Math.sqrt(X.x*X.x+X.z*X.z))/Math.PI+0.5))
}for(var X=new ew,W=new ew,S=new ew,R=new ew,Q=new e0,P=new e0,O=new e0,aa=0,V=0;
aa<n.length;
aa+=9,V+=6){X.set(n[aa+0],n[aa+1],n[aa+2]);
W.set(n[aa+3],n[aa+4],n[aa+5]);
S.set(n[aa+6],n[aa+7],n[aa+8]);
Q.set(m[V+0],m[V+1]);
P.set(m[V+2],m[V+3]);
O.set(m[V+4],m[V+5]);
R.copy(X).add(W).add(S).divideScalar(3);
var N=Math.atan2(R.z,-R.x);
w(Q,V+0,X,N);
w(P,V+2,W,N);
w(O,V+4,S,N)
}for(X=0;
X<m.length;
X+=6){W=m[X+0],S=m[X+2],R=m[X+4],Q=Math.min(W,S,R),0.9<Math.max(W,S,R)&&0.1>Q&&(0.2>W&&(m[X+0]+=1),0.2>S&&(m[X+2]+=1),0.2>R&&(m[X+4]+=1))
}})();
this.addAttribute("position",new es(n,3));
this.addAttribute("normal",new es(n.slice(),3));
this.addAttribute("uv",new es(m,2));
0===D?this.computeVertexNormals():this.normalizeNormals()
}function A(n,m){eO.call(this);
this.type="TetrahedronGeometry";
this.parameters={radius:n,detail:m};
this.fromBufferGeometry(new dJ(n,m));
this.mergeVertices()
}function dJ(n,m){ao.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],n,m);
this.type="TetrahedronBufferGeometry";
this.parameters={radius:n,detail:m}
}function j(n,m){eO.call(this);
this.type="OctahedronGeometry";
this.parameters={radius:n,detail:m};
this.fromBufferGeometry(new cV(n,m));
this.mergeVertices()
}function cV(n,m){ao.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],n,m);
this.type="OctahedronBufferGeometry";
this.parameters={radius:n,detail:m}
}function a(n,m){eO.call(this);
this.type="IcosahedronGeometry";
this.parameters={radius:n,detail:m};
this.fromBufferGeometry(new dx(n,m));
this.mergeVertices()
}function dx(n,m){var w=(1+Math.sqrt(5))/2;
ao.call(this,[-1,w,0,1,w,0,-1,-w,0,1,-w,0,0,-1,w,0,1,w,0,-1,-w,0,1,-w,w,0,-1,w,0,1,-w,0,-1,-w,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],n,m);
this.type="IcosahedronBufferGeometry";
this.parameters={radius:n,detail:m}
}function fw(n,m){eO.call(this);
this.type="DodecahedronGeometry";
this.parameters={radius:n,detail:m};
this.fromBufferGeometry(new dk(n,m));
this.mergeVertices()
}function dk(n,m){var z=(1+Math.sqrt(5))/2,w=1/z;
ao.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-w,-z,0,-w,z,0,w,-z,0,w,z,-w,-z,0,-w,z,0,w,-z,0,w,z,0,-z,0,-w,z,0,-w,-z,0,w,z,0,w],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],n,m);
this.type="DodecahedronBufferGeometry";
this.parameters={radius:n,detail:m}
}function e6(n,m,D,C,z,w){eO.call(this);
this.type="TubeGeometry";
this.parameters={path:n,tubularSegments:m,radius:D,radialSegments:C,closed:z};
void 0!==w&&console.warn("THREE.TubeGeometry: taper has been removed.");
n=new c1(n,m,D,C,z);
this.tangents=n.tangents;
this.normals=n.normals;
this.binormals=n.binormals;
this.fromBufferGeometry(n);
this.mergeVertices()
}function c1(R,Q,P,O,N){function L(ac){var ab=R.getPointAt(ac/Q),m=K.normals[ac];
ac=K.binormals[ac];
for(w=0;
w<=O;
w++){var aa=w/O*Math.PI*2,X=Math.sin(aa),aa=-Math.cos(aa);
D.x=aa*m.x+X*ac.x;
D.y=aa*m.y+X*ac.y;
D.z=aa*m.z+X*ac.z;
D.normalize();
z.push(D.x,D.y,D.z);
F.x=ab.x+P*D.x;
F.y=ab.y+P*D.y;
F.z=ab.z+P*D.z;
W.push(F.x,F.y,F.z)
}}eX.call(this);
this.type="TubeBufferGeometry";
this.parameters={path:R,tubularSegments:Q,radius:P,radialSegments:O,closed:N};
Q=Q||64;
P=P||1;
O=O||8;
N=N||!1;
var K=R.computeFrenetFrames(Q,N);
this.tangents=K.tangents;
this.normals=K.normals;
this.binormals=K.binormals;
var F=new ew,D=new ew,C=new e0,n,w,W=[],z=[],S=[],V=[];
for(n=0;
n<Q;
n++){L(n)
}L(!1===N?Q:0);
for(n=0;
n<=Q;
n++){for(w=0;
w<=O;
w++){C.x=n/Q,C.y=w/O,S.push(C.x,C.y)
}}(function(){for(w=1;
w<=Q;
w++){for(n=1;
n<=O;
n++){var m=(O+1)*w+(n-1),aa=(O+1)*w+n,X=(O+1)*(w-1)+n;
V.push((O+1)*(w-1)+(n-1),m,X);
V.push(m,aa,X)
}}})();
this.setIndex(V);
this.addAttribute("position",new es(W,3));
this.addAttribute("normal",new es(z,3));
this.addAttribute("uv",new es(S,2))
}function eG(n,m,F,D,C,z,w){eO.call(this);
this.type="TorusKnotGeometry";
this.parameters={radius:n,tube:m,tubularSegments:F,radialSegments:D,p:C,q:z};
void 0!==w&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");
this.fromBufferGeometry(new cP(n,m,F,D,C,z));
this.mergeVertices()
}function cP(ae,ad,ac,ab,aa,X){function W(af,m,bd,bc,bb){var ag=Math.sin(af);
m=bd/m*af;
bd=Math.cos(m);
bb.x=bc*(2+bd)*0.5*Math.cos(af);
bb.y=bc*(2+bd)*ag*0.5;
bb.z=bc*Math.sin(m)*0.5
}eX.call(this);
this.type="TorusKnotBufferGeometry";
this.parameters={radius:ae,tube:ad,tubularSegments:ac,radialSegments:ab,p:aa,q:X};
ae=ae||100;
ad=ad||40;
ac=Math.floor(ac)||64;
ab=Math.floor(ab)||8;
aa=aa||2;
X=X||3;
var V=[],S=[],R=[],N=[],P,K=new ew,Q=new ew,D=new ew,F=new ew,z=new ew,n=new ew,O=new ew;
for(P=0;
P<=ac;
++P){var w=P/ac*aa*Math.PI*2;
W(w,aa,X,ae,D);
W(w+0.01,aa,X,ae,F);
n.subVectors(F,D);
O.addVectors(F,D);
z.crossVectors(n,O);
O.crossVectors(z,n);
z.normalize();
O.normalize();
for(w=0;
w<=ab;
++w){var L=w/ab*Math.PI*2,C=-ad*Math.cos(L),L=ad*Math.sin(L);
K.x=D.x+(C*O.x+L*z.x);
K.y=D.y+(C*O.y+L*z.y);
K.z=D.z+(C*O.z+L*z.z);
S.push(K.x,K.y,K.z);
Q.subVectors(K,D).normalize();
R.push(Q.x,Q.y,Q.z);
N.push(P/ac);
N.push(w/ab)
}}for(w=1;
w<=ac;
w++){for(P=1;
P<=ab;
P++){ae=(ab+1)*w+(P-1),ad=(ab+1)*w+P,aa=(ab+1)*(w-1)+P,V.push((ab+1)*(w-1)+(P-1),ae,aa),V.push(ae,ad,aa)
}}this.setIndex(V);
this.addAttribute("position",new es(S,3));
this.addAttribute("normal",new es(R,3));
this.addAttribute("uv",new es(N,2))
}function er(n,m,C,z,w){eO.call(this);
this.type="TorusGeometry";
this.parameters={radius:n,tube:m,radialSegments:C,tubularSegments:z,arc:w};
this.fromBufferGeometry(new cE(n,m,C,z,w));
this.mergeVertices()
}function cE(R,Q,P,O,N){eX.call(this);
this.type="TorusBufferGeometry";
this.parameters={radius:R,tube:Q,radialSegments:P,tubularSegments:O,arc:N};
R=R||100;
Q=Q||40;
P=Math.floor(P)||8;
O=Math.floor(O)||6;
N=N||2*Math.PI;
var L=[],K=[],F=[],D=[],C=new ew,n=new ew,w=new ew,W,z;
for(W=0;
W<=P;
W++){for(z=0;
z<=O;
z++){var S=z/O*N,V=W/P*Math.PI*2;
n.x=(R+Q*Math.cos(V))*Math.cos(S);
n.y=(R+Q*Math.cos(V))*Math.sin(S);
n.z=Q*Math.sin(V);
K.push(n.x,n.y,n.z);
C.x=R*Math.cos(S);
C.y=R*Math.sin(S);
w.subVectors(n,C).normalize();
F.push(w.x,w.y,w.z);
D.push(z/O);
D.push(W/P)
}}for(W=1;
W<=P;
W++){for(z=1;
z<=O;
z++){R=(O+1)*(W-1)+z-1,Q=(O+1)*(W-1)+z,N=(O+1)*W+z,L.push((O+1)*W+z-1,R,N),L.push(R,Q,N)
}}this.setIndex(L);
this.addAttribute("position",new es(K,3));
this.addAttribute("normal",new es(F,3));
this.addAttribute("uv",new es(D,2))
}function bY(n,m){eO.call(this);
this.type="ExtrudeGeometry";
this.parameters={shapes:n,options:m};
this.fromBufferGeometry(new E(n,m));
this.mergeVertices()
}function E(n,m){"undefined"!==typeof n&&(eX.call(this),this.type="ExtrudeBufferGeometry",n=Array.isArray(n)?n:[n],this.addShapeList(n,m),this.computeVertexNormals())
}function d8(n,m){eO.call(this);
this.type="TextGeometry";
this.parameters={text:n,parameters:m};
this.fromBufferGeometry(new ct(n,m));
this.mergeVertices()
}function ct(n,m){m=m||{};
var w=m.font;
if(!w||!w.isFont){return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new eO
}n=w.generateShapes(n,m.size,m.curveSegments);
m.amount=void 0!==m.height?m.height:50;
void 0===m.bevelThickness&&(m.bevelThickness=10);
void 0===m.bevelSize&&(m.bevelSize=8);
void 0===m.bevelEnabled&&(m.bevelEnabled=!1);
E.call(this,n,m);
this.type="TextBufferGeometry"
}function dV(n,m,F,D,C,z,w){eO.call(this);
this.type="SphereGeometry";
this.parameters={radius:n,widthSegments:m,heightSegments:F,phiStart:D,phiLength:C,thetaStart:z,thetaLength:w};
this.fromBufferGeometry(new cK(n,m,F,D,C,z,w));
this.mergeVertices()
}function cK(ad,ac,ab,aa,X,W,V){eX.call(this);
this.type="SphereBufferGeometry";
this.parameters={radius:ad,widthSegments:ac,heightSegments:ab,phiStart:aa,phiLength:X,thetaStart:W,thetaLength:V};
ad=ad||50;
ac=Math.max(3,Math.floor(ac)||8);
ab=Math.max(2,Math.floor(ab)||6);
aa=void 0!==aa?aa:0;
X=void 0!==X?X:2*Math.PI;
W=void 0!==W?W:0;
V=void 0!==V?V:Math.PI;
var S=W+V,R,Q,L=0,O=[],F=new ew,P=new ew,C=[],D=[],z=[],n=[];
for(Q=0;
Q<=ab;
Q++){var N=[],w=Q/ab;
for(R=0;
R<=ac;
R++){var K=R/ac;
F.x=-ad*Math.cos(aa+K*X)*Math.sin(W+w*V);
F.y=ad*Math.cos(W+w*V);
F.z=ad*Math.sin(aa+K*X)*Math.sin(W+w*V);
D.push(F.x,F.y,F.z);
P.set(F.x,F.y,F.z).normalize();
z.push(P.x,P.y,P.z);
n.push(K,1-w);
N.push(L++)
}O.push(N)
}for(Q=0;
Q<ab;
Q++){for(R=0;
R<ac;
R++){ad=O[Q][R+1],aa=O[Q][R],X=O[Q+1][R],V=O[Q+1][R+1],(0!==Q||0<W)&&C.push(ad,aa,V),(Q!==ab-1||S<Math.PI)&&C.push(aa,X,V)
}}this.setIndex(C);
this.addAttribute("position",new es(D,3));
this.addAttribute("normal",new es(z,3));
this.addAttribute("uv",new es(n,2))
}function dI(n,m,D,C,z,w){eO.call(this);
this.type="RingGeometry";
this.parameters={innerRadius:n,outerRadius:m,thetaSegments:D,phiSegments:C,thetaStart:z,thetaLength:w};
this.fromBufferGeometry(new ca(n,m,D,C,z,w));
this.mergeVertices()
}function ca(R,Q,P,O,N,L){eX.call(this);
this.type="RingBufferGeometry";
this.parameters={innerRadius:R,outerRadius:Q,thetaSegments:P,phiSegments:O,thetaStart:N,thetaLength:L};
R=R||20;
Q=Q||50;
N=void 0!==N?N:0;
L=void 0!==L?L:2*Math.PI;
P=void 0!==P?Math.max(3,P):8;
O=void 0!==O?Math.max(1,O):1;
var K=[],F=[],D=[],C=[],n=R,w=(Q-R)/O,W=new ew,z=new e0,S,V;
for(S=0;
S<=O;
S++){for(V=0;
V<=P;
V++){R=N+V/P*L,W.x=n*Math.cos(R),W.y=n*Math.sin(R),F.push(W.x,W.y,W.z),D.push(0,0,1),z.x=(W.x/Q+1)/2,z.y=(W.y/Q+1)/2,C.push(z.x,z.y)
}n+=w
}for(S=0;
S<O;
S++){for(Q=S*(P+1),V=0;
V<P;
V++){R=V+Q,N=R+P+1,L=R+P+2,n=R+1,K.push(R,N,n),K.push(N,L,n)
}}this.setIndex(K);
this.addAttribute("position",new es(F,3));
this.addAttribute("normal",new es(D,3));
this.addAttribute("uv",new es(C,2))
}function dw(n,m,z,w){eO.call(this);
this.type="LatheGeometry";
this.parameters={points:n,segments:m,phiStart:z,phiLength:w};
this.fromBufferGeometry(new bR(n,m,z,w));
this.mergeVertices()
}function bR(R,Q,P,O){eX.call(this);
this.type="LatheBufferGeometry";
this.parameters={points:R,segments:Q,phiStart:P,phiLength:O};
Q=Math.floor(Q)||12;
P=P||0;
O=O||2*Math.PI;
O=eN.clamp(O,0,2*Math.PI);
var N=[],L=[],K=[],F=1/Q,D=new ew,C=new e0,n;
for(n=0;
n<=Q;
n++){var w=P+n*F*O;
var S=Math.sin(w),z=Math.cos(w);
for(w=0;
w<=R.length-1;
w++){D.x=R[w].x*S,D.y=R[w].y,D.z=R[w].x*z,L.push(D.x,D.y,D.z),C.x=n/Q,C.y=w/(R.length-1),K.push(C.x,C.y)
}}for(n=0;
n<Q;
n++){for(w=0;
w<R.length-1;
w++){P=w+n*R.length,F=P+R.length,D=P+R.length+1,C=P+1,N.push(P,F,C),N.push(F,D,C)
}}this.setIndex(N);
this.addAttribute("position",new es(L,3));
this.addAttribute("uv",new es(K,2));
this.computeVertexNormals();
if(O===2*Math.PI){for(O=this.attributes.normal.array,N=new ew,L=new ew,K=new ew,P=Q*R.length*3,w=n=0;
n<R.length;
n++,w+=3){N.x=O[w+0],N.y=O[w+1],N.z=O[w+2],L.x=O[P+w+0],L.y=O[P+w+1],L.z=O[P+w+2],K.addVectors(N,L).normalize(),O[w+0]=O[P+w+0]=K.x,O[w+1]=O[P+w+1]=K.y,O[w+2]=O[P+w+2]=K.z
}}}function bF(n,m){eO.call(this);
this.type="ShapeGeometry";
"object"===typeof m&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),m=m.curveSegments);
this.parameters={shapes:n,curveSegments:m};
this.fromBufferGeometry(new bt(n,m));
this.mergeVertices()
}function bt(N,L){function K(Q){var W,R=D.length/3;
Q=Q.extractPoints(L);
var P=Q.shape,S=Q.holes;
if(!1===l.isClockWise(P)){for(P=P.reverse(),Q=0,W=S.length;
Q<W;
Q++){var O=S[Q];
!0===l.isClockWise(O)&&(S[Q]=O.reverse())
}}var V=l.triangulateShape(P,S);
Q=0;
for(W=S.length;
Q<W;
Q++){O=S[Q],P=P.concat(O)
}Q=0;
for(W=P.length;
Q<W;
Q++){O=P[Q],D.push(O.x,O.y,0),C.push(0,0,1),z.push(O.x,O.y)
}Q=0;
for(W=V.length;
Q<W;
Q++){P=V[Q],F.push(P[0]+R,P[1]+R,P[2]+R),n+=3
}}eX.call(this);
this.type="ShapeBufferGeometry";
this.parameters={shapes:N,curveSegments:L};
L=L||12;
var F=[],D=[],C=[],z=[],w=0,n=0;
if(!1===Array.isArray(N)){K(N)
}else{for(var m=0;
m<N.length;
m++){K(N[m]),this.addGroup(w,n,m),w+=n,n=0
}}this.setIndex(F);
this.addAttribute("position",new es(D,3));
this.addAttribute("normal",new es(C,3));
this.addAttribute("uv",new es(z,2))
}function bi(P,O){eX.call(this);
this.type="EdgesGeometry";
this.parameters={thresholdAngle:O};
var N=[];
O=Math.cos(eN.DEG2RAD*(void 0!==O?O:1));
var L=[0,0],K={},F=["a","b","c"];
if(P.isBufferGeometry){var D=new eO;
D.fromBufferGeometry(P)
}else{D=P.clone()
}D.mergeVertices();
D.computeFaceNormals();
P=D.vertices;
D=D.faces;
for(var C=0,z=D.length;
C<z;
C++){for(var w=D[C],m=0;
3>m;
m++){var n=w[F[m]];
var Q=w[F[(m+1)%3]];
L[0]=Math.min(n,Q);
L[1]=Math.max(n,Q);
n=L[0]+","+L[1];
void 0===K[n]?K[n]={index1:L[0],index2:L[1],face1:C,face2:void 0}:K[n].face2=C
}}for(n in K){if(L=K[n],void 0===L.face2||D[L.face1].normal.dot(D[L.face2].normal)<=O){F=P[L.index1],N.push(F.x,F.y,F.z),F=P[L.index2],N.push(F.x,F.y,F.z)
}}this.addAttribute("position",new es(N,3))
}function cz(n,m,K,F,D,C,z,w){eO.call(this);
this.type="CylinderGeometry";
this.parameters={radiusTop:n,radiusBottom:m,height:K,radialSegments:F,heightSegments:D,openEnded:C,thetaStart:z,thetaLength:w};
this.fromBufferGeometry(new cu(n,m,K,F,D,C,z,w));
this.mergeVertices()
}function cu(aa,X,W,V,S,R,Q,P){function O(bb){var af,ae=new e0,ad=new ew,m=0,be=!0===bb?aa:X,ac=!0===bb?1:-1;
var bd=z;
for(af=1;
af<=V;
af++){K.push(0,w*ac,0),D.push(0,ac,0),L.push(0.5,0.5),z++
}var ag=z;
for(af=0;
af<=V;
af++){var ab=af/V*P+Q,bc=Math.cos(ab),ab=Math.sin(ab);
ad.x=be*ab;
ad.y=w*ac;
ad.z=be*bc;
K.push(ad.x,ad.y,ad.z);
D.push(0,ac,0);
ae.x=0.5*bc+0.5;
ae.y=0.5*ab*ac+0.5;
L.push(ae.x,ae.y);
z++
}for(af=0;
af<V;
af++){ae=bd+af,ad=ag+af,!0===bb?F.push(ad,ad+1,ae):F.push(ad+1,ad,ae),m+=3
}N.addGroup(n,m,!0===bb?1:2);
n+=m
}eX.call(this);
this.type="CylinderBufferGeometry";
this.parameters={radiusTop:aa,radiusBottom:X,height:W,radialSegments:V,heightSegments:S,openEnded:R,thetaStart:Q,thetaLength:P};
var N=this;
aa=void 0!==aa?aa:20;
X=void 0!==X?X:20;
W=void 0!==W?W:100;
V=Math.floor(V)||8;
S=Math.floor(S)||1;
R=void 0!==R?R:!1;
Q=void 0!==Q?Q:0;
P=void 0!==P?P:2*Math.PI;
var F=[],K=[],D=[],L=[],z=0,C=[],w=W/2,n=0;
(function(){var ae,ad,ab=new ew,be=new ew,bd=0,ag=(X-aa)/W;
for(ad=0;
ad<=S;
ad++){var m=[],ac=ad/S,bf=ac*(X-aa)+aa;
for(ae=0;
ae<=V;
ae++){var af=ae/V,bc=af*P+Q,bb=Math.sin(bc),bc=Math.cos(bc);
be.x=bf*bb;
be.y=-ac*W+w;
be.z=bf*bc;
K.push(be.x,be.y,be.z);
ab.set(bb,ag,bc).normalize();
D.push(ab.x,ab.y,ab.z);
L.push(af,1-ac);
m.push(z++)
}C.push(m)
}for(ae=0;
ae<V;
ae++){for(ad=0;
ad<S;
ad++){ab=C[ad+1][ae],be=C[ad+1][ae+1],ag=C[ad][ae+1],F.push(C[ad][ae],ab,ag),F.push(ab,be,ag),bd+=6
}}N.addGroup(n,bd,0);
n+=bd
})();
!1===R&&(0<aa&&O(!0),0<X&&O(!1));
this.setIndex(F);
this.addAttribute("position",new es(K,3));
this.addAttribute("normal",new es(D,3));
this.addAttribute("uv",new es(L,2))
}function dj(n,m,F,D,C,z,w){cz.call(this,0,n,m,F,D,C,z,w);
this.type="ConeGeometry";
this.parameters={radius:n,height:m,radialSegments:F,heightSegments:D,openEnded:C,thetaStart:z,thetaLength:w}
}function c0(n,m,F,D,C,z,w){cu.call(this,0,n,m,F,D,C,z,w);
this.type="ConeBufferGeometry";
this.parameters={radius:n,height:m,radialSegments:F,heightSegments:D,openEnded:C,thetaStart:z,thetaLength:w}
}function cO(n,m,z,w){eO.call(this);
this.type="CircleGeometry";
this.parameters={radius:n,segments:m,thetaStart:z,thetaLength:w};
this.fromBufferGeometry(new aT(n,m,z,w));
this.mergeVertices()
}function aT(P,O,N,L){eX.call(this);
this.type="CircleBufferGeometry";
this.parameters={radius:P,segments:O,thetaStart:N,thetaLength:L};
P=P||50;
O=void 0!==O?Math.max(3,O):8;
N=void 0!==N?N:0;
L=void 0!==L?L:2*Math.PI;
var K=[],F=[],D=[],C=[],z,w=new ew,m=new e0;
F.push(0,0,0);
D.push(0,0,1);
C.push(0.5,0.5);
var n=0;
for(z=3;
n<=O;
n++,z+=3){var Q=N+n/O*L;
w.x=P*Math.cos(Q);
w.y=P*Math.sin(Q);
F.push(w.x,w.y,w.z);
D.push(0,0,1);
m.x=(F[z]/P+1)/2;
m.y=(F[z+1]/P+1)/2;
C.push(m.x,m.y)
}for(z=1;
z<=O;
z++){K.push(z,z+1,0)
}this.setIndex(K);
this.addAttribute("position",new es(F,3));
this.addAttribute("normal",new es(D,3));
this.addAttribute("uv",new es(C,2))
}function bX(m){eP.call(this);
this.type="ShadowMaterial";
this.color=new e2(0);
this.opacity=1;
this.transparent=this.lights=!0;
this.setValues(m)
}function fq(m){fD.call(this,m);
this.type="RawShaderMaterial"
}function dK(m){eP.call(this);
this.defines={STANDARD:""};
this.type="MeshStandardMaterial";
this.color=new e2(16777215);
this.metalness=this.roughness=0.5;
this.lightMap=this.map=null;
this.lightMapIntensity=1;
this.aoMap=null;
this.aoMapIntensity=1;
this.emissive=new e2(0);
this.emissiveIntensity=1;
this.bumpMap=this.emissiveMap=null;
this.bumpScale=1;
this.normalMap=null;
this.normalScale=new e0(1,1);
this.displacementMap=null;
this.displacementScale=1;
this.displacementBias=0;
this.envMap=this.alphaMap=this.metalnessMap=this.roughnessMap=null;
this.envMapIntensity=1;
this.refractionRatio=0.98;
this.wireframe=!1;
this.wireframeLinewidth=1;
this.wireframeLinejoin=this.wireframeLinecap="round";
this.morphNormals=this.morphTargets=this.skinning=!1;
this.setValues(m)
}function cn(m){dK.call(this);
this.defines={PHYSICAL:""};
this.type="MeshPhysicalMaterial";
this.reflectivity=0.5;
this.clearCoatRoughness=this.clearCoat=0;
this.setValues(m)
}function a0(m){eP.call(this);
this.type="MeshPhongMaterial";
this.color=new e2(16777215);
this.specular=new e2(1118481);
this.shininess=30;
this.lightMap=this.map=null;
this.lightMapIntensity=1;
this.aoMap=null;
this.aoMapIntensity=1;
this.emissive=new e2(0);
this.emissiveIntensity=1;
this.bumpMap=this.emissiveMap=null;
this.bumpScale=1;
this.normalMap=null;
this.normalScale=new e0(1,1);
this.displacementMap=null;
this.displacementScale=1;
this.displacementBias=0;
this.envMap=this.alphaMap=this.specularMap=null;
this.combine=0;
this.reflectivity=1;
this.refractionRatio=0.98;
this.wireframe=!1;
this.wireframeLinewidth=1;
this.wireframeLinejoin=this.wireframeLinecap="round";
this.morphNormals=this.morphTargets=this.skinning=!1;
this.setValues(m)
}function b4(m){a0.call(this);
this.defines={TOON:""};
this.type="MeshToonMaterial";
this.gradientMap=null;
this.setValues(m)
}function bM(m){eP.call(this);
this.type="MeshNormalMaterial";
this.bumpMap=null;
this.bumpScale=1;
this.normalMap=null;
this.normalScale=new e0(1,1);
this.displacementMap=null;
this.displacementScale=1;
this.displacementBias=0;
this.wireframe=!1;
this.wireframeLinewidth=1;
this.morphNormals=this.morphTargets=this.skinning=this.lights=this.fog=!1;
this.setValues(m)
}function bA(m){eP.call(this);
this.type="MeshLambertMaterial";
this.color=new e2(16777215);
this.lightMap=this.map=null;
this.lightMapIntensity=1;
this.aoMap=null;
this.aoMapIntensity=1;
this.emissive=new e2(0);
this.emissiveIntensity=1;
this.envMap=this.alphaMap=this.specularMap=this.emissiveMap=null;
this.combine=0;
this.reflectivity=1;
this.refractionRatio=0.98;
this.wireframe=!1;
this.wireframeLinewidth=1;
this.wireframeLinejoin=this.wireframeLinecap="round";
this.morphNormals=this.morphTargets=this.skinning=!1;
this.setValues(m)
}function bo(m){eK.call(this);
this.type="LineDashedMaterial";
this.scale=1;
this.dashSize=3;
this.gapSize=1;
this.setValues(m)
}function bV(n,m,F){var D=this,C=!1,z=0,w=0;
this.onStart=void 0;
this.onLoad=n;
this.onProgress=m;
this.onError=F;
this.itemStart=function(K){w++;
if(!1===C&&void 0!==D.onStart){D.onStart(K,z,w)
}C=!0
};
this.itemEnd=function(K){z++;
if(void 0!==D.onProgress){D.onProgress(K,z,w)
}if(z===w&&(C=!1,void 0!==D.onLoad)){D.onLoad()
}};
this.itemError=function(K){if(void 0!==D.onError){D.onError(K)
}}
}function e8(m){this.manager=void 0!==m?m:bN
}function cM(m){this.manager=void 0!==m?m:bN;
this._parser=null
}function fo(m){this.manager=void 0!==m?m:bN;
this._parser=null
}function cD(m){this.manager=void 0!==m?m:bN
}function eW(m){this.manager=void 0!==m?m:bN
}function aL(m){this.manager=void 0!==m?m:bN
}function fs(n,m){ev.call(this);
this.type="Light";
this.color=new e2(n);
this.intensity=void 0!==m?m:1;
this.receiveShadow=void 0
}function az(n,m,w){fs.call(this,n,w);
this.type="HemisphereLight";
this.castShadow=void 0;
this.position.copy(ev.DefaultUp);
this.updateMatrix();
this.groundColor=new e2(m)
}function a6(m){this.camera=m;
this.bias=0;
this.radius=1;
this.mapSize=new e0(512,512);
this.map=null;
this.matrix=new eQ
}function al(){a6.call(this,new cW(50,1,0.5,500))
}function I(n,m,D,C,z,w){fs.call(this,n,m);
this.type="SpotLight";
this.position.copy(ev.DefaultUp);
this.updateMatrix();
this.target=new ev;
Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI
},set:function(F){this.intensity=F/Math.PI
}});
this.distance=void 0!==D?D:0;
this.angle=void 0!==C?C:Math.PI/3;
this.penumbra=void 0!==z?z:0;
this.decay=void 0!==w?w:1;
this.shadow=new al
}function q(n,m,z,w){fs.call(this,n,m);
this.type="PointLight";
Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI
},set:function(C){this.intensity=C/(4*Math.PI)
}});
this.distance=void 0!==z?z:0;
this.decay=void 0!==w?w:1;
this.shadow=new a6(new cW(90,1,0.5,500))
}function d(){a6.call(this,new ah(-5,5,5,-5,0.5,500))
}function fA(n,m){fs.call(this,n,m);
this.type="DirectionalLight";
this.position.copy(ev.DefaultUp);
this.updateMatrix();
this.target=new ev;
this.shadow=new d
}function fi(n,m){fs.call(this,n,m);
this.type="AmbientLight";
this.castShadow=void 0
}function aX(n,m,z,w){fs.call(this,n,m);
this.type="RectAreaLight";
this.position.set(0,1,0);
this.updateMatrix();
this.width=void 0!==z?z:10;
this.height=void 0!==w?w:10
}function u(n,m,z,w){this.parameterPositions=n;
this._cachedIndex=0;
this.resultBuffer=void 0!==w?w:new m.constructor(z);
this.sampleValues=m;
this.valueSize=z
}function aE(n,m,z,w){u.call(this,n,m,z,w);
this._offsetNext=this._weightNext=this._offsetPrev=this._weightPrev=-0
}function cs(n,m,z,w){u.call(this,n,m,z,w)
}function ar(n,m,z,w){u.call(this,n,m,z,w)
}function aN(n,m,z,w){if(void 0===n){throw Error("track name is undefined")
}if(void 0===m||0===m.length){throw Error("no keyframes in track named "+n)
}this.name=n;
this.times=d4.convertArray(m,this.TimeBufferType);
this.values=d4.convertArray(z,this.ValueBufferType);
this.setInterpolation(w||this.DefaultInterpolation);
this.validate();
this.optimize()
}function eZ(n,m,z,w){aN.call(this,n,m,z,w)
}function Y(n,m,z,w){u.call(this,n,m,z,w)
}function b9(n,m,z,w){aN.call(this,n,m,z,w)
}function eC(n,m,z,w){aN.call(this,n,m,z,w)
}function y(n,m,z,w){aN.call(this,n,m,z,w)
}function i(n,m,w){aN.call(this,n,m,w)
}function fG(n,m,z,w){aN.call(this,n,m,z,w)
}function aB(n,m,z,w){aN.apply(this,arguments)
}function aH(n,m,w){this.name=n;
this.tracks=w;
this.duration=void 0!==m?m:-1;
this.uuid=eN.generateUUID();
0>this.duration&&this.resetDuration();
this.optimize()
}function fv(m){this.manager=void 0!==m?m:bN;
this.textures={}
}function eA(m){this.manager=void 0!==m?m:bN
}function el(){this.onLoadStart=function(){};
this.onLoadProgress=function(){};
this.onLoadComplete=function(){}
}function ej(m){"boolean"===typeof m&&(console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),m=void 0);
this.manager=void 0!==m?m:bN;
this.withCredentials=!1
}function cB(m){this.manager=void 0!==m?m:bN;
this.texturePath=""
}function cq(n,m,D,C,z){m=0.5*(C-m);
z=0.5*(z-D);
var w=n*n;
return(2*D-2*C+m+z)*n*w+(-3*D+3*C-2*m-z)*w+m*n+D
}function an(n,m,C,z){var w=1-n;
return w*w*m+2*(1-n)*n*C+n*n*z
}function M(n,m,F,D,C){var z=1-n,w=1-n;
return z*z*z*m+3*w*w*n*F+3*(1-n)*n*n*D+n*n*n*C
}function bB(){this.arcLengthDivisions=200
}function dy(n,m){this.arcLengthDivisions=200;
this.v1=n;
this.v2=m
}function bQ(){this.arcLengthDivisions=200;
this.curves=[];
this.autoClose=!1
}function ch(n,m,K,F,D,C,z,w){this.arcLengthDivisions=200;
this.aX=n;
this.aY=m;
this.xRadius=K;
this.yRadius=F;
this.aStartAngle=D;
this.aEndAngle=C;
this.aClockwise=z;
this.aRotation=w||0
}function t(m){this.arcLengthDivisions=200;
this.points=void 0===m?[]:m
}function d2(n,m,z,w){this.arcLengthDivisions=200;
this.v0=n;
this.v1=m;
this.v2=z;
this.v3=w
}function dP(n,m,w){this.arcLengthDivisions=200;
this.v0=n;
this.v1=m;
this.v2=w
}function bE(m){bQ.call(this);
this.currentPoint=new e0;
m&&this.fromPoints(m)
}function f(){bE.apply(this,arguments);
this.holes=[]
}function d0(){this.subPaths=[];
this.currentPath=null
}function dN(m){this.data=m
}function b7(m){this.manager=void 0!==m?m:bN
}function dB(m){this.manager=void 0!==m?m:bN
}function bP(){this.type="StereoCamera";
this.aspect=1;
this.eyeSep=0.064;
this.cameraL=new cW;
this.cameraL.layers.enable(1);
this.cameraL.matrixAutoUpdate=!1;
this.cameraR=new cW;
this.cameraR.layers.enable(2);
this.cameraR.matrixAutoUpdate=!1
}function bs(L,K,F){ev.call(this);
this.type="CubeCamera";
var D=new cW(90,1,L,K);
D.up.set(0,-1,0);
D.lookAt(new ew(1,0,0));
this.add(D);
var C=new cW(90,1,L,K);
C.up.set(0,-1,0);
C.lookAt(new ew(-1,0,0));
this.add(C);
var z=new cW(90,1,L,K);
z.up.set(0,0,1);
z.lookAt(new ew(0,1,0));
this.add(z);
var w=new cW(90,1,L,K);
w.up.set(0,0,-1);
w.lookAt(new ew(0,-1,0));
this.add(w);
var n=new cW(90,1,L,K);
n.up.set(0,-1,0);
n.lookAt(new ew(0,0,1));
this.add(n);
var m=new cW(90,1,L,K);
m.up.set(0,-1,0);
m.lookAt(new ew(0,0,-1));
this.add(m);
this.renderTarget=new aG(F,F,{format:1022,magFilter:1006,minFilter:1006});
this.renderTarget.texture.name="CubeCamera";
this.update=function(P,N){null===this.parent&&this.updateMatrixWorld();
var Q=this.renderTarget,O=Q.texture.generateMipmaps;
Q.texture.generateMipmaps=!1;
Q.activeCubeFace=0;
P.render(N,D,Q);
Q.activeCubeFace=1;
P.render(N,C,Q);
Q.activeCubeFace=2;
P.render(N,z,Q);
Q.activeCubeFace=3;
P.render(N,w,Q);
Q.activeCubeFace=4;
P.render(N,n,Q);
Q.texture.generateMipmaps=O;
Q.activeCubeFace=5;
P.render(N,m,Q);
P.setRenderTarget(null)
};
this.clear=function(O,N,S,R){for(var Q=this.renderTarget,P=0;
6>P;
P++){Q.activeCubeFace=P,O.setRenderTarget(Q),O.clear(N,S,R)
}O.setRenderTarget(null)
}
}function dp(){ev.call(this);
this.type="AudioListener";
this.context=c4.getContext();
this.gain=this.context.createGain();
this.gain.connect(this.context.destination);
this.filter=null
}function dD(m){ev.call(this);
this.type="Audio";
this.context=m.context;
this.gain=this.context.createGain();
this.gain.connect(m.getInput());
this.autoplay=!1;
this.buffer=null;
this.loop=!1;
this.startTime=0;
this.playbackRate=1;
this.isPlaying=!1;
this.hasPlaybackControl=!0;
this.sourceType="empty";
this.filters=[]
}function cT(m){dD.call(this,m);
this.panner=this.context.createPanner();
this.panner.connect(this.gain)
}function cH(n,m){this.analyser=n.context.createAnalyser();
this.analyser.fftSize=void 0!==m?m:2048;
this.data=new Uint8Array(this.analyser.frequencyBinCount);
n.getOutput().connect(this.analyser)
}function cx(n,m,w){this.binding=n;
this.valueSize=w;
n=Float64Array;
switch(m){case"quaternion":m=this._slerp;
break;
case"string":case"bool":n=Array;
m=this._select;
break;
default:m=this._lerp
}this.buffer=new n(4*w);
this._mixBufferRegion=m;
this.referenceCount=this.useCount=this.cumulativeWeight=0
}function bD(n,m,w){w=w||en.parseTrackName(m);
this._targetGroup=n;
this._bindings=n.subscribe_(m,w)
}function en(n,m,w){this.path=m;
this.parsedPath=w||en.parseTrackName(m);
this.node=en.findNode(n,this.parsedPath.nodeName)||n;
this.rootNode=n
}function br(n){this.uuid=eN.generateUUID();
this._objects=Array.prototype.slice.call(arguments);
this.nCachedObjects_=0;
var m={};
this._indicesByUUID=m;
for(var C=0,z=arguments.length;
C!==z;
++C){m[arguments[C].uuid]=C
}this._paths=[];
this._parsedPaths=[];
this._bindings=[];
this._bindingsIndicesByPath={};
var w=this;
this.stats={objects:{get total(){return w._objects.length
},get inUse(){return this.total-w.nCachedObjects_
}},get bindingsPerObject(){return w._bindings.length
}}
}function a9(n,m,D){this._mixer=n;
this._clip=m;
this._localRoot=D||null;
n=m.tracks;
m=n.length;
D=Array(m);
for(var C={endingStart:2400,endingEnd:2400},z=0;
z!==m;
++z){var w=n[z].createInterpolant(null);
D[z]=w;
w.settings=C
}this._interpolantSettings=C;
this._interpolants=D;
this._propertyBindings=Array(m);
this._weightInterpolant=this._timeScaleInterpolant=this._byClipCacheIndex=this._cacheIndex=null;
this.loop=2201;
this._loopCount=-1;
this._startTime=null;
this.time=0;
this._effectiveWeight=this.weight=this._effectiveTimeScale=this.timeScale=1;
this.repetitions=Infinity;
this.paused=!1;
this.enabled=!0;
this.clampWhenFinished=!1;
this.zeroSlopeAtEnd=this.zeroSlopeAtStart=!0
}function aQ(m){this._root=m;
this._initMemoryManager();
this.time=this._accuIndex=0;
this.timeScale=1
}function e5(n,m){"string"===typeof n&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),n=m);
this.value=n
}function ck(){eX.call(this);
this.type="InstancedBufferGeometry";
this.maxInstancedCount=void 0
}function b1(n,m,z,w){this.uuid=eN.generateUUID();
this.data=n;
this.itemSize=m;
this.offset=z;
this.normalized=!0===w
}function dr(n,m){this.uuid=eN.generateUUID();
this.array=n;
this.stride=m;
this.count=void 0!==n?n.length/m:0;
this.dynamic=!1;
this.updateRange={offset:0,count:-1};
this.onUploadCallback=function(){};
this.version=0
}function bJ(n,m,w){dr.call(this,n,m);
this.meshPerAttribute=w||1
}function bx(n,m,w){eT.call(this,n,m);
this.meshPerAttribute=w||1
}function bU(n,m,z,w){this.ray=new ds(n,m);
this.near=z||0;
this.far=w||Infinity;
this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}};
Object.defineProperties(this.params,{PointCloud:{get:function(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");
return this.Points
}}})
}function fn(n,m){return n.distance-m.distance
}function bl(n,m,C,z){if(!1!==n.visible&&(n.raycast(m,C),!0===z)){n=n.children;
z=0;
for(var w=n.length;
z<w;
z++){bl(n[z],m,C,!0)
}}}function eV(m){this.autoStart=void 0!==m?m:!0;
this.elapsedTime=this.oldTime=this.startTime=0;
this.running=!1
}function ez(n,m,w){this.radius=void 0!==n?n:1;
this.phi=void 0!==m?m:0;
this.theta=void 0!==w?w:0;
return this
}function ei(n,m,w){this.radius=void 0!==n?n:1;
this.theta=void 0!==m?m:0;
this.y=void 0!==w?w:0;
return this
}function bh(m){ev.call(this);
this.material=m;
this.render=function(n){}
}function aS(n,m,z,w){this.object=n;
this.size=void 0!==m?m:1;
n=void 0!==z?z:16711680;
w=void 0!==w?w:1;
m=0;
(z=this.object.geometry)&&z.isGeometry?m=3*z.faces.length:z&&z.isBufferGeometry&&(m=z.attributes.normal.count);
z=new eX;
m=new es(6*m,3);
z.addAttribute("position",m);
eJ.call(this,z,new eK({color:n,linewidth:w}));
this.matrixAutoUpdate=!1;
this.update()
}function c6(n,m){ev.call(this);
this.light=n;
this.light.updateMatrixWorld();
this.matrix=n.matrixWorld;
this.matrixAutoUpdate=!1;
this.color=m;
n=new eX;
m=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];
for(var D=0,C=1;
32>D;
D++,C++){var z=D/32*Math.PI*2,w=C/32*Math.PI*2;
m.push(Math.cos(z),Math.sin(z),1,Math.cos(w),Math.sin(w),1)
}n.addAttribute("position",new es(m,3));
m=new eK({fog:!1});
this.cone=new eJ(n,m);
this.add(this.cone);
this.update()
}function dZ(n){var m=[];
n&&n.isBone&&m.push(n);
for(var w=0;
w<n.children.length;
w++){m.push.apply(m,dZ(n.children[w]))
}return m
}function cU(L){for(var K=dZ(L),F=new eX,D=[],C=[],z=new e2(0,0,1),w=new e2(0,1,0),n=0;
n<K.length;
n++){var m=K[n];
m.parent&&m.parent.isBone&&(D.push(0,0,0),D.push(0,0,0),C.push(z.r,z.g,z.b),C.push(w.r,w.g,w.b))
}F.addAttribute("position",new es(D,3));
F.addAttribute("color",new es(C,3));
D=new eK({vertexColors:2,depthTest:!1,depthWrite:!1,transparent:!0});
eJ.call(this,F,D);
this.root=L;
this.bones=K;
this.matrix=L.matrixWorld;
this.matrixAutoUpdate=!1;
this.onBeforeRender()
}function cJ(n,m,w){this.light=n;
this.light.updateMatrixWorld();
this.color=w;
n=new cK(m,4,2);
m=new aO({wireframe:!0,fog:!1});
dR.call(this,n,m);
this.matrix=this.light.matrixWorld;
this.matrixAutoUpdate=!1;
this.update()
}function cy(n,m){ev.call(this);
this.light=n;
this.light.updateMatrixWorld();
this.matrix=n.matrixWorld;
this.matrixAutoUpdate=!1;
this.color=m;
n=new eK({fog:!1});
m=new eX;
m.addAttribute("position",new eT(new Float32Array(15),3));
this.line=new a7(m,n);
this.add(this.line);
this.update()
}function cm(n,m,w){ev.call(this);
this.light=n;
this.light.updateMatrixWorld();
this.matrix=n.matrixWorld;
this.matrixAutoUpdate=!1;
this.color=w;
n=new cV(m);
n.rotateY(0.5*Math.PI);
this.material=new aO({wireframe:!0,fog:!1});
void 0===this.color&&(this.material.vertexColors=2);
m=n.getAttribute("position");
m=new Float32Array(3*m.count);
n.addAttribute("color",new eT(m,3));
this.add(new dR(n,this.material));
this.update()
}function bW(P,O,N,L){P=P||10;
O=O||10;
N=new e2(void 0!==N?N:4473924);
L=new e2(void 0!==L?L:8947848);
var K=O/2,F=P/O,D=P/2;
P=[];
for(var C=[],z=0,w=0,m=-D;
z<=O;
z++,m+=F){P.push(-D,0,m,D,0,m);
P.push(m,0,-D,m,0,D);
var n=z===K?N:L;
n.toArray(C,w);
w+=3;
n.toArray(C,w);
w+=3;
n.toArray(C,w);
w+=3;
n.toArray(C,w);
w+=3
}O=new eX;
O.addAttribute("position",new es(P,3));
O.addAttribute("color",new es(C,3));
N=new eK({vertexColors:2});
eJ.call(this,O,N)
}function eF(R,Q,P,O,N,L){R=R||10;
Q=Q||16;
P=P||8;
O=O||64;
N=new e2(void 0!==N?N:4473924);
L=new e2(void 0!==L?L:8947848);
var K=[],F=[],D;
for(D=0;
D<=Q;
D++){var C=D/Q*2*Math.PI;
var n=Math.sin(C)*R;
C=Math.cos(C)*R;
K.push(0,0,0);
K.push(n,0,C);
var w=D&1?N:L;
F.push(w.r,w.g,w.b);
F.push(w.r,w.g,w.b)
}for(D=0;
D<=P;
D++){w=D&1?N:L;
var z=R-R/P*D;
for(Q=0;
Q<O;
Q++){C=Q/O*2*Math.PI,n=Math.sin(C)*z,C=Math.cos(C)*z,K.push(n,0,C),F.push(w.r,w.g,w.b),C=(Q+1)/O*2*Math.PI,n=Math.sin(C)*z,C=Math.cos(C)*z,K.push(n,0,C),F.push(w.r,w.g,w.b)
}}R=new eX;
R.addAttribute("position",new es(K,3));
R.addAttribute("color",new es(F,3));
K=new eK({vertexColors:2});
eJ.call(this,R,K)
}function fp(n,m,z,w){this.object=n;
this.size=void 0!==m?m:1;
n=void 0!==z?z:16776960;
w=void 0!==w?w:1;
m=0;
(z=this.object.geometry)&&z.isGeometry?m=z.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
z=new eX;
m=new es(6*m,3);
z.addAttribute("position",m);
eJ.call(this,z,new eK({color:n,linewidth:w}));
this.matrixAutoUpdate=!1;
this.update()
}function b3(n,m,w){ev.call(this);
this.light=n;
this.light.updateMatrixWorld();
this.matrix=n.matrixWorld;
this.matrixAutoUpdate=!1;
this.color=w;
void 0===m&&(m=1);
n=new eX;
n.addAttribute("position",new es([-m,m,0,m,m,0,m,-m,0,-m,-m,0,-m,m,0],3));
m=new eK({fog:!1});
this.lightPlane=new a7(n,m);
this.add(this.lightPlane);
n=new eX;
n.addAttribute("position",new es([0,0,0,0,0,1],3));
this.targetLine=new a7(n,m);
this.add(this.targetLine);
this.update()
}function eY(R){function Q(S,m,V){P(S,V);
P(m,V)
}function P(S,m){L.push(0,0,0);
K.push(m.r,m.g,m.b);
void 0===F[S]&&(F[S]=[]);
F[S].push(L.length/3-1)
}var O=new eX,N=new eK({color:16777215,vertexColors:1}),L=[],K=[],F={},D=new e2(16755200),C=new e2(16711680),n=new e2(43775),w=new e2(16777215),z=new e2(3355443);
Q("n1","n2",D);
Q("n2","n4",D);
Q("n4","n3",D);
Q("n3","n1",D);
Q("f1","f2",D);
Q("f2","f4",D);
Q("f4","f3",D);
Q("f3","f1",D);
Q("n1","f1",D);
Q("n2","f2",D);
Q("n3","f3",D);
Q("n4","f4",D);
Q("p","n1",C);
Q("p","n2",C);
Q("p","n3",C);
Q("p","n4",C);
Q("u1","u2",n);
Q("u2","u3",n);
Q("u3","u1",n);
Q("c","t",w);
Q("p","c",z);
Q("cn1","cn2",z);
Q("cn3","cn4",z);
Q("cf1","cf2",z);
Q("cf3","cf4",z);
O.addAttribute("position",new es(L,3));
O.addAttribute("color",new es(K,3));
eJ.call(this,O,N);
this.camera=R;
this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix();
this.matrix=R.matrixWorld;
this.matrixAutoUpdate=!1;
this.pointMap=F;
this.update()
}function fC(n,m){this.object=n;
void 0===m&&(m=16776960);
n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]);
var z=new Float32Array(24),w=new eX;
w.setIndex(new eT(n,1));
w.addAttribute("position",new eT(z,3));
eJ.call(this,w,new eK({color:m}));
this.matrixAutoUpdate=!1;
this.update()
}function eB(n,m){this.type="Box3Helper";
this.box=n;
n=void 0!==m?m:16776960;
m=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]);
var w=new eX;
w.setIndex(new eT(m,1));
w.addAttribute("position",new es([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3));
eJ.call(this,w,new eK({color:n}));
this.geometry.computeBoundingSphere();
this.onBeforeRender()
}function ek(n,m,w){this.type="PlaneHelper";
this.plane=n;
this.size=void 0===m?1:m;
n=void 0!==w?w:16776960;
m=new eX;
m.addAttribute("position",new es([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],3));
m.computeBoundingSphere();
a7.call(this,m,new eK({color:n}));
m=new eX;
m.addAttribute("position",new es([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3));
m.computeBoundingSphere();
this.add(new dR(m,new aO({color:n,opacity:0.2,transparent:!0,depthWrite:!1})));
this.onBeforeRender()
}function fk(n,m,D,C,z,w){ev.call(this);
void 0===C&&(C=16776960);
void 0===D&&(D=1);
void 0===z&&(z=0.2*D);
void 0===w&&(w=0.2*z);
void 0===eq&&(eq=new eX,eq.addAttribute("position",new es([0,0,0,0,1,0],3)),a3=new cu(0,0.5,1,5,1),a3.translate(0,-0.5,0));
this.position.copy(m);
this.line=new a7(eq,new eK({color:C}));
this.line.matrixAutoUpdate=!1;
this.add(this.line);
this.cone=new dR(a3,new aO({color:C}));
this.cone.matrixAutoUpdate=!1;
this.add(this.cone);
this.setDirection(n);
this.setLength(D,z,w)
}function d7(n){n=n||1;
var m=[0,0,0,n,0,0,0,0,0,0,n,0,0,0,0,0,0,n];
n=new eX;
n.addAttribute("position",new es(m,3));
n.addAttribute("color",new es([1,0,0,1,0.6,0,0,1,0,0.6,1,0,0,0,1,0,0.6,1],3));
m=new eK({vertexColors:2});
eJ.call(this,n,m)
}function aK(){var n=0,m=0,z=0,w=0;
return{initCatmullRom:function(L,K,F,D,C){L=C*(F-L);
D=C*(D-K);
n=K;
m=L;
z=-3*K+3*F-2*L-D;
w=2*K-2*F+L+D
},initNonuniformCatmullRom:function(O,N,K,F,D,C,L){O=((N-O)/D-(K-O)/(D+C)+(K-N)/C)*C;
F=((K-N)/C-(F-N)/(C+L)+(F-K)/L)*C;
n=N;
m=O;
z=-3*N+3*K-2*O-F;
w=2*N-2*K+O+F
},calc:function(D){var C=D*D;
return n+m*D+z*C+w*C*D
}}
}function eI(m){this.arcLengthDivisions=200;
2>m.length&&console.warn("THREE.CatmullRomCurve3: Points array needs at least two entries.");
this.points=m||[];
this.closed=!1
}function d1(n,m,z,w){this.arcLengthDivisions=200;
this.v0=n;
this.v1=m;
this.v2=z;
this.v3=w
}function dO(n,m,w){this.arcLengthDivisions=200;
this.v0=n;
this.v1=m;
this.v2=w
}function dC(n,m){this.arcLengthDivisions=200;
this.v1=n;
this.v2=m
}function dU(n,m,D,C,z,w){ch.call(this,n,m,D,D,C,z,w)
}function dM(m){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");
eI.call(this,m);
this.type="catmullrom";
this.closed=!0
}function dA(m){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");
eI.call(this,m);
this.type="catmullrom"
}function ay(m){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");
eI.call(this,m);
this.type="catmullrom"
}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52));
void 0===Number.isInteger&&(Number.isInteger=function(m){return"number"===typeof m&&isFinite(m)&&Math.floor(m)===m
});
void 0===Math.sign&&(Math.sign=function(m){return 0>m?-1:0<m?1:+m
});
void 0===Function.prototype.name&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
}});
void 0===Object.assign&&function(){Object.assign=function(n){if(void 0===n||null===n){throw new TypeError("Cannot convert undefined or null to object")
}for(var m=Object(n),C=1;
C<arguments.length;
C++){var z=arguments[C];
if(void 0!==z&&null!==z){for(var w in z){Object.prototype.hasOwnProperty.call(z,w)&&(m[w]=z[w])
}}}return m
}
}();
Object.assign(b5.prototype,{addEventListener:function(n,m){void 0===this._listeners&&(this._listeners={});
var w=this._listeners;
void 0===w[n]&&(w[n]=[]);
-1===w[n].indexOf(m)&&w[n].push(m)
},hasEventListener:function(n,m){if(void 0===this._listeners){return !1
}var w=this._listeners;
return void 0!==w[n]&&-1!==w[n].indexOf(m)
},removeEventListener:function(n,m){void 0!==this._listeners&&(n=this._listeners[n],void 0!==n&&(m=n.indexOf(m),-1!==m&&n.splice(m,1)))
},dispatchEvent:function(n){if(void 0!==this._listeners){var m=this._listeners[n.type];
if(void 0!==m){n.target=this;
for(var m=m.slice(0),z=0,w=m.length;
z<w;
z++){m[z].call(this,n)
}}}}});
var eN={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),m=Array(36),z=0,w;
return function(){for(var C=0;
36>C;
C++){8===C||13===C||18===C||23===C?m[C]="-":14===C?m[C]="4":(2>=z&&(z=33554432+16777216*Math.random()|0),w=z&15,z>>=4,m[C]=n[19===C?w&3|8:w])
}return m.join("")
}
}(),clamp:function(n,m,w){return Math.max(m,Math.min(w,n))
},euclideanModulo:function(n,m){return(n%m+m)%m
},mapLinear:function(n,m,C,z,w){return z+(n-m)*(w-z)/(C-m)
},lerp:function(n,m,w){return(1-w)*n+w*m
},smoothstep:function(n,m,w){if(n<=m){return 0
}if(n>=w){return 1
}n=(n-m)/(w-m);
return n*n*(3-2*n)
},smootherstep:function(n,m,w){if(n<=m){return 0
}if(n>=w){return 1
}n=(n-m)/(w-m);
return n*n*n*(n*(6*n-15)+10)
},randInt:function(n,m){return n+Math.floor(Math.random()*(m-n+1))
},randFloat:function(n,m){return n+Math.random()*(m-n)
},randFloatSpread:function(m){return m*(0.5-Math.random())
},degToRad:function(m){return m*eN.DEG2RAD
},radToDeg:function(m){return m*eN.RAD2DEG
},isPowerOfTwo:function(m){return 0===(m&m-1)&&0!==m
},nearestPowerOfTwo:function(m){return Math.pow(2,Math.round(Math.log(m)/Math.LN2))
},nextPowerOfTwo:function(m){m--;
m|=m>>1;
m|=m>>2;
m|=m>>4;
m|=m>>8;
m|=m>>16;
m++;
return m
}};
Object.defineProperties(e0.prototype,{width:{get:function(){return this.x
},set:function(m){this.x=m
}},height:{get:function(){return this.y
},set:function(m){this.y=m
}}});
Object.assign(e0.prototype,{isVector2:!0,set:function(n,m){this.x=n;
this.y=m;
return this
},setScalar:function(m){this.y=this.x=m;
return this
},setX:function(m){this.x=m;
return this
},setY:function(m){this.y=m;
return this
},setComponent:function(n,m){switch(n){case 0:this.x=m;
break;
case 1:this.y=m;
break;
default:throw Error("index is out of range: "+n)
}return this
},getComponent:function(m){switch(m){case 0:return this.x;
case 1:return this.y;
default:throw Error("index is out of range: "+m)
}},clone:function(){return new this.constructor(this.x,this.y)
},copy:function(m){this.x=m.x;
this.y=m.y;
return this
},add:function(n,m){if(void 0!==m){return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(n,m)
}this.x+=n.x;
this.y+=n.y;
return this
},addScalar:function(m){this.x+=m;
this.y+=m;
return this
},addVectors:function(n,m){this.x=n.x+m.x;
this.y=n.y+m.y;
return this
},addScaledVector:function(n,m){this.x+=n.x*m;
this.y+=n.y*m;
return this
},sub:function(n,m){if(void 0!==m){return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(n,m)
}this.x-=n.x;
this.y-=n.y;
return this
},subScalar:function(m){this.x-=m;
this.y-=m;
return this
},subVectors:function(n,m){this.x=n.x-m.x;
this.y=n.y-m.y;
return this
},multiply:function(m){this.x*=m.x;
this.y*=m.y;
return this
},multiplyScalar:function(m){this.x*=m;
this.y*=m;
return this
},divide:function(m){this.x/=m.x;
this.y/=m.y;
return this
},divideScalar:function(m){return this.multiplyScalar(1/m)
},min:function(m){this.x=Math.min(this.x,m.x);
this.y=Math.min(this.y,m.y);
return this
},max:function(m){this.x=Math.max(this.x,m.x);
this.y=Math.max(this.y,m.y);
return this
},clamp:function(n,m){this.x=Math.max(n.x,Math.min(m.x,this.x));
this.y=Math.max(n.y,Math.min(m.y,this.y));
return this
},clampScalar:function(){var n=new e0,m=new e0;
return function(z,w){n.set(z,z);
m.set(w,w);
return this.clamp(n,m)
}
}(),clampLength:function(n,m){var w=this.length();
return this.divideScalar(w||1).multiplyScalar(Math.max(n,Math.min(m,w)))
},floor:function(){this.x=Math.floor(this.x);
this.y=Math.floor(this.y);
return this
},ceil:function(){this.x=Math.ceil(this.x);
this.y=Math.ceil(this.y);
return this
},round:function(){this.x=Math.round(this.x);
this.y=Math.round(this.y);
return this
},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);
this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);
return this
},negate:function(){this.x=-this.x;
this.y=-this.y;
return this
},dot:function(m){return this.x*m.x+this.y*m.y
},lengthSq:function(){return this.x*this.x+this.y*this.y
},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)
},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)
},normalize:function(){return this.divideScalar(this.length()||1)
},angle:function(){var m=Math.atan2(this.y,this.x);
0>m&&(m+=2*Math.PI);
return m
},distanceTo:function(m){return Math.sqrt(this.distanceToSquared(m))
},distanceToSquared:function(n){var m=this.x-n.x;
n=this.y-n.y;
return m*m+n*n
},distanceToManhattan:function(m){return Math.abs(this.x-m.x)+Math.abs(this.y-m.y)
},setLength:function(m){return this.normalize().multiplyScalar(m)
},lerp:function(n,m){this.x+=(n.x-this.x)*m;
this.y+=(n.y-this.y)*m;
return this
},lerpVectors:function(n,m,w){return this.subVectors(m,n).multiplyScalar(w).add(n)
},equals:function(m){return m.x===this.x&&m.y===this.y
},fromArray:function(n,m){void 0===m&&(m=0);
this.x=n[m];
this.y=n[m+1];
return this
},toArray:function(n,m){void 0===n&&(n=[]);
void 0===m&&(m=0);
n[m]=this.x;
n[m+1]=this.y;
return n
},fromBufferAttribute:function(n,m,w){void 0!==w&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");
this.x=n.getX(m);
this.y=n.getY(m);
return this
},rotateAround:function(n,m){var C=Math.cos(m);
m=Math.sin(m);
var z=this.x-n.x,w=this.y-n.y;
this.x=z*C-w*m+n.x;
this.y=z*m+w*C+n.y;
return this
}});
var cw=0;
eR.DEFAULT_IMAGE=void 0;
eR.DEFAULT_MAPPING=300;
Object.defineProperty(eR.prototype,"needsUpdate",{set:function(m){!0===m&&this.version++
}});
Object.assign(eR.prototype,b5.prototype,{constructor:eR,isTexture:!0,clone:function(){return(new this.constructor).copy(this)
},copy:function(m){this.name=m.name;
this.image=m.image;
this.mipmaps=m.mipmaps.slice(0);
this.mapping=m.mapping;
this.wrapS=m.wrapS;
this.wrapT=m.wrapT;
this.magFilter=m.magFilter;
this.minFilter=m.minFilter;
this.anisotropy=m.anisotropy;
this.format=m.format;
this.type=m.type;
this.offset.copy(m.offset);
this.repeat.copy(m.repeat);
this.generateMipmaps=m.generateMipmaps;
this.premultiplyAlpha=m.premultiplyAlpha;
this.flipY=m.flipY;
this.unpackAlignment=m.unpackAlignment;
this.encoding=m.encoding;
return this
},toJSON:function(n){if(void 0!==n.textures[this.uuid]){return n.textures[this.uuid]
}var m={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY};
if(void 0!==this.image){var K=this.image;
void 0===K.uuid&&(K.uuid=eN.generateUUID());
if(void 0===n.images[K.uuid]){var F=n.images,D=K.uuid,C=K.uuid;
if(K instanceof HTMLCanvasElement){var z=K
}else{z=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");
z.width=K.width;
z.height=K.height;
var w=z.getContext("2d");
K instanceof ImageData?w.putImageData(K,0,0):w.drawImage(K,0,0,K.width,K.height)
}z=2048<z.width||2048<z.height?z.toDataURL("image/jpeg",0.6):z.toDataURL("image/png");
F[D]={uuid:C,url:z}
}m.image=K.uuid
}return n.textures[this.uuid]=m
},dispose:function(){this.dispatchEvent({type:"dispose"})
},transformUv:function(m){if(300===this.mapping){m.multiply(this.repeat);
m.add(this.offset);
if(0>m.x||1<m.x){switch(this.wrapS){case 1000:m.x-=Math.floor(m.x);
break;
case 1001:m.x=0>m.x?0:1;
break;
case 1002:m.x=1===Math.abs(Math.floor(m.x)%2)?Math.ceil(m.x)-m.x:m.x-Math.floor(m.x)
}}if(0>m.y||1<m.y){switch(this.wrapT){case 1000:m.y-=Math.floor(m.y);
break;
case 1001:m.y=0>m.y?0:1;
break;
case 1002:m.y=1===Math.abs(Math.floor(m.y)%2)?Math.ceil(m.y)-m.y:m.y-Math.floor(m.y)
}}this.flipY&&(m.y=1-m.y)
}}});
Object.assign(eM.prototype,{isVector4:!0,set:function(n,m,z,w){this.x=n;
this.y=m;
this.z=z;
this.w=w;
return this
},setScalar:function(m){this.w=this.z=this.y=this.x=m;
return this
},setX:function(m){this.x=m;
return this
},setY:function(m){this.y=m;
return this
},setZ:function(m){this.z=m;
return this
},setW:function(m){this.w=m;
return this
},setComponent:function(n,m){switch(n){case 0:this.x=m;
break;
case 1:this.y=m;
break;
case 2:this.z=m;
break;
case 3:this.w=m;
break;
default:throw Error("index is out of range: "+n)
}return this
},getComponent:function(m){switch(m){case 0:return this.x;
case 1:return this.y;
case 2:return this.z;
case 3:return this.w;
default:throw Error("index is out of range: "+m)
}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)
},copy:function(m){this.x=m.x;
this.y=m.y;
this.z=m.z;
this.w=void 0!==m.w?m.w:1;
return this
},add:function(n,m){if(void 0!==m){return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(n,m)
}this.x+=n.x;
this.y+=n.y;
this.z+=n.z;
this.w+=n.w;
return this
},addScalar:function(m){this.x+=m;
this.y+=m;
this.z+=m;
this.w+=m;
return this
},addVectors:function(n,m){this.x=n.x+m.x;
this.y=n.y+m.y;
this.z=n.z+m.z;
this.w=n.w+m.w;
return this
},addScaledVector:function(n,m){this.x+=n.x*m;
this.y+=n.y*m;
this.z+=n.z*m;
this.w+=n.w*m;
return this
},sub:function(n,m){if(void 0!==m){return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(n,m)
}this.x-=n.x;
this.y-=n.y;
this.z-=n.z;
this.w-=n.w;
return this
},subScalar:function(m){this.x-=m;
this.y-=m;
this.z-=m;
this.w-=m;
return this
},subVectors:function(n,m){this.x=n.x-m.x;
this.y=n.y-m.y;
this.z=n.z-m.z;
this.w=n.w-m.w;
return this
},multiplyScalar:function(m){this.x*=m;
this.y*=m;
this.z*=m;
this.w*=m;
return this
},applyMatrix4:function(n){var m=this.x,C=this.y,z=this.z,w=this.w;
n=n.elements;
this.x=n[0]*m+n[4]*C+n[8]*z+n[12]*w;
this.y=n[1]*m+n[5]*C+n[9]*z+n[13]*w;
this.z=n[2]*m+n[6]*C+n[10]*z+n[14]*w;
this.w=n[3]*m+n[7]*C+n[11]*z+n[15]*w;
return this
},divideScalar:function(m){return this.multiplyScalar(1/m)
},setAxisAngleFromQuaternion:function(n){this.w=2*Math.acos(n.w);
var m=Math.sqrt(1-n.w*n.w);
0.0001>m?(this.x=1,this.z=this.y=0):(this.x=n.x/m,this.y=n.y/m,this.z=n.z/m);
return this
},setAxisAngleFromRotationMatrix:function(N){N=N.elements;
var L=N[0];
var K=N[4];
var F=N[8],D=N[1],C=N[5],z=N[9];
var w=N[2];
var n=N[6];
var m=N[10];
if(0.01>Math.abs(K-D)&&0.01>Math.abs(F-w)&&0.01>Math.abs(z-n)){if(0.1>Math.abs(K+D)&&0.1>Math.abs(F+w)&&0.1>Math.abs(z+n)&&0.1>Math.abs(L+C+m-3)){return this.set(1,0,0,0),this
}N=Math.PI;
L=(L+1)/2;
C=(C+1)/2;
m=(m+1)/2;
K=(K+D)/4;
F=(F+w)/4;
z=(z+n)/4;
L>C&&L>m?0.01>L?(n=0,K=w=0.707106781):(n=Math.sqrt(L),w=K/n,K=F/n):C>m?0.01>C?(n=0.707106781,w=0,K=0.707106781):(w=Math.sqrt(C),n=K/w,K=z/w):0.01>m?(w=n=0.707106781,K=0):(K=Math.sqrt(m),n=F/K,w=z/K);
this.set(n,w,K,N);
return this
}N=Math.sqrt((n-z)*(n-z)+(F-w)*(F-w)+(D-K)*(D-K));
0.001>Math.abs(N)&&(N=1);
this.x=(n-z)/N;
this.y=(F-w)/N;
this.z=(D-K)/N;
this.w=Math.acos((L+C+m-1)/2);
return this
},min:function(m){this.x=Math.min(this.x,m.x);
this.y=Math.min(this.y,m.y);
this.z=Math.min(this.z,m.z);
this.w=Math.min(this.w,m.w);
return this
},max:function(m){this.x=Math.max(this.x,m.x);
this.y=Math.max(this.y,m.y);
this.z=Math.max(this.z,m.z);
this.w=Math.max(this.w,m.w);
return this
},clamp:function(n,m){this.x=Math.max(n.x,Math.min(m.x,this.x));
this.y=Math.max(n.y,Math.min(m.y,this.y));
this.z=Math.max(n.z,Math.min(m.z,this.z));
this.w=Math.max(n.w,Math.min(m.w,this.w));
return this
},clampScalar:function(){var n,m;
return function(z,w){void 0===n&&(n=new eM,m=new eM);
n.set(z,z,z,z);
m.set(w,w,w,w);
return this.clamp(n,m)
}
}(),clampLength:function(n,m){var w=this.length();
return this.divideScalar(w||1).multiplyScalar(Math.max(n,Math.min(m,w)))
},floor:function(){this.x=Math.floor(this.x);
this.y=Math.floor(this.y);
this.z=Math.floor(this.z);
this.w=Math.floor(this.w);
return this
},ceil:function(){this.x=Math.ceil(this.x);
this.y=Math.ceil(this.y);
this.z=Math.ceil(this.z);
this.w=Math.ceil(this.w);
return this
},round:function(){this.x=Math.round(this.x);
this.y=Math.round(this.y);
this.z=Math.round(this.z);
this.w=Math.round(this.w);
return this
},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);
this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);
this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);
this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);
return this
},negate:function(){this.x=-this.x;
this.y=-this.y;
this.z=-this.z;
this.w=-this.w;
return this
},dot:function(m){return this.x*m.x+this.y*m.y+this.z*m.z+this.w*m.w
},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w
},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)
},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)
},normalize:function(){return this.divideScalar(this.length()||1)
},setLength:function(m){return this.normalize().multiplyScalar(m)
},lerp:function(n,m){this.x+=(n.x-this.x)*m;
this.y+=(n.y-this.y)*m;
this.z+=(n.z-this.z)*m;
this.w+=(n.w-this.w)*m;
return this
},lerpVectors:function(n,m,w){return this.subVectors(m,n).multiplyScalar(w).add(n)
},equals:function(m){return m.x===this.x&&m.y===this.y&&m.z===this.z&&m.w===this.w
},fromArray:function(n,m){void 0===m&&(m=0);
this.x=n[m];
this.y=n[m+1];
this.z=n[m+2];
this.w=n[m+3];
return this
},toArray:function(n,m){void 0===n&&(n=[]);
void 0===m&&(m=0);
n[m]=this.x;
n[m+1]=this.y;
n[m+2]=this.z;
n[m+3]=this.w;
return n
},fromBufferAttribute:function(n,m,w){void 0!==w&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");
this.x=n.getX(m);
this.y=n.getY(m);
this.z=n.getZ(m);
this.w=n.getW(m);
return this
}});
Object.assign(aZ.prototype,b5.prototype,{isWebGLRenderTarget:!0,setSize:function(n,m){if(this.width!==n||this.height!==m){this.width=n,this.height=m,this.dispose()
}this.viewport.set(0,0,n,m);
this.scissor.set(0,0,n,m)
},clone:function(){return(new this.constructor).copy(this)
},copy:function(m){this.width=m.width;
this.height=m.height;
this.viewport.copy(m.viewport);
this.texture=m.texture.clone();
this.depthBuffer=m.depthBuffer;
this.stencilBuffer=m.stencilBuffer;
this.depthTexture=m.depthTexture;
return this
},dispose:function(){this.dispatchEvent({type:"dispose"})
}});
aG.prototype=Object.create(aZ.prototype);
aG.prototype.constructor=aG;
aG.prototype.isWebGLRenderTargetCube=!0;
Object.assign(c8,{slerp:function(n,m,z,w){return z.copy(n).slerp(m,w)
},slerpFlat:function(W,V,S,R,Q,P,O){var N=S[R+0],L=S[R+1],K=S[R+2];
S=S[R+3];
R=Q[P+0];
var z=Q[P+1],C=Q[P+2];
Q=Q[P+3];
if(S!==Q||N!==R||L!==z||K!==C){P=1-O;
var F=N*R+L*z+K*C+S*Q,w=0<=F?1:-1,D=1-F*F;
D>Number.EPSILON&&(D=Math.sqrt(D),F=Math.atan2(D,F*w),P=Math.sin(P*F)/D,O=Math.sin(O*F)/D);
w*=O;
N=N*P+R*w;
L=L*P+z*w;
K=K*P+C*w;
S=S*P+Q*w;
P===1-O&&(O=1/Math.sqrt(N*N+L*L+K*K+S*S),N*=O,L*=O,K*=O,S*=O)
}W[V]=N;
W[V+1]=L;
W[V+2]=K;
W[V+3]=S
}});
Object.defineProperties(c8.prototype,{x:{get:function(){return this._x
},set:function(m){this._x=m;
this.onChangeCallback()
}},y:{get:function(){return this._y
},set:function(m){this._y=m;
this.onChangeCallback()
}},z:{get:function(){return this._z
},set:function(m){this._z=m;
this.onChangeCallback()
}},w:{get:function(){return this._w
},set:function(m){this._w=m;
this.onChangeCallback()
}}});
Object.assign(c8.prototype,{set:function(n,m,z,w){this._x=n;
this._y=m;
this._z=z;
this._w=w;
this.onChangeCallback();
return this
},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)
},copy:function(m){this._x=m.x;
this._y=m.y;
this._z=m.z;
this._w=m.w;
this.onChangeCallback();
return this
},setFromEuler:function(L,K){if(!L||!L.isEuler){throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.")
}var F=L._x,D=L._y,C=L._z;
L=L.order;
var z=Math.cos,w=Math.sin,n=z(F/2),m=z(D/2),z=z(C/2),F=w(F/2),D=w(D/2),C=w(C/2);
"XYZ"===L?(this._x=F*m*z+n*D*C,this._y=n*D*z-F*m*C,this._z=n*m*C+F*D*z,this._w=n*m*z-F*D*C):"YXZ"===L?(this._x=F*m*z+n*D*C,this._y=n*D*z-F*m*C,this._z=n*m*C-F*D*z,this._w=n*m*z+F*D*C):"ZXY"===L?(this._x=F*m*z-n*D*C,this._y=n*D*z+F*m*C,this._z=n*m*C+F*D*z,this._w=n*m*z-F*D*C):"ZYX"===L?(this._x=F*m*z-n*D*C,this._y=n*D*z+F*m*C,this._z=n*m*C-F*D*z,this._w=n*m*z+F*D*C):"YZX"===L?(this._x=F*m*z+n*D*C,this._y=n*D*z+F*m*C,this._z=n*m*C-F*D*z,this._w=n*m*z-F*D*C):"XZY"===L&&(this._x=F*m*z-n*D*C,this._y=n*D*z-F*m*C,this._z=n*m*C+F*D*z,this._w=n*m*z+F*D*C);
if(!1!==K){this.onChangeCallback()
}return this
},setFromAxisAngle:function(n,m){m/=2;
var w=Math.sin(m);
this._x=n.x*w;
this._y=n.y*w;
this._z=n.z*w;
this._w=Math.cos(m);
this.onChangeCallback();
return this
},setFromRotationMatrix:function(N){var L=N.elements,K=L[0];
N=L[4];
var F=L[8],D=L[1],C=L[5],z=L[9],w=L[2],n=L[6],L=L[10],m=K+C+L;
0<m?(K=0.5/Math.sqrt(m+1),this._w=0.25/K,this._x=(n-z)*K,this._y=(F-w)*K,this._z=(D-N)*K):K>C&&K>L?(K=2*Math.sqrt(1+K-C-L),this._w=(n-z)/K,this._x=0.25*K,this._y=(N+D)/K,this._z=(F+w)/K):C>L?(K=2*Math.sqrt(1+C-K-L),this._w=(F-w)/K,this._x=(N+D)/K,this._y=0.25*K,this._z=(z+n)/K):(K=2*Math.sqrt(1+L-K-C),this._w=(D-N)/K,this._x=(F+w)/K,this._y=(z+n)/K,this._z=0.25*K);
this.onChangeCallback();
return this
},setFromUnitVectors:function(){var n=new ew,m;
return function(z,w){void 0===n&&(n=new ew);
m=z.dot(w)+1;
0.000001>m?(m=0,Math.abs(z.x)>Math.abs(z.z)?n.set(-z.y,z.x,0):n.set(0,-z.z,z.y)):n.crossVectors(z,w);
this._x=n.x;
this._y=n.y;
this._z=n.z;
this._w=m;
return this.normalize()
}
}(),inverse:function(){return this.conjugate().normalize()
},conjugate:function(){this._x*=-1;
this._y*=-1;
this._z*=-1;
this.onChangeCallback();
return this
},dot:function(m){return this._x*m._x+this._y*m._y+this._z*m._z+this._w*m._w
},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w
},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)
},normalize:function(){var m=this.length();
0===m?(this._z=this._y=this._x=0,this._w=1):(m=1/m,this._x*=m,this._y*=m,this._z*=m,this._w*=m);
this.onChangeCallback();
return this
},multiply:function(n,m){return void 0!==m?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(n,m)):this.multiplyQuaternions(this,n)
},premultiply:function(m){return this.multiplyQuaternions(m,this)
},multiplyQuaternions:function(n,m){var K=n._x,F=n._y,D=n._z;
n=n._w;
var C=m._x,z=m._y,w=m._z;
m=m._w;
this._x=K*m+n*C+F*w-D*z;
this._y=F*m+n*z+D*C-K*w;
this._z=D*m+n*w+K*z-F*C;
this._w=n*m-K*C-F*z-D*w;
this.onChangeCallback();
return this
},slerp:function(n,m){if(0===m){return this
}if(1===m){return this.copy(n)
}var K=this._x,F=this._y,D=this._z,C=this._w,z=C*n._w+K*n._x+F*n._y+D*n._z;
0>z?(this._w=-n._w,this._x=-n._x,this._y=-n._y,this._z=-n._z,z=-z):this.copy(n);
if(1<=z){return this._w=C,this._x=K,this._y=F,this._z=D,this
}n=Math.sqrt(1-z*z);
if(0.001>Math.abs(n)){return this._w=0.5*(C+this._w),this._x=0.5*(K+this._x),this._y=0.5*(F+this._y),this._z=0.5*(D+this._z),this
}var w=Math.atan2(n,z),z=Math.sin((1-m)*w)/n;
m=Math.sin(m*w)/n;
this._w=C*z+this._w*m;
this._x=K*z+this._x*m;
this._y=F*z+this._y*m;
this._z=D*z+this._z*m;
this.onChangeCallback();
return this
},equals:function(m){return m._x===this._x&&m._y===this._y&&m._z===this._z&&m._w===this._w
},fromArray:function(n,m){void 0===m&&(m=0);
this._x=n[m];
this._y=n[m+1];
this._z=n[m+2];
this._w=n[m+3];
this.onChangeCallback();
return this
},toArray:function(n,m){void 0===n&&(n=[]);
void 0===m&&(m=0);
n[m]=this._x;
n[m+1]=this._y;
n[m+2]=this._z;
n[m+3]=this._w;
return n
},onChange:function(m){this.onChangeCallback=m;
return this
},onChangeCallback:function(){}});
Object.assign(ew.prototype,{isVector3:!0,set:function(n,m,w){this.x=n;
this.y=m;
this.z=w;
return this
},setScalar:function(m){this.z=this.y=this.x=m;
return this
},setX:function(m){this.x=m;
return this
},setY:function(m){this.y=m;
return this
},setZ:function(m){this.z=m;
return this
},setComponent:function(n,m){switch(n){case 0:this.x=m;
break;
case 1:this.y=m;
break;
case 2:this.z=m;
break;
default:throw Error("index is out of range: "+n)
}return this
},getComponent:function(m){switch(m){case 0:return this.x;
case 1:return this.y;
case 2:return this.z;
default:throw Error("index is out of range: "+m)
}},clone:function(){return new this.constructor(this.x,this.y,this.z)
},copy:function(m){this.x=m.x;
this.y=m.y;
this.z=m.z;
return this
},add:function(n,m){if(void 0!==m){return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(n,m)
}this.x+=n.x;
this.y+=n.y;
this.z+=n.z;
return this
},addScalar:function(m){this.x+=m;
this.y+=m;
this.z+=m;
return this
},addVectors:function(n,m){this.x=n.x+m.x;
this.y=n.y+m.y;
this.z=n.z+m.z;
return this
},addScaledVector:function(n,m){this.x+=n.x*m;
this.y+=n.y*m;
this.z+=n.z*m;
return this
},sub:function(n,m){if(void 0!==m){return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(n,m)
}this.x-=n.x;
this.y-=n.y;
this.z-=n.z;
return this
},subScalar:function(m){this.x-=m;
this.y-=m;
this.z-=m;
return this
},subVectors:function(n,m){this.x=n.x-m.x;
this.y=n.y-m.y;
this.z=n.z-m.z;
return this
},multiply:function(n,m){if(void 0!==m){return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(n,m)
}this.x*=n.x;
this.y*=n.y;
this.z*=n.z;
return this
},multiplyScalar:function(m){this.x*=m;
this.y*=m;
this.z*=m;
return this
},multiplyVectors:function(n,m){this.x=n.x*m.x;
this.y=n.y*m.y;
this.z=n.z*m.z;
return this
},applyEuler:function(){var m=new c8;
return function(n){n&&n.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");
return this.applyQuaternion(m.setFromEuler(n))
}
}(),applyAxisAngle:function(){var m=new c8;
return function(n,w){return this.applyQuaternion(m.setFromAxisAngle(n,w))
}
}(),applyMatrix3:function(n){var m=this.x,z=this.y,w=this.z;
n=n.elements;
this.x=n[0]*m+n[3]*z+n[6]*w;
this.y=n[1]*m+n[4]*z+n[7]*w;
this.z=n[2]*m+n[5]*z+n[8]*w;
return this
},applyMatrix4:function(n){var m=this.x,C=this.y,z=this.z;
n=n.elements;
var w=1/(n[3]*m+n[7]*C+n[11]*z+n[15]);
this.x=(n[0]*m+n[4]*C+n[8]*z+n[12])*w;
this.y=(n[1]*m+n[5]*C+n[9]*z+n[13])*w;
this.z=(n[2]*m+n[6]*C+n[10]*z+n[14])*w;
return this
},applyQuaternion:function(N){var L=this.x,K=this.y,F=this.z,D=N.x,C=N.y,z=N.z;
N=N.w;
var w=N*L+C*F-z*K,n=N*K+z*L-D*F,m=N*F+D*K-C*L,L=-D*L-C*K-z*F;
this.x=w*N+L*-D+n*-z-m*-C;
this.y=n*N+L*-C+m*-D-w*-z;
this.z=m*N+L*-z+w*-C-n*-D;
return this
},project:function(){var m=new eQ;
return function(n){m.multiplyMatrices(n.projectionMatrix,m.getInverse(n.matrixWorld));
return this.applyMatrix4(m)
}
}(),unproject:function(){var m=new eQ;
return function(n){m.multiplyMatrices(n.matrixWorld,m.getInverse(n.projectionMatrix));
return this.applyMatrix4(m)
}
}(),transformDirection:function(n){var m=this.x,z=this.y,w=this.z;
n=n.elements;
this.x=n[0]*m+n[4]*z+n[8]*w;
this.y=n[1]*m+n[5]*z+n[9]*w;
this.z=n[2]*m+n[6]*z+n[10]*w;
return this.normalize()
},divide:function(m){this.x/=m.x;
this.y/=m.y;
this.z/=m.z;
return this
},divideScalar:function(m){return this.multiplyScalar(1/m)
},min:function(m){this.x=Math.min(this.x,m.x);
this.y=Math.min(this.y,m.y);
this.z=Math.min(this.z,m.z);
return this
},max:function(m){this.x=Math.max(this.x,m.x);
this.y=Math.max(this.y,m.y);
this.z=Math.max(this.z,m.z);
return this
},clamp:function(n,m){this.x=Math.max(n.x,Math.min(m.x,this.x));
this.y=Math.max(n.y,Math.min(m.y,this.y));
this.z=Math.max(n.z,Math.min(m.z,this.z));
return this
},clampScalar:function(){var n=new ew,m=new ew;
return function(z,w){n.set(z,z,z);
m.set(w,w,w);
return this.clamp(n,m)
}
}(),clampLength:function(n,m){var w=this.length();
return this.divideScalar(w||1).multiplyScalar(Math.max(n,Math.min(m,w)))
},floor:function(){this.x=Math.floor(this.x);
this.y=Math.floor(this.y);
this.z=Math.floor(this.z);
return this
},ceil:function(){this.x=Math.ceil(this.x);
this.y=Math.ceil(this.y);
this.z=Math.ceil(this.z);
return this
},round:function(){this.x=Math.round(this.x);
this.y=Math.round(this.y);
this.z=Math.round(this.z);
return this
},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);
this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);
this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);
return this
},negate:function(){this.x=-this.x;
this.y=-this.y;
this.z=-this.z;
return this
},dot:function(m){return this.x*m.x+this.y*m.y+this.z*m.z
},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z
},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)
},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)
},normalize:function(){return this.divideScalar(this.length()||1)
},setLength:function(m){return this.normalize().multiplyScalar(m)
},lerp:function(n,m){this.x+=(n.x-this.x)*m;
this.y+=(n.y-this.y)*m;
this.z+=(n.z-this.z)*m;
return this
},lerpVectors:function(n,m,w){return this.subVectors(m,n).multiplyScalar(w).add(n)
},cross:function(n,m){if(void 0!==m){return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(n,m)
}m=this.x;
var z=this.y,w=this.z;
this.x=z*n.z-w*n.y;
this.y=w*n.x-m*n.z;
this.z=m*n.y-z*n.x;
return this
},crossVectors:function(n,m){var D=n.x,C=n.y;
n=n.z;
var z=m.x,w=m.y;
m=m.z;
this.x=C*m-n*w;
this.y=n*z-D*m;
this.z=D*w-C*z;
return this
},projectOnVector:function(n){var m=n.dot(this)/n.lengthSq();
return this.copy(n).multiplyScalar(m)
},projectOnPlane:function(){var m=new ew;
return function(n){m.copy(this).projectOnVector(n);
return this.sub(m)
}
}(),reflect:function(){var m=new ew;
return function(n){return this.sub(m.copy(n).multiplyScalar(2*this.dot(n)))
}
}(),angleTo:function(m){m=this.dot(m)/Math.sqrt(this.lengthSq()*m.lengthSq());
return Math.acos(eN.clamp(m,-1,1))
},distanceTo:function(m){return Math.sqrt(this.distanceToSquared(m))
},distanceToSquared:function(n){var m=this.x-n.x,w=this.y-n.y;
n=this.z-n.z;
return m*m+w*w+n*n
},distanceToManhattan:function(m){return Math.abs(this.x-m.x)+Math.abs(this.y-m.y)+Math.abs(this.z-m.z)
},setFromSpherical:function(n){var m=Math.sin(n.phi)*n.radius;
this.x=m*Math.sin(n.theta);
this.y=Math.cos(n.phi)*n.radius;
this.z=m*Math.cos(n.theta);
return this
},setFromCylindrical:function(m){this.x=m.radius*Math.sin(m.theta);
this.y=m.y;
this.z=m.radius*Math.cos(m.theta);
return this
},setFromMatrixPosition:function(m){m=m.elements;
this.x=m[12];
this.y=m[13];
this.z=m[14];
return this
},setFromMatrixScale:function(n){var m=this.setFromMatrixColumn(n,0).length(),w=this.setFromMatrixColumn(n,1).length();
n=this.setFromMatrixColumn(n,2).length();
this.x=m;
this.y=w;
this.z=n;
return this
},setFromMatrixColumn:function(n,m){return this.fromArray(n.elements,4*m)
},equals:function(m){return m.x===this.x&&m.y===this.y&&m.z===this.z
},fromArray:function(n,m){void 0===m&&(m=0);
this.x=n[m];
this.y=n[m+1];
this.z=n[m+2];
return this
},toArray:function(n,m){void 0===n&&(n=[]);
void 0===m&&(m=0);
n[m]=this.x;
n[m+1]=this.y;
n[m+2]=this.z;
return n
},fromBufferAttribute:function(n,m,w){void 0!==w&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");
this.x=n.getX(m);
this.y=n.getY(m);
this.z=n.getZ(m);
return this
}});
Object.assign(eQ.prototype,{isMatrix4:!0,set:function(W,V,S,R,Q,P,O,N,L,K,z,C,F,w,D,X){var aa=this.elements;
aa[0]=W;
aa[4]=V;
aa[8]=S;
aa[12]=R;
aa[1]=Q;
aa[5]=P;
aa[9]=O;
aa[13]=N;
aa[2]=L;
aa[6]=K;
aa[10]=z;
aa[14]=C;
aa[3]=F;
aa[7]=w;
aa[11]=D;
aa[15]=X;
return this
},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
return this
},clone:function(){return(new eQ).fromArray(this.elements)
},copy:function(n){var m=this.elements;
n=n.elements;
m[0]=n[0];
m[1]=n[1];
m[2]=n[2];
m[3]=n[3];
m[4]=n[4];
m[5]=n[5];
m[6]=n[6];
m[7]=n[7];
m[8]=n[8];
m[9]=n[9];
m[10]=n[10];
m[11]=n[11];
m[12]=n[12];
m[13]=n[13];
m[14]=n[14];
m[15]=n[15];
return this
},copyPosition:function(n){var m=this.elements;
n=n.elements;
m[12]=n[12];
m[13]=n[13];
m[14]=n[14];
return this
},extractBasis:function(n,m,w){n.setFromMatrixColumn(this,0);
m.setFromMatrixColumn(this,1);
w.setFromMatrixColumn(this,2);
return this
},makeBasis:function(n,m,w){this.set(n.x,m.x,w.x,0,n.y,m.y,w.y,0,n.z,m.z,w.z,0,0,0,0,1);
return this
},extractRotation:function(){var m=new ew;
return function(n){var D=this.elements,C=n.elements,z=1/m.setFromMatrixColumn(n,0).length(),w=1/m.setFromMatrixColumn(n,1).length();
n=1/m.setFromMatrixColumn(n,2).length();
D[0]=C[0]*z;
D[1]=C[1]*z;
D[2]=C[2]*z;
D[4]=C[4]*w;
D[5]=C[5]*w;
D[6]=C[6]*w;
D[8]=C[8]*n;
D[9]=C[9]*n;
D[10]=C[10]*n;
return this
}
}(),makeRotationFromEuler:function(O){O&&O.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
var N=this.elements,L=O.x,K=O.y,F=O.z,D=Math.cos(L),L=Math.sin(L),C=Math.cos(K),K=Math.sin(K),z=Math.cos(F),F=Math.sin(F);
if("XYZ"===O.order){var w=D*z;
var n=D*F;
var m=L*z;
O=L*F;
N[0]=C*z;
N[4]=-C*F;
N[8]=K;
N[1]=n+m*K;
N[5]=w-O*K;
N[9]=-L*C;
N[2]=O-w*K;
N[6]=m+n*K;
N[10]=D*C
}else{"YXZ"===O.order?(w=C*z,n=C*F,m=K*z,O=K*F,N[0]=w+O*L,N[4]=m*L-n,N[8]=D*K,N[1]=D*F,N[5]=D*z,N[9]=-L,N[2]=n*L-m,N[6]=O+w*L,N[10]=D*C):"ZXY"===O.order?(w=C*z,n=C*F,m=K*z,O=K*F,N[0]=w-O*L,N[4]=-D*F,N[8]=m+n*L,N[1]=n+m*L,N[5]=D*z,N[9]=O-w*L,N[2]=-D*K,N[6]=L,N[10]=D*C):"ZYX"===O.order?(w=D*z,n=D*F,m=L*z,O=L*F,N[0]=C*z,N[4]=m*K-n,N[8]=w*K+O,N[1]=C*F,N[5]=O*K+w,N[9]=n*K-m,N[2]=-K,N[6]=L*C,N[10]=D*C):"YZX"===O.order?(w=D*C,n=D*K,m=L*C,O=L*K,N[0]=C*z,N[4]=O-w*F,N[8]=m*F+n,N[1]=F,N[5]=D*z,N[9]=-L*z,N[2]=-K*z,N[6]=n*F+m,N[10]=w-O*F):"XZY"===O.order&&(w=D*C,n=D*K,m=L*C,O=L*K,N[0]=C*z,N[4]=-F,N[8]=K*z,N[1]=w*F+O,N[5]=D*z,N[9]=n*F-m,N[2]=m*F-n,N[6]=L*z,N[10]=O*F+w)
}N[3]=0;
N[7]=0;
N[11]=0;
N[12]=0;
N[13]=0;
N[14]=0;
N[15]=1;
return this
},makeRotationFromQuaternion:function(O){var N=this.elements,L=O._x,K=O._y,F=O._z,D=O._w,C=L+L,z=K+K,w=F+F;
O=L*C;
var n=L*z,L=L*w,m=K*z,K=K*w,F=F*w,C=D*C,z=D*z,D=D*w;
N[0]=1-(m+F);
N[4]=n-D;
N[8]=L+z;
N[1]=n+D;
N[5]=1-(O+F);
N[9]=K-C;
N[2]=L-z;
N[6]=K+C;
N[10]=1-(O+m);
N[3]=0;
N[7]=0;
N[11]=0;
N[12]=0;
N[13]=0;
N[14]=0;
N[15]=1;
return this
},lookAt:function(){var n=new ew,m=new ew,w=new ew;
return function(F,D,C){var z=this.elements;
w.subVectors(F,D);
0===w.lengthSq()&&(w.z=1);
w.normalize();
n.crossVectors(C,w);
0===n.lengthSq()&&(1===Math.abs(C.z)?w.x+=0.0001:w.z+=0.0001,w.normalize(),n.crossVectors(C,w));
n.normalize();
m.crossVectors(w,n);
z[0]=n.x;
z[4]=m.x;
z[8]=w.x;
z[1]=n.y;
z[5]=m.y;
z[9]=w.y;
z[2]=n.z;
z[6]=m.z;
z[10]=w.z;
return this
}
}(),multiply:function(n,m){return void 0!==m?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(n,m)):this.multiplyMatrices(this,n)
},premultiply:function(m){return this.multiplyMatrices(m,this)
},multiplyMatrices:function(dd,dc){var db=dd.elements,da=dc.elements;
dc=this.elements;
dd=db[0];
var cg=db[4],cf=db[8],ce=db[12],cd=db[1],cc=db[5],cb=db[9],bc=db[13],be=db[2],bg=db[6],ag=db[10],bf=db[14],ad=db[3],X=db[7],V=db[11],db=db[15],bd=da[0],W=da[4],bb=da[8],ab=da[12],aa=da[1],R=da[5],ae=da[9],af=da[13],ac=da[2],P=da[6],S=da[10],Q=da[14],de=da[3],O=da[7],N=da[11],da=da[15];
dc[0]=dd*bd+cg*aa+cf*ac+ce*de;
dc[4]=dd*W+cg*R+cf*P+ce*O;
dc[8]=dd*bb+cg*ae+cf*S+ce*N;
dc[12]=dd*ab+cg*af+cf*Q+ce*da;
dc[1]=cd*bd+cc*aa+cb*ac+bc*de;
dc[5]=cd*W+cc*R+cb*P+bc*O;
dc[9]=cd*bb+cc*ae+cb*S+bc*N;
dc[13]=cd*ab+cc*af+cb*Q+bc*da;
dc[2]=be*bd+bg*aa+ag*ac+bf*de;
dc[6]=be*W+bg*R+ag*P+bf*O;
dc[10]=be*bb+bg*ae+ag*S+bf*N;
dc[14]=be*ab+bg*af+ag*Q+bf*da;
dc[3]=ad*bd+X*aa+V*ac+db*de;
dc[7]=ad*W+X*R+V*P+db*O;
dc[11]=ad*bb+X*ae+V*S+db*N;
dc[15]=ad*ab+X*af+V*Q+db*da;
return this
},multiplyScalar:function(n){var m=this.elements;
m[0]*=n;
m[4]*=n;
m[8]*=n;
m[12]*=n;
m[1]*=n;
m[5]*=n;
m[9]*=n;
m[13]*=n;
m[2]*=n;
m[6]*=n;
m[10]*=n;
m[14]*=n;
m[3]*=n;
m[7]*=n;
m[11]*=n;
m[15]*=n;
return this
},applyToBufferAttribute:function(){var m=new ew;
return function(n){for(var z=0,w=n.count;
z<w;
z++){m.x=n.getX(z),m.y=n.getY(z),m.z=n.getZ(z),m.applyMatrix4(this),n.setXYZ(z,m.x,m.y,m.z)
}return n
}
}(),determinant:function(){var R=this.elements,Q=R[0],P=R[4],O=R[8],N=R[12],L=R[1],K=R[5],F=R[9],D=R[13],C=R[2],n=R[6],w=R[10],z=R[14];
return R[3]*(+N*F*n-O*D*n-N*K*w+P*D*w+O*K*z-P*F*z)+R[7]*(+Q*F*z-Q*D*w+N*L*w-O*L*z+O*D*C-N*F*C)+R[11]*(+Q*D*n-Q*K*z-N*L*n+P*L*z+N*K*C-P*D*C)+R[15]*(-O*K*C-Q*F*n+Q*K*w+O*L*n-P*L*w+P*F*C)
},transpose:function(){var n=this.elements;
var m=n[1];
n[1]=n[4];
n[4]=m;
m=n[2];
n[2]=n[8];
n[8]=m;
m=n[6];
n[6]=n[9];
n[9]=m;
m=n[3];
n[3]=n[12];
n[12]=m;
m=n[7];
n[7]=n[13];
n[13]=m;
m=n[11];
n[11]=n[14];
n[14]=m;
return this
},setPosition:function(n){var m=this.elements;
m[12]=n.x;
m[13]=n.y;
m[14]=n.z;
return this
},getInverse:function(bb,ag){var af=this.elements,ae=bb.elements;
bb=ae[0];
var ad=ae[1],ac=ae[2],ab=ae[3],aa=ae[4],X=ae[5],W=ae[6],P=ae[7],R=ae[8],V=ae[9],N=ae[10],S=ae[11],L=ae[12],D=ae[13],z=ae[14],ae=ae[15],Q=V*z*P-D*N*P+D*W*S-X*z*S-V*W*ae+X*N*ae,C=L*N*P-R*z*P-L*W*S+aa*z*S+R*W*ae-aa*N*ae,O=R*D*P-L*V*P+L*X*S-aa*D*S-R*X*ae+aa*V*ae,K=L*V*W-R*D*W-L*X*N+aa*D*N+R*X*z-aa*V*z,F=bb*Q+ad*C+ac*O+ab*K;
if(0===F){if(!0===ag){throw Error("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0")
}console.warn("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");
return this.identity()
}ag=1/F;
af[0]=Q*ag;
af[1]=(D*N*ab-V*z*ab-D*ac*S+ad*z*S+V*ac*ae-ad*N*ae)*ag;
af[2]=(X*z*ab-D*W*ab+D*ac*P-ad*z*P-X*ac*ae+ad*W*ae)*ag;
af[3]=(V*W*ab-X*N*ab-V*ac*P+ad*N*P+X*ac*S-ad*W*S)*ag;
af[4]=C*ag;
af[5]=(R*z*ab-L*N*ab+L*ac*S-bb*z*S-R*ac*ae+bb*N*ae)*ag;
af[6]=(L*W*ab-aa*z*ab-L*ac*P+bb*z*P+aa*ac*ae-bb*W*ae)*ag;
af[7]=(aa*N*ab-R*W*ab+R*ac*P-bb*N*P-aa*ac*S+bb*W*S)*ag;
af[8]=O*ag;
af[9]=(L*V*ab-R*D*ab-L*ad*S+bb*D*S+R*ad*ae-bb*V*ae)*ag;
af[10]=(aa*D*ab-L*X*ab+L*ad*P-bb*D*P-aa*ad*ae+bb*X*ae)*ag;
af[11]=(R*X*ab-aa*V*ab-R*ad*P+bb*V*P+aa*ad*S-bb*X*S)*ag;
af[12]=K*ag;
af[13]=(R*D*ac-L*V*ac+L*ad*N-bb*D*N-R*ad*z+bb*V*z)*ag;
af[14]=(L*X*ac-aa*D*ac-L*ad*W+bb*D*W+aa*ad*z-bb*X*z)*ag;
af[15]=(aa*V*ac-R*X*ac+R*ad*W-bb*V*W-aa*ad*N+bb*X*N)*ag;
return this
},scale:function(n){var m=this.elements,z=n.x,w=n.y;
n=n.z;
m[0]*=z;
m[4]*=w;
m[8]*=n;
m[1]*=z;
m[5]*=w;
m[9]*=n;
m[2]*=z;
m[6]*=w;
m[10]*=n;
m[3]*=z;
m[7]*=w;
m[11]*=n;
return this
},getMaxScaleOnAxis:function(){var m=this.elements;
return Math.sqrt(Math.max(m[0]*m[0]+m[1]*m[1]+m[2]*m[2],m[4]*m[4]+m[5]*m[5]+m[6]*m[6],m[8]*m[8]+m[9]*m[9]+m[10]*m[10]))
},makeTranslation:function(n,m,w){this.set(1,0,0,n,0,1,0,m,0,0,1,w,0,0,0,1);
return this
},makeRotationX:function(n){var m=Math.cos(n);
n=Math.sin(n);
this.set(1,0,0,0,0,m,-n,0,0,n,m,0,0,0,0,1);
return this
},makeRotationY:function(n){var m=Math.cos(n);
n=Math.sin(n);
this.set(m,0,n,0,0,1,0,0,-n,0,m,0,0,0,0,1);
return this
},makeRotationZ:function(n){var m=Math.cos(n);
n=Math.sin(n);
this.set(m,-n,0,0,n,m,0,0,0,0,1,0,0,0,0,1);
return this
},makeRotationAxis:function(n,m){var K=Math.cos(m);
m=Math.sin(m);
var F=1-K,D=n.x,C=n.y;
n=n.z;
var z=F*D,w=F*C;
this.set(z*D+K,z*C-m*n,z*n+m*C,0,z*C+m*n,w*C+K,w*n-m*D,0,z*n-m*C,w*n+m*D,F*n*n+K,0,0,0,0,1);
return this
},makeScale:function(n,m,w){this.set(n,0,0,0,0,m,0,0,0,0,w,0,0,0,0,1);
return this
},makeShear:function(n,m,w){this.set(1,m,w,0,n,1,w,0,n,m,1,0,0,0,0,1);
return this
},compose:function(n,m,w){this.makeRotationFromQuaternion(m);
this.scale(w);
this.setPosition(n);
return this
},decompose:function(){var n=new ew,m=new eQ;
return function(N,L,K){var F=this.elements,D=n.set(F[0],F[1],F[2]).length(),C=n.set(F[4],F[5],F[6]).length(),z=n.set(F[8],F[9],F[10]).length();
0>this.determinant()&&(D=-D);
N.x=F[12];
N.y=F[13];
N.z=F[14];
m.copy(this);
N=1/D;
var F=1/C,w=1/z;
m.elements[0]*=N;
m.elements[1]*=N;
m.elements[2]*=N;
m.elements[4]*=F;
m.elements[5]*=F;
m.elements[6]*=F;
m.elements[8]*=w;
m.elements[9]*=w;
m.elements[10]*=w;
L.setFromRotationMatrix(m);
K.x=D;
K.y=C;
K.z=z;
return this
}
}(),makePerspective:function(n,m,F,D,C,z){void 0===z&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
var w=this.elements;
w[0]=2*C/(m-n);
w[4]=0;
w[8]=(m+n)/(m-n);
w[12]=0;
w[1]=0;
w[5]=2*C/(F-D);
w[9]=(F+D)/(F-D);
w[13]=0;
w[2]=0;
w[6]=0;
w[10]=-(z+C)/(z-C);
w[14]=-2*z*C/(z-C);
w[3]=0;
w[7]=0;
w[11]=-1;
w[15]=0;
return this
},makeOrthographic:function(N,L,K,F,D,C){var z=this.elements,w=1/(L-N),n=1/(K-F),m=1/(C-D);
z[0]=2*w;
z[4]=0;
z[8]=0;
z[12]=-((L+N)*w);
z[1]=0;
z[5]=2*n;
z[9]=0;
z[13]=-((K+F)*n);
z[2]=0;
z[6]=0;
z[10]=-2*m;
z[14]=-((C+D)*m);
z[3]=0;
z[7]=0;
z[11]=0;
z[15]=1;
return this
},equals:function(n){var m=this.elements;
n=n.elements;
for(var w=0;
16>w;
w++){if(m[w]!==n[w]){return !1
}}return !0
},fromArray:function(n,m){void 0===m&&(m=0);
for(var w=0;
16>w;
w++){this.elements[w]=n[w+m]
}return this
},toArray:function(n,m){void 0===n&&(n=[]);
void 0===m&&(m=0);
var w=this.elements;
n[m]=w[0];
n[m+1]=w[1];
n[m+2]=w[2];
n[m+3]=w[3];
n[m+4]=w[4];
n[m+5]=w[5];
n[m+6]=w[6];
n[m+7]=w[7];
n[m+8]=w[8];
n[m+9]=w[9];
n[m+10]=w[10];
n[m+11]=w[11];
n[m+12]=w[12];
n[m+13]=w[13];
n[m+14]=w[14];
n[m+15]=w[15];
return n
}});
e1.prototype=Object.create(eR.prototype);
e1.prototype.constructor=e1;
e1.prototype.isDataTexture=!0;
bS.prototype=Object.create(eR.prototype);
bS.prototype.constructor=bS;
bS.prototype.isCubeTexture=!0;
Object.defineProperty(bS.prototype,"images",{get:function(){return this.image
},set:function(m){this.image=m
}});
var U=new eR,x=new bS,fz=[],aW=[],aq=new Float32Array(16),aD=new Float32Array(9);
e4.prototype.setValue=function(n,m){for(var D=this.seq,C=0,z=D.length;
C!==z;
++C){var w=D[C];
w.setValue(n,m[w.id])
}};
var di=/([\w\d_]+)(\])?(\[|\.)?/g;
eD.prototype.setValue=function(n,m,w){m=this.map[m];
void 0!==m&&m.setValue(n,w,this.renderer)
};
eD.prototype.setOptional=function(n,m,w){m=m[w];
void 0!==m&&this.setValue(n,w,m)
};
eD.upload=function(n,m,K,F){for(var D=0,C=m.length;
D!==C;
++D){var z=m[D],w=K[z.id];
!1!==w.needsUpdate&&z.setValue(n,w.value,F)
}};
eD.seqWithValue=function(n,m){for(var D=[],C=0,z=n.length;
C!==z;
++C){var w=n[C];
w.id in m&&D.push(w)
}return D
};
var a1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};
Object.assign(e2.prototype,{isColor:!0,r:1,g:1,b:1,set:function(m){m&&m.isColor?this.copy(m):"number"===typeof m?this.setHex(m):"string"===typeof m&&this.setStyle(m);
return this
},setScalar:function(m){this.b=this.g=this.r=m;
return this
},setHex:function(m){m=Math.floor(m);
this.r=(m>>16&255)/255;
this.g=(m>>8&255)/255;
this.b=(m&255)/255;
return this
},setRGB:function(n,m,w){this.r=n;
this.g=m;
this.b=w;
return this
},setHSL:function(){function m(n,z,w){0>w&&(w+=1);
1<w&&--w;
return w<1/6?n+6*(z-n)*w:0.5>w?z:w<2/3?n+6*(z-n)*(2/3-w):n
}return function(n,z,w){n=eN.euclideanModulo(n,1);
z=eN.clamp(z,0,1);
w=eN.clamp(w,0,1);
0===z?this.r=this.g=this.b=w:(z=0.5>=w?w*(1+z):w+z-w*z,w=2*w-z,this.r=m(w,z,n+1/3),this.g=m(w,z,n),this.b=m(w,z,n-1/3));
return this
}
}(),setStyle:function(n){function m(F){void 0!==F&&1>parseFloat(F)&&console.warn("THREE.Color: Alpha component of "+n+" will be ignored.")
}var D;
if(D=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(n)){var C=D[2];
switch(D[1]){case"rgb":case"rgba":if(D=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(C)){return this.r=Math.min(255,parseInt(D[1],10))/255,this.g=Math.min(255,parseInt(D[2],10))/255,this.b=Math.min(255,parseInt(D[3],10))/255,m(D[5]),this
}if(D=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(C)){return this.r=Math.min(100,parseInt(D[1],10))/100,this.g=Math.min(100,parseInt(D[2],10))/100,this.b=Math.min(100,parseInt(D[3],10))/100,m(D[5]),this
}break;
case"hsl":case"hsla":if(D=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(C)){var C=parseFloat(D[1])/360,z=parseInt(D[2],10)/100,w=parseInt(D[3],10)/100;
m(D[5]);
return this.setHSL(C,z,w)
}}}else{if(D=/^\#([A-Fa-f0-9]+)$/.exec(n)){D=D[1];
C=D.length;
if(3===C){return this.r=parseInt(D.charAt(0)+D.charAt(0),16)/255,this.g=parseInt(D.charAt(1)+D.charAt(1),16)/255,this.b=parseInt(D.charAt(2)+D.charAt(2),16)/255,this
}if(6===C){return this.r=parseInt(D.charAt(0)+D.charAt(1),16)/255,this.g=parseInt(D.charAt(2)+D.charAt(3),16)/255,this.b=parseInt(D.charAt(4)+D.charAt(5),16)/255,this
}}}n&&0<n.length&&(D=a1[n],void 0!==D?this.setHex(D):console.warn("THREE.Color: Unknown color "+n));
return this
},clone:function(){return new this.constructor(this.r,this.g,this.b)
},copy:function(m){this.r=m.r;
this.g=m.g;
this.b=m.b;
return this
},copyGammaToLinear:function(n,m){void 0===m&&(m=2);
this.r=Math.pow(n.r,m);
this.g=Math.pow(n.g,m);
this.b=Math.pow(n.b,m);
return this
},copyLinearToGamma:function(n,m){void 0===m&&(m=2);
m=0<m?1/m:1;
this.r=Math.pow(n.r,m);
this.g=Math.pow(n.g,m);
this.b=Math.pow(n.b,m);
return this
},convertGammaToLinear:function(){var n=this.r,m=this.g,w=this.b;
this.r=n*n;
this.g=m*m;
this.b=w*w;
return this
},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);
this.g=Math.sqrt(this.g);
this.b=Math.sqrt(this.b);
return this
},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0
},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)
},getHSL:function(L){L=L||{h:0,s:0,l:0};
var K=this.r,F=this.g,D=this.b,C=Math.max(K,F,D),z=Math.min(K,F,D),w,n=(z+C)/2;
if(z===C){z=w=0
}else{var m=C-z,z=0.5>=n?m/(C+z):m/(2-C-z);
switch(C){case K:w=(F-D)/m+(F<D?6:0);
break;
case F:w=(D-K)/m+2;
break;
case D:w=(K-F)/m+4
}w/=6
}L.h=w;
L.s=z;
L.l=n;
return L
},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"
},offsetHSL:function(n,m,z){var w=this.getHSL();
w.h+=n;
w.s+=m;
w.l+=z;
this.setHSL(w.h,w.s,w.l);
return this
},add:function(m){this.r+=m.r;
this.g+=m.g;
this.b+=m.b;
return this
},addColors:function(n,m){this.r=n.r+m.r;
this.g=n.g+m.g;
this.b=n.b+m.b;
return this
},addScalar:function(m){this.r+=m;
this.g+=m;
this.b+=m;
return this
},sub:function(m){this.r=Math.max(0,this.r-m.r);
this.g=Math.max(0,this.g-m.g);
this.b=Math.max(0,this.b-m.b);
return this
},multiply:function(m){this.r*=m.r;
this.g*=m.g;
this.b*=m.b;
return this
},multiplyScalar:function(m){this.r*=m;
this.g*=m;
this.b*=m;
return this
},lerp:function(n,m){this.r+=(n.r-this.r)*m;
this.g+=(n.g-this.g)*m;
this.b+=(n.b-this.b)*m;
return this
},equals:function(m){return m.r===this.r&&m.g===this.g&&m.b===this.b
},fromArray:function(n,m){void 0===m&&(m=0);
this.r=n[m];
this.g=n[m+1];
this.b=n[m+2];
return this
},toArray:function(n,m){void 0===n&&(n=[]);
void 0===m&&(m=0);
n[m]=this.r;
n[m+1]=this.g;
n[m+2]=this.b;
return n
},toJSON:function(){return this.getHex()
}});
var eS={common:{diffuse:{value:new e2(15658734)},opacity:{value:1},map:{value:null},offsetRepeat:{value:new eM(0,0,1,1)},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new e0(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new e2(16777215)}},lights:{ambientLightColor:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new e2(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},offsetRepeat:{value:new eM(0,0,1,1)}}},ai={merge:function(n){for(var m={},C=0;
C<n.length;
C++){var z=this.clone(n[C]),w;
for(w in z){m[w]=z[w]
}}return m
},clone:function(n){var m={},C;
for(C in n){m[C]={};
for(var z in n[C]){var w=n[C][z];
w&&(w.isColor||w.isMatrix3||w.isMatrix4||w.isVector2||w.isVector3||w.isVector4||w.isTexture)?m[C][z]=w.clone():Array.isArray(w)?m[C][z]=w.slice():m[C][z]=w
}}return m
}},eL={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"\nvec3 transformed = vec3( position );\n",beginnormal_vertex:"\nvec3 objectNormal = vec3( normal );\n",bsdfs:"float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.86267 + (0.49788 + 0.01436 * y ) * y;\n\tfloat b = 3.45068 + (4.18814 + y) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = (x > 0.0) ? v : 0.5 * inversesqrt( 1.0 - x * x ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tvec3 result = vec3( LTC_ClippedSphereFormFactor( vectorFormFactor ) );\n\treturn result;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transpose( const in mat3 v ) {\n\tmat3 tmp;\n\ttmp[0] = vec3(v[0].x, v[1].x, v[2].x);\n\ttmp[1] = vec3(v[0].y, v[1].y, v[2].y);\n\ttmp[2] = vec3(v[0].z, v[1].z, v[2].z);\n\treturn tmp;\n}\n",cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",defaultnormal_vertex:"vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",encodings_fragment:"  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",envmap_fragment:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",envmap_pars_fragment:"#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",envmap_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",fog_vertex:"\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",gradientmap_pars_fragment:"#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",lights_pars:"uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tfloat norm = texture2D( ltcMag, uv ).a;\n\t\tvec4 t = texture2D( ltcMat, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3(   1,   0, t.y ),\n\t\t\tvec3(   0, t.z,   0 ),\n\t\t\tvec3( t.w,   0, t.x )\n\t\t);\n\t\treflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",lights_template:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",logdepthbuf_fragment:"#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n",map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",map_particle_fragment:"#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",map_particle_pars_fragment:"#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",normal_fragment:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",project_vertex:"vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",dithering_fragment:"#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",dithering_pars_fragment:"#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",tonemapping_pars_fragment:"#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",uv_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n",uv_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",cube_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",equirect_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",meshphysical_frag:"#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",meshphysical_vert:"#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n}\n",shadow_vert:"#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n"},c7={basic:{uniforms:ai.merge([eS.common,eS.specularmap,eS.envmap,eS.aomap,eS.lightmap,eS.fog]),vertexShader:eL.meshbasic_vert,fragmentShader:eL.meshbasic_frag},lambert:{uniforms:ai.merge([eS.common,eS.specularmap,eS.envmap,eS.aomap,eS.lightmap,eS.emissivemap,eS.fog,eS.lights,{emissive:{value:new e2(0)}}]),vertexShader:eL.meshlambert_vert,fragmentShader:eL.meshlambert_frag},phong:{uniforms:ai.merge([eS.common,eS.specularmap,eS.envmap,eS.aomap,eS.lightmap,eS.emissivemap,eS.bumpmap,eS.normalmap,eS.displacementmap,eS.gradientmap,eS.fog,eS.lights,{emissive:{value:new e2(0)},specular:{value:new e2(1118481)},shininess:{value:30}}]),vertexShader:eL.meshphong_vert,fragmentShader:eL.meshphong_frag},standard:{uniforms:ai.merge([eS.common,eS.envmap,eS.aomap,eS.lightmap,eS.emissivemap,eS.bumpmap,eS.normalmap,eS.displacementmap,eS.roughnessmap,eS.metalnessmap,eS.fog,eS.lights,{emissive:{value:new e2(0)},roughness:{value:0.5},metalness:{value:0.5},envMapIntensity:{value:1}}]),vertexShader:eL.meshphysical_vert,fragmentShader:eL.meshphysical_frag},points:{uniforms:ai.merge([eS.points,eS.fog]),vertexShader:eL.points_vert,fragmentShader:eL.points_frag},dashed:{uniforms:ai.merge([eS.common,eS.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:eL.linedashed_vert,fragmentShader:eL.linedashed_frag},depth:{uniforms:ai.merge([eS.common,eS.displacementmap]),vertexShader:eL.depth_vert,fragmentShader:eL.depth_frag},normal:{uniforms:ai.merge([eS.common,eS.bumpmap,eS.normalmap,eS.displacementmap,{opacity:{value:1}}]),vertexShader:eL.normal_vert,fragmentShader:eL.normal_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:eL.cube_vert,fragmentShader:eL.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:eL.equirect_vert,fragmentShader:eL.equirect_frag},distanceRGBA:{uniforms:ai.merge([eS.common,eS.displacementmap,{referencePosition:{value:new ew},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:eL.distanceRGBA_vert,fragmentShader:eL.distanceRGBA_frag},shadow:{uniforms:ai.merge([eS.lights,{color:{value:new e2(0)},opacity:{value:1}}]),vertexShader:eL.shadow_vert,fragmentShader:eL.shadow_frag}};
c7.physical={uniforms:ai.merge([c7.standard.uniforms,{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:eL.meshphysical_vert,fragmentShader:eL.meshphysical_frag};
Object.assign(c5.prototype,{set:function(n,m){this.min.copy(n);
this.max.copy(m);
return this
},setFromPoints:function(n){this.makeEmpty();
for(var m=0,w=n.length;
m<w;
m++){this.expandByPoint(n[m])
}return this
},setFromCenterAndSize:function(){var m=new e0;
return function(n,w){w=m.copy(w).multiplyScalar(0.5);
this.min.copy(n).sub(w);
this.max.copy(n).add(w);
return this
}
}(),clone:function(){return(new this.constructor).copy(this)
},copy:function(m){this.min.copy(m.min);
this.max.copy(m.max);
return this
},makeEmpty:function(){this.min.x=this.min.y=Infinity;
this.max.x=this.max.y=-Infinity;
return this
},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y
},getCenter:function(m){m=m||new e0;
return this.isEmpty()?m.set(0,0):m.addVectors(this.min,this.max).multiplyScalar(0.5)
},getSize:function(m){m=m||new e0;
return this.isEmpty()?m.set(0,0):m.subVectors(this.max,this.min)
},expandByPoint:function(m){this.min.min(m);
this.max.max(m);
return this
},expandByVector:function(m){this.min.sub(m);
this.max.add(m);
return this
},expandByScalar:function(m){this.min.addScalar(-m);
this.max.addScalar(m);
return this
},containsPoint:function(m){return m.x<this.min.x||m.x>this.max.x||m.y<this.min.y||m.y>this.max.y?!1:!0
},containsBox:function(m){return this.min.x<=m.min.x&&m.max.x<=this.max.x&&this.min.y<=m.min.y&&m.max.y<=this.max.y
},getParameter:function(n,m){return(m||new e0).set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y))
},intersectsBox:function(m){return m.max.x<this.min.x||m.min.x>this.max.x||m.max.y<this.min.y||m.min.y>this.max.y?!1:!0
},clampPoint:function(n,m){return(m||new e0).copy(n).clamp(this.min,this.max)
},distanceToPoint:function(){var m=new e0;
return function(n){return m.copy(n).clamp(this.min,this.max).sub(n).length()
}
}(),intersect:function(m){this.min.max(m.min);
this.max.min(m.max);
return this
},union:function(m){this.min.min(m.min);
this.max.max(m.max);
return this
},translate:function(m){this.min.add(m);
this.max.add(m);
return this
},equals:function(m){return m.min.equals(this.min)&&m.max.equals(this.max)
}});
bL.prototype=Object.create(eR.prototype);
bL.prototype.constructor=bL;
var dS=0;
Object.assign(eP.prototype,b5.prototype,{isMaterial:!0,onBeforeCompile:function(){},setValues:function(n){if(void 0!==n){for(var m in n){var z=n[m];
if(void 0===z){console.warn("THREE.Material: '"+m+"' parameter is undefined.")
}else{if("shading"===m){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===z?!0:!1
}else{var w=this[m];
void 0===w?console.warn("THREE."+this.type+": '"+m+"' is not a property of this material."):w&&w.isColor?w.set(z):w&&w.isVector3&&z&&z.isVector3?w.copy(z):this[m]="overdraw"===m?Number(z):z
}}}}},toJSON:function(n){function m(D){var C=[],K;
for(K in D){var F=D[K];
delete F.metadata;
C.push(F)
}return C
}var z=void 0===n;
z&&(n={textures:{},images:{}});
var w={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};
w.uuid=this.uuid;
w.type=this.type;
""!==this.name&&(w.name=this.name);
this.color&&this.color.isColor&&(w.color=this.color.getHex());
void 0!==this.roughness&&(w.roughness=this.roughness);
void 0!==this.metalness&&(w.metalness=this.metalness);
this.emissive&&this.emissive.isColor&&(w.emissive=this.emissive.getHex());
this.specular&&this.specular.isColor&&(w.specular=this.specular.getHex());
void 0!==this.shininess&&(w.shininess=this.shininess);
void 0!==this.clearCoat&&(w.clearCoat=this.clearCoat);
void 0!==this.clearCoatRoughness&&(w.clearCoatRoughness=this.clearCoatRoughness);
this.map&&this.map.isTexture&&(w.map=this.map.toJSON(n).uuid);
this.alphaMap&&this.alphaMap.isTexture&&(w.alphaMap=this.alphaMap.toJSON(n).uuid);
this.lightMap&&this.lightMap.isTexture&&(w.lightMap=this.lightMap.toJSON(n).uuid);
this.bumpMap&&this.bumpMap.isTexture&&(w.bumpMap=this.bumpMap.toJSON(n).uuid,w.bumpScale=this.bumpScale);
this.normalMap&&this.normalMap.isTexture&&(w.normalMap=this.normalMap.toJSON(n).uuid,w.normalScale=this.normalScale.toArray());
this.displacementMap&&this.displacementMap.isTexture&&(w.displacementMap=this.displacementMap.toJSON(n).uuid,w.displacementScale=this.displacementScale,w.displacementBias=this.displacementBias);
this.roughnessMap&&this.roughnessMap.isTexture&&(w.roughnessMap=this.roughnessMap.toJSON(n).uuid);
this.metalnessMap&&this.metalnessMap.isTexture&&(w.metalnessMap=this.metalnessMap.toJSON(n).uuid);
this.emissiveMap&&this.emissiveMap.isTexture&&(w.emissiveMap=this.emissiveMap.toJSON(n).uuid);
this.specularMap&&this.specularMap.isTexture&&(w.specularMap=this.specularMap.toJSON(n).uuid);
this.envMap&&this.envMap.isTexture&&(w.envMap=this.envMap.toJSON(n).uuid,w.reflectivity=this.reflectivity);
this.gradientMap&&this.gradientMap.isTexture&&(w.gradientMap=this.gradientMap.toJSON(n).uuid);
void 0!==this.size&&(w.size=this.size);
void 0!==this.sizeAttenuation&&(w.sizeAttenuation=this.sizeAttenuation);
1!==this.blending&&(w.blending=this.blending);
!0===this.flatShading&&(w.flatShading=this.flatShading);
0!==this.side&&(w.side=this.side);
0!==this.vertexColors&&(w.vertexColors=this.vertexColors);
1>this.opacity&&(w.opacity=this.opacity);
!0===this.transparent&&(w.transparent=this.transparent);
w.depthFunc=this.depthFunc;
w.depthTest=this.depthTest;
w.depthWrite=this.depthWrite;
!0===this.dithering&&(w.dithering=!0);
0<this.alphaTest&&(w.alphaTest=this.alphaTest);
!0===this.premultipliedAlpha&&(w.premultipliedAlpha=this.premultipliedAlpha);
!0===this.wireframe&&(w.wireframe=this.wireframe);
1<this.wireframeLinewidth&&(w.wireframeLinewidth=this.wireframeLinewidth);
"round"!==this.wireframeLinecap&&(w.wireframeLinecap=this.wireframeLinecap);
"round"!==this.wireframeLinejoin&&(w.wireframeLinejoin=this.wireframeLinejoin);
!0===this.morphTargets&&(w.morphTargets=!0);
!0===this.skinning&&(w.skinning=!0);
!1===this.visible&&(w.visible=!1);
"{}"!==JSON.stringify(this.userData)&&(w.userData=this.userData);
z&&(z=m(n.textures),n=m(n.images),0<z.length&&(w.textures=z),0<n.length&&(w.images=n));
return w
},clone:function(){return(new this.constructor).copy(this)
},copy:function(n){this.name=n.name;
this.fog=n.fog;
this.lights=n.lights;
this.blending=n.blending;
this.side=n.side;
this.flatShading=n.flatShading;
this.vertexColors=n.vertexColors;
this.opacity=n.opacity;
this.transparent=n.transparent;
this.blendSrc=n.blendSrc;
this.blendDst=n.blendDst;
this.blendEquation=n.blendEquation;
this.blendSrcAlpha=n.blendSrcAlpha;
this.blendDstAlpha=n.blendDstAlpha;
this.blendEquationAlpha=n.blendEquationAlpha;
this.depthFunc=n.depthFunc;
this.depthTest=n.depthTest;
this.depthWrite=n.depthWrite;
this.colorWrite=n.colorWrite;
this.precision=n.precision;
this.polygonOffset=n.polygonOffset;
this.polygonOffsetFactor=n.polygonOffsetFactor;
this.polygonOffsetUnits=n.polygonOffsetUnits;
this.dithering=n.dithering;
this.alphaTest=n.alphaTest;
this.premultipliedAlpha=n.premultipliedAlpha;
this.overdraw=n.overdraw;
this.visible=n.visible;
this.userData=JSON.parse(JSON.stringify(n.userData));
this.clipShadows=n.clipShadows;
this.clipIntersection=n.clipIntersection;
n=n.clippingPlanes;
var m=null;
if(null!==n){for(var z=n.length,m=Array(z),w=0;
w!==z;
++w){m[w]=n[w].clone()
}}this.clippingPlanes=m;
return this
},dispose:function(){this.dispatchEvent({type:"dispose"})
}});
fD.prototype=Object.create(eP.prototype);
fD.prototype.constructor=fD;
fD.prototype.isShaderMaterial=!0;
fD.prototype.copy=function(m){eP.prototype.copy.call(this,m);
this.fragmentShader=m.fragmentShader;
this.vertexShader=m.vertexShader;
this.uniforms=ai.clone(m.uniforms);
this.defines=m.defines;
this.wireframe=m.wireframe;
this.wireframeLinewidth=m.wireframeLinewidth;
this.lights=m.lights;
this.clipping=m.clipping;
this.skinning=m.skinning;
this.morphTargets=m.morphTargets;
this.morphNormals=m.morphNormals;
this.extensions=m.extensions;
return this
};
fD.prototype.toJSON=function(m){m=eP.prototype.toJSON.call(this,m);
m.uniforms=this.uniforms;
m.vertexShader=this.vertexShader;
m.fragmentShader=this.fragmentShader;
return m
};
bG.prototype=Object.create(eP.prototype);
bG.prototype.constructor=bG;
bG.prototype.isMeshDepthMaterial=!0;
bG.prototype.copy=function(m){eP.prototype.copy.call(this,m);
this.depthPacking=m.depthPacking;
this.skinning=m.skinning;
this.morphTargets=m.morphTargets;
this.map=m.map;
this.alphaMap=m.alphaMap;
this.displacementMap=m.displacementMap;
this.displacementScale=m.displacementScale;
this.displacementBias=m.displacementBias;
this.wireframe=m.wireframe;
this.wireframeLinewidth=m.wireframeLinewidth;
return this
};
bu.prototype=Object.create(eP.prototype);
bu.prototype.constructor=bu;
bu.prototype.isMeshDistanceMaterial=!0;
bu.prototype.copy=function(m){eP.prototype.copy.call(this,m);
this.referencePosition.copy(m.referencePosition);
this.nearDistance=m.nearDistance;
this.farDistance=m.farDistance;
this.skinning=m.skinning;
this.morphTargets=m.morphTargets;
this.map=m.map;
this.alphaMap=m.alphaMap;
this.displacementMap=m.displacementMap;
this.displacementScale=m.displacementScale;
this.displacementBias=m.displacementBias;
return this
};
Object.assign(dl.prototype,{isBox3:!0,set:function(n,m){this.min.copy(n);
this.max.copy(m);
return this
},setFromArray:function(P){for(var O=Infinity,N=Infinity,L=Infinity,K=-Infinity,F=-Infinity,D=-Infinity,C=0,z=P.length;
C<z;
C+=3){var w=P[C],m=P[C+1],n=P[C+2];
w<O&&(O=w);
m<N&&(N=m);
n<L&&(L=n);
w>K&&(K=w);
m>F&&(F=m);
n>D&&(D=n)
}this.min.set(O,N,L);
this.max.set(K,F,D);
return this
},setFromBufferAttribute:function(P){for(var O=Infinity,N=Infinity,L=Infinity,K=-Infinity,F=-Infinity,D=-Infinity,C=0,z=P.count;
C<z;
C++){var w=P.getX(C),m=P.getY(C),n=P.getZ(C);
w<O&&(O=w);
m<N&&(N=m);
n<L&&(L=n);
w>K&&(K=w);
m>F&&(F=m);
n>D&&(D=n)
}this.min.set(O,N,L);
this.max.set(K,F,D);
return this
},setFromPoints:function(n){this.makeEmpty();
for(var m=0,w=n.length;
m<w;
m++){this.expandByPoint(n[m])
}return this
},setFromCenterAndSize:function(){var m=new ew;
return function(n,w){w=m.copy(w).multiplyScalar(0.5);
this.min.copy(n).sub(w);
this.max.copy(n).add(w);
return this
}
}(),setFromObject:function(m){this.makeEmpty();
return this.expandByObject(m)
},clone:function(){return(new this.constructor).copy(this)
},copy:function(m){this.min.copy(m.min);
this.max.copy(m.max);
return this
},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;
this.max.x=this.max.y=this.max.z=-Infinity;
return this
},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z
},getCenter:function(m){m=m||new ew;
return this.isEmpty()?m.set(0,0,0):m.addVectors(this.min,this.max).multiplyScalar(0.5)
},getSize:function(m){m=m||new ew;
return this.isEmpty()?m.set(0,0,0):m.subVectors(this.max,this.min)
},expandByPoint:function(m){this.min.min(m);
this.max.max(m);
return this
},expandByVector:function(m){this.min.sub(m);
this.max.add(m);
return this
},expandByScalar:function(m){this.min.addScalar(-m);
this.max.addScalar(m);
return this
},expandByObject:function(){var m=new ew;
return function(n){var w=this;
n.updateMatrixWorld(!0);
n.traverse(function(z){var F;
var D=z.geometry;
if(void 0!==D){if(D.isGeometry){var C=D.vertices;
D=0;
for(F=C.length;
D<F;
D++){m.copy(C[D]),m.applyMatrix4(z.matrixWorld),w.expandByPoint(m)
}}else{if(D.isBufferGeometry&&(C=D.attributes.position,void 0!==C)){for(D=0,F=C.count;
D<F;
D++){m.fromBufferAttribute(C,D).applyMatrix4(z.matrixWorld),w.expandByPoint(m)
}}}}});
return this
}
}(),containsPoint:function(m){return m.x<this.min.x||m.x>this.max.x||m.y<this.min.y||m.y>this.max.y||m.z<this.min.z||m.z>this.max.z?!1:!0
},containsBox:function(m){return this.min.x<=m.min.x&&m.max.x<=this.max.x&&this.min.y<=m.min.y&&m.max.y<=this.max.y&&this.min.z<=m.min.z&&m.max.z<=this.max.z
},getParameter:function(n,m){return(m||new ew).set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y),(n.z-this.min.z)/(this.max.z-this.min.z))
},intersectsBox:function(m){return m.max.x<this.min.x||m.min.x>this.max.x||m.max.y<this.min.y||m.min.y>this.max.y||m.max.z<this.min.z||m.min.z>this.max.z?!1:!0
},intersectsSphere:function(){var m=new ew;
return function(n){this.clampPoint(n.center,m);
return m.distanceToSquared(n.center)<=n.radius*n.radius
}
}(),intersectsPlane:function(n){if(0<n.normal.x){var m=n.normal.x*this.min.x;
var w=n.normal.x*this.max.x
}else{m=n.normal.x*this.max.x,w=n.normal.x*this.min.x
}0<n.normal.y?(m+=n.normal.y*this.min.y,w+=n.normal.y*this.max.y):(m+=n.normal.y*this.max.y,w+=n.normal.y*this.min.y);
0<n.normal.z?(m+=n.normal.z*this.min.z,w+=n.normal.z*this.max.z):(m+=n.normal.z*this.max.z,w+=n.normal.z*this.min.z);
return m<=n.constant&&w>=n.constant
},clampPoint:function(n,m){return(m||new ew).copy(n).clamp(this.min,this.max)
},distanceToPoint:function(){var m=new ew;
return function(n){return m.copy(n).clamp(this.min,this.max).sub(n).length()
}
}(),getBoundingSphere:function(){var m=new ew;
return function(n){n=n||new av;
this.getCenter(n.center);
n.radius=0.5*this.getSize(m).length();
return n
}
}(),intersect:function(m){this.min.max(m.min);
this.max.min(m.max);
this.isEmpty()&&this.makeEmpty();
return this
},union:function(m){this.min.min(m.min);
this.max.max(m.max);
return this
},applyMatrix4:function(){var m=[new ew,new ew,new ew,new ew,new ew,new ew,new ew,new ew];
return function(n){if(this.isEmpty()){return this
}m[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n);
m[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n);
m[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n);
m[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n);
m[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n);
m[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n);
m[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n);
m[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n);
this.setFromPoints(m);
return this
}
}(),translate:function(m){this.min.add(m);
this.max.add(m);
return this
},equals:function(m){return m.min.equals(this.min)&&m.max.equals(this.max)
}});
Object.assign(av.prototype,{set:function(n,m){this.center.copy(n);
this.radius=m;
return this
},setFromPoints:function(){var m=new dl;
return function(n,D){var C=this.center;
void 0!==D?C.copy(D):m.setFromPoints(n).getCenter(C);
for(var z=D=0,w=n.length;
z<w;
z++){D=Math.max(D,C.distanceToSquared(n[z]))
}this.radius=Math.sqrt(D);
return this
}
}(),clone:function(){return(new this.constructor).copy(this)
},copy:function(m){this.center.copy(m.center);
this.radius=m.radius;
return this
},empty:function(){return 0>=this.radius
},containsPoint:function(m){return m.distanceToSquared(this.center)<=this.radius*this.radius
},distanceToPoint:function(m){return m.distanceTo(this.center)-this.radius
},intersectsSphere:function(n){var m=this.radius+n.radius;
return n.center.distanceToSquared(this.center)<=m*m
},intersectsBox:function(m){return m.intersectsSphere(this)
},intersectsPlane:function(m){return Math.abs(m.distanceToPoint(this.center))<=this.radius
},clampPoint:function(n,m){var w=this.center.distanceToSquared(n);
m=m||new ew;
m.copy(n);
w>this.radius*this.radius&&(m.sub(this.center).normalize(),m.multiplyScalar(this.radius).add(this.center));
return m
},getBoundingBox:function(m){m=m||new dl;
m.set(this.center,this.center);
m.expandByScalar(this.radius);
return m
},applyMatrix4:function(m){this.center.applyMatrix4(m);
this.radius*=m.getMaxScaleOnAxis();
return this
},translate:function(m){this.center.add(m);
return this
},equals:function(m){return m.center.equals(this.center)&&m.radius===this.radius
}});
Object.assign(bp.prototype,{isMatrix3:!0,set:function(N,L,K,F,D,C,z,w,n){var m=this.elements;
m[0]=N;
m[1]=F;
m[2]=z;
m[3]=L;
m[4]=D;
m[5]=w;
m[6]=K;
m[7]=C;
m[8]=n;
return this
},identity:function(){this.set(1,0,0,0,1,0,0,0,1);
return this
},clone:function(){return(new this.constructor).fromArray(this.elements)
},copy:function(n){var m=this.elements;
n=n.elements;
m[0]=n[0];
m[1]=n[1];
m[2]=n[2];
m[3]=n[3];
m[4]=n[4];
m[5]=n[5];
m[6]=n[6];
m[7]=n[7];
m[8]=n[8];
return this
},setFromMatrix4:function(m){m=m.elements;
this.set(m[0],m[4],m[8],m[1],m[5],m[9],m[2],m[6],m[10]);
return this
},applyToBufferAttribute:function(){var m=new ew;
return function(n){for(var z=0,w=n.count;
z<w;
z++){m.x=n.getX(z),m.y=n.getY(z),m.z=n.getZ(z),m.applyMatrix3(this),n.setXYZ(z,m.x,m.y,m.z)
}return n
}
}(),multiply:function(m){return this.multiplyMatrices(this,m)
},premultiply:function(m){return this.multiplyMatrices(m,this)
},multiplyMatrices:function(ac,ab){var aa=ac.elements,X=ab.elements;
ab=this.elements;
ac=aa[0];
var W=aa[3],V=aa[6],S=aa[1],R=aa[4],Q=aa[7],P=aa[2],F=aa[5],aa=aa[8],L=X[0],O=X[3],D=X[6],N=X[1],C=X[4],z=X[7],w=X[2],K=X[5],X=X[8];
ab[0]=ac*L+W*N+V*w;
ab[3]=ac*O+W*C+V*K;
ab[6]=ac*D+W*z+V*X;
ab[1]=S*L+R*N+Q*w;
ab[4]=S*O+R*C+Q*K;
ab[7]=S*D+R*z+Q*X;
ab[2]=P*L+F*N+aa*w;
ab[5]=P*O+F*C+aa*K;
ab[8]=P*D+F*z+aa*X;
return this
},multiplyScalar:function(n){var m=this.elements;
m[0]*=n;
m[3]*=n;
m[6]*=n;
m[1]*=n;
m[4]*=n;
m[7]*=n;
m[2]*=n;
m[5]*=n;
m[8]*=n;
return this
},determinant:function(){var L=this.elements,K=L[0],F=L[1],D=L[2],C=L[3],z=L[4],w=L[5],n=L[6],m=L[7],L=L[8];
return K*z*L-K*w*m-F*C*L+F*w*n+D*C*m-D*z*n
},getInverse:function(W,V){W&&W.isMatrix4&&console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
var S=W.elements;
W=this.elements;
var R=S[0],Q=S[1],P=S[2],O=S[3],N=S[4],L=S[5],K=S[6],z=S[7],S=S[8],C=S*N-L*z,F=L*K-S*O,w=z*O-N*K,D=R*C+Q*F+P*w;
if(0===D){if(!0===V){throw Error("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0")
}console.warn("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");
return this.identity()
}V=1/D;
W[0]=C*V;
W[1]=(P*z-S*Q)*V;
W[2]=(L*Q-P*N)*V;
W[3]=F*V;
W[4]=(S*R-P*K)*V;
W[5]=(P*O-L*R)*V;
W[6]=w*V;
W[7]=(Q*K-z*R)*V;
W[8]=(N*R-Q*O)*V;
return this
},transpose:function(){var n=this.elements;
var m=n[1];
n[1]=n[3];
n[3]=m;
m=n[2];
n[2]=n[6];
n[6]=m;
m=n[5];
n[5]=n[7];
n[7]=m;
return this
},getNormalMatrix:function(m){return this.setFromMatrix4(m).getInverse(this).transpose()
},transposeIntoArray:function(n){var m=this.elements;
n[0]=m[0];
n[1]=m[3];
n[2]=m[6];
n[3]=m[1];
n[4]=m[4];
n[5]=m[7];
n[6]=m[2];
n[7]=m[5];
n[8]=m[8];
return this
},equals:function(n){var m=this.elements;
n=n.elements;
for(var w=0;
9>w;
w++){if(m[w]!==n[w]){return !1
}}return !0
},fromArray:function(n,m){void 0===m&&(m=0);
for(var w=0;
9>w;
w++){this.elements[w]=n[w+m]
}return this
},toArray:function(n,m){void 0===n&&(n=[]);
void 0===m&&(m=0);
var w=this.elements;
n[m]=w[0];
n[m+1]=w[1];
n[m+2]=w[2];
n[m+3]=w[3];
n[m+4]=w[4];
n[m+5]=w[5];
n[m+6]=w[6];
n[m+7]=w[7];
n[m+8]=w[8];
return n
}});
Object.assign(fl.prototype,{set:function(n,m){this.normal.copy(n);
this.constant=m;
return this
},setComponents:function(n,m,z,w){this.normal.set(n,m,z);
this.constant=w;
return this
},setFromNormalAndCoplanarPoint:function(n,m){this.normal.copy(n);
this.constant=-m.dot(this.normal);
return this
},setFromCoplanarPoints:function(){var n=new ew,m=new ew;
return function(C,z,w){z=n.subVectors(w,z).cross(m.subVectors(C,z)).normalize();
this.setFromNormalAndCoplanarPoint(z,C);
return this
}
}(),clone:function(){return(new this.constructor).copy(this)
},copy:function(m){this.normal.copy(m.normal);
this.constant=m.constant;
return this
},normalize:function(){var m=1/this.normal.length();
this.normal.multiplyScalar(m);
this.constant*=m;
return this
},negate:function(){this.constant*=-1;
this.normal.negate();
return this
},distanceToPoint:function(m){return this.normal.dot(m)+this.constant
},distanceToSphere:function(m){return this.distanceToPoint(m.center)-m.radius
},projectPoint:function(n,m){return(m||new ew).copy(this.normal).multiplyScalar(-this.distanceToPoint(n)).add(n)
},intersectLine:function(){var m=new ew;
return function(n,C){C=C||new ew;
var z=n.delta(m),w=this.normal.dot(z);
if(0===w){if(0===this.distanceToPoint(n.start)){return C.copy(n.start)
}}else{if(w=-(n.start.dot(this.normal)+this.constant)/w,!(0>w||1<w)){return C.copy(z).multiplyScalar(w).add(n.start)
}}}
}(),intersectsLine:function(n){var m=this.distanceToPoint(n.start);
n=this.distanceToPoint(n.end);
return 0>m&&0<n||0>n&&0<m
},intersectsBox:function(m){return m.intersectsPlane(this)
},intersectsSphere:function(m){return m.intersectsPlane(this)
},coplanarPoint:function(m){return(m||new ew).copy(this.normal).multiplyScalar(-this.constant)
},applyMatrix4:function(){var n=new ew,m=new bp;
return function(z,w){w=w||m.getNormalMatrix(z);
z=this.coplanarPoint(n).applyMatrix4(z);
w=this.normal.applyMatrix3(w).normalize();
this.constant=-z.dot(w);
return this
}
}(),translate:function(m){this.constant-=m.dot(this.normal);
return this
},equals:function(m){return m.normal.equals(this.normal)&&m.constant===this.constant
}});
Object.assign(cI.prototype,{set:function(n,m,F,D,C,z){var w=this.planes;
w[0].copy(n);
w[1].copy(m);
w[2].copy(F);
w[3].copy(D);
w[4].copy(C);
w[5].copy(z);
return this
},clone:function(){return(new this.constructor).copy(this)
},copy:function(n){for(var m=this.planes,w=0;
6>w;
w++){m[w].copy(n.planes[w])
}return this
},setFromMatrix:function(X){var V=this.planes,S=X.elements;
X=S[0];
var R=S[1],Q=S[2],P=S[3],O=S[4],N=S[5],L=S[6],K=S[7],z=S[8],C=S[9],F=S[10],w=S[11],D=S[12],aa=S[13],W=S[14],S=S[15];
V[0].setComponents(P-X,K-O,w-z,S-D).normalize();
V[1].setComponents(P+X,K+O,w+z,S+D).normalize();
V[2].setComponents(P+R,K+N,w+C,S+aa).normalize();
V[3].setComponents(P-R,K-N,w-C,S-aa).normalize();
V[4].setComponents(P-Q,K-L,w-F,S-W).normalize();
V[5].setComponents(P+Q,K+L,w+F,S+W).normalize();
return this
},intersectsObject:function(){var m=new av;
return function(n){var w=n.geometry;
null===w.boundingSphere&&w.computeBoundingSphere();
m.copy(w.boundingSphere).applyMatrix4(n.matrixWorld);
return this.intersectsSphere(m)
}
}(),intersectsSprite:function(){var m=new av;
return function(n){m.center.set(0,0,0);
m.radius=0.7071067811865476;
m.applyMatrix4(n.matrixWorld);
return this.intersectsSphere(m)
}
}(),intersectsSphere:function(n){var m=this.planes,z=n.center;
n=-n.radius;
for(var w=0;
6>w;
w++){if(m[w].distanceToPoint(z)<n){return !1
}}return !0
},intersectsBox:function(){var n=new ew,m=new ew;
return function(F){for(var D=this.planes,C=0;
6>C;
C++){var z=D[C];
n.x=0<z.normal.x?F.min.x:F.max.x;
m.x=0<z.normal.x?F.max.x:F.min.x;
n.y=0<z.normal.y?F.min.y:F.max.y;
m.y=0<z.normal.y?F.max.y:F.min.y;
n.z=0<z.normal.z?F.min.z:F.max.z;
m.z=0<z.normal.z?F.max.z:F.min.z;
var w=z.distanceToPoint(n),z=z.distanceToPoint(m);
if(0>w&&0>z){return !1
}}return !0
}
}(),containsPoint:function(n){for(var m=this.planes,w=0;
6>w;
w++){if(0>m[w].distanceToPoint(n)){return !1
}}return !0
}});
bj.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");
bj.DefaultOrder="XYZ";
Object.defineProperties(bj.prototype,{x:{get:function(){return this._x
},set:function(m){this._x=m;
this.onChangeCallback()
}},y:{get:function(){return this._y
},set:function(m){this._y=m;
this.onChangeCallback()
}},z:{get:function(){return this._z
},set:function(m){this._z=m;
this.onChangeCallback()
}},order:{get:function(){return this._order
},set:function(m){this._order=m;
this.onChangeCallback()
}}});
Object.assign(bj.prototype,{isEuler:!0,set:function(n,m,z,w){this._x=n;
this._y=m;
this._z=z;
this._order=w||this._order;
this.onChangeCallback();
return this
},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)
},copy:function(m){this._x=m._x;
this._y=m._y;
this._z=m._z;
this._order=m._order;
this.onChangeCallback();
return this
},setFromRotationMatrix:function(P,O,N){var L=eN.clamp,K=P.elements;
P=K[0];
var F=K[4],D=K[8],C=K[1],z=K[5],w=K[9],m=K[2],n=K[6],K=K[10];
O=O||this._order;
"XYZ"===O?(this._y=Math.asin(L(D,-1,1)),0.99999>Math.abs(D)?(this._x=Math.atan2(-w,K),this._z=Math.atan2(-F,P)):(this._x=Math.atan2(n,z),this._z=0)):"YXZ"===O?(this._x=Math.asin(-L(w,-1,1)),0.99999>Math.abs(w)?(this._y=Math.atan2(D,K),this._z=Math.atan2(C,z)):(this._y=Math.atan2(-m,P),this._z=0)):"ZXY"===O?(this._x=Math.asin(L(n,-1,1)),0.99999>Math.abs(n)?(this._y=Math.atan2(-m,K),this._z=Math.atan2(-F,z)):(this._y=0,this._z=Math.atan2(C,P))):"ZYX"===O?(this._y=Math.asin(-L(m,-1,1)),0.99999>Math.abs(m)?(this._x=Math.atan2(n,K),this._z=Math.atan2(C,P)):(this._x=0,this._z=Math.atan2(-F,z))):"YZX"===O?(this._z=Math.asin(L(C,-1,1)),0.99999>Math.abs(C)?(this._x=Math.atan2(-w,z),this._y=Math.atan2(-m,P)):(this._x=0,this._y=Math.atan2(D,K))):"XZY"===O?(this._z=Math.asin(-L(F,-1,1)),0.99999>Math.abs(F)?(this._x=Math.atan2(n,z),this._y=Math.atan2(D,P)):(this._x=Math.atan2(-w,K),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+O);
this._order=O;
if(!1!==N){this.onChangeCallback()
}return this
},setFromQuaternion:function(){var m=new eQ;
return function(n,z,w){m.makeRotationFromQuaternion(n);
return this.setFromRotationMatrix(m,z,w)
}
}(),setFromVector3:function(n,m){return this.set(n.x,n.y,n.z,m||this._order)
},reorder:function(){var m=new c8;
return function(n){m.setFromEuler(this);
return this.setFromQuaternion(m,n)
}
}(),equals:function(m){return m._x===this._x&&m._y===this._y&&m._z===this._z&&m._order===this._order
},fromArray:function(m){this._x=m[0];
this._y=m[1];
this._z=m[2];
void 0!==m[3]&&(this._order=m[3]);
this.onChangeCallback();
return this
},toArray:function(n,m){void 0===n&&(n=[]);
void 0===m&&(m=0);
n[m]=this._x;
n[m+1]=this._y;
n[m+2]=this._z;
n[m+3]=this._order;
return n
},toVector3:function(m){return m?m.set(this._x,this._y,this._z):new ew(this._x,this._y,this._z)
},onChange:function(m){this.onChangeCallback=m;
return this
},onChangeCallback:function(){}});
Object.assign(cZ.prototype,{set:function(m){this.mask=1<<m|0
},enable:function(m){this.mask=this.mask|1<<m|0
},toggle:function(m){this.mask^=1<<m|0
},disable:function(m){this.mask&=~(1<<m|0)
},test:function(m){return 0!==(this.mask&m.mask)
}});
var dt=0;
ev.DefaultUp=new ew(0,1,0);
ev.DefaultMatrixAutoUpdate=!0;
Object.assign(ev.prototype,b5.prototype,{isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix:function(m){this.matrix.multiplyMatrices(m,this.matrix);
this.matrix.decompose(this.position,this.quaternion,this.scale)
},applyQuaternion:function(m){this.quaternion.premultiply(m);
return this
},setRotationFromAxisAngle:function(n,m){this.quaternion.setFromAxisAngle(n,m)
},setRotationFromEuler:function(m){this.quaternion.setFromEuler(m,!0)
},setRotationFromMatrix:function(m){this.quaternion.setFromRotationMatrix(m)
},setRotationFromQuaternion:function(m){this.quaternion.copy(m)
},rotateOnAxis:function(){var m=new c8;
return function(n,w){m.setFromAxisAngle(n,w);
this.quaternion.multiply(m);
return this
}
}(),rotateX:function(){var m=new ew(1,0,0);
return function(n){return this.rotateOnAxis(m,n)
}
}(),rotateY:function(){var m=new ew(0,1,0);
return function(n){return this.rotateOnAxis(m,n)
}
}(),rotateZ:function(){var m=new ew(0,0,1);
return function(n){return this.rotateOnAxis(m,n)
}
}(),translateOnAxis:function(){var m=new ew;
return function(n,w){m.copy(n).applyQuaternion(this.quaternion);
this.position.add(m.multiplyScalar(w));
return this
}
}(),translateX:function(){var m=new ew(1,0,0);
return function(n){return this.translateOnAxis(m,n)
}
}(),translateY:function(){var m=new ew(0,1,0);
return function(n){return this.translateOnAxis(m,n)
}
}(),translateZ:function(){var m=new ew(0,0,1);
return function(n){return this.translateOnAxis(m,n)
}
}(),localToWorld:function(m){return m.applyMatrix4(this.matrixWorld)
},worldToLocal:function(){var m=new eQ;
return function(n){return n.applyMatrix4(m.getInverse(this.matrixWorld))
}
}(),lookAt:function(){var m=new eQ;
return function(n){this.isCamera?m.lookAt(this.position,n,this.up):m.lookAt(n,this.position,this.up);
this.quaternion.setFromRotationMatrix(m)
}
}(),add:function(n){if(1<arguments.length){for(var m=0;
m<arguments.length;
m++){this.add(arguments[m])
}return this
}if(n===this){return console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this
}n&&n.isObject3D?(null!==n.parent&&n.parent.remove(n),n.parent=this,n.dispatchEvent({type:"added"}),this.children.push(n)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n);
return this
},remove:function(n){if(1<arguments.length){for(var m=0;
m<arguments.length;
m++){this.remove(arguments[m])
}return this
}m=this.children.indexOf(n);
-1!==m&&(n.parent=null,n.dispatchEvent({type:"removed"}),this.children.splice(m,1));
return this
},getObjectById:function(m){return this.getObjectByProperty("id",m)
},getObjectByName:function(m){return this.getObjectByProperty("name",m)
},getObjectByProperty:function(n,m){if(this[n]===m){return this
}for(var C=0,z=this.children.length;
C<z;
C++){var w=this.children[C].getObjectByProperty(n,m);
if(void 0!==w){return w
}}},getWorldPosition:function(m){m=m||new ew;
this.updateMatrixWorld(!0);
return m.setFromMatrixPosition(this.matrixWorld)
},getWorldQuaternion:function(){var n=new ew,m=new ew;
return function(w){w=w||new c8;
this.updateMatrixWorld(!0);
this.matrixWorld.decompose(n,w,m);
return w
}
}(),getWorldRotation:function(){var m=new c8;
return function(n){n=n||new bj;
this.getWorldQuaternion(m);
return n.setFromQuaternion(m,this.rotation.order,!1)
}
}(),getWorldScale:function(){var n=new ew,m=new c8;
return function(w){w=w||new ew;
this.updateMatrixWorld(!0);
this.matrixWorld.decompose(n,m,w);
return w
}
}(),getWorldDirection:function(){var m=new c8;
return function(n){n=n||new ew;
this.getWorldQuaternion(m);
return n.set(0,0,1).applyQuaternion(m)
}
}(),raycast:function(){},traverse:function(n){n(this);
for(var m=this.children,z=0,w=m.length;
z<w;
z++){m[z].traverse(n)
}},traverseVisible:function(n){if(!1!==this.visible){n(this);
for(var m=this.children,z=0,w=m.length;
z<w;
z++){m[z].traverseVisible(n)
}}},traverseAncestors:function(n){var m=this.parent;
null!==m&&(n(m),m.traverseAncestors(n))
},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);
this.matrixWorldNeedsUpdate=!0
},updateMatrixWorld:function(n){this.matrixAutoUpdate&&this.updateMatrix();
if(this.matrixWorldNeedsUpdate||n){null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,n=!0
}for(var m=this.children,z=0,w=m.length;
z<w;
z++){m[z].updateMatrixWorld(n)
}},toJSON:function(L){function K(N,O){void 0===N[O.uuid]&&(N[O.uuid]=O.toJSON(L));
return O.uuid
}function F(O){var N=[],Q;
for(Q in O){var P=O[Q];
delete P.metadata;
N.push(P)
}return N
}var D=void 0===L||""===L,C={};
D&&(L={geometries:{},materials:{},textures:{},images:{}},C.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});
var z={};
z.uuid=this.uuid;
z.type=this.type;
""!==this.name&&(z.name=this.name);
!0===this.castShadow&&(z.castShadow=!0);
!0===this.receiveShadow&&(z.receiveShadow=!0);
!1===this.visible&&(z.visible=!1);
"{}"!==JSON.stringify(this.userData)&&(z.userData=this.userData);
z.matrix=this.matrix.toArray();
void 0!==this.geometry&&(z.geometry=K(L.geometries,this.geometry));
if(void 0!==this.material){if(Array.isArray(this.material)){for(var w=[],n=0,m=this.material.length;
n<m;
n++){w.push(K(L.materials,this.material[n]))
}z.material=w
}else{z.material=K(L.materials,this.material)
}}if(0<this.children.length){for(z.children=[],n=0;
n<this.children.length;
n++){z.children.push(this.children[n].toJSON(L).object)
}}D&&(D=F(L.geometries),w=F(L.materials),n=F(L.textures),m=F(L.images),0<D.length&&(C.geometries=D),0<w.length&&(C.materials=w),0<n.length&&(C.textures=n),0<m.length&&(C.images=m));
C.object=z;
return C
},clone:function(m){return(new this.constructor).copy(this,m)
},copy:function(n,m){void 0===m&&(m=!0);
this.name=n.name;
this.up.copy(n.up);
this.position.copy(n.position);
this.quaternion.copy(n.quaternion);
this.scale.copy(n.scale);
this.matrix.copy(n.matrix);
this.matrixWorld.copy(n.matrixWorld);
this.matrixAutoUpdate=n.matrixAutoUpdate;
this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate;
this.layers.mask=n.layers.mask;
this.visible=n.visible;
this.castShadow=n.castShadow;
this.receiveShadow=n.receiveShadow;
this.frustumCulled=n.frustumCulled;
this.renderOrder=n.renderOrder;
this.userData=JSON.parse(JSON.stringify(n.userData));
if(!0===m){for(m=0;
m<n.children.length;
m++){this.add(n.children[m].clone())
}}return this
}});
dX.prototype=Object.assign(Object.create(ev.prototype),{constructor:dX,isCamera:!0,copy:function(n,m){ev.prototype.copy.call(this,n,m);
this.matrixWorldInverse.copy(n.matrixWorldInverse);
this.projectionMatrix.copy(n.projectionMatrix);
return this
},getWorldDirection:function(){var m=new c8;
return function(n){n=n||new ew;
this.getWorldQuaternion(m);
return n.set(0,0,-1).applyQuaternion(m)
}
}(),updateMatrixWorld:function(m){ev.prototype.updateMatrixWorld.call(this,m);
this.matrixWorldInverse.getInverse(this.matrixWorld)
},clone:function(){return(new this.constructor).copy(this)
}});
ah.prototype=Object.assign(Object.create(dX.prototype),{constructor:ah,isOrthographicCamera:!0,copy:function(n,m){dX.prototype.copy.call(this,n,m);
this.left=n.left;
this.right=n.right;
this.top=n.top;
this.bottom=n.bottom;
this.near=n.near;
this.far=n.far;
this.zoom=n.zoom;
this.view=null===n.view?null:Object.assign({},n.view);
return this
},setViewOffset:function(n,m,D,C,z,w){this.view={fullWidth:n,fullHeight:m,offsetX:D,offsetY:C,width:z,height:w};
this.updateProjectionMatrix()
},clearViewOffset:function(){this.view=null;
this.updateProjectionMatrix()
},updateProjectionMatrix:function(){var n=(this.right-this.left)/(2*this.zoom),m=(this.top-this.bottom)/(2*this.zoom),D=(this.right+this.left)/2,C=(this.top+this.bottom)/2,z=D-n,D=D+n,n=C+m,m=C-m;
if(null!==this.view){var D=this.zoom/(this.view.width/this.view.fullWidth),m=this.zoom/(this.view.height/this.view.fullHeight),w=(this.right-this.left)/this.view.width,C=(this.top-this.bottom)/this.view.height,z=z+this.view.offsetX/D*w,D=z+this.view.width/D*w,n=n-this.view.offsetY/m*C,m=n-this.view.height/m*C
}this.projectionMatrix.makeOrthographic(z,D,n,m,this.near,this.far)
},toJSON:function(m){m=ev.prototype.toJSON.call(this,m);
m.object.zoom=this.zoom;
m.object.left=this.left;
m.object.right=this.right;
m.object.top=this.top;
m.object.bottom=this.bottom;
m.object.near=this.near;
m.object.far=this.far;
null!==this.view&&(m.object.view=Object.assign({},this.view));
return m
}});
cW.prototype=Object.assign(Object.create(dX.prototype),{constructor:cW,isPerspectiveCamera:!0,copy:function(n,m){dX.prototype.copy.call(this,n,m);
this.fov=n.fov;
this.zoom=n.zoom;
this.near=n.near;
this.far=n.far;
this.focus=n.focus;
this.aspect=n.aspect;
this.view=null===n.view?null:Object.assign({},n.view);
this.filmGauge=n.filmGauge;
this.filmOffset=n.filmOffset;
return this
},setFocalLength:function(m){m=0.5*this.getFilmHeight()/m;
this.fov=2*eN.RAD2DEG*Math.atan(m);
this.updateProjectionMatrix()
},getFocalLength:function(){var m=Math.tan(0.5*eN.DEG2RAD*this.fov);
return 0.5*this.getFilmHeight()/m
},getEffectiveFOV:function(){return 2*eN.RAD2DEG*Math.atan(Math.tan(0.5*eN.DEG2RAD*this.fov)/this.zoom)
},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)
},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)
},setViewOffset:function(n,m,D,C,z,w){this.aspect=n/m;
this.view={fullWidth:n,fullHeight:m,offsetX:D,offsetY:C,width:z,height:w};
this.updateProjectionMatrix()
},clearViewOffset:function(){this.view=null;
this.updateProjectionMatrix()
},updateProjectionMatrix:function(){var n=this.near,m=n*Math.tan(0.5*eN.DEG2RAD*this.fov)/this.zoom,K=2*m,F=this.aspect*K,D=-0.5*F,C=this.view;
if(null!==C){var z=C.fullWidth,w=C.fullHeight,D=D+C.offsetX*F/z,m=m-C.offsetY*K/w,F=C.width/z*F,K=C.height/w*K
}C=this.filmOffset;
0!==C&&(D+=n*C/this.getFilmWidth());
this.projectionMatrix.makePerspective(D,D+F,m,m-K,n,this.far)
},toJSON:function(m){m=ev.prototype.toJSON.call(this,m);
m.object.fov=this.fov;
m.object.zoom=this.zoom;
m.object.near=this.near;
m.object.far=this.far;
m.object.focus=this.focus;
m.object.aspect=this.aspect;
null!==this.view&&(m.object.view=Object.assign({},this.view));
m.object.filmGauge=this.filmGauge;
m.object.filmOffset=this.filmOffset;
return m
}});
Object.assign(c2.prototype,{clone:function(){return(new this.constructor).copy(this)
},copy:function(n){this.a=n.a;
this.b=n.b;
this.c=n.c;
this.normal.copy(n.normal);
this.color.copy(n.color);
this.materialIndex=n.materialIndex;
for(var m=0,w=n.vertexNormals.length;
m<w;
m++){this.vertexNormals[m]=n.vertexNormals[m].clone()
}m=0;
for(w=n.vertexColors.length;
m<w;
m++){this.vertexColors[m]=n.vertexColors[m].clone()
}return this
}});
var cN=0;
Object.assign(eO.prototype,b5.prototype,{isGeometry:!0,applyMatrix:function(n){for(var m=(new bp).getNormalMatrix(n),D=0,C=this.vertices.length;
D<C;
D++){this.vertices[D].applyMatrix4(n)
}D=0;
for(C=this.faces.length;
D<C;
D++){n=this.faces[D];
n.normal.applyMatrix3(m).normalize();
for(var z=0,w=n.vertexNormals.length;
z<w;
z++){n.vertexNormals[z].applyMatrix3(m).normalize()
}}null!==this.boundingBox&&this.computeBoundingBox();
null!==this.boundingSphere&&this.computeBoundingSphere();
this.normalsNeedUpdate=this.verticesNeedUpdate=!0;
return this
},rotateX:function(){var m=new eQ;
return function(n){m.makeRotationX(n);
this.applyMatrix(m);
return this
}
}(),rotateY:function(){var m=new eQ;
return function(n){m.makeRotationY(n);
this.applyMatrix(m);
return this
}
}(),rotateZ:function(){var m=new eQ;
return function(n){m.makeRotationZ(n);
this.applyMatrix(m);
return this
}
}(),translate:function(){var m=new eQ;
return function(n,z,w){m.makeTranslation(n,z,w);
this.applyMatrix(m);
return this
}
}(),scale:function(){var m=new eQ;
return function(n,z,w){m.makeScale(n,z,w);
this.applyMatrix(m);
return this
}
}(),lookAt:function(){var m=new ev;
return function(n){m.lookAt(n);
m.updateMatrix();
this.applyMatrix(m.matrix)
}
}(),fromBufferGeometry:function(V){function R(aa,m,ae,ad){var ac=void 0!==L?[w[aa].clone(),w[m].clone(),w[ae].clone()]:[],ab=void 0!==K?[Q.colors[aa].clone(),Q.colors[m].clone(),Q.colors[ae].clone()]:[];
ad=new c2(aa,m,ae,ac,ab,ad);
Q.faces.push(ad);
void 0!==F&&Q.faceVertexUvs[0].push([z[aa].clone(),z[m].clone(),z[ae].clone()]);
void 0!==D&&Q.faceVertexUvs[1].push([C[aa].clone(),C[m].clone(),C[ae].clone()])
}var Q=this,P=null!==V.index?V.index.array:void 0,O=V.attributes,N=O.position.array,L=void 0!==O.normal?O.normal.array:void 0,K=void 0!==O.color?O.color.array:void 0,F=void 0!==O.uv?O.uv.array:void 0,D=void 0!==O.uv2?O.uv2.array:void 0;
void 0!==D&&(this.faceVertexUvs[1]=[]);
for(var w=[],z=[],C=[],n=O=0;
O<N.length;
O+=3,n+=2){Q.vertices.push(new ew(N[O],N[O+1],N[O+2])),void 0!==L&&w.push(new ew(L[O],L[O+1],L[O+2])),void 0!==K&&Q.colors.push(new e2(K[O],K[O+1],K[O+2])),void 0!==F&&z.push(new e0(F[n],F[n+1])),void 0!==D&&C.push(new e0(D[n],D[n+1]))
}var W=V.groups;
if(0<W.length){for(O=0;
O<W.length;
O++){for(var N=W[O],X=N.start,S=N.count,n=X,X=X+S;
n<X;
n+=3){void 0!==P?R(P[n],P[n+1],P[n+2],N.materialIndex):R(n,n+1,n+2,N.materialIndex)
}}}else{if(void 0!==P){for(O=0;
O<P.length;
O+=3){R(P[O],P[O+1],P[O+2])
}}else{for(O=0;
O<N.length/3;
O+=3){R(O,O+1,O+2)
}}}this.computeFaceNormals();
null!==V.boundingBox&&(this.boundingBox=V.boundingBox.clone());
null!==V.boundingSphere&&(this.boundingSphere=V.boundingSphere.clone());
return this
},center:function(){this.computeBoundingBox();
var m=this.boundingBox.getCenter().negate();
this.translate(m.x,m.y,m.z);
return m
},normalize:function(){this.computeBoundingSphere();
var n=this.boundingSphere.center,m=this.boundingSphere.radius,m=0===m?1:1/m,w=new eQ;
w.set(m,0,0,-m*n.x,0,m,0,-m*n.y,0,0,m,-m*n.z,0,0,0,1);
this.applyMatrix(w);
return this
},computeFaceNormals:function(){for(var n=new ew,m=new ew,F=0,D=this.faces.length;
F<D;
F++){var C=this.faces[F],z=this.vertices[C.a],w=this.vertices[C.b];
n.subVectors(this.vertices[C.c],w);
m.subVectors(z,w);
n.cross(m);
n.normalize();
C.normal.copy(n)
}},computeVertexNormals:function(L){void 0===L&&(L=!0);
var K;
var F=Array(this.vertices.length);
var D=0;
for(K=this.vertices.length;
D<K;
D++){F[D]=new ew
}if(L){var C=new ew,z=new ew;
L=0;
for(D=this.faces.length;
L<D;
L++){K=this.faces[L];
var w=this.vertices[K.a];
var n=this.vertices[K.b];
var m=this.vertices[K.c];
C.subVectors(m,n);
z.subVectors(w,n);
C.cross(z);
F[K.a].add(C);
F[K.b].add(C);
F[K.c].add(C)
}}else{for(this.computeFaceNormals(),L=0,D=this.faces.length;
L<D;
L++){K=this.faces[L],F[K.a].add(K.normal),F[K.b].add(K.normal),F[K.c].add(K.normal)
}}D=0;
for(K=this.vertices.length;
D<K;
D++){F[D].normalize()
}L=0;
for(D=this.faces.length;
L<D;
L++){K=this.faces[L],w=K.vertexNormals,3===w.length?(w[0].copy(F[K.a]),w[1].copy(F[K.b]),w[2].copy(F[K.c])):(w[0]=F[K.a].clone(),w[1]=F[K.b].clone(),w[2]=F[K.c].clone())
}0<this.faces.length&&(this.normalsNeedUpdate=!0)
},computeFlatVertexNormals:function(){var n;
this.computeFaceNormals();
var m=0;
for(n=this.faces.length;
m<n;
m++){var z=this.faces[m];
var w=z.vertexNormals;
3===w.length?(w[0].copy(z.normal),w[1].copy(z.normal),w[2].copy(z.normal)):(w[0]=z.normal.clone(),w[1]=z.normal.clone(),w[2]=z.normal.clone())
}0<this.faces.length&&(this.normalsNeedUpdate=!0)
},computeMorphNormals:function(){var L,K;
var F=0;
for(K=this.faces.length;
F<K;
F++){var D=this.faces[F];
D.__originalFaceNormal?D.__originalFaceNormal.copy(D.normal):D.__originalFaceNormal=D.normal.clone();
D.__originalVertexNormals||(D.__originalVertexNormals=[]);
var C=0;
for(L=D.vertexNormals.length;
C<L;
C++){D.__originalVertexNormals[C]?D.__originalVertexNormals[C].copy(D.vertexNormals[C]):D.__originalVertexNormals[C]=D.vertexNormals[C].clone()
}}var z=new eO;
z.faces=this.faces;
C=0;
for(L=this.morphTargets.length;
C<L;
C++){if(!this.morphNormals[C]){this.morphNormals[C]={};
this.morphNormals[C].faceNormals=[];
this.morphNormals[C].vertexNormals=[];
D=this.morphNormals[C].faceNormals;
var w=this.morphNormals[C].vertexNormals;
F=0;
for(K=this.faces.length;
F<K;
F++){var n=new ew;
var m={a:new ew,b:new ew,c:new ew};
D.push(n);
w.push(m)
}}w=this.morphNormals[C];
z.vertices=this.morphTargets[C].vertices;
z.computeFaceNormals();
z.computeVertexNormals();
F=0;
for(K=this.faces.length;
F<K;
F++){D=this.faces[F],n=w.faceNormals[F],m=w.vertexNormals[F],n.copy(D.normal),m.a.copy(D.vertexNormals[0]),m.b.copy(D.vertexNormals[1]),m.c.copy(D.vertexNormals[2])
}}F=0;
for(K=this.faces.length;
F<K;
F++){D=this.faces[F],D.normal=D.__originalFaceNormal,D.vertexNormals=D.__originalVertexNormals
}},computeLineDistances:function(){for(var n=0,m=this.vertices,z=0,w=m.length;
z<w;
z++){0<z&&(n+=m[z].distanceTo(m[z-1])),this.lineDistances[z]=n
}},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new dl);
this.boundingBox.setFromPoints(this.vertices)
},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new av);
this.boundingSphere.setFromPoints(this.vertices)
},merge:function(W,V,S){if(W&&W.isGeometry){var R,Q=this.vertices.length,P=this.vertices,O=W.vertices,N=this.faces,L=W.faces,K=this.faceVertexUvs[0],z=W.faceVertexUvs[0],C=this.colors,F=W.colors;
void 0===S&&(S=0);
void 0!==V&&(R=(new bp).getNormalMatrix(V));
W=0;
for(var w=O.length;
W<w;
W++){var D=O[W].clone();
void 0!==V&&D.applyMatrix4(V);
P.push(D)
}W=0;
for(w=F.length;
W<w;
W++){C.push(F[W].clone())
}W=0;
for(w=L.length;
W<w;
W++){var O=L[W],X=O.vertexNormals,F=O.vertexColors,C=new c2(O.a+Q,O.b+Q,O.c+Q);
C.normal.copy(O.normal);
void 0!==R&&C.normal.applyMatrix3(R).normalize();
V=0;
for(P=X.length;
V<P;
V++){D=X[V].clone(),void 0!==R&&D.applyMatrix3(R).normalize(),C.vertexNormals.push(D)
}C.color.copy(O.color);
V=0;
for(P=F.length;
V<P;
V++){D=F[V],C.vertexColors.push(D.clone())
}C.materialIndex=O.materialIndex+S;
N.push(C)
}W=0;
for(w=z.length;
W<w;
W++){if(S=z[W],R=[],void 0!==S){V=0;
for(P=S.length;
V<P;
V++){R.push(S[V].clone())
}K.push(R)
}}}else{console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",W)
}},mergeMesh:function(m){m&&m.isMesh?(m.matrixAutoUpdate&&m.updateMatrix(),this.merge(m.geometry,m.matrix)):console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",m)
},mergeVertices:function(){var n={},m=[],F=[],D=Math.pow(10,4),C;
var z=0;
for(C=this.vertices.length;
z<C;
z++){var w=this.vertices[z];
w=Math.round(w.x*D)+"_"+Math.round(w.y*D)+"_"+Math.round(w.z*D);
void 0===n[w]?(n[w]=z,m.push(this.vertices[z]),F[z]=m.length-1):F[z]=F[n[w]]
}n=[];
z=0;
for(C=this.faces.length;
z<C;
z++){for(D=this.faces[z],D.a=F[D.a],D.b=F[D.b],D.c=F[D.c],D=[D.a,D.b,D.c],w=0;
3>w;
w++){if(D[w]===D[(w+1)%3]){n.push(z);
break
}}}for(z=n.length-1;
0<=z;
z--){for(D=n[z],this.faces.splice(D,1),F=0,C=this.faceVertexUvs.length;
F<C;
F++){this.faceVertexUvs[F].splice(D,1)
}}z=this.vertices.length-m.length;
this.vertices=m;
return z
},sortFacesByMaterialIndex:function(){for(var n=this.faces,m=n.length,K=0;
K<m;
K++){n[K]._id=K
}n.sort(function(N,L){return N.materialIndex-L.materialIndex
});
var F=this.faceVertexUvs[0],D=this.faceVertexUvs[1],C,z;
F&&F.length===m&&(C=[]);
D&&D.length===m&&(z=[]);
for(K=0;
K<m;
K++){var w=n[K]._id;
C&&C.push(F[w]);
z&&z.push(D[w])
}C&&(this.faceVertexUvs[0]=C);
z&&(this.faceVertexUvs[1]=z)
},toJSON:function(){function ae(n,m,af){return af?n|1<<m:n&~(1<<m)
}function ad(n){var m=n.x.toString()+n.y.toString()+n.z.toString();
if(void 0!==R[m]){return R[m]
}R[m]=S.length/3;
S.push(n.x,n.y,n.z);
return R[m]
}function ac(n){var m=n.r.toString()+n.g.toString()+n.b.toString();
if(void 0!==O[m]){return O[m]
}O[m]=L.length;
L.push(n.getHex());
return O[m]
}function ab(n){var m=n.x.toString()+n.y.toString();
if(void 0!==F[m]){return F[m]
}F[m]=Q.length/2;
Q.push(n.x,n.y);
return F[m]
}var aa={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};
aa.uuid=this.uuid;
aa.type=this.type;
""!==this.name&&(aa.name=this.name);
if(void 0!==this.parameters){var X=this.parameters,W;
for(W in X){void 0!==X[W]&&(aa[W]=X[W])
}return aa
}X=[];
for(W=0;
W<this.vertices.length;
W++){var V=this.vertices[W];
X.push(V.x,V.y,V.z)
}var V=[],S=[],R={},L=[],O={},Q=[],F={};
for(W=0;
W<this.faces.length;
W++){var P=this.faces[W],D=void 0!==this.faceVertexUvs[0][W],C=0<P.normal.length(),w=0<P.vertexNormals.length,N=1!==P.color.r||1!==P.color.g||1!==P.color.b,z=0<P.vertexColors.length,K=0,K=ae(K,0,0),K=ae(K,1,!0),K=ae(K,2,!1),K=ae(K,3,D),K=ae(K,4,C),K=ae(K,5,w),K=ae(K,6,N),K=ae(K,7,z);
V.push(K);
V.push(P.a,P.b,P.c);
V.push(P.materialIndex);
D&&(D=this.faceVertexUvs[0][W],V.push(ab(D[0]),ab(D[1]),ab(D[2])));
C&&V.push(ad(P.normal));
w&&(C=P.vertexNormals,V.push(ad(C[0]),ad(C[1]),ad(C[2])));
N&&V.push(ac(P.color));
z&&(P=P.vertexColors,V.push(ac(P[0]),ac(P[1]),ac(P[2])))
}aa.data={};
aa.data.vertices=X;
aa.data.normals=S;
0<L.length&&(aa.data.colors=L);
0<Q.length&&(aa.data.uvs=[Q]);
aa.data.faces=V;
return aa
},clone:function(){return(new eO).copy(this)
},copy:function(N){var L,K,F;
this.vertices=[];
this.colors=[];
this.faces=[];
this.faceVertexUvs=[[]];
this.morphTargets=[];
this.morphNormals=[];
this.skinWeights=[];
this.skinIndices=[];
this.lineDistances=[];
this.boundingSphere=this.boundingBox=null;
this.name=N.name;
var D=N.vertices;
var C=0;
for(L=D.length;
C<L;
C++){this.vertices.push(D[C].clone())
}D=N.colors;
C=0;
for(L=D.length;
C<L;
C++){this.colors.push(D[C].clone())
}D=N.faces;
C=0;
for(L=D.length;
C<L;
C++){this.faces.push(D[C].clone())
}C=0;
for(L=N.faceVertexUvs.length;
C<L;
C++){var z=N.faceVertexUvs[C];
void 0===this.faceVertexUvs[C]&&(this.faceVertexUvs[C]=[]);
D=0;
for(K=z.length;
D<K;
D++){var w=z[D],n=[];
var m=0;
for(F=w.length;
m<F;
m++){n.push(w[m].clone())
}this.faceVertexUvs[C].push(n)
}}m=N.morphTargets;
C=0;
for(L=m.length;
C<L;
C++){F={};
F.name=m[C].name;
if(void 0!==m[C].vertices){for(F.vertices=[],D=0,K=m[C].vertices.length;
D<K;
D++){F.vertices.push(m[C].vertices[D].clone())
}}if(void 0!==m[C].normals){for(F.normals=[],D=0,K=m[C].normals.length;
D<K;
D++){F.normals.push(m[C].normals[D].clone())
}}this.morphTargets.push(F)
}m=N.morphNormals;
C=0;
for(L=m.length;
C<L;
C++){F={};
if(void 0!==m[C].vertexNormals){for(F.vertexNormals=[],D=0,K=m[C].vertexNormals.length;
D<K;
D++){z=m[C].vertexNormals[D],w={},w.a=z.a.clone(),w.b=z.b.clone(),w.c=z.c.clone(),F.vertexNormals.push(w)
}}if(void 0!==m[C].faceNormals){for(F.faceNormals=[],D=0,K=m[C].faceNormals.length;
D<K;
D++){F.faceNormals.push(m[C].faceNormals[D].clone())
}}this.morphNormals.push(F)
}D=N.skinWeights;
C=0;
for(L=D.length;
C<L;
C++){this.skinWeights.push(D[C].clone())
}D=N.skinIndices;
C=0;
for(L=D.length;
C<L;
C++){this.skinIndices.push(D[C].clone())
}D=N.lineDistances;
C=0;
for(L=D.length;
C<L;
C++){this.lineDistances.push(D[C])
}C=N.boundingBox;
null!==C&&(this.boundingBox=C.clone());
C=N.boundingSphere;
null!==C&&(this.boundingSphere=C.clone());
this.elementsNeedUpdate=N.elementsNeedUpdate;
this.verticesNeedUpdate=N.verticesNeedUpdate;
this.uvsNeedUpdate=N.uvsNeedUpdate;
this.normalsNeedUpdate=N.normalsNeedUpdate;
this.colorsNeedUpdate=N.colorsNeedUpdate;
this.lineDistancesNeedUpdate=N.lineDistancesNeedUpdate;
this.groupsNeedUpdate=N.groupsNeedUpdate;
return this
},dispose:function(){this.dispatchEvent({type:"dispose"})
}});
Object.defineProperty(eT.prototype,"needsUpdate",{set:function(m){!0===m&&this.version++
}});
Object.assign(eT.prototype,{isBufferAttribute:!0,setArray:function(m){if(Array.isArray(m)){throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.")
}this.count=void 0!==m?m.length/this.itemSize:0;
this.array=m
},setDynamic:function(m){this.dynamic=m;
return this
},copy:function(m){this.array=new m.array.constructor(m.array);
this.itemSize=m.itemSize;
this.count=m.count;
this.normalized=m.normalized;
this.dynamic=m.dynamic;
return this
},copyAt:function(n,m,C){n*=this.itemSize;
C*=m.itemSize;
for(var z=0,w=this.itemSize;
z<w;
z++){this.array[n+z]=m.array[C+z]
}return this
},copyArray:function(m){this.array.set(m);
return this
},copyColorsArray:function(n){for(var m=this.array,D=0,C=0,z=n.length;
C<z;
C++){var w=n[C];
void 0===w&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",C),w=new e2);
m[D++]=w.r;
m[D++]=w.g;
m[D++]=w.b
}return this
},copyIndicesArray:function(n){for(var m=this.array,D=0,C=0,z=n.length;
C<z;
C++){var w=n[C];
m[D++]=w.a;
m[D++]=w.b;
m[D++]=w.c
}return this
},copyVector2sArray:function(n){for(var m=this.array,D=0,C=0,z=n.length;
C<z;
C++){var w=n[C];
void 0===w&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",C),w=new e0);
m[D++]=w.x;
m[D++]=w.y
}return this
},copyVector3sArray:function(n){for(var m=this.array,D=0,C=0,z=n.length;
C<z;
C++){var w=n[C];
void 0===w&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",C),w=new ew);
m[D++]=w.x;
m[D++]=w.y;
m[D++]=w.z
}return this
},copyVector4sArray:function(n){for(var m=this.array,D=0,C=0,z=n.length;
C<z;
C++){var w=n[C];
void 0===w&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",C),w=new eM);
m[D++]=w.x;
m[D++]=w.y;
m[D++]=w.z;
m[D++]=w.w
}return this
},set:function(n,m){void 0===m&&(m=0);
this.array.set(n,m);
return this
},getX:function(m){return this.array[m*this.itemSize]
},setX:function(n,m){this.array[n*this.itemSize]=m;
return this
},getY:function(m){return this.array[m*this.itemSize+1]
},setY:function(n,m){this.array[n*this.itemSize+1]=m;
return this
},getZ:function(m){return this.array[m*this.itemSize+2]
},setZ:function(n,m){this.array[n*this.itemSize+2]=m;
return this
},getW:function(m){return this.array[m*this.itemSize+3]
},setW:function(n,m){this.array[n*this.itemSize+3]=m;
return this
},setXY:function(n,m,w){n*=this.itemSize;
this.array[n+0]=m;
this.array[n+1]=w;
return this
},setXYZ:function(n,m,z,w){n*=this.itemSize;
this.array[n+0]=m;
this.array[n+1]=z;
this.array[n+2]=w;
return this
},setXYZW:function(n,m,C,z,w){n*=this.itemSize;
this.array[n+0]=m;
this.array[n+1]=C;
this.array[n+2]=z;
this.array[n+3]=w;
return this
},onUpload:function(m){this.onUploadCallback=m;
return this
},clone:function(){return(new this.constructor(this.array,this.itemSize)).copy(this)
}});
bz.prototype=Object.create(eT.prototype);
bz.prototype.constructor=bz;
bn.prototype=Object.create(eT.prototype);
bn.prototype.constructor=bn;
a5.prototype=Object.create(eT.prototype);
a5.prototype.constructor=a5;
aM.prototype=Object.create(eT.prototype);
aM.prototype.constructor=aM;
em.prototype=Object.create(eT.prototype);
em.prototype.constructor=em;
aA.prototype=Object.create(eT.prototype);
aA.prototype.constructor=aA;
d3.prototype=Object.create(eT.prototype);
d3.prototype.constructor=d3;
es.prototype=Object.create(eT.prototype);
es.prototype.constructor=es;
am.prototype=Object.create(eT.prototype);
am.prototype.constructor=am;
Object.assign(d6.prototype,{computeGroups:function(n){var m=[],D=void 0;
n=n.faces;
for(var C=0;
C<n.length;
C++){var z=n[C];
if(z.materialIndex!==D){D=z.materialIndex;
void 0!==w&&(w.count=3*C-w.start,m.push(w));
var w={start:3*C,materialIndex:D}
}}void 0!==w&&(w.count=3*C-w.start,m.push(w));
this.groups=m
},fromGeometry:function(ad){var ac=ad.faces,ab=ad.vertices,aa=ad.faceVertexUvs,X=aa[0]&&0<aa[0].length,W=aa[1]&&0<aa[1].length,V=ad.morphTargets,S=V.length;
if(0<S){var R=[];
for(var Q=0;
Q<S;
Q++){R[Q]=[]
}this.morphTargets.position=R
}var K=ad.morphNormals,N=K.length;
if(0<N){var P=[];
for(Q=0;
Q<N;
Q++){P[Q]=[]
}this.morphTargets.normal=P
}for(var O=ad.skinIndices,D=ad.skinWeights,F=O.length===ab.length,C=D.length===ab.length,Q=0;
Q<ac.length;
Q++){var w=ac[Q];
this.vertices.push(ab[w.a],ab[w.b],ab[w.c]);
var L=w.vertexNormals;
3===L.length?this.normals.push(L[0],L[1],L[2]):(L=w.normal,this.normals.push(L,L,L));
L=w.vertexColors;
3===L.length?this.colors.push(L[0],L[1],L[2]):(L=w.color,this.colors.push(L,L,L));
!0===X&&(L=aa[0][Q],void 0!==L?this.uvs.push(L[0],L[1],L[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",Q),this.uvs.push(new e0,new e0,new e0)));
!0===W&&(L=aa[1][Q],void 0!==L?this.uvs2.push(L[0],L[1],L[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",Q),this.uvs2.push(new e0,new e0,new e0)));
for(L=0;
L<S;
L++){var z=V[L].vertices;
R[L].push(z[w.a],z[w.b],z[w.c])
}for(L=0;
L<N;
L++){z=K[L].vertexNormals[Q],P[L].push(z.a,z.b,z.c)
}F&&this.skinIndices.push(O[w.a],O[w.b],O[w.c]);
C&&this.skinWeights.push(D[w.a],D[w.b],D[w.c])
}this.computeGroups(ad);
this.verticesNeedUpdate=ad.verticesNeedUpdate;
this.normalsNeedUpdate=ad.normalsNeedUpdate;
this.colorsNeedUpdate=ad.colorsNeedUpdate;
this.uvsNeedUpdate=ad.uvsNeedUpdate;
this.groupsNeedUpdate=ad.groupsNeedUpdate;
return this
}});
eX.MaxIndex=65535;
Object.assign(eX.prototype,b5.prototype,{isBufferGeometry:!0,getIndex:function(){return this.index
},setIndex:function(m){Array.isArray(m)?this.index=new (65535<cC(m)?d3:em)(m,1):this.index=m
},addAttribute:function(n,m,w){if(m&&m.isBufferAttribute||m&&m.isInterleavedBufferAttribute){if("index"===n){console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(m)
}else{return this.attributes[n]=m,this
}}else{console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(n,new eT(m,w))
}},getAttribute:function(m){return this.attributes[m]
},removeAttribute:function(m){delete this.attributes[m];
return this
},addGroup:function(n,m,w){this.groups.push({start:n,count:m,materialIndex:void 0!==w?w:0})
},clearGroups:function(){this.groups=[]
},setDrawRange:function(n,m){this.drawRange.start=n;
this.drawRange.count=m
},applyMatrix:function(n){var m=this.attributes.position;
void 0!==m&&(n.applyToBufferAttribute(m),m.needsUpdate=!0);
m=this.attributes.normal;
void 0!==m&&((new bp).getNormalMatrix(n).applyToBufferAttribute(m),m.needsUpdate=!0);
null!==this.boundingBox&&this.computeBoundingBox();
null!==this.boundingSphere&&this.computeBoundingSphere();
return this
},rotateX:function(){var m=new eQ;
return function(n){m.makeRotationX(n);
this.applyMatrix(m);
return this
}
}(),rotateY:function(){var m=new eQ;
return function(n){m.makeRotationY(n);
this.applyMatrix(m);
return this
}
}(),rotateZ:function(){var m=new eQ;
return function(n){m.makeRotationZ(n);
this.applyMatrix(m);
return this
}
}(),translate:function(){var m=new eQ;
return function(n,z,w){m.makeTranslation(n,z,w);
this.applyMatrix(m);
return this
}
}(),scale:function(){var m=new eQ;
return function(n,z,w){m.makeScale(n,z,w);
this.applyMatrix(m);
return this
}
}(),lookAt:function(){var m=new ev;
return function(n){m.lookAt(n);
m.updateMatrix();
this.applyMatrix(m.matrix)
}
}(),center:function(){this.computeBoundingBox();
var m=this.boundingBox.getCenter().negate();
this.translate(m.x,m.y,m.z);
return m
},setFromObject:function(n){var m=n.geometry;
if(n.isPoints||n.isLine){n=new es(3*m.vertices.length,3);
var w=new es(3*m.colors.length,3);
this.addAttribute("position",n.copyVector3sArray(m.vertices));
this.addAttribute("color",w.copyColorsArray(m.colors));
m.lineDistances&&m.lineDistances.length===m.vertices.length&&(n=new es(m.lineDistances.length,1),this.addAttribute("lineDistance",n.copyArray(m.lineDistances)));
null!==m.boundingSphere&&(this.boundingSphere=m.boundingSphere.clone());
null!==m.boundingBox&&(this.boundingBox=m.boundingBox.clone())
}else{n.isMesh&&m&&m.isGeometry&&this.fromGeometry(m)
}return this
},updateFromObject:function(n){var m=n.geometry;
if(n.isMesh){var w=m.__directGeometry;
!0===m.elementsNeedUpdate&&(w=void 0,m.elementsNeedUpdate=!1);
if(void 0===w){return this.fromGeometry(m)
}w.verticesNeedUpdate=m.verticesNeedUpdate;
w.normalsNeedUpdate=m.normalsNeedUpdate;
w.colorsNeedUpdate=m.colorsNeedUpdate;
w.uvsNeedUpdate=m.uvsNeedUpdate;
w.groupsNeedUpdate=m.groupsNeedUpdate;
m.verticesNeedUpdate=!1;
m.normalsNeedUpdate=!1;
m.colorsNeedUpdate=!1;
m.uvsNeedUpdate=!1;
m.groupsNeedUpdate=!1;
m=w
}!0===m.verticesNeedUpdate&&(w=this.attributes.position,void 0!==w&&(w.copyVector3sArray(m.vertices),w.needsUpdate=!0),m.verticesNeedUpdate=!1);
!0===m.normalsNeedUpdate&&(w=this.attributes.normal,void 0!==w&&(w.copyVector3sArray(m.normals),w.needsUpdate=!0),m.normalsNeedUpdate=!1);
!0===m.colorsNeedUpdate&&(w=this.attributes.color,void 0!==w&&(w.copyColorsArray(m.colors),w.needsUpdate=!0),m.colorsNeedUpdate=!1);
m.uvsNeedUpdate&&(w=this.attributes.uv,void 0!==w&&(w.copyVector2sArray(m.uvs),w.needsUpdate=!0),m.uvsNeedUpdate=!1);
m.lineDistancesNeedUpdate&&(w=this.attributes.lineDistance,void 0!==w&&(w.copyArray(m.lineDistances),w.needsUpdate=!0),m.lineDistancesNeedUpdate=!1);
m.groupsNeedUpdate&&(m.computeGroups(n.geometry),this.groups=m.groups,m.groupsNeedUpdate=!1);
return this
},fromGeometry:function(m){m.__directGeometry=(new d6).fromGeometry(m);
return this.fromDirectGeometry(m.__directGeometry)
},fromDirectGeometry:function(n){var m=new Float32Array(3*n.vertices.length);
this.addAttribute("position",(new eT(m,3)).copyVector3sArray(n.vertices));
0<n.normals.length&&(m=new Float32Array(3*n.normals.length),this.addAttribute("normal",(new eT(m,3)).copyVector3sArray(n.normals)));
0<n.colors.length&&(m=new Float32Array(3*n.colors.length),this.addAttribute("color",(new eT(m,3)).copyColorsArray(n.colors)));
0<n.uvs.length&&(m=new Float32Array(2*n.uvs.length),this.addAttribute("uv",(new eT(m,2)).copyVector2sArray(n.uvs)));
0<n.uvs2.length&&(m=new Float32Array(2*n.uvs2.length),this.addAttribute("uv2",(new eT(m,2)).copyVector2sArray(n.uvs2)));
0<n.indices.length&&(m=new (65535<cC(n.indices)?Uint32Array:Uint16Array)(3*n.indices.length),this.setIndex((new eT(m,1)).copyIndicesArray(n.indices)));
this.groups=n.groups;
for(var K in n.morphTargets){for(var m=[],F=n.morphTargets[K],D=0,C=F.length;
D<C;
D++){var z=F[D],w=new es(3*z.length,3);
m.push(w.copyVector3sArray(z))
}this.morphAttributes[K]=m
}0<n.skinIndices.length&&(K=new es(4*n.skinIndices.length,4),this.addAttribute("skinIndex",K.copyVector4sArray(n.skinIndices)));
0<n.skinWeights.length&&(K=new es(4*n.skinWeights.length,4),this.addAttribute("skinWeight",K.copyVector4sArray(n.skinWeights)));
null!==n.boundingSphere&&(this.boundingSphere=n.boundingSphere.clone());
null!==n.boundingBox&&(this.boundingBox=n.boundingBox.clone());
return this
},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new dl);
var m=this.attributes.position;
void 0!==m?this.boundingBox.setFromBufferAttribute(m):this.boundingBox.makeEmpty();
(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)
},computeBoundingSphere:function(){var n=new dl,m=new ew;
return function(){null===this.boundingSphere&&(this.boundingSphere=new av);
var F=this.attributes.position;
if(F){var D=this.boundingSphere.center;
n.setFromBufferAttribute(F);
n.getCenter(D);
for(var C=0,z=0,w=F.count;
z<w;
z++){m.x=F.getX(z),m.y=F.getY(z),m.z=F.getZ(z),C=Math.max(C,D.distanceToSquared(m))
}this.boundingSphere.radius=Math.sqrt(C);
isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)
}}
}(),computeFaceNormals:function(){},computeVertexNormals:function(){var V=this.index,R=this.attributes,Q=this.groups;
if(R.position){var P=R.position.array;
if(void 0===R.normal){this.addAttribute("normal",new eT(new Float32Array(P.length),3))
}else{for(var O=R.normal.array,N=0,L=O.length;
N<L;
N++){O[N]=0
}}var O=R.normal.array,K=new ew,F=new ew,D=new ew,w=new ew,z=new ew;
if(V){V=V.array;
0===Q.length&&this.addGroup(0,V.length);
for(var C=0,n=Q.length;
C<n;
++C){N=Q[C];
L=N.start;
var W=N.count;
N=L;
for(L+=W;
N<L;
N+=3){W=3*V[N+0];
var X=3*V[N+1];
var S=3*V[N+2];
K.fromArray(P,W);
F.fromArray(P,X);
D.fromArray(P,S);
w.subVectors(D,F);
z.subVectors(K,F);
w.cross(z);
O[W]+=w.x;
O[W+1]+=w.y;
O[W+2]+=w.z;
O[X]+=w.x;
O[X+1]+=w.y;
O[X+2]+=w.z;
O[S]+=w.x;
O[S+1]+=w.y;
O[S+2]+=w.z
}}}else{for(N=0,L=P.length;
N<L;
N+=9){K.fromArray(P,N),F.fromArray(P,N+3),D.fromArray(P,N+6),w.subVectors(D,F),z.subVectors(K,F),w.cross(z),O[N]=w.x,O[N+1]=w.y,O[N+2]=w.z,O[N+3]=w.x,O[N+4]=w.y,O[N+5]=w.z,O[N+6]=w.x,O[N+7]=w.y,O[N+8]=w.z
}}this.normalizeNormals();
R.normal.needsUpdate=!0
}},merge:function(n,m){if(n&&n.isBufferGeometry){void 0===m&&(m=0);
var K=this.attributes,F;
for(F in K){if(void 0!==n.attributes[F]){for(var D=K[F].array,C=n.attributes[F],z=C.array,w=0,C=C.itemSize*m;
w<z.length;
w++,C++){D[C]=z[w]
}}}return this
}console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",n)
},normalizeNormals:function(){var m=new ew;
return function(){for(var n=this.attributes.normal,z=0,w=n.count;
z<w;
z++){m.x=n.getX(z),m.y=n.getY(z),m.z=n.getZ(z),m.normalize(),n.setXYZ(z,m.x,m.y,m.z)
}}
}(),toNonIndexed:function(){if(null===this.index){return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this
}var Q=new eX,P=this.index.array,O=this.attributes,N;
for(N in O){for(var L=O[N],K=L.array,L=L.itemSize,F=new K.constructor(P.length*L),D,C=0,z=0,n=P.length;
z<n;
z++){D=P[z]*L;
for(var w=0;
w<L;
w++){F[C++]=K[D++]
}}Q.addAttribute(N,new eT(F,L))
}return Q
},toJSON:function(){var n={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};
n.uuid=this.uuid;
n.type=this.type;
""!==this.name&&(n.name=this.name);
if(void 0!==this.parameters){var m=this.parameters;
for(var C in m){void 0!==m[C]&&(n[C]=m[C])
}return n
}n.data={attributes:{}};
var z=this.index;
null!==z&&(m=Array.prototype.slice.call(z.array),n.data.index={type:z.array.constructor.name,array:m});
z=this.attributes;
for(C in z){var w=z[C];
m=Array.prototype.slice.call(w.array);
n.data.attributes[C]={itemSize:w.itemSize,type:w.array.constructor.name,array:m,normalized:w.normalized}
}C=this.groups;
0<C.length&&(n.data.groups=JSON.parse(JSON.stringify(C)));
C=this.boundingSphere;
null!==C&&(n.data.boundingSphere={center:C.center.toArray(),radius:C.radius});
return n
},clone:function(){return(new eX).copy(this)
},copy:function(n){var m;
this.index=null;
this.attributes={};
this.morphAttributes={};
this.groups=[];
this.boundingSphere=this.boundingBox=null;
this.name=n.name;
var F=n.index;
null!==F&&this.setIndex(F.clone());
F=n.attributes;
for(w in F){this.addAttribute(w,F[w].clone())
}var D=n.morphAttributes;
for(w in D){var C=[],z=D[w];
F=0;
for(m=z.length;
F<m;
F++){C.push(z[F].clone())
}this.morphAttributes[w]=C
}var w=n.groups;
F=0;
for(m=w.length;
F<m;
F++){D=w[F],this.addGroup(D.start,D.count,D.materialIndex)
}w=n.boundingBox;
null!==w&&(this.boundingBox=w.clone());
w=n.boundingSphere;
null!==w&&(this.boundingSphere=w.clone());
this.drawRange.start=n.drawRange.start;
this.drawRange.count=n.drawRange.count;
return this
},dispose:function(){this.dispatchEvent({type:"dispose"})
}});
B.prototype=Object.create(eO.prototype);
B.prototype.constructor=B;
dQ.prototype=Object.create(eX.prototype);
dQ.prototype.constructor=dQ;
J.prototype=Object.create(eO.prototype);
J.prototype.constructor=J;
dE.prototype=Object.create(eX.prototype);
dE.prototype.constructor=dE;
aO.prototype=Object.create(eP.prototype);
aO.prototype.constructor=aO;
aO.prototype.isMeshBasicMaterial=!0;
aO.prototype.copy=function(m){eP.prototype.copy.call(this,m);
this.color.copy(m.color);
this.map=m.map;
this.lightMap=m.lightMap;
this.lightMapIntensity=m.lightMapIntensity;
this.aoMap=m.aoMap;
this.aoMapIntensity=m.aoMapIntensity;
this.specularMap=m.specularMap;
this.alphaMap=m.alphaMap;
this.envMap=m.envMap;
this.combine=m.combine;
this.reflectivity=m.reflectivity;
this.refractionRatio=m.refractionRatio;
this.wireframe=m.wireframe;
this.wireframeLinewidth=m.wireframeLinewidth;
this.wireframeLinecap=m.wireframeLinecap;
this.wireframeLinejoin=m.wireframeLinejoin;
this.skinning=m.skinning;
this.morphTargets=m.morphTargets;
return this
};
Object.assign(ds.prototype,{set:function(n,m){this.origin.copy(n);
this.direction.copy(m);
return this
},clone:function(){return(new this.constructor).copy(this)
},copy:function(m){this.origin.copy(m.origin);
this.direction.copy(m.direction);
return this
},at:function(n,m){return(m||new ew).copy(this.direction).multiplyScalar(n).add(this.origin)
},lookAt:function(m){this.direction.copy(m).sub(this.origin).normalize();
return this
},recast:function(){var m=new ew;
return function(n){this.origin.copy(this.at(n,m));
return this
}
}(),closestPointToPoint:function(n,m){m=m||new ew;
m.subVectors(n,this.origin);
n=m.dot(this.direction);
return 0>n?m.copy(this.origin):m.copy(this.direction).multiplyScalar(n).add(this.origin)
},distanceToPoint:function(m){return Math.sqrt(this.distanceSqToPoint(m))
},distanceSqToPoint:function(){var m=new ew;
return function(n){var w=m.subVectors(n,this.origin).dot(this.direction);
if(0>w){return this.origin.distanceToSquared(n)
}m.copy(this.direction).multiplyScalar(w).add(this.origin);
return m.distanceToSquared(n)
}
}(),distanceSqToSegment:function(){var n=new ew,m=new ew,w=new ew;
return function(Q,P,O,N){n.copy(Q).add(P).multiplyScalar(0.5);
m.copy(P).sub(Q).normalize();
w.copy(this.origin).sub(n);
var L=0.5*Q.distanceTo(P),K=-this.direction.dot(m),F=w.dot(this.direction),z=-w.dot(m),D=w.lengthSq(),R=Math.abs(1-K*K);
if(0<R){Q=K*z-F;
P=K*F-z;
var C=L*R;
0<=Q?P>=-C?P<=C?(L=1/R,Q*=L,P*=L,K=Q*(Q+K*P+2*F)+P*(K*Q+P+2*z)+D):(P=L,Q=Math.max(0,-(K*P+F)),K=-Q*Q+P*(P+2*z)+D):(P=-L,Q=Math.max(0,-(K*P+F)),K=-Q*Q+P*(P+2*z)+D):P<=-C?(Q=Math.max(0,-(-K*L+F)),P=0<Q?-L:Math.min(Math.max(-L,-z),L),K=-Q*Q+P*(P+2*z)+D):P<=C?(Q=0,P=Math.min(Math.max(-L,-z),L),K=P*(P+2*z)+D):(Q=Math.max(0,-(K*L+F)),P=0<Q?L:Math.min(Math.max(-L,-z),L),K=-Q*Q+P*(P+2*z)+D)
}else{P=0<K?-L:L,Q=Math.max(0,-(K*P+F)),K=-Q*Q+P*(P+2*z)+D
}O&&O.copy(this.direction).multiplyScalar(Q).add(this.origin);
N&&N.copy(m).multiplyScalar(P).add(n);
return K
}
}(),intersectSphere:function(){var m=new ew;
return function(n,C){m.subVectors(n.center,this.origin);
var z=m.dot(this.direction),w=m.dot(m)-z*z;
n=n.radius*n.radius;
if(w>n){return null
}n=Math.sqrt(n-w);
w=z-n;
z+=n;
return 0>w&&0>z?null:0>w?this.at(z,C):this.at(w,C)
}
}(),intersectsSphere:function(m){return this.distanceToPoint(m.center)<=m.radius
},distanceToPlane:function(n){var m=n.normal.dot(this.direction);
if(0===m){return 0===n.distanceToPoint(this.origin)?0:null
}n=-(this.origin.dot(n.normal)+n.constant)/m;
return 0<=n?n:null
},intersectPlane:function(n,m){n=this.distanceToPlane(n);
return null===n?null:this.at(n,m)
},intersectsPlane:function(n){var m=n.distanceToPoint(this.origin);
return 0===m||0>n.normal.dot(this.direction)*m?!0:!1
},intersectBox:function(n,m){var K=1/this.direction.x;
var F=1/this.direction.y;
var D=1/this.direction.z,C=this.origin;
if(0<=K){var z=(n.min.x-C.x)*K;
K*=n.max.x-C.x
}else{z=(n.max.x-C.x)*K,K*=n.min.x-C.x
}if(0<=F){var w=(n.min.y-C.y)*F;
F*=n.max.y-C.y
}else{w=(n.max.y-C.y)*F,F*=n.min.y-C.y
}if(z>F||w>K){return null
}if(w>z||z!==z){z=w
}if(F<K||K!==K){K=F
}0<=D?(w=(n.min.z-C.z)*D,n=(n.max.z-C.z)*D):(w=(n.max.z-C.z)*D,n=(n.min.z-C.z)*D);
if(z>n||w>K){return null
}if(w>z||z!==z){z=w
}if(n<K||K!==K){K=n
}return 0>K?null:this.at(0<=z?z:K,m)
},intersectsBox:function(){var m=new ew;
return function(n){return null!==this.intersectBox(n,m)
}
}(),intersectTriangle:function(){var n=new ew,m=new ew,z=new ew,w=new ew;
return function(L,K,F,D,C){m.subVectors(K,L);
z.subVectors(F,L);
w.crossVectors(m,z);
K=this.direction.dot(w);
if(0<K){if(D){return null
}D=1
}else{if(0>K){D=-1,K=-K
}else{return null
}}n.subVectors(this.origin,L);
L=D*this.direction.dot(z.crossVectors(n,z));
if(0>L){return null
}F=D*this.direction.dot(m.cross(n));
if(0>F||L+F>K){return null
}L=-D*n.dot(w);
return 0>L?null:this.at(L/K,C)
}
}(),applyMatrix4:function(m){this.origin.applyMatrix4(m);
this.direction.transformDirection(m);
return this
},equals:function(m){return m.origin.equals(this.origin)&&m.direction.equals(this.direction)
}});
Object.assign(k.prototype,{set:function(n,m){this.start.copy(n);
this.end.copy(m);
return this
},clone:function(){return(new this.constructor).copy(this)
},copy:function(m){this.start.copy(m.start);
this.end.copy(m.end);
return this
},getCenter:function(m){return(m||new ew).addVectors(this.start,this.end).multiplyScalar(0.5)
},delta:function(m){return(m||new ew).subVectors(this.end,this.start)
},distanceSq:function(){return this.start.distanceToSquared(this.end)
},distance:function(){return this.start.distanceTo(this.end)
},at:function(n,m){m=m||new ew;
return this.delta(m).multiplyScalar(n).add(this.start)
},closestPointToPointParameter:function(){var n=new ew,m=new ew;
return function(z,w){n.subVectors(z,this.start);
m.subVectors(this.end,this.start);
z=m.dot(m);
z=m.dot(n)/z;
w&&(z=eN.clamp(z,0,1));
return z
}
}(),closestPointToPoint:function(n,m,w){n=this.closestPointToPointParameter(n,m);
w=w||new ew;
return this.delta(w).multiplyScalar(n).add(this.start)
},applyMatrix4:function(m){this.start.applyMatrix4(m);
this.end.applyMatrix4(m);
return this
},equals:function(m){return m.start.equals(this.start)&&m.end.equals(this.end)
}});
Object.assign(cQ,{normal:function(){var m=new ew;
return function(n,C,z,w){w=w||new ew;
w.subVectors(z,C);
m.subVectors(n,C);
w.cross(m);
n=w.lengthSq();
return 0<n?w.multiplyScalar(1/Math.sqrt(n)):w.set(0,0,0)
}
}(),barycoordFromPoint:function(){var n=new ew,m=new ew,w=new ew;
return function(N,L,K,F,D){n.subVectors(F,L);
m.subVectors(K,L);
w.subVectors(N,L);
N=n.dot(n);
L=n.dot(m);
K=n.dot(w);
var C=m.dot(m);
F=m.dot(w);
var z=N*C-L*L;
D=D||new ew;
if(0===z){return D.set(-2,-1,-1)
}z=1/z;
C=(C*K-L*F)*z;
N=(N*F-L*K)*z;
return D.set(1-C-N,N,C)
}
}(),containsPoint:function(){var m=new ew;
return function(n,C,z,w){n=cQ.barycoordFromPoint(n,C,z,w,m);
return 0<=n.x&&0<=n.y&&1>=n.x+n.y
}
}()});
Object.assign(cQ.prototype,{set:function(n,m,w){this.a.copy(n);
this.b.copy(m);
this.c.copy(w);
return this
},setFromPointsAndIndices:function(n,m,z,w){this.a.copy(n[m]);
this.b.copy(n[z]);
this.c.copy(n[w]);
return this
},clone:function(){return(new this.constructor).copy(this)
},copy:function(m){this.a.copy(m.a);
this.b.copy(m.b);
this.c.copy(m.c);
return this
},area:function(){var n=new ew,m=new ew;
return function(){n.subVectors(this.c,this.b);
m.subVectors(this.a,this.b);
return 0.5*n.cross(m).length()
}
}(),midpoint:function(m){return(m||new ew).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)
},normal:function(m){return cQ.normal(this.a,this.b,this.c,m)
},plane:function(m){return(m||new fl).setFromCoplanarPoints(this.a,this.b,this.c)
},barycoordFromPoint:function(n,m){return cQ.barycoordFromPoint(n,this.a,this.b,this.c,m)
},containsPoint:function(m){return cQ.containsPoint(m,this.a,this.b,this.c)
},closestPointToPoint:function(){var n=new fl,m=[new k,new k,new k],z=new ew,w=new ew;
return function(K,F){F=F||new ew;
var D=Infinity;
n.setFromCoplanarPoints(this.a,this.b,this.c);
n.projectPoint(K,z);
if(!0===this.containsPoint(z)){F.copy(z)
}else{for(m[0].set(this.a,this.b),m[1].set(this.b,this.c),m[2].set(this.c,this.a),K=0;
K<m.length;
K++){m[K].closestPointToPoint(z,!0,w);
var C=z.distanceToSquared(w);
C<D&&(D=C,F.copy(w))
}}return F
}
}(),equals:function(m){return m.a.equals(this.a)&&m.b.equals(this.b)&&m.c.equals(this.c)
}});
dR.prototype=Object.assign(Object.create(ev.prototype),{constructor:dR,isMesh:!0,setDrawMode:function(m){this.drawMode=m
},copy:function(m){ev.prototype.copy.call(this,m);
this.drawMode=m.drawMode;
return this
},updateMorphTargets:function(){var n=this.geometry;
if(n.isBufferGeometry){n=n.morphAttributes;
var m=Object.keys(n);
if(0<m.length){var z=n[m[0]];
if(void 0!==z){for(this.morphTargetInfluences=[],this.morphTargetDictionary={},n=0,m=z.length;
n<m;
n++){var w=z[n].name||String(n);
this.morphTargetInfluences.push(0);
this.morphTargetDictionary[w]=n
}}}}else{if(z=n.morphTargets,void 0!==z&&0<z.length){for(this.morphTargetInfluences=[],this.morphTargetDictionary={},n=0,m=z.length;
n<m;
n++){w=z[n].name||String(n),this.morphTargetInfluences.push(0),this.morphTargetDictionary[w]=n
}}}},raycast:function(){function aa(ab,m,ag,af,ae,ad,ac){cQ.barycoordFromPoint(ab,m,ag,af,C);
ae.multiplyScalar(C.x);
ad.multiplyScalar(C.y);
ac.multiplyScalar(C.z);
ae.add(ad).add(ac);
return ae.clone()
}function X(ab,m,bb,ag,af,ae,ad,ac){if(null===(1===m.side?ag.intersectTriangle(ad,ae,af,!0,ac):ag.intersectTriangle(af,ae,ad,2!==m.side,ac))){return null
}n.copy(ac);
n.applyMatrix4(ab.matrixWorld);
m=bb.ray.origin.distanceTo(n);
return m<bb.near||m>bb.far?null:{distance:m,point:n.clone(),object:ab}
}function W(bc,bb,ag,ae,ac,ad,ab,af){Q.fromBufferAttribute(ae,ad);
P.fromBufferAttribute(ae,ab);
O.fromBufferAttribute(ae,af);
if(bc=X(bc,bc.material,bb,ag,Q,P,O,w)){ac&&(D.fromBufferAttribute(ac,ad),F.fromBufferAttribute(ac,ab),z.fromBufferAttribute(ac,af),bc.uv=aa(w,Q,P,O,D,F,z)),bc.face=new c2(ad,ab,af,cQ.normal(Q,P,O)),bc.faceIndex=ad
}return bc
}var V=new eQ,S=new ds,R=new av,Q=new ew,P=new ew,O=new ew,N=new ew,K=new ew,L=new ew,D=new e0,F=new e0,z=new e0,C=new ew,w=new ew,n=new ew;
return function(da,db){var cd=this.geometry,bf=this.material,cg=this.matrixWorld;
if(void 0!==bf&&(null===cd.boundingSphere&&cd.computeBoundingSphere(),R.copy(cd.boundingSphere),R.applyMatrix4(cg),!1!==da.ray.intersectsSphere(R)&&(V.getInverse(cg),S.copy(da.ray).applyMatrix4(V),null===cd.boundingBox||!1!==S.intersectsBox(cd.boundingBox)))){var cb;
if(cd.isBufferGeometry){var bf=cd.index,bg=cd.attributes.position,cg=cd.attributes.uv,bd;
if(null!==bf){var ce=0;
for(bd=bf.count;
ce<bd;
ce+=3){cd=bf.getX(ce);
var cf=bf.getX(ce+1);
var be=bf.getX(ce+2);
if(cb=W(this,da,S,bg,cg,cd,cf,be)){cb.faceIndex=Math.floor(ce/3),db.push(cb)
}}}else{for(ce=0,bd=bg.count;
ce<bd;
ce+=3){if(cd=ce,cf=ce+1,be=ce+2,cb=W(this,da,S,bg,cg,cd,cf,be)){cb.index=cd,db.push(cb)
}}}}else{if(cd.isGeometry){var cg=Array.isArray(bf);
ce=cd.vertices;
bd=cd.faces;
cf=cd.faceVertexUvs[0];
0<cf.length&&(bg=cf);
for(var cc=0,bb=bd.length;
cc<bb;
cc++){var ag=bd[cc];
cb=cg?bf[ag.materialIndex]:bf;
if(void 0!==cb){cf=ce[ag.a];
be=ce[ag.b];
var m=ce[ag.c];
if(!0===cb.morphTargets){var bc=cd.morphTargets,ac=this.morphTargetInfluences;
Q.set(0,0,0);
P.set(0,0,0);
O.set(0,0,0);
for(var ae=0,ad=bc.length;
ae<ad;
ae++){var ab=ac[ae];
if(0!==ab){var af=bc[ae].vertices;
Q.addScaledVector(N.subVectors(af[ag.a],cf),ab);
P.addScaledVector(K.subVectors(af[ag.b],be),ab);
O.addScaledVector(L.subVectors(af[ag.c],m),ab)
}}Q.add(cf);
P.add(be);
O.add(m);
cf=Q;
be=P;
m=O
}if(cb=X(this,cb,da,S,cf,be,m,w)){bg&&bg[cc]&&(bc=bg[cc],D.copy(bc[0]),F.copy(bc[1]),z.copy(bc[2]),cb.uv=aa(w,cf,be,m,D,F,z)),cb.face=ag,cb.faceIndex=cc,db.push(cb)
}}}}}}}
}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)
}});
var dm=0;
cl.prototype=Object.assign(Object.create(cW.prototype),{constructor:cl,isArrayCamera:!0});
fx.prototype.isFogExp2=!0;
fx.prototype.clone=function(){return new fx(this.color.getHex(),this.density)
};
fx.prototype.toJSON=function(m){return{type:"FogExp2",color:this.color.getHex(),density:this.density}
};
e7.prototype.isFog=!0;
e7.prototype.clone=function(){return new e7(this.color.getHex(),this.near,this.far)
};
e7.prototype.toJSON=function(m){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}
};
b2.prototype=Object.assign(Object.create(ev.prototype),{constructor:b2,copy:function(n,m){ev.prototype.copy.call(this,n,m);
null!==n.background&&(this.background=n.background.clone());
null!==n.fog&&(this.fog=n.fog.clone());
null!==n.overrideMaterial&&(this.overrideMaterial=n.overrideMaterial.clone());
this.autoUpdate=n.autoUpdate;
this.matrixAutoUpdate=n.matrixAutoUpdate;
return this
},toJSON:function(n){var m=ev.prototype.toJSON.call(this,n);
null!==this.background&&(m.object.background=this.background.toJSON(n));
null!==this.fog&&(m.object.fog=this.fog.toJSON());
return m
}});
aR.prototype=Object.assign(Object.create(ev.prototype),{constructor:aR,isLensFlare:!0,copy:function(n){ev.prototype.copy.call(this,n);
this.positionScreen.copy(n.positionScreen);
this.customUpdateCallback=n.customUpdateCallback;
for(var m=0,w=n.lensFlares.length;
m<w;
m++){this.lensFlares.push(n.lensFlares[m])
}return this
},add:function(n,m,D,C,z,w){void 0===m&&(m=-1);
void 0===D&&(D=0);
void 0===w&&(w=1);
void 0===z&&(z=new e2(16777215));
void 0===C&&(C=1);
D=Math.min(D,Math.max(0,D));
this.lensFlares.push({texture:n,size:m,distance:D,x:0,y:0,z:0,scale:1,rotation:0,opacity:w,color:z,blending:C})
},updateLensFlares:function(){var n,m=this.lensFlares.length,C=2*-this.positionScreen.x,z=2*-this.positionScreen.y;
for(n=0;
n<m;
n++){var w=this.lensFlares[n];
w.x=this.positionScreen.x+C*w.distance;
w.y=this.positionScreen.y+z*w.distance;
w.wantedRotation=w.x*Math.PI*0.25;
w.rotation+=0.25*(w.wantedRotation-w.rotation)
}}});
aU.prototype=Object.create(eP.prototype);
aU.prototype.constructor=aU;
aU.prototype.isSpriteMaterial=!0;
aU.prototype.copy=function(m){eP.prototype.copy.call(this,m);
this.color.copy(m.color);
this.map=m.map;
this.rotation=m.rotation;
return this
};
e.prototype=Object.assign(Object.create(ev.prototype),{constructor:e,isSprite:!0,raycast:function(){var n=new ew,m=new ew,w=new ew;
return function(D,C){m.setFromMatrixPosition(this.matrixWorld);
D.ray.closestPointToPoint(m,n);
w.setFromMatrixScale(this.matrixWorld);
var z=w.x*w.y/4;
m.distanceToSquared(n)>z||(z=D.ray.origin.distanceTo(n),z<D.near||z>D.far||C.push({distance:z,point:n.clone(),face:null,object:this}))
}
}(),clone:function(){return(new this.constructor(this.material)).copy(this)
}});
fB.prototype=Object.assign(Object.create(ev.prototype),{constructor:fB,copy:function(n){ev.prototype.copy.call(this,n,!1);
n=n.levels;
for(var m=0,z=n.length;
m<z;
m++){var w=n[m];
this.addLevel(w.object.clone(),w.distance)
}return this
},addLevel:function(n,m){void 0===m&&(m=0);
m=Math.abs(m);
for(var z=this.levels,w=0;
w<z.length&&!(m<z[w].distance);
w++){}z.splice(w,0,{distance:m,object:n});
this.add(n)
},getObjectForDistance:function(n){for(var m=this.levels,z=1,w=m.length;
z<w&&!(n<m[z].distance);
z++){}return m[z-1].object
},raycast:function(){var m=new ew;
return function(n,z){m.setFromMatrixPosition(this.matrixWorld);
var w=n.ray.origin.distanceTo(m);
this.getObjectForDistance(w).raycast(n,z)
}
}(),update:function(){var n=new ew,m=new ew;
return function(D){var C=this.levels;
if(1<C.length){n.setFromMatrixPosition(D.matrixWorld);
m.setFromMatrixPosition(this.matrixWorld);
D=n.distanceTo(m);
C[0].object.visible=!0;
for(var z=1,w=C.length;
z<w;
z++){if(D>=C[z].distance){C[z-1].object.visible=!1,C[z].object.visible=!0
}else{break
}}for(;
z<w;
z++){C[z].object.visible=!1
}}}
}(),toJSON:function(n){n=ev.prototype.toJSON.call(this,n);
n.object.levels=[];
for(var m=this.levels,C=0,z=m.length;
C<z;
C++){var w=m[C];
n.object.levels.push({object:w.object.uuid,distance:w.distance})
}return n
}});
Object.assign(fj.prototype,{calculateInverses:function(){this.boneInverses=[];
for(var n=0,m=this.bones.length;
n<m;
n++){var w=new eQ;
this.bones[n]&&w.getInverse(this.bones[n].matrixWorld);
this.boneInverses.push(w)
}},pose:function(){var n,m;
var w=0;
for(m=this.bones.length;
w<m;
w++){(n=this.bones[w])&&n.matrixWorld.getInverse(this.boneInverses[w])
}w=0;
for(m=this.bones.length;
w<m;
w++){if(n=this.bones[w]){n.parent&&n.parent.isBone?(n.matrix.getInverse(n.parent.matrixWorld),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale)
}}},update:function(){var n=new eQ,m=new eQ;
return function(){for(var K=this.bones,F=this.boneInverses,D=this.boneMatrices,C=this.boneTexture,z=0,w=K.length;
z<w;
z++){n.multiplyMatrices(K[z]?K[z].matrixWorld:m,F[z]),n.toArray(D,16*z)
}void 0!==C&&(C.needsUpdate=!0)
}
}(),clone:function(){return new fj(this.bones,this.boneInverses)
}});
bK.prototype=Object.assign(Object.create(ev.prototype),{constructor:bK,isBone:!0});
by.prototype=Object.assign(Object.create(dR.prototype),{constructor:by,isSkinnedMesh:!0,initBones:function(){var n=[],m;
if(this.geometry&&void 0!==this.geometry.bones){var C=0;
for(m=this.geometry.bones.length;
C<m;
C++){var z=this.geometry.bones[C];
var w=new bK;
n.push(w);
w.name=z.name;
w.position.fromArray(z.pos);
w.quaternion.fromArray(z.rotq);
void 0!==z.scl&&w.scale.fromArray(z.scl)
}C=0;
for(m=this.geometry.bones.length;
C<m;
C++){z=this.geometry.bones[C],-1!==z.parent&&null!==z.parent&&void 0!==n[z.parent]?n[z.parent].add(n[C]):this.add(n[C])
}}this.updateMatrixWorld(!0);
return n
},bind:function(n,m){this.skeleton=n;
void 0===m&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),m=this.matrixWorld);
this.bindMatrix.copy(m);
this.bindMatrixInverse.getInverse(m)
},pose:function(){this.skeleton.pose()
},normalizeSkinWeights:function(){var n;
if(this.geometry&&this.geometry.isGeometry){for(n=0;
n<this.geometry.skinWeights.length;
n++){var m=this.geometry.skinWeights[n];
var z=1/m.lengthManhattan();
Infinity!==z?m.multiplyScalar(z):m.set(1,0,0,0)
}}else{if(this.geometry&&this.geometry.isBufferGeometry){var m=new eM,w=this.geometry.attributes.skinWeight;
for(n=0;
n<w.count;
n++){m.x=w.getX(n),m.y=w.getY(n),m.z=w.getZ(n),m.w=w.getW(n),z=1/m.lengthManhattan(),Infinity!==z?m.multiplyScalar(z):m.set(1,0,0,0),w.setXYZW(n,m.x,m.y,m.z,m.w)
}}}},updateMatrixWorld:function(m){dR.prototype.updateMatrixWorld.call(this,m);
"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)
},clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)
}});
eK.prototype=Object.create(eP.prototype);
eK.prototype.constructor=eK;
eK.prototype.isLineBasicMaterial=!0;
eK.prototype.copy=function(m){eP.prototype.copy.call(this,m);
this.color.copy(m.color);
this.linewidth=m.linewidth;
this.linecap=m.linecap;
this.linejoin=m.linejoin;
return this
};
a7.prototype=Object.assign(Object.create(ev.prototype),{constructor:a7,isLine:!0,raycast:function(){var n=new eQ,m=new ds,w=new av;
return function(Q,P){var O=Q.linePrecision,O=O*O,N=this.geometry,L=this.matrixWorld;
null===N.boundingSphere&&N.computeBoundingSphere();
w.copy(N.boundingSphere);
w.applyMatrix4(L);
if(!1!==Q.ray.intersectsSphere(w)){n.getInverse(L);
m.copy(Q.ray).applyMatrix4(n);
var K=new ew,F=new ew,L=new ew,C=new ew,D=this&&this.isLineSegments?2:1;
if(N.isBufferGeometry){var V=N.index;
var z=N.attributes.position.array;
if(null!==V){for(var R=V.array,N=0,S=R.length-1;
N<S;
N+=D){V=R[N+1],K.fromArray(z,3*R[N]),F.fromArray(z,3*V),V=m.distanceSqToSegment(K,F,C,L),V>O||(C.applyMatrix4(this.matrixWorld),V=Q.ray.origin.distanceTo(C),V<Q.near||V>Q.far||P.push({distance:V,point:L.clone().applyMatrix4(this.matrixWorld),index:N,face:null,faceIndex:null,object:this}))
}}else{for(N=0,S=z.length/3-1;
N<S;
N+=D){K.fromArray(z,3*N),F.fromArray(z,3*N+3),V=m.distanceSqToSegment(K,F,C,L),V>O||(C.applyMatrix4(this.matrixWorld),V=Q.ray.origin.distanceTo(C),V<Q.near||V>Q.far||P.push({distance:V,point:L.clone().applyMatrix4(this.matrixWorld),index:N,face:null,faceIndex:null,object:this}))
}}}else{if(N.isGeometry){for(K=N.vertices,F=K.length,N=0;
N<F-1;
N+=D){V=m.distanceSqToSegment(K[N],K[N+1],C,L),V>O||(C.applyMatrix4(this.matrixWorld),V=Q.ray.origin.distanceTo(C),V<Q.near||V>Q.far||P.push({distance:V,point:L.clone().applyMatrix4(this.matrixWorld),index:N,face:null,faceIndex:null,object:this}))
}}}}}
}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)
}});
eJ.prototype=Object.assign(Object.create(a7.prototype),{constructor:eJ,isLineSegments:!0});
bm.prototype=Object.assign(Object.create(a7.prototype),{constructor:bm,isLineLoop:!0});
co.prototype=Object.create(eP.prototype);
co.prototype.constructor=co;
co.prototype.isPointsMaterial=!0;
co.prototype.copy=function(m){eP.prototype.copy.call(this,m);
this.color.copy(m.color);
this.map=m.map;
this.size=m.size;
this.sizeAttenuation=m.sizeAttenuation;
return this
};
eH.prototype=Object.assign(Object.create(ev.prototype),{constructor:eH,isPoints:!0,raycast:function(){var n=new eQ,m=new ds,w=new av;
return function(Q,P){function O(V,aa){var X=m.distanceSqToPoint(V);
if(X<C){V=m.closestPointToPoint(V);
V.applyMatrix4(K);
var W=Q.ray.origin.distanceTo(V);
W<Q.near||W>Q.far||P.push({distance:W,distanceToRay:Math.sqrt(X),point:V.clone(),index:aa,face:null,object:N})
}}var N=this,L=this.geometry,K=this.matrixWorld,F=Q.params.Points.threshold;
null===L.boundingSphere&&L.computeBoundingSphere();
w.copy(L.boundingSphere);
w.applyMatrix4(K);
w.radius+=F;
if(!1!==Q.ray.intersectsSphere(w)){n.getInverse(K);
m.copy(Q.ray).applyMatrix4(n);
var F=F/((this.scale.x+this.scale.y+this.scale.z)/3),C=F*F,F=new ew;
if(L.isBufferGeometry){var D=L.index,L=L.attributes.position.array;
if(null!==D){for(var S=D.array,D=0,z=S.length;
D<z;
D++){var R=S[D];
F.fromArray(L,3*R);
O(F,R)
}}else{for(D=0,S=L.length/3;
D<S;
D++){F.fromArray(L,3*D),O(F,D)
}}}else{for(F=L.vertices,D=0,S=F.length;
D<S;
D++){O(F[D],D)
}}}}
}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)
}});
aY.prototype=Object.assign(Object.create(ev.prototype),{constructor:aY});
a4.prototype=Object.create(eR.prototype);
a4.prototype.constructor=a4;
et.prototype=Object.create(eR.prototype);
et.prototype.constructor=et;
et.prototype.isCompressedTexture=!0;
aF.prototype=Object.create(eR.prototype);
aF.prototype.constructor=aF;
aF.prototype.isDepthTexture=!0;
d9.prototype=Object.create(eX.prototype);
d9.prototype.constructor=d9;
at.prototype=Object.create(eO.prototype);
at.prototype.constructor=at;
dW.prototype=Object.create(eX.prototype);
dW.prototype.constructor=dW;
Z.prototype=Object.create(eO.prototype);
Z.prototype.constructor=Z;
ao.prototype=Object.create(eX.prototype);
ao.prototype.constructor=ao;
A.prototype=Object.create(eO.prototype);
A.prototype.constructor=A;
dJ.prototype=Object.create(ao.prototype);
dJ.prototype.constructor=dJ;
j.prototype=Object.create(eO.prototype);
j.prototype.constructor=j;
cV.prototype=Object.create(ao.prototype);
cV.prototype.constructor=cV;
a.prototype=Object.create(eO.prototype);
a.prototype.constructor=a;
dx.prototype=Object.create(ao.prototype);
dx.prototype.constructor=dx;
fw.prototype=Object.create(eO.prototype);
fw.prototype.constructor=fw;
dk.prototype=Object.create(ao.prototype);
dk.prototype.constructor=dk;
e6.prototype=Object.create(eO.prototype);
e6.prototype.constructor=e6;
c1.prototype=Object.create(eX.prototype);
c1.prototype.constructor=c1;
eG.prototype=Object.create(eO.prototype);
eG.prototype.constructor=eG;
cP.prototype=Object.create(eX.prototype);
cP.prototype.constructor=cP;
er.prototype=Object.create(eO.prototype);
er.prototype.constructor=er;
cE.prototype=Object.create(eX.prototype);
cE.prototype.constructor=cE;
var l={area:function(n){for(var m=n.length,C=0,z=m-1,w=0;
w<m;
z=w++){C+=n[z].x*n[w].y-n[w].x*n[z].y
}return 0.5*C
},triangulate:function(){return function(db,da){var cg=db.length;
if(3>cg){return null
}var cf=[],ce=[],cd=[],cc;
if(0<l.area(db)){for(cc=0;
cc<cg;
cc++){ce[cc]=cc
}}else{for(cc=0;
cc<cg;
cc++){ce[cc]=cg-1-cc
}}var cb=2*cg;
for(cc=cg-1;
2<cg;
){if(0>=cb--){console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");
break
}var bg=cc;
cg<=bg&&(bg=0);
cc=bg+1;
cg<=cc&&(cc=0);
var bf=cc+1;
cg<=bf&&(bf=0);
db:{var be;
var bc=db[ce[bg]].x;
var ad=db[ce[bg]].y;
var bd=db[ce[cc]].x;
var aa=db[ce[cc]].y;
var ac=db[ce[bf]].x;
var W=db[ce[bf]].y;
if(0>=(bd-bc)*(W-ad)-(aa-ad)*(ac-bc)){var V=!1
}else{var bb=ac-bd;
var X=W-aa;
var ag=bc-ac;
var R=ad-W;
var ae=bd-bc;
V=aa-ad;
for(be=0;
be<cg;
be++){var af=db[ce[be]].x;
var ab=db[ce[be]].y;
if(!(af===bc&&ab===ad||af===bd&&ab===aa||af===ac&&ab===W)){var Q=af-bc;
var P=ab-ad;
var N=af-bd;
var S=ab-aa;
af-=ac;
ab-=W;
S=bb*S-X*N;
P=ae*P-V*Q;
af=ag*ab-R*af;
if(S>=-Number.EPSILON&&af>=-Number.EPSILON&&P>=-Number.EPSILON){V=!1;
break db
}}}V=!0
}}if(V){cf.push([db[ce[bg]],db[ce[cc]],db[ce[bf]]]);
cd.push([ce[bg],ce[cc],ce[bf]]);
bg=cc;
for(bf=cc+1;
bf<cg;
bg++,bf++){ce[bg]=ce[bf]
}cg--;
cb=2*cg
}}return da?cd:cf
}
}(),triangulateShape:function(P,O){function N(Q){var m=Q.length;
2<m&&Q[m-1].equals(Q[0])&&Q.pop()
}function L(Q,m,R){return Q.x!==m.x?Q.x<m.x?Q.x<=R.x&&R.x<=m.x:m.x<=R.x&&R.x<=Q.x:Q.y<m.y?Q.y<=R.y&&R.y<=m.y:m.y<=R.y&&R.y<=Q.y
}function K(ag,af,ae,ad,ac){var ab=af.x-ag.x,aa=af.y-ag.y,X=ad.x-ae.x,W=ad.y-ae.y,V=ag.x-ae.x,Q=ag.y-ae.y,R=aa*X-ab*W,S=aa*V-ab*Q;
if(Math.abs(R)>Number.EPSILON){if(0<R){if(0>S||S>R){return[]
}X=W*V-X*Q;
if(0>X||X>R){return[]
}}else{if(0<S||S<R){return[]
}X=W*V-X*Q;
if(0<X||X<R){return[]
}}if(0===X){return !ac||0!==S&&S!==R?[ag]:[]
}if(X===R){return !ac||0!==S&&S!==R?[af]:[]
}if(0===S){return[ae]
}if(S===R){return[ad]
}ac=X/R;
return[{x:ag.x+ac*ab,y:ag.y+ac*aa}]
}if(0!==S||W*V!==X*Q){return[]
}aa=0===ab&&0===aa;
X=0===X&&0===W;
if(aa&&X){return ag.x!==ae.x||ag.y!==ae.y?[]:[ag]
}if(aa){return L(ae,ad,ag)?[ag]:[]
}if(X){return L(ag,af,ae)?[ae]:[]
}0!==ab?(ag.x<af.x?(ab=ag,X=ag.x,aa=af,ag=af.x):(ab=af,X=af.x,aa=ag,ag=ag.x),ae.x<ad.x?(af=ae,R=ae.x,W=ad,ae=ad.x):(af=ad,R=ad.x,W=ae,ae=ae.x)):(ag.y<af.y?(ab=ag,X=ag.y,aa=af,ag=af.y):(ab=af,X=af.y,aa=ag,ag=ag.y),ae.y<ad.y?(af=ae,R=ae.y,W=ad,ae=ad.y):(af=ad,R=ad.y,W=ae,ae=ae.y));
return X<=R?ag<R?[]:ag===R?ac?[]:[af]:ag<=ae?[af,aa]:[af,W]:X>ae?[]:X===ae?ac?[]:[ab]:ag<=ae?[ab,aa]:[ab,W]
}function F(Q,m,X,W){var V=m.x-Q.x,S=m.y-Q.y;
m=X.x-Q.x;
X=X.y-Q.y;
var R=W.x-Q.x;
W=W.y-Q.y;
Q=V*X-S*m;
V=V*W-S*R;
return Math.abs(Q)>Number.EPSILON?(m=R*X-W*m,0<Q?0<=V&&0<=m:0<=V||0<=m):0<V
}N(P);
O.forEach(N);
var D,C={},z=P.concat();
var w=0;
for(D=O.length;
w<D;
w++){Array.prototype.push.apply(z,O[w])
}w=0;
for(D=z.length;
w<D;
w++){var n=z[w].x+":"+z[w].y;
void 0!==C[n]&&console.warn("THREE.ShapeUtils: Duplicate point",n,w);
C[n]=w
}w=function(bf,be){function bd(bg,m){var cd=ag.length-1,cc=bg-1;
0>cc&&(cc=cd);
var cb=bg+1;
cb>cd&&(cb=0);
cd=F(ag[bg],ag[cc],ag[cb],W[m]);
if(!cd){return !1
}cd=W.length-1;
cc=m-1;
0>cc&&(cc=cd);
cb=m+1;
cb>cd&&(cb=0);
return(cd=F(W[m],W[cc],W[cb],ag[bg]))?!0:!1
}function bc(bg,m){var cc;
for(cc=0;
cc<ag.length;
cc++){var cb=cc+1;
cb%=ag.length;
cb=K(bg,m,ag[cc],ag[cb],!0);
if(0<cb.length){return !0
}}return !1
}function bb(m,ce){var cd,cc;
for(cd=0;
cd<af.length;
cd++){var cb=be[af[cd]];
for(cc=0;
cc<cb.length;
cc++){var bg=cc+1;
bg%=cb.length;
bg=K(m,ce,cb[cc],cb[bg],!0);
if(0<bg.length){return !0
}}}return !1
}var ag=bf.concat(),af=[],ae,ad;
bf=[];
var aa,ab=0;
for(ae=be.length;
ab<ae;
ab++){af.push(ab)
}var ac=0;
for(var V=2*af.length;
0<af.length;
){V--;
if(0>V){console.log('THREE.ShapeUtils: Infinite Loop! Holes left:" + indepHoles.length + ", Probably Hole outside Shape!');
break
}for(ad=ac;
ad<ag.length;
ad++){var R=ag[ad];
ae=-1;
for(ab=0;
ab<af.length;
ab++){var Q=af[ab];
var X=R.x+":"+R.y+":"+Q;
if(void 0===bf[X]){var W=be[Q];
for(aa=0;
aa<W.length;
aa++){if(Q=W[aa],bd(ad,aa)&&!bc(R,Q)&&!bb(R,Q)){ae=aa;
af.splice(ab,1);
ac=ag.slice(0,ad+1);
Q=ag.slice(ad);
aa=W.slice(ae);
var S=W.slice(0,ae+1);
ag=ac.concat(aa).concat(S).concat(Q);
ac=ad;
break
}}if(0<=ae){break
}bf[X]=!0
}}if(0<=ae){break
}}}return ag
}(P,O);
z=l.triangulate(w,!1);
w=0;
for(D=z.length;
w<D;
w++){for(O=z[w],P=0;
3>P;
P++){n=O[P].x+":"+O[P].y,n=C[n],void 0!==n&&(O[P]=n)
}}return z.concat()
},isClockWise:function(m){return 0>l.area(m)
}};
bY.prototype=Object.create(eO.prototype);
bY.prototype.constructor=bY;
E.prototype=Object.create(eX.prototype);
E.prototype.constructor=E;
E.prototype.getArrays=function(){var n=this.getAttribute("position"),n=n?Array.prototype.slice.call(n.array):[],m=this.getAttribute("uv"),m=m?Array.prototype.slice.call(m.array):[],w=this.index,w=w?Array.prototype.slice.call(w.array):[];
return{position:n,uv:m,index:w}
};
E.prototype.addShapeList=function(n,m){var z=n.length;
m.arrays=this.getArrays();
for(var w=0;
w<z;
w++){this.addShape(n[w],m)
}this.setIndex(m.arrays.index);
this.addAttribute("position",new es(m.arrays.position,3));
this.addAttribute("uv",new es(m.arrays.uv,2))
};
E.prototype.addShape=function(fM,fL){function fK(w,m,C){m||console.error("THREE.ExtrudeGeometry: vec does not exist");
return m.clone().multiplyScalar(C).add(w)
}function fJ(Q,P,O){var N=Q.x-P.x;
var L=Q.y-P.y;
var K=O.x-Q.x;
var F=O.y-Q.y,C=N*N+L*L;
if(Math.abs(N*F-L*K)>Number.EPSILON){var w=Math.sqrt(C),m=Math.sqrt(K*K+F*F),C=P.x-L/w;
P=P.y+N/w;
F=((O.x-F/m-C)*F-(O.y+K/m-P)*K)/(N*F-L*K);
K=C+N*F-Q.x;
N=P+L*F-Q.y;
L=K*K+N*N;
if(2>=L){return new e0(K,N)
}L=Math.sqrt(L/2)
}else{Q=!1,N>Number.EPSILON?K>Number.EPSILON&&(Q=!0):N<-Number.EPSILON?K<-Number.EPSILON&&(Q=!0):Math.sign(L)===Math.sign(F)&&(Q=!0),Q?(K=-L,L=Math.sqrt(C)):(K=N,N=L,L=Math.sqrt(C/2))
}return new e0(K/L,N/L)
}function fI(Q,P){for(ce=Q.length;
0<=--ce;
){var O=ce;
var N=ce-1;
0>N&&(N=Q.length-1);
var L,K=ec+2*eb;
for(L=0;
L<K;
L++){var F=ab*L,C=ab*(L+1),m=P+N+F,w=P+N+C,C=P+O+C;
ff(P+O+F);
ff(m);
ff(C);
ff(m);
ff(w);
ff(C);
F=fc.length/3;
F=cf.generateSideWallUV(bb,fc,F-6,F-3,F-2,F-1);
fe(F[0]);
fe(F[1]);
fe(F[3]);
fe(F[1]);
fe(F[2]);
fe(F[3])
}}}function fH(w,m,C){eg.push(w);
eg.push(m);
eg.push(C)
}function fg(w,m,C){ff(w);
ff(m);
ff(C);
w=fc.length/3;
w=cf.generateTopUV(bb,fc,w-3,w-2,w-1);
fe(w[0]);
fe(w[1]);
fe(w[2])
}function ff(m){fb.push(fc.length/3);
fc.push(eg[3*m+0]);
fc.push(eg[3*m+1]);
fc.push(eg[3*m+2])
}function fe(m){ef.push(m.x);
ef.push(m.y)
}var fd=fL.arrays?fL.arrays:this.getArrays(),fc=fd.position,fb=fd.index,ef=fd.uv,eg=[],fd=void 0!==fL.amount?fL.amount:100,ed=void 0!==fL.bevelThickness?fL.bevelThickness:6,ee=void 0!==fL.bevelSize?fL.bevelSize:ed-2,eb=void 0!==fL.bevelSegments?fL.bevelSegments:3,ea=void 0!==fL.bevelEnabled?fL.bevelEnabled:!0,dc=void 0!==fL.curveSegments?fL.curveSegments:12,ec=void 0!==fL.steps?fL.steps:1,db=fL.extrudePath,cg=!1,cf=void 0!==fL.UVGenerator?fL.UVGenerator:bY.WorldUVGenerator;
if(db){var cc=db.getSpacedPoints(ec);
cg=!0;
ea=!1;
var cb=void 0!==fL.frames?fL.frames:db.computeFrenetFrames(ec,!1);
var be=new ew;
var bc=new ew;
var bd=new ew
}ea||(ee=ed=eb=0);
var cd,bb=this,dc=fM.extractPoints(dc);
fM=dc.shape;
var bf=dc.holes;
if(!l.isClockWise(fM)){fM=fM.reverse();
var bg=0;
for(cd=bf.length;
bg<cd;
bg++){var af=bf[bg];
l.isClockWise(af)&&(bf[bg]=af.reverse())
}}var ad=l.triangulateShape(fM,bf),ac=fM;
bg=0;
for(cd=bf.length;
bg<cd;
bg++){af=bf[bg],fM=fM.concat(af)
}var D,ab=fM.length,ag,de=ad.length,dc=[],ce=0;
var ae=ac.length;
var df=ae-1;
for(D=ce+1;
ce<ae;
ce++,df++,D++){df===ae&&(df=0),D===ae&&(D=0),dc[ce]=fJ(ac[ce],ac[df],ac[D])
}var db=[],n=dc.concat();
bg=0;
for(cd=bf.length;
bg<cd;
bg++){af=bf[bg];
var dd=[];
ce=0;
ae=af.length;
df=ae-1;
for(D=ce+1;
ce<ae;
ce++,df++,D++){df===ae&&(df=0),D===ae&&(D=0),dd[ce]=fJ(af[ce],af[df],af[D])
}db.push(dd);
n=n.concat(dd)
}for(df=0;
df<eb;
df++){ae=df/eb;
var dg=ed*Math.cos(ae*Math.PI/2);
D=ee*Math.sin(ae*Math.PI/2);
ce=0;
for(ae=ac.length;
ce<ae;
ce++){var z=fK(ac[ce],dc[ce],D);
fH(z.x,z.y,-dg)
}bg=0;
for(cd=bf.length;
bg<cd;
bg++){for(af=bf[bg],dd=db[bg],ce=0,ae=af.length;
ce<ae;
ce++){z=fK(af[ce],dd[ce],D),fH(z.x,z.y,-dg)
}}}D=ee;
for(ce=0;
ce<ab;
ce++){z=ea?fK(fM[ce],n[ce],D):fM[ce],cg?(bc.copy(cb.normals[0]).multiplyScalar(z.x),be.copy(cb.binormals[0]).multiplyScalar(z.y),bd.copy(cc[0]).add(bc).add(be),fH(bd.x,bd.y,bd.z)):fH(z.x,z.y,0)
}for(ae=1;
ae<=ec;
ae++){for(ce=0;
ce<ab;
ce++){z=ea?fK(fM[ce],n[ce],D):fM[ce],cg?(bc.copy(cb.normals[ae]).multiplyScalar(z.x),be.copy(cb.binormals[ae]).multiplyScalar(z.y),bd.copy(cc[ae]).add(bc).add(be),fH(bd.x,bd.y,bd.z)):fH(z.x,z.y,fd/ec*ae)
}}for(df=eb-1;
0<=df;
df--){ae=df/eb;
dg=ed*Math.cos(ae*Math.PI/2);
D=ee*Math.sin(ae*Math.PI/2);
ce=0;
for(ae=ac.length;
ce<ae;
ce++){z=fK(ac[ce],dc[ce],D),fH(z.x,z.y,fd+dg)
}bg=0;
for(cd=bf.length;
bg<cd;
bg++){for(af=bf[bg],dd=db[bg],ce=0,ae=af.length;
ce<ae;
ce++){z=fK(af[ce],dd[ce],D),cg?fH(z.x,z.y+cc[ec-1].y,cc[ec-1].x+dg):fH(z.x,z.y,fd+dg)
}}}(function(){var m=fc.length/3;
if(ea){var w=0*ab;
for(ce=0;
ce<de;
ce++){ag=ad[ce],fg(ag[2]+w,ag[1]+w,ag[0]+w)
}w=ab*(ec+2*eb);
for(ce=0;
ce<de;
ce++){ag=ad[ce],fg(ag[0]+w,ag[1]+w,ag[2]+w)
}}else{for(ce=0;
ce<de;
ce++){ag=ad[ce],fg(ag[2],ag[1],ag[0])
}for(ce=0;
ce<de;
ce++){ag=ad[ce],fg(ag[0]+ab*ec,ag[1]+ab*ec,ag[2]+ab*ec)
}}bb.addGroup(m,fc.length/3-m,void 0!==fL.material?fL.material:0)
})();
(function(){var m=fc.length/3,w=0;
fI(ac,w);
w+=ac.length;
bg=0;
for(cd=bf.length;
bg<cd;
bg++){af=bf[bg],fI(af,w),w+=af.length
}bb.addGroup(m,fc.length/3-m,void 0!==fL.extrudeMaterial?fL.extrudeMaterial:1)
})();
fL.arrays||(this.setIndex(fb),this.addAttribute("position",new es(fc,3)),this.addAttribute("uv",new es(fL.arrays.uv,2)))
};
bY.WorldUVGenerator={generateTopUV:function(n,m,D,C,z){n=m[3*C];
C=m[3*C+1];
var w=m[3*z];
z=m[3*z+1];
return[new e0(m[3*D],m[3*D+1]),new e0(n,C),new e0(w,z)]
},generateSideWallUV:function(S,R,Q,P,O,N){S=R[3*Q];
var L=R[3*Q+1];
Q=R[3*Q+2];
var K=R[3*P],F=R[3*P+1];
P=R[3*P+2];
var D=R[3*O],C=R[3*O+1];
O=R[3*O+2];
var w=R[3*N],z=R[3*N+1];
R=R[3*N+2];
return 0.01>Math.abs(L-F)?[new e0(S,1-Q),new e0(K,1-P),new e0(D,1-O),new e0(w,1-R)]:[new e0(L,1-Q),new e0(F,1-P),new e0(C,1-O),new e0(z,1-R)]
}};
d8.prototype=Object.create(eO.prototype);
d8.prototype.constructor=d8;
ct.prototype=Object.create(E.prototype);
ct.prototype.constructor=ct;
dV.prototype=Object.create(eO.prototype);
dV.prototype.constructor=dV;
cK.prototype=Object.create(eX.prototype);
cK.prototype.constructor=cK;
dI.prototype=Object.create(eO.prototype);
dI.prototype.constructor=dI;
ca.prototype=Object.create(eX.prototype);
ca.prototype.constructor=ca;
dw.prototype=Object.create(eO.prototype);
dw.prototype.constructor=dw;
bR.prototype=Object.create(eX.prototype);
bR.prototype.constructor=bR;
bF.prototype=Object.create(eO.prototype);
bF.prototype.constructor=bF;
bt.prototype=Object.create(eX.prototype);
bt.prototype.constructor=bt;
bi.prototype=Object.create(eX.prototype);
bi.prototype.constructor=bi;
cz.prototype=Object.create(eO.prototype);
cz.prototype.constructor=cz;
cu.prototype=Object.create(eX.prototype);
cu.prototype.constructor=cu;
dj.prototype=Object.create(cz.prototype);
dj.prototype.constructor=dj;
c0.prototype=Object.create(cu.prototype);
c0.prototype.constructor=c0;
cO.prototype=Object.create(eO.prototype);
cO.prototype.constructor=cO;
aT.prototype=Object.create(eX.prototype);
aT.prototype.constructor=aT;
var eu=Object.freeze({WireframeGeometry:d9,ParametricGeometry:at,ParametricBufferGeometry:dW,TetrahedronGeometry:A,TetrahedronBufferGeometry:dJ,OctahedronGeometry:j,OctahedronBufferGeometry:cV,IcosahedronGeometry:a,IcosahedronBufferGeometry:dx,DodecahedronGeometry:fw,DodecahedronBufferGeometry:dk,PolyhedronGeometry:Z,PolyhedronBufferGeometry:ao,TubeGeometry:e6,TubeBufferGeometry:c1,TorusKnotGeometry:eG,TorusKnotBufferGeometry:cP,TorusGeometry:er,TorusBufferGeometry:cE,TextGeometry:d8,TextBufferGeometry:ct,SphereGeometry:dV,SphereBufferGeometry:cK,RingGeometry:dI,RingBufferGeometry:ca,PlaneGeometry:J,PlaneBufferGeometry:dE,LatheGeometry:dw,LatheBufferGeometry:bR,ShapeGeometry:bF,ShapeBufferGeometry:bt,ExtrudeGeometry:bY,ExtrudeBufferGeometry:E,EdgesGeometry:bi,ConeGeometry:dj,ConeBufferGeometry:c0,CylinderGeometry:cz,CylinderBufferGeometry:cu,CircleGeometry:cO,CircleBufferGeometry:aT,BoxGeometry:B,BoxBufferGeometry:dQ});
bX.prototype=Object.create(eP.prototype);
bX.prototype.constructor=bX;
bX.prototype.isShadowMaterial=!0;
fq.prototype=Object.create(fD.prototype);
fq.prototype.constructor=fq;
fq.prototype.isRawShaderMaterial=!0;
dK.prototype=Object.create(eP.prototype);
dK.prototype.constructor=dK;
dK.prototype.isMeshStandardMaterial=!0;
dK.prototype.copy=function(m){eP.prototype.copy.call(this,m);
this.defines={STANDARD:""};
this.color.copy(m.color);
this.roughness=m.roughness;
this.metalness=m.metalness;
this.map=m.map;
this.lightMap=m.lightMap;
this.lightMapIntensity=m.lightMapIntensity;
this.aoMap=m.aoMap;
this.aoMapIntensity=m.aoMapIntensity;
this.emissive.copy(m.emissive);
this.emissiveMap=m.emissiveMap;
this.emissiveIntensity=m.emissiveIntensity;
this.bumpMap=m.bumpMap;
this.bumpScale=m.bumpScale;
this.normalMap=m.normalMap;
this.normalScale.copy(m.normalScale);
this.displacementMap=m.displacementMap;
this.displacementScale=m.displacementScale;
this.displacementBias=m.displacementBias;
this.roughnessMap=m.roughnessMap;
this.metalnessMap=m.metalnessMap;
this.alphaMap=m.alphaMap;
this.envMap=m.envMap;
this.envMapIntensity=m.envMapIntensity;
this.refractionRatio=m.refractionRatio;
this.wireframe=m.wireframe;
this.wireframeLinewidth=m.wireframeLinewidth;
this.wireframeLinecap=m.wireframeLinecap;
this.wireframeLinejoin=m.wireframeLinejoin;
this.skinning=m.skinning;
this.morphTargets=m.morphTargets;
this.morphNormals=m.morphNormals;
return this
};
cn.prototype=Object.create(dK.prototype);
cn.prototype.constructor=cn;
cn.prototype.isMeshPhysicalMaterial=!0;
cn.prototype.copy=function(m){dK.prototype.copy.call(this,m);
this.defines={PHYSICAL:""};
this.reflectivity=m.reflectivity;
this.clearCoat=m.clearCoat;
this.clearCoatRoughness=m.clearCoatRoughness;
return this
};
a0.prototype=Object.create(eP.prototype);
a0.prototype.constructor=a0;
a0.prototype.isMeshPhongMaterial=!0;
a0.prototype.copy=function(m){eP.prototype.copy.call(this,m);
this.color.copy(m.color);
this.specular.copy(m.specular);
this.shininess=m.shininess;
this.map=m.map;
this.lightMap=m.lightMap;
this.lightMapIntensity=m.lightMapIntensity;
this.aoMap=m.aoMap;
this.aoMapIntensity=m.aoMapIntensity;
this.emissive.copy(m.emissive);
this.emissiveMap=m.emissiveMap;
this.emissiveIntensity=m.emissiveIntensity;
this.bumpMap=m.bumpMap;
this.bumpScale=m.bumpScale;
this.normalMap=m.normalMap;
this.normalScale.copy(m.normalScale);
this.displacementMap=m.displacementMap;
this.displacementScale=m.displacementScale;
this.displacementBias=m.displacementBias;
this.specularMap=m.specularMap;
this.alphaMap=m.alphaMap;
this.envMap=m.envMap;
this.combine=m.combine;
this.reflectivity=m.reflectivity;
this.refractionRatio=m.refractionRatio;
this.wireframe=m.wireframe;
this.wireframeLinewidth=m.wireframeLinewidth;
this.wireframeLinecap=m.wireframeLinecap;
this.wireframeLinejoin=m.wireframeLinejoin;
this.skinning=m.skinning;
this.morphTargets=m.morphTargets;
this.morphNormals=m.morphNormals;
return this
};
b4.prototype=Object.create(a0.prototype);
b4.prototype.constructor=b4;
b4.prototype.isMeshToonMaterial=!0;
b4.prototype.copy=function(m){a0.prototype.copy.call(this,m);
this.gradientMap=m.gradientMap;
return this
};
bM.prototype=Object.create(eP.prototype);
bM.prototype.constructor=bM;
bM.prototype.isMeshNormalMaterial=!0;
bM.prototype.copy=function(m){eP.prototype.copy.call(this,m);
this.bumpMap=m.bumpMap;
this.bumpScale=m.bumpScale;
this.normalMap=m.normalMap;
this.normalScale.copy(m.normalScale);
this.displacementMap=m.displacementMap;
this.displacementScale=m.displacementScale;
this.displacementBias=m.displacementBias;
this.wireframe=m.wireframe;
this.wireframeLinewidth=m.wireframeLinewidth;
this.skinning=m.skinning;
this.morphTargets=m.morphTargets;
this.morphNormals=m.morphNormals;
return this
};
bA.prototype=Object.create(eP.prototype);
bA.prototype.constructor=bA;
bA.prototype.isMeshLambertMaterial=!0;
bA.prototype.copy=function(m){eP.prototype.copy.call(this,m);
this.color.copy(m.color);
this.map=m.map;
this.lightMap=m.lightMap;
this.lightMapIntensity=m.lightMapIntensity;
this.aoMap=m.aoMap;
this.aoMapIntensity=m.aoMapIntensity;
this.emissive.copy(m.emissive);
this.emissiveMap=m.emissiveMap;
this.emissiveIntensity=m.emissiveIntensity;
this.specularMap=m.specularMap;
this.alphaMap=m.alphaMap;
this.envMap=m.envMap;
this.combine=m.combine;
this.reflectivity=m.reflectivity;
this.refractionRatio=m.refractionRatio;
this.wireframe=m.wireframe;
this.wireframeLinewidth=m.wireframeLinewidth;
this.wireframeLinecap=m.wireframeLinecap;
this.wireframeLinejoin=m.wireframeLinejoin;
this.skinning=m.skinning;
this.morphTargets=m.morphTargets;
this.morphNormals=m.morphNormals;
return this
};
bo.prototype=Object.create(eK.prototype);
bo.prototype.constructor=bo;
bo.prototype.isLineDashedMaterial=!0;
bo.prototype.copy=function(m){eK.prototype.copy.call(this,m);
this.scale=m.scale;
this.dashSize=m.dashSize;
this.gapSize=m.gapSize;
return this
};
var aI=Object.freeze({ShadowMaterial:bX,SpriteMaterial:aU,RawShaderMaterial:fq,ShaderMaterial:fD,PointsMaterial:co,MeshPhysicalMaterial:cn,MeshStandardMaterial:dK,MeshPhongMaterial:a0,MeshToonMaterial:b4,MeshNormalMaterial:bM,MeshLambertMaterial:bA,MeshDepthMaterial:bG,MeshDistanceMaterial:bu,MeshBasicMaterial:aO,LineDashedMaterial:bo,LineBasicMaterial:eK,Material:eP}),dq={enabled:!1,files:{},add:function(n,m){!1!==this.enabled&&(this.files[n]=m)
},get:function(m){if(!1!==this.enabled){return this.files[m]
}},remove:function(m){delete this.files[m]
},clear:function(){this.files={}
}},bN=new bV;
Object.assign(e8.prototype,{load:function(V,S,R,Q){void 0===V&&(V="");
void 0!==this.path&&(V=this.path+V);
var P=this,O=dq.get(V);
if(void 0!==O){return P.manager.itemStart(V),setTimeout(function(){S&&S(O);
P.manager.itemEnd(V)
},0),O
}var N=V.match(/^data:(.*?)(;base64)?,(.*)$/);
if(N){var L=N[1],K=!!N[2],N=N[3],N=window.decodeURIComponent(N);
K&&(N=window.atob(N));
try{var F=(this.responseType||"").toLowerCase();
switch(F){case"arraybuffer":case"blob":var D=new ArrayBuffer(N.length);
for(var z=new Uint8Array(D),K=0;
K<N.length;
K++){z[K]=N.charCodeAt(K)
}"blob"===F&&(D=new Blob([D],{type:L}));
break;
case"document":D=(new DOMParser).parseFromString(N,L);
break;
case"json":D=JSON.parse(N);
break;
default:D=N
}window.setTimeout(function(){S&&S(D);
P.manager.itemEnd(V)
},0)
}catch(w){window.setTimeout(function(){Q&&Q(w);
P.manager.itemEnd(V);
P.manager.itemError(V)
},0)
}}else{var C=new XMLHttpRequest;
C.open("GET",V,!0);
C.addEventListener("load",function(n){var m=n.target.response;
dq.add(V,m);
200===this.status?(S&&S(m),P.manager.itemEnd(V)):0===this.status?(console.warn("THREE.FileLoader: HTTP Status 0 received."),S&&S(m),P.manager.itemEnd(V)):(Q&&Q(n),P.manager.itemEnd(V),P.manager.itemError(V))
},!1);
void 0!==R&&C.addEventListener("progress",function(m){R(m)
},!1);
C.addEventListener("error",function(m){Q&&Q(m);
P.manager.itemEnd(V);
P.manager.itemError(V)
},!1);
void 0!==this.responseType&&(C.responseType=this.responseType);
void 0!==this.withCredentials&&(C.withCredentials=this.withCredentials);
C.overrideMimeType&&C.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain");
for(L in this.requestHeader){C.setRequestHeader(L,this.requestHeader[L])
}C.send(null)
}P.manager.itemStart(V);
return C
},setPath:function(m){this.path=m;
return this
},setResponseType:function(m){this.responseType=m;
return this
},setWithCredentials:function(m){this.withCredentials=m;
return this
},setMimeType:function(m){this.mimeType=m;
return this
},setRequestHeader:function(m){this.requestHeader=m;
return this
}});
Object.assign(cM.prototype,{load:function(Q,P,O,N){function L(m){z.load(Q[m],function(R){R=F._parser(R,!0);
D[m]={width:R.width,height:R.height,format:R.format,mipmaps:R.mipmaps};
K+=1;
6===K&&(1===R.mipmapCount&&(C.minFilter=1006),C.format=R.format,C.needsUpdate=!0,P&&P(C))
},O,N)
}var K,F=this,D=[],C=new et;
C.image=D;
var z=new e8(this.manager);
z.setPath(this.path);
z.setResponseType("arraybuffer");
if(Array.isArray(Q)){for(var w=K=0,n=Q.length;
w<n;
++w){L(w)
}}else{z.load(Q,function(m){m=F._parser(m,!0);
if(m.isCubemap){for(var V=m.mipmaps.length/m.mipmapCount,S=0;
S<V;
S++){D[S]={mipmaps:[]};
for(var R=0;
R<m.mipmapCount;
R++){D[S].mipmaps.push(m.mipmaps[S*m.mipmapCount+R]),D[S].format=m.format,D[S].width=m.width,D[S].height=m.height
}}}else{C.image.width=m.width,C.image.height=m.height,C.mipmaps=m.mipmaps
}1===m.mipmapCount&&(C.minFilter=1006);
C.format=m.format;
C.needsUpdate=!0;
P&&P(C)
},O,N)
}return C
},setPath:function(m){this.path=m;
return this
}});
Object.assign(fo.prototype,{load:function(n,m,F,D){var C=this,z=new e1,w=new e8(this.manager);
w.setResponseType("arraybuffer");
w.load(n,function(K){if(K=C._parser(K)){void 0!==K.image?z.image=K.image:void 0!==K.data&&(z.image.width=K.width,z.image.height=K.height,z.image.data=K.data),z.wrapS=void 0!==K.wrapS?K.wrapS:1001,z.wrapT=void 0!==K.wrapT?K.wrapT:1001,z.magFilter=void 0!==K.magFilter?K.magFilter:1006,z.minFilter=void 0!==K.minFilter?K.minFilter:1008,z.anisotropy=void 0!==K.anisotropy?K.anisotropy:1,void 0!==K.format&&(z.format=K.format),void 0!==K.type&&(z.type=K.type),void 0!==K.mipmaps&&(z.mipmaps=K.mipmaps),1===K.mipmapCount&&(z.minFilter=1006),z.needsUpdate=!0,m&&m(z,K)
}},F,D);
return z
}});
Object.assign(cD.prototype,{crossOrigin:"Anonymous",load:function(n,m,D,C){void 0===n&&(n="");
void 0!==this.path&&(n=this.path+n);
var z=this,w=dq.get(n);
if(void 0!==w){return z.manager.itemStart(n),setTimeout(function(){m&&m(w);
z.manager.itemEnd(n)
},0),w
}D=document.createElementNS("http://www.w3.org/1999/xhtml","img");
D.addEventListener("load",function(){dq.add(n,this);
m&&m(this);
z.manager.itemEnd(n)
},!1);
D.addEventListener("error",function(F){C&&C(F);
z.manager.itemEnd(n);
z.manager.itemError(n)
},!1);
"data:"!==n.substr(0,5)&&void 0!==this.crossOrigin&&(D.crossOrigin=this.crossOrigin);
z.manager.itemStart(n);
D.src=n;
return D
},setCrossOrigin:function(m){this.crossOrigin=m;
return this
},setPath:function(m){this.path=m;
return this
}});
Object.assign(eW.prototype,{crossOrigin:"Anonymous",load:function(n,m,K,F){function D(L){z.load(n[L],function(N){C.images[L]=N;
w++;
6===w&&(C.needsUpdate=!0,m&&m(C))
},void 0,F)
}var C=new bS,z=new cD(this.manager);
z.setCrossOrigin(this.crossOrigin);
z.setPath(this.path);
var w=0;
for(K=0;
K<n.length;
++K){D(K)
}return C
},setCrossOrigin:function(m){this.crossOrigin=m;
return this
},setPath:function(m){this.path=m;
return this
}});
Object.assign(aL.prototype,{crossOrigin:"Anonymous",load:function(n,m,D,C){var z=new cD(this.manager);
z.setCrossOrigin(this.crossOrigin);
z.setPath(this.path);
var w=new eR;
w.image=z.load(n,function(){var F=0<n.search(/\.(jpg|jpeg)$/)||0===n.search(/^data\:image\/jpeg/);
w.format=F?1022:1023;
w.needsUpdate=!0;
void 0!==m&&m(w)
},D,C);
return w
},setCrossOrigin:function(m){this.crossOrigin=m;
return this
},setPath:function(m){this.path=m;
return this
}});
fs.prototype=Object.assign(Object.create(ev.prototype),{constructor:fs,isLight:!0,copy:function(m){ev.prototype.copy.call(this,m);
this.color.copy(m.color);
this.intensity=m.intensity;
return this
},toJSON:function(m){m=ev.prototype.toJSON.call(this,m);
m.object.color=this.color.getHex();
m.object.intensity=this.intensity;
void 0!==this.groundColor&&(m.object.groundColor=this.groundColor.getHex());
void 0!==this.distance&&(m.object.distance=this.distance);
void 0!==this.angle&&(m.object.angle=this.angle);
void 0!==this.decay&&(m.object.decay=this.decay);
void 0!==this.penumbra&&(m.object.penumbra=this.penumbra);
void 0!==this.shadow&&(m.object.shadow=this.shadow.toJSON());
return m
}});
az.prototype=Object.assign(Object.create(fs.prototype),{constructor:az,isHemisphereLight:!0,copy:function(m){fs.prototype.copy.call(this,m);
this.groundColor.copy(m.groundColor);
return this
}});
Object.assign(a6.prototype,{copy:function(m){this.camera=m.camera.clone();
this.bias=m.bias;
this.radius=m.radius;
this.mapSize.copy(m.mapSize);
return this
},clone:function(){return(new this.constructor).copy(this)
},toJSON:function(){var m={};
0!==this.bias&&(m.bias=this.bias);
1!==this.radius&&(m.radius=this.radius);
if(512!==this.mapSize.x||512!==this.mapSize.y){m.mapSize=this.mapSize.toArray()
}m.camera=this.camera.toJSON(!1).object;
delete m.camera.matrix;
return m
}});
al.prototype=Object.assign(Object.create(a6.prototype),{constructor:al,isSpotLightShadow:!0,update:function(n){var m=this.camera,z=2*eN.RAD2DEG*n.angle,w=this.mapSize.width/this.mapSize.height;
n=n.distance||m.far;
if(z!==m.fov||w!==m.aspect||n!==m.far){m.fov=z,m.aspect=w,m.far=n,m.updateProjectionMatrix()
}}});
I.prototype=Object.assign(Object.create(fs.prototype),{constructor:I,isSpotLight:!0,copy:function(m){fs.prototype.copy.call(this,m);
this.distance=m.distance;
this.angle=m.angle;
this.penumbra=m.penumbra;
this.decay=m.decay;
this.target=m.target.clone();
this.shadow=m.shadow.clone();
return this
}});
q.prototype=Object.assign(Object.create(fs.prototype),{constructor:q,isPointLight:!0,copy:function(m){fs.prototype.copy.call(this,m);
this.distance=m.distance;
this.decay=m.decay;
this.shadow=m.shadow.clone();
return this
}});
d.prototype=Object.assign(Object.create(a6.prototype),{constructor:d});
fA.prototype=Object.assign(Object.create(fs.prototype),{constructor:fA,isDirectionalLight:!0,copy:function(m){fs.prototype.copy.call(this,m);
this.target=m.target.clone();
this.shadow=m.shadow.clone();
return this
}});
fi.prototype=Object.assign(Object.create(fs.prototype),{constructor:fi,isAmbientLight:!0});
aX.prototype=Object.assign(Object.create(fs.prototype),{constructor:aX,isRectAreaLight:!0,copy:function(m){fs.prototype.copy.call(this,m);
this.width=m.width;
this.height=m.height;
return this
},toJSON:function(m){m=fs.prototype.toJSON.call(this,m);
m.object.width=this.width;
m.object.height=this.height;
return m
}});
var d4={arraySlice:function(n,m,w){return d4.isTypedArray(n)?new n.constructor(n.subarray(m,void 0!==w?w:n.length)):n.slice(m,w)
},convertArray:function(n,m,w){return !n||!w&&n.constructor===m?n:"number"===typeof m.BYTES_PER_ELEMENT?new m(n):Array.prototype.slice.call(n)
},isTypedArray:function(m){return ArrayBuffer.isView(m)&&!(m instanceof DataView)
},getKeyframeOrder:function(n){for(var m=n.length,z=Array(m),w=0;
w!==m;
++w){z[w]=w
}z.sort(function(C,D){return n[C]-n[D]
});
return z
},sortedArray:function(L,K,F){for(var D=L.length,C=new L.constructor(D),z=0,w=0;
w!==D;
++z){for(var n=F[z]*K,m=0;
m!==K;
++m){C[w++]=L[n+m]
}}return C
},flattenJSON:function(n,m,F,D){for(var C=1,z=n[0];
void 0!==z&&void 0===z[D];
){z=n[C++]
}if(void 0!==z){var w=z[D];
if(void 0!==w){if(Array.isArray(w)){do{w=z[D],void 0!==w&&(m.push(z.time),F.push.apply(F,w)),z=n[C++]
}while(void 0!==z)
}else{if(void 0!==w.toArray){do{w=z[D],void 0!==w&&(m.push(z.time),w.toArray(F,F.length)),z=n[C++]
}while(void 0!==z)
}else{do{w=z[D],void 0!==w&&(m.push(z.time),F.push(w)),z=n[C++]
}while(void 0!==z)
}}}}}};
Object.assign(u.prototype,{evaluate:function(n){var m=this.parameterPositions,D=this._cachedIndex,C=m[D],z=m[D-1];
n:{m:{D:{C:if(!(n<C)){for(var w=D+2;
;
){if(void 0===C){if(n<z){break C
}this._cachedIndex=D=m.length;
return this.afterEnd_(D-1,n,z)
}if(D===w){break
}z=C;
C=m[++D];
if(n<C){break m
}}C=m.length;
break D
}if(n>=z){break n
}else{w=m[1];
n<w&&(D=2,z=w);
for(w=D-2;
;
){if(void 0===z){return this._cachedIndex=0,this.beforeStart_(0,n,C)
}if(D===w){break
}C=z;
z=m[--D-1];
if(n>=z){break m
}}C=D;
D=0
}}for(;
D<C;
){z=D+C>>>1,n<m[z]?C=z:D=z+1
}C=m[D];
z=m[D-1];
if(void 0===z){return this._cachedIndex=0,this.beforeStart_(0,n,C)
}if(void 0===C){return this._cachedIndex=D=m.length,this.afterEnd_(D-1,z,n)
}}this._cachedIndex=D;
this.intervalChanged_(D,z,C)
}return this.interpolate_(D,z,n,C)
},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_
},copySampleValue_:function(n){var m=this.resultBuffer,C=this.sampleValues,z=this.valueSize;
n*=z;
for(var w=0;
w!==z;
++w){m[w]=C[n+w]
}return m
},interpolate_:function(n,m,z,w){throw Error("call to abstract method")
},intervalChanged_:function(n,m,w){}});
Object.assign(u.prototype,{beforeStart_:u.prototype.copySampleValue_,afterEnd_:u.prototype.copySampleValue_});
aE.prototype=Object.assign(Object.create(u.prototype),{constructor:aE,DefaultSettings_:{endingStart:2400,endingEnd:2400},intervalChanged_:function(n,m,K){var F=this.parameterPositions,D=n-2,C=n+1,z=F[D],w=F[C];
if(void 0===z){switch(this.getSettings_().endingStart){case 2401:D=n;
z=2*m-K;
break;
case 2402:D=F.length-2;
z=m+F[D]-F[D+1];
break;
default:D=n,z=K
}}if(void 0===w){switch(this.getSettings_().endingEnd){case 2401:C=n;
w=2*K-m;
break;
case 2402:C=1;
w=K+F[1]-F[0];
break;
default:C=n-1,w=m
}}n=0.5*(K-m);
F=this.valueSize;
this._weightPrev=n/(m-z);
this._weightNext=n/(w-K);
this._offsetPrev=D*F;
this._offsetNext=C*F
},interpolate_:function(S,R,Q,P){var O=this.resultBuffer,N=this.sampleValues,L=this.valueSize;
S*=L;
var K=S-L,F=this._offsetPrev,D=this._offsetNext,C=this._weightPrev,w=this._weightNext,z=(Q-R)/(P-R);
Q=z*z;
P=Q*z;
R=-C*P+2*C*Q-C*z;
C=(1+C)*P+(-1.5-2*C)*Q+(-0.5+C)*z+1;
z=(-1-w)*P+(1.5+w)*Q+0.5*z;
w=w*P-w*Q;
for(Q=0;
Q!==L;
++Q){O[Q]=R*N[F+Q]+C*N[K+Q]+z*N[S+Q]+w*N[D+Q]
}return O
}});
cs.prototype=Object.assign(Object.create(u.prototype),{constructor:cs,interpolate_:function(n,m,K,F){var D=this.resultBuffer,C=this.sampleValues,z=this.valueSize;
n*=z;
var w=n-z;
m=(K-m)/(F-m);
K=1-m;
for(F=0;
F!==z;
++F){D[F]=C[w+F]*K+C[n+F]*m
}return D
}});
ar.prototype=Object.assign(Object.create(u.prototype),{constructor:ar,interpolate_:function(n,m,z,w){return this.copySampleValue_(n-1)
}});
var fr={TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(m){return new ar(this.times,this.values,this.getValueSize(),m)
},InterpolantFactoryMethodLinear:function(m){return new cs(this.times,this.values,this.getValueSize(),m)
},InterpolantFactoryMethodSmooth:function(m){return new aE(this.times,this.values,this.getValueSize(),m)
},setInterpolation:function(n){switch(n){case 2300:var m=this.InterpolantFactoryMethodDiscrete;
break;
case 2301:m=this.InterpolantFactoryMethodLinear;
break;
case 2302:m=this.InterpolantFactoryMethodSmooth
}if(void 0===m){m="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;
if(void 0===this.createInterpolant){if(n!==this.DefaultInterpolation){this.setInterpolation(this.DefaultInterpolation)
}else{throw Error(m)
}}console.warn("THREE.KeyframeTrackPrototype:",m)
}else{this.createInterpolant=m
}},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;
case this.InterpolantFactoryMethodLinear:return 2301;
case this.InterpolantFactoryMethodSmooth:return 2302
}},getValueSize:function(){return this.values.length/this.times.length
},shift:function(n){if(0!==n){for(var m=this.times,z=0,w=m.length;
z!==w;
++z){m[z]+=n
}}return this
},scale:function(n){if(1!==n){for(var m=this.times,z=0,w=m.length;
z!==w;
++z){m[z]*=n
}}return this
},trim:function(n,m){for(var D=this.times,C=D.length,z=0,w=C-1;
z!==C&&D[z]<n;
){++z
}for(;
-1!==w&&D[w]>m;
){--w
}++w;
if(0!==z||w!==C){z>=w&&(w=Math.max(w,1),z=w-1),n=this.getValueSize(),this.times=d4.arraySlice(D,z,w),this.values=d4.arraySlice(this.values,z*n,w*n)
}return this
},validate:function(){var n=!0,m=this.getValueSize();
0!==m-Math.floor(m)&&(console.error("THREE.KeyframeTrackPrototype: Invalid value size in track.",this),n=!1);
var F=this.times,m=this.values,D=F.length;
0===D&&(console.error("THREE.KeyframeTrackPrototype: Track is empty.",this),n=!1);
for(var C=null,z=0;
z!==D;
z++){var w=F[z];
if("number"===typeof w&&isNaN(w)){console.error("THREE.KeyframeTrackPrototype: Time is not a valid number.",this,z,w);
n=!1;
break
}if(null!==C&&C>w){console.error("THREE.KeyframeTrackPrototype: Out of order keys.",this,z,w,C);
n=!1;
break
}C=w
}if(void 0!==m&&d4.isTypedArray(m)){for(z=0,F=m.length;
z!==F;
++z){if(D=m[z],isNaN(D)){console.error("THREE.KeyframeTrackPrototype: Value is not a valid number.",this,z,D);
n=!1;
break
}}}return n
},optimize:function(){for(var S,R,Q=this.times,P=this.values,O=this.getValueSize(),N=2302===this.getInterpolation(),L=1,K=Q.length-1,F=1;
F<K;
++F){S=!1;
var D=Q[F];
if(D!==Q[F+1]&&(1!==F||D!==D[0])){if(N){S=!0
}else{R=F*O;
for(var C=R-O,w=R+O,D=0;
D!==O;
++D){var z=P[R+D];
if(z!==P[C+D]||z!==P[w+D]){S=!0;
break
}}}}if(S){if(F!==L){for(Q[L]=Q[F],R=F*O,S=L*O,D=0;
D!==O;
++D){P[S+D]=P[R+D]
}}++L
}}if(0<K){Q[L]=Q[K];
R=K*O;
S=L*O;
for(D=0;
D!==O;
++D){P[S+D]=P[R+D]
}++L
}L!==Q.length&&(this.times=d4.arraySlice(Q,0,L),this.values=d4.arraySlice(P,0,L*O));
return this
}};
eZ.prototype=Object.assign(Object.create(fr),{constructor:eZ,ValueTypeName:"vector"});
Y.prototype=Object.assign(Object.create(u.prototype),{constructor:Y,interpolate_:function(n,m,F,D){var C=this.resultBuffer,z=this.sampleValues,w=this.valueSize;
n*=w;
m=(F-m)/(D-m);
for(F=n+w;
n!==F;
n+=4){c8.slerpFlat(C,0,z,n-w,z,n,m)
}return C
}});
b9.prototype=Object.assign(Object.create(fr),{constructor:b9,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(m){return new Y(this.times,this.values,this.getValueSize(),m)
},InterpolantFactoryMethodSmooth:void 0});
eC.prototype=Object.assign(Object.create(fr),{constructor:eC,ValueTypeName:"number"});
y.prototype=Object.assign(Object.create(fr),{constructor:y,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});
i.prototype=Object.assign(Object.create(fr),{constructor:i,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});
fG.prototype=Object.assign(Object.create(fr),{constructor:fG,ValueTypeName:"color"});
aB.prototype=fr;
fr.constructor=aB;
Object.assign(aB,{parse:function(n){if(void 0===n.type){throw Error("track type undefined, can not parse")
}var m=aB._getTrackTypeForValueTypeName(n.type);
if(void 0===n.times){var z=[],w=[];
d4.flattenJSON(n.keys,z,w,"value");
n.times=z;
n.values=w
}return void 0!==m.parse?m.parse(n):new m(n.name,n.times,n.values,n.interpolation)
},toJSON:function(n){var m=n.constructor;
if(void 0!==m.toJSON){m=m.toJSON(n)
}else{var m={name:n.name,times:d4.convertArray(n.times,Array),values:d4.convertArray(n.values,Array)},w=n.getInterpolation();
w!==n.DefaultInterpolation&&(m.interpolation=w)
}m.type=n.ValueTypeName;
return m
},_getTrackTypeForValueTypeName:function(m){switch(m.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return eC;
case"vector":case"vector2":case"vector3":case"vector4":return eZ;
case"color":return fG;
case"quaternion":return b9;
case"bool":case"boolean":return i;
case"string":return y
}throw Error("Unsupported typeName: "+m)
}});
Object.assign(aH,{parse:function(n){for(var m=[],D=n.tracks,C=1/(n.fps||1),z=0,w=D.length;
z!==w;
++z){m.push(aB.parse(D[z]).scale(C))
}return new aH(n.name,n.duration,m)
},toJSON:function(n){var m=[],C=n.tracks;
n={name:n.name,duration:n.duration,tracks:m};
for(var z=0,w=C.length;
z!==w;
++z){m.push(aB.toJSON(C[z]))
}return n
},CreateFromMorphTargetSequence:function(N,L,K,F){for(var D=L.length,C=[],z=0;
z<D;
z++){var w=[],n=[];
w.push((z+D-1)%D,z,(z+1)%D);
n.push(0,1,0);
var m=d4.getKeyframeOrder(w),w=d4.sortedArray(w,1,m),n=d4.sortedArray(n,1,m);
F||0!==w[0]||(w.push(D),n.push(n[0]));
C.push((new eC(".morphTargetInfluences["+L[z].name+"]",w,n)).scale(1/K))
}return new aH(N,-1,C)
},findByName:function(n,m){var w=n;
Array.isArray(n)||(w=n.geometry&&n.geometry.animations||n.animations);
for(n=0;
n<w.length;
n++){if(w[n].name===m){return w[n]
}}return null
},CreateClipsFromMorphTargetSequences:function(N,L,K){for(var F,D={},C=/^([\w-]*?)([\d]+)$/,z=0,w=N.length;
z<w;
z++){var n=N[z],m=n.name.match(C);
m&&1<m.length&&(F=m[1],(m=D[F])||(D[F]=m=[]),m.push(n))
}N=[];
for(F in D){N.push(aH.CreateFromMorphTargetSequence(F,D[F],L,K))
}return N
},parseAnimation:function(V,S){if(!V){return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null
}var R=function(n,m,ad,ac,ab){if(0!==ad.length){var aa=[],X=[];
d4.flattenJSON(ad,aa,X,ac);
0!==aa.length&&ab.push(new n(m,aa,X))
}},Q=[],P=V.name||"default",O=V.length||-1,N=V.fps||30;
V=V.hierarchy||[];
for(var L=0;
L<V.length;
L++){var K=V[L].keys;
if(K&&0!==K.length){if(K[0].morphTargets){for(var O={},F=0;
F<K.length;
F++){if(K[F].morphTargets){for(var D=0;
D<K[F].morphTargets.length;
D++){O[K[F].morphTargets[D]]=-1
}}}for(var z in O){for(var C=[],w=[],D=0;
D!==K[F].morphTargets.length;
++D){var W=K[F];
C.push(W.time);
w.push(W.morphTarget===z?1:0)
}Q.push(new eC(".morphTargetInfluence["+z+"]",C,w))
}O=O.length*(N||1)
}else{F=".bones["+S[L].name+"]",R(eZ,F+".position",K,"pos",Q),R(b9,F+".quaternion",K,"rot",Q),R(eZ,F+".scale",K,"scl",Q)
}}}return 0===Q.length?null:new aH(P,O,Q)
}});
Object.assign(aH.prototype,{resetDuration:function(){for(var n=0,m=0,z=this.tracks.length;
m!==z;
++m){var w=this.tracks[m],n=Math.max(n,w.times[w.times.length-1])
}this.duration=n
},trim:function(){for(var m=0;
m<this.tracks.length;
m++){this.tracks[m].trim(0,this.duration)
}return this
},optimize:function(){for(var m=0;
m<this.tracks.length;
m++){this.tracks[m].optimize()
}return this
}});
Object.assign(fv.prototype,{load:function(n,m,C,z){var w=this;
(new e8(w.manager)).load(n,function(D){m(w.parse(JSON.parse(D)))
},C,z)
},setTextures:function(m){this.textures=m
},parse:function(n){function m(D){void 0===C[D]&&console.warn("THREE.MaterialLoader: Undefined texture",D);
return C[D]
}var C=this.textures,z=new aI[n.type];
void 0!==n.uuid&&(z.uuid=n.uuid);
void 0!==n.name&&(z.name=n.name);
void 0!==n.color&&z.color.setHex(n.color);
void 0!==n.roughness&&(z.roughness=n.roughness);
void 0!==n.metalness&&(z.metalness=n.metalness);
void 0!==n.emissive&&z.emissive.setHex(n.emissive);
void 0!==n.specular&&z.specular.setHex(n.specular);
void 0!==n.shininess&&(z.shininess=n.shininess);
void 0!==n.clearCoat&&(z.clearCoat=n.clearCoat);
void 0!==n.clearCoatRoughness&&(z.clearCoatRoughness=n.clearCoatRoughness);
void 0!==n.uniforms&&(z.uniforms=n.uniforms);
void 0!==n.vertexShader&&(z.vertexShader=n.vertexShader);
void 0!==n.fragmentShader&&(z.fragmentShader=n.fragmentShader);
void 0!==n.vertexColors&&(z.vertexColors=n.vertexColors);
void 0!==n.fog&&(z.fog=n.fog);
void 0!==n.flatShading&&(z.flatShading=n.flatShading);
void 0!==n.blending&&(z.blending=n.blending);
void 0!==n.side&&(z.side=n.side);
void 0!==n.opacity&&(z.opacity=n.opacity);
void 0!==n.transparent&&(z.transparent=n.transparent);
void 0!==n.alphaTest&&(z.alphaTest=n.alphaTest);
void 0!==n.depthTest&&(z.depthTest=n.depthTest);
void 0!==n.depthWrite&&(z.depthWrite=n.depthWrite);
void 0!==n.colorWrite&&(z.colorWrite=n.colorWrite);
void 0!==n.wireframe&&(z.wireframe=n.wireframe);
void 0!==n.wireframeLinewidth&&(z.wireframeLinewidth=n.wireframeLinewidth);
void 0!==n.wireframeLinecap&&(z.wireframeLinecap=n.wireframeLinecap);
void 0!==n.wireframeLinejoin&&(z.wireframeLinejoin=n.wireframeLinejoin);
void 0!==n.skinning&&(z.skinning=n.skinning);
void 0!==n.morphTargets&&(z.morphTargets=n.morphTargets);
void 0!==n.dithering&&(z.dithering=n.dithering);
void 0!==n.visible&&(z.visible=n.visible);
void 0!==n.userData&&(z.userData=n.userData);
void 0!==n.shading&&(z.flatShading=1===n.shading);
void 0!==n.size&&(z.size=n.size);
void 0!==n.sizeAttenuation&&(z.sizeAttenuation=n.sizeAttenuation);
void 0!==n.map&&(z.map=m(n.map));
void 0!==n.alphaMap&&(z.alphaMap=m(n.alphaMap),z.transparent=!0);
void 0!==n.bumpMap&&(z.bumpMap=m(n.bumpMap));
void 0!==n.bumpScale&&(z.bumpScale=n.bumpScale);
void 0!==n.normalMap&&(z.normalMap=m(n.normalMap));
if(void 0!==n.normalScale){var w=n.normalScale;
!1===Array.isArray(w)&&(w=[w,w]);
z.normalScale=(new e0).fromArray(w)
}void 0!==n.displacementMap&&(z.displacementMap=m(n.displacementMap));
void 0!==n.displacementScale&&(z.displacementScale=n.displacementScale);
void 0!==n.displacementBias&&(z.displacementBias=n.displacementBias);
void 0!==n.roughnessMap&&(z.roughnessMap=m(n.roughnessMap));
void 0!==n.metalnessMap&&(z.metalnessMap=m(n.metalnessMap));
void 0!==n.emissiveMap&&(z.emissiveMap=m(n.emissiveMap));
void 0!==n.emissiveIntensity&&(z.emissiveIntensity=n.emissiveIntensity);
void 0!==n.specularMap&&(z.specularMap=m(n.specularMap));
void 0!==n.envMap&&(z.envMap=m(n.envMap));
void 0!==n.reflectivity&&(z.reflectivity=n.reflectivity);
void 0!==n.lightMap&&(z.lightMap=m(n.lightMap));
void 0!==n.lightMapIntensity&&(z.lightMapIntensity=n.lightMapIntensity);
void 0!==n.aoMap&&(z.aoMap=m(n.aoMap));
void 0!==n.aoMapIntensity&&(z.aoMapIntensity=n.aoMapIntensity);
void 0!==n.gradientMap&&(z.gradientMap=m(n.gradientMap));
return z
}});
Object.assign(eA.prototype,{load:function(n,m,C,z){var w=this;
(new e8(w.manager)).load(n,function(D){m(w.parse(JSON.parse(D)))
},C,z)
},parse:function(n){var m=new eX;
var D=n.data.index;
void 0!==D&&(D=new dn[D.type](D.array),m.setIndex(new eT(D,1)));
var C=n.data.attributes;
for(w in C){var z=C[w];
D=new dn[z.type](z.array);
m.addAttribute(w,new eT(D,z.itemSize,z.normalized))
}var w=n.data.groups||n.data.drawcalls||n.data.offsets;
if(void 0!==w){for(D=0,C=w.length;
D!==C;
++D){z=w[D],m.addGroup(z.start,z.count,z.materialIndex)
}}n=n.data.boundingSphere;
void 0!==n&&(w=new ew,void 0!==n.center&&w.fromArray(n.center),m.boundingSphere=new av(w,n.radius));
return m
}});
var dn={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:"undefined"!==typeof Uint8ClampedArray?Uint8ClampedArray:Uint8Array,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};
el.Handlers={handlers:[],add:function(n,m){this.handlers.push(n,m)
},get:function(n){for(var m=this.handlers,C=0,z=m.length;
C<z;
C+=2){var w=m[C+1];
if(m[C].test(n)){return w
}}return null
}};
Object.assign(el.prototype,{crossOrigin:void 0,extractUrlBase:function(m){m=m.split("/");
if(1===m.length){return"./"
}m.pop();
return m.join("/")+"/"
},initMaterials:function(n,m,C){for(var z=[],w=0;
w<n.length;
++w){z[w]=this.createMaterial(n[w],m,C)
}return z
},createMaterial:function(){var n={NoBlending:0,NormalBlending:1,AdditiveBlending:2,SubtractiveBlending:3,MultiplyBlending:4,CustomBlending:5},m=new e2,z=new aL,w=new fv;
return function(P,N,L){function K(S,Q,X,W,V){S=N+S;
var R=el.Handlers.get(S);
null!==R?S=R.load(S):(z.setCrossOrigin(L),S=z.load(S));
void 0!==Q&&(S.repeat.fromArray(Q),1!==Q[0]&&(S.wrapS=1000),1!==Q[1]&&(S.wrapT=1000));
void 0!==X&&S.offset.fromArray(X);
void 0!==W&&("repeat"===W[0]&&(S.wrapS=1000),"mirror"===W[0]&&(S.wrapS=1002),"repeat"===W[1]&&(S.wrapT=1000),"mirror"===W[1]&&(S.wrapT=1002));
void 0!==V&&(S.anisotropy=V);
Q=eN.generateUUID();
F[Q]=S;
return Q
}var F={},D={uuid:eN.generateUUID(),type:"MeshLambertMaterial"},C;
for(C in P){var O=P[C];
switch(C){case"DbgColor":case"DbgIndex":case"opticalDensity":case"illumination":break;
case"DbgName":D.name=O;
break;
case"blending":D.blending=n[O];
break;
case"colorAmbient":case"mapAmbient":console.warn("THREE.Loader.createMaterial:",C,"is no longer supported.");
break;
case"colorDiffuse":D.color=m.fromArray(O).getHex();
break;
case"colorSpecular":D.specular=m.fromArray(O).getHex();
break;
case"colorEmissive":D.emissive=m.fromArray(O).getHex();
break;
case"specularCoef":D.shininess=O;
break;
case"shading":"basic"===O.toLowerCase()&&(D.type="MeshBasicMaterial");
"phong"===O.toLowerCase()&&(D.type="MeshPhongMaterial");
"standard"===O.toLowerCase()&&(D.type="MeshStandardMaterial");
break;
case"mapDiffuse":D.map=K(O,P.mapDiffuseRepeat,P.mapDiffuseOffset,P.mapDiffuseWrap,P.mapDiffuseAnisotropy);
break;
case"mapDiffuseRepeat":case"mapDiffuseOffset":case"mapDiffuseWrap":case"mapDiffuseAnisotropy":break;
case"mapEmissive":D.emissiveMap=K(O,P.mapEmissiveRepeat,P.mapEmissiveOffset,P.mapEmissiveWrap,P.mapEmissiveAnisotropy);
break;
case"mapEmissiveRepeat":case"mapEmissiveOffset":case"mapEmissiveWrap":case"mapEmissiveAnisotropy":break;
case"mapLight":D.lightMap=K(O,P.mapLightRepeat,P.mapLightOffset,P.mapLightWrap,P.mapLightAnisotropy);
break;
case"mapLightRepeat":case"mapLightOffset":case"mapLightWrap":case"mapLightAnisotropy":break;
case"mapAO":D.aoMap=K(O,P.mapAORepeat,P.mapAOOffset,P.mapAOWrap,P.mapAOAnisotropy);
break;
case"mapAORepeat":case"mapAOOffset":case"mapAOWrap":case"mapAOAnisotropy":break;
case"mapBump":D.bumpMap=K(O,P.mapBumpRepeat,P.mapBumpOffset,P.mapBumpWrap,P.mapBumpAnisotropy);
break;
case"mapBumpScale":D.bumpScale=O;
break;
case"mapBumpRepeat":case"mapBumpOffset":case"mapBumpWrap":case"mapBumpAnisotropy":break;
case"mapNormal":D.normalMap=K(O,P.mapNormalRepeat,P.mapNormalOffset,P.mapNormalWrap,P.mapNormalAnisotropy);
break;
case"mapNormalFactor":D.normalScale=[O,O];
break;
case"mapNormalRepeat":case"mapNormalOffset":case"mapNormalWrap":case"mapNormalAnisotropy":break;
case"mapSpecular":D.specularMap=K(O,P.mapSpecularRepeat,P.mapSpecularOffset,P.mapSpecularWrap,P.mapSpecularAnisotropy);
break;
case"mapSpecularRepeat":case"mapSpecularOffset":case"mapSpecularWrap":case"mapSpecularAnisotropy":break;
case"mapMetalness":D.metalnessMap=K(O,P.mapMetalnessRepeat,P.mapMetalnessOffset,P.mapMetalnessWrap,P.mapMetalnessAnisotropy);
break;
case"mapMetalnessRepeat":case"mapMetalnessOffset":case"mapMetalnessWrap":case"mapMetalnessAnisotropy":break;
case"mapRoughness":D.roughnessMap=K(O,P.mapRoughnessRepeat,P.mapRoughnessOffset,P.mapRoughnessWrap,P.mapRoughnessAnisotropy);
break;
case"mapRoughnessRepeat":case"mapRoughnessOffset":case"mapRoughnessWrap":case"mapRoughnessAnisotropy":break;
case"mapAlpha":D.alphaMap=K(O,P.mapAlphaRepeat,P.mapAlphaOffset,P.mapAlphaWrap,P.mapAlphaAnisotropy);
break;
case"mapAlphaRepeat":case"mapAlphaOffset":case"mapAlphaWrap":case"mapAlphaAnisotropy":break;
case"flipSided":D.side=1;
break;
case"doubleSided":D.side=2;
break;
case"transparency":console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity");
D.opacity=O;
break;
case"depthTest":case"depthWrite":case"colorWrite":case"opacity":case"reflectivity":case"transparent":case"visible":case"wireframe":D[C]=O;
break;
case"vertexColors":!0===O&&(D.vertexColors=2);
"face"===O&&(D.vertexColors=1);
break;
default:console.error("THREE.Loader.createMaterial: Unsupported",C,O)
}}"MeshBasicMaterial"===D.type&&delete D.emissive;
"MeshPhongMaterial"!==D.type&&delete D.specular;
1>D.opacity&&(D.transparent=!0);
w.setTextures(F);
return w.parse(D)
}
}()});
Object.assign(ej.prototype,{load:function(n,m,F,D){var C=this,z=this.texturePath&&"string"===typeof this.texturePath?this.texturePath:el.prototype.extractUrlBase(n),w=new e8(this.manager);
w.setWithCredentials(this.withCredentials);
w.load(n,function(L){L=JSON.parse(L);
var K=L.metadata;
if(void 0!==K&&(K=K.type,void 0!==K)){if("object"===K.toLowerCase()){console.error("THREE.JSONLoader: "+n+" should be loaded with THREE.ObjectLoader instead.");
return
}if("scene"===K.toLowerCase()){console.error("THREE.JSONLoader: "+n+" should be loaded with THREE.SceneLoader instead.");
return
}}L=C.parse(L,z);
m(L.geometry,L.materials)
},F,D)
},setTexturePath:function(m){this.texturePath=m
},parse:function(){return function(ag,af){void 0!==ag.data&&(ag=ag.data);
ag.scale=void 0!==ag.scale?1/ag.scale:1;
var ae=new eO,ad=ag,ac,ab,aa,X=ad.faces;
var W=ad.vertices;
var V=ad.normals,S=ad.colors;
var R=ad.scale;
var O=0;
if(void 0!==ad.uvs){for(ac=0;
ac<ad.uvs.length;
ac++){ad.uvs[ac].length&&O++
}for(ac=0;
ac<O;
ac++){ae.faceVertexUvs[ac]=[]
}}var P=0;
for(aa=W.length;
P<aa;
){ac=new ew,ac.x=W[P++]*R,ac.y=W[P++]*R,ac.z=W[P++]*R,ae.vertices.push(ac)
}P=0;
for(aa=X.length;
P<aa;
){W=X[P++];
var L=W&1;
var N=W&2;
ac=W&8;
var D=W&16;
var C=W&32;
R=W&64;
W&=128;
if(L){L=new c2;
L.a=X[P];
L.b=X[P+1];
L.c=X[P+3];
var K=new c2;
K.a=X[P+1];
K.b=X[P+2];
K.c=X[P+3];
P+=4;
N&&(N=X[P++],L.materialIndex=N,K.materialIndex=N);
N=ae.faces.length;
if(ac){for(ac=0;
ac<O;
ac++){var n=ad.uvs[ac];
ae.faceVertexUvs[ac][N]=[];
ae.faceVertexUvs[ac][N+1]=[];
for(ab=0;
4>ab;
ab++){var Q=X[P++];
var F=n[2*Q];
Q=n[2*Q+1];
F=new e0(F,Q);
2!==ab&&ae.faceVertexUvs[ac][N].push(F);
0!==ab&&ae.faceVertexUvs[ac][N+1].push(F)
}}}D&&(D=3*X[P++],L.normal.set(V[D++],V[D++],V[D]),K.normal.copy(L.normal));
if(C){for(ac=0;
4>ac;
ac++){D=3*X[P++],C=new ew(V[D++],V[D++],V[D]),2!==ac&&L.vertexNormals.push(C),0!==ac&&K.vertexNormals.push(C)
}}R&&(R=X[P++],R=S[R],L.color.setHex(R),K.color.setHex(R));
if(W){for(ac=0;
4>ac;
ac++){R=X[P++],R=S[R],2!==ac&&L.vertexColors.push(new e2(R)),0!==ac&&K.vertexColors.push(new e2(R))
}}ae.faces.push(L);
ae.faces.push(K)
}else{L=new c2;
L.a=X[P++];
L.b=X[P++];
L.c=X[P++];
N&&(N=X[P++],L.materialIndex=N);
N=ae.faces.length;
if(ac){for(ac=0;
ac<O;
ac++){for(n=ad.uvs[ac],ae.faceVertexUvs[ac][N]=[],ab=0;
3>ab;
ab++){Q=X[P++],F=n[2*Q],Q=n[2*Q+1],F=new e0(F,Q),ae.faceVertexUvs[ac][N].push(F)
}}}D&&(D=3*X[P++],L.normal.set(V[D++],V[D++],V[D]));
if(C){for(ac=0;
3>ac;
ac++){D=3*X[P++],C=new ew(V[D++],V[D++],V[D]),L.vertexNormals.push(C)
}}R&&(R=X[P++],L.color.setHex(S[R]));
if(W){for(ac=0;
3>ac;
ac++){R=X[P++],L.vertexColors.push(new e2(S[R]))
}}ae.faces.push(L)
}}ad=ag;
P=void 0!==ad.influencesPerVertex?ad.influencesPerVertex:2;
if(ad.skinWeights){for(aa=0,X=ad.skinWeights.length;
aa<X;
aa+=P){ae.skinWeights.push(new eM(ad.skinWeights[aa],1<P?ad.skinWeights[aa+1]:0,2<P?ad.skinWeights[aa+2]:0,3<P?ad.skinWeights[aa+3]:0))
}}if(ad.skinIndices){for(aa=0,X=ad.skinIndices.length;
aa<X;
aa+=P){ae.skinIndices.push(new eM(ad.skinIndices[aa],1<P?ad.skinIndices[aa+1]:0,2<P?ad.skinIndices[aa+2]:0,3<P?ad.skinIndices[aa+3]:0))
}}ae.bones=ad.bones;
ae.bones&&0<ae.bones.length&&(ae.skinWeights.length!==ae.skinIndices.length||ae.skinIndices.length!==ae.vertices.length)&&console.warn("When skinning, number of vertices ("+ae.vertices.length+"), skinIndices ("+ae.skinIndices.length+"), and skinWeights ("+ae.skinWeights.length+") should match.");
aa=ag;
X=aa.scale;
if(void 0!==aa.morphTargets){for(ad=0,P=aa.morphTargets.length;
ad<P;
ad++){for(ae.morphTargets[ad]={},ae.morphTargets[ad].name=aa.morphTargets[ad].name,ae.morphTargets[ad].vertices=[],V=ae.morphTargets[ad].vertices,S=aa.morphTargets[ad].vertices,O=0,W=S.length;
O<W;
O+=3){R=new ew,R.x=S[O]*X,R.y=S[O+1]*X,R.z=S[O+2]*X,V.push(R)
}}}if(void 0!==aa.morphColors&&0<aa.morphColors.length){for(console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'),X=ae.faces,aa=aa.morphColors[0].colors,ad=0,P=X.length;
ad<P;
ad++){X[ad].color.fromArray(aa,3*ad)
}}aa=ag;
ad=[];
P=[];
void 0!==aa.animation&&P.push(aa.animation);
void 0!==aa.animations&&(aa.animations.length?P=P.concat(aa.animations):P.push(aa.animations));
for(aa=0;
aa<P.length;
aa++){(X=aH.parseAnimation(P[aa],ae.bones))&&ad.push(X)
}ae.morphTargets&&(P=aH.CreateClipsFromMorphTargetSequences(ae.morphTargets,10),ad=ad.concat(P));
0<ad.length&&(ae.animations=ad);
ae.computeFaceNormals();
ae.computeBoundingSphere();
if(void 0===ag.materials||0===ag.materials.length){return{geometry:ae}
}ag=el.prototype.initMaterials(ag.materials,af,this.crossOrigin);
return{geometry:ae,materials:ag}
}
}()});
Object.assign(cB.prototype,{load:function(n,m,C,z){""===this.texturePath&&(this.texturePath=n.substring(0,n.lastIndexOf("/")+1));
var w=this;
(new e8(w.manager)).load(n,function(K){var F=null;
try{F=JSON.parse(K)
}catch(D){void 0!==z&&z(D);
console.error("THREE:ObjectLoader: Can't parse "+n+".",D.message);
return
}K=F.metadata;
void 0===K||void 0===K.type||"geometry"===K.type.toLowerCase()?console.error("THREE.ObjectLoader: Can't load "+n+". Use THREE.JSONLoader instead."):w.parse(F,m)
},C,z)
},setTexturePath:function(m){this.texturePath=m
},setCrossOrigin:function(m){this.crossOrigin=m
},parse:function(n,m){var C=this.parseGeometries(n.geometries),z=this.parseImages(n.images,function(){void 0!==m&&m(w)
}),z=this.parseTextures(n.textures,z),z=this.parseMaterials(n.materials,z),w=this.parseObject(n.object,C,z);
n.animations&&(w.animations=this.parseAnimations(n.animations));
void 0!==n.images&&0!==n.images.length||void 0===m||m(w);
return w
},parseGeometries:function(n){var m={};
if(void 0!==n){for(var K=new ej,F=new eA,D=0,C=n.length;
D<C;
D++){var z=n[D];
switch(z.type){case"PlaneGeometry":case"PlaneBufferGeometry":var w=new eu[z.type](z.width,z.height,z.widthSegments,z.heightSegments);
break;
case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":w=new eu[z.type](z.width,z.height,z.depth,z.widthSegments,z.heightSegments,z.depthSegments);
break;
case"CircleGeometry":case"CircleBufferGeometry":w=new eu[z.type](z.radius,z.segments,z.thetaStart,z.thetaLength);
break;
case"CylinderGeometry":case"CylinderBufferGeometry":w=new eu[z.type](z.radiusTop,z.radiusBottom,z.height,z.radialSegments,z.heightSegments,z.openEnded,z.thetaStart,z.thetaLength);
break;
case"ConeGeometry":case"ConeBufferGeometry":w=new eu[z.type](z.radius,z.height,z.radialSegments,z.heightSegments,z.openEnded,z.thetaStart,z.thetaLength);
break;
case"SphereGeometry":case"SphereBufferGeometry":w=new eu[z.type](z.radius,z.widthSegments,z.heightSegments,z.phiStart,z.phiLength,z.thetaStart,z.thetaLength);
break;
case"DodecahedronGeometry":case"IcosahedronGeometry":case"OctahedronGeometry":case"TetrahedronGeometry":w=new eu[z.type](z.radius,z.detail);
break;
case"RingGeometry":case"RingBufferGeometry":w=new eu[z.type](z.innerRadius,z.outerRadius,z.thetaSegments,z.phiSegments,z.thetaStart,z.thetaLength);
break;
case"TorusGeometry":case"TorusBufferGeometry":w=new eu[z.type](z.radius,z.tube,z.radialSegments,z.tubularSegments,z.arc);
break;
case"TorusKnotGeometry":case"TorusKnotBufferGeometry":w=new eu[z.type](z.radius,z.tube,z.tubularSegments,z.radialSegments,z.p,z.q);
break;
case"LatheGeometry":case"LatheBufferGeometry":w=new eu[z.type](z.points,z.segments,z.phiStart,z.phiLength);
break;
case"BufferGeometry":w=F.parse(z);
break;
case"Geometry":w=K.parse(z,this.texturePath).geometry;
break;
default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+z.type+'"');
continue
}w.uuid=z.uuid;
void 0!==z.name&&(w.name=z.name);
m[z.uuid]=w
}}return m
},parseMaterials:function(n,m){var K={};
if(void 0!==n){var F=new fv;
F.setTextures(m);
m=0;
for(var D=n.length;
m<D;
m++){var C=n[m];
if("MultiMaterial"===C.type){for(var z=[],w=0;
w<C.materials.length;
w++){z.push(F.parse(C.materials[w]))
}K[C.uuid]=z
}else{K[C.uuid]=F.parse(C)
}}}return K
},parseAnimations:function(n){for(var m=[],z=0;
z<n.length;
z++){var w=aH.parse(n[z]);
m.push(w)
}return m
},parseImages:function(L,K){function F(N){D.manager.itemStart(N);
return z.load(N,function(){D.manager.itemEnd(N)
},void 0,function(){D.manager.itemEnd(N);
D.manager.itemError(N)
})
}var D=this,C={};
if(void 0!==L&&0<L.length){K=new bV(K);
var z=new cD(K);
z.setCrossOrigin(this.crossOrigin);
K=0;
for(var w=L.length;
K<w;
K++){var n=L[K],m=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(n.url)?n.url:D.texturePath+n.url;
C[n.uuid]=F(m)
}}return C
},parseTextures:function(n,m){function K(N,L){if("number"===typeof N){return N
}console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",N);
return L[N]
}var F={};
if(void 0!==n){for(var D=0,C=n.length;
D<C;
D++){var z=n[D];
void 0===z.image&&console.warn('THREE.ObjectLoader: No "image" specified for',z.uuid);
void 0===m[z.image]&&console.warn("THREE.ObjectLoader: Undefined image",z.image);
var w=new eR(m[z.image]);
w.needsUpdate=!0;
w.uuid=z.uuid;
void 0!==z.name&&(w.name=z.name);
void 0!==z.mapping&&(w.mapping=K(z.mapping,aw));
void 0!==z.offset&&w.offset.fromArray(z.offset);
void 0!==z.repeat&&w.repeat.fromArray(z.repeat);
void 0!==z.wrap&&(w.wrapS=K(z.wrap[0],cS),w.wrapT=K(z.wrap[1],cS));
void 0!==z.minFilter&&(w.minFilter=K(z.minFilter,cG));
void 0!==z.magFilter&&(w.magFilter=K(z.magFilter,cG));
void 0!==z.anisotropy&&(w.anisotropy=z.anisotropy);
void 0!==z.flipY&&(w.flipY=z.flipY);
F[z.uuid]=w
}}return F
},parseObject:function(){var m=new eQ;
return function(N,L,K){function F(O){void 0===L[O]&&console.warn("THREE.ObjectLoader: Undefined geometry",O);
return L[O]
}function D(P){if(void 0!==P){if(Array.isArray(P)){for(var O=[],S=0,R=P.length;
S<R;
S++){var Q=P[S];
void 0===K[Q]&&console.warn("THREE.ObjectLoader: Undefined material",Q);
O.push(K[Q])
}return O
}void 0===K[P]&&console.warn("THREE.ObjectLoader: Undefined material",P);
return K[P]
}}switch(N.type){case"Scene":var C=new b2;
void 0!==N.background&&Number.isInteger(N.background)&&(C.background=new e2(N.background));
void 0!==N.fog&&("Fog"===N.fog.type?C.fog=new e7(N.fog.color,N.fog.near,N.fog.far):"FogExp2"===N.fog.type&&(C.fog=new fx(N.fog.color,N.fog.density)));
break;
case"PerspectiveCamera":C=new cW(N.fov,N.aspect,N.near,N.far);
void 0!==N.focus&&(C.focus=N.focus);
void 0!==N.zoom&&(C.zoom=N.zoom);
void 0!==N.filmGauge&&(C.filmGauge=N.filmGauge);
void 0!==N.filmOffset&&(C.filmOffset=N.filmOffset);
void 0!==N.view&&(C.view=Object.assign({},N.view));
break;
case"OrthographicCamera":C=new ah(N.left,N.right,N.top,N.bottom,N.near,N.far);
break;
case"AmbientLight":C=new fi(N.color,N.intensity);
break;
case"DirectionalLight":C=new fA(N.color,N.intensity);
break;
case"PointLight":C=new q(N.color,N.intensity,N.distance,N.decay);
break;
case"RectAreaLight":C=new aX(N.color,N.intensity,N.width,N.height);
break;
case"SpotLight":C=new I(N.color,N.intensity,N.distance,N.angle,N.penumbra,N.decay);
break;
case"HemisphereLight":C=new az(N.color,N.groundColor,N.intensity);
break;
case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
case"Mesh":C=F(N.geometry);
var z=D(N.material);
C=C.bones&&0<C.bones.length?new by(C,z):new dR(C,z);
break;
case"LOD":C=new fB;
break;
case"Line":C=new a7(F(N.geometry),D(N.material),N.mode);
break;
case"LineLoop":C=new bm(F(N.geometry),D(N.material));
break;
case"LineSegments":C=new eJ(F(N.geometry),D(N.material));
break;
case"PointCloud":case"Points":C=new eH(F(N.geometry),D(N.material));
break;
case"Sprite":C=new e(D(N.material));
break;
case"Group":C=new aY;
break;
default:C=new ev
}C.uuid=N.uuid;
void 0!==N.name&&(C.name=N.name);
void 0!==N.matrix?(m.fromArray(N.matrix),m.decompose(C.position,C.quaternion,C.scale)):(void 0!==N.position&&C.position.fromArray(N.position),void 0!==N.rotation&&C.rotation.fromArray(N.rotation),void 0!==N.quaternion&&C.quaternion.fromArray(N.quaternion),void 0!==N.scale&&C.scale.fromArray(N.scale));
void 0!==N.castShadow&&(C.castShadow=N.castShadow);
void 0!==N.receiveShadow&&(C.receiveShadow=N.receiveShadow);
N.shadow&&(void 0!==N.shadow.bias&&(C.shadow.bias=N.shadow.bias),void 0!==N.shadow.radius&&(C.shadow.radius=N.shadow.radius),void 0!==N.shadow.mapSize&&C.shadow.mapSize.fromArray(N.shadow.mapSize),void 0!==N.shadow.camera&&(C.shadow.camera=this.parseObject(N.shadow.camera)));
void 0!==N.visible&&(C.visible=N.visible);
void 0!==N.userData&&(C.userData=N.userData);
if(void 0!==N.children){for(var z=N.children,w=0;
w<z.length;
w++){C.add(this.parseObject(z[w],L,K))
}}if("LOD"===N.type){for(N=N.levels,z=0;
z<N.length;
z++){var w=N[z],n=C.getObjectByProperty("uuid",w.object);
void 0!==n&&C.addLevel(n,w.distance)
}}return C
}
}()});
var aw={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,SphericalReflectionMapping:305,CubeUVReflectionMapping:306,CubeUVRefractionMapping:307},cS={RepeatWrapping:1000,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},cG={NearestFilter:1003,NearestMipMapNearestFilter:1004,NearestMipMapLinearFilter:1005,LinearFilter:1006,LinearMipMapNearestFilter:1007,LinearMipMapLinearFilter:1008};
Object.assign(bB.prototype,{getPoint:function(){console.warn("THREE.Curve: .getPoint() not implemented.");
return null
},getPointAt:function(m){m=this.getUtoTmapping(m);
return this.getPoint(m)
},getPoints:function(n){void 0===n&&(n=5);
for(var m=[],w=0;
w<=n;
w++){m.push(this.getPoint(w/n))
}return m
},getSpacedPoints:function(n){void 0===n&&(n=5);
for(var m=[],w=0;
w<=n;
w++){m.push(this.getPointAt(w/n))
}return m
},getLength:function(){var m=this.getLengths();
return m[m.length-1]
},getLengths:function(n){void 0===n&&(n=this.arcLengthDivisions);
if(this.cacheArcLengths&&this.cacheArcLengths.length===n+1&&!this.needsUpdate){return this.cacheArcLengths
}this.needsUpdate=!1;
var m=[],D=this.getPoint(0),C,z=0;
m.push(0);
for(C=1;
C<=n;
C++){var w=this.getPoint(C/n);
z+=w.distanceTo(D);
m.push(z);
D=w
}return this.cacheArcLengths=m
},updateArcLengths:function(){this.needsUpdate=!0;
this.getLengths()
},getUtoTmapping:function(n,m){var F=this.getLengths(),D=F.length;
m=m?m:n*F[D-1];
for(var C=0,z=D-1,w;
C<=z;
){if(n=Math.floor(C+(z-C)/2),w=F[n]-m,0>w){C=n+1
}else{if(0<w){z=n-1
}else{z=n;
break
}}}n=z;
if(F[n]===m){return n/(D-1)
}C=F[n];
return(n+(m-C)/(F[n+1]-C))/(D-1)
},getTangent:function(n){var m=n-0.0001;
n+=0.0001;
0>m&&(m=0);
1<n&&(n=1);
m=this.getPoint(m);
return this.getPoint(n).clone().sub(m).normalize()
},getTangentAt:function(m){m=this.getUtoTmapping(m);
return this.getTangent(m)
},computeFrenetFrames:function(Q,P){var O=new ew,N=[],L=[],K=[],F=new ew,D=new eQ,C;
for(C=0;
C<=Q;
C++){var z=C/Q;
N[C]=this.getTangentAt(z);
N[C].normalize()
}L[0]=new ew;
K[0]=new ew;
C=Number.MAX_VALUE;
z=Math.abs(N[0].x);
var w=Math.abs(N[0].y),n=Math.abs(N[0].z);
z<=C&&(C=z,O.set(1,0,0));
w<=C&&(C=w,O.set(0,1,0));
n<=C&&O.set(0,0,1);
F.crossVectors(N[0],O).normalize();
L[0].crossVectors(N[0],F);
K[0].crossVectors(N[0],L[0]);
for(C=1;
C<=Q;
C++){L[C]=L[C-1].clone(),K[C]=K[C-1].clone(),F.crossVectors(N[C-1],N[C]),F.length()>Number.EPSILON&&(F.normalize(),O=Math.acos(eN.clamp(N[C-1].dot(N[C]),-1,1)),L[C].applyMatrix4(D.makeRotationAxis(F,O))),K[C].crossVectors(N[C],L[C])
}if(!0===P){for(O=Math.acos(eN.clamp(L[0].dot(L[Q]),-1,1)),O/=Q,0<N[0].dot(F.crossVectors(L[0],L[Q]))&&(O=-O),C=1;
C<=Q;
C++){L[C].applyMatrix4(D.makeRotationAxis(N[C],O*C)),K[C].crossVectors(N[C],L[C])
}}return{tangents:N,normals:L,binormals:K}
}});
dy.prototype=Object.create(bB.prototype);
dy.prototype.constructor=dy;
dy.prototype.isLineCurve=!0;
dy.prototype.getPoint=function(n){if(1===n){return this.v2.clone()
}var m=this.v2.clone().sub(this.v1);
m.multiplyScalar(n).add(this.v1);
return m
};
dy.prototype.getPointAt=function(m){return this.getPoint(m)
};
dy.prototype.getTangent=function(m){return this.v2.clone().sub(this.v1).normalize()
};
bQ.prototype=Object.assign(Object.create(bB.prototype),{constructor:bQ,add:function(m){this.curves.push(m)
},closePath:function(){var n=this.curves[0].getPoint(0),m=this.curves[this.curves.length-1].getPoint(1);
n.equals(m)||this.curves.push(new dy(m,n))
},getPoint:function(n){var m=n*this.getLength(),w=this.getCurveLengths();
for(n=0;
n<w.length;
){if(w[n]>=m){return m=w[n]-m,n=this.curves[n],w=n.getLength(),n.getPointAt(0===w?0:1-m/w)
}n++
}return null
},getLength:function(){var m=this.getCurveLengths();
return m[m.length-1]
},updateArcLengths:function(){this.needsUpdate=!0;
this.cacheLengths=null;
this.getCurveLengths()
},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length){return this.cacheLengths
}for(var n=[],m=0,z=0,w=this.curves.length;
z<w;
z++){m+=this.curves[z].getLength(),n.push(m)
}return this.cacheLengths=n
},getSpacedPoints:function(n){void 0===n&&(n=40);
for(var m=[],w=0;
w<=n;
w++){m.push(this.getPoint(w/n))
}this.autoClose&&m.push(m[0]);
return m
},getPoints:function(n){n=n||12;
for(var m=[],K,F=0,D=this.curves;
F<D.length;
F++){for(var C=D[F],C=C.getPoints(C&&C.isEllipseCurve?2*n:C&&C.isLineCurve?1:C&&C.isSplineCurve?n*C.points.length:n),z=0;
z<C.length;
z++){var w=C[z];
K&&K.equals(w)||(m.push(w),K=w)
}}this.autoClose&&1<m.length&&!m[m.length-1].equals(m[0])&&m.push(m[0]);
return m
},createPointsGeometry:function(m){m=this.getPoints(m);
return this.createGeometry(m)
},createSpacedPointsGeometry:function(m){m=this.getSpacedPoints(m);
return this.createGeometry(m)
},createGeometry:function(n){for(var m=new eO,C=0,z=n.length;
C<z;
C++){var w=n[C];
m.vertices.push(new ew(w.x,w.y,w.z||0))
}return m
}});
ch.prototype=Object.create(bB.prototype);
ch.prototype.constructor=ch;
ch.prototype.isEllipseCurve=!0;
ch.prototype.getPoint=function(n){for(var m=2*Math.PI,C=this.aEndAngle-this.aStartAngle,z=Math.abs(C)<Number.EPSILON;
0>C;
){C+=m
}for(;
C>m;
){C-=m
}C<Number.EPSILON&&(C=z?0:m);
!0!==this.aClockwise||z||(C=C===m?-m:C-m);
m=this.aStartAngle+n*C;
n=this.aX+this.xRadius*Math.cos(m);
var w=this.aY+this.yRadius*Math.sin(m);
0!==this.aRotation&&(m=Math.cos(this.aRotation),C=Math.sin(this.aRotation),z=n-this.aX,w-=this.aY,n=z*m-w*C+this.aX,w=z*C+w*m+this.aY);
return new e0(n,w)
};
t.prototype=Object.create(bB.prototype);
t.prototype.constructor=t;
t.prototype.isSplineCurve=!0;
t.prototype.getPoint=function(n){var m=this.points,D=(m.length-1)*n;
n=Math.floor(D);
var D=D-n,C=m[0===n?n:n-1],z=m[n],w=m[n>m.length-2?m.length-1:n+1],m=m[n>m.length-3?m.length-1:n+2];
return new e0(cq(D,C.x,z.x,w.x,m.x),cq(D,C.y,z.y,w.y,m.y))
};
d2.prototype=Object.create(bB.prototype);
d2.prototype.constructor=d2;
d2.prototype.getPoint=function(n){var m=this.v0,C=this.v1,z=this.v2,w=this.v3;
return new e0(M(n,m.x,C.x,z.x,w.x),M(n,m.y,C.y,z.y,w.y))
};
dP.prototype=Object.create(bB.prototype);
dP.prototype.constructor=dP;
dP.prototype.getPoint=function(n){var m=this.v0,z=this.v1,w=this.v2;
return new e0(an(n,m.x,z.x,w.x),an(n,m.y,z.y,w.y))
};
var ak=Object.assign(Object.create(bQ.prototype),{fromPoints:function(n){this.moveTo(n[0].x,n[0].y);
for(var m=1,w=n.length;
m<w;
m++){this.lineTo(n[m].x,n[m].y)
}},moveTo:function(n,m){this.currentPoint.set(n,m)
},lineTo:function(n,m){var w=new dy(this.currentPoint.clone(),new e0(n,m));
this.curves.push(w);
this.currentPoint.set(n,m)
},quadraticCurveTo:function(n,m,z,w){n=new dP(this.currentPoint.clone(),new e0(n,m),new e0(z,w));
this.curves.push(n);
this.currentPoint.set(z,w)
},bezierCurveTo:function(n,m,D,C,z,w){n=new d2(this.currentPoint.clone(),new e0(n,m),new e0(D,C),new e0(z,w));
this.curves.push(n);
this.currentPoint.set(z,w)
},splineThru:function(n){var m=[this.currentPoint.clone()].concat(n),m=new t(m);
this.curves.push(m);
this.currentPoint.copy(n[n.length-1])
},arc:function(n,m,D,C,z,w){this.absarc(n+this.currentPoint.x,m+this.currentPoint.y,D,C,z,w)
},absarc:function(n,m,D,C,z,w){this.absellipse(n,m,D,D,C,z,w)
},ellipse:function(n,m,K,F,D,C,z,w){this.absellipse(n+this.currentPoint.x,m+this.currentPoint.y,K,F,D,C,z,w)
},absellipse:function(n,m,K,F,D,C,z,w){n=new ch(n,m,K,F,D,C,z,w);
0<this.curves.length&&(m=n.getPoint(0),m.equals(this.currentPoint)||this.lineTo(m.x,m.y));
this.curves.push(n);
n=n.getPoint(1);
this.currentPoint.copy(n)
}});
bE.prototype=ak;
ak.constructor=bE;
f.prototype=Object.assign(Object.create(ak),{constructor:f,getPointsHoles:function(n){for(var m=[],z=0,w=this.holes.length;
z<w;
z++){m[z]=this.holes[z].getPoints(n)
}return m
},extractAllPoints:function(m){return{shape:this.getPoints(m),holes:this.getPointsHoles(m)}
},extractPoints:function(m){return this.extractAllPoints(m)
}});
Object.assign(d0.prototype,{moveTo:function(n,m){this.currentPath=new bE;
this.subPaths.push(this.currentPath);
this.currentPath.moveTo(n,m)
},lineTo:function(n,m){this.currentPath.lineTo(n,m)
},quadraticCurveTo:function(n,m,z,w){this.currentPath.quadraticCurveTo(n,m,z,w)
},bezierCurveTo:function(n,m,D,C,z,w){this.currentPath.bezierCurveTo(n,m,D,C,z,w)
},splineThru:function(m){this.currentPath.splineThru(m)
},toShapes:function(V,S){function R(n){for(var m=[],ad=0,ac=n.length;
ad<ac;
ad++){var ab=n[ad],aa=new f;
aa.curves=ab.curves;
m.push(aa)
}return m
}function Q(bb,ag){for(var af=ag.length,ae=!1,ad=af-1,ac=0;
ac<af;
ad=ac++){var ab=ag[ad],aa=ag[ac],n=aa.x-ab.x,m=aa.y-ab.y;
if(Math.abs(m)>Number.EPSILON){if(0>m&&(ab=ag[ac],n=-n,aa=ag[ad],m=-m),!(bb.y<ab.y||bb.y>aa.y)){if(bb.y===ab.y){if(bb.x===ab.x){return !0
}}else{ad=m*(bb.x-ab.x)-n*(bb.y-ab.y);
if(0===ad){return !0
}0>ad||(ae=!ae)
}}}else{if(bb.y===ab.y&&(aa.x<=bb.x&&bb.x<=ab.x||ab.x<=bb.x&&bb.x<=aa.x)){return !0
}}}return ae
}var P=l.isClockWise,O=this.subPaths;
if(0===O.length){return[]
}if(!0===S){return R(O)
}S=[];
if(1===O.length){var N=O[0];
var L=new f;
L.curves=N.curves;
S.push(L);
return S
}var K=!P(O[0].getPoints()),K=V?!K:K;
L=[];
var F=[],D=[],z=0;
F[z]=void 0;
D[z]=[];
for(var C=0,w=O.length;
C<w;
C++){N=O[C];
var W=N.getPoints();
var X=P(W);
(X=V?!X:X)?(!K&&F[z]&&z++,F[z]={s:new f,p:W},F[z].s.curves=N.curves,K&&z++,D[z]=[]):D[z].push({h:N,p:W[0]})
}if(!F[0]){return R(O)
}if(1<F.length){C=!1;
V=[];
P=0;
for(O=F.length;
P<O;
P++){L[P]=[]
}P=0;
for(O=F.length;
P<O;
P++){for(N=D[P],X=0;
X<N.length;
X++){K=N[X];
z=!0;
for(W=0;
W<F.length;
W++){Q(K.p,F[W].p)&&(P!==W&&V.push({froms:P,tos:W,hole:X}),z?(z=!1,L[W].push(K)):C=!0)
}z&&L[P].push(K)
}}0<V.length&&(C||(D=L))
}C=0;
for(P=F.length;
C<P;
C++){for(L=F[C].s,S.push(L),V=D[C],O=0,N=V.length;
O<N;
O++){L.holes.push(V[O].h)
}}return S
}});
Object.assign(dN.prototype,{isFont:!0,generateShapes:function(dc,db,da){void 0===db&&(db=100);
void 0===da&&(da=4);
var cg=this.data;
dc=String(dc).split("");
var cf=db/cg.resolution,ce=(cg.boundingBox.yMax-cg.boundingBox.yMin+cg.underlineThickness)*cf,cd=0,cc=0;
db=[];
for(var cb=0;
cb<dc.length;
cb++){var bg=dc[cb];
if("\n"===bg){cd=0,cc-=ce
}else{var bf;
var bd=cf;
var be=cd,bb=cc;
if(bg=cg.glyphs[bg]||cg.glyphs["?"]){var ac=new d0,ae=[];
if(bg.o){for(var aa=bg._cachedOutline||(bg._cachedOutline=bg.o.split(" ")),ab=0,X=aa.length;
ab<X;
){switch(aa[ab++]){case"m":var ag=aa[ab++]*bd+be;
var bc=aa[ab++]*bd+bb;
ac.moveTo(ag,bc);
break;
case"l":ag=aa[ab++]*bd+be;
bc=aa[ab++]*bd+bb;
ac.lineTo(ag,bc);
break;
case"q":var af=aa[ab++]*bd+be;
var ad=aa[ab++]*bd+bb;
var W=aa[ab++]*bd+be;
var V=aa[ab++]*bd+bb;
ac.quadraticCurveTo(W,V,af,ad);
if(bf=ae[ae.length-1]){var R=bf.x;
bf=bf.y;
for(var S=1;
S<=da;
S++){var Q=S/da;
an(Q,R,W,af);
an(Q,bf,V,ad)
}}break;
case"b":if(af=aa[ab++]*bd+be,ad=aa[ab++]*bd+bb,W=aa[ab++]*bd+be,V=aa[ab++]*bd+bb,ag=aa[ab++]*bd+be,bc=aa[ab++]*bd+bb,ac.bezierCurveTo(W,V,ag,bc,af,ad),bf=ae[ae.length-1]){for(R=bf.x,bf=bf.y,S=1;
S<=da;
S++){Q=S/da,M(Q,R,W,ag,af),M(Q,bf,V,bc,ad)
}}}}}bd={offsetX:bg.ha*bd,path:ac}
}else{bd=void 0
}cd+=bd.offsetX;
db.push(bd.path)
}}da=[];
cg=0;
for(dc=db.length;
cg<dc;
cg++){Array.prototype.push.apply(da,db[cg].toShapes())
}return da
}});
Object.assign(b7.prototype,{load:function(n,m,C,z){var w=this;
(new e8(this.manager)).load(n,function(D){try{var K=JSON.parse(D)
}catch(F){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),K=JSON.parse(D.substring(65,D.length-2))
}D=w.parse(K);
m&&m(D)
},C,z)
},parse:function(m){return new dN(m)
}});
var dH,c4={getContext:function(){void 0===dH&&(dH=new (window.AudioContext||window.webkitAudioContext));
return dH
},setContext:function(m){dH=m
}};
Object.assign(dB.prototype,{load:function(n,m,C,z){var w=new e8(this.manager);
w.setResponseType("arraybuffer");
w.load(n,function(D){c4.getContext().decodeAudioData(D,function(F){m(F)
})
},C,z)
}});
Object.assign(bP.prototype,{update:function(){var N,L,K,F,D,C,z,w,n=new eQ,m=new eQ;
return function(O){if(N!==this||L!==O.focus||K!==O.fov||F!==O.aspect*this.aspect||D!==O.near||C!==O.far||z!==O.zoom||w!==this.eyeSep){N=this;
L=O.focus;
K=O.fov;
F=O.aspect*this.aspect;
D=O.near;
C=O.far;
z=O.zoom;
var S=O.projectionMatrix.clone();
w=this.eyeSep/2;
var R=w*D/L,V=D*Math.tan(eN.DEG2RAD*K*0.5)/z;
m.elements[12]=-w;
n.elements[12]=w;
var P=-V*F+R;
var Q=V*F+R;
S.elements[0]=2*D/(Q-P);
S.elements[8]=(Q+P)/(Q-P);
this.cameraL.projectionMatrix.copy(S);
P=-V*F-R;
Q=V*F-R;
S.elements[0]=2*D/(Q-P);
S.elements[8]=(Q+P)/(Q-P);
this.cameraR.projectionMatrix.copy(S)
}this.cameraL.matrixWorld.copy(O.matrixWorld).multiply(m);
this.cameraR.matrixWorld.copy(O.matrixWorld).multiply(n)
}
}()});
bs.prototype=Object.create(ev.prototype);
bs.prototype.constructor=bs;
dp.prototype=Object.assign(Object.create(ev.prototype),{constructor:dp,getInput:function(){return this.gain
},removeFilter:function(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null)
},getFilter:function(){return this.filter
},setFilter:function(m){null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination);
this.filter=m;
this.gain.connect(this.filter);
this.filter.connect(this.context.destination)
},getMasterVolume:function(){return this.gain.gain.value
},setMasterVolume:function(m){this.gain.gain.value=m
},updateMatrixWorld:function(){var n=new ew,m=new c8,z=new ew,w=new ew;
return function(D){ev.prototype.updateMatrixWorld.call(this,D);
D=this.context.listener;
var C=this.up;
this.matrixWorld.decompose(n,m,z);
w.set(0,0,-1).applyQuaternion(m);
D.positionX?(D.positionX.setValueAtTime(n.x,this.context.currentTime),D.positionY.setValueAtTime(n.y,this.context.currentTime),D.positionZ.setValueAtTime(n.z,this.context.currentTime),D.forwardX.setValueAtTime(w.x,this.context.currentTime),D.forwardY.setValueAtTime(w.y,this.context.currentTime),D.forwardZ.setValueAtTime(w.z,this.context.currentTime),D.upX.setValueAtTime(C.x,this.context.currentTime),D.upY.setValueAtTime(C.y,this.context.currentTime),D.upZ.setValueAtTime(C.z,this.context.currentTime)):(D.setPosition(n.x,n.y,n.z),D.setOrientation(w.x,w.y,w.z,C.x,C.y,C.z))
}
}()});
dD.prototype=Object.assign(Object.create(ev.prototype),{constructor:dD,getOutput:function(){return this.gain
},setNodeSource:function(m){this.hasPlaybackControl=!1;
this.sourceType="audioNode";
this.source=m;
this.connect();
return this
},setBuffer:function(m){this.buffer=m;
this.sourceType="buffer";
this.autoplay&&this.play();
return this
},play:function(){if(!0===this.isPlaying){console.warn("THREE.Audio: Audio is already playing.")
}else{if(!1===this.hasPlaybackControl){console.warn("THREE.Audio: this Audio has no playback control.")
}else{var m=this.context.createBufferSource();
m.buffer=this.buffer;
m.loop=this.loop;
m.onended=this.onEnded.bind(this);
m.playbackRate.setValueAtTime(this.playbackRate,this.startTime);
m.start(0,this.startTime);
this.isPlaying=!0;
this.source=m;
return this.connect()
}}},pause:function(){if(!1===this.hasPlaybackControl){console.warn("THREE.Audio: this Audio has no playback control.")
}else{return this.source.stop(),this.startTime=this.context.currentTime,this.isPlaying=!1,this
}},stop:function(){if(!1===this.hasPlaybackControl){console.warn("THREE.Audio: this Audio has no playback control.")
}else{return this.source.stop(),this.startTime=0,this.isPlaying=!1,this
}},connect:function(){if(0<this.filters.length){this.source.connect(this.filters[0]);
for(var n=1,m=this.filters.length;
n<m;
n++){this.filters[n-1].connect(this.filters[n])
}this.filters[this.filters.length-1].connect(this.getOutput())
}else{this.source.connect(this.getOutput())
}return this
},disconnect:function(){if(0<this.filters.length){this.source.disconnect(this.filters[0]);
for(var n=1,m=this.filters.length;
n<m;
n++){this.filters[n-1].disconnect(this.filters[n])
}this.filters[this.filters.length-1].disconnect(this.getOutput())
}else{this.source.disconnect(this.getOutput())
}return this
},getFilters:function(){return this.filters
},setFilters:function(m){m||(m=[]);
!0===this.isPlaying?(this.disconnect(),this.filters=m,this.connect()):this.filters=m;
return this
},getFilter:function(){return this.getFilters()[0]
},setFilter:function(m){return this.setFilters(m?[m]:[])
},setPlaybackRate:function(m){if(!1===this.hasPlaybackControl){console.warn("THREE.Audio: this Audio has no playback control.")
}else{return this.playbackRate=m,!0===this.isPlaying&&this.source.playbackRate.setValueAtTime(this.playbackRate,this.context.currentTime),this
}},getPlaybackRate:function(){return this.playbackRate
},onEnded:function(){this.isPlaying=!1
},getLoop:function(){return !1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop
},setLoop:function(m){if(!1===this.hasPlaybackControl){console.warn("THREE.Audio: this Audio has no playback control.")
}else{return this.loop=m,!0===this.isPlaying&&(this.source.loop=this.loop),this
}},getVolume:function(){return this.gain.gain.value
},setVolume:function(m){this.gain.gain.value=m;
return this
}});
cT.prototype=Object.assign(Object.create(dD.prototype),{constructor:cT,getOutput:function(){return this.panner
},getRefDistance:function(){return this.panner.refDistance
},setRefDistance:function(m){this.panner.refDistance=m
},getRolloffFactor:function(){return this.panner.rolloffFactor
},setRolloffFactor:function(m){this.panner.rolloffFactor=m
},getDistanceModel:function(){return this.panner.distanceModel
},setDistanceModel:function(m){this.panner.distanceModel=m
},getMaxDistance:function(){return this.panner.maxDistance
},setMaxDistance:function(m){this.panner.maxDistance=m
},updateMatrixWorld:function(){var m=new ew;
return function(n){ev.prototype.updateMatrixWorld.call(this,n);
m.setFromMatrixPosition(this.matrixWorld);
this.panner.setPosition(m.x,m.y,m.z)
}
}()});
Object.assign(cH.prototype,{getFrequencyData:function(){this.analyser.getByteFrequencyData(this.data);
return this.data
},getAverageFrequency:function(){for(var n=0,m=this.getFrequencyData(),w=0;
w<m.length;
w++){n+=m[w]
}return n/m.length
}});
Object.assign(cx.prototype,{accumulate:function(n,m){var C=this.buffer,z=this.valueSize;
n=n*z+z;
var w=this.cumulativeWeight;
if(0===w){for(w=0;
w!==z;
++w){C[n+w]=C[w]
}w=m
}else{w+=m,this._mixBufferRegion(C,n,0,m/w,z)
}this.cumulativeWeight=w
},apply:function(n){var m=this.valueSize,D=this.buffer;
n=n*m+m;
var C=this.cumulativeWeight,z=this.binding;
this.cumulativeWeight=0;
1>C&&this._mixBufferRegion(D,n,3*m,1-C,m);
for(var C=m,w=m+m;
C!==w;
++C){if(D[C]!==D[C+m]){z.setValue(D,n);
break
}}},saveOriginalState:function(){var n=this.buffer,m=this.valueSize,z=3*m;
this.binding.getValue(n,z);
for(var w=m;
w!==z;
++w){n[w]=n[z+w%m]
}this.cumulativeWeight=0
},restoreOriginalState:function(){this.binding.setValue(this.buffer,3*this.valueSize)
},_select:function(n,m,C,z,w){if(0.5<=z){for(z=0;
z!==w;
++z){n[m+z]=n[C+z]
}}},_slerp:function(n,m,z,w){c8.slerpFlat(n,m,n,m,n,z,w)
},_lerp:function(n,m,K,F,D){for(var C=1-F,z=0;
z!==D;
++z){var w=m+z;
n[w]=n[w]*C+n[K+z]*F
}}});
Object.assign(bD.prototype,{getValue:function(n,m){this.bind();
var w=this._bindings[this._targetGroup.nCachedObjects_];
void 0!==w&&w.getValue(n,m)
},setValue:function(n,m){for(var C=this._bindings,z=this._targetGroup.nCachedObjects_,w=C.length;
z!==w;
++z){C[z].setValue(n,m)
}},bind:function(){for(var n=this._bindings,m=this._targetGroup.nCachedObjects_,w=n.length;
m!==w;
++m){n[m].bind()
}},unbind:function(){for(var n=this._bindings,m=this._targetGroup.nCachedObjects_,w=n.length;
m!==w;
++m){n[m].unbind()
}}});
Object.assign(en,{Composite:bD,create:function(n,m,w){return n&&n.isAnimationObjectGroup?new en.Composite(n,m,w):new en(n,m,w)
},sanitizeNodeName:function(m){return m.replace(/\s/g,"_").replace(/[^\w-]/g,"")
},parseTrackName:function(){var n=new RegExp("^"+/((?:[\w-]+[\/:])*)/.source+/([\w-\.]+)?/.source+/(?:\.([\w-]+)(?:\[(.+)\])?)?/.source+/\.([\w-]+)(?:\[(.+)\])?/.source+"$"),m=["material","materials","bones"];
return function(D){var C=n.exec(D);
if(!C){throw Error("PropertyBinding: Cannot parse trackName: "+D)
}var C={nodeName:C[2],objectName:C[3],objectIndex:C[4],propertyName:C[5],propertyIndex:C[6]},z=C.nodeName&&C.nodeName.lastIndexOf(".");
if(void 0!==z&&-1!==z){var w=C.nodeName.substring(z+1);
-1!==m.indexOf(w)&&(C.nodeName=C.nodeName.substring(0,z),C.objectName=w)
}if(null===C.propertyName||0===C.propertyName.length){throw Error("PropertyBinding: can not parse propertyName from trackName: "+D)
}return C
}
}(),findNode:function(n,m){if(!m||""===m||"root"===m||"."===m||-1===m||m===n.name||m===n.uuid){return n
}if(n.skeleton){var z=function(C){for(var F=0;
F<C.bones.length;
F++){var D=C.bones[F];
if(D.name===m){return D
}}return null
}(n.skeleton);
if(z){return z
}}if(n.children){var w=function(C){for(var F=0;
F<C.length;
F++){var D=C[F];
if(D.name===m||D.uuid===m||(D=w(D.children))){return D
}}return null
};
if(n=w(n.children)){return n
}}return null
}});
Object.assign(en.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(n,m){n[m]=this.node[this.propertyName]
},function(n,m){for(var C=this.resolvedProperty,z=0,w=C.length;
z!==w;
++z){n[m++]=C[z]
}},function(n,m){n[m]=this.resolvedProperty[this.propertyIndex]
},function(n,m){this.resolvedProperty.toArray(n,m)
}],SetterByBindingTypeAndVersioning:[[function(n,m){this.node[this.propertyName]=n[m]
},function(n,m){this.node[this.propertyName]=n[m];
this.targetObject.needsUpdate=!0
},function(n,m){this.node[this.propertyName]=n[m];
this.targetObject.matrixWorldNeedsUpdate=!0
}],[function(n,m){for(var C=this.resolvedProperty,z=0,w=C.length;
z!==w;
++z){C[z]=n[m++]
}},function(n,m){for(var C=this.resolvedProperty,z=0,w=C.length;
z!==w;
++z){C[z]=n[m++]
}this.targetObject.needsUpdate=!0
},function(n,m){for(var C=this.resolvedProperty,z=0,w=C.length;
z!==w;
++z){C[z]=n[m++]
}this.targetObject.matrixWorldNeedsUpdate=!0
}],[function(n,m){this.resolvedProperty[this.propertyIndex]=n[m]
},function(n,m){this.resolvedProperty[this.propertyIndex]=n[m];
this.targetObject.needsUpdate=!0
},function(n,m){this.resolvedProperty[this.propertyIndex]=n[m];
this.targetObject.matrixWorldNeedsUpdate=!0
}],[function(n,m){this.resolvedProperty.fromArray(n,m)
},function(n,m){this.resolvedProperty.fromArray(n,m);
this.targetObject.needsUpdate=!0
},function(n,m){this.resolvedProperty.fromArray(n,m);
this.targetObject.matrixWorldNeedsUpdate=!0
}]],getValue:function(n,m){this.bind();
this.getValue(n,m)
},setValue:function(n,m){this.bind();
this.setValue(n,m)
},bind:function(){var n=this.node,m=this.parsedPath,D=m.objectName,C=m.propertyName,z=m.propertyIndex;
n||(this.node=n=en.findNode(this.rootNode,m.nodeName)||this.rootNode);
this.getValue=this._getValue_unavailable;
this.setValue=this._setValue_unavailable;
if(n){if(D){var w=m.objectIndex;
switch(D){case"materials":if(!n.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);
return
}if(!n.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);
return
}n=n.material.materials;
break;
case"bones":if(!n.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);
return
}n=n.skeleton.bones;
for(D=0;
D<n.length;
D++){if(n[D].name===w){w=D;
break
}}break;
default:if(void 0===n[D]){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);
return
}n=n[D]
}if(void 0!==w){if(void 0===n[w]){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,n);
return
}n=n[w]
}}w=n[C];
if(void 0===w){console.error("THREE.PropertyBinding: Trying to update property for track: "+m.nodeName+"."+C+" but it wasn't found.",n)
}else{m=this.Versioning.None;
void 0!==n.needsUpdate?(m=this.Versioning.NeedsUpdate,this.targetObject=n):void 0!==n.matrixWorldNeedsUpdate&&(m=this.Versioning.MatrixWorldNeedsUpdate,this.targetObject=n);
D=this.BindingType.Direct;
if(void 0!==z){if("morphTargetInfluences"===C){if(!n.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);
return
}if(n.geometry.isBufferGeometry){if(!n.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);
return
}for(D=0;
D<this.node.geometry.morphAttributes.position.length;
D++){if(n.geometry.morphAttributes.position[D].name===z){z=D;
break
}}}else{if(!n.geometry.morphTargets){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.",this);
return
}for(D=0;
D<this.node.geometry.morphTargets.length;
D++){if(n.geometry.morphTargets[D].name===z){z=D;
break
}}}}D=this.BindingType.ArrayElement;
this.resolvedProperty=w;
this.propertyIndex=z
}else{void 0!==w.fromArray&&void 0!==w.toArray?(D=this.BindingType.HasFromToArray,this.resolvedProperty=w):Array.isArray(w)?(D=this.BindingType.EntireArray,this.resolvedProperty=w):this.propertyName=C
}this.getValue=this.GetterByBindingType[D];
this.setValue=this.SetterByBindingTypeAndVersioning[D][m]
}}else{console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.")
}},unbind:function(){this.node=null;
this.getValue=this._getValue_unbound;
this.setValue=this._setValue_unbound
}});
Object.assign(en.prototype,{_getValue_unbound:en.prototype.getValue,_setValue_unbound:en.prototype.setValue});
Object.assign(br.prototype,{isAnimationObjectGroup:!0,add:function(ac){for(var ab=this._objects,aa=ab.length,X=this.nCachedObjects_,W=this._indicesByUUID,V=this._paths,S=this._parsedPaths,R=this._bindings,Q=R.length,P=0,O=arguments.length;
P!==O;
++P){var L=arguments[P],N=L.uuid,K=W[N];
if(void 0===K){K=aa++;
W[N]=K;
ab.push(L);
for(var N=0,D=Q;
N!==D;
++N){R[N].push(new en(L,V[N],S[N]))
}}else{if(K<X){var F=--X,D=ab[F];
W[D.uuid]=K;
ab[K]=D;
W[N]=F;
ab[F]=L;
N=0;
for(D=Q;
N!==D;
++N){var C=R[N],z=C[K];
C[K]=C[F];
void 0===z&&(z=new en(L,V[N],S[N]));
C[F]=z
}}else{void 0!==ab[K]&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
}}}this.nCachedObjects_=X
},remove:function(V){for(var S=this._objects,R=this.nCachedObjects_,Q=this._indicesByUUID,P=this._bindings,O=P.length,N=0,L=arguments.length;
N!==L;
++N){var K=arguments[N],F=K.uuid,D=Q[F];
if(void 0!==D&&D>=R){var z=R++,C=S[z];
Q[C.uuid]=D;
S[D]=C;
Q[F]=z;
S[z]=K;
K=0;
for(F=O;
K!==F;
++K){var C=P[K],w=C[D];
C[D]=C[z];
C[z]=w
}}}this.nCachedObjects_=R
},uncache:function(V){for(var S,R,Q=this._objects,P=Q.length,O=this.nCachedObjects_,N=this._indicesByUUID,L=this._bindings,K=L.length,F=0,D=arguments.length;
F!==D;
++F){R=arguments[F].uuid;
var z=N[R];
if(void 0!==z){if(delete N[R],z<O){var C=--O,w=Q[C];
R=--P;
S=Q[R];
N[w.uuid]=z;
Q[z]=w;
N[S.uuid]=C;
Q[C]=S;
Q.pop();
for(var w=0,W=K;
w!==W;
++w){S=L[w];
var X=S[R];
S[z]=S[C];
S[C]=X;
S.pop()
}}else{for(R=--P,S=Q[R],N[S.uuid]=z,Q[z]=S,Q.pop(),w=0,W=K;
w!==W;
++w){S=L[w],S[z]=S[R],S.pop()
}}}}this.nCachedObjects_=O
},subscribe_:function(N,L){var K=this._bindingsIndicesByPath,F=K[N],D=this._bindings;
if(void 0!==F){return D[F]
}var C=this._paths,z=this._parsedPaths,w=this._objects,n=this.nCachedObjects_,m=Array(w.length),F=D.length;
K[N]=F;
C.push(N);
z.push(L);
D.push(m);
K=n;
for(F=w.length;
K!==F;
++K){m[K]=new en(w[K],N,L)
}return m
},unsubscribe_:function(n){var m=this._bindingsIndicesByPath,K=m[n];
if(void 0!==K){var F=this._paths,D=this._parsedPaths,C=this._bindings,z=C.length-1,w=C[z];
m[n[z]]=K;
C[K]=w;
C.pop();
D[K]=D[z];
D.pop();
F[K]=F[z];
F.pop()
}}});
Object.assign(a9.prototype,{play:function(){this._mixer._activateAction(this);
return this
},stop:function(){this._mixer._deactivateAction(this);
return this.reset()
},reset:function(){this.paused=!1;
this.enabled=!0;
this.time=0;
this._loopCount=-1;
this._startTime=null;
return this.stopFading().stopWarping()
},isRunning:function(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)
},isScheduled:function(){return this._mixer._isActiveAction(this)
},startAt:function(m){this._startTime=m;
return this
},setLoop:function(n,m){this.loop=n;
this.repetitions=m;
return this
},setEffectiveWeight:function(m){this.weight=m;
this._effectiveWeight=this.enabled?m:0;
return this.stopFading()
},getEffectiveWeight:function(){return this._effectiveWeight
},fadeIn:function(m){return this._scheduleFading(m,0,1)
},fadeOut:function(m){return this._scheduleFading(m,1,0)
},crossFadeFrom:function(n,m,C){n.fadeOut(m);
this.fadeIn(m);
if(C){C=this._clip.duration;
var z=n._clip.duration,w=C/z;
n.warp(1,z/C,m);
this.warp(w,1,m)
}return this
},crossFadeTo:function(n,m,w){return n.crossFadeFrom(this,m,w)
},stopFading:function(){var m=this._weightInterpolant;
null!==m&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(m));
return this
},setEffectiveTimeScale:function(m){this.timeScale=m;
this._effectiveTimeScale=this.paused?0:m;
return this.stopWarping()
},getEffectiveTimeScale:function(){return this._effectiveTimeScale
},setDuration:function(m){this.timeScale=this._clip.duration/m;
return this.stopWarping()
},syncWith:function(m){this.time=m.time;
this.timeScale=m.timeScale;
return this.stopWarping()
},halt:function(m){return this.warp(this._effectiveTimeScale,0,m)
},warp:function(n,m,F){var D=this._mixer,C=D.time,z=this._timeScaleInterpolant,w=this.timeScale;
null===z&&(this._timeScaleInterpolant=z=D._lendControlInterpolant());
D=z.parameterPositions;
z=z.sampleValues;
D[0]=C;
D[1]=C+F;
z[0]=n/w;
z[1]=m/w;
return this
},stopWarping:function(){var m=this._timeScaleInterpolant;
null!==m&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(m));
return this
},getMixer:function(){return this._mixer
},getClip:function(){return this._clip
},getRoot:function(){return this._localRoot||this._mixer._root
},_update:function(n,m,F,D){if(this.enabled){var C=this._startTime;
if(null!==C){m=(n-C)*F;
if(0>m||0===F){return
}this._startTime=null;
m*=F
}m*=this._updateTimeScale(n);
F=this._updateTime(m);
n=this._updateWeight(n);
if(0<n){m=this._interpolants;
for(var C=this._propertyBindings,z=0,w=m.length;
z!==w;
++z){m[z].evaluate(F),C[z].accumulate(D,n)
}}}else{this._updateWeight(n)
}},_updateWeight:function(n){var m=0;
if(this.enabled){var m=this.weight,z=this._weightInterpolant;
if(null!==z){var w=z.evaluate(n)[0],m=m*w;
n>z.parameterPositions[1]&&(this.stopFading(),0===w&&(this.enabled=!1))
}}return this._effectiveWeight=m
},_updateTimeScale:function(n){var m=0;
if(!this.paused){var m=this.timeScale,z=this._timeScaleInterpolant;
if(null!==z){var w=z.evaluate(n)[0],m=m*w;
n>z.parameterPositions[1]&&(this.stopWarping(),0===m?this.paused=!0:this.timeScale=m)
}}return this._effectiveTimeScale=m
},_updateTime:function(n){var m=this.time+n;
if(0===n){return m
}var F=this._clip.duration,D=this.loop,C=this._loopCount;
if(2200===D){n:{if(-1===C&&(this._loopCount=0,this._setEndings(!0,!0,!1)),m>=F){m=F
}else{if(0>m){m=0
}else{break n
}}this.clampWhenFinished?this.paused=!0:this.enabled=!1;
this._mixer.dispatchEvent({type:"finished",action:this,direction:0>n?-1:1})
}}else{D=2202===D;
-1===C&&(0<=n?(C=0,this._setEndings(!0,0===this.repetitions,D)):this._setEndings(0===this.repetitions,!0,D));
if(m>=F||0>m){var z=Math.floor(m/F),m=m-F*z,C=C+Math.abs(z),w=this.repetitions-C;
0>w?(this.clampWhenFinished?this.paused=!0:this.enabled=!1,m=0<n?F:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:0<n?1:-1})):(0===w?(n=0>n,this._setEndings(n,!n,D)):this._setEndings(!1,!1,D),this._loopCount=C,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:z}))
}if(D&&1===(C&1)){return this.time=m,F-m
}}return this.time=m
},_setEndings:function(n,m,z){var w=this._interpolantSettings;
z?(w.endingStart=2401,w.endingEnd=2401):(w.endingStart=n?this.zeroSlopeAtStart?2401:2400:2402,w.endingEnd=m?this.zeroSlopeAtEnd?2401:2400:2402)
},_scheduleFading:function(n,m,D){var C=this._mixer,z=C.time,w=this._weightInterpolant;
null===w&&(this._weightInterpolant=w=C._lendControlInterpolant());
C=w.parameterPositions;
w=w.sampleValues;
C[0]=z;
w[0]=m;
C[1]=z+n;
w[1]=D;
return this
}});
Object.assign(aQ.prototype,b5.prototype,{_bindAction:function(R,Q){var P=R._localRoot||this._root,O=R._clip.tracks,N=O.length,L=R._propertyBindings;
R=R._interpolants;
var K=P.uuid,F=this._bindingsByRootAndName,D=F[K];
void 0===D&&(D={},F[K]=D);
for(F=0;
F!==N;
++F){var C=O[F],z=C.name,w=D[z];
if(void 0===w){w=L[F];
if(void 0!==w){null===w._cacheIndex&&(++w.referenceCount,this._addInactiveBinding(w,K,z));
continue
}w=new cx(en.create(P,z,Q&&Q._propertyBindings[F].binding.parsedPath),C.ValueTypeName,C.getValueSize());
++w.referenceCount;
this._addInactiveBinding(w,K,z)
}L[F]=w;
R[F].resultBuffer=w.buffer
}},_activateAction:function(n){if(!this._isActiveAction(n)){if(null===n._cacheIndex){var m=(n._localRoot||this._root).uuid,C=n._clip.uuid,z=this._actionsByClip[C];
this._bindAction(n,z&&z.knownActions[0]);
this._addInactiveAction(n,C,m)
}m=n._propertyBindings;
C=0;
for(z=m.length;
C!==z;
++C){var w=m[C];
0===w.useCount++&&(this._lendBinding(w),w.saveOriginalState())
}this._lendAction(n)
}},_deactivateAction:function(n){if(this._isActiveAction(n)){for(var m=n._propertyBindings,C=0,z=m.length;
C!==z;
++C){var w=m[C];
0===--w.useCount&&(w.restoreOriginalState(),this._takeBackBinding(w))
}this._takeBackAction(n)
}},_initMemoryManager:function(){this._actions=[];
this._nActiveActions=0;
this._actionsByClip={};
this._bindings=[];
this._nActiveBindings=0;
this._bindingsByRootAndName={};
this._controlInterpolants=[];
this._nActiveControlInterpolants=0;
var m=this;
this.stats={actions:{get total(){return m._actions.length
},get inUse(){return m._nActiveActions
}},bindings:{get total(){return m._bindings.length
},get inUse(){return m._nActiveBindings
}},controlInterpolants:{get total(){return m._controlInterpolants.length
},get inUse(){return m._nActiveControlInterpolants
}}}
},_isActiveAction:function(m){m=m._cacheIndex;
return null!==m&&m<this._nActiveActions
},_addInactiveAction:function(n,m,D){var C=this._actions,z=this._actionsByClip,w=z[m];
void 0===w?(w={knownActions:[n],actionByRoot:{}},n._byClipCacheIndex=0,z[m]=w):(m=w.knownActions,n._byClipCacheIndex=m.length,m.push(n));
n._cacheIndex=C.length;
C.push(n);
w.actionByRoot[D]=n
},_removeInactiveAction:function(n){var m=this._actions,F=m[m.length-1],D=n._cacheIndex;
F._cacheIndex=D;
m[D]=F;
m.pop();
n._cacheIndex=null;
var m=n._clip.uuid,F=this._actionsByClip,D=F[m],C=D.knownActions,z=C[C.length-1],w=n._byClipCacheIndex;
z._byClipCacheIndex=w;
C[w]=z;
C.pop();
n._byClipCacheIndex=null;
delete D.actionByRoot[(n._localRoot||this._root).uuid];
0===C.length&&delete F[m];
this._removeInactiveBindingsForAction(n)
},_removeInactiveBindingsForAction:function(n){n=n._propertyBindings;
for(var m=0,z=n.length;
m!==z;
++m){var w=n[m];
0===--w.referenceCount&&this._removeInactiveBinding(w)
}},_lendAction:function(n){var m=this._actions,C=n._cacheIndex,z=this._nActiveActions++,w=m[z];
n._cacheIndex=z;
m[z]=n;
w._cacheIndex=C;
m[C]=w
},_takeBackAction:function(n){var m=this._actions,C=n._cacheIndex,z=--this._nActiveActions,w=m[z];
n._cacheIndex=z;
m[z]=n;
w._cacheIndex=C;
m[C]=w
},_addInactiveBinding:function(n,m,D){var C=this._bindingsByRootAndName,z=C[m],w=this._bindings;
void 0===z&&(z={},C[m]=z);
z[D]=n;
n._cacheIndex=w.length;
w.push(n)
},_removeInactiveBinding:function(n){var m=this._bindings,K=n.binding,F=K.rootNode.uuid,K=K.path,D=this._bindingsByRootAndName,C=D[F],z=m[m.length-1];
n=n._cacheIndex;
z._cacheIndex=n;
m[n]=z;
m.pop();
delete C[K];
n:{for(var w in C){break n
}delete D[F]
}},_lendBinding:function(n){var m=this._bindings,C=n._cacheIndex,z=this._nActiveBindings++,w=m[z];
n._cacheIndex=z;
m[z]=n;
w._cacheIndex=C;
m[C]=w
},_takeBackBinding:function(n){var m=this._bindings,C=n._cacheIndex,z=--this._nActiveBindings,w=m[z];
n._cacheIndex=z;
m[z]=n;
w._cacheIndex=C;
m[C]=w
},_lendControlInterpolant:function(){var n=this._controlInterpolants,m=this._nActiveControlInterpolants++,w=n[m];
void 0===w&&(w=new cs(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),w.__cacheIndex=m,n[m]=w);
return w
},_takeBackControlInterpolant:function(n){var m=this._controlInterpolants,C=n.__cacheIndex,z=--this._nActiveControlInterpolants,w=m[z];
n.__cacheIndex=z;
m[z]=n;
w.__cacheIndex=C;
m[C]=w
},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(n,m){var D=m||this._root,C=D.uuid,D="string"===typeof n?aH.findByName(D,n):n;
n=null!==D?D.uuid:n;
var z=this._actionsByClip[n],w=null;
if(void 0!==z){w=z.actionByRoot[C];
if(void 0!==w){return w
}w=z.knownActions[0];
null===D&&(D=w._clip)
}if(null===D){return null
}m=new a9(this,D,m);
this._bindAction(m,w);
this._addInactiveAction(m,n,C);
return m
},existingAction:function(n,m){var w=m||this._root;
m=w.uuid;
w="string"===typeof n?aH.findByName(w,n):n;
n=this._actionsByClip[w?w.uuid:n];
return void 0!==n?n.actionByRoot[m]||null:null
},stopAllAction:function(){for(var n=this._actions,m=this._nActiveActions,C=this._bindings,z=this._nActiveBindings,w=this._nActiveBindings=this._nActiveActions=0;
w!==m;
++w){n[w].reset()
}for(w=0;
w!==z;
++w){C[w].useCount=0
}return this
},update:function(n){n*=this.timeScale;
for(var m=this._actions,F=this._nActiveActions,D=this.time+=n,C=Math.sign(n),z=this._accuIndex^=1,w=0;
w!==F;
++w){m[w]._update(D,n,C,z)
}n=this._bindings;
m=this._nActiveBindings;
for(w=0;
w!==m;
++w){n[w].apply(z)
}return this
},getRoot:function(){return this._root
},uncacheClip:function(L){var K=this._actions;
L=L.uuid;
var F=this._actionsByClip,D=F[L];
if(void 0!==D){for(var D=D.knownActions,C=0,z=D.length;
C!==z;
++C){var w=D[C];
this._deactivateAction(w);
var n=w._cacheIndex,m=K[K.length-1];
w._cacheIndex=null;
w._byClipCacheIndex=null;
m._cacheIndex=n;
K[n]=m;
K.pop();
this._removeInactiveBindingsForAction(w)
}delete F[L]
}},uncacheRoot:function(n){n=n.uuid;
var m=this._actionsByClip;
for(z in m){var C=m[z].actionByRoot[n];
void 0!==C&&(this._deactivateAction(C),this._removeInactiveAction(C))
}var z=this._bindingsByRootAndName[n];
if(void 0!==z){for(var w in z){n=z[w],n.restoreOriginalState(),this._removeInactiveBinding(n)
}}},uncacheAction:function(n,m){n=this.existingAction(n,m);
null!==n&&(this._deactivateAction(n),this._removeInactiveAction(n))
}});
e5.prototype.clone=function(){return new e5(void 0===this.value.clone?this.value:this.value.clone())
};
ck.prototype=Object.assign(Object.create(eX.prototype),{constructor:ck,isInstancedBufferGeometry:!0,addGroup:function(n,m,w){this.groups.push({start:n,count:m,materialIndex:w})
},copy:function(n){var m=n.index;
null!==m&&this.setIndex(m.clone());
var m=n.attributes;
for(z in m){this.addAttribute(z,m[z].clone())
}n=n.groups;
var z=0;
for(m=n.length;
z<m;
z++){var w=n[z];
this.addGroup(w.start,w.count,w.materialIndex)
}return this
}});
Object.defineProperties(b1.prototype,{count:{get:function(){return this.data.count
}},array:{get:function(){return this.data.array
}}});
Object.assign(b1.prototype,{isInterleavedBufferAttribute:!0,setX:function(n,m){this.data.array[n*this.data.stride+this.offset]=m;
return this
},setY:function(n,m){this.data.array[n*this.data.stride+this.offset+1]=m;
return this
},setZ:function(n,m){this.data.array[n*this.data.stride+this.offset+2]=m;
return this
},setW:function(n,m){this.data.array[n*this.data.stride+this.offset+3]=m;
return this
},getX:function(m){return this.data.array[m*this.data.stride+this.offset]
},getY:function(m){return this.data.array[m*this.data.stride+this.offset+1]
},getZ:function(m){return this.data.array[m*this.data.stride+this.offset+2]
},getW:function(m){return this.data.array[m*this.data.stride+this.offset+3]
},setXY:function(n,m,w){n=n*this.data.stride+this.offset;
this.data.array[n+0]=m;
this.data.array[n+1]=w;
return this
},setXYZ:function(n,m,z,w){n=n*this.data.stride+this.offset;
this.data.array[n+0]=m;
this.data.array[n+1]=z;
this.data.array[n+2]=w;
return this
},setXYZW:function(n,m,C,z,w){n=n*this.data.stride+this.offset;
this.data.array[n+0]=m;
this.data.array[n+1]=C;
this.data.array[n+2]=z;
this.data.array[n+3]=w;
return this
}});
Object.defineProperty(dr.prototype,"needsUpdate",{set:function(m){!0===m&&this.version++
}});
Object.assign(dr.prototype,{isInterleavedBuffer:!0,setArray:function(m){if(Array.isArray(m)){throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.")
}this.count=void 0!==m?m.length/this.stride:0;
this.array=m
},setDynamic:function(m){this.dynamic=m;
return this
},copy:function(m){this.array=new m.array.constructor(m.array);
this.count=m.count;
this.stride=m.stride;
this.dynamic=m.dynamic;
return this
},copyAt:function(n,m,C){n*=this.stride;
C*=m.stride;
for(var z=0,w=this.stride;
z<w;
z++){this.array[n+z]=m.array[C+z]
}return this
},set:function(n,m){void 0===m&&(m=0);
this.array.set(n,m);
return this
},clone:function(){return(new this.constructor).copy(this)
},onUpload:function(m){this.onUploadCallback=m;
return this
}});
bJ.prototype=Object.assign(Object.create(dr.prototype),{constructor:bJ,isInstancedInterleavedBuffer:!0,copy:function(m){dr.prototype.copy.call(this,m);
this.meshPerAttribute=m.meshPerAttribute;
return this
}});
bx.prototype=Object.assign(Object.create(eT.prototype),{constructor:bx,isInstancedBufferAttribute:!0,copy:function(m){eT.prototype.copy.call(this,m);
this.meshPerAttribute=m.meshPerAttribute;
return this
}});
Object.assign(bU.prototype,{linePrecision:1,set:function(n,m){this.ray.set(n,m)
},setFromCamera:function(n,m){m&&m.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(m.matrixWorld),this.ray.direction.set(n.x,n.y,0.5).unproject(m).sub(this.ray.origin).normalize()):m&&m.isOrthographicCamera?(this.ray.origin.set(n.x,n.y,(m.near+m.far)/(m.near-m.far)).unproject(m),this.ray.direction.set(0,0,-1).transformDirection(m.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")
},intersectObject:function(n,m){var w=[];
bl(n,this,w,m);
w.sort(fn);
return w
},intersectObjects:function(n,m){var C=[];
if(!1===Array.isArray(n)){return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),C
}for(var z=0,w=n.length;
z<w;
z++){bl(n[z],this,C,m)
}C.sort(fn);
return C
}});
Object.assign(eV.prototype,{start:function(){this.oldTime=this.startTime=("undefined"===typeof performance?Date:performance).now();
this.elapsedTime=0;
this.running=!0
},stop:function(){this.getElapsedTime();
this.autoStart=this.running=!1
},getElapsedTime:function(){this.getDelta();
return this.elapsedTime
},getDelta:function(){var n=0;
if(this.autoStart&&!this.running){return this.start(),0
}if(this.running){var m=("undefined"===typeof performance?Date:performance).now(),n=(m-this.oldTime)/1000;
this.oldTime=m;
this.elapsedTime+=n
}return n
}});
Object.assign(ez.prototype,{set:function(n,m,w){this.radius=n;
this.phi=m;
this.theta=w;
return this
},clone:function(){return(new this.constructor).copy(this)
},copy:function(m){this.radius=m.radius;
this.phi=m.phi;
this.theta=m.theta;
return this
},makeSafe:function(){this.phi=Math.max(0.000001,Math.min(Math.PI-0.000001,this.phi));
return this
},setFromVector3:function(m){this.radius=m.length();
0===this.radius?this.phi=this.theta=0:(this.theta=Math.atan2(m.x,m.z),this.phi=Math.acos(eN.clamp(m.y/this.radius,-1,1)));
return this
}});
Object.assign(ei.prototype,{set:function(n,m,w){this.radius=n;
this.theta=m;
this.y=w;
return this
},clone:function(){return(new this.constructor).copy(this)
},copy:function(m){this.radius=m.radius;
this.theta=m.theta;
this.y=m.y;
return this
},setFromVector3:function(m){this.radius=Math.sqrt(m.x*m.x+m.z*m.z);
this.theta=Math.atan2(m.x,m.z);
this.y=m.y;
return this
}});
bh.prototype=Object.create(ev.prototype);
bh.prototype.constructor=bh;
bh.prototype.isImmediateRenderObject=!0;
aS.prototype=Object.create(eJ.prototype);
aS.prototype.constructor=aS;
aS.prototype.update=function(){var n=new ew,m=new ew,w=new bp;
return function(){var Q,P=["a","b","c"];
this.object.updateMatrixWorld(!0);
w.getNormalMatrix(this.object.matrixWorld);
var O=this.object.matrixWorld,N=this.geometry.attributes.position;
if((Q=this.object.geometry)&&Q.isGeometry){for(var L=Q.vertices,K=Q.faces,F=Q=0,D=K.length;
F<D;
F++){for(var C=K[F],S=0,z=C.vertexNormals.length;
S<z;
S++){var R=C.vertexNormals[S];
n.copy(L[C[P[S]]]).applyMatrix4(O);
m.copy(R).applyMatrix3(w).normalize().multiplyScalar(this.size).add(n);
N.setXYZ(Q,n.x,n.y,n.z);
Q+=1;
N.setXYZ(Q,m.x,m.y,m.z);
Q+=1
}}}else{if(Q&&Q.isBufferGeometry){for(P=Q.attributes.position,L=Q.attributes.normal,S=Q=0,z=P.count;
S<z;
S++){n.set(P.getX(S),P.getY(S),P.getZ(S)).applyMatrix4(O),m.set(L.getX(S),L.getY(S),L.getZ(S)),m.applyMatrix3(w).normalize().multiplyScalar(this.size).add(n),N.setXYZ(Q,n.x,n.y,n.z),Q+=1,N.setXYZ(Q,m.x,m.y,m.z),Q+=1
}}}N.needsUpdate=!0
}
}();
c6.prototype=Object.create(ev.prototype);
c6.prototype.constructor=c6;
c6.prototype.dispose=function(){this.cone.geometry.dispose();
this.cone.material.dispose()
};
c6.prototype.update=function(){var n=new ew,m=new ew;
return function(){this.light.updateMatrixWorld();
var z=this.light.distance?this.light.distance:1000,w=z*Math.tan(this.light.angle);
this.cone.scale.set(w,w,z);
n.setFromMatrixPosition(this.light.matrixWorld);
m.setFromMatrixPosition(this.light.target.matrixWorld);
this.cone.lookAt(m.sub(n));
void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)
}
}();
cU.prototype=Object.create(eJ.prototype);
cU.prototype.constructor=cU;
cU.prototype.onBeforeRender=function(){var n=new ew,m=new eQ,w=new eQ;
return function(){var L=this.bones,K=this.geometry,F=K.getAttribute("position");
w.getInverse(this.root.matrixWorld);
for(var D=0,C=0;
D<L.length;
D++){var z=L[D];
z.parent&&z.parent.isBone&&(m.multiplyMatrices(w,z.matrixWorld),n.setFromMatrixPosition(m),F.setXYZ(C,n.x,n.y,n.z),m.multiplyMatrices(w,z.parent.matrixWorld),n.setFromMatrixPosition(m),F.setXYZ(C+1,n.x,n.y,n.z),C+=2)
}K.getAttribute("position").needsUpdate=!0
}
}();
cJ.prototype=Object.create(dR.prototype);
cJ.prototype.constructor=cJ;
cJ.prototype.dispose=function(){this.geometry.dispose();
this.material.dispose()
};
cJ.prototype.update=function(){void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color)
};
cy.prototype=Object.create(ev.prototype);
cy.prototype.constructor=cy;
cy.prototype.dispose=function(){this.children[0].geometry.dispose();
this.children[0].material.dispose()
};
cy.prototype.update=function(){var n=0.5*this.light.width,m=0.5*this.light.height,z=this.line.geometry.attributes.position,w=z.array;
w[0]=n;
w[1]=-m;
w[2]=0;
w[3]=n;
w[4]=m;
w[5]=0;
w[6]=-n;
w[7]=m;
w[8]=0;
w[9]=-n;
w[10]=-m;
w[11]=0;
w[12]=n;
w[13]=-m;
w[14]=0;
z.needsUpdate=!0;
void 0!==this.color?this.line.material.color.set(this.color):this.line.material.color.copy(this.light.color)
};
cm.prototype=Object.create(ev.prototype);
cm.prototype.constructor=cm;
cm.prototype.dispose=function(){this.children[0].geometry.dispose();
this.children[0].material.dispose()
};
cm.prototype.update=function(){var n=new ew,m=new e2,w=new e2;
return function(){var K=this.children[0];
if(void 0!==this.color){this.material.color.set(this.color)
}else{var F=K.geometry.getAttribute("color");
m.copy(this.light.color);
w.copy(this.light.groundColor);
for(var D=0,C=F.count;
D<C;
D++){var z=D<C/2?m:w;
F.setXYZ(D,z.r,z.g,z.b)
}F.needsUpdate=!0
}K.lookAt(n.setFromMatrixPosition(this.light.matrixWorld).negate())
}
}();
bW.prototype=Object.create(eJ.prototype);
bW.prototype.constructor=bW;
eF.prototype=Object.create(eJ.prototype);
eF.prototype.constructor=eF;
fp.prototype=Object.create(eJ.prototype);
fp.prototype.constructor=fp;
fp.prototype.update=function(){var n=new ew,m=new ew,w=new bp;
return function(){this.object.updateMatrixWorld(!0);
w.getNormalMatrix(this.object.matrixWorld);
for(var P=this.object.matrixWorld,O=this.geometry.attributes.position,N=this.object.geometry,L=N.vertices,N=N.faces,K=0,F=0,D=N.length;
F<D;
F++){var C=N[F],z=C.normal;
n.copy(L[C.a]).add(L[C.b]).add(L[C.c]).divideScalar(3).applyMatrix4(P);
m.copy(z).applyMatrix3(w).normalize().multiplyScalar(this.size).add(n);
O.setXYZ(K,n.x,n.y,n.z);
K+=1;
O.setXYZ(K,m.x,m.y,m.z);
K+=1
}O.needsUpdate=!0
}
}();
b3.prototype=Object.create(ev.prototype);
b3.prototype.constructor=b3;
b3.prototype.dispose=function(){this.lightPlane.geometry.dispose();
this.lightPlane.material.dispose();
this.targetLine.geometry.dispose();
this.targetLine.material.dispose()
};
b3.prototype.update=function(){var n=new ew,m=new ew,w=new ew;
return function(){n.setFromMatrixPosition(this.light.matrixWorld);
m.setFromMatrixPosition(this.light.target.matrixWorld);
w.subVectors(m,n);
this.lightPlane.lookAt(w);
void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color));
this.targetLine.lookAt(w);
this.targetLine.scale.z=w.length()
}
}();
eY.prototype=Object.create(eJ.prototype);
eY.prototype.constructor=eY;
eY.prototype.update=function(){function n(D,L,K,F){z.set(L,K,F).unproject(w);
D=C[D];
if(void 0!==D){for(L=m.getAttribute("position"),K=0,F=D.length;
K<F;
K++){L.setXYZ(D[K],z.x,z.y,z.z)
}}}var m,C,z=new ew,w=new dX;
return function(){m=this.geometry;
C=this.pointMap;
w.projectionMatrix.copy(this.camera.projectionMatrix);
n("c",0,0,-1);
n("t",0,0,1);
n("n1",-1,-1,-1);
n("n2",1,-1,-1);
n("n3",-1,1,-1);
n("n4",1,1,-1);
n("f1",-1,-1,1);
n("f2",1,-1,1);
n("f3",-1,1,1);
n("f4",1,1,1);
n("u1",0.7,1.1,-1);
n("u2",-0.7,1.1,-1);
n("u3",0,2,-1);
n("cf1",-1,0,1);
n("cf2",1,0,1);
n("cf3",0,-1,1);
n("cf4",0,1,1);
n("cn1",-1,0,-1);
n("cn2",1,0,-1);
n("cn3",0,-1,-1);
n("cn4",0,1,-1);
m.getAttribute("position").needsUpdate=!0
}
}();
fC.prototype=Object.create(eJ.prototype);
fC.prototype.constructor=fC;
fC.prototype.update=function(){var m=new dl;
return function(n){void 0!==n&&console.warn("THREE.BoxHelper: .update() has no longer arguments.");
void 0!==this.object&&m.setFromObject(this.object);
if(!m.isEmpty()){n=m.min;
var C=m.max,z=this.geometry.attributes.position,w=z.array;
w[0]=C.x;
w[1]=C.y;
w[2]=C.z;
w[3]=n.x;
w[4]=C.y;
w[5]=C.z;
w[6]=n.x;
w[7]=n.y;
w[8]=C.z;
w[9]=C.x;
w[10]=n.y;
w[11]=C.z;
w[12]=C.x;
w[13]=C.y;
w[14]=n.z;
w[15]=n.x;
w[16]=C.y;
w[17]=n.z;
w[18]=n.x;
w[19]=n.y;
w[20]=n.z;
w[21]=C.x;
w[22]=n.y;
w[23]=n.z;
z.needsUpdate=!0;
this.geometry.computeBoundingSphere()
}}
}();
fC.prototype.setFromObject=function(m){this.object=m;
this.update();
return this
};
eB.prototype=Object.create(eJ.prototype);
eB.prototype.constructor=eB;
eB.prototype.onBeforeRender=function(){var m=this.box;
m.isEmpty()||(m.getCenter(this.position),m.getSize(this.scale),this.scale.multiplyScalar(0.5))
};
ek.prototype=Object.create(a7.prototype);
ek.prototype.constructor=ek;
ek.prototype.onBeforeRender=function(){var m=-this.plane.constant;
1e-8>Math.abs(m)&&(m=1e-8);
this.scale.set(0.5*this.size,0.5*this.size,m);
this.lookAt(this.plane.normal);
this.updateMatrixWorld()
};
var eq,a3;
fk.prototype=Object.create(ev.prototype);
fk.prototype.constructor=fk;
fk.prototype.setDirection=function(){var n=new ew,m;
return function(w){0.99999<w.y?this.quaternion.set(0,0,0,1):-0.99999>w.y?this.quaternion.set(1,0,0,0):(n.set(w.z,0,-w.x).normalize(),m=Math.acos(w.y),this.quaternion.setFromAxisAngle(n,m))
}
}();
fk.prototype.setLength=function(n,m,w){void 0===m&&(m=0.2*n);
void 0===w&&(w=0.2*m);
this.line.scale.set(1,Math.max(0,n-m),1);
this.line.updateMatrix();
this.cone.scale.set(w,m,w);
this.cone.position.y=n;
this.cone.updateMatrix()
};
fk.prototype.setColor=function(m){this.line.material.color.copy(m);
this.cone.material.color.copy(m)
};
d7.prototype=Object.create(eJ.prototype);
d7.prototype.constructor=d7;
var dv=new ew,H=new aK,p=new aK,c=new aK;
eI.prototype=Object.create(bB.prototype);
eI.prototype.constructor=eI;
eI.prototype.getPoint=function(n){var m=this.points,K=m.length;
n*=K-(this.closed?0:1);
var F=Math.floor(n);
n-=F;
this.closed?F+=0<F?0:(Math.floor(Math.abs(F)/m.length)+1)*m.length:0===n&&F===K-1&&(F=K-2,n=1);
if(this.closed||0<F){var D=m[(F-1)%K]
}else{dv.subVectors(m[0],m[1]).add(m[0]),D=dv
}var C=m[F%K];
var z=m[(F+1)%K];
this.closed||F+2<K?m=m[(F+2)%K]:(dv.subVectors(m[K-1],m[K-2]).add(m[K-1]),m=dv);
if(void 0===this.type||"centripetal"===this.type||"chordal"===this.type){var w="chordal"===this.type?0.5:0.25,K=Math.pow(D.distanceToSquared(C),w),F=Math.pow(C.distanceToSquared(z),w),w=Math.pow(z.distanceToSquared(m),w);
0.0001>F&&(F=1);
0.0001>K&&(K=F);
0.0001>w&&(w=F);
H.initNonuniformCatmullRom(D.x,C.x,z.x,m.x,K,F,w);
p.initNonuniformCatmullRom(D.y,C.y,z.y,m.y,K,F,w);
c.initNonuniformCatmullRom(D.z,C.z,z.z,m.z,K,F,w)
}else{"catmullrom"===this.type&&(K=void 0!==this.tension?this.tension:0.5,H.initCatmullRom(D.x,C.x,z.x,m.x,K),p.initCatmullRom(D.y,C.y,z.y,m.y,K),c.initCatmullRom(D.z,C.z,z.z,m.z,K))
}return new ew(H.calc(n),p.calc(n),c.calc(n))
};
d1.prototype=Object.create(bB.prototype);
d1.prototype.constructor=d1;
d1.prototype.getPoint=function(n){var m=this.v0,C=this.v1,z=this.v2,w=this.v3;
return new ew(M(n,m.x,C.x,z.x,w.x),M(n,m.y,C.y,z.y,w.y),M(n,m.z,C.z,z.z,w.z))
};
dO.prototype=Object.create(bB.prototype);
dO.prototype.constructor=dO;
dO.prototype.getPoint=function(n){var m=this.v0,z=this.v1,w=this.v2;
return new ew(an(n,m.x,z.x,w.x),an(n,m.y,z.y,w.y),an(n,m.z,z.z,w.z))
};
dC.prototype=Object.create(bB.prototype);
dC.prototype.constructor=dC;
dC.prototype.getPoint=function(n){if(1===n){return this.v2.clone()
}var m=new ew;
m.subVectors(this.v2,this.v1);
m.multiplyScalar(n);
m.add(this.v1);
return m
};
dU.prototype=Object.create(ch.prototype);
dU.prototype.constructor=dU;
bB.create=function(n,m){console.log("THREE.Curve.create() has been deprecated");
n.prototype=Object.create(bB.prototype);
n.prototype.constructor=n;
n.prototype.getPoint=m;
return n
};
dM.prototype=Object.create(eI.prototype);
dA.prototype=Object.create(eI.prototype);
ay.prototype=Object.create(eI.prototype);
Object.assign(ay.prototype,{initFromArray:function(m){console.error("THREE.Spline: .initFromArray() has been removed.")
},getControlPointsArray:function(m){console.error("THREE.Spline: .getControlPointsArray() has been removed.")
},reparametrizeByArcLength:function(m){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
}});
bW.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
};
cU.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
};
Object.assign(c5.prototype,{center:function(m){console.warn("THREE.Box2: .center() has been renamed to .getCenter().");
return this.getCenter(m)
},empty:function(){console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");
return this.isEmpty()
},isIntersectionBox:function(m){console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");
return this.intersectsBox(m)
},size:function(m){console.warn("THREE.Box2: .size() has been renamed to .getSize().");
return this.getSize(m)
}});
Object.assign(dl.prototype,{center:function(m){console.warn("THREE.Box3: .center() has been renamed to .getCenter().");
return this.getCenter(m)
},empty:function(){console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");
return this.isEmpty()
},isIntersectionBox:function(m){console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");
return this.intersectsBox(m)
},isIntersectionSphere:function(m){console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");
return this.intersectsSphere(m)
},size:function(m){console.warn("THREE.Box3: .size() has been renamed to .getSize().");
return this.getSize(m)
}});
k.prototype.center=function(m){console.warn("THREE.Line3: .center() has been renamed to .getCenter().");
return this.getCenter(m)
};
eN.random16=function(){console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead.");
return Math.random()
};
Object.assign(bp.prototype,{flattenToArrayOffset:function(n,m){console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
return this.toArray(n,m)
},multiplyVector3:function(m){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
return m.applyMatrix3(this)
},multiplyVector3Array:function(m){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
},applyToBuffer:function(n,m,w){console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");
return this.applyToBufferAttribute(n)
},applyToVector3Array:function(n,m,w){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
}});
Object.assign(eQ.prototype,{extractPosition:function(m){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
return this.copyPosition(m)
},flattenToArrayOffset:function(n,m){console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
return this.toArray(n,m)
},getPosition:function(){var m;
return function(){void 0===m&&(m=new ew);
console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
return m.setFromMatrixColumn(this,3)
}
}(),setRotationFromQuaternion:function(m){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
return this.makeRotationFromQuaternion(m)
},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
},multiplyVector3:function(m){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");
return m.applyMatrix4(this)
},multiplyVector4:function(m){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
return m.applyMatrix4(this)
},multiplyVector3Array:function(m){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
},rotateAxis:function(m){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
m.transformDirection(this)
},crossVector:function(m){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
return m.applyMatrix4(this)
},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")
},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")
},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")
},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")
},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
},applyToBuffer:function(n,m,w){console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");
return this.applyToBufferAttribute(n)
},applyToVector3Array:function(n,m,w){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
},makeFrustum:function(n,m,D,C,z,w){console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");
return this.makePerspective(n,m,C,D,z,w)
}});
fl.prototype.isIntersectionLine=function(m){console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");
return this.intersectsLine(m)
};
c8.prototype.multiplyVector3=function(m){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
return m.applyQuaternion(this)
};
Object.assign(ds.prototype,{isIntersectionBox:function(m){console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");
return this.intersectsBox(m)
},isIntersectionPlane:function(m){console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");
return this.intersectsPlane(m)
},isIntersectionSphere:function(m){console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");
return this.intersectsSphere(m)
}});
Object.assign(f.prototype,{extrude:function(m){console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");
return new bY(this,m)
},makeGeometry:function(m){console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");
return new bF(this,m)
}});
Object.assign(e0.prototype,{fromAttribute:function(n,m,w){console.error("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");
return this.fromBufferAttribute(n,m,w)
}});
Object.assign(ew.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
},getPositionFromMatrix:function(m){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
return this.setFromMatrixPosition(m)
},getScaleFromMatrix:function(m){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");
return this.setFromMatrixScale(m)
},getColumnFromMatrix:function(n,m){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");
return this.setFromMatrixColumn(m,n)
},applyProjection:function(m){console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");
return this.applyMatrix4(m)
},fromAttribute:function(n,m,w){console.error("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");
return this.fromBufferAttribute(n,m,w)
}});
Object.assign(eM.prototype,{fromAttribute:function(n,m,w){console.error("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");
return this.fromBufferAttribute(n,m,w)
}});
eO.prototype.computeTangents=function(){console.warn("THREE.Geometry: .computeTangents() has been removed.")
};
Object.assign(ev.prototype,{getChildByName:function(m){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
return this.getObjectByName(m)
},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
},translate:function(n,m){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
return this.translateOnAxis(m,n)
}});
Object.defineProperties(ev.prototype,{eulerOrder:{get:function(){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
return this.rotation.order
},set:function(m){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
this.rotation.order=m
}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
}}});
Object.defineProperties(fB.prototype,{objects:{get:function(){console.warn("THREE.LOD: .objects has been renamed to .levels.");
return this.levels
}}});
Object.defineProperty(fj.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")
},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")
}});
Object.defineProperty(bB.prototype,"__arcLengthDivisions",{get:function(){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
return this.arcLengthDivisions
},set:function(m){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
this.arcLengthDivisions=m
}});
cW.prototype.setLens=function(n,m){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");
void 0!==m&&(this.filmGauge=m);
this.setFocalLength(n)
};
Object.defineProperties(fs.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")
}},shadowCameraFov:{set:function(m){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");
this.shadow.camera.fov=m
}},shadowCameraLeft:{set:function(m){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");
this.shadow.camera.left=m
}},shadowCameraRight:{set:function(m){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");
this.shadow.camera.right=m
}},shadowCameraTop:{set:function(m){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");
this.shadow.camera.top=m
}},shadowCameraBottom:{set:function(m){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");
this.shadow.camera.bottom=m
}},shadowCameraNear:{set:function(m){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");
this.shadow.camera.near=m
}},shadowCameraFar:{set:function(m){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");
this.shadow.camera.far=m
}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
}},shadowBias:{set:function(m){console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
this.shadow.bias=m
}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")
}},shadowMapWidth:{set:function(m){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");
this.shadow.mapSize.width=m
}},shadowMapHeight:{set:function(m){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");
this.shadow.mapSize.height=m
}}});
Object.defineProperties(eT.prototype,{length:{get:function(){console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");
return this.array.length
}}});
Object.assign(eX.prototype,{addIndex:function(m){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");
this.setIndex(m)
},addDrawCall:function(n,m,w){void 0!==w&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");
console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");
this.addGroup(n,m)
},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");
this.clearGroups()
},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
}});
Object.defineProperties(eX.prototype,{drawcalls:{get:function(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");
return this.groups
}},offsets:{get:function(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");
return this.groups
}}});
Object.defineProperties(e5.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
}},onUpdate:{value:function(){console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");
return this
}}});
Object.defineProperties(eP.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")
},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")
}},wrapRGB:{get:function(){console.warn("THREE.Material: .wrapRGB has been removed.");
return new e2
}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")
},set:function(m){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.");
this.flatShading=1===m
}}});
Object.defineProperties(a0.prototype,{metal:{get:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");
return !1
},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
}}});
Object.defineProperties(fD.prototype,{derivatives:{get:function(){console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
return this.extensions.derivatives
},set:function(m){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
this.extensions.derivatives=m
}}});
Object.assign(ba.prototype,{getCurrentRenderTarget:function(){console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");
return this.getRenderTarget()
},getMaxAnisotropy:function(){console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().");
return this.capabilities.getMaxAnisotropy()
},getPrecision:function(){console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.");
return this.capabilities.precision
},supportsFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
return this.extensions.get("OES_texture_float")
},supportsHalfFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");
return this.extensions.get("OES_texture_half_float")
},supportsStandardDerivatives:function(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
return this.extensions.get("OES_standard_derivatives")
},supportsCompressedTextureS3TC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
return this.extensions.get("WEBGL_compressed_texture_s3tc")
},supportsCompressedTexturePVRTC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");
return this.extensions.get("WEBGL_compressed_texture_pvrtc")
},supportsBlendMinMax:function(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");
return this.extensions.get("EXT_blend_minmax")
},supportsVertexTextures:function(){console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");
return this.capabilities.vertexTextures
},supportsInstancedArrays:function(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");
return this.extensions.get("ANGLE_instanced_arrays")
},enableScissorTest:function(m){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");
this.setScissorTest(m)
},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
}});
Object.defineProperties(ba.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled
},set:function(m){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");
this.shadowMap.enabled=m
}},shadowMapType:{get:function(){return this.shadowMap.type
},set:function(m){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");
this.shadowMap.type=m
}},shadowMapCullFace:{get:function(){return this.shadowMap.cullFace
},set:function(m){console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace.");
this.shadowMap.cullFace=m
}}});
Object.defineProperties(ep.prototype,{cullFace:{get:function(){return this.renderReverseSided?2:1
},set:function(m){m=1!==m;
console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to "+m+".");
this.renderReverseSided=m
}}});
Object.defineProperties(aZ.prototype,{wrapS:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
return this.texture.wrapS
},set:function(m){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
this.texture.wrapS=m
}},wrapT:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
return this.texture.wrapT
},set:function(m){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
this.texture.wrapT=m
}},magFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
return this.texture.magFilter
},set:function(m){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
this.texture.magFilter=m
}},minFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
return this.texture.minFilter
},set:function(m){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
this.texture.minFilter=m
}},anisotropy:{get:function(){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
return this.texture.anisotropy
},set:function(m){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
this.texture.anisotropy=m
}},offset:{get:function(){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
return this.texture.offset
},set:function(m){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
this.texture.offset=m
}},repeat:{get:function(){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
return this.texture.repeat
},set:function(m){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
this.texture.repeat=m
}},format:{get:function(){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
return this.texture.format
},set:function(m){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
this.texture.format=m
}},type:{get:function(){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
return this.texture.type
},set:function(m){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
this.texture.type=m
}},generateMipmaps:{get:function(){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
return this.texture.generateMipmaps
},set:function(m){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
this.texture.generateMipmaps=m
}}});
dD.prototype.load=function(n){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
var m=this;
(new dB).load(n,function(w){m.setBuffer(w)
});
return this
};
cH.prototype.getData=function(){console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");
return this.getFrequencyData()
};
bs.prototype.updateCubeMap=function(n,m){console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");
return this.update(n,m)
};
ex.WebGLRenderTargetCube=aG;
ex.WebGLRenderTarget=aZ;
ex.WebGLRenderer=ba;
ex.ShaderLib=c7;
ex.UniformsLib=eS;
ex.UniformsUtils=ai;
ex.ShaderChunk=eL;
ex.FogExp2=fx;
ex.Fog=e7;
ex.Scene=b2;
ex.LensFlare=aR;
ex.Sprite=e;
ex.LOD=fB;
ex.SkinnedMesh=by;
ex.Skeleton=fj;
ex.Bone=bK;
ex.Mesh=dR;
ex.LineSegments=eJ;
ex.LineLoop=bm;
ex.Line=a7;
ex.Points=eH;
ex.Group=aY;
ex.VideoTexture=a4;
ex.DataTexture=e1;
ex.CompressedTexture=et;
ex.CubeTexture=bS;
ex.CanvasTexture=bL;
ex.DepthTexture=aF;
ex.Texture=eR;
ex.CompressedTextureLoader=cM;
ex.DataTextureLoader=fo;
ex.CubeTextureLoader=eW;
ex.TextureLoader=aL;
ex.ObjectLoader=cB;
ex.MaterialLoader=fv;
ex.BufferGeometryLoader=eA;
ex.DefaultLoadingManager=bN;
ex.LoadingManager=bV;
ex.JSONLoader=ej;
ex.ImageLoader=cD;
ex.FontLoader=b7;
ex.FileLoader=e8;
ex.Loader=el;
ex.Cache=dq;
ex.AudioLoader=dB;
ex.SpotLightShadow=al;
ex.SpotLight=I;
ex.PointLight=q;
ex.RectAreaLight=aX;
ex.HemisphereLight=az;
ex.DirectionalLightShadow=d;
ex.DirectionalLight=fA;
ex.AmbientLight=fi;
ex.LightShadow=a6;
ex.Light=fs;
ex.StereoCamera=bP;
ex.PerspectiveCamera=cW;
ex.OrthographicCamera=ah;
ex.CubeCamera=bs;
ex.ArrayCamera=cl;
ex.Camera=dX;
ex.AudioListener=dp;
ex.PositionalAudio=cT;
ex.AudioContext=c4;
ex.AudioAnalyser=cH;
ex.Audio=dD;
ex.VectorKeyframeTrack=eZ;
ex.StringKeyframeTrack=y;
ex.QuaternionKeyframeTrack=b9;
ex.NumberKeyframeTrack=eC;
ex.ColorKeyframeTrack=fG;
ex.BooleanKeyframeTrack=i;
ex.PropertyMixer=cx;
ex.PropertyBinding=en;
ex.KeyframeTrack=aB;
ex.AnimationUtils=d4;
ex.AnimationObjectGroup=br;
ex.AnimationMixer=aQ;
ex.AnimationClip=aH;
ex.Uniform=e5;
ex.InstancedBufferGeometry=ck;
ex.BufferGeometry=eX;
ex.GeometryIdCount=function(){return cN++
};
ex.Geometry=eO;
ex.InterleavedBufferAttribute=b1;
ex.InstancedInterleavedBuffer=bJ;
ex.InterleavedBuffer=dr;
ex.InstancedBufferAttribute=bx;
ex.Face3=c2;
ex.Object3D=ev;
ex.Raycaster=bU;
ex.Layers=cZ;
ex.EventDispatcher=b5;
ex.Clock=eV;
ex.QuaternionLinearInterpolant=Y;
ex.LinearInterpolant=cs;
ex.DiscreteInterpolant=ar;
ex.CubicInterpolant=aE;
ex.Interpolant=u;
ex.Triangle=cQ;
ex.Math=eN;
ex.Spherical=ez;
ex.Cylindrical=ei;
ex.Plane=fl;
ex.Frustum=cI;
ex.Sphere=av;
ex.Ray=ds;
ex.Matrix4=eQ;
ex.Matrix3=bp;
ex.Box3=dl;
ex.Box2=c5;
ex.Line3=k;
ex.Euler=bj;
ex.Vector4=eM;
ex.Vector3=ew;
ex.Vector2=e0;
ex.Quaternion=c8;
ex.Color=e2;
ex.ImmediateRenderObject=bh;
ex.VertexNormalsHelper=aS;
ex.SpotLightHelper=c6;
ex.SkeletonHelper=cU;
ex.PointLightHelper=cJ;
ex.RectAreaLightHelper=cy;
ex.HemisphereLightHelper=cm;
ex.GridHelper=bW;
ex.PolarGridHelper=eF;
ex.FaceNormalsHelper=fp;
ex.DirectionalLightHelper=b3;
ex.CameraHelper=eY;
ex.BoxHelper=fC;
ex.Box3Helper=eB;
ex.PlaneHelper=ek;
ex.ArrowHelper=fk;
ex.AxisHelper=d7;
ex.CatmullRomCurve3=eI;
ex.CubicBezierCurve3=d1;
ex.QuadraticBezierCurve3=dO;
ex.LineCurve3=dC;
ex.ArcCurve=dU;
ex.EllipseCurve=ch;
ex.SplineCurve=t;
ex.CubicBezierCurve=d2;
ex.QuadraticBezierCurve=dP;
ex.LineCurve=dy;
ex.Shape=f;
ex.Path=bE;
ex.ShapePath=d0;
ex.Font=dN;
ex.CurvePath=bQ;
ex.Curve=bB;
ex.ShapeUtils=l;
ex.SceneUtils={createMultiMaterialObject:function(n,m){for(var C=new aY,z=0,w=m.length;
z<w;
z++){C.add(new dR(n,m[z]))
}return C
},detach:function(n,m,w){n.applyMatrix(m.matrixWorld);
m.remove(n);
w.add(n)
},attach:function(n,m,w){n.applyMatrix((new eQ).getInverse(w.matrixWorld));
m.remove(n);
w.add(n)
}};
ex.WebGLUtils=cY;
ex.WireframeGeometry=d9;
ex.ParametricGeometry=at;
ex.ParametricBufferGeometry=dW;
ex.TetrahedronGeometry=A;
ex.TetrahedronBufferGeometry=dJ;
ex.OctahedronGeometry=j;
ex.OctahedronBufferGeometry=cV;
ex.IcosahedronGeometry=a;
ex.IcosahedronBufferGeometry=dx;
ex.DodecahedronGeometry=fw;
ex.DodecahedronBufferGeometry=dk;
ex.PolyhedronGeometry=Z;
ex.PolyhedronBufferGeometry=ao;
ex.TubeGeometry=e6;
ex.TubeBufferGeometry=c1;
ex.TorusKnotGeometry=eG;
ex.TorusKnotBufferGeometry=cP;
ex.TorusGeometry=er;
ex.TorusBufferGeometry=cE;
ex.TextGeometry=d8;
ex.TextBufferGeometry=ct;
ex.SphereGeometry=dV;
ex.SphereBufferGeometry=cK;
ex.RingGeometry=dI;
ex.RingBufferGeometry=ca;
ex.PlaneGeometry=J;
ex.PlaneBufferGeometry=dE;
ex.LatheGeometry=dw;
ex.LatheBufferGeometry=bR;
ex.ShapeGeometry=bF;
ex.ShapeBufferGeometry=bt;
ex.ExtrudeGeometry=bY;
ex.ExtrudeBufferGeometry=E;
ex.EdgesGeometry=bi;
ex.ConeGeometry=dj;
ex.ConeBufferGeometry=c0;
ex.CylinderGeometry=cz;
ex.CylinderBufferGeometry=cu;
ex.CircleGeometry=cO;
ex.CircleBufferGeometry=aT;
ex.BoxGeometry=B;
ex.BoxBufferGeometry=dQ;
ex.ShadowMaterial=bX;
ex.SpriteMaterial=aU;
ex.RawShaderMaterial=fq;
ex.ShaderMaterial=fD;
ex.PointsMaterial=co;
ex.MeshPhysicalMaterial=cn;
ex.MeshStandardMaterial=dK;
ex.MeshPhongMaterial=a0;
ex.MeshToonMaterial=b4;
ex.MeshNormalMaterial=bM;
ex.MeshLambertMaterial=bA;
ex.MeshDepthMaterial=bG;
ex.MeshDistanceMaterial=bu;
ex.MeshBasicMaterial=aO;
ex.LineDashedMaterial=bo;
ex.LineBasicMaterial=eK;
ex.Material=eP;
ex.Float64BufferAttribute=am;
ex.Float32BufferAttribute=es;
ex.Uint32BufferAttribute=d3;
ex.Int32BufferAttribute=aA;
ex.Uint16BufferAttribute=em;
ex.Int16BufferAttribute=aM;
ex.Uint8ClampedBufferAttribute=a5;
ex.Uint8BufferAttribute=bn;
ex.Int8BufferAttribute=bz;
ex.BufferAttribute=eT;
ex.REVISION="87";
ex.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2};
ex.CullFaceNone=0;
ex.CullFaceBack=1;
ex.CullFaceFront=2;
ex.CullFaceFrontBack=3;
ex.FrontFaceDirectionCW=0;
ex.FrontFaceDirectionCCW=1;
ex.BasicShadowMap=0;
ex.PCFShadowMap=1;
ex.PCFSoftShadowMap=2;
ex.FrontSide=0;
ex.BackSide=1;
ex.DoubleSide=2;
ex.FlatShading=1;
ex.SmoothShading=2;
ex.NoColors=0;
ex.FaceColors=1;
ex.VertexColors=2;
ex.NoBlending=0;
ex.NormalBlending=1;
ex.AdditiveBlending=2;
ex.SubtractiveBlending=3;
ex.MultiplyBlending=4;
ex.CustomBlending=5;
ex.AddEquation=100;
ex.SubtractEquation=101;
ex.ReverseSubtractEquation=102;
ex.MinEquation=103;
ex.MaxEquation=104;
ex.ZeroFactor=200;
ex.OneFactor=201;
ex.SrcColorFactor=202;
ex.OneMinusSrcColorFactor=203;
ex.SrcAlphaFactor=204;
ex.OneMinusSrcAlphaFactor=205;
ex.DstAlphaFactor=206;
ex.OneMinusDstAlphaFactor=207;
ex.DstColorFactor=208;
ex.OneMinusDstColorFactor=209;
ex.SrcAlphaSaturateFactor=210;
ex.NeverDepth=0;
ex.AlwaysDepth=1;
ex.LessDepth=2;
ex.LessEqualDepth=3;
ex.EqualDepth=4;
ex.GreaterEqualDepth=5;
ex.GreaterDepth=6;
ex.NotEqualDepth=7;
ex.MultiplyOperation=0;
ex.MixOperation=1;
ex.AddOperation=2;
ex.NoToneMapping=0;
ex.LinearToneMapping=1;
ex.ReinhardToneMapping=2;
ex.Uncharted2ToneMapping=3;
ex.CineonToneMapping=4;
ex.UVMapping=300;
ex.CubeReflectionMapping=301;
ex.CubeRefractionMapping=302;
ex.EquirectangularReflectionMapping=303;
ex.EquirectangularRefractionMapping=304;
ex.SphericalReflectionMapping=305;
ex.CubeUVReflectionMapping=306;
ex.CubeUVRefractionMapping=307;
ex.RepeatWrapping=1000;
ex.ClampToEdgeWrapping=1001;
ex.MirroredRepeatWrapping=1002;
ex.NearestFilter=1003;
ex.NearestMipMapNearestFilter=1004;
ex.NearestMipMapLinearFilter=1005;
ex.LinearFilter=1006;
ex.LinearMipMapNearestFilter=1007;
ex.LinearMipMapLinearFilter=1008;
ex.UnsignedByteType=1009;
ex.ByteType=1010;
ex.ShortType=1011;
ex.UnsignedShortType=1012;
ex.IntType=1013;
ex.UnsignedIntType=1014;
ex.FloatType=1015;
ex.HalfFloatType=1016;
ex.UnsignedShort4444Type=1017;
ex.UnsignedShort5551Type=1018;
ex.UnsignedShort565Type=1019;
ex.UnsignedInt248Type=1020;
ex.AlphaFormat=1021;
ex.RGBFormat=1022;
ex.RGBAFormat=1023;
ex.LuminanceFormat=1024;
ex.LuminanceAlphaFormat=1025;
ex.RGBEFormat=1023;
ex.DepthFormat=1026;
ex.DepthStencilFormat=1027;
ex.RGB_S3TC_DXT1_Format=2001;
ex.RGBA_S3TC_DXT1_Format=2002;
ex.RGBA_S3TC_DXT3_Format=2003;
ex.RGBA_S3TC_DXT5_Format=2004;
ex.RGB_PVRTC_4BPPV1_Format=2100;
ex.RGB_PVRTC_2BPPV1_Format=2101;
ex.RGBA_PVRTC_4BPPV1_Format=2102;
ex.RGBA_PVRTC_2BPPV1_Format=2103;
ex.RGB_ETC1_Format=2151;
ex.LoopOnce=2200;
ex.LoopRepeat=2201;
ex.LoopPingPong=2202;
ex.InterpolateDiscrete=2300;
ex.InterpolateLinear=2301;
ex.InterpolateSmooth=2302;
ex.ZeroCurvatureEnding=2400;
ex.ZeroSlopeEnding=2401;
ex.WrapAroundEnding=2402;
ex.TrianglesDrawMode=0;
ex.TriangleStripDrawMode=1;
ex.TriangleFanDrawMode=2;
ex.LinearEncoding=3000;
ex.sRGBEncoding=3001;
ex.GammaEncoding=3007;
ex.RGBEEncoding=3002;
ex.LogLuvEncoding=3003;
ex.RGBM7Encoding=3004;
ex.RGBM16Encoding=3005;
ex.RGBDEncoding=3006;
ex.BasicDepthPacking=3200;
ex.RGBADepthPacking=3201;
ex.CubeGeometry=B;
ex.Face4=function(n,m,F,D,C,z,w){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
return new c2(n,m,F,C,z,w)
};
ex.LineStrip=0;
ex.LinePieces=1;
ex.MeshFaceMaterial=function(m){console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");
return m
};
ex.MultiMaterial=function(m){void 0===m&&(m=[]);
console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");
m.isMultiMaterial=!0;
m.materials=m;
m.clone=function(){return m.slice()
};
return m
};
ex.PointCloud=function(n,m){console.warn("THREE.PointCloud has been renamed to THREE.Points.");
return new eH(n,m)
};
ex.Particle=function(m){console.warn("THREE.Particle has been renamed to THREE.Sprite.");
return new e(m)
};
ex.ParticleSystem=function(n,m){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");
return new eH(n,m)
};
ex.PointCloudMaterial=function(m){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");
return new co(m)
};
ex.ParticleBasicMaterial=function(m){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");
return new co(m)
};
ex.ParticleSystemMaterial=function(m){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");
return new co(m)
};
ex.Vertex=function(n,m,w){console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");
return new ew(n,m,w)
};
ex.DynamicBufferAttribute=function(n,m){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");
return(new eT(n,m)).setDynamic(!0)
};
ex.Int8Attribute=function(n,m){console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");
return new bz(n,m)
};
ex.Uint8Attribute=function(n,m){console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");
return new bn(n,m)
};
ex.Uint8ClampedAttribute=function(n,m){console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");
return new a5(n,m)
};
ex.Int16Attribute=function(n,m){console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");
return new aM(n,m)
};
ex.Uint16Attribute=function(n,m){console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");
return new em(n,m)
};
ex.Int32Attribute=function(n,m){console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");
return new aA(n,m)
};
ex.Uint32Attribute=function(n,m){console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");
return new d3(n,m)
};
ex.Float32Attribute=function(n,m){console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");
return new es(n,m)
};
ex.Float64Attribute=function(n,m){console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");
return new am(n,m)
};
ex.ClosedSplineCurve3=dM;
ex.SplineCurve3=dA;
ex.Spline=ay;
ex.BoundingBoxHelper=function(n,m){console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");
return new fC(n,m)
};
ex.EdgesHelper=function(n,m){console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");
return new eJ(new bi(n.geometry),new eK({color:void 0!==m?m:16777215}))
};
ex.WireframeHelper=function(n,m){console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");
return new eJ(new d9(n.geometry),new eK({color:void 0!==m?m:16777215}))
};
ex.XHRLoader=function(m){console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");
return new e8(m)
};
ex.BinaryTextureLoader=function(m){console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");
return new fo(m)
};
ex.GeometryUtils={merge:function(n,m,z){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
if(m.isMesh){m.matrixAutoUpdate&&m.updateMatrix();
var w=m.matrix;
m=m.geometry
}n.merge(m,w,z)
},center:function(m){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");
return m.center()
}};
ex.ImageUtils={crossOrigin:void 0,loadTexture:function(n,m,C,z){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
var w=new aL;
w.setCrossOrigin(this.crossOrigin);
n=w.load(n,C,void 0,z);
m&&(n.mapping=m);
return n
},loadTextureCube:function(n,m,C,z){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
var w=new eW;
w.setCrossOrigin(this.crossOrigin);
n=w.load(n,C,void 0,z);
m&&(n.mapping=m);
return n
},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
}};
ex.Projector=function(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");
this.projectVector=function(n,m){console.warn("THREE.Projector: .projectVector() is now vector.project().");
n.project(m)
};
this.unprojectVector=function(n,m){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");
n.unproject(m)
};
this.pickingRay=function(){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
}
};
ex.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");
this.domElement=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");
this.clear=function(){};
this.render=function(){};
this.setClearColor=function(){};
this.setSize=function(){}
};
Object.defineProperty(ex,"__esModule",{value:!0})
});
THREE.SpriteCanvasMaterial=function(a){THREE.Material.call(this);
this.type="SpriteCanvasMaterial";
this.color=new THREE.Color(16777215);
this.program=function(){};
this.setValues(a)
};
THREE.SpriteCanvasMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.SpriteCanvasMaterial.prototype.constructor=THREE.SpriteCanvasMaterial;
THREE.SpriteCanvasMaterial.prototype.isSpriteCanvasMaterial=true;
THREE.SpriteCanvasMaterial.prototype.clone=function(){var a=new THREE.SpriteCanvasMaterial();
a.copy(this);
a.color.copy(this.color);
a.program=this.program;
return a
};
THREE.CanvasRenderer=function(C){console.log("THREE.CanvasRenderer",THREE.REVISION);
C=C||{};
var u=this,z,D,n,a=new THREE.Projector(),i=C.canvas!==undefined?C.canvas:document.createElement("canvas"),x=i.width,an=i.height,Y=Math.floor(x/2),G=Math.floor(an/2),c=0,b=0,ap=x,w=an,V=1,f=i.getContext("2d",{alpha:C.alpha===true}),E=new THREE.Color(0),aj=C.alpha===true?0:1,ao=1,al=0,v=null,ak=null,I=null,l=null,ai=null,L=[],X,W,T,t,r,e,d,aw,au,h=new THREE.Color(),R=new THREE.Color(),p=new THREE.Color(),af=new THREE.Color(),F={},k,av,ar,ag,ae,O,N,ay=new THREE.Box2(),q=new THREE.Box2(),y=new THREE.Box2(),aq=new THREE.Color(),A=new THREE.Color(),U=new THREE.Color(),m=new THREE.Vector3(),az=new THREE.Vector3(),Q=new THREE.Vector3(),K=new THREE.Matrix3();
if(f.setLineDash===undefined){f.setLineDash=function(){}
}this.domElement=i;
this.autoClear=true;
this.sortObjects=true;
this.sortElements=true;
this.info={render:{vertices:0,faces:0}};
this.supportsVertexTextures=function(){};
this.setFaceCulling=function(){};
this.getContext=function(){return f
};
this.getContextAttributes=function(){return f.getContextAttributes()
};
this.getPixelRatio=function(){return V
};
this.setPixelRatio=function(aB){if(aB!==undefined){V=aB
}};
this.setSize=function(aC,aB,aD){x=aC*V;
an=aB*V;
i.width=x;
i.height=an;
Y=Math.floor(x/2);
G=Math.floor(an/2);
if(aD!==false){i.style.width=aC+"px";
i.style.height=aB+"px"
}ay.min.set(-Y,-G);
ay.max.set(Y,G);
q.min.set(-Y,-G);
q.max.set(Y,G);
ao=1;
al=0;
v=null;
ak=null;
I=null;
l=null;
ai=null;
this.setViewport(0,0,aC,aB)
};
this.setViewport=function(aC,aE,aD,aB){c=aC*V;
b=aE*V;
ap=aD*V;
w=aB*V
};
this.setScissor=function(){};
this.setScissorTest=function(){};
this.setClearColor=function(aB,aC){E.set(aB);
aj=aC!==undefined?aC:1;
q.min.set(-Y,-G);
q.max.set(Y,G)
};
this.setClearColorHex=function(aB,aC){console.warn("THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead.");
this.setClearColor(aB,aC)
};
this.getClearColor=function(){return E
};
this.getClearAlpha=function(){return aj
};
this.getMaxAnisotropy=function(){return 0
};
this.clear=function(){if(q.isEmpty()===false){q.intersect(ay);
q.expandByScalar(2);
q.min.x=q.min.x+Y;
q.min.y=-q.min.y+G;
q.max.x=q.max.x+Y;
q.max.y=-q.max.y+G;
if(aj<1){f.clearRect(q.min.x|0,q.max.y|0,(q.max.x-q.min.x)|0,(q.min.y-q.max.y)|0)
}if(aj>0){B(1);
ab(THREE.NormalBlending);
Z("rgba("+Math.floor(E.r*255)+","+Math.floor(E.g*255)+","+Math.floor(E.b*255)+","+aj+")");
f.fillRect(q.min.x|0,q.max.y|0,(q.max.x-q.min.x)|0,(q.min.y-q.max.y)|0)
}q.makeEmpty()
}};
this.clearColor=function(){};
this.clearDepth=function(){};
this.clearStencil=function(){};
this.render=function(aH,aF){if(aF.isCamera===undefined){console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
return
}var aC=aH.background;
if(aC&&aC.isColor){B(1);
ab(THREE.NormalBlending);
Z(aC.getStyle());
f.fillRect(0,0,x,an)
}else{if(this.autoClear===true){this.clear()
}}u.info.render.vertices=0;
u.info.render.faces=0;
f.setTransform(ap/x,0,0,-w/an,c,an-b);
f.translate(Y,G);
z=a.projectScene(aH,aF,this.sortObjects,this.sortElements);
D=z.elements;
n=z.lights;
K.getNormalMatrix(aF.matrixWorldInverse);
ad();
for(var aG=0,aE=D.length;
aG<aE;
aG++){var aB=D[aG];
var aD=aB.material;
if(aD===undefined||aD.opacity===0){continue
}y.makeEmpty();
if(aB instanceof THREE.RenderableSprite){X=aB;
X.x*=Y;
X.y*=G;
o(X,aB,aD)
}else{if(aB instanceof THREE.RenderableLine){X=aB.v1;
W=aB.v2;
X.positionScreen.x*=Y;
X.positionScreen.y*=G;
W.positionScreen.x*=Y;
W.positionScreen.y*=G;
y.setFromPoints([X.positionScreen,W.positionScreen]);
if(ay.intersectsBox(y)===true){ah(X,W,aB,aD)
}}else{if(aB instanceof THREE.RenderableFace){X=aB.v1;
W=aB.v2;
T=aB.v3;
if(X.positionScreen.z<-1||X.positionScreen.z>1){continue
}if(W.positionScreen.z<-1||W.positionScreen.z>1){continue
}if(T.positionScreen.z<-1||T.positionScreen.z>1){continue
}X.positionScreen.x*=Y;
X.positionScreen.y*=G;
W.positionScreen.x*=Y;
W.positionScreen.y*=G;
T.positionScreen.x*=Y;
T.positionScreen.y*=G;
if(aD.overdraw>0){aa(X.positionScreen,W.positionScreen,aD.overdraw);
aa(W.positionScreen,T.positionScreen,aD.overdraw);
aa(T.positionScreen,X.positionScreen,aD.overdraw)
}y.setFromPoints([X.positionScreen,W.positionScreen,T.positionScreen]);
if(ay.intersectsBox(y)===true){aA(X,W,T,0,1,2,aB,aD)
}}}}q.union(y)
}f.setTransform(1,0,0,1,0,0)
};
function ad(){aq.setRGB(0,0,0);
A.setRGB(0,0,0);
U.setRGB(0,0,0);
for(var aD=0,aE=n.length;
aD<aE;
aD++){var aC=n[aD];
var aB=aC.color;
if(aC.isAmbientLight){aq.add(aB)
}else{if(aC.isDirectionalLight){A.add(aB)
}else{if(aC.isPointLight){U.add(aB)
}}}}}function g(aB,aI,aF){for(var aE=0,aH=n.length;
aE<aH;
aE++){var aD=n[aE];
af.copy(aD.color);
if(aD.isDirectionalLight){var aC=m.setFromMatrixPosition(aD.matrixWorld).normalize();
var aG=aI.dot(aC);
if(aG<=0){continue
}aG*=aD.intensity;
aF.add(af.multiplyScalar(aG))
}else{if(aD.isPointLight){var aC=m.setFromMatrixPosition(aD.matrixWorld);
var aG=aI.dot(m.subVectors(aC,aB).normalize());
if(aG<=0){continue
}aG*=aD.distance==0?1:1-Math.min(aB.distanceTo(aC)/aD.distance,1);
if(aG==0){continue
}aG*=aD.intensity;
aF.add(af.multiplyScalar(aG))
}}}}function o(aN,aF,aG){B(aG.opacity);
ab(aG.blending);
var aP=aF.scale.x*Y;
var aO=aF.scale.y*G;
var aJ=Math.sqrt(aP*aP+aO*aO);
y.min.set(aN.x-aJ,aN.y-aJ);
y.max.set(aN.x+aJ,aN.y+aJ);
if(aG.isSpriteMaterial){var aI=aG.map;
if(aI!==null){var aH=F[aI.id];
if(aH===undefined||aH.version!==aI.version){aH=J(aI);
F[aI.id]=aH
}if(aH.canvas!==undefined){Z(aH.canvas);
var aM=aI.image;
var aC=aM.width*aI.offset.x;
var aB=aM.height*aI.offset.y;
var aL=aM.width*aI.repeat.x;
var aK=aM.height*aI.repeat.y;
var aE=aP/aL;
var aD=aO/aK;
f.save();
f.translate(aN.x,aN.y);
if(aG.rotation!==0){f.rotate(aG.rotation)
}f.translate(-aP/2,-aO/2);
f.scale(aE,aD);
f.translate(-aC,-aB);
f.fillRect(aC,aB,aL,aK);
f.restore()
}}else{Z(aG.color.getStyle());
f.save();
f.translate(aN.x,aN.y);
if(aG.rotation!==0){f.rotate(aG.rotation)
}f.scale(aP,-aO);
f.fillRect(-0.5,-0.5,1,1);
f.restore()
}}else{if(aG.isSpriteCanvasMaterial){am(aG.color.getStyle());
Z(aG.color.getStyle());
f.save();
f.translate(aN.x,aN.y);
if(aG.rotation!==0){f.rotate(aG.rotation)
}f.scale(aP,aO);
aG.program(f);
f.restore()
}else{if(aG.isPointsMaterial){Z(aG.color.getStyle());
f.save();
f.translate(aN.x,aN.y);
if(aG.rotation!==0){f.rotate(aG.rotation)
}f.scale(aP*aG.size,-aO*aG.size);
f.fillRect(-0.5,-0.5,1,1);
f.restore()
}}}}function ah(aI,aG,aE,aF){B(aF.opacity);
ab(aF.blending);
f.beginPath();
f.moveTo(aI.positionScreen.x,aI.positionScreen.y);
f.lineTo(aG.positionScreen.x,aG.positionScreen.y);
if(aF.isLineBasicMaterial){H(aF.linewidth);
S(aF.linecap);
at(aF.linejoin);
if(aF.vertexColors!==THREE.VertexColors){am(aF.color.getStyle())
}else{var aD=aE.vertexColors[0].getStyle();
var aB=aE.vertexColors[1].getStyle();
if(aD===aB){am(aD)
}else{try{var aH=f.createLinearGradient(aI.positionScreen.x,aI.positionScreen.y,aG.positionScreen.x,aG.positionScreen.y);
aH.addColorStop(0,aD);
aH.addColorStop(1,aB)
}catch(aC){aH=aD
}am(aH)
}}if(aF.isLineDashedMaterial){P([aF.dashSize,aF.gapSize])
}f.stroke();
y.expandByScalar(aF.linewidth*2);
if(aF.isLineDashedMaterial){P([])
}}}function aA(aJ,aI,aH,aE,aD,aC,aF,aG){u.info.render.vertices+=3;
u.info.render.faces++;
B(aG.opacity);
ab(aG.blending);
t=aJ.positionScreen.x;
r=aJ.positionScreen.y;
e=aI.positionScreen.x;
d=aI.positionScreen.y;
aw=aH.positionScreen.x;
au=aH.positionScreen.y;
M(t,r,e,d,aw,au);
if((aG.isMeshLambertMaterial||aG.isMeshPhongMaterial||aG.isMeshStandardMaterial)&&aG.map===null){R.copy(aG.color);
p.copy(aG.emissive);
if(aG.vertexColors===THREE.FaceColors){R.multiply(aF.color)
}h.copy(aq);
az.copy(aJ.positionWorld).add(aI.positionWorld).add(aH.positionWorld).divideScalar(3);
g(az,aF.normalModel,h);
h.multiply(R).add(p);
aG.wireframe===true?ax(h,aG.wireframeLinewidth,aG.wireframeLinecap,aG.wireframeLinejoin):j(h)
}else{if(aG.isMeshBasicMaterial||aG.isMeshLambertMaterial||aG.isMeshPhongMaterial||aG.isMeshStandardMaterial){if(aG.map!==null){var aB=aG.map.mapping;
if(aB===THREE.UVMapping){k=aF.uvs;
ac(t,r,e,d,aw,au,k[aE].x,k[aE].y,k[aD].x,k[aD].y,k[aC].x,k[aC].y,aG.map)
}}else{if(aG.envMap!==null){if(aG.envMap.mapping===THREE.SphericalReflectionMapping){Q.copy(aF.vertexNormalsModel[aE]).applyMatrix3(K);
av=0.5*Q.x+0.5;
ar=0.5*Q.y+0.5;
Q.copy(aF.vertexNormalsModel[aD]).applyMatrix3(K);
ag=0.5*Q.x+0.5;
ae=0.5*Q.y+0.5;
Q.copy(aF.vertexNormalsModel[aC]).applyMatrix3(K);
O=0.5*Q.x+0.5;
N=0.5*Q.y+0.5;
ac(t,r,e,d,aw,au,av,ar,ag,ae,O,N,aG.envMap)
}}else{h.copy(aG.color);
if(aG.vertexColors===THREE.FaceColors){h.multiply(aF.color)
}aG.wireframe===true?ax(h,aG.wireframeLinewidth,aG.wireframeLinecap,aG.wireframeLinejoin):j(h)
}}}else{if(aG.isMeshNormalMaterial){Q.copy(aF.normalModel).applyMatrix3(K);
h.setRGB(Q.x,Q.y,Q.z).multiplyScalar(0.5).addScalar(0.5);
aG.wireframe===true?ax(h,aG.wireframeLinewidth,aG.wireframeLinecap,aG.wireframeLinejoin):j(h)
}else{h.setRGB(1,1,1);
aG.wireframe===true?ax(h,aG.wireframeLinewidth,aG.wireframeLinecap,aG.wireframeLinejoin):j(h)
}}}}function M(aE,aG,aC,aF,aB,aD){f.beginPath();
f.moveTo(aE,aG);
f.lineTo(aC,aF);
f.lineTo(aB,aD);
f.closePath()
}function ax(aB,aE,aD,aC){H(aE);
S(aD);
at(aC);
am(aB.getStyle());
f.stroke();
y.expandByScalar(aE*2)
}function j(aB){Z(aB.getStyle());
f.fill()
}function J(aJ){if(aJ.version===0||aJ instanceof THREE.CompressedTexture||aJ instanceof THREE.DataTexture){return{canvas:undefined,version:aJ.version}
}var aF=aJ.image;
if(aF.complete===false){return{canvas:undefined,version:0}
}var aK=aJ.wrapS===THREE.RepeatWrapping||aJ.wrapS===THREE.MirroredRepeatWrapping;
var aH=aJ.wrapT===THREE.RepeatWrapping||aJ.wrapT===THREE.MirroredRepeatWrapping;
var aG=aJ.wrapS===THREE.MirroredRepeatWrapping;
var aE=aJ.wrapT===THREE.MirroredRepeatWrapping;
var aD=document.createElement("canvas");
aD.width=aF.width*(aG?2:1);
aD.height=aF.height*(aE?2:1);
var aC=aD.getContext("2d");
aC.setTransform(1,0,0,-1,0,aF.height);
aC.drawImage(aF,0,0);
if(aG===true){aC.setTransform(-1,0,0,-1,aF.width,aF.height);
aC.drawImage(aF,-aF.width,0)
}if(aE===true){aC.setTransform(1,0,0,1,0,0);
aC.drawImage(aF,0,aF.height)
}if(aG===true&&aE===true){aC.setTransform(-1,0,0,1,aF.width,0);
aC.drawImage(aF,-aF.width,aF.height)
}var aB="no-repeat";
if(aK===true&&aH===true){aB="repeat"
}else{if(aK===true){aB="repeat-x"
}else{if(aH===true){aB="repeat-y"
}}}var aI=f.createPattern(aD,aB);
if(aJ.onUpdate){aJ.onUpdate(aJ)
}return{canvas:aI,version:aJ.version}
}function ac(aT,aG,aQ,aF,aN,aD,aP,aE,aM,aC,aL,aB,aI){var aO=F[aI.id];
if(aO===undefined||aO.version!==aI.version){aO=J(aI);
F[aI.id]=aO
}if(aO.canvas!==undefined){Z(aO.canvas)
}else{Z("rgba( 0, 0, 0, 1)");
f.fill();
return
}var a0,aZ,aY,aX,aV,aS,aH,aW,aU=aI.offset.x/aI.repeat.x,aR=aI.offset.y/aI.repeat.y,aK=aI.image.width*aI.repeat.x,aJ=aI.image.height*aI.repeat.y;
aP=(aP+aU)*aK;
aE=(aE+aR)*aJ;
aM=(aM+aU)*aK;
aC=(aC+aR)*aJ;
aL=(aL+aU)*aK;
aB=(aB+aR)*aJ;
aQ-=aT;
aF-=aG;
aN-=aT;
aD-=aG;
aM-=aP;
aC-=aE;
aL-=aP;
aB-=aE;
aH=aM*aB-aL*aC;
if(aH===0){return
}aW=1/aH;
a0=(aB*aQ-aC*aN)*aW;
aZ=(aB*aF-aC*aD)*aW;
aY=(aM*aN-aL*aQ)*aW;
aX=(aM*aD-aL*aF)*aW;
aV=aT-a0*aP-aY*aE;
aS=aG-aZ*aP-aX*aE;
f.save();
f.transform(a0,aZ,aY,aX,aV,aS);
f.fill();
f.restore()
}function aa(aH,aE,aG){var aB=aE.x-aH.x,aF=aE.y-aH.y,aC=aB*aB+aF*aF,aD;
if(aC===0){return
}aD=aG/Math.sqrt(aC);
aB*=aD;
aF*=aD;
aE.x+=aB;
aE.y+=aF;
aH.x-=aB;
aH.y-=aF
}function B(aB){if(ao!==aB){f.globalAlpha=aB;
ao=aB
}}function ab(aB){if(al!==aB){if(aB===THREE.NormalBlending){f.globalCompositeOperation="source-over"
}else{if(aB===THREE.AdditiveBlending){f.globalCompositeOperation="lighter"
}else{if(aB===THREE.SubtractiveBlending){f.globalCompositeOperation="darker"
}else{if(aB===THREE.MultiplyBlending){f.globalCompositeOperation="multiply"
}}}}al=aB
}}function H(aB){if(I!==aB){f.lineWidth=aB;
I=aB
}}function S(aB){if(l!==aB){f.lineCap=aB;
l=aB
}}function at(aB){if(ai!==aB){f.lineJoin=aB;
ai=aB
}}function am(aB){if(v!==aB){f.strokeStyle=aB;
v=aB
}}function Z(aB){if(ak!==aB){f.fillStyle=aB;
ak=aB
}}function P(aB){if(L.length!==aB.length){f.setLineDash(aB);
L=aB
}}};
THREE.DeviceOrientationControls=function(b){var c=this;
this.object=b;
this.object.rotation.reorder("YXZ");
this.enabled=true;
this.deviceOrientation={};
this.screenOrientation=0;
this.alphaOffset=0;
var a=function(f){c.deviceOrientation=f
};
var e=function(){c.screenOrientation=window.orientation||0
};
var d=function(){var h=new THREE.Vector3(0,0,1);
var i=new THREE.Euler();
var g=new THREE.Quaternion();
var f=new THREE.Quaternion(-Math.sqrt(0.5),0,0,Math.sqrt(0.5));
return function(n,m,l,j,k){i.set(l,m,-j,"YXZ");
n.setFromEuler(i);
n.multiply(f);
n.multiply(g.setFromAxisAngle(h,-k))
}
}();
this.connect=function(){e();
window.addEventListener("orientationchange",e,false);
window.addEventListener("deviceorientation",a,false);
c.enabled=true
};
this.disconnect=function(){window.removeEventListener("orientationchange",e,false);
window.removeEventListener("deviceorientation",a,false);
c.enabled=false
};
this.update=function(){if(c.enabled===false){return
}var i=c.deviceOrientation.alpha?THREE.Math.degToRad(c.deviceOrientation.alpha)+this.alphaOffset:0;
var h=c.deviceOrientation.beta?THREE.Math.degToRad(c.deviceOrientation.beta):0;
var f=c.deviceOrientation.gamma?THREE.Math.degToRad(c.deviceOrientation.gamma):0;
var g=c.screenOrientation?THREE.Math.degToRad(c.screenOrientation):0;
d(c.object.quaternion,i,h,f,g)
};
this.dispose=function(){this.disconnect()
};
this.connect()
};
THREE.RenderableObject=function(){this.id=0;
this.object=null;
this.z=0;
this.renderOrder=0
};
THREE.RenderableFace=function(){this.id=0;
this.v1=new THREE.RenderableVertex();
this.v2=new THREE.RenderableVertex();
this.v3=new THREE.RenderableVertex();
this.normalModel=new THREE.Vector3();
this.vertexNormalsModel=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()];
this.vertexNormalsLength=0;
this.color=new THREE.Color();
this.material=null;
this.uvs=[new THREE.Vector2(),new THREE.Vector2(),new THREE.Vector2()];
this.z=0;
this.renderOrder=0
};
THREE.RenderableVertex=function(){this.position=new THREE.Vector3();
this.positionWorld=new THREE.Vector3();
this.positionScreen=new THREE.Vector4();
this.visible=true
};
THREE.RenderableVertex.prototype.copy=function(a){this.positionWorld.copy(a.positionWorld);
this.positionScreen.copy(a.positionScreen)
};
THREE.RenderableLine=function(){this.id=0;
this.v1=new THREE.RenderableVertex();
this.v2=new THREE.RenderableVertex();
this.vertexColors=[new THREE.Color(),new THREE.Color()];
this.material=null;
this.z=0;
this.renderOrder=0
};
THREE.RenderableSprite=function(){this.id=0;
this.object=null;
this.x=0;
this.y=0;
this.z=0;
this.rotation=0;
this.scale=new THREE.Vector2();
this.material=null;
this.renderOrder=0
};
THREE.Projector=function(){var T,G,N=[],o=0,y,c,f=[],b=0,m,D,J=[],A=0,i,P,R=[],v=0,B,r,e=[],S=0,L={objects:[],lights:[],elements:[]},M=new THREE.Vector3(),K=new THREE.Vector4(),t=new THREE.Box3(new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,1,1)),U=new THREE.Box3(),O=new Array(3),a=new THREE.Matrix4(),g=new THREE.Matrix4(),C,F=new THREE.Matrix4(),p=new THREE.Matrix3(),Q=new THREE.Frustum(),u=new THREE.Vector4(),h=new THREE.Vector4();
this.projectVector=function(V,W){console.warn("THREE.Projector: .projectVector() is now vector.project().");
V.project(W)
};
this.unprojectVector=function(V,W){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");
V.unproject(W)
};
this.pickingRay=function(){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
};
var d=function(){var ai=[];
var X=[];
var ae=[];
var ad=null;
var ag=null;
var ac=new THREE.Matrix3();
function aa(al){ad=al;
ag=ad.material;
ac.getNormalMatrix(ad.matrixWorld);
ai.length=0;
X.length=0;
ae.length=0
}function af(an){var al=an.position;
var ao=an.positionWorld;
var am=an.positionScreen;
ao.copy(al).applyMatrix4(C);
am.copy(ao).applyMatrix4(g);
var ap=1/am.w;
am.x*=ap;
am.y*=ap;
am.z*=ap;
an.visible=am.x>=-1&&am.x<=1&&am.y>=-1&&am.y<=1&&am.z>=-1&&am.z<=1
}function W(al,an,am){y=w();
y.position.set(al,an,am);
af(y)
}function Z(al,an,am){ai.push(al,an,am)
}function aj(an,am,al){X.push(an,am,al)
}function Y(al,am){ae.push(al,am)
}function ab(an,am,al){if(an.visible===true||am.visible===true||al.visible===true){return true
}O[0]=an.positionScreen;
O[1]=am.positionScreen;
O[2]=al.positionScreen;
return t.intersectsBox(U.setFromPoints(O))
}function ah(an,am,al){return((al.positionScreen.x-an.positionScreen.x)*(am.positionScreen.y-an.positionScreen.y)-(al.positionScreen.y-an.positionScreen.y)*(am.positionScreen.x-an.positionScreen.x))<0
}function ak(am,al){var ao=f[am];
var an=f[al];
ao.positionScreen.copy(ao.position).applyMatrix4(F);
an.positionScreen.copy(an.position).applyMatrix4(F);
if(z(ao.positionScreen,an.positionScreen)===true){ao.positionScreen.multiplyScalar(1/ao.positionScreen.w);
an.positionScreen.multiplyScalar(1/an.positionScreen.w);
i=I();
i.id=ad.id;
i.v1.copy(ao);
i.v2.copy(an);
i.z=Math.max(ao.positionScreen.z,an.positionScreen.z);
i.renderOrder=ad.renderOrder;
i.material=ad.material;
if(ad.material.vertexColors===THREE.VertexColors){i.vertexColors[0].fromArray(X,am*3);
i.vertexColors[1].fromArray(X,al*3)
}L.elements.push(i)
}}function V(at,aq,ao){var au=f[at];
var ar=f[aq];
var ap=f[ao];
if(ab(au,ar,ap)===false){return
}if(ag.side===THREE.DoubleSide||ah(au,ar,ap)===true){m=l();
m.id=ad.id;
m.v1.copy(au);
m.v2.copy(ar);
m.v3.copy(ap);
m.z=(au.positionScreen.z+ar.positionScreen.z+ap.positionScreen.z)/3;
m.renderOrder=ad.renderOrder;
m.normalModel.fromArray(ai,at*3);
m.normalModel.applyMatrix3(ac).normalize();
for(var am=0;
am<3;
am++){var an=m.vertexNormalsModel[am];
an.fromArray(ai,arguments[am]*3);
an.applyMatrix3(ac).normalize();
var al=m.uvs[am];
al.fromArray(ae,arguments[am]*2)
}m.vertexNormalsLength=3;
m.material=ad.material;
L.elements.push(m)
}}return{setObject:aa,projectVertex:af,checkTriangleVisibility:ab,checkBackfaceCulling:ah,pushVertex:W,pushNormal:Z,pushColor:aj,pushUv:Y,pushLine:ak,pushTriangle:V}
};
var H=new d();
function E(W){if(W.visible===false){return
}if(W instanceof THREE.Light){L.lights.push(W)
}else{if(W instanceof THREE.Mesh||W instanceof THREE.Line||W instanceof THREE.Points){if(W.material.visible===false){return
}if(W.frustumCulled===true&&Q.intersectsObject(W)===false){return
}x(W)
}else{if(W instanceof THREE.Sprite){if(W.material.visible===false){return
}if(W.frustumCulled===true&&Q.intersectsSprite(W)===false){return
}x(W)
}}}var Y=W.children;
for(var X=0,V=Y.length;
X<V;
X++){E(Y[X])
}}function x(V){T=n();
T.id=V.id;
T.object=V;
M.setFromMatrixPosition(V.matrixWorld);
M.applyMatrix4(g);
T.z=M.z;
T.renderOrder=V.renderOrder;
L.objects.push(T)
}this.projectScene=function(ar,aj,au,Z){D=0;
P=0;
r=0;
L.elements.length=0;
if(ar.autoUpdate===true){ar.updateMatrixWorld()
}if(aj.parent===null){aj.updateMatrixWorld()
}a.copy(aj.matrixWorldInverse);
g.multiplyMatrices(aj.projectionMatrix,a);
Q.setFromMatrix(g);
G=0;
L.objects.length=0;
L.lights.length=0;
E(ar);
if(au===true){L.objects.sort(q)
}var aG=L.objects;
for(var aH=0,aw=aG.length;
aH<aw;
aH++){var aB=aG[aH].object;
var af=aB.geometry;
H.setObject(aB);
C=aB.matrixWorld;
c=0;
if(aB instanceof THREE.Mesh){if(af instanceof THREE.BufferGeometry){var aA=af.attributes;
var ab=af.groups;
if(aA.position===undefined){continue
}var ad=aA.position.array;
for(var aM=0,aK=ad.length;
aM<aK;
aM+=3){H.pushVertex(ad[aM],ad[aM+1],ad[aM+2])
}if(aA.normal!==undefined){var an=aA.normal.array;
for(var aM=0,aK=an.length;
aM<aK;
aM+=3){H.pushNormal(an[aM],an[aM+1],an[aM+2])
}}if(aA.uv!==undefined){var az=aA.uv.array;
for(var aM=0,aK=az.length;
aM<aK;
aM+=2){H.pushUv(az[aM],az[aM+1])
}}if(af.index!==null){var Y=af.index.array;
if(ab.length>0){for(var aN=0;
aN<ab.length;
aN++){var am=ab[aN];
for(var aM=am.start,aK=am.start+am.count;
aM<aK;
aM+=3){H.pushTriangle(Y[aM],Y[aM+1],Y[aM+2])
}}}else{for(var aM=0,aK=Y.length;
aM<aK;
aM+=3){H.pushTriangle(Y[aM],Y[aM+1],Y[aM+2])
}}}else{for(var aM=0,aK=ad.length/3;
aM<aK;
aM+=3){H.pushTriangle(aM,aM+1,aM+2)
}}}else{if(af instanceof THREE.Geometry){var X=af.vertices;
var ae=af.faces;
var ay=af.faceVertexUvs[0];
p.getNormalMatrix(C);
var aL=aB.material;
var ao=Array.isArray(aL);
for(var aC=0,ai=X.length;
aC<ai;
aC++){var al=X[aC];
M.copy(al);
if(aL.morphTargets===true){var ag=af.morphTargets;
var aJ=aB.morphTargetInfluences;
for(var aE=0,W=ag.length;
aE<W;
aE++){var ax=aJ[aE];
if(ax===0){continue
}var V=ag[aE];
var aq=V.vertices[aC];
M.x+=(aq.x-al.x)*ax;
M.y+=(aq.y-al.y)*ax;
M.z+=(aq.z-al.z)*ax
}}H.pushVertex(M.x,M.y,M.z)
}for(var aO=0,at=ae.length;
aO<at;
aO++){var ac=ae[aO];
aL=ao===true?aB.material[ac.materialIndex]:aB.material;
if(aL===undefined){continue
}var ah=aL.side;
var aT=f[ac.a];
var aR=f[ac.b];
var aP=f[ac.c];
if(H.checkTriangleVisibility(aT,aR,aP)===false){continue
}var ap=H.checkBackfaceCulling(aT,aR,aP);
if(ah!==THREE.DoubleSide){if(ah===THREE.FrontSide&&ap===false){continue
}if(ah===THREE.BackSide&&ap===true){continue
}}m=l();
m.id=aB.id;
m.v1.copy(aT);
m.v2.copy(aR);
m.v3.copy(aP);
m.normalModel.copy(ac.normal);
if(ap===false&&(ah===THREE.BackSide||ah===THREE.DoubleSide)){m.normalModel.negate()
}m.normalModel.applyMatrix3(p).normalize();
var aa=ac.vertexNormals;
for(var aI=0,aQ=Math.min(aa.length,3);
aI<aQ;
aI++){var aS=m.vertexNormalsModel[aI];
aS.copy(aa[aI]);
if(ap===false&&(ah===THREE.BackSide||ah===THREE.DoubleSide)){aS.negate()
}aS.applyMatrix3(p).normalize()
}m.vertexNormalsLength=aa.length;
var ak=ay[aO];
if(ak!==undefined){for(var aD=0;
aD<3;
aD++){m.uvs[aD].copy(ak[aD])
}}m.color=ac.color;
m.material=aL;
m.z=(aT.positionScreen.z+aR.positionScreen.z+aP.positionScreen.z)/3;
m.renderOrder=aB.renderOrder;
L.elements.push(m)
}}}}else{if(aB instanceof THREE.Line){F.multiplyMatrices(g,C);
if(af instanceof THREE.BufferGeometry){var aA=af.attributes;
if(aA.position!==undefined){var ad=aA.position.array;
for(var aM=0,aK=ad.length;
aM<aK;
aM+=3){H.pushVertex(ad[aM],ad[aM+1],ad[aM+2])
}if(aA.color!==undefined){var aF=aA.color.array;
for(var aM=0,aK=aF.length;
aM<aK;
aM+=3){H.pushColor(aF[aM],aF[aM+1],aF[aM+2])
}}if(af.index!==null){var Y=af.index.array;
for(var aM=0,aK=Y.length;
aM<aK;
aM+=2){H.pushLine(Y[aM],Y[aM+1])
}}else{var av=aB instanceof THREE.LineSegments?2:1;
for(var aM=0,aK=(ad.length/3)-1;
aM<aK;
aM+=av){H.pushLine(aM,aM+1)
}}}}else{if(af instanceof THREE.Geometry){var X=aB.geometry.vertices;
if(X.length===0){continue
}aT=w();
aT.positionScreen.copy(X[0]).applyMatrix4(F);
var av=aB instanceof THREE.LineSegments?2:1;
for(var aC=1,ai=X.length;
aC<ai;
aC++){aT=w();
aT.positionScreen.copy(X[aC]).applyMatrix4(F);
if((aC+1)%av>0){continue
}aR=f[c-2];
u.copy(aT.positionScreen);
h.copy(aR.positionScreen);
if(z(u,h)===true){u.multiplyScalar(1/u.w);
h.multiplyScalar(1/h.w);
i=I();
i.id=aB.id;
i.v1.positionScreen.copy(u);
i.v2.positionScreen.copy(h);
i.z=Math.max(u.z,h.z);
i.renderOrder=aB.renderOrder;
i.material=aB.material;
if(aB.material.vertexColors===THREE.VertexColors){i.vertexColors[0].copy(aB.geometry.colors[aC]);
i.vertexColors[1].copy(aB.geometry.colors[aC-1])
}L.elements.push(i)
}}}}}else{if(aB instanceof THREE.Points){F.multiplyMatrices(g,C);
if(af instanceof THREE.Geometry){var X=aB.geometry.vertices;
for(var aC=0,ai=X.length;
aC<ai;
aC++){var al=X[aC];
K.set(al.x,al.y,al.z,1);
K.applyMatrix4(F);
j(K,aB,aj)
}}else{if(af instanceof THREE.BufferGeometry){var aA=af.attributes;
if(aA.position!==undefined){var ad=aA.position.array;
for(var aM=0,aK=ad.length;
aM<aK;
aM+=3){K.set(ad[aM],ad[aM+1],ad[aM+2],1);
K.applyMatrix4(F);
j(K,aB,aj)
}}}}}else{if(aB instanceof THREE.Sprite){K.set(C.elements[12],C.elements[13],C.elements[14],1);
K.applyMatrix4(g);
j(K,aB,aj)
}}}}}if(Z===true){L.elements.sort(q)
}return L
};
function j(V,W,X){var Y=1/V.w;
V.z*=Y;
if(V.z>=-1&&V.z<=1){B=k();
B.id=W.id;
B.x=V.x*Y;
B.y=V.y*Y;
B.z=V.z;
B.renderOrder=W.renderOrder;
B.object=W;
B.rotation=W.rotation;
B.scale.x=W.scale.x*Math.abs(B.x-(V.x+X.projectionMatrix.elements[0])/(V.w+X.projectionMatrix.elements[12]));
B.scale.y=W.scale.y*Math.abs(B.y-(V.y+X.projectionMatrix.elements[5])/(V.w+X.projectionMatrix.elements[13]));
B.material=W.material;
L.elements.push(B)
}}function n(){if(G===o){var V=new THREE.RenderableObject();
N.push(V);
o++;
G++;
return V
}return N[G++]
}function w(){if(c===b){var V=new THREE.RenderableVertex();
f.push(V);
b++;
c++;
return V
}return f[c++]
}function l(){if(D===A){var V=new THREE.RenderableFace();
J.push(V);
A++;
D++;
return V
}return J[D++]
}function I(){if(P===v){var V=new THREE.RenderableLine();
R.push(V);
v++;
P++;
return V
}return R[P++]
}function k(){if(r===S){var V=new THREE.RenderableSprite();
e.push(V);
S++;
r++;
return V
}return e[r++]
}function q(W,V){if(W.renderOrder!==V.renderOrder){return W.renderOrder-V.renderOrder
}else{if(W.z!==V.z){return V.z-W.z
}else{if(W.id!==V.id){return W.id-V.id
}else{return 0
}}}}function z(Z,Y){var X=0,ac=1,aa=Z.z+Z.w,W=Y.z+Y.w,V=-Z.z+Z.w,ab=-Y.z+Y.w;
if(aa>=0&&W>=0&&V>=0&&ab>=0){return true
}else{if((aa<0&&W<0)||(V<0&&ab<0)){return false
}else{if(aa<0){X=Math.max(X,aa/(aa-W))
}else{if(W<0){ac=Math.min(ac,aa/(aa-W))
}}if(V<0){X=Math.max(X,V/(V-ab))
}else{if(ab<0){ac=Math.min(ac,V/(V-ab))
}}if(ac<X){return false
}else{Z.lerp(Y,X);
Y.lerp(Z,1-ac);
return true
}}}}};
!function(T){function S(b){I(function(){throw b
})
}function R(a){return this.then(a,T)
}function Q(a){return this.then(T,a)
}function P(a,d){return this.then(function(b){return H(a)?a.apply(null,G(b)?b:[b]):y.onlyFuncs?b:a
},d||T)
}function O(d){function c(){d()
}return this.then(c,c),this
}function N(b){return this.then(function(a){return H(b)?b.apply(null,G(a)?a.splice(0,0,void 0)&&a:[void 0,a]):y.onlyFuncs?a:b
},function(a){return b(a)
})
}function M(a){return this.then(T,a?function(b){throw a(b),b
}:S)
}function L(r,q){var p=D(r);
if(1===p.length&&G(p[0])){if(!p[0].length){return y.fulfilled([])
}p=p[0]
}var o=[],n=y(),m=p.length;
if(m){for(var l=function(b){p[b]=y.promisify(p[b]),p[b].then(function(a){o[b]=q?p[b]:a,--m||n.resolve(o)
},function(a){q?(o[b]=p[b],--m||n.resolve(o)):n.reject(a)
})
},k=0,j=m;
j>k;
k++){l(k)
}}else{n.resolve(o)
}return n.promise
}function K(d,c){return d.then(H(c)?c:function(){return c
})
}function J(h){var g=D(h);
1===g.length&&G(g[0])&&(g=g[0]);
for(var l=y(),k=0,j=g.length,i=y.resolved();
j>k;
k++){i=K(i,g[k])
}return l.resolve(i),l.promise
}var I,H=function(b){return"function"==typeof b
},G=function(b){return Array.isArray?Array.isArray(b):b instanceof Array
},F=function(b){return !(!b||!(typeof b).match(/function|object/))
},E=function(a){return a===!1||a===T||null===a
},D=function(d,c){return[].slice.call(d,c)
},C="undefined",B=typeof TypeError===C?Error:TypeError;
if(typeof process!==C&&process.nextTick){I=process.nextTick
}else{if(typeof MessageChannel!==C){var A=new MessageChannel,z=[];
A.port1.onmessage=function(){z.length&&z.shift()()
},I=function(b){z.push(b),A.port2.postMessage(0)
}
}else{I=function(b){setTimeout(b,0)
}
}}var y=function(h){function g(){if(0!==a){var j,i=m,o=0,n=i.length,k=~a?0:1;
for(m=[];
n>o;
o++){(j=i[o][k])&&j(d)
}}}function f(j){function i(b){return function(p){return o?void 0:(o=!0,b(p))
}
}var o=!1;
if(a){return this
}try{var n=F(j)&&j.then;
if(H(n)){if(j===l){throw new B("Promise can't resolve itself")
}return n.call(j,i(f),i(e)),this
}}catch(k){return i(e)(k),this
}return c(function(){d=j,a=1,g()
}),this
}function e(b){return a||c(function(){try{throw b
}catch(i){d=i
}a=-1,g()
}),this
}var d,c=(T!==h?h:y.alwaysAsync)?I:function(b){b()
},a=0,m=[],l={then:function(j,i){var k=y();
return m.push([function(n){try{E(j)?k.resolve(n):k.resolve(H(j)?j(n):y.onlyFuncs?n:j)
}catch(o){k.reject(o)
}},function(b){if((E(i)||!H(i)&&y.onlyFuncs)&&k.reject(b),i){try{k.resolve(H(i)?i(b):i)
}catch(n){k.reject(n)
}}}]),0!==a&&c(g),k.promise
},success:R,error:Q,otherwise:Q,apply:P,spread:P,ensure:O,nodify:N,rethrow:M,isPending:function(){return 0===a
},getStatus:function(){return a
}};
return l.toSource=l.toString=l.valueOf=function(){return d===T?this:d
},{promise:l,resolve:f,fulfill:f,reject:e}
};
if(y.deferred=y.defer=y,y.nextTick=I,y.alwaysAsync=!0,y.onlyFuncs=!0,y.resolve=y.resolved=y.fulfilled=function(b){return y(!0).resolve(b).promise
},y.reject=y.rejected=function(b){return y(!0).reject(b).promise
},y.wait=function(d){var c=y();
return setTimeout(c.resolve,d||0),c.promise
},y.delay=function(e,d){var f=y();
return setTimeout(function(){try{f.resolve(H(e)?e.apply(null):e)
}catch(a){f.reject(a)
}},d||0),f.promise
},y.promisify=function(b){return b&&H(b.then)?b:y.resolved(b)
},y.all=function(){return L(arguments,!1)
},y.resolveAll=function(){return L(arguments,!0)
},y.sequence=function(){return J(arguments)
},y.nodeCapsule=function(d,c){return c||(c=d,d=void 0),function(){var f=y(),b=D(arguments);
b.push(function(g,e){g?f.reject(g):f.resolve(arguments.length>2?D(arguments,1):e)
});
try{c.apply(d,b)
}catch(a){f.reject(a)
}return f.promise
}
},"function"==typeof define&&define.amd){define("D.js",[],function(){return y
})
}else{if(typeof module!==C&&module.exports){module.exports=y
}else{if(typeof window!==C){var x=window.D;
y.noConflict=function(){return window.D=x,y
},window.D=y
}}}}();
/*!
 * uEvent 1.0.0 - to make any js object an event emitter
 * Copyright 2011 Jerome Etienne (http://jetienne.com)
 * Copyright 2015-2016 Damien "Mistic" Sorel (http://www.strangeplanet.fr)
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
;
!function(d,c){"undefined"!=typeof module&&module.exports?module.exports=c():"function"==typeof define&&define.amd?define([],c):d.uEvent=c()
}(this,function(){var e=function(){return !0
},d=function(){return !1
},f=function(){};
return f.Event=function(h,g){var j=h,i=g;
Object.defineProperties(this,{type:{get:function(){return j
},set:function(b){},enumerable:!0},args:{get:function(){return i
},set:function(b){},enumerable:!0}})
},f.Event.prototype={constructor:f.Event,isDefaultPrevented:d,isPropagationStopped:d,preventDefault:function(){this.isDefaultPrevented=e
},stopPropagation:function(){this.isPropagationStopped=e
}},f.prototype={constructor:f,on:function(h,g){if(this.__events=this.__events||{},"object"==typeof h){for(var i in h){h.hasOwnProperty(i)&&(this.__events[i]=this.__events[i]||[],this.__events[i].push(h[i]))
}}else{h.split(" ").forEach(function(b){this.__events[b]=this.__events[b]||[],this.__events[b].push(g)
},this)
}return this
},off:function(h,g){if(this.__events=this.__events||{},"object"==typeof h){for(var j in h){if(h.hasOwnProperty(j)&&j in this.__events){var i=this.__events[j].indexOf(h[j]);
-1!==i&&this.__events[j].splice(i,1)
}}}else{h?h.split(" ").forEach(function(b){if(b in this.__events){if(g){var k=this.__events[b].indexOf(g);
-1!==k&&this.__events[b].splice(k,1)
}else{this.__events[b].length=0
}}},this):this.__events={}
}return this
},once:function(h,g){if(this.__once=this.__once||{},"object"==typeof h){for(var i in h){h.hasOwnProperty(i)&&(this.__once[i]=this.__once[i]||[],this.__once[i].push(h[i]))
}}else{h.split(" ").forEach(function(b){this.__once[b]=this.__once[b]||[],this.__once[b].push(g)
},this)
}return this
},trigger:function(h){var c,l,k,j=Array.prototype.slice.call(arguments,1),i=new f.Event(h,j);
if(j.push(i),this.__events&&h in this.__events){for(c=0,l=this.__events[h].length;
l>c;
c++){if(k=this.__events[h][c],"object"==typeof k?k.handleEvent(i):k.apply(this,j),i.isPropagationStopped()){return i
}}}if(this.__once&&h in this.__once){for(c=0,l=this.__once[h].length;
l>c;
c++){if(k=this.__once[h][c],"object"==typeof k?k.handleEvent(i):k.apply(this,j),i.isPropagationStopped()){return delete this.__once[h],i
}}delete this.__once[h]
}return i
},change:function(i,c){var n,m,l,k=Array.prototype.slice.call(arguments,1),j=new f.Event(i,k);
if(k.push(j),this.__events&&i in this.__events){for(n=0,m=this.__events[i].length;
m>n;
n++){if(k[0]=c,l=this.__events[i][n],c="object"==typeof l?l.handleEvent(j):l.apply(this,k),j.isPropagationStopped()){return c
}}}return c
}},f.mixin=function(g,c){c=c||{},g="function"==typeof g?g.prototype:g,["on","off","once","trigger","change"].forEach(function(b){var a=c[b]||b;
g[a]=f.prototype[b]
}),Object.defineProperties(g,{__events:{value:null,writable:!0},__once:{value:null,writable:!0}})
},f
});
!function(){function e(n,t,r){return("string"==typeof t?t:t.toString()).replace(n.define||a,function(e,t,o,a){return 0===t.indexOf("def.")&&(t=t.substring(4)),t in r||(":"===o?(n.defineParams&&a.replace(n.defineParams,function(e,n,o){r[t]={arg:n,text:o}
}),t in r||(r[t]=a)):new Function("def","def['"+t+"']="+a)(r)),""
}).replace(n.use||a,function(t,o){n.useParams&&(o=o.replace(n.useParams,function(e,n,t,o){if(r[t]&&r[t].arg&&o){var a=(t+":"+o).replace(/'|\\/g,"_");
return r.__exp=r.__exp||{},r.__exp[a]=r[t].text.replace(new RegExp("(^|[^\\w$])"+r[t].arg+"([^\\w$])","g"),"$1"+o+"$2"),n+"def.__exp['"+a+"']"
}}));
var a=new Function("def","return "+o)(r);
return a?e(n,a,r):a
})
}function n(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")
}var t,r={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0};
r.encodeHTMLSource=function(e){var n={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},t=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;
return function(e){return e?e.toString().replace(t,function(e){return n[e]||e
}):""
}
},t=function(){return this||(0,eval)("this")
}(),"undefined"!=typeof module&&module.exports?module.exports=r:"function"==typeof define&&define.amd?define(function(){return r
}):t.doT=r;
var o={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},a=/$^/;
r.template=function(c,i,u){i=i||r.templateSettings;
var d,s,p=i.append?o.append:o.split,l=0,f=i.use||i.define?e(i,c,u||{}):c;
f=("var out='"+(i.strip?f.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):f).replace(/'|\\/g,"\\$&").replace(i.interpolate||a,function(e,t){return p.start+n(t)+p.end
}).replace(i.encode||a,function(e,t){return d=!0,p.startencode+n(t)+p.end
}).replace(i.conditional||a,function(e,t,r){return t?r?"';}else if("+n(r)+"){out+='":"';}else{out+='":r?"';if("+n(r)+"){out+='":"';}out+='"
}).replace(i.iterate||a,function(e,t,r,o){return t?(l+=1,s=o||"i"+l,t=n(t),"';var arr"+l+"="+t+";if(arr"+l+"){var "+r+","+s+"=-1,l"+l+"=arr"+l+".length-1;while("+s+"<l"+l+"){"+r+"=arr"+l+"["+s+"+=1];out+='"):"';} } out+='"
}).replace(i.evaluate||a,function(e,t){return"';"+n(t)+"out+='"
})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),d&&(i.selfcontained||!t||t._encodeHTML||(t._encodeHTML=r.encodeHTMLSource(i.doNotSkipEncoded)),f="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+r.encodeHTMLSource.toString()+"("+(i.doNotSkipEncoded||"")+"));"+f);
try{return new Function(i.varname,f)
}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+f),e
}},r.compile=function(e,n){return r.template(e,null,n)
}
}();
/*!
 * Photo Sphere Viewer 3.2.3
 * Copyright (c) 2014-2015 Jérémy Heleine
 * Copyright (c) 2015-2017 Damien "Mistic" Sorel
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
;
!function(d,c){"function"==typeof define&&define.amd?define(["three","D.js","uevent","doT"],c):"object"==typeof module&&module.exports?module.exports=c(require("three"),require("d.js"),require("uevent"),require("dot")):d.PhotoSphereViewer=c(d.THREE,d.D,d.uEvent,d.doT)
}(this,function(V,U,T,S){function R(a){if(!(this instanceof R)){return new R(a)
}if(R.SYSTEM.loaded||R._loadSystem(),this.config=y.clone(R.DEFAULTS),y.deepmerge(this.config,a),!a.container){throw new A("No value given for container.")
}if(!R.SYSTEM.isCanvasSupported){throw new A("Canvas is not supported.")
}if(!(R.SYSTEM.isWebGLSupported&&this.config.webgl||y.checkTHREE("CanvasRenderer","Projector"))){throw new A("Missing Three.js components: CanvasRenderer, Projector. Get them from three.js-examples package.")
}if(this.config.longitude_range&&2!==this.config.longitude_range.length&&(this.config.longitude_range=null,console.warn("PhotoSphereViewer: longitude_range must have exactly two elements.")),this.config.latitude_range?2!==this.config.latitude_range.length?(this.config.latitude_range=null,console.warn("PhotoSphereViewer: latitude_range must have exactly two elements.")):this.config.latitude_range[0]>this.config.latitude_range[1]&&(this.config.latitude_range=[this.config.latitude_range[1],this.config.latitude_range[0]],console.warn("PhotoSphereViewer: latitude_range values must be ordered.")):void 0===this.config.tilt_up_max&&void 0===this.config.tilt_down_max||(this.config.latitude_range=[void 0!==this.config.tilt_down_max?this.config.tilt_down_max-Math.PI/4:-y.HalfPI,void 0!==this.config.tilt_up_max?this.config.tilt_up_max+Math.PI/4:y.HalfPI],console.warn("PhotoSphereViewer: tilt_up_max and tilt_down_max are deprecated, use latitude_range instead.")),this.config.max_fov<this.config.min_fov){var e=this.config.max_fov;
this.config.max_fov=this.config.min_fov,this.config.min_fov=e,console.warn("PhotoSphereViewer: max_fov cannot be lower than min_fov.")
}this.config.cache_texture&&(!y.isInteger(this.config.cache_texture)||this.config.cache_texture<0)&&(this.config.cache_texture=R.DEFAULTS.cache_texture,console.warn("PhotoSphreViewer: invalid valud for cache_texture")),this.config.min_fov=y.bound(this.config.min_fov,1,179),this.config.max_fov=y.bound(this.config.max_fov,1,179),null===this.config.default_fov?this.config.default_fov=this.config.max_fov/2+this.config.min_fov/2:this.config.default_fov=y.bound(this.config.default_fov,this.config.min_fov,this.config.max_fov),this.config.default_long=y.parseAngle(this.config.default_long),this.config.default_lat=y.parseAngle(this.config.default_lat,-Math.PI),this.config.default_lat=y.bound(this.config.default_lat,-y.HalfPI,y.HalfPI),null===this.config.anim_lat?this.config.anim_lat=this.config.default_lat:(this.config.anim_lat=y.parseAngle(this.config.anim_lat,-Math.PI),this.config.anim_lat=y.bound(this.config.anim_lat,-y.HalfPI,y.HalfPI)),this.config.longitude_range&&(this.config.longitude_range=this.config.longitude_range.map(function(b){return y.parseAngle(b)
})),this.config.latitude_range&&(this.config.latitude_range=this.config.latitude_range.map(function(b){return b=y.parseAngle(b,-Math.PI),y.bound(b,-y.HalfPI,y.HalfPI)
})),this.config.anim_speed=y.parseSpeed(this.config.anim_speed),this.config.caption&&!this.config.navbar&&(this.config.navbar=["caption"]),this.config.fisheye===!0?this.config.fisheye=1:this.config.fisheye===!1&&(this.config.fisheye=0),this.parent="string"==typeof a.container?document.getElementById(a.container):a.container,this.container=null,this.loader=null,this.navbar=null,this.hud=null,this.panel=null,this.tooltip=null,this.canvas_container=null,this.renderer=null,this.scene=null,this.camera=null,this.mesh=null,this.raycaster=null,this.doControls=null,this.prop={isCubemap:void 0,longitude:0,latitude:0,direction:null,anim_speed:0,zoom_lvl:0,vFov:0,hFov:0,aspect:0,move_speed:0.1,moving:!1,zooming:!1,start_mouse_x:0,start_mouse_y:0,mouse_x:0,mouse_y:0,mouse_history:[],pinch_dist:0,orientation_reqid:null,autorotate_reqid:null,animation_promise:null,loading_promise:null,start_timeout:null,dblclick_data:null,dblclick_timeout:null,cache:[],size:{width:0,height:0},pano_data:{full_width:0,full_height:0,cropped_width:0,cropped_height:0,cropped_x:0,cropped_y:0}},Object.keys(R.TEMPLATES).forEach(function(b){this.config.templates[b]||(this.config.templates[b]=R.TEMPLATES[b]),"string"==typeof this.config.templates[b]&&(this.config.templates[b]=S.template(this.config.templates[b]))
},this),this.parent.photoSphereViewer=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),null!==this.config.size&&this._setViewerSize(this.config.size),this._onResize();
var d=Math.round((this.config.default_fov-this.config.min_fov)/(this.config.max_fov-this.config.min_fov)*100);
this.zoom(d-2*(d-50),!1),this.prop.move_speed=V.Math.degToRad(this.config.move_speed/R.SYSTEM.pixelRatio),this.rotate({longitude:this.config.default_long,latitude:this.config.default_lat},!1),this.loader=new O(this),this.loader.hide(),this.navbar=new N(this),this.navbar.hide(),this.hud=new P(this),this.hud.hide(),this.panel=new K(this),this.tooltip=new J(this.hud),this._bindEvents(),this.config.autoload&&this.load(),this.once("render",function(){this.config.navbar&&(this.container.classList.add("psv-container--has-navbar"),this.navbar.show()),this.hud.show(),this.config.markers&&(this.config.markers.forEach(function(b){this.hud.addMarker(b,!1)
},this),this.hud.renderMarkers()),this.config.time_anim!==!1&&(this.prop.start_timeout=window.setTimeout(this.startAutorotate.bind(this),this.config.time_anim)),this.trigger("ready")
}.bind(this))
}function Q(b){this.psv=b instanceof R?b:b.psv,this.parent=b,this.container=null,this.constructor.publicMethods&&this.constructor.publicMethods.forEach(function(c){this.psv[c]=this[c].bind(this)
},this)
}function P(b){Q.call(this,b),this.svgContainer=null,this.markers={},this.currentMarker=null,this.hoveringMarker=null,this.prop={panelOpened:!1,panelOpening:!1,markersButton:this.psv.navbar.getNavbarButton("markers")},this.create()
}function O(b){Q.call(this,b),this.canvas=null,this.loader=null,this.create()
}function N(e){if(Q.call(this,e),this.config=this.psv.config.navbar,this.items=[],this.config===!0){this.config=y.clone(R.DEFAULTS.navbar)
}else{if("string"==typeof this.config){this.config=this.config.split(" ")
}else{if(!Array.isArray(this.config)){console.warn('PhotoSphereViewer: hashmap form of "navbar" is deprecated, use an array instead.');
var d=this.config;
this.config=[];
for(var f in d){d[f]&&this.config.push(f)
}this.config.sort(function(g,c){return R.DEFAULTS.navbar.indexOf(g)-R.DEFAULTS.navbar.indexOf(c)
})
}}}this.create()
}function M(d,c){Q.call(this,d),this.create(),this.setCaption(c)
}function L(d,c){Q.call(this,d),this.weight=c||5,this.create(),this.container.classList.add("psv-spacer--weight-"+this.weight)
}function K(b){Q.call(this,b),this.content=null,this.prop={mouse_x:0,mouse_y:0,mousedown:!1,opened:!1},this.create()
}function J(b){Q.call(this,b),this.config=this.psv.config.tooltip,this.prop={timeout:null},this.create()
}function I(b){Q.call(this,b),this.id=void 0,this.constructor.id&&(this.id=this.constructor.id),this.enabled=!0
}function H(b){I.call(this,b),this.create()
}function G(d,c){I.call(this,d),this.config=c,this.config.id&&(this.id=this.config.id),this.create()
}function F(b){I.call(this,b),this.create()
}function E(b){I.call(this,b),this.create()
}function D(b){I.call(this,b),this.create()
}function C(b){I.call(this,b),this.create()
}function B(b){I.call(this,b),this.zoom_range=null,this.zoom_value=null,this.prop={mousedown:!1,buttondown:!1,longPressInterval:null},this.create()
}function A(b){this.message=b,"captureStackTrace" in Error?Error.captureStackTrace(this,A):this.stack=(new Error).stack
}function z(g,f){if(!g.id){throw new A("missing marker id")
}if(g.image&&(!g.width||!g.height)){throw new A("missing marker width/height")
}if((g.image||g.html)&&!(g.hasOwnProperty("x")&&g.hasOwnProperty("y")||g.hasOwnProperty("latitude")&&g.hasOwnProperty("longitude"))){throw new A("missing marker position, latitude/longitude or x/y")
}this.psv=f,this.visible=!0,this._dynamicSize=!1;
var j,i=g.id,h=z.getType(g,!1);
Object.defineProperties(this,{id:{configurable:!1,enumerable:!0,get:function(){return i
},set:function(b){}},type:{configurable:!1,enumerable:!0,get:function(){return h
},set:function(b){}},$el:{configurable:!1,enumerable:!0,get:function(){return j
},set:function(b){}},_def:{configurable:!1,enumerable:!0,get:function(){return this[h]
},set:function(b){this[h]=b
}}}),j=this.isNormal()?document.createElement("div"):this.isPolygon()?document.createElementNS(y.svgNS,"polygon"):document.createElementNS(y.svgNS,this.type),j.id="psv-marker-"+this.id,j.psvMarker=this,this.update(g)
}T.mixin(R),R.prototype._loadXMP=function(b){if(!this.config.usexmpdata){return U.resolved(null)
}var j=U(),i=new XMLHttpRequest,h=this,g=0;
return i.onreadystatechange=function(){if(4===i.readyState){if(200!==i.status&&201!==i.status&&202!==i.status&&0!==i.status){throw h.container.textContent="Cannot load image",new A("Cannot load image")
}h.loader.setProgress(100);
var d=i.responseText,c=d.indexOf("<x:xmpmeta"),k=d.indexOf("</x:xmpmeta>"),f=d.substring(c,k);
if(c===-1||k===-1||f.indexOf("GPano:")===-1){j.resolve(null)
}else{var e={full_width:parseInt(y.getXMPValue(f,"FullPanoWidthPixels")),full_height:parseInt(y.getXMPValue(f,"FullPanoHeightPixels")),cropped_width:parseInt(y.getXMPValue(f,"CroppedAreaImageWidthPixels")),cropped_height:parseInt(y.getXMPValue(f,"CroppedAreaImageHeightPixels")),cropped_x:parseInt(y.getXMPValue(f,"CroppedAreaLeftPixels")),cropped_y:parseInt(y.getXMPValue(f,"CroppedAreaTopPixels"))};
e.full_width&&e.full_height&&e.cropped_width&&e.cropped_height?j.resolve(e):(console.warn("PhotoSphereViewer: invalid XMP data"),j.resolve(null))
}}else{3===i.readyState&&h.loader.setProgress(g+=10)
}},i.onprogress=function(d){if(d.lengthComputable){var c=parseInt(d.loaded/d.total*100);
c>g&&(g=c,h.loader.setProgress(g))
}},i.onerror=function(){throw h.container.textContent="Cannot load image",new A("Cannot load image")
},i.open("GET",b,!0),i.send(null),j.promise
},R.prototype._loadTexture=function(e){var d=[];
if(Array.isArray(e)){if(6!==e.length){throw new A("Must provide exactly 6 image paths when using cubemap.")
}for(var f=0;
f<6;
f++){d[f]=e[R.CUBE_MAP[f]]
}e=d
}else{if("object"==typeof e){if(!R.CUBE_HASHMAP.every(function(a){return !!e[a]
})){throw new A("Must provide exactly left, front, right, back, top, bottom when using cubemap.")
}R.CUBE_HASHMAP.forEach(function(b,a){d[a]=e[b]
}),e=d
}}if(Array.isArray(e)){if(this.prop.isCubemap===!1){throw new A("The viewer was initialized with an equirectangular panorama, cannot switch to cubemap.")
}return this.config.fisheye&&console.warn("PhotoSphereViewer: fisheye effect with cubemap texture can generate distorsions."),this.config.cache_texture===R.DEFAULTS.cache_texture&&(this.config.cache_texture*=6),this.prop.isCubemap=!0,this._loadCubemapTexture(e)
}if(this.prop.isCubemap===!0){throw new A("The viewer was initialized with an cubemap, cannot switch to equirectangular panorama.")
}return this.prop.isCubemap=!1,this._loadEquirectangularTexture(e)
},R.prototype._loadEquirectangularTexture=function(b){if(this.config.cache_texture){var a=this.getPanoramaCache(b);
if(a){return this.prop.pano_data=a.pano_data,U.resolved(a.image)
}}return this._loadXMP(b).then(function(p){var o=U(),n=new V.ImageLoader,m=p?100:0;
n.setCrossOrigin("anonymous");
var l=function(d){m=100,this.loader.setProgress(m),this.trigger("panorama-load-progress",b,m),!p&&this.config.pano_data&&(p=y.clone(this.config.pano_data)),p||(p={full_width:d.width,full_height:d.height,cropped_width:d.width,cropped_height:d.height,cropped_x:0,cropped_y:0}),this.prop.pano_data=p;
var t,r=Math.min(p.full_width,R.SYSTEM.maxTextureWidth)/p.full_width;
if(1!==r||p.cropped_width!=p.full_width||p.cropped_height!=p.full_height){var q=y.clone(p);
q.full_width*=r,q.full_height*=r,q.cropped_width*=r,q.cropped_height*=r,q.cropped_x*=r,q.cropped_y*=r,d.width=q.cropped_width,d.height=q.cropped_height;
var h=document.createElement("canvas");
h.width=q.full_width,h.height=q.full_height;
var f=h.getContext("2d");
f.drawImage(d,q.cropped_x,q.cropped_y,q.cropped_width,q.cropped_height),t=new V.Texture(h)
}else{t=new V.Texture(d)
}t.needsUpdate=!0,t.minFilter=V.LinearFilter,t.generateMipmaps=!1,this.config.cache_texture&&this._putPanoramaCache({panorama:b,image:t,pano_data:p}),o.resolve(t)
},e=function(f){if(f.lengthComputable){var d=parseInt(f.loaded/f.total*100);
d>m&&(m=d,this.loader.setProgress(m),this.trigger("panorama-load-progress",b,m))
}},c=function(d){throw this.container.textContent="Cannot load image",o.reject(d),new A("Cannot load image")
};
return n.load(b,l.bind(this),e.bind(this),c.bind(this)),o.promise
}.bind(this))
},R.prototype._loadCubemapTexture=function(W){var x=U(),w=new V.ImageLoader,v=[0,0,0,0,0,0],u=[],t=0;
w.setCrossOrigin("anonymous");
for(var r=function(){u.forEach(function(c){c.needsUpdate=!0,c.minFilter=V.LinearFilter,c.generateMipmaps=!1
}),x.resolve(u)
},q=function(c,j){t++,v[c]=100,this.loader.setProgress(y.sum(v)/6),this.trigger("panorama-load-progress",W[c],v[c]);
var i=Math.min(j.width,R.SYSTEM.maxTextureWidth/2)/j.width;
if(1!==i){var h=document.createElement("canvas");
h.width=j.width*i,h.height=j.height*i;
var g=h.getContext("2d");
g.drawImage(j,0,0,h.width,h.height),u[c]=new V.Texture(h)
}else{u[c]=new V.Texture(j)
}this.config.cache_texture&&this._putPanoramaCache({panorama:W[c],image:u[c]}),6===t&&r()
},p=function(f,c){if(c.lengthComputable){var g=parseInt(c.loaded/c.total*100);
g>v[f]&&(v[f]=g,this.loader.setProgress(y.sum(v)/6),this.trigger("panorama-load-progress",W[f],v[f]))
}},e=function(d,c){throw this.container.textContent="Cannot load image",x.reject(c),new A("Cannot load image "+d)
},b=0;
b<6;
b++){if(this.config.cache_texture){var a=this.getPanoramaCache(W[b]);
if(a){t++,v[b]=100,u[b]=a.image;
continue
}}w.load(W[b],q.bind(this,b),p.bind(this,b),e.bind(this,b))
}return 6===t&&x.resolve(u),x.promise
},R.prototype._setTexture=function(d){if(this.scene||this._createScene(),this.prop.isCubemap){for(var c=0;
c<6;
c++){this.mesh.material.materials[c].map&&this.mesh.material.materials[c].map.dispose(),this.mesh.material.materials[c].map=d[c]
}}else{this.mesh.material.map&&this.mesh.material.map.dispose(),this.mesh.material.map=d
}this.trigger("panorama-loaded"),this.render()
},R.prototype._createScene=function(){this.raycaster=new V.Raycaster,this.renderer=R.SYSTEM.isWebGLSupported&&this.config.webgl?new V.WebGLRenderer:new V.CanvasRenderer,this.renderer.setSize(this.prop.size.width,this.prop.size.height),this.renderer.setPixelRatio(R.SYSTEM.pixelRatio);
var a=R.SPHERE_RADIUS;
this.prop.isCubemap&&(a*=Math.sqrt(3)),this.config.fisheye&&(a+=R.SPHERE_RADIUS),this.camera=new V.PerspectiveCamera(this.config.default_fov,this.prop.size.width/this.prop.size.height,1,a),this.camera.position.set(0,0,0),this.config.gyroscope&&y.checkTHREE("DeviceOrientationControls")&&(this.doControls=new V.DeviceOrientationControls(this.camera)),this.scene=new V.Scene,this.scene.add(this.camera),this.prop.isCubemap?this._createCubemap():this._createSphere(),this.canvas_container=document.createElement("div"),this.canvas_container.className="psv-canvas-container",this.renderer.domElement.className="psv-canvas",this.container.appendChild(this.canvas_container),this.canvas_container.appendChild(this.renderer.domElement)
},R.prototype._createSphere=function(){var a=new V.SphereGeometry(R.SPHERE_RADIUS,R.SPHERE_VERTICES,R.SPHERE_VERTICES,(-y.HalfPI)),d=new V.MeshBasicMaterial({side:V.DoubleSide,overdraw:R.SYSTEM.isWebGLSupported&&this.config.webgl?0:1});
this.mesh=new V.Mesh(a,d),this.mesh.scale.x=-1,this.scene.add(this.mesh)
},R.prototype._createCubemap=function(){for(var a=new V.BoxGeometry(2*R.SPHERE_RADIUS,2*R.SPHERE_RADIUS,2*R.SPHERE_RADIUS,R.CUBE_VERTICES,R.CUBE_VERTICES,R.CUBE_VERTICES),j=[],i=0;
i<6;
i++){j.push(new V.MeshBasicMaterial({overdraw:R.SYSTEM.isWebGLSupported&&this.config.webgl?0:1}))
}this.mesh=new V.Mesh(a,new V.MultiMaterial(j)),this.mesh.position.x-=R.SPHERE_RADIUS,this.mesh.position.y-=R.SPHERE_RADIUS,this.mesh.position.z-=R.SPHERE_RADIUS,this.mesh.applyMatrix((new V.Matrix4).makeScale(1,1,-1)),this.scene.add(this.mesh);
var h=new V.MeshBasicMaterial({side:V.BackSide,visible:!1}),e=new V.Mesh(a,h);
this.scene.add(e)
},R.prototype._transition=function(a,p){if(this.prop.isCubemap){throw new A("Transition is not available with cubemap.")
}var o=this,n=new V.SphereGeometry(0.9*R.SPHERE_RADIUS,R.SPHERE_VERTICES,R.SPHERE_VERTICES,(-y.HalfPI)),m=new V.MeshBasicMaterial({side:V.DoubleSide,overdraw:R.SYSTEM.isWebGLSupported&&this.config.webgl?0:1,map:a,transparent:!0,opacity:0}),l=new V.Mesh(n,m);
if(l.scale.x=-1,p){l.rotateY(p.longitude-this.prop.longitude);
var k=new V.Vector3(0,1,0).cross(this.camera.getWorldDirection()).normalize(),e=(new V.Quaternion).setFromAxisAngle(k,p.latitude-this.prop.latitude);
l.quaternion.multiplyQuaternions(e,l.quaternion)
}return this.scene.add(l),this.render(),y.animation({properties:{opacity:{start:0,end:1}},duration:o.config.transition.duration,easing:"outCubic",onTick:function(b){m.opacity=b.opacity,o.render()
}}).then(function(){o.mesh.material.map.dispose(),o.mesh.material.map=a,o.scene.remove(l),l.geometry.dispose(),l.geometry=null,l.material.dispose(),l.material=null,p?((o.config.latitude_range||o.config.longitude_range)&&(o.config.longitude_range=o.config.latitude_range=null,console.warn("PhotoSphereViewer: trying to perform transition with longitude_range and/or latitude_range, ranges cleared.")),o.rotate(p)):o.render()
})
},R.prototype._reverseAutorotate=function(){var e=this,d=-this.config.anim_speed,f=this.config.longitude_range;
this.config.longitude_range=null,y.animation({properties:{speed:{start:this.config.anim_speed,end:0}},duration:300,easing:"inSine",onTick:function(a){e.config.anim_speed=a.speed
}}).then(function(){return y.animation({properties:{speed:{start:0,end:d}},duration:300,easing:"outSine",onTick:function(a){e.config.anim_speed=a.speed
}})
}).then(function(){e.config.longitude_range=f,e.config.anim_speed=d
})
},R.prototype._putPanoramaCache=function(d){if(!this.config.cache_texture){throw new A("Cannot add panorama to cache, cache_texture is disabled")
}var c=this.getPanoramaCache(d.panorama);
c?(c.image=d.image,c.pano_data=d.pano_data):(this.prop.cache=this.prop.cache.slice(0,this.config.cache_texture-1),this.prop.cache.unshift(d)),this.trigger("panorama-cached",d.panorama)
},R.prototype._stopAll=function(){this.stopAutorotate(),this.stopAnimation(),this.stopGyroscopeControl()
},R.MOVE_THRESHOLD=4,R.DBLCLICK_DELAY=300,R.INERTIA_WINDOW=300,R.SPHERE_RADIUS=100,R.SPHERE_VERTICES=64,R.CUBE_VERTICES=8,R.CUBE_MAP=[0,2,4,5,3,1],R.CUBE_HASHMAP=["left","right","top","bottom","back","front"],R.KEYMAP={33:"PageUp",34:"PageDown",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",107:"+",109:"-"},R.SYSTEM={loaded:!1,pixelRatio:1,isWebGLSupported:!1,isCanvasSupported:!1,deviceOrientationSupported:null,maxTextureWidth:0,mouseWheelEvent:null,fullscreenEvent:null},R.ICONS={},R.DEFAULTS={panorama:null,container:null,caption:null,autoload:!0,usexmpdata:!0,pano_data:null,webgl:!0,min_fov:30,max_fov:90,default_fov:null,default_long:0,default_lat:0,longitude_range:null,latitude_range:null,move_speed:1,time_anim:2000,anim_speed:"2rpm",anim_lat:null,fisheye:!1,navbar:["autorotate","zoom","download","markers","caption","gyroscope","fullscreen"],tooltip:{offset:5,arrow_size:7,delay:100},lang:{autorotate:"Automatic rotation",zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",download:"Download",fullscreen:"Fullscreen",markers:"Markers",gyroscope:"Gyroscope"},mousewheel:!0,mousemove:!0,keyboard:!0,gyroscope:!1,move_inertia:!0,click_event_on_marker:!1,transition:{duration:1500,loader:!0},loading_img:null,loading_txt:"Loading...",size:null,cache_texture:5,templates:{},markers:[]},R.TEMPLATES={markersList:'<div class="psv-markers-list-container">   <h1 class="psv-markers-list-title">{{= it.config.lang.markers }}</h1>   <ul class="psv-markers-list">   {{~ it.markers: marker }}     <li data-psv-marker="{{= marker.id }}" class="psv-markers-list-item {{? marker.className }}{{= marker.className }}{{?}}">       {{? marker.image }}<img class="psv-markers-list-image" src="{{= marker.image }}"/>{{?}}       <p class="psv-markers-list-name">{{? marker.tooltip }}{{= marker.tooltip.content }}{{?? marker.html }}{{= marker.html }}{{??}}{{= marker.id }}{{?}}</p>     </li>   {{~}}   </ul> </div>'},R.prototype._bindEvents=function(){window.addEventListener("resize",this),this.config.mousemove&&(this.hud.container.style.cursor="move",this.hud.container.addEventListener("mousedown",this),this.hud.container.addEventListener("touchstart",this),window.addEventListener("mouseup",this),window.addEventListener("touchend",this),this.hud.container.addEventListener("mousemove",this),this.hud.container.addEventListener("touchmove",this)),R.SYSTEM.fullscreenEvent&&document.addEventListener(R.SYSTEM.fullscreenEvent,this),this.config.mousewheel&&this.hud.container.addEventListener(R.SYSTEM.mouseWheelEvent,this),this.on("_side-reached",function(b){this.isAutorotateEnabled()&&("left"!==b&&"right"!==b||this._reverseAutorotate())
})
},R.prototype.handleEvent=function(b){switch(b.type){case"resize":y.throttle(this._onResize(),50);
break;
case"keydown":this._onKeyDown(b);
break;
case"mousedown":this._onMouseDown(b);
break;
case"touchstart":this._onTouchStart(b);
break;
case"mouseup":this._onMouseUp(b);
break;
case"touchend":this._onTouchEnd(b);
break;
case"mousemove":this._onMouseMove(b);
break;
case"touchmove":this._onTouchMove(b);
break;
case R.SYSTEM.fullscreenEvent:this._fullscreenToggled();
break;
case R.SYSTEM.mouseWheelEvent:this._onMouseWheel(b)
}},R.prototype._onResize=function(){this.container.clientWidth==this.prop.size.width&&this.container.clientHeight==this.prop.size.height||(this.prop.size.width=parseInt(this.container.clientWidth),this.prop.size.height=parseInt(this.container.clientHeight),this.prop.aspect=this.prop.size.width/this.prop.size.height,this.renderer&&(this.renderer.setSize(this.prop.size.width,this.prop.size.height),this.composer&&this.composer.reset(new V.WebGLRenderTarget(this.prop.size.width,this.prop.size.height)),this.render()),this.trigger("size-updated",this.getSize()))
},R.prototype._onKeyDown=function(g){var e=0,j=0,i=0,h=g.key||R.KEYMAP[g.keyCode||g.which];
switch(h){case"ArrowUp":j=0.01;
break;
case"ArrowDown":j=-0.01;
break;
case"ArrowRight":e=0.01;
break;
case"ArrowLeft":e=-0.01;
break;
case"PageUp":case"+":i=1;
break;
case"PageDown":case"-":i=-1
}0!==i?this.zoom(this.prop.zoom_lvl+i):0===j&&0===e||this.rotate({longitude:this.prop.longitude+e*this.prop.move_speed*this.prop.hFov,latitude:this.prop.latitude+j*this.prop.move_speed*this.prop.vFov})
},R.prototype._onMouseDown=function(b){this._startMove(b)
},R.prototype._onMouseUp=function(b){this._stopMove(b)
},R.prototype._onMouseMove=function(b){0!==b.buttons&&(b.preventDefault(),this._move(b))
},R.prototype._onTouchStart=function(b){1===b.touches.length?this._startMove(b.touches[0]):2===b.touches.length&&this._startZoom(b)
},R.prototype._onTouchEnd=function(b){this._stopMove(b.changedTouches[0])
},R.prototype._onTouchMove=function(b){1===b.touches.length?(b.preventDefault(),this._move(b.touches[0])):2===b.touches.length&&(b.preventDefault(),this._zoom(b))
},R.prototype._startMove=function(b){this.isGyroscopeEnabled()||(this._stopAll(),this.prop.mouse_x=this.prop.start_mouse_x=parseInt(b.clientX),this.prop.mouse_y=this.prop.start_mouse_y=parseInt(b.clientY),this.prop.moving=!0,this.prop.zooming=!1,this.prop.mouse_history.length=0,this._logMouseMove(b))
},R.prototype._startZoom=function(d){var c=[{x:parseInt(d.touches[0].clientX),y:parseInt(d.touches[0].clientY)},{x:parseInt(d.touches[1].clientX),y:parseInt(d.touches[1].clientY)}];
this.prop.pinch_dist=Math.sqrt(Math.pow(c[0].x-c[1].x,2)+Math.pow(c[0].y-c[1].y,2)),this.prop.moving=!1,this.prop.zooming=!0
},R.prototype._stopMove=function(b){return this.isGyroscopeEnabled()?void this._click(b):(this.prop.moving&&(Math.abs(b.clientX-this.prop.start_mouse_x)<R.MOVE_THRESHOLD&&Math.abs(b.clientY-this.prop.start_mouse_y)<R.MOVE_THRESHOLD?(this._click(b),this.prop.moving=!1):this.config.move_inertia?(this._logMouseMove(b),this._stopMoveInertia(b)):this.prop.moving=!1),this.prop.mouse_history.length=0,void (this.prop.zooming=!1))
},R.prototype._stopMoveInertia=function(f){var e=this,h={x:f.clientX-this.prop.mouse_history[0][1],y:f.clientY-this.prop.mouse_history[0][2]},g=Math.sqrt(h.x*h.x+h.y*h.y);
this.prop.animation_promise=y.animation({properties:{clientX:{start:f.clientX,end:f.clientX+h.x},clientY:{start:f.clientY,end:f.clientY+h.y}},duration:g*R.INERTIA_WINDOW/100,easing:"outCirc",onTick:function(b){e._move(b,!1)
}}).ensure(function(){e.prop.moving=!1
})
},R.prototype._click=function(h){var e=this.container.getBoundingClientRect(),l={target:h.target,client_x:h.clientX,client_y:h.clientY,viewer_x:parseInt(h.clientX-e.left),viewer_y:parseInt(h.clientY-e.top)},k=this.viewerCoordsToVector3({x:l.viewer_x,y:l.viewer_y});
if(k){var j=this.vector3ToSphericalCoords(k);
if(l.longitude=j.longitude,l.latitude=j.latitude,!this.prop.isCubemap){var i=this.sphericalCoordsToTextureCoords({longitude:l.longitude,latitude:l.latitude});
l.texture_x=i.x,l.texture_y=i.y
}this.prop.dblclick_timeout?(Math.abs(this.prop.dblclick_data.client_x-l.client_x)<R.MOVE_THRESHOLD&&Math.abs(this.prop.dblclick_data.client_y-l.client_y)<R.MOVE_THRESHOLD&&this.trigger("dblclick",this.prop.dblclick_data),clearTimeout(this.prop.dblclick_timeout),this.prop.dblclick_timeout=null,this.prop.dblclick_data=null):(this.trigger("click",l),this.prop.dblclick_data=y.clone(l),this.prop.dblclick_timeout=setTimeout(function(){this.prop.dblclick_timeout=null,this.prop.dblclick_data=null
}.bind(this),R.DBLCLICK_DELAY))
}},R.prototype._move=function(f,e){if(this.prop.moving){var h=parseInt(f.clientX),g=parseInt(f.clientY);
this.rotate({longitude:this.prop.longitude-(h-this.prop.mouse_x)/this.prop.size.width*this.prop.move_speed*this.prop.hFov,latitude:this.prop.latitude+(g-this.prop.mouse_y)/this.prop.size.height*this.prop.move_speed*this.prop.vFov}),this.prop.mouse_x=h,this.prop.mouse_y=g,e!==!1&&this._logMouseMove(f)
}},R.prototype._zoom=function(f){if(this.prop.zooming){var e=[{x:parseInt(f.touches[0].clientX),y:parseInt(f.touches[0].clientY)},{x:parseInt(f.touches[1].clientX),y:parseInt(f.touches[1].clientY)}],h=Math.sqrt(Math.pow(e[0].x-e[1].x,2)+Math.pow(e[0].y-e[1].y,2)),g=80*(h-this.prop.pinch_dist)/this.prop.size.width;
this.zoom(this.prop.zoom_lvl+g),this.prop.pinch_dist=h
}},R.prototype._onMouseWheel=function(e){e.preventDefault(),e.stopPropagation();
var d=void 0!==e.deltaY?-e.deltaY:void 0!==e.wheelDelta?e.wheelDelta:-e.detail;
if(0!==d){var f=parseInt(d/Math.abs(d));
this.zoom(this.prop.zoom_lvl+f)
}},R.prototype._fullscreenToggled=function(){var b=this.isFullscreenEnabled();
this.config.keyboard&&(b?this.startKeyboardControl():this.stopKeyboardControl()),this.trigger("fullscreen-updated",b)
},R.prototype._logMouseMove=function(f){var e=Date.now();
this.prop.mouse_history.push([e,f.clientX,f.clientY]);
for(var h=null,g=0;
g<this.prop.mouse_history.length;
){this.prop.mouse_history[0][g]<e-R.INERTIA_WINDOW?this.prop.mouse_history.splice(g,1):h&&this.prop.mouse_history[0][g]-h>R.INERTIA_WINDOW/10?(this.prop.mouse_history.splice(0,g),g=0,h=this.prop.mouse_history[0][g]):(g++,h=this.prop.mouse_history[0][g])
}},R.prototype.load=function(){if(!this.config.panorama){throw new A("No value given for panorama.")
}return this.setPanorama(this.config.panorama,!1)
},R.prototype.getPosition=function(){return{longitude:this.prop.longitude,latitude:this.prop.latitude}
},R.prototype.getZoomLevel=function(){return this.prop.zoom_lvl
},R.prototype.getSize=function(){return{width:this.prop.size.width,height:this.prop.size.height}
},R.prototype.isAutorotateEnabled=function(){return !!this.prop.autorotate_reqid
},R.prototype.isGyroscopeEnabled=function(){return !!this.prop.orientation_reqid
},R.prototype.isFullscreenEnabled=function(){return y.isFullscreenEnabled(this.container)
},R.prototype.render=function(b){b!==!1&&(this.prop.direction=this.sphericalCoordsToVector3(this.prop),this.camera.position.set(0,0,0),this.camera.lookAt(this.prop.direction)),this.config.fisheye&&this.camera.position.copy(this.prop.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.aspect=this.prop.aspect,this.camera.fov=this.prop.vFov,this.camera.updateProjectionMatrix(),this.composer?this.composer.render():this.renderer.render(this.scene,this.camera),this.trigger("render")
},R.prototype.destroy=function(){this._stopAll(),this.stopKeyboardControl(),this.isFullscreenEnabled()&&y.exitFullscreen(),window.removeEventListener("resize",this),this.config.mousemove&&(this.hud.container.removeEventListener("mousedown",this),this.hud.container.removeEventListener("touchstart",this),window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this),this.hud.container.removeEventListener("mousemove",this),this.hud.container.removeEventListener("touchmove",this)),R.SYSTEM.fullscreenEvent&&document.removeEventListener(R.SYSTEM.fullscreenEvent,this),this.config.mousewheel&&this.hud.container.removeEventListener(R.SYSTEM.mouseWheelEvent,this),this.tooltip&&this.tooltip.destroy(),this.hud&&this.hud.destroy(),this.loader&&this.loader.destroy(),this.navbar&&this.navbar.destroy(),this.panel&&this.panel.destroy(),this.doControls&&this.doControls.disconnect(),this.scene&&y.cleanTHREEScene(this.scene),this.canvas_container&&this.container.removeChild(this.canvas_container),this.parent.removeChild(this.container),delete this.parent.photoSphereViewer,delete this.parent,delete this.container,delete this.loader,delete this.navbar,delete this.hud,delete this.panel,delete this.tooltip,delete this.canvas_container,delete this.renderer,delete this.composer,delete this.scene,delete this.camera,delete this.mesh,delete this.doControls,delete this.raycaster,delete this.passes,delete this.config,this.prop.cache.length=0
},R.prototype.setPanorama=function(f,e,h){if(null!==this.prop.loading_promise){throw new A("Loading already in progress")
}if("boolean"==typeof e&&(h=e,e=void 0),h&&this.prop.isCubemap){throw new A("Transition is not available with cubemap.")
}e&&(this.cleanPosition(e),this._stopAll()),this.config.panorama=f;
var g=this;
return h&&this.config.transition&&this.scene?(this.config.transition.loader&&this.loader.show(),this.prop.loading_promise=this._loadTexture(this.config.panorama).then(function(b){return g.loader.hide(),g._transition(b,e)
}).ensure(function(){g.loader.hide(),g.prop.loading_promise=null
}).rethrow()):(this.loader.show(),this.canvas_container&&(this.canvas_container.style.opacity=0),this.prop.loading_promise=this._loadTexture(this.config.panorama).then(function(b){g._setTexture(b),e&&g.rotate(e)
}).ensure(function(){g.loader.hide(),g.canvas_container.style.opacity=1,g.prop.loading_promise=null
}).rethrow()),this.prop.loading_promise
},R.prototype.startAutorotate=function(){this._stopAll();
var f=this,e=null,h=null;
!function g(a){a&&(h=null===e?0:a-e,e=a,f.rotate({longitude:f.prop.longitude+f.config.anim_speed*h/1000,latitude:f.prop.latitude-(f.prop.latitude-f.config.anim_lat)/200})),f.prop.autorotate_reqid=window.requestAnimationFrame(g)
}(null),this.trigger("autorotate",!0)
},R.prototype.stopAutorotate=function(){this.prop.start_timeout&&(window.clearTimeout(this.prop.start_timeout),this.prop.start_timeout=null),this.prop.autorotate_reqid&&(window.cancelAnimationFrame(this.prop.autorotate_reqid),this.prop.autorotate_reqid=null,this.trigger("autorotate",!1))
},R.prototype.toggleAutorotate=function(){this.isAutorotateEnabled()?this.stopAutorotate():this.startAutorotate()
},R.prototype.startGyroscopeControl=function(){if(!this.doControls||!this.doControls.enabled||!this.doControls.deviceOrientation){return void console.warn("PhotoSphereViewer: gyroscope disabled")
}this._stopAll();
var d=this;
!function c(){d.doControls.update(),d.prop.direction=d.camera.getWorldDirection();
var a=d.vector3ToSphericalCoords(d.prop.direction);
d.prop.longitude=a.longitude,d.prop.latitude=a.latitude,d.render(!1),d.prop.orientation_reqid=window.requestAnimationFrame(c)
}(),this.trigger("gyroscope-updated",!0)
},R.prototype.stopGyroscopeControl=function(){this.prop.orientation_reqid&&(window.cancelAnimationFrame(this.prop.orientation_reqid),this.prop.orientation_reqid=null,this.trigger("gyroscope-updated",!1),this.render())
},R.prototype.toggleGyroscopeControl=function(){this.isGyroscopeEnabled()?this.stopGyroscopeControl():this.startGyroscopeControl()
},R.prototype.rotate=function(d,c){this.cleanPosition(d),this.applyRanges(d).forEach(this.trigger.bind(this,"_side-reached")),this.prop.longitude=d.longitude,this.prop.latitude=d.latitude,c!==!1&&this.renderer&&(this.render(),this.trigger("position-updated",this.getPosition()))
},R.prototype.animate=function(b,h){if(this._stopAll(),!h){return this.rotate(b),U.resolved()
}if(this.cleanPosition(b),this.applyRanges(b).forEach(this.trigger.bind(this,"_side-reached")),!h&&"number"!=typeof h){h=h?y.parseSpeed(h):this.config.anim_speed;
var g=Math.acos(Math.cos(this.prop.latitude)*Math.cos(b.latitude)*Math.cos(this.prop.longitude-b.longitude)+Math.sin(this.prop.latitude)*Math.sin(b.latitude));
h=g/h*1000
}var f=y.getShortestArc(this.prop.longitude,b.longitude);
return this.prop.animation_promise=y.animation({properties:{longitude:{start:this.prop.longitude,end:this.prop.longitude+f},latitude:{start:this.prop.latitude,end:b.latitude}},duration:h,easing:"inOutSine",onTick:this.rotate.bind(this)}),this.prop.animation_promise
},R.prototype.stopAnimation=function(){this.prop.animation_promise&&(this.prop.animation_promise.cancel(),this.prop.animation_promise=null)
},R.prototype.zoom=function(a,d){this.prop.zoom_lvl=y.bound(Math.round(a),0,100),this.prop.vFov=this.config.max_fov+this.prop.zoom_lvl/100*(this.config.min_fov-this.config.max_fov),this.prop.hFov=V.Math.radToDeg(2*Math.atan(Math.tan(V.Math.degToRad(this.prop.vFov)/2)*this.prop.aspect)),d!==!1&&this.renderer&&(this.render(),this.trigger("zoom-updated",this.getZoomLevel()))
},R.prototype.zoomIn=function(){this.prop.zoom_lvl<100&&this.zoom(this.prop.zoom_lvl+1)
},R.prototype.zoomOut=function(){this.prop.zoom_lvl>0&&this.zoom(this.prop.zoom_lvl-1)
},R.prototype.toggleFullscreen=function(){this.isFullscreenEnabled()?y.exitFullscreen():y.requestFullscreen(this.container)
},R.prototype.startKeyboardControl=function(){window.addEventListener("keydown",this)
},R.prototype.stopKeyboardControl=function(){window.removeEventListener("keydown",this)
},R.prototype.preloadPanorama=function(b){if(!this.config.cache_texture){throw new A("Cannot preload panorama, cache_texture is disabled")
}return this._loadTexture(b)
},R.prototype.clearPanoramaCache=function(e){if(!this.config.cache_texture){throw new A("Cannot clear cache, cache_texture is disabled")
}if(e){for(var d=0,f=this.prop.cache.length;
d<f;
d++){if(this.prop.cache[d].panorama===e){this.prop.cache.splice(d,1);
break
}}}else{this.prop.cache.length=0
}},R.prototype.getPanoramaCache=function(b){if(!this.config.cache_texture){throw new A("Cannot query cache, cache_texture is disabled")
}return this.prop.cache.filter(function(a){return a.panorama===b
}).shift()
},R._loadSystem=function(){var b=R.SYSTEM;
b.loaded=!0,b.pixelRatio=window.devicePixelRatio||1,b.isWebGLSupported=y.isWebGLSupported(),b.isCanvasSupported=y.isCanvasSupported(),b.maxTextureWidth=b.isWebGLSupported?y.getMaxTextureWidth():4096,b.mouseWheelEvent=y.mouseWheelEvent(),b.fullscreenEvent=y.fullscreenEvent(),b.deviceOrientationSupported=U(),"DeviceOrientationEvent" in window?window.addEventListener("deviceorientation",R._deviceOrientationListener,!1):b.deviceOrientationSupported.reject()
},R._deviceOrientationListener=function(b){null===b.alpha||isNaN(b.alpha)?R.SYSTEM.deviceOrientationSupported.reject():R.SYSTEM.deviceOrientationSupported.resolve(),window.removeEventListener("deviceorientation",R._deviceOrientationListener)
},R.prototype._setViewerSize=function(b){["width","height"].forEach(function(a){b[a]&&(/^[0-9.]+$/.test(b[a])&&(b[a]+="px"),this.parent.style[a]=b[a])
},this)
},R.prototype.textureCoordsToSphericalCoords=function(e){if(this.prop.isCubemap){throw new A("Unable to use texture coords with cubemap.")
}var d=(e.x+this.prop.pano_data.cropped_x)/this.prop.pano_data.full_width*y.TwoPI,f=(e.y+this.prop.pano_data.cropped_y)/this.prop.pano_data.full_height*Math.PI;
return{longitude:d>=Math.PI?d-Math.PI:d+Math.PI,latitude:y.HalfPI-f}
},R.prototype.sphericalCoordsToTextureCoords=function(e){if(this.prop.isCubemap){throw new A("Unable to use texture coords with cubemap.")
}var d=e.longitude/y.TwoPI*this.prop.pano_data.full_width,f=e.latitude/Math.PI*this.prop.pano_data.full_height;
return{x:parseInt(e.longitude<Math.PI?d+this.prop.pano_data.full_width/2:d-this.prop.pano_data.full_width/2)-this.prop.pano_data.cropped_x,y:parseInt(this.prop.pano_data.full_height/2-f)-this.prop.pano_data.cropped_y}
},R.prototype.sphericalCoordsToVector3=function(a){return new V.Vector3(R.SPHERE_RADIUS*-Math.cos(a.latitude)*Math.sin(a.longitude),R.SPHERE_RADIUS*Math.sin(a.latitude),R.SPHERE_RADIUS*Math.cos(a.latitude)*Math.cos(a.longitude))
},R.prototype.vector3ToSphericalCoords=function(e){var d=Math.acos(e.y/Math.sqrt(e.x*e.x+e.y*e.y+e.z*e.z)),f=Math.atan2(e.x,e.z);
return{longitude:f<0?-f:y.TwoPI-f,latitude:y.HalfPI-d}
},R.prototype.viewerCoordsToVector3=function(a){var f=new V.Vector2(2*a.x/this.prop.size.width-1,-2*a.y/this.prop.size.height+1);
this.raycaster.setFromCamera(f,this.camera);
var e=this.raycaster.intersectObjects(this.scene.children);
return 1===e.length?e[0].point:null
},R.prototype.vector3ToViewerCoords=function(b){return b=b.clone(),b.project(this.camera),{x:parseInt((b.x+1)/2*this.prop.size.width),y:parseInt((1-b.y)/2*this.prop.size.height)}
},R.prototype.cleanPosition=function(b){b.hasOwnProperty("x")&&b.hasOwnProperty("y")&&y.deepmerge(b,this.textureCoordsToSphericalCoords(b)),b.longitude=y.parseAngle(b.longitude),b.latitude=y.bound(y.parseAngle(b.latitude,-Math.PI),-y.HalfPI,y.HalfPI)
},R.prototype.applyRanges=function(a){var h,g,f=[];
return this.config.longitude_range&&(h=y.clone(this.config.longitude_range),g=V.Math.degToRad(this.prop.hFov)/2,h[0]=y.parseAngle(h[0]+g),h[1]=y.parseAngle(h[1]-g),h[0]>h[1]?a.longitude>h[1]&&a.longitude<h[0]&&(a.longitude>h[0]/2+h[1]/2?(a.longitude=h[0],f.push("left")):(a.longitude=h[1],f.push("right"))):a.longitude<h[0]?(a.longitude=h[0],f.push("left")):a.longitude>h[1]&&(a.longitude=h[1],f.push("right"))),this.config.latitude_range&&(h=y.clone(this.config.latitude_range),g=V.Math.degToRad(this.prop.vFov)/2,h[0]=y.parseAngle(Math.min(h[0]+g,h[1]),-Math.PI),h[1]=y.parseAngle(Math.max(h[1]-g,h[0]),-Math.PI),a.latitude<h[0]?(a.latitude=h[0],f.push("bottom")):a.latitude>h[1]&&(a.latitude=h[1],f.push("top"))),f
},Q.className=null,Q.publicMethods=[],Q.prototype.create=function(){this.container=document.createElement("div"),this.constructor.className&&(this.container.className=this.constructor.className),this.parent.container.appendChild(this.container)
},Q.prototype.destroy=function(){this.parent.container.removeChild(this.container),this.constructor.publicMethods&&this.constructor.publicMethods.forEach(function(b){delete this.psv[b]
},this),delete this.container,delete this.psv,delete this.parent
},Q.prototype.hide=function(){this.container.style.display="none"
},Q.prototype.show=function(){this.container.style.display=""
},P.prototype=Object.create(Q.prototype),P.prototype.constructor=P,P.className="psv-hud",P.publicMethods=["addMarker","removeMarker","updateMarker","clearMarkers","getMarker","getCurrentMarker","gotoMarker","hideMarker","showMarker","toggleMarker","toggleMarkersList","showMarkersList","hideMarkersList"],P.prototype.create=function(){Q.prototype.create.call(this),this.svgContainer=document.createElementNS(y.svgNS,"svg"),this.svgContainer.setAttribute("class","psv-hud-svg-container"),this.container.appendChild(this.svgContainer),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0),this.psv.on("click",this),this.psv.on("dblclick",this),this.psv.on("render",this),this.psv.on("open-panel",this),this.psv.on("close-panel",this)
},P.prototype.destroy=function(){this.clearMarkers(!1),this.container.removeEventListener("mouseenter",this),this.container.removeEventListener("mouseleave",this),this.container.removeEventListener("mousemove",this),this.psv.off("click",this),this.psv.off("dblclick",this),this.psv.off("render",this),this.psv.off("open-panel",this),this.psv.off("close-panel",this),delete this.svgContainer,Q.prototype.destroy.call(this)
},P.prototype.handleEvent=function(b){switch(b.type){case"mouseenter":this._onMouseEnter(b);
break;
case"mouseleave":this._onMouseLeave(b);
break;
case"mousemove":this._onMouseMove(b);
break;
case"click":this._onClick(b.args[0],b,!1);
break;
case"dblclick":this._onClick(b.args[0],b,!0);
break;
case"render":this.renderMarkers();
break;
case"open-panel":this._onPanelOpened();
break;
case"close-panel":this._onPanelClosed()
}},P.prototype.addMarker=function(e,d){if(!e.id){throw new A("missing marker id")
}if(this.markers[e.id]){throw new A('marker "'+e.id+'" already exists')
}var f=new z(e,this.psv);
return f.isNormal()?this.container.appendChild(f.$el):this.svgContainer.appendChild(f.$el),this.markers[f.id]=f,d!==!1&&this.renderMarkers(),f
},P.prototype.getMarker=function(d){var c="object"==typeof d?d.id:d;
if(!this.markers[c]){throw new A('cannot find marker "'+c+'"')
}return this.markers[c]
},P.prototype.getCurrentMarker=function(){return this.currentMarker
},P.prototype.updateMarker=function(e,d){var f=this.getMarker(e);
return f.update(e),d!==!1&&this.renderMarkers(),f
},P.prototype.removeMarker=function(d,c){d=this.getMarker(d),d.isNormal()?this.container.removeChild(d.$el):this.svgContainer.removeChild(d.$el),this.hoveringMarker==d&&this.psv.tooltip.hideTooltip(),d.destroy(),delete this.markers[d.id],c!==!1&&this.renderMarkers()
},P.prototype.clearMarkers=function(b){Object.keys(this.markers).forEach(function(c){this.removeMarker(c,!1)
},this),b!==!1&&this.renderMarkers()
},P.prototype.gotoMarker=function(d,c){return d=this.getMarker(d),this.psv.animate(d,c)
},P.prototype.hideMarker=function(b){this.getMarker(b).visible=!1,this.renderMarkers()
},P.prototype.showMarker=function(b){this.getMarker(b).visible=!0,this.renderMarkers()
},P.prototype.toggleMarker=function(b){this.getMarker(b).visible^=!0,this.renderMarkers()
},P.prototype.toggleMarkersList=function(){this.prop.panelOpened?this.hideMarkersList():this.showMarkersList()
},P.prototype.showMarkersList=function(){var e=[];
for(var d in this.markers){e.push(this.markers[d])
}var f=this.psv.config.templates.markersList({markers:this.psv.change("render-markers-list",e),config:this.psv.config});
this.prop.panelOpening=!0,this.psv.panel.showPanel(f,!0),this.psv.panel.container.querySelector(".psv-markers-list").addEventListener("click",this._onClickItem.bind(this))
},P.prototype.hideMarkersList=function(){this.prop.panelOpened&&this.psv.panel.hidePanel()
},P.prototype.renderMarkers=function(){var a=this.psv.isGyroscopeEnabled()?V.Math.radToDeg(this.psv.camera.rotation.z):0;
for(var n in this.markers){var m=this.markers[n],l=m.visible;
if(l&&m.isPolygon()){var k=this._getPolygonPositions(m);
if(l=k.length>2){m.position2D=this._getPolygonDimensions(m,k);
var j="";
k.forEach(function(b){j+=b.x+","+b.y+" "
}),m.$el.setAttributeNS(null,"points",j)
}}else{if(l){var i=this._getMarkerPosition(m);
l=this._isMarkerVisible(m,i),l&&(m.position2D=i,m.$el instanceof SVGElement?m.$el.setAttribute("transform","translate("+i.x+" "+i.y+")"+(!m.lockRotation&&a?" rotate("+a+" "+m.anchor.left*m.width+" "+m.anchor.top*m.height+")":"")):(m.$el.style.transform="translate3D("+i.x+"px, "+i.y+"px, 0px)"+(!m.lockRotation&&a?" rotateZ("+a+"deg)":""),m.$el.style.transformOrigin=100*m.anchor.left+"% "+100*m.anchor.top+"%"))
}}y.toggleClass(m.$el,"psv-marker--visible",l)
}},P.prototype._isMarkerVisible=function(d,c){return d.position3D.dot(this.psv.prop.direction)>0&&c.x+d.width>=0&&c.x-d.width<=this.psv.prop.size.width&&c.y+d.height>=0&&c.y-d.height<=this.psv.prop.size.height
},P.prototype._getMarkerPosition=function(e){if(e._dynamicSize){y.toggleClass(e.$el,"psv-marker--transparent",!0);
var d=e.$el.getBoundingClientRect();
y.toggleClass(e.$el,"psv-marker--transparent",!1),e.width=d.right-d.left,e.height=d.bottom-d.top
}var f=this.psv.vector3ToViewerCoords(e.position3D);
return f.x-=e.width*e.anchor.left,f.y-=e.height*e.anchor.top,f
},P.prototype._getPolygonPositions=function(f){var e=f.positions3D.length,h=f.positions3D.map(function(b){return{vector:b,visible:b.dot(this.psv.prop.direction)>0}
},this),g=[];
return h.forEach(function(b,d){if(!b.visible){var c=[0===d?h[e-1]:h[d-1],d===e-1?h[0]:h[d+1]];
c.forEach(function(a){a.visible&&g.push({visible:a,invisible:b,index:d})
})
}}),g.reverse().forEach(function(b){h.splice(b.index,0,{vector:this._getPolygonIntermediaryPoint(b.visible.vector,b.invisible.vector),visible:!0})
},this),h.filter(function(b){return b.visible
}).map(function(b){return this.psv.vector3ToViewerCoords(b.vector)
},this)
},P.prototype._getPolygonIntermediaryPoint=function(a,n){var m=this.psv.prop.direction.clone().normalize(),l=(new V.Vector3).crossVectors(a,n).normalize(),k=(new V.Vector3).crossVectors(l,a).normalize(),j=(new V.Vector3).addVectors(a.clone().multiplyScalar(-m.dot(k)),k.clone().multiplyScalar(m.dot(a))).normalize(),e=(new V.Vector3).crossVectors(j,m);
return j.applyAxisAngle(e,0.01).multiplyScalar(R.SPHERE_RADIUS)
},P.prototype._getPolygonDimensions=function(h,g){var l=+(1/0),k=+(1/0),j=-(1/0),i=-(1/0);
return g.forEach(function(b){l=Math.min(l,b.x),k=Math.min(k,b.y),j=Math.max(j,b.x),i=Math.max(i,b.y)
}),h.width=j-l,h.height=i-k,{x:l,y:k}
},P.prototype._onMouseEnter=function(d){var c;
d.target&&(c=d.target.psvMarker)&&!c.isPolygon()&&(this.hoveringMarker=c,this.psv.trigger("over-marker",c),c.tooltip&&this.psv.tooltip.showTooltip({content:c.tooltip.content,position:c.tooltip.position,left:c.position2D.x,top:c.position2D.y,box:{width:c.width,height:c.height}}))
},P.prototype._onMouseLeave=function(d){var c;
if(d.target&&(c=d.target.psvMarker)){if(c.isPolygon()&&d.relatedTarget&&y.hasParent(d.relatedTarget,this.psv.tooltip.container)){return
}this.psv.trigger("leave-marker",c),this.hoveringMarker=null,this.psv.tooltip.hideTooltip()
}},P.prototype._onMouseMove=function(e){if(!this.psv.prop.moving){var d;
if(e.target&&(d=e.target.psvMarker)&&d.isPolygon()||e.target&&y.hasParent(e.target,this.psv.tooltip.container)&&(d=this.hoveringMarker)){this.hoveringMarker||(this.psv.trigger("over-marker",d),this.hoveringMarker=d);
var f=this.psv.container.getBoundingClientRect();
d.tooltip&&this.psv.tooltip.showTooltip({content:d.tooltip.content,position:d.tooltip.position,top:e.clientY-f.top-this.psv.config.tooltip.arrow_size/2,left:e.clientX-f.left-this.psv.config.tooltip.arrow_size,box:{width:2*this.psv.config.tooltip.arrow_size,height:2*this.psv.config.tooltip.arrow_size}})
}else{this.hoveringMarker&&this.hoveringMarker.isPolygon()&&(this.psv.trigger("leave-marker",d),this.hoveringMarker=null,this.psv.tooltip.hideTooltip())
}}},P.prototype._onClick=function(f,e,h){var g;
f.target&&(g=y.getClosest(f.target,".psv-marker"))&&g.psvMarker?(this.currentMarker=g.psvMarker,this.psv.trigger("select-marker",this.currentMarker,h),this.psv.config.click_event_on_marker?f.marker=g.psvMarker:e.stopPropagation()):this.currentMarker&&(this.psv.trigger("unselect-marker",this.currentMarker),this.currentMarker=null),g&&g.psvMarker&&g.psvMarker.content?this.psv.panel.showPanel(g.psvMarker.content):this.psv.panel.prop.opened&&(e.stopPropagation(),this.psv.panel.hidePanel())
},P.prototype._onClickItem=function(d){var c;
d.target&&(c=y.getClosest(d.target,"li"))&&c.dataset.psvMarker&&(this.gotoMarker(c.dataset.psvMarker,1000),this.psv.panel.hidePanel())
},P.prototype._onPanelOpened=function(){this.prop.panelOpening?(this.prop.panelOpening=!1,this.prop.panelOpened=!0):this.prop.panelOpened=!1,this.prop.markersButton&&this.prop.markersButton.toggleActive(this.prop.panelOpened)
},P.prototype._onPanelClosed=function(){this.prop.panelOpened=!1,this.prop.panelOpening=!1,this.prop.markersButton&&this.prop.markersButton.toggleActive(!1)
},O.prototype=Object.create(Q.prototype),O.prototype.constructor=O,O.className="psv-loader-container",O.prototype.create=function(){Q.prototype.create.call(this),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.canvas=document.createElement("canvas"),this.canvas.className="psv-loader-canvas",this.canvas.width=this.loader.clientWidth,this.canvas.height=this.loader.clientWidth,this.loader.appendChild(this.canvas),this.tickness=(this.loader.offsetWidth-this.loader.clientWidth)/2;
var d;
if(this.psv.config.loading_img?(d=document.createElement("img"),d.className="psv-loader-image",d.src=this.psv.config.loading_img):this.psv.config.loading_txt&&(d=document.createElement("div"),d.className="psv-loader-text",d.innerHTML=this.psv.config.loading_txt),d){var c=Math.round(Math.sqrt(2*Math.pow(this.canvas.width/2-this.tickness/2,2)));
d.style.maxWidth=c+"px",d.style.maxHeight=c+"px",this.loader.appendChild(d)
}},O.prototype.destroy=function(){delete this.loader,delete this.canvas,Q.prototype.destroy.call(this)
},O.prototype.setProgress=function(d){var c=this.canvas.getContext("2d");
c.clearRect(0,0,this.canvas.width,this.canvas.height),c.lineWidth=this.tickness,c.strokeStyle=y.getStyle(this.loader,"color"),c.beginPath(),c.arc(this.canvas.width/2,this.canvas.height/2,this.canvas.width/2-this.tickness/2,-Math.PI/2,d/100*2*Math.PI-Math.PI/2),c.stroke()
},N.prototype=Object.create(Q.prototype),N.prototype.constructor=N,N.className="psv-navbar psv-navbar--open",N.publicMethods=["showNavbar","hideNavbar","toggleNavbar","getNavbarButton"],N.prototype.create=function(){Q.prototype.create.call(this),this.config.forEach(function(d){if("object"==typeof d){this.items.push(new G(this,d))
}else{switch(d){case H.id:this.items.push(new H(this));
break;
case B.id:this.items.push(new B(this));
break;
case F.id:this.items.push(new F(this));
break;
case C.id:this.items.push(new C(this));
break;
case E.id:this.items.push(new E(this));
break;
case D.id:this.psv.config.gyroscope&&this.items.push(new D(this));
break;
case"caption":this.items.push(new M(this,this.psv.config.caption));
break;
case"spacer":d="spacer-5";
default:var c=d.match(/^spacer\-([0-9]+)$/);
if(null===c){throw new A("Unknown button "+d)
}this.items.push(new L(this,c[1]))
}}},this)
},N.prototype.destroy=function(){this.items.forEach(function(b){b.destroy()
}),delete this.items,delete this.config,Q.prototype.destroy.call(this)
},N.prototype.getNavbarButton=function(d){var c=null;
return this.items.some(function(a){if(a.id===d){return c=a,!0
}}),c||console.warn('PhotoSphereViewer: button "'+d+'" not found in the navbar.'),c
},N.prototype.showNavbar=function(){this.toggleNavbar(!0)
},N.prototype.hideNavbar=function(){this.toggleNavbar(!1)
},N.prototype.toggleNavbar=function(b){y.toggleClass(this.container,"psv-navbar--open",b)
},M.prototype=Object.create(Q.prototype),M.prototype.constructor=M,M.className="psv-caption",M.publicMethods=["setCaption"],M.prototype.setCaption=function(b){b?this.container.innerHTML=b:this.container.innerHTML=""
},L.prototype=Object.create(Q.prototype),L.prototype.constructor=L,L.className="psv-spacer",K.prototype=Object.create(Q.prototype),K.prototype.constructor=K,K.className="psv-panel",K.publicMethods=["showPanel","hidePanel"],K.prototype.create=function(){Q.prototype.create.call(this),this.container.innerHTML='<div class="psv-panel-resizer"></div><div class="psv-panel-close-button"></div><div class="psv-panel-content"></div>',this.content=this.container.querySelector(".psv-panel-content");
var d=this.container.querySelector(".psv-panel-close-button");
d.addEventListener("click",this.hidePanel.bind(this)),this.psv.config.mousewheel&&this.container.addEventListener(R.SYSTEM.mouseWheelEvent,function(b){b.stopPropagation()
});
var c=this.container.querySelector(".psv-panel-resizer");
c.addEventListener("mousedown",this),c.addEventListener("touchstart",this),this.psv.container.addEventListener("mouseup",this),this.psv.container.addEventListener("touchend",this),this.psv.container.addEventListener("mousemove",this),this.psv.container.addEventListener("touchmove",this)
},K.prototype.destroy=function(){this.psv.container.removeEventListener("mousemove",this),this.psv.container.removeEventListener("touchmove",this),this.psv.container.removeEventListener("mouseup",this),this.psv.container.removeEventListener("touchend",this),delete this.prop,delete this.content,Q.prototype.destroy.call(this)
},K.prototype.handleEvent=function(b){switch(b.type){case"mousedown":this._onMouseDown(b);
break;
case"touchstart":this._onTouchStart(b);
break;
case"mousemove":this._onMouseMove(b);
break;
case"touchmove":this._onTouchMove(b);
break;
case"mouseup":this._onMouseUp(b);
break;
case"touchend":this._onMouseUp(b)
}},K.prototype.showPanel=function(d,c){this.content.innerHTML=d,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),y.toggleClass(this.content,"psv-panel-content--no-margin",!!c),this.prop.opened=!0,this.psv.trigger("open-panel")
},K.prototype.hidePanel=function(){this.content.innerHTML=null,this.prop.opened=!1,this.container.classList.remove("psv-panel--open"),this.psv.trigger("close-panel")
},K.prototype._onMouseDown=function(b){b.stopPropagation(),this._startResize(b)
},K.prototype._onTouchStart=function(b){b.stopPropagation(),this._startResize(b.changedTouches[0])
},K.prototype._onMouseUp=function(b){this.prop.mousedown&&(b.stopPropagation(),this.prop.mousedown=!1,this.content.classList.remove("psv-panel-content--no-interaction"))
},K.prototype._onMouseMove=function(b){this.prop.mousedown&&(b.stopPropagation(),this._resize(b))
},K.prototype._onTouchMove=function(b){this.prop.mousedown&&(b.stopPropagation(),this._resize(b.touches[0]))
},K.prototype._startResize=function(b){this.prop.mouse_x=parseInt(b.clientX),this.prop.mouse_y=parseInt(b.clientY),this.prop.mousedown=!0,this.content.classList.add("psv-panel-content--no-interaction")
},K.prototype._resize=function(e){var d=parseInt(e.clientX),f=parseInt(e.clientY);
this.container.style.width=this.container.offsetWidth-(d-this.prop.mouse_x)+"px",this.prop.mouse_x=d,this.prop.mouse_y=f
},J.prototype=Object.create(Q.prototype),J.prototype.constructor=J,J.className="psv-tooltip",J.publicMethods=["showTooltip","hideTooltip","isTooltipVisible"],J.leftMap={0:"left",0.5:"center",1:"right"},J.topMap={0:"top",0.5:"center",1:"bottom"},J.prototype.create=function(){Q.prototype.create.call(this),this.container.innerHTML='<div class="psv-tooltip-arrow"></div><div class="psv-tooltip-content"></div>',this.container.style.top="-1000px",this.container.style.left="-1000px",this.content=this.container.querySelector(".psv-tooltip-content"),this.arrow=this.container.querySelector(".psv-tooltip-arrow"),this.psv.on("render",this)
},J.prototype.destroy=function(){this.psv.off("render",this),delete this.config,delete this.prop,Q.prototype.destroy.call(this)
},J.prototype.handleEvent=function(b){switch(b.type){case"render":this.hideTooltip()
}},J.prototype.isTooltipVisible=function(){return this.container.classList.contains("psv-tooltip--visible")
},J.prototype.showTooltip=function(W){this.prop.timeout&&(window.clearTimeout(this.prop.timeout),this.prop.timeout=null);
var x=this.isTooltipVisible(),w=this.container,v=this.content,u=this.arrow;
if(W.position||(W.position=["top","center"]),W.box||(W.box={width:0,height:0}),"string"==typeof W.position){var t=y.parsePosition(W.position);
if(!(t.left in J.leftMap&&t.top in J.topMap)){throw new A('unable to parse tooltip position "'+tooltip.position+'"')
}W.position=[J.topMap[t.top],J.leftMap[t.left]]
}if("center"==W.position[0]&&"center"==W.position[1]){throw new A('unable to parse tooltip position "center center"')
}if(x){for(var r=w.classList.length-1;
r>=0;
r--){var q=w.classList.item(r);
"psv-tooltip"!=q&&"psv-tooltip--visible"!=q&&w.classList.remove(q)
}}else{w.className="psv-tooltip"
}W.className&&y.addClasses(w,W.className),v.innerHTML=W.content,w.style.top="0px",w.style.left="0px";
var p=w.getBoundingClientRect(),o={posClass:W.position.slice(),width:p.right-p.left,height:p.bottom-p.top,top:0,left:0,arrow_top:0,arrow_left:0};
this._computeTooltipPosition(o,W);
var n=!1;
if(o.top<this.config.offset?(o.posClass[0]="bottom",n=!0):o.top+o.height>this.psv.prop.size.height-this.config.offset&&(o.posClass[0]="top",n=!0),o.left<this.config.offset?(o.posClass[1]="right",n=!0):o.left+o.width>this.psv.prop.size.width-this.config.offset&&(o.posClass[1]="left",n=!0),n&&this._computeTooltipPosition(o,W),w.style.top=o.top+"px",w.style.left=o.left+"px",u.style.top=o.arrow_top+"px",u.style.left=o.arrow_left+"px",w.classList.add("psv-tooltip--"+o.posClass.join("-")),!x){var m=this;
this.prop.timeout=window.setTimeout(function(){w.classList.add("psv-tooltip--visible"),m.prop.timeout=null,m.psv.trigger("show-tooltip")
},this.config.delay)
}},J.prototype.hideTooltip=function(){if(this.prop.timeout&&(window.clearTimeout(this.prop.timeout),this.prop.timeout=null),this.isTooltipVisible()){this.container.classList.remove("psv-tooltip--visible");
var b=this;
this.prop.timeout=window.setTimeout(function(){b.content.innerHTML=null,b.container.style.top="-1000px",b.container.style.left="-1000px",b.prop.timeout=null
},this.config.delay),this.psv.trigger("hide-tooltip")
}},J.prototype._computeTooltipPosition=function(e,d){var f=!1;
switch(e.posClass[0]){case"bottom":e.top=d.top+d.box.height+this.config.offset+this.config.arrow_size,e.arrow_top=2*-this.config.arrow_size,f=!0;
break;
case"center":e.top=d.top+d.box.height/2-e.height/2,e.arrow_top=e.height/2-this.config.arrow_size;
break;
case"top":e.top=d.top-e.height-this.config.offset-this.config.arrow_size,e.arrow_top=e.height,f=!0
}switch(e.posClass[1]){case"right":f?(e.left=d.left+d.box.width/2-this.config.offset-this.config.arrow_size,e.arrow_left=this.config.offset):(e.left=d.left+d.box.width+this.config.offset+this.config.arrow_size,e.arrow_left=2*-this.config.arrow_size);
break;
case"center":e.left=d.left+d.box.width/2-e.width/2,e.arrow_left=e.width/2-this.config.arrow_size;
break;
case"left":f?(e.left=d.left-e.width+d.box.width/2+this.config.offset+this.config.arrow_size,e.arrow_left=e.width-this.config.offset-2*this.config.arrow_size):(e.left=d.left-e.width-this.config.offset-this.config.arrow_size,e.arrow_left=e.width)
}},I.prototype=Object.create(Q.prototype),I.prototype.constructor=I,I.id=null,I.icon=null,I.iconActive=null,I.prototype.create=function(){Q.prototype.create.call(this),this.constructor.icon&&this._setIcon(this.constructor.icon),this.id&&this.psv.config.lang[this.id]&&(this.container.title=this.psv.config.lang[this.id]),this.container.addEventListener("click",function(b){this.enabled&&this._onClick(),b.stopPropagation()
}.bind(this))
},I.prototype.destroy=function(){Q.prototype.destroy.call(this)
},I.prototype.toggleActive=function(b){y.toggleClass(this.container,"psv-button--active",b),this.constructor.iconActive&&this._setIcon(b?this.constructor.iconActive:this.constructor.icon)
},I.prototype.disable=function(){this.container.classList.add("psv-button--disabled"),this.enabled=!1
},I.prototype.enable=function(){this.container.classList.remove("psv-button--disabled"),this.enabled=!0
},I.prototype._setIcon=function(d,c){c||(c=this.container),d?(c.innerHTML=R.ICONS[d],c.querySelector("svg").setAttribute("class","psv-button-svg")):c.innerHTML=""
},I.prototype._onClick=function(){},H.prototype=Object.create(I.prototype),H.prototype.constructor=H,H.id="autorotate",H.className="psv-button psv-button--hover-scale psv-autorotate-button",H.icon="play.svg",H.iconActive="play-active.svg",H.prototype.create=function(){I.prototype.create.call(this),this.psv.on("autorotate",this)
},H.prototype.destroy=function(){this.psv.off("autorotate",this),I.prototype.destroy.call(this)
},H.prototype.handleEvent=function(b){switch(b.type){case"autorotate":this.toggleActive(b.args[0])
}},H.prototype._onClick=function(){this.psv.toggleAutorotate()
},G.prototype=Object.create(I.prototype),G.prototype.constructor=G,G.className="psv-button psv-custom-button",G.prototype.create=function(){I.prototype.create.call(this),this.config.className&&y.addClasses(this.container,this.config.className),this.config.title&&(this.container.title=this.config.title),this.config.content&&(this.container.innerHTML=this.config.content),this.config.enabled!==!1&&this.config.disabled!==!0||this.disable(),this.config.visible!==!1&&this.config.hidden!==!0||this.hide()
},G.prototype.destroy=function(){delete this.config,I.prototype.destroy.call(this)
},G.prototype._onClick=function(){this.config.onClick&&this.config.onClick.apply(this.psv)
},F.prototype=Object.create(I.prototype),F.prototype.constructor=F,F.id="download",F.className="psv-button psv-button--hover-scale psv-download-button",F.icon="download.svg",F.prototype._onClick=function(){var b=document.createElement("a");
b.href=this.psv.config.panorama,b.download=this.psv.config.panorama,this.psv.container.appendChild(b),b.click()
},E.prototype=Object.create(I.prototype),E.prototype.constructor=E,E.id="fullscreen",E.className="psv-button psv-button--hover-scale psv-fullscreen-button",E.icon="fullscreen-in.svg",E.iconActive="fullscreen-out.svg",E.prototype.create=function(){I.prototype.create.call(this),R.SYSTEM.fullscreenEvent||(this.hide(),console.warn("PhotoSphereViewer: fullscreen not supported.")),this.psv.on("fullscreen-updated",this)
},E.prototype.destroy=function(){this.psv.off("fullscreen-updated",this),I.prototype.destroy.call(this)
},E.prototype.handleEvent=function(b){switch(b.type){case"fullscreen-updated":this.toggleActive(b.args[0])
}},E.prototype._onClick=function(){this.psv.toggleFullscreen()
},D.prototype=Object.create(I.prototype),D.prototype.constructor=D,D.id="gyroscope",D.className="psv-button psv-button--hover-scale psv-gyroscope-button",D.icon="compass.svg",D.prototype.create=function(){I.prototype.create.call(this),R.SYSTEM.deviceOrientationSupported.promise.then(this._onAvailabilityChange.bind(this,!0),this._onAvailabilityChange.bind(this,!1)),this.hide(),this.psv.on("gyroscope-updated",this)
},D.prototype.destroy=function(){this.psv.off("gyroscope-updated",this),I.prototype.destroy.call(this)
},D.prototype.handleEvent=function(b){switch(b.type){case"gyroscope-updated":this.toggleActive(b.args[0])
}},D.prototype._onClick=function(){this.psv.toggleGyroscopeControl()
},D.prototype._onAvailabilityChange=function(b){if(b){if(!y.checkTHREE("DeviceOrientationControls")){throw new A("Missing Three.js components: DeviceOrientationControls. Get them from three.js-examples package.")
}this.show()
}},C.prototype=Object.create(I.prototype),C.prototype.constructor=C,C.id="markers",C.className="psv-button psv-button--hover-scale psv-markers-button",C.icon="pin.svg",C.prototype._onClick=function(){this.psv.hud.toggleMarkersList()
},B.prototype=Object.create(I.prototype),B.prototype.constructor=B,B.id="zoom",B.className="psv-button psv-zoom-button",B.prototype.create=function(){I.prototype.create.call(this);
var e=document.createElement("div");
e.className="psv-zoom-button-minus",e.title=this.psv.config.lang.zoomOut,this._setIcon("zoom-out.svg",e),this.container.appendChild(e);
var d=document.createElement("div");
d.className="psv-zoom-button-range",this.container.appendChild(d),this.zoom_range=document.createElement("div"),this.zoom_range.className="psv-zoom-button-line",d.appendChild(this.zoom_range),this.zoom_value=document.createElement("div"),this.zoom_value.className="psv-zoom-button-handle",this.zoom_range.appendChild(this.zoom_value);
var f=document.createElement("div");
f.className="psv-zoom-button-plus",f.title=this.psv.config.lang.zoomIn,this._setIcon("zoom-in.svg",f),this.container.appendChild(f),this.zoom_range.addEventListener("mousedown",this),this.zoom_range.addEventListener("touchstart",this),this.psv.container.addEventListener("mousemove",this),this.psv.container.addEventListener("touchmove",this),this.psv.container.addEventListener("mouseup",this),this.psv.container.addEventListener("touchend",this),e.addEventListener("mousedown",this._zoomOut.bind(this)),f.addEventListener("mousedown",this._zoomIn.bind(this)),this.psv.on("zoom-updated",this),this.psv.once("ready",function(){this._moveZoomValue(this.psv.prop.zoom_lvl)
}.bind(this))
},B.prototype.destroy=function(){this.psv.container.removeEventListener("mousemove",this),this.psv.container.removeEventListener("touchmove",this),this.psv.container.removeEventListener("mouseup",this),this.psv.container.removeEventListener("touchend",this),delete this.zoom_range,delete this.zoom_value,this.psv.off("zoom-updated",this),I.prototype.destroy.call(this)
},B.prototype.handleEvent=function(b){switch(b.type){case"mousedown":this._initZoomChangeWithMouse(b);
break;
case"touchstart":this._initZoomChangeByTouch(b);
break;
case"mousemove":this._changeZoomWithMouse(b);
break;
case"touchmove":this._changeZoomByTouch(b);
break;
case"mouseup":this._stopZoomChange(b);
break;
case"touchend":this._stopZoomChange(b);
break;
case"zoom-updated":this._moveZoomValue(b.args[0])
}},B.prototype._moveZoomValue=function(b){this.zoom_value.style.left=b/100*this.zoom_range.offsetWidth-this.zoom_value.offsetWidth/2+"px"
},B.prototype._initZoomChangeWithMouse=function(b){this.enabled&&(this.prop.mousedown=!0,this._changeZoom(b.clientX))
},B.prototype._initZoomChangeByTouch=function(b){this.enabled&&(this.prop.mousedown=!0,this._changeZoom(b.changedTouches[0].clientX))
},B.prototype._zoomIn=function(){this.enabled&&(this.prop.buttondown=!0,this.psv.zoomIn(),window.setTimeout(this._startLongPressInterval.bind(this,1),200))
},B.prototype._zoomOut=function(){this.enabled&&(this.prop.buttondown=!0,this.psv.zoomOut(),window.setTimeout(this._startLongPressInterval.bind(this,-1),200))
},B.prototype._startLongPressInterval=function(b){this.prop.buttondown&&(this.prop.longPressInterval=window.setInterval(function(){this.psv.zoom(this.psv.prop.zoom_lvl+b)
}.bind(this),50))
},B.prototype._stopZoomChange=function(){this.enabled&&(window.clearInterval(this.prop.longPressInterval),this.prop.longPressInterval=null,this.prop.mousedown=!1,this.prop.buttondown=!1)
},B.prototype._changeZoomWithMouse=function(b){this.enabled&&(b.preventDefault(),this._changeZoom(b.clientX))
},B.prototype._changeZoomByTouch=function(b){this.enabled&&(b.preventDefault(),this._changeZoom(b.changedTouches[0].clientX))
},B.prototype._changeZoom=function(e){if(this.prop.mousedown){var d=parseInt(e)-this.zoom_range.getBoundingClientRect().left,f=d/this.zoom_range.offsetWidth*100;
this.psv.zoom(f)
}},A.prototype=Object.create(Error.prototype),A.prototype.name="PSVError",A.prototype.constructor=A,R.Error=A,z.types=["image","html","polygon_px","polygon_rad","rect","circle","ellipse","path"],z.getType=function(e,d){var f=[];
if(z.types.forEach(function(a){e[a]&&f.push(a)
}),0===f.length&&!d){throw new A("missing marker content, either "+z.types.join(", "))
}if(f.length>1){throw new A("multiple marker content, either "+z.types.join(", "))
}return f[0]
},z.prototype.destroy=function(){delete this.$el.psvMarker
},z.prototype.isNormal=function(){return"image"==this.type||"html"==this.type
},z.prototype.isPolygon=function(){return"polygon_px"==this.type||"polygon_rad"==this.type
},z.prototype.isSvg=function(){return"rect"==this.type||"circle"==this.type||"ellipse"==this.type||"path"==this.type
},z.prototype.update=function(d){if(d&&d!==this){var c=z.getType(d,!0);
if(void 0!==c&&c!==this.type){throw new A("cannot change marker type")
}y.deepmerge(this,d)
}this.isNormal()?this.$el.setAttribute("class","psv-marker psv-marker--normal"):this.$el.setAttribute("class","psv-marker psv-marker--svg"),this.className&&y.addClasses(this.$el,this.className),this.tooltip&&(y.addClasses(this.$el,"has-tooltip"),"string"==typeof this.tooltip&&(this.tooltip={content:this.tooltip})),this.style&&y.deepmerge(this.$el.style,this.style),this.anchor=y.parsePosition(this.anchor),this.isNormal()?this._updateNormal():this.isPolygon()?this._updatePolygon():this._updateSvg()
},z.prototype._updateNormal=function(){this.width&&this.height?(this.$el.style.width=this.width+"px",this.$el.style.height=this.height+"px",this._dynamicSize=!1):this._dynamicSize=!0,this.image?this.$el.style.backgroundImage="url("+this.image+")":this.$el.innerHTML=this.html,this.psv.cleanPosition(this),this.position3D=this.psv.sphericalCoordsToVector3(this)
},z.prototype._updateSvg=function(){switch(this._dynamicSize=!0,this.type){case"rect":"number"==typeof this._def?this._def={x:0,y:0,width:this._def,height:this._def}:Array.isArray(this._def)?this._def={x:0,y:0,width:this._def[0],height:this._def[1]}:this._def.x=this._def.y=0;
break;
case"circle":"number"==typeof this._def?this._def={cx:this._def,cy:this._def,r:this._def}:Array.isArray(this._def)?this._def={cx:this._def[0],cy:this._def[0],r:this._def[0]}:this._def.cx=this._def.cy=this._def.r;
break;
case"ellipse":"number"==typeof this._def?this._def={cx:this._def,cy:this._def,rx:this._def,ry:this._def}:Array.isArray(this._def)?this._def={cx:this._def[0],cy:this._def[1],rx:this._def[0],ry:this._def[1]}:(this._def.cx=this._def.rx,this._def.cy=this._def.ry);
break;
case"path":"string"==typeof this._def&&(this._def={d:this._def})
}Object.getOwnPropertyNames(this._def).forEach(function(b){this.$el.setAttributeNS(null,b,this._def[b])
},this),this.svgStyle?Object.getOwnPropertyNames(this.svgStyle).forEach(function(b){this.$el.setAttributeNS(null,b,this.svgStyle[b])
},this):this.$el.setAttributeNS(null,"fill","rgba(0,0,0,0.5)"),this.psv.cleanPosition(this),this.position3D=this.psv.sphericalCoordsToVector3(this)
},z.prototype._updatePolygon=function(){this._dynamicSize=!0,this.svgStyle?Object.getOwnPropertyNames(this.svgStyle).forEach(function(b){this.$el.setAttributeNS(null,b,this.svgStyle[b])
},this):this.$el.setAttributeNS(null,"fill","rgba(0,0,0,0.5)"),[this.polygon_rad,this.polygon_px].forEach(function(d){if(d&&"object"!=typeof d[0]){for(var c=0;
c<d.length;
c++){d.splice(c,2,[d[c],d[c+1]])
}}}),this.polygon_px?this.polygon_rad=this.polygon_px.map(function(d){var c=this.psv.textureCoordsToSphericalCoords({x:d[0],y:d[1]});
return[c.longitude,c.latitude]
},this):this.polygon_rad=this.polygon_rad.map(function(b){return[y.parseAngle(b[0]),y.bound(y.parseAngle(b[1],-Math.PI),-y.HalfPI,y.HalfPI)]
}),this.longitude=this.polygon_rad[0][0],this.latitude=this.polygon_rad[0][1],this.positions3D=this.polygon_rad.map(function(b){return this.psv.sphericalCoordsToVector3({longitude:b[0],latitude:b[1]})
},this)
};
var y={};
return R.Utils=y,y.TwoPI=2*Math.PI,y.HalfPI=Math.PI/2,y.svgNS="http://www.w3.org/2000/svg",y.checkTHREE=function(a){for(var f=0,e=arguments.length;
f<e;
f++){if(!(arguments[f] in V)){return !1
}}return !0
},y.isCanvasSupported=function(){var b=document.createElement("canvas");
return !(!b.getContext||!b.getContext("2d"))
},y.getWebGLCtx=function(){var e=document.createElement("canvas"),d=["webgl","experimental-webgl","moz-webgl","webkit-3d"],f=null;
return e.getContext&&d.some(function(a){try{return f=e.getContext(a),f&&"function"==typeof f.getParameter
}catch(c){return !1
}})?f:null
},y.isWebGLSupported=function(){return !!window.WebGLRenderingContext&&null!==y.getWebGLCtx()
},y.getMaxTextureWidth=function(){var b=y.getWebGLCtx();
if(null!==b){return b.getParameter(b.MAX_TEXTURE_SIZE)
}},y.toggleClass=function(h,g,l){if(h.classList){void 0===l?h.classList.toggle(g):l&&!h.classList.contains(g)?h.classList.add(g):l||h.classList.remove(g)
}else{var k=h.getAttribute("class")||"",j=k.indexOf(g)!==-1,i=new RegExp("(?:^|\\s)"+g+"(?:\\s|$)");
void 0!==l&&!l||j?l||(k=k.replace(i," ")):k+=k.length>0?" "+g:g,h.setAttribute("class",k)
}},y.addClasses=function(d,c){c&&c.split(" ").forEach(function(a){y.toggleClass(d,a,!0)
})
},y.removeClasses=function(d,c){c&&c.split(" ").forEach(function(a){y.toggleClass(d,a,!1)
})
},y.hasParent=function(d,c){do{if(d===c){return !0
}}while(d=d.parentNode);
return !1
},y.getClosest=function(e,d){var f=e.matches||e.msMatchesSelector;
do{if(f.bind(e)(d)){return e
}}while(e=e.parentElement);
return null
},y.mouseWheelEvent=function(){return"onwheel" in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"
},y.fullscreenEvent=function(){var d={exitFullscreen:"fullscreenchange",webkitExitFullscreen:"webkitfullscreenchange",mozCancelFullScreen:"mozfullscreenchange",msExitFullscreen:"msFullscreenEnabled"};
for(var c in d){if(c in document){return d[c]
}}},y.bound=function(e,d,f){return Math.max(d,Math.min(f,e))
},y.isInteger=Number.isInteger||function(b){return"number"==typeof b&&isFinite(b)&&Math.floor(b)===b
},y.sum=function(b){return b.reduce(function(d,c){return d+c
},0)
},y.getXMPValue=function(e,d){var f;
return null!==(f=e.match("<GPano:"+d+">(.*)</GPano:"+d+">"))?f[1]:null!==(f=e.match("GPano:"+d+'="(.*?)"'))?f[1]:null
},y.isFullscreenEnabled=function(b){return(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)===b
},y.requestFullscreen=function(b){(b.requestFullscreen||b.mozRequestFullScreen||b.webkitRequestFullscreen||b.msRequestFullscreen).call(b)
},y.exitFullscreen=function(){(document.exitFullscreen||document.mozCancelFullScreen||document.webkitExitFullscreen||document.msExitFullscreen).call(document)
},y.getStyle=function(d,c){return window.getComputedStyle(d,null)[c]
},y.getShortestArc=function(e,d){var f=[0,y.TwoPI,-y.TwoPI];
return f.reduce(function(b,a){return a=d-e+a,Math.abs(a)<Math.abs(b)?a:b
},1/0)
},y.parsePosition=function(f){if(!f){return{top:0.5,left:0.5}
}if("object"==typeof f){return f
}var e=f.toLocaleLowerCase().split(" ").slice(0,2);
1===e.length&&(e=void 0!==y.parsePosition.positions[e[0]]?[e[0],"center"]:[e[0],e[0]]);
var h="left"!=e[1]&&"right"!=e[1]&&"top"!=e[0]&&"bottom"!=e[0];
e=e.map(function(b){return y.parsePosition.positions[b]||b
}),h||e.reverse();
var g=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);
return g?{left:g[1]/100,top:g[2]/100}:{top:0.5,left:0.5}
},y.parsePosition.positions={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},y.parseSpeed=function(a){if("string"==typeof a){a=a.toString().trim();
var f=parseFloat(a.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1")),e=a.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();
switch(e.match(/(pm|per minute)$/)&&(f/=60),e){case"dpm":case"degrees per minute":case"dps":case"degrees per second":a=V.Math.degToRad(f);
break;
case"radians per minute":case"radians per second":a=f;
break;
case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":a=f*y.TwoPI;
break;
default:throw new A('unknown speed unit "'+e+'"')
}}return a
},y.parseAngle=function(a,j){if("string"==typeof a){var i=a.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);
if(!i){throw new A('unknown angle "'+a+'"')
}var h=parseFloat(i[1]),g=i[2];
if(g){switch(g){case"deg":case"degs":a=V.Math.degToRad(h);
break;
case"rad":case"rads":a=h;
break;
default:throw new A('unknown angle unit "'+g+'"')
}}}return j!==!1&&(void 0===j&&(j=0),a=(a-j)%y.TwoPI,a<0&&(a=y.TwoPI+a),a+=j),a
},y.cleanTHREEScene=function(a){a.children.forEach(function(c){c instanceof V.Mesh&&(c.geometry&&(c.geometry.dispose(),c.geometry=null),c.material&&(c.material.materials?(c.material.materials.forEach(function(b){b.map&&(b.map.dispose(),b.map=null),b.dispose()
}),c.material.materials.length=0):(c.material.map&&(c.material.map.dispose(),c.material.map=null),c.material.dispose()),c.material=null))
}),a.children.length=0
},y.animation=function(b){function j(a){if(i.promise.getStatus()!==-1){null===h&&(h=a);
var e,d=(a-h)/b.duration,c={};
if(d<1){for(e in b.properties){c[e]=b.properties[e].start+(b.properties[e].end-b.properties[e].start)*b.easing(d)
}b.onTick(c,d),window.requestAnimationFrame(j)
}else{for(e in b.properties){c[e]=b.properties[e].end
}b.onTick(c,1),window.requestAnimationFrame(function(){i.resolve()
})
}}}var i=U(!1),h=null;
b.easing&&"string"!=typeof b.easing||(b.easing=y.animation.easings[b.easing||"linear"]),void 0!==b.delay?window.setTimeout(function(){window.requestAnimationFrame(j)
},b.delay):window.requestAnimationFrame(j);
var g=i.promise;
return g.cancel=function(){i.reject()
},g
},y.animation.easings={linear:function(b){return b
},inQuad:function(b){return b*b
},outQuad:function(b){return b*(2-b)
},inOutQuad:function(b){return b<0.5?2*b*b:-1+(4-2*b)*b
},inCubic:function(b){return b*b*b
},outCubic:function(b){return --b*b*b+1
},inOutCubic:function(b){return b<0.5?4*b*b*b:(b-1)*(2*b-2)*(2*b-2)+1
},inQuart:function(b){return b*b*b*b
},outQuart:function(b){return 1- --b*b*b*b
},inOutQuart:function(b){return b<0.5?8*b*b*b*b:1-8*--b*b*b*b
},inQuint:function(b){return b*b*b*b*b
},outQuint:function(b){return 1+ --b*b*b*b*b
},inOutQuint:function(b){return b<0.5?16*b*b*b*b*b:1+16*--b*b*b*b*b
},inSine:function(b){return 1-Math.cos(b*(Math.PI/2))
},outSine:function(b){return Math.sin(b*(Math.PI/2))
},inOutSine:function(b){return 0.5-0.5*Math.cos(Math.PI*b)
},inExpo:function(b){return Math.pow(2,10*(b-1))
},outExpo:function(b){return 1-Math.pow(2,-10*b)
},inOutExpo:function(b){return b=2*b-1,b<0?0.5*Math.pow(2,10*b):1-0.5*Math.pow(2,-10*b)
},inCirc:function(b){return 1-Math.sqrt(1-b*b)
},outCirc:function(b){return b--,Math.sqrt(1-b*b)
},inOutCirc:function(b){return b*=2,b<1?0.5-0.5*Math.sqrt(1-b*b):0.5+0.5*Math.sqrt(1-(b-=2)*b)
}},y.throttle=function(j,i){var p,o,n,m=null,l=0,k=function(){l=Date.now(),m=null,n=j.apply(p,o),m||(p=o=null)
};
return function(){var b=Date.now();
l||(l=b);
var a=i-(b-l);
return p=this,o=arguments,a<=0||a>i?(m&&(clearTimeout(m),m=null),l=b,n=j.apply(p,o),m||(p=o=null)):m||(m=setTimeout(k,a)),n
}
},y.isPlainObject=function(d){if("object"==typeof d&&null!==d){if("function"==typeof Object.getPrototypeOf){var c=Object.getPrototypeOf(d);
return c===Object.prototype||null===c
}return"[object Object]"==Object.prototype.toString.call(d)
}return !1
},y.deepmerge=function(f,e){var h=e;
return function g(d,c){return Array.isArray(c)?(d&&Array.isArray(d)?d.length=0:d=[],c.forEach(function(a,i){d[i]=g(null,a)
})):"object"==typeof c?(d&&!Array.isArray(d)||(d={}),Object.keys(c).forEach(function(a){"object"==typeof c[a]&&c[a]&&y.isPlainObject(c[a])?c[a]!=h&&(d[a]?g(d[a],c[a]):d[a]=g(null,c[a])):d[a]=c[a]
})):d=c,d
}(f,e)
},y.clone=function(b){return y.deepmerge(null,b)
},function(g){if(g.requestAnimationFrame=g.requestAnimationFrame||g.mozRequestAnimationFrame||g.webkitRequestAnimationFrame||g.msRequestAnimationFrame,g.cancelAnimationFrame=g.cancelAnimationFrame||g.mozCancelAnimationFrame||g.webkitCancelAnimationFrame||g.msCancelAnimationFrame,!g.requestAnimationFrame){var f,j=[],i=[],h=0;
g.requestAnimationFrame=function(b){return j.push([++h,b]),f||(f=setInterval(function(){if(j.length){var c=+new Date,d=i;
for(i=j,j=d;
i.length;
){i.shift()[1](c)
}}else{clearInterval(f),f=void 0
}},20)),h
},g.cancelAnimationFrame=function(d){var c,k;
for(c=0,k=j.length;
c<k;
c+=1){if(j[c][0]===d){return void j.splice(c,1)
}}for(c=0,k=i.length;
c<k;
c+=1){if(i[c][0]===d){return void i.splice(c,1)
}}}
}}(window),R.ICONS["compass.svg"]='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M49.997,0C22.38,0.004,0.005,22.383,0,50.002C0.005,77.614,22.38,99.995,49.997,100C77.613,99.995,99.996,77.614,100,50.002C99.996,22.383,77.613,0.004,49.997,0z M49.997,88.81c-21.429-0.04-38.772-17.378-38.809-38.807c0.037-21.437,17.381-38.775,38.809-38.812C71.43,11.227,88.769,28.567,88.81,50.002C88.769,71.432,71.43,88.77,49.997,88.81z"/><path d="M72.073,25.891L40.25,41.071l-0.003-0.004l-0.003,0.009L27.925,74.109l31.82-15.182l0.004,0.004l0.002-0.007l-0.002-0.004L72.073,25.891z M57.837,54.411L44.912,42.579l21.092-10.062L57.837,54.411z"/><!--Created by iconoci from the Noun Project--></svg>',R.ICONS["download.svg"]='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M83.285,35.575H66.271L66.277,3H32.151v32.575H16.561l33.648,32.701L83.285,35.575z"/><path d="M83.316,64.199v16.32H16.592v-16.32H-0.094v32.639H100V64.199H83.316z"/><!--Created by Michael Zenaty from the Noun Project--></svg>',R.ICONS["fullscreen-in.svg"]='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><polygon points="100,39.925 87.105,39.925 87.105,18.895 66.075,18.895 66.075,6 100,6"/><polygon points="100,93.221 66.075,93.221 66.075,80.326 87.105,80.326 87.105,59.295 100,59.295"/><polygon points="33.925,93.221 0,93.221 0,59.295 12.895,59.295 12.895,80.326 33.925,80.326"/><polygon points="12.895,39.925 0,39.925 0,6 33.925,6 33.925,18.895 12.895,18.895"/><!--Created by Garrett Knoll from the Noun Project--></svg>',R.ICONS["fullscreen-out.svg"]='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><polygon points="66.075,7 78.969,7 78.969,28.031 100,28.031 100,40.925 66.075,40.925"/><polygon points="66.075,60.295 100,60.295 100,73.19 78.969,73.19 78.969,94.221 66.075,94.221"/><polygon points="0,60.295 33.925,60.295 33.925,94.221 21.031,94.221 21.031,73.19 0,73.19"/><polygon points="21.031,7 33.925,7 33.925,40.925 0,40.925 0,28.031 21.031,28.031"/><!--Created by Garrett Knoll from the Noun Project--></svg>',R.ICONS["pin.svg"]='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve"><path d="M24,0C13.798,0,5.499,8.3,5.499,18.501c0,10.065,17.57,28.635,18.318,29.421C23.865,47.972,23.931,48,24,48s0.135-0.028,0.183-0.078c0.748-0.786,18.318-19.355,18.318-29.421C42.501,8.3,34.202,0,24,0z M24,7.139c5.703,0,10.342,4.64,10.342,10.343c0,5.702-4.639,10.342-10.342,10.342c-5.702,0-10.34-4.64-10.34-10.342C13.66,11.778,18.298,7.139,24,7.139z"/><!--Created by Daniele Marucci from the Noun Project--></svg>',R.ICONS["play-active.svg"]='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 41 41" enable-background="new 0 0 41 41" xml:space="preserve"><path d="M40.5,14.1c-0.1-0.1-1.2-0.5-2.898-1C37.5,13.1,37.4,13,37.4,12.9C34.5,6.5,28,2,20.5,2S6.6,6.5,3.7,12.9c0,0.1-0.1,0.1-0.2,0.2c-1.7,0.6-2.8,1-2.9,1L0,14.4v12.1l0.6,0.2c0.1,0,1.1,0.399,2.7,0.899c0.1,0,0.2,0.101,0.2,0.199C6.3,34.4,12.9,39,20.5,39c7.602,0,14.102-4.6,16.9-11.1c0-0.102,0.1-0.102,0.199-0.2c1.699-0.601,2.699-1,2.801-1l0.6-0.3V14.3L40.5,14.1z M6.701,11.5C9.7,7,14.8,4,20.5,4c5.8,0,10.9,3,13.8,7.5c0.2,0.3-0.1,0.6-0.399,0.5c-3.799-1-8.799-2-13.6-2c-4.7,0-9.5,1-13.2,2C6.801,12.1,6.601,11.8,6.701,11.5z M25.1,20.3L18.7,24c-0.3,0.2-0.7,0-0.7-0.5v-7.4c0-0.4,0.4-0.6,0.7-0.4 l6.399,3.8C25.4,19.6,25.4,20.1,25.1,20.3z M34.5,29.201C31.602,33.9,26.4,37,20.5,37c-5.9,0-11.1-3.1-14-7.898c-0.2-0.302,0.1-0.602,0.4-0.5c3.9,1,8.9,2.1,13.6,2.1c5,0,9.9-1,13.602-2C34.4,28.602,34.602,28.9,34.5,29.201z"/><!--Created by Nick Bluth from the Noun Project--></svg>',R.ICONS["play.svg"]='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 41 41" enable-background="new 0 0 41 41" xml:space="preserve"><path d="M40.5,14.1c-0.1-0.1-1.2-0.5-2.899-1c-0.101,0-0.2-0.1-0.2-0.2C34.5,6.5,28,2,20.5,2S6.6,6.5,3.7,12.9c0,0.1-0.1,0.1-0.2,0.2c-1.7,0.6-2.8,1-2.9,1L0,14.4v12.1l0.6,0.2c0.1,0,1.1,0.4,2.7,0.9c0.1,0,0.2,0.1,0.2,0.199C6.3,34.4,12.9,39,20.5,39c7.601,0,14.101-4.6,16.9-11.1c0-0.101,0.1-0.101,0.2-0.2c1.699-0.6,2.699-1,2.8-1l0.6-0.3V14.3L40.5,14.1zM20.5,4c5.8,0,10.9,3,13.8,7.5c0.2,0.3-0.1,0.6-0.399,0.5c-3.8-1-8.8-2-13.6-2c-4.7,0-9.5,1-13.2,2c-0.3,0.1-0.5-0.2-0.4-0.5C9.7,7,14.8,4,20.5,4z M20.5,37c-5.9,0-11.1-3.1-14-7.899c-0.2-0.301,0.1-0.601,0.4-0.5c3.9,1,8.9,2.1,13.6,2.1c5,0,9.9-1,13.601-2c0.3-0.1,0.5,0.2,0.399,0.5C31.601,33.9,26.4,37,20.5,37z M39.101,24.9c0,0.1-0.101,0.3-0.2,0.3c-2.5,0.9-10.4,3.6-18.4,3.6c-7.1,0-15.6-2.699-18.3-3.6C2.1,25.2,2,25,2,24.9V16c0-0.1,0.1-0.3,0.2-0.3c2.6-0.9,10.6-3.6,18.2-3.6c7.5,0,15.899,2.7,18.5,3.6c0.1,0,0.2,0.2,0.2,0.3V24.9z"/><path d="M18.7,24l6.4-3.7c0.3-0.2,0.3-0.7,0-0.8l-6.4-3.8c-0.3-0.2-0.7,0-0.7,0.4v7.4C18,24,18.4,24.2,18.7,24z"/><!--Created by Nick Bluth from the Noun Project--></svg>',R.ICONS["zoom-in.svg"]='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M14.043,12.22c2.476-3.483,1.659-8.313-1.823-10.789C8.736-1.044,3.907-0.228,1.431,3.255c-2.475,3.482-1.66,8.312,1.824,10.787c2.684,1.908,6.281,1.908,8.965,0l4.985,4.985c0.503,0.504,1.32,0.504,1.822,0c0.505-0.503,0.505-1.319,0-1.822L14.043,12.22z M7.738,13.263c-3.053,0-5.527-2.475-5.527-5.525c0-3.053,2.475-5.527,5.527-5.527c3.05,0,5.524,2.474,5.524,5.527C13.262,10.789,10.788,13.263,7.738,13.263z"/><polygon points="8.728,4.009 6.744,4.009 6.744,6.746 4.006,6.746 4.006,8.73 6.744,8.73 6.744,11.466 8.728,11.466 8.728,8.73 11.465,8.73 11.465,6.746 8.728,6.746"/><!--Created by Ryan Canning from the Noun Project--></svg>',R.ICONS["zoom-out.svg"]='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M14.043,12.22c2.476-3.483,1.659-8.313-1.823-10.789C8.736-1.044,3.907-0.228,1.431,3.255c-2.475,3.482-1.66,8.312,1.824,10.787c2.684,1.908,6.281,1.908,8.965,0l4.985,4.985c0.503,0.504,1.32,0.504,1.822,0c0.505-0.503,0.505-1.319,0-1.822L14.043,12.22z M7.738,13.263c-3.053,0-5.527-2.475-5.527-5.525c0-3.053,2.475-5.527,5.527-5.527c3.05,0,5.524,2.474,5.524,5.527C13.262,10.789,10.788,13.263,7.738,13.263z"/><rect x="4.006" y="6.746" width="7.459" height="1.984"/><!--Created by Ryan Canning from the Noun Project--></svg>',R
});
$(function(){$.fn.initVideo=function(){this.each(function(){var c=$(this);
var d=c.data("video-asset");
var f=c.data("video-thumbnail");
var e=c.data("video-autoplay")!=="undefined"?c.data("video-autoplay"):"0";
var b=new s7viewers.VideoViewer({containerId:c.attr("id"),params:{"VideoPlayer.ssl":"on",serverurl:"https://silversea-h.assetsadobe2.com/is/image",contenturl:"https://www.silversea.com/",config:"etc/dam/presets/viewer/Video",videoserverurl:"https://gateway-eu.assetsadobe.com/DMGateway/public-ssl/silversea",posterimage:f,asset:d,autoplay:e.toString(),progressivebitrate:"3000",initialbitrate:"3000"}});
b.setHandlers({initComplete:function(){var g=c.find("video");
g.on("loadstart",function(){c.addClass("loading")
}).on("loadeddata",function(){c.removeClass("loading")
})
}});
b.init()
})
};
function a(){if($(".video-custom-thumbnail").length>0){if(typeof s7viewers!=="undefined"){$(".video-custom-thumbnail").initVideo()
}else{setTimeout(a,700)
}}}a()
});
"use strict";
var _createClass=function(){function a(e,c){for(var b=0;
b<c.length;
b++){var d=c[b];
d.enumerable=d.enumerable||false;
d.configurable=true;
if("value" in d){d.writable=true
}Object.defineProperty(e,d.key,d)
}}return function(d,b,c){if(b){a(d.prototype,b)
}if(c){a(d,c)
}return d
}
}();
function _classCallCheck(a,b){if(!(a instanceof b)){throw new TypeError("Cannot call a class as a function")
}}var ResponsiveBackgroundImage=function(){function a(c){var d=this;
_classCallCheck(this,a);
this.element=c;
this.img=c.querySelector("img");
this.src="";
this.img.addEventListener("load",function(){d.update()
});
if(this.img.complete){this.update()
}}_createClass(a,[{key:"update",value:function b(){var c=typeof this.img.currentSrc!=="undefined"?this.img.currentSrc:this.img.src;
if(this.src!==c){this.src=c;
this.element.style.backgroundImage='url("'+this.src+'")'
}}}]);
return a
}();
$(window).load(function(){if($(".hero-image-container").length>0){var b=document.querySelectorAll(".hero-image-container");
for(var a=0;
a<b.length;
a++){new ResponsiveBackgroundImage(b[a])
}}});
$(function(){$(".hero-banner-dco .video-link-dam").on("click",function(d){d.preventDefault();
var a=$(this),c=a.attr("href"),f=a.data("target"),b=$(f);
b.modal("show");
b.on("shown.bs.modal",function(h){var g=$(this);
g.off("shown.bs.modal");
g.find(".modal-dialog").load(c,function(){$(this).find(".c-video").initVideo()
})
})
})
});
"use strict";
var _createClass=function(){function a(e,c){for(var b=0;
b<c.length;
b++){var d=c[b];
d.enumerable=d.enumerable||false;
d.configurable=true;
if("value" in d){d.writable=true
}Object.defineProperty(e,d.key,d)
}}return function(d,b,c){if(b){a(d.prototype,b)
}if(c){a(d,c)
}return d
}
}();
function _classCallCheck(a,b){if(!(a instanceof b)){throw new TypeError("Cannot call a class as a function")
}}var ResponsiveBackgroundImage=function(){function a(c){var d=this;
_classCallCheck(this,a);
this.element=c;
this.img=c.querySelector("img");
this.src="";
this.img.addEventListener("load",function(){d.update()
});
if(this.img.complete){this.update()
}}_createClass(a,[{key:"update",value:function b(){var c=typeof this.img.currentSrc!=="undefined"?this.img.currentSrc:this.img.src;
if(this.src!==c){this.src=c;
this.element.style.backgroundImage='url("'+this.src+'")'
}}}]);
return a
}();
$(window).load(function(){var a=".single-image-container";
if($(a).length>0){var c=document.querySelectorAll(a);
for(var b=0;
b<c.length;
b++){new ResponsiveBackgroundImage(c[b])
}}});
var handler=function(){if($(".mediaMixSliderCustom").length>0){$(".slider-container").each(function(){var a=$(this).find(".mediaMixSliderCustom");
var b=$(this).outerWidth();
a.css("width",window.innerWidth+"px");
a.css("left",-((window.innerWidth-b)/2)+"px");
createLineProgressBar();
a.on("afterChange",function(d,c,e){loadLazyImage($(this))
});
loadLazyImage(a)
})
}};
function loadLazyImage(b){var a=b.find("div.slick-active");
a.prev().find("img:eq(0)").lazy({attribute:"data-lazy"});
a.prev().prev().find("img:eq(0)").lazy({attribute:"data-lazy"});
a.prev().prev().prev().find("img:eq(0)").lazy({attribute:"data-lazy"});
a.next().find("img:eq(0)").lazy({attribute:"data-lazy"});
a.next().next().find("img:eq(0)").lazy({attribute:"data-lazy"});
a.next().next().next().find("img:eq(0)").lazy({attribute:"data-lazy"})
}var createLineProgressBar=function(){$(".mediaMixSliderCustom").each(function(){var b=$(this).find(".slick-list").width();
if($("body").hasClass("viewport-md")||$("body").hasClass("viewport-lg")){if(b>930){b=930
}}else{if($("body").hasClass("viewport-sm")){if(b>768){b=630
}}}var c=$(this).find("ul.slick-dots li").length;
var a=((b/c)-1)*0.7;
$(this).find("ul.slick-dots li").css("width",a+"px")
})
};
var createMediaMixSlider=function(){var a={arrows:true,infinite:true,centerMode:true,variableWidth:true,dots:true};
$("[id^='mediaMixSliderCustom-']").slick("unslick").slick(a).slick("slickFilter",":not(.toNotDisplay)")
};
$(function(){if($(".mediaMixSliderCustom").length>0){window.onresize=handler;
createMediaMixSlider();
handler();
createLineProgressBar()
}});
function StickyMenu(a){this.replaceHeader=a||false
}StickyMenu.prototype={constructor:StickyMenu,replaceHeader:false,headerSelector:".header-style3,.header-style4,.c-header,.c-main-nav__bottom,.c-header__container",isUnderViewport:function(a,b){return a.offset().top-this.headerHeight()+a.height()-b>$(window).scrollTop()
},isScrolledIntoView:function isScrolledIntoView(c,e){var d=$(window).scrollTop()+this.headerHeight()+$(".ssc-sticky-top").height();
var a=$(c).offset().top;
var b=a+$(c).outerHeight(true);
return((b+e>=d)&&(d>=a-e))
},headerHeight:function headerHeight(){return($(this.headerSelector).height()||60)+$(".c-main-nav__bottom").height()
},stickMenu:function stickMenu(){var e=$(".sm-menu-container-wrapper");
var c=$(".sm-menu-container.ssc-sticky-top");
var b=this.replaceHeader?0:this.headerHeight();
var d=this.replaceHeader?this.headerSelector:"";
if(this.isUnderViewport(e,15+$(".ssc-sticky-top").outerHeight())){c.fadeOut(0,function(){e.css("padding-bottom","60px");
e.css("margin-top","0px");
c.removeClass("ssc-sticky-top").fadeIn(0);
$(".sm-menu-tab").removeClass("active");
$(d).slideDown(200)
})
}else{var a=$(".sm-menu-container:not(.ssc-sticky-top)");
a.fadeOut(0,function(){e.css("padding-bottom","0px");
e.css("margin-top","0px");
a.addClass("ssc-sticky-top").fadeIn(0,function(){a.css("top",b+"px")
});
$(d).slideUp(200)
})
}},getOffset:function getOffset(c){var b=$(window).width()>991,a=$(window).width()<768;
var d=b?"desktop":a?"mobile":"tablet";
return c.attr("data-offset-"+d)
},activeTab:function activeTab(){var a=this;
$(".sm-menu-tab").each(function(){target=$(this).attr("href");
var b=parseInt(a.getOffset($(this)));
if($(target).position()&&a.isScrolledIntoView(target,b)){$(".sm-menu-tab").removeClass("active");
$(this).addClass("active");
return false
}})
},onScroll:function onScroll(){this.stickMenu();
this.activeTab()
}};
$(function(){$(".sm-menu a[href^='#']").on("click touchstart",function(f){f.preventDefault();
var d=$(this).attr("href");
$target=$(d);
history.replaceState(null,null,d);
var c=window.innerWidth<768?65:100;
var g=a($(this))||c;
var h=$target.offset().top-g;
$([document.documentElement,document.body]).animate({scrollTop:h,duration:(0.5*h),easing:"linear"},(0.5*h))
});
if($(".sm-menu-container").length>0){var b=window.$$stickyMenu;
b.onScroll();
$(document).on("scroll resize touchmove gesturechange",b.onScroll.bind(b))
}function a(e){var d=$(window).width()>991,c=$(window).width()<768;
device=d?"desktop":c?"mobile":"tablet";
return e.attr("data-offset-"+device)
}});
(function(){setTimeout(function(){if(typeof s!=="undefined"){if(s.eVar34!=null&&s.eVar34.length>0){var a=new Date();
a.setTime(a.getTime()+365*24*60*60*1000);
document.cookie="marketingEffortValue="+encodeURIComponent(s.eVar34)+"; expires="+a.toGMTString()+"; path=/"
}}},1000)
})();
$(document).ready(function(){if(window.location.hash!=""){var a=$.trim(window.location.hash);
if(a){$('.c-tab__nav a[href$="'+a+'"]').trigger("click");
if($(a).length>0){$("html,body").animate({scrollTop:$(a).offset().top-120},"slow")
}}}});
if($(".brochurethankyou").length>0){var cookie=getCookie("userInfo");
var userInf=JSON.parse(cookie);
var type=userInf.requestsource;
if(type=="BRO"){$("h5").hide();
$("h5.c-BroDesc").show()
}}if($("input[name='subscribeemail-custom']").length>0){if(!$("input[name='subscribeemail-custom']").is(":checked")&&dataLayer[0].user_country!="CA"){$("input[name='subscribeemail-custom']").parent().click()
}}function getCookie(d){var b=d+"=";
var f=decodeURIComponent(document.cookie);
var a=f.split(";");
for(var e=0;
e<a.length;
e++){var g=a[e];
while(g.charAt(0)==" "){g=g.substring(1)
}if(g.indexOf(b)==0){return g.substring(b.length,g.length)
}}return""
}if($(".ship .c-hero-banner__buttons a.btn-default").length>0){if($(".ship .c-hero-banner__buttons a.btn-default").attr("href").indexOf("#voyages")>=0){$(document).on("click",".ship .c-hero-banner__buttons a.btn-default",function(a){a.preventDefault();
$("html, body").animate({scrollTop:$("#"+$.attr(this,"href").split("#")[1]).offset().top-120},500)
})
}}if($(".c-hero-banner-landing__buttons.anchorlink a.btn").length>0){$(".c-hero-banner-landing__buttons.anchorlink a.btn").each(function(a){if($($(".c-hero-banner-landing__buttons.anchorlink a.btn")[a]).attr("href").indexOf("#")>=0){$(this).on("click",function(b){b.preventDefault();
$("html, body").animate({scrollTop:$("#"+$.attr(this,"href").split("#")[1]).offset().top-120},500)
})
}})
}function blockMultiSubmit(){if($(".request-quote-form").length>0){$(".request-quote-form").on("submit",function(){if(!$(".has-error").length>0){$(".request-quote-form button").attr("disabled","disabled");
setTimeout(function(){$(".request-quote-form button").removeAttr("disabled")
},3500)
}})
}if($(".c-signupforoffer").length>0){$(".c-signupforoffer").on("submit",function(){if(!$(".has-error").length>0){$(".c-signupforofferbutton").attr("disabled","disabled");
setTimeout(function(){$(".c-signupforoffer button").removeAttr("disabled")
},3500)
}})
}}blockMultiSubmit();
$(document).ajaxStop(function(){blockMultiSubmit();
if($(".brochurerequest #InputTelephoneNumber").length>0){$(".brochurerequest #InputTelephoneNumber").removeAttr("required")
}if($("input[name='subscribeemail-custom']").length>0){if(!$("input[name='subscribeemail-custom']").is(":checked")&&dataLayer[0].user_country!="CA"){$("input[name='subscribeemail-custom']").parent().click()
}}});
function overrideDatalayerFYCValue(){$resultWrapper=$(".c-fyc__result-wrapper");
$cruise=$resultWrapper.find(".c-fyc__result:first");
window.dataLayer[0].track_destination_name=$cruise.find(".cruise-destination").data("destinationname");
window.dataLayer[0].track_voyage_type=$cruise.find(".cruise-type").data("cruisetype");
window.dataLayer[0].track_shipname=$cruise.find(".cruise-ship").data("shipname")
}$(document).ready(function(){if($(".c-fyc__result").length>0){$(document).ajaxComplete(function(){overrideDatalayerFYCValue()
});
overrideDatalayerFYCValue()
}});
function hideFreeShorexIcon(){var a=["2804","2806","2807","2809","2811","2812","6805","6806","3801","3802","3803","3804","3805","3806","3807","3808","3809","3810","3811"];
if($(".icon-shorex").length>0){if(a.indexOf(window.dataLayer[0].track_voyage_id)==-1){$(".icon-shorex").hide();
if($(".cruise-2018-itineraries-port-excursions-excursion-features").length>0){$(".icon-shorex").parent().hide();
$(".cruise-2018-itineraries-port-excursions-moredetails").on("click",function(){setTimeout(function(){$(".lsh-icon-list .icon-shorex").hide();
$(".lsh-icon-list .icon-shorex").parent().hide();
$(".lsh-icon .icon-shorex").parent().hide()
},500);
setTimeout(function(){$(".lsh-icon-list .icon-shorex").hide();
$(".lsh-icon-list .icon-shorex").parent().hide();
$(".lsh-icon .icon-shorex").parent().hide()
},1000);
setTimeout(function(){$(".lsh-icon-list .icon-shorex").hide();
$(".lsh-icon-list .icon-shorex").parent().hide();
$(".lsh-icon .icon-shorex").parent().hide()
},1500);
setTimeout(function(){$(".lsh-icon-list .icon-shorex").hide();
$(".lsh-icon-list .icon-shorex").parent().hide();
$(".lsh-icon .icon-shorex").parent().hide()
},2000);
setTimeout(function(){$(".lsh-icon-list .icon-shorex").hide();
$(".lsh-icon-list .icon-shorex").parent().hide();
$(".lsh-icon .icon-shorex").parent().hide()
},3000)
})
}else{$(".icon-shorex").parent().parent().hide()
}}}}$(document).ready(function(){hideFreeShorexIcon()
});
function callGoogleForwardingNumber(b,c,d,a){}$(document).ready(function(){jQuery("a.coolanchor").click(function(){if(this.hash){var a=this.hash.substr(1);
var c=jQuery("[id="+a+"]");
var b=c.offset().top-90;
jQuery("body,html").animate({scrollTop:b},1000);
return false
}});
jQuery("a.coolanchorminus").click(function(){if(this.hash){var a=this.hash.substr(1);
var c=jQuery("[id="+a+"]");
var b=c.offset().top-200;
jQuery("body,html").animate({scrollTop:b},1000);
return false
}})
});
(function(a){var c=0;
var e=false;
var j=function(t){var n=t.target;
while(n!==document.body&&n!==document){var l=window.getComputedStyle(n);
if(!l){break
}if(n.nodeName==="INPUT"&&n.getAttribute("type")==="range"){return
}var r=l.getPropertyValue("-webkit-overflow-scrolling");
var p=l.getPropertyValue("overflow-y");
var u=parseInt(l.getPropertyValue("height"),10);
var q=r==="touch"&&(p==="auto"||p==="scroll");
var m=n.scrollHeight>n.offsetHeight;
if(q&&m){var k=t.touches?t.touches[0].screenY:t.screenY;
var v=(c<=k&&n.scrollTop===0);
var o=(c>=k&&n.scrollHeight-n.scrollTop===u);
if(v||o){t.preventDefault()
}return
}n=n.parentNode
}t.preventDefault()
};
var f=function(k){c=k.touches?k.touches[0].screenY:k.screenY
};
var d=function(){window.addEventListener("touchstart",f,false);
window.addEventListener("touchmove",j,false);
e=true
};
var b=function(){window.removeEventListener("touchstart",f,false);
window.removeEventListener("touchmove",j,false);
e=false
};
var i=function(){return e
};
var h=document.createElement("div");
document.documentElement.appendChild(h);
h.style.WebkitOverflowScrolling="touch";
window.scrollSupport="getComputedStyle" in window&&window.getComputedStyle(h)["-webkit-overflow-scrolling"]==="touch";
document.documentElement.removeChild(h);
var g={enable:d,disable:b,isEnabled:i};
window.iNoBounce=g;
if(typeof module!=="undefined"&&module.exports){module.exports=g
}if(typeof a.define==="function"){(function(k){k("iNoBounce",[],function(){return g
})
}(a.define))
}else{a.iNoBounce=g
}}(this));
$(function(){$(".automatic-modal-ssc, .virtual-tour-modal-ssc").on("click",function(c){c.preventDefault();
$("body").addClass("modal-open");
var b=$('<div class="modal-content modal-content--transparent modal-content--single"><div class="modal-header"><button class="close c-btn--close" type="button" data-dismiss="modal" aria-label="Close"></button></div><div class="modal-body automatic-modal-body"><img class="o-img" /></div></div>');
$($(this).data("target")).modal("show");
var a=$(this).attr("href");
$(".modal").on("shown.bs.modal",function(d){$(this).find(".modal-dialog").empty().append(b);
$(this).find("img").attr("src",a)
})
});
$(".automatic-gallery-modal-ssc").on("click",function(d){d.preventDefault();
var g=$(this),i=g.closest("[data-gallery-path]").data("gallery-path"),a=g.data("target"),b=$(a);
var f=g.attr("data-hide-arrow-mobile-ssc");
var j=g.attr("data-remove-first-mobile-ssc");
var h=g.attr("data-only-video-mobile");
var c=g.attr("data-only-video-desktop");
b.modal("show");
b.on("shown.bs.modal",function(l){var k=$(this);
k.off("shown.bs.modal");
k.find(".modal-dialog").load(i,function(){var q={slidesToShow:1,slidesToScroll:1,asNavFor:".modal .c-slider--nav"};
var t={slidesToShow:6,slidesToScroll:5,asNavFor:".modal .c-slider--for",focusOnSelect:true};
if(_mobile){q.prevArrow=f;
q.nextArrow=f;
t.prevArrow=f;
t.nextArrow=f
}var p=k.find(".c-slider--for").slick(q);
var r=k.find(".c-slider--nav").slick(t);
$(".video-link").on("click",function(u){u.preventDefault();
$(this).next(".c-video").initVideo()
});
if($(".c-gallery__tab").length){var e=$(".c-gallery__tab__link");
k.find(".c-gallery__tab__link").on("click",function(w){w.preventDefault();
var v=$(this),u=p.find('.slick-slide:not(".slick-cloned")[data-category-target="'+v.data("category")+'"]').index()-1;
p.slick("slickGoTo",u)
});
p.on("beforeChange",function(w,v,y,x){var u=$(this).find('.slick-slide:not(".slick-cloned")').eq(x).data("category-target");
$(".c-gallery__tab__link:visible").removeClass("active");
$('.c-gallery__tab__link:visible[data-category="'+u+'"]').addClass("active")
})
}var o=p.find(".slick-slide:not(.slick-cloned)").length;
p.closest(".c-gallery__wrappertop").find(".c-gallery__counter .slide-item-total").html(o);
p.on("beforeChange",function(w,v,z,x){var y=$(this);
y.closest(".c-gallery__wrappertop").find(".c-gallery__counter .slide-item-current").html(x+1);
var u=y.find(".slick-current .c-video");
u.find('.s7playpausebutton[selected="false"]').trigger("click");
u.attr("class","c-video").empty()
}).on("afterChange",function(v,u,y){var x=$(this);
var w=x.closest(".c-gallery").find(".slick-active");
w.find(".lazy").lazy();
w.prev().find(".lazy").lazy();
w.prev().prev().find(".lazy").lazy();
w.next().find(".lazy").lazy();
w.next().next().find(".lazy").lazy();
setTimeout(function(){w.find(".lazy").lazy()
},50)
});
var m=g.attr("href");
p.slick("slickGoTo",p.find('.slick-slide:not(".slick-cloned")[data-image="'+m+'"]').first().data("slick-index"),false);
if(g.hasClass("video-autoplay")){l.preventDefault();
var n=p.find('.slick-slide:not(".slick-cloned")[data-image="'+m+'"]').first();
n.find(".c-video").initVideo()
}if(_mobile&&f){$(".modal-header button").hide()
}if(_mobile&&j){p.slick("slickRemove","0");
r.slick("slickRemove","0");
o=p.find(".slick-slide:not(.slick-cloned)").length;
p.closest(".c-gallery__wrappertop").find(".c-gallery__counter .slide-item-total").html(o)
}if(_mobile&&h){p.slick("slickFilter",function(u){return $(".video-link",this).length==1
});
r.slick("slickFilter",function(u){return $(".video-link",this).length==1
});
o=p.find(".slick-slide:not(.slick-cloned)").length;
p.closest(".c-gallery__wrappertop").find(".c-gallery__counter .slide-item-total").html(o)
}if(!_mobile&&c){p.slick("slickFilter",function(u){return $(".video-link",this).length==1
});
r.slick("slickFilter",function(u){return $(".video-link",this).length==1
});
o=p.find(".slick-slide:not(.slick-cloned)").length;
p.closest(".c-gallery__wrappertop").find(".c-gallery__counter .slide-item-total").html(o);
r.slick("unslick");
r.hide()
}})
})
})
});
function destinationRedirect(a){if(window.location.hash){var b=window.location.hash.substring(1);
if(b=="silversea_expeditions"){a=a+"?voyage-type=silversea_expedition"
}if(b=="silversea_cruises"){a=a+"?voyage-type=silversea_cruise"
}}window.location.href=a;
return !1
}function adaptSliderNb(a){var b=$(".c-slider--style1").not(".c-slider--full-width");
if(b[a]!=undefined){$(b[a]).on("init",function(d,c){setTimeout(function(){$(b[a]).addClass("grey-dots");
$(b[a]).find(".slick-next").addClass("c-slider-black-arrow");
$(b[a]).find(".slick-prev").addClass("c-slider-black-arrow")
},2500)
});
$(b[a]).addClass("grey-dots");
$(b[a]).find(".slick-next").addClass("c-slider-black-arrow");
$(b[a]).find(".slick-prev").addClass("c-slider-black-arrow")
}}$(function(){settingWhySSCGallery={prevArrow:prevArrowCustom,nextArrow:nextArrowCustom,slidesToShow:1,slidesToScroll:1,autoplay:false,adaptiveHeight:true,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]};
if(typeof whySilverseaAutoSliderList!="undefined"){for(var i in whySilverseaAutoSliderList){var c=".c-whySilverseaLanding-inline-gallery-"+whySilverseaAutoSliderList[i].id,h=whySilverseaAutoSliderList[i].autoplayDesktop,f=whySilverseaAutoSliderList[i].autoplayMobile,d=whySilverseaAutoSliderList[i].autoSpeedSlider,a=whySilverseaAutoSliderList[i].disableLightboxDesktop,e=whySilverseaAutoSliderList[i].disableLightboxMobile,b=whySilverseaAutoSliderList[i].removeFirstVideoItemMobile;
if(_mobile&&f=="true"){settingWhySSCGallery.autoplay=true;
settingWhySSCGallery.autoplaySpeed=parseInt(d)
}else{if(!_mobile&&h=="true"){settingWhySSCGallery.autoplay=true;
settingWhySSCGallery.autoplaySpeed=parseInt(d)
}}if(_mobile&&e=="true"){$(c).find(".automatic-gallery-modal-ssc:not(.video-link)").each(function(){$(this).removeClass("automatic-gallery-modal-ssc");
$(this).removeClass("automatic-gallery-modal-open")
})
}else{if(!_mobile&&a=="true"){$(c).find(".automatic-gallery-modal-ssc:not(.video-link)").each(function(){$(this).removeClass("automatic-gallery-modal-ssc");
$(this).removeClass("automatic-gallery-modal-open")
})
}}$(c).slick("unslick").slick(settingWhySSCGallery);
if(_mobile&&b){$(c).slick("slickRemove","0")
}$(c).find(".slick-active").find(".lazy").lazy();
$(c).find(".slick-active").prev().find(".lazy").lazy();
$(c).find(".slick-active").next().find(".lazy").lazy();
$(c).on("afterChange",function(k,j,n){var m=$(this);
var l=m.find(".slick-active");
l.find(".lazy").lazy();
l.prev().find(".lazy").lazy();
l.prev().prev().find(".lazy").lazy();
l.next().find(".lazy").lazy();
l.next().next().find(".lazy").lazy();
setTimeout(function(){l.find(".lazy").lazy()
},50)
})
}}var g=(function g(){$(".c-whySilverseaLanding-inline-gallery .o-img").each(function(){var j=$(this);
var k=j.prop("currentSrc")||j.prop("src");
j.closest("div").css("background-image","url("+k+")");
j.css("visibility","hidden")
});
return g
})();
$("body").on("trigger.viewport.changed",function(){g()
});
$(".whySilverseaLanding .video-link-dam").on("click",function(m){m.preventDefault();
var j=$(this),l=j.attr("href"),n=j.data("target"),k=$(n);
k.modal("show");
k.on("shown.bs.modal",function(p){var o=$(this);
o.off("shown.bs.modal");
o.find(".modal-dialog").load(l,function(){$(this).find(".c-video").initVideo()
})
})
})
});
$(function(){$(".c-hero-banner-landing .video-link-dam").on("click",function(d){d.preventDefault();
var a=$(this),c=a.attr("href"),f=a.data("target"),b=$(f);
b.modal("show");
b.on("shown.bs.modal",function(h){var g=$(this);
g.off("shown.bs.modal");
g.find(".modal-dialog").load(c,function(){$(this).find(".c-video").initVideo()
})
})
});
$(".c-hero-banner-landing .c-hero-banner-landing-scrolldown").on("click",function(d){d.stopPropagation();
var c=$(this).closest(".herobannerLanding").next().offset().top;
var a=$(this).closest(".c-hero-banner-landing").height()!=null?$(this).closest(".c-hero-banner-landing").height():$(this).closest(".herobannerLanding").height();
var b=750;
$("html, body").animate({scrollTop:c-70},b)
})
});
function replaceInlineGallery(a,b){$inlineGalleryId=$(b);
if($(b).length>0){$(a+" .coverImage").after($inlineGalleryId);
$(a+" .coverImage").addClass("hidden-xs");
if($(a+" .c-slider--full-width").length>0){$(a+" .c-slider--full-width").addClass("hidden-xs")
}$inlineGalleryId.addClass("inside-hero-banner");
$inlineGalleryId.addClass("hidden-md hiddem-sm hidden-lg");
$(a+" .coverImage").css("display","inline-block");
$(a+" a.automatic-gallery-modal:not(.video-link)").removeClass("automatic-gallery-modal");
$(a+" a.automatic-gallery-modal.video-link").css("left","50%");
if(b.indexOf("c-inlinegallery-")>-1){setTimeout(function(){$inlineGalleryId.slick("unslick");
$inlineGalleryId.slick()
},10)
}$(a+"").delegate("a.automatic-gallery-modal.video-link","click",function(){var c=setInterval(function(){var d=$(".modal .modal-content--gallery .c-gallery");
var e=$(".modal .modal-content--gallery .c-gallery .c-slider");
if(d!=null&&d.length>0&&e!=null&&e.slick!=null&&e.hasClass("slick-initialized")){$(".modal .modal-content--gallery .c-gallery .c-slider").slick("slickSetOption","swipe",false,false);
setTimeout(function(){$(".modal .modal-content--gallery .c-gallery .c-slider").slick("slickSetOption","swipe",false,false)
},500);
clearInterval(c)
}},1000)
})
}}$(function(){$(".c-hero-banner-homepage .video-link-dam").on("click",function(d){d.preventDefault();
var a=$(this),c=a.attr("href"),f=a.data("target"),b=$(f);
b.modal("show");
b.on("shown.bs.modal",function(h){var g=$(this);
g.off("shown.bs.modal");
g.find(".modal-dialog").load(c,function(){$(this).find(".c-video").initVideo()
})
})
});
$(".c-hero-banner-homepage .c-hero-banner-homepage__scrolldown").on("click",function(d){d.stopPropagation();
var c=$(this).closest(".heroBannerDestinationND").next().offset().top;
var a=$(this).closest(".c-hero-banner-homepage").height()!=null?$(this).closest(".c-hero-banner-homepage").height():$(this).closest(".heroBannerDestinationND").height();
var b=750;
$("html, body").animate({scrollTop:c-70},b)
});
createLineProgressBar();
$(".c-slider .coverImage").addClass("insideSlider")
});
$(function(){if($(window).width()>991){$(".heroBannerDestinationND.parbase").each(function(){var e=$(this);
var c=e.find(".hero-banner-clickable-true").length>0;
var i=e.find(".parbase");
var g=i.length==1;
if(g&&c){var b=null,f=null;
var d=i.find("a");
d.each(function(){var k=$(this);
var j=k.css("display")!="none";
if(j){b=k.attr("href");
f=k.attr("target")
}});
var h=b!=null;
if(h){var a=$("<a class='herobannerCliccable' alt='heroBannerCliccable' href='"+b+"'></a>");
if(f!=null){a.attr("target",f)
}e.append(a)
}}})
}$(".c-hero-banner-destination .video-link-dam").on("click",function(d){d.preventDefault();
var a=$(this),c=a.attr("href"),f=a.data("target"),b=$(f);
b.modal("show");
b.on("shown.bs.modal",function(h){var g=$(this);
g.off("shown.bs.modal");
g.find(".modal-dialog").load(c,function(){$(this).find(".c-video").initVideo()
})
})
});
$(".c-hero-banner-destination .c-hero-banner-destination__scrolldown").on("click",function(d){d.stopPropagation();
var c=$(this).closest(".heroBannerDestinationND").next().offset().top;
var a=$(this).closest(".c-hero-banner-destination").height()!=null?$(this).closest(".c-hero-banner-destination").height():$(this).closest(".heroBannerDestinationND").height();
var b=750;
$("html, body").animate({scrollTop:c-70},b)
});
createLineProgressBar()
});
function createLineProgressBar(){var c=$(window).width();
var b=$(".c-hero-banner-homepage ul.slick-dots li");
var d=b.length;
var a=((c/d));
b.css("width",a+"px")
}$(window).resize(sscThrottled(createLineProgressBar));
$(function(){$(".c-presentationDMPLanding .video-link-dam").on("click",function(d){d.preventDefault();
var a=$(this),c=a.attr("href"),f=a.data("target"),b=$(f);
b.modal("show");
b.on("shown.bs.modal",function(h){var g=$(this);
g.off("shown.bs.modal");
g.find(".modal-dialog").load(c,function(){$(this).find(".c-video").initVideo()
})
})
})
});
$(function(){$(".c-inline-gallery-landing .row .c-inline-gallery__item-expander a").on("click",function(g){g.preventDefault();
var b=$(this),f=b.closest(".row");
var d=0;
var c=(f.children(".c-inline-gallery-featured.display").length)-1;
if(f.hasClass("open")){f.css("height",f.outerHeight());
f.animate({height:f.find("> div").first().outerHeight()},600,function(){var e=f.closest(".c-cruise-ship-info").length?1:c;
f.css("height",f.height()).find("> div:gt("+e+"):not(.c-inline-gallery__item-expander)").hide();
$(this).css("height","").removeClass("open");
$("html, body").animate({scrollTop:f.offset().top-$(".c-header__container").height()},0)
})
}else{f.css("height",f.height()).find("> div").show();
f.children().each(function(){d=d+$(this).outerHeight(true)
});
d=d*(f.children(".c-inline-gallery-featured").length);
f.find(".lazy").lazy();
f.animate({height:d},1000,function(){$(this).css("height","").addClass("open")
})
}});
$(".c-inline-gallery-landing .row").find(".lazy").lazy();
$(".c-inline-gallery-landing .c-inline__gallery .c-inline-gallery__item-expander a").on("click",function(g){g.preventDefault();
var b=$(this),f=b.closest(".c-inline__gallery");
var d=0;
var c=(f.children(".c-inline__gallery__featured.clearfix.display").length)-1;
if(f.hasClass("open")){f.css("height",f.outerHeight());
f.animate({height:f.find("> div").first().outerHeight()},600,function(){var e=f.closest(".c-cruise-ship-info").length?1:c;
f.css("height",f.height()).find("> div:gt("+e+"):not(.c-inline-gallery__item-expander)").hide();
$(this).css("height","").removeClass("open");
$("html, body").animate({scrollTop:f.offset().top-$(".c-header__container").height()},0)
})
}else{f.css("height",f.height()).find("> div").show();
f.children().each(function(){d=d+$(this).outerHeight(true)
});
f.find(".lazy").lazy();
f.animate({height:d},1000,function(){$(this).css("height","").addClass("open")
})
}});
$(".c-inline-gallery-landing .c-inline__gallery").find(".lazy").lazy();
$(".c-inline-gallery-landing .c-slider .c-inline__gallery .c-inline__gallery__featured .c-inline__gallery__featured__left").find(".lazy").lazy();
$(".c-inline-gallery-landing .c-slider .c-inline__gallery .c-inline__gallery__featured .c-inline__gallery__featured__right").find(".lazy").lazy();
$(".c-inline-gallery-landing .c-inline-gallery-slider__image-wrapper").find(".lazy").lazy();
$(".c-inline-gallery-landing .automatic-gallery-video-modal").on("click",function(f){f.preventDefault();
var b=$(this),d=b.closest("[data-video-gallery-path]").data("video-gallery-path"),g=b.data("target"),c=$(g);
c.modal("show");
c.on("shown.bs.modal",function(i){var h=$(this);
h.off("shown.bs.modal");
h.find(".modal-dialog").load(d,function(){var k=h.find(".c-slider--for").slick({slidesToShow:1,slidesToScroll:1,asNavFor:".modal .c-slider--nav"});
var l=h.find(".c-slider--nav").slick({slidesToShow:6,slidesToScroll:5,asNavFor:".modal .c-slider--for",focusOnSelect:true});
h.find(".cruise-gallery-virtual-tour").on("click",function(m){createVirtualTour(this,m)
});
$(".video-link").on("click",function(m){m.preventDefault();
$(this).next(".c-video").initVideo()
});
var j=k.find(".slick-slide:not(.slick-cloned)").length;
k.closest(".c-gallery__wrappertop").find(".c-gallery__counter .slide-item-total").html(j);
k.on("beforeChange",function(o,n,r,p){var q=$(this);
q.closest(".c-gallery__wrappertop").find(".c-gallery__counter .slide-item-current").html(p+1);
var m=q.find(".slick-current .c-video");
m.find('.s7playpausebutton[selected="false"]').trigger("click");
m.attr("class","c-video").empty();
a($(this))
}).on("afterChange",function(n,m,o){a($(this))
});
var e=b.attr("href");
$(".c-slider--for").slick("slickSetOption","draggable",true,false);
$(".c-slider--for").slick("slickSetOption","swipe",true,false);
k.slick("slickGoTo",k.find('.slick-slide:not(".slick-cloned")[data-image="'+e+'"]').first().data("slick-index"),false)
})
})
});
$(".c-inline__gallery-slider").on("afterChange",function(c,b,f){var e=$(this);
var d=e.find(".slick-active");
d.find(".lazy").lazy();
d.prev().find(".lazy").lazy();
d.prev().prev().find(".lazy").lazy();
d.next().find(".lazy").lazy();
d.next().next().find(".lazy").lazy();
setTimeout(function(){d.find(".lazy").lazy()
},50)
});
function a(c){var b=c.closest(".c-gallery").find(".slick-active");
$(".c-slider--for").slick("slickSetOption","draggable",true,false);
$(".c-slider--for").slick("slickSetOption","swipe",true,false);
b.find(".lazy").lazy();
b.prev().find(".lazy").lazy();
b.prev().prev().find(".lazy").lazy();
b.next().find(".lazy").lazy();
b.next().next().find(".lazy").lazy();
setTimeout(function(){b.find(".lazy").lazy()
},50)
}});
$(function(){var b=$(".c-singleVoyageCards-slider").data("num-cards")!=null?$(".c-singleVoyageCards-slider").data("num-cards"):"4";
settingSingleVoyageCards={slidesToShow:b,slidesToScroll:b,dots:true,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]};
$(".c-singleVoyageCards-slider").slick("unslick").slick(settingSingleVoyageCards);
a();
function a(){if($(".singleVoyageCardsNewDesign2018.c-singleVoyageCards").lenght>0){var e=$(window).width();
var d=$(".singleVoyageCardsNewDesign2018.c-singleVoyageCards ul.slick-dots li");
var f=d.length;
var c=((e/f));
d.css("width",c+"px")
}}});
$(function(){window.sortMozaicDestSlider=function(f){try{if($(".c-mozaic").length>0&&typeof window.destinationsOrder!="undefined"){var e="";
e=window.destinationsOrder.split(";");
if(e.length>0){if($('.c-mozaic:not(".c-mozaic-nine") .c-mozaic__slider').length>0){$(".c-mozaic .c-mozaic__slider").slick("unslick");
var k=$('.c-mozaic:not(".c-mozaic-nine") .c-mozaic__slider');
for(var b=0;
b<e.length;
b++){var j=e[b];
if(j!=""){$(".c-mozaic .c-mozaic__slider").find("[data-ssc-mozaic='"+j+"']").each(function(){$(this).not(".c-mozaic__slider__slide--cloned").attr("data-ssc-mozaic-order",b+1)
})
}}$tickets=k.find(".c-mozaic__slider__slide.msname").detach();
var a=e.length+1;
$tickets.each(function(i){if($(this).attr("data-ssc-mozaic-order")==undefined){$(this).attr("data-ssc-mozaic-order",a);
a=a+1
}});
$tickets=$tickets.sort(function(m,l){var i=1*$(m).attr("data-ssc-mozaic-order"),n=1*$(l).attr("data-ssc-mozaic-order");
return i-n
});
k.html($tickets);
k.find(".c-mozaic__slider__slide:nth-child(5n + 1)").after('<div class="c-mozaic__slider__slide c-mozaic__slider__slide--cloned"></div>');
function d(){return($.viewportDetect()==="md"||$.viewportDetect()==="lg")
}var h={dots:true,fade:true,rows:2,slidesPerRow:3},c={dots:true};
if(d()){k.slick(h)
}else{k.slick(c).slick("slickFilter",":not(.c-mozaic__slider__slide--cloned)")
}}if($(".c-mozaic-nine .c-mozaic__slider").length>0){$(".c-mozaic-nine .c-mozaic__slider").slick("unslick");
var k=$(".c-mozaic-nine .c-mozaic__slider");
for(var b=0;
b<e.length;
b++){var j=e[b];
if(j!=""){$(".c-mozaic-nine .c-mozaic__slider").find("[data-ssc-mozaic='"+j+"']").each(function(){$(this).not(".c-mozaic__slider__slide--cloned").attr("data-ssc-mozaic-order",b+1)
})
}}$tickets=k.find(".c-mozaic__slider__slide.msname").detach();
var a=e.length+1;
$tickets.each(function(i){if($(this).attr("data-ssc-mozaic-order")==undefined){$(this).attr("data-ssc-mozaic-order",a);
a=a+1
}});
$tickets=$tickets.sort(function(m,l){var i=1*$(m).attr("data-ssc-mozaic-order"),n=1*$(l).attr("data-ssc-mozaic-order");
return i-n
});
k.html($tickets);
function d(){return($.viewportDetect()==="md"||$.viewportDetect()==="lg")
}var h={prevArrow:prevArrowCustomBlack,nextArrow:nextArrowCustomBlack,dots:true,fade:true,rows:3,slidesPerRow:3},c={dots:true};
if(d()){k.slick(h)
}else{k.slick(c).slick("slickFilter",":not(.c-mozaic__slider__slide--cloned)")
}}}}}catch(g){console.error(g)
}};
window.sortMozaicDestSlider()
});
$(function(){if($(".c-inlinegallery").length>0){a();
window.createInlineGallerySlider=a;
function a(){var i=parseInt($(".c-inlinegallery").data("number-items-desktop"));
var h=parseInt($(".c-inlinegallery").data("number-items-tablet"));
var g=parseInt($(".c-inlinegallery").data("number-items-mobile"));
numberOfItemDeskScroll=i;
if(typeof forceBiggerWidth!="undefined"){if(forceBiggerWidth=="true"){numberOfItemDeskScroll=i-2
}}numberOfItemTabScroll=h-2;
h=h-2;
numberOfItemMobScroll=g;
if(numberOfItemDeskScroll<=0){numberOfItemDeskScroll=1
}if(numberOfItemTabScroll<=0){numberOfItemTabScroll=1
}if(h<=0){h=1
}if(numberOfItemMobScroll<=0){numberOfItemMobScroll=1
}var c={arrows:true,dots:true,infinite:true,adaptiveHeight:true,slidesToShow:i,slidesToScroll:numberOfItemDeskScroll,responsive:[{breakpoint:991,settings:{slidesToShow:h,slidesToScroll:numberOfItemTabScroll}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,arrows:false,dots:false}}]};
if($(window).width()>767&&typeof forceBiggerWidth!="undefined"){if(forceBiggerWidth=="true"){$(".c-inlinegallery").slick("unslick");
var f=$(".c-inlinegallery > div").last().html();
$(".c-inlinegallery > div").last().toggleClass("toNotDisplay");
$(".c-inlinegallery").prepend("<div>"+f+"</div>")
}}$(".c-inlinegallery").slick("unslick").slick(c).slick("slickFilter",":not(.toNotDisplay)").on("afterChange",function(k,j,l){b()
});
d();
b();
wig=$(window).width();
$(window).resize(sscThrottled(d));
var e=(function e(){$(".c-inline-gallery .o-img").each(function(){var j=$(this);
var k=j.prop("currentSrc")||j.prop("src");
j.closest("div").css("background-image","url("+k+")");
j.css("visibility","hidden")
});
return e
})();
$("body").on("trigger.viewport.changed",function(){e()
});
function d(){$(".c-inlinegallery").each(function(){var k=$(this).find(".slick-list").width();
if($("body").hasClass("viewport-md")||$("body").hasClass("viewport-lg")){if(k>930){k=930
}}else{if($("body").hasClass("viewport-sm")){if(k>768){k=630
}}}var l=$(this).find("ul.slick-dots li").length;
var j=((k/l)-1);
if($("body").hasClass("viewport-md")||$("body").hasClass("viewport-lg")){$(this).find("ul.slick-dots li").css("width",j+"px")
}else{if($("body").hasClass("viewport-sm")){$(this).find("ul.slick-dots li").css("width",j+"px")
}}})
}function b(){$(".c-inlinegallery").each(function(){$(this).find(".slick-active").find(".lazy").lazy();
$(this).find(".slick-active:first").prev().find(".lazy").lazy();
$(this).find(".slick-active:last").next().find(".lazy").lazy();
$(this).find(".slick-active:first").prev().prev().find(".lazy").lazy();
$(this).find(".slick-active:last").next().next().find(".lazy").lazy();
$(this).find(".slick-active:first").prev().prev().prev().find(".lazy").lazy();
$(this).find(".slick-active:last").next().next().next().find(".lazy").lazy();
setTimeout(function(){$(this).find(".slick-active").find(".lazy").lazy()
},500)
})
}}}});
$(function(){$(".c-destinationSlider .c-destinationSlider__slider").each(function(){var d=$(this);
if(d.attr("data-ssc-row")=="1"){settingDesktopDest={arrows:true,dots:true,slidesToShow:parseInt(d.attr("data-ssc-element")),slidesToScroll:parseInt(d.attr("data-ssc-element"))}
}else{settingDesktopDest={arrows:true,dots:true,rows:parseInt(d.attr("data-ssc-row")),slidesPerRow:parseInt(d.attr("data-ssc-element"))}
}settingMobileDest={dots:true};
function b(){return $(window).width()>767
}var c=(function c(){if(!d.hasClass("fillup")&&b()){var e=d.find(".c-destinationSlider__slider__slide").length%parseInt(d.attr("data-ssc-total"));
if(e!=0){e=parseInt(d.attr("data-ssc-total"))-e
}if(e!==0){for(var f=0;
f<e;
f++){d.find(".c-destinationSlider__slider__slide:not(.c-destinationSlider__slide--cloned--cloned)").eq(f).clone().addClass("c-destinationSlider__slide--cloned").appendTo(d)
}}d.addClass("fillup")
}return c
}());
d.on("init",function(f,e){d.closest(".c-mozaic").css("visibility","visible")
});
if(b()){d.attr("isDesktop","true");
d.slick(settingDesktopDest)
}else{d.attr("isDesktop","false");
d.slick(settingMobileDest).slick("slickFilter",":not(.c-destinationSlider__slide--cloned)")
}$("body").on("trigger.viewport.changed",function(){if(b()){if(d.attr("isDesktop")=="false"){if(d.attr("data-ssc-row")=="1"){settingDesktopDest={arrows:true,dots:true,slidesToShow:parseInt(d.attr("data-ssc-element")),slidesToScroll:parseInt(d.attr("data-ssc-element"))}
}else{settingDesktopDest={arrows:true,dots:true,rows:parseInt(d.attr("data-ssc-row")),slidesPerRow:parseInt(d.attr("data-ssc-element"))}
}d.attr("isDesktop","true");
d.slick("unslick");
c();
d.slick(settingDesktopDest)
}}else{if(d.attr("isDesktop")=="true"){d.attr("isDesktop","false");
d.removeClass("fillup");
d.slick("unslick").slick(settingMobileDest).slick("slickFilter",":not(.c-destinationSlider__slide--cloned)")
}}});
$(".c-destinationSlider-slide-small-inner__description-title").each(function(){var e=$(this).html();
e=e.toLowerCase();
$(this).html(e)
})
});
wdest=$(window).width();
function a(){$(".c-destinationSlider").each(function(){var c=$(this).find(".slick-list").width();
if($("body").hasClass("viewport-md")||$("body").hasClass("viewport-lg")){if(c>930){c=930
}}else{if($("body").hasClass("viewport-sm")){if(c>768){c=630
}}else{if($("body").hasClass("viewport-xs")){c=c
}}}var d=$(this).find("ul.slick-dots li").length;
var b=((c/d)-1);
if($("body").hasClass("viewport-md")||$("body").hasClass("viewport-lg")){$(this).find("ul.slick-dots li").css("width",b+"px")
}else{if($("body").hasClass("viewport-sm")){$(this).find("ul.slick-dots li").css("width",b+"px")
}else{if($("body").hasClass("viewport-xs")){$(this).find("ul.slick-dots li").css("width",b+"px")
}}}})
}a();
$(window).resize(sscThrottled(a))
});
$(function(){$(".c-smartbtn.video-link-dam").on("click",function(d){d.preventDefault();
var a=$(this),c=a.data("video-href"),f=a.data("target-video"),b=$(f);
b.modal("show");
b.on("shown.bs.modal",function(h){var g=$(this);
g.off("shown.bs.modal");
g.find(".modal-dialog").load(c,function(){$(this).find(".c-video").initVideo()
})
})
})
});
$(function(){if($(".c-smarttext").length>0){$(".readMoreDesktopTrigger").on("click",function(){$(this).fadeOut();
$(this).closest(".c-smarttext").find(".readMoreDesktopContent").slideDown()
});
$(".readMoreMobileTrigger").on("click",function(){$(this).fadeOut();
$(this).closest(".c-smarttext").find(".readMoreMobileContent").slideDown()
})
}});
$(function(){function a(){var c={prevArrow:'<button type="button" class="slick-prev teaser_big__slick-prev">Previous</button>',nextArrow:'<button type="button" class="slick-next teaser_big__slick-next">Next</button>',arrows:true,dots:false,infinite:true,adaptiveHeight:false,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:600,settings:{adaptiveHeight:false,slidesToShow:1,slidesToScroll:1,arrows:false,dots:true}}]};
$(".c-teaserbig.activate-progressbar").slick("unslick").slick(c).slick("slickFilter",":not(.toNotDisplay)");
var d=(function d(){$(".activate-progressbar .o-img").each(function(){var f=$(this);
var g=f.prop("currentSrc")||f.prop("src");
f.closest("div").css("background-image","url("+g+")");
f.css("visibility","hidden")
});
return d
})();
$("body").on("trigger.viewport.changed",function(){d()
});
var b=(function(){return function(){$bg=$(".c-teaserbig__bg");
$bg.css("height",$bg.closest(".c-teaserbig__container").height()+50+"px")
}
})();
var e=(function(){return function(){var f=$(".activate-progressbar .slick-list");
f.each(function(){var k=$(this);
var j=k.parent().find(".slick-dots").width();
var i=$("body");
if(i.hasClass("viewport-md")||i.hasClass("viewport-lg")){if(j>930){j=930
}}else{if(i.hasClass("viewport-sm")){if(j>768){j=630
}}}var h=k.parent().find("ul.slick-dots li");
var l=h.length;
var g=Math.floor(j/l)-1;
h.css("width",g+"px")
})
}
})();
b();
e();
$(window).resize(sscThrottled(function(){b();
e()
}));
$(document).on("click",".c-teaserbig__full-gallery",function(g){g.preventDefault();
var f=$(".c-teaserbig__container .slick-current a");
f.click()
})
}a()
});
$(function(){if($(".c-exclusiveOfferListND .c-exclusiveOfferListND__slider").length>0){$(".c-exclusiveOfferListND .c-exclusiveOfferListND__slider").each(function(){var a=$(this);
var e=parseInt(a.data("number-items-desktop"));
var d=parseInt(a.data("number-items-tablet"));
var c=parseInt(a.data("number-items-mobile"));
var b={dots:true,slidesToShow:e,slidesToScroll:e,responsive:[{breakpoint:991,settings:{slidesToShow:d,slidesToScroll:d}},{breakpoint:768,settings:{slidesToShow:c,slidesToScroll:c}}]};
a.slick("unslick").slick(b)
})
}});