

var action = document.getElementById('btn1');
var close = document.getElementById('fermer');
	action.addEventListener("click", function(){
		var etat = document.getElementById('detail').style.visibility;
		if(etat=="visible"){
		document.getElementById('detail').style.visibility="hidden";
		}
		else{
			document.getElementById('detail').style.visibility="visible";			
		}
	}, true);
		close.addEventListener("click", function(){
			var etat = document.getElementById('detail').style.visibility;
			if(etat=="visible"){
			document.getElementById('detail').style.visibility="hidden";
			}
			else{
				document.getElementById('detail').style.visibility="visible";				
			}
		}, true);
        

        var action2 = document.getElementById('btn2');
        var close2 = document.getElementById('fermer2');
            action2.addEventListener("click", function(){
                var etat = document.getElementById('detail2').style.visibility;
                if(etat=="visible"){
                document.getElementById('detail2').style.visibility="hidden";
                }
                else{
                    document.getElementById('detail2').style.visibility="visible";			
                }
            }, true);
                close2.addEventListener("click", function(){
                    var etat = document.getElementById('detail2').style.visibility;
                    if(etat=="visible"){
                    document.getElementById('detail2').style.visibility="hidden";
                    }
                    else{
                        document.getElementById('detail2').style.visibility="visible";				
                    }
                }, true);


                var action3 = document.getElementById('btn3');
                var close3 = document.getElementById('fermer3');
                    action3.addEventListener("click", function(){
                        var etat = document.getElementById('detail3').style.visibility;
                        if(etat=="visible"){
                        document.getElementById('detail3').style.visibility="hidden";
                        }
                        else{
                            document.getElementById('detail3').style.visibility="visible";			
                        }
                    }, true);
                        close3.addEventListener("click", function(){
                            var etat = document.getElementById('detail3').style.visibility;
                            if(etat=="visible"){
                            document.getElementById('detail3').style.visibility="hidden";
                            }
                            else{
                                document.getElementById('detail3').style.visibility="visible";				
                            }
                        }, true);






                        
                // var action = document.getElementById('btn1');
                // var close = document.getElementById('fermer3');
                // var action2 = document.getElementById('btn2');
                // var close2 = document.getElementById('fermer3');
                // var action3 = document.getElementById('btn');
                // var close3 = document.getElementById('fermer3');
                // action.addEventListener("click", function(){
                //     if(etat=="visible"){
                //         document.getElementById('detail').style.visibility="hidden";
                //         }
                //         else{
                //             document.getElementById('detail').style.visibility="visible";				
                //         }
                //     action2.addEventListener("click", function(){
                //         if(etat=="visible"){
                //             document.getElementById('detail2').style.visibility="hidden";
                //             }
                //             else{
                //                 document.getElementById('detail2').style.visibility="visible";				
                //             }
                //         action3.addEventListener("click", function(){
                //             if(etat=="visible"){
                //                 document.getElementById('detail3').style.visibility="hidden";
                //                 }
                //                 else{
                //                     document.getElementById('detail3').style.visibility="visible";				
                //                 }
                //         }, true);
                //     }, true);
                // },true);
                // close3.addEventListener("click", function(){
                //     if(etat=="visible"){
                //         document.getElementById('detail').style.visibility="hidden";
                //         }
                //         else{
                //             document.getElementById('detail').style.visibility="visible";				
                //         }
                //     close3.addEventListener("click", function(){
                //         if(etat=="visible"){
                //             document.getElementById('detail2').style.visibility="hidden";
                //             }
                //             else{
                //                 document.getElementById('detail2').style.visibility="visible";				
                //             }
                //         close3.addEventListener("click", function(){
                //             if(etat=="visible"){
                //                 document.getElementById('detail3').style.visibility="hidden";
                //                 }
                //                 else{
                //                     document.getElementById('detail3').style.visibility="visible";				
                //                 }
                //         },true);
                //     }, true);
                // }, true);