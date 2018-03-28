
			// L'orsque l'on clique sur un onglet .	
		var tabs = document.querySelectorAll('.tabs a')
		for(i=0;i<tabs.length;i++){
			tabs[i].addEventListener('click',function(e){
				var li = this.parentNode
				var div = this.parentNode.parentNode.parentNode
				if (li.classList.contains('active')) {
					return false; //return false veut dire si le lien posséde la class active il ne se passe rien 
				}
				//on retire la class active de l'onglet actif 
				div.querySelector('.tabs .active').classList.remove('active')
				//j'ajoute la class active à l'onglet actuel
				li.classList.add('active')
				//on retire la class active sur le contenu actif ,
				div.querySelector('.tab-content.active').classList.remove('active')
				//j'ajoute la class active sur le contenu correspondant à mon clic
				//ds ctte div tu vas selectionner l'element qui as l'id href et tu vas lui ajouter la class active
				div.querySelector(this.getAttribute('href')).classList.add('active')
	
				


			})
			}

