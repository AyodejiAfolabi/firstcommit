let datt=new Date().hour;
console.log(datt)

let scores=0;

	let a=0
	let b=0
	let c=0;
	let d=0;
	let e=0;
	let f=0;
	let g=0;
	let h=0;
	let i=0;
	let j=0;
	let jj=0;
	let k=0;
	a1=()=>{
		a=1;

	}
	a2=()=>{
		a=0;

	}
	a3=()=>{
		a=0;

	}
	a4=()=>{
		a=0;

	}
	
	b1=()=>{
		b=0;

	}
	b2=()=>{
		b=0;

	}
	b3=()=>{
		b=1;

	}
	b4=()=>{
		b=0;

	}
	c1=()=>{
		c=0;

	}
	c2=()=>{
		c=0;

	}
	c3=()=>{
		c=1;

	}
	c4=()=>{
		c=0;

	}


	d1=()=>{
		d=0;
	}
	d2=()=>{
		d=1;

	}
	d3=()=>{
		d=0;

	}
	d4=()=>{
		d=0;

	}

	e1=()=>{
		e=0;

	}
	e2=()=>{
		e=0;

	}
	e3=()=>{
		e=0;

	}
	e4=()=>{
		e=1;

	}

	f1=()=>{
		f=0;
	}
	f2=()=>{
		f=0;
	}
	f3=()=>{
		f=1;
	}
	f4=()=>{
		f=0;
	}

	g1=()=>{
		g=0;
	}
	g2=()=>{
		g=1;
	}
	g3=()=>{
		g=0;
	}
	g4=()=>{
		g=0;
	}
	h1=()=>{
		h=1;

	}
	h2=()=>{
		h=0;

	}
	h3=()=>{
		h=0;

	}
	h4=()=>{
		h=0;

	}
		i1=()=>{
		i=0;

	}
	i2=()=>{
		i=0;

	}
	i3=()=>{
		i=0;

	}
	i4=()=>{
		i=1;

	}
	j1=()=>{
		j=0;

	}
	j2=()=>{
		j=1;

	}
	j3=()=>{
		j=0;

	}
	j4=()=>{
		j=0;

	}

	j11=()=>{
		jj=0;

	}
	j22=()=>{
		jj=0;

	}
	j33=()=>{
		jj=1;

	}
	j44=()=>{
		jj=0;

	}
	k1=()=>{
		k=1;

	}
	k2=()=>{
		k=0;

	}
	k3=()=>{
		h=0;

	}
	k4=()=>{
		k=0;

	}
	
	
	prp=()=>{
		
	
		let scor=[a,b,c,d,e,f,g,h,i,j,jj,k];
		let score=JSON.stringify(scor)

		 // let ds=score[9];
		 // localStorage.setItem('scor',ds);
localStorage.setItem('scores',score);
(score)
	
	}
	cap=()=>{
		sur.value=sur.value.toUpperCase()
		fir.value=fir.value.toUpperCase()
	}
	time=()=>{
	let sec=secdisp.innerHTML;
	sec--;
	secdisp.innerHTML=sec;	
	let min= mindisp.innerHTML;
	if (sec<10) {
		secdisp.innerHTML='0'+secdisp.innerHTML;
	}

	if (sec<0) {
		let min= mindisp.innerHTML;

		secdisp.innerHTML=59;
		
		min--;
		mindisp.innerHTML=min
	}
	
	if ((sec==0)&& min==0) {
		clearInterval(start)
	}

	if (sec==0 && min==0) {
		prp();
	clearInterval(time)
	window.location.replace('ggg.html')
		window.location.href=('result.html')
	
		
	}
}



let start=setInterval(time,1000)

	
let cool=window.location.href;
console.log(cool)
