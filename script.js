function adder(){
	/// variabels
	//text inputs
	mt = document.getElementById('mt').value
	nc = document.getElementById('nc').value
	nm = document.getElementById('name').value
	pnm = document.getElementById('pname').value
	n_enf = document.getElementById('n_enf').value
	
	//select inputs
	i = document.getElementById('s1').options.selectedIndex
	t_a = document.getElementById('s1').options[i].text
	
	//radio inputs
	radios = document.getElementsByName('ec');
	length = radios.length
	radios_text_list = ["Célibataire","Marié","Divorcé"]
	for ( i=0; i<length; i++ ){
		if ( radios[i].checked ){
			i_ec = radios[i].value
			ec = radios_text_list[i_ec]
			break;
		}
	}
	
	///checker
	ok = true
	//matricule
	if ( (isNaN(mt)) || (mt.length != 10) ){
		ok = false
		t = ('Matricule : contain only number and a length of 10 nb');// return false;
		document.getElementById("mt_p").innerHTML = t
	}
	else{
		document.getElementById("mt_p").innerHTML = ""
	}
	
	//Ncin
	if ( (isNaN(nc)) || (nc.length != 8) || (nc[0] < 0 || nc[0] > 1 ) ){
		ok = false
		t = ('Ncin : contain only number and a length of 8 nb and it must start with 0 or 1');// return false;
		document.getElementById("nc_p").innerHTML = t
	}
	else{
		document.getElementById("nc_p").innerHTML = ""
	}
	
	//nom
	if ( nm == "" ){
		ok = false
		t = ("nom : can't be empty");// return false;
		document.getElementById("nom_p").innerHTML = t
	}
	else{
		document.getElementById("nom_p").innerHTML = ""
	}
	
	//prenom
	if ( pnm == "" ){
		ok = false
		t = ("prenom : can't be empty");// return false;
		document.getElementById("pnom_p").innerHTML = t
	}
	else{
		document.getElementById("pnom_p").innerHTML = ""
	}
	
	//nb enfant
	if ( i_ec == 0 ){
		if (n_enf != 0 || n_enf == ""){
			ok = false
			t = ("Nombre d'enfants assurés : it must be null '0' cz ur 'Célibataire'");// return false;
			document.getElementById("n_enf_p").innerHTML = t
		}
		else{
		document.getElementById("n_enf_p").innerHTML = ""
		}
	}
	
	if ( i_ec != 0 ){
		if ( (isNaN(n_enf)) || n_enf < 0 || n_enf == "" ){
			ok = false
			t = ("Nombre d'enfants assurés : it must be null '0' or a positve number'");// return false;
			document.getElementById("n_enf_p").innerHTML = t
		}
		else{
		document.getElementById("n_enf_p").innerHTML = ""
		}
	}
	
	///adding to the 2nd list
	i_l_a = document.getElementById('s2').options.length
	ch = mt+"/"+nc+"/"+nm+" "+pnm+"/"+ec+"/"+n_enf+"/"+t_a
	
	if (ok == true){
	document.getElementById('s2').options[i_l_a] = new Option(ch,i_l_a)
	
	//clearing after adding
	document.getElementById('mt').value = ""
	document.getElementById('nc').value = ""
	document.getElementById('name').value = ""
	document.getElementById('pname').value = ""
	document.getElementById('n_enf').value = ""
	}
	
}

function cleaner(){
	i = document.getElementById('s2').options.selectedIndex
	document.getElementById('s2').options[i] = null
}

