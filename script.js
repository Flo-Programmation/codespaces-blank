

//Global Variables
const sections     = document.querySelectorAll('section');
const links        = document.querySelectorAll('.link');
const nav          = document.querySelector('nav');
const navPos       = nav.getBoundingClientRect(); //Position of navBar
const scrollMargin = 45; //50px - 42px navBar height +2px security

//Update hash when link is active
function updateHash(hash) {
	const currentHash = window.location.hash;
	currentHash != hash && window.history.replaceState(null, null, hash);
}

window.onscroll = () => {
	sections.forEach((section, index) => {
		//Position of section
		const sectionPos = section.getBoundingClientRect(); 

		if (sectionPos.top   <= navPos.bottom + scrollMargin 
		&& sectionPos.bottom >= navPos.bottom) {
			//remove active class from all links
			links.forEach((link) => link.classList.remove('active'));
			//add active class to current link
			links[index].classList.add('active');
			const hash = links[index].getAttribute('href');
			updateHash(hash);
		}
	});
};


function getAge(date) { 
    var diff = Date.now() - date.getTime();
    var age = new Date(diff); 
    return Math.abs(age.getUTCFullYear() - 1970);
}
var mon_age = document.getElementById('my_age').value=getAge(new Date(2005, 03, 23)); //Date(année, mois, jour)


				
var action = document.getElementById('btn1');
var close = document.getElementById('fermer');
	action.addEventListener("click", function(){
		var etat = document.getElementById('detail').style.visibility;
		if(etat=="visible"){
		document.getElementById('detail').style.visibility="hidden";
		}
		else{
			document.getElementById('detail').style.visibility="visible";					
			document.documentElement.style.overflow = 'hidden';			
		}
	}, true);
		close.addEventListener("click", function(){
			var etat = document.getElementById('detail').style.visibility;
			if(etat=="visible"){
			document.getElementById('detail').style.visibility="hidden";				
			document.documentElement.style.overflow = 'visible';
			}
			else{
				document.getElementById('detail').style.visibility="visible";				
			}
		}, true);
		// var action2 = document.getElementById('btn2');
        // var close2 = document.getElementById('fermer2');
        //     action2.addEventListener("click", function(){
        //         var etat = document.getElementById('detail2').style.visibility;
        //         if(etat=="visible"){
        //         document.getElementById('detail2').style.visibility="hidden";
        //         }
        //         else{
        //             document.getElementById('detail2').style.visibility="visible";	
		// 			document.documentElement.style.overflow = 'hidden';			
        //         }
        //     }, true);
        //         close2.addEventListener("click", function(){
        //             var etat = document.getElementById('detail2').style.visibility;
        //             if(etat=="visible"){
        //             document.getElementById('detail2').style.visibility="hidden";
		// 			document.documentElement.style.overflow = 'visible';
        //             }
        //             else{
        //                 document.getElementById('detail2').style.visibility="visible";				
        //             }
        //         }, true);
                var action3 = document.getElementById('btn3');
                var close3 = document.getElementById('fermer3');
                    action3.addEventListener("click", function(){
                        var etat = document.getElementById('detail3').style.visibility;
                        if(etat=="visible"){
                        document.getElementById('detail3').style.visibility="hidden";
                        }
                        else{
                            document.getElementById('detail3').style.visibility="visible";
							document.documentElement.style.overflow = 'hidden';				
                        }
                    }, true);
                        close3.addEventListener("click", function(){
                            var etat = document.getElementById('detail3').style.visibility;
                            if(etat=="visible"){
                            document.getElementById('detail3').style.visibility="hidden";
							document.documentElement.style.overflow = 'visible';
                            }
                            else{
                                document.getElementById('detail3').style.visibility="visible";				
                            }
                        }, true);
						var action4 = document.getElementById('btn4');
						var close4 = document.getElementById('fermer4');
							action4.addEventListener("click", function(){
								var etat = document.getElementById('detail4').style.visibility;
								if(etat=="visible"){
								document.getElementById('detail4').style.visibility="hidden";
								}
								else{
									document.getElementById('detail4').style.visibility="visible";	
									document.documentElement.style.overflow = 'hidden';			
								}
							}, true);
								close4.addEventListener("click", function(){
									var etat = document.getElementById('detail4').style.visibility;
									if(etat=="visible"){
									document.getElementById('detail4').style.visibility="hidden";
									document.documentElement.style.overflow = 'visible';
									}
									else{
										document.getElementById('detail4').style.visibility="visible";				
									}
								}, true);
								var action5 = document.getElementById('btn5');
								var close5 = document.getElementById('fermer5');
									action5.addEventListener("click", function(){
										var etat = document.getElementById('detail5').style.visibility;
										if(etat=="visible"){
										document.getElementById('detail5').style.visibility="hidden";
										}
										else{
											document.getElementById('detail5').style.visibility="visible";
											document.documentElement.style.overflow = 'hidden';				
										}
									}, true);
										close5.addEventListener("click", function(){
											var etat = document.getElementById('detail5').style.visibility;
											if(etat=="visible"){
											document.getElementById('detail5').style.visibility="hidden";
											document.documentElement.style.overflow = 'visible';
											}
											else{
												document.getElementById('detail5').style.visibility="visible";				
											}
										}, true);
										var action6 = document.getElementById('btn6');
										var close6 = document.getElementById('fermer6');
											action6.addEventListener("click", function(){
												var etat = document.getElementById('detail6').style.visibility;
												if(etat=="visible"){
												document.getElementById('detail6').style.visibility="hidden";
												}
												else{
													document.getElementById('detail6').style.visibility="visible";			
													document.documentElement.style.overflow = 'hidden';	
												}
											}, true);
												close6.addEventListener("click", function(){
													var etat = document.getElementById('detail6').style.visibility;
													if(etat=="visible"){
													document.getElementById('detail6').style.visibility="hidden";
													document.documentElement.style.overflow = 'visible';
													}
													else{
														document.getElementById('detail6').style.visibility="visible";				
													}
												}, true);