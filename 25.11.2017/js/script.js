document.write('<div class="chees">')
document.write('<div class="row">')

	for(var b=0; b<4;b++){
		if(b==0){
			for(var i=0; i<8; i++){
				if(i==0 || i==7){
					if(i%2==0){
						document.write('<div class="white">&#9820</div>')
					}
					else{
						document.write('<div class="black">&#9820</div>')
					}
				}
				if(i==1 || i==6){
					if(i%2==0){
						document.write('<div class="white">&#9822</div>')
					}
					else{
						document.write('<div class="black">&#9822</div>')
					}

				}
				if(i==2 || i==5){
					if(i%2==0){
						document.write('<div class="white">&#9821</div>')
					}
					else{
						document.write('<div class="black">&#9821</div>')
					}

				}
				if(i==3 || i==4){
					if(i%2==0){
						document.write('<div class="white">&#9819</div>')
					}
					else{
						document.write('<div class="black">&#9818</div>')
					}

				}
			}
		}
		else{
			if(b==3){
				for(var i=0; i<8; i++){
					if(i%2==0){
						document.write('<div class="white">&#9817</div>')
					}
					else{
						document.write('<div class="black">&#9817</div>')
					}
				}

			}
			else{
				for(var i=0; i<8; i++){
					if(i%2==0){
						document.write('<div class="white"></div>')
					}
					else{
						document.write('<div class="black"></div>')
					}
				}
			}
			
		}
		if(b==0){
			for(var i=0; i<8; i++){
				if(i%2!=0){
					document.write('<div class="white">&#9823</div>')
				}
				else{
					document.write('<div class="black">&#9823</div>')
				}
			}
		}
		else{
			if(b==3){
				for(var i=0; i<8; i++){
					if(i==0 || i==7){
						if(i%2!=0){
						document.write('<div class="white">&#9814</div>')
						}
						else{
							document.write('<div class="black">&#9814</div>')
						}
					}
					if(i==1 || i==6){
						if(i%2!=0){
						document.write('<div class="white">&#9816</div>')
						}
						else{
							document.write('<div class="black">&#9816</div>')
						}
					}
					if(i==2 || i==5){
						if(i%2!=0){
						document.write('<div class="white">&#9815</div>')
						}
						else{
							document.write('<div class="black">&#9815</div>')
						}
					}
					if(i==3 || i==4){
						if(i%2!=0){
						document.write('<div class="white">&#9813</div>')
						}
						else{
							document.write('<div class="black">&#9812</div>')
						}
					}									
				}
			}
			else{
				for(var i=0; i<8; i++){
					if(i%2!=0){
						document.write('<div class="white"></div>')
					}
					else{
						document.write('<div class="black"></div>')
					}
				}

			}			
		}
	}

document.write('</div>')
document.write('</div>')