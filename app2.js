"use strict";
(function(){
	console.log("Bienvenue dans le fichier app.js");


	// Je teste que jQuery marche bien
	// Je récupère le texte de ma balise h1
	var valH1 = $("h1").text();
	console.log("Mon h1 est '" + valH1 + "'.");



	// Je vais tester la détection de click sur
	// le bouton 1 dont l'id est 'btn-1'
	/*
		Je ne vais rien inventer, il y a un exemple
		tout prêt sur
		http://api.jquery.com/click/
	*/
	var somme;
	var btn_total= [];
	var btn_result = null;
	var sub = null;
	var result = 0;
	var compteur_add = 0;
	var compteur_sub = 0;
	var compteur_multiply = 0;
	var compteur_divide = 0;




	$('#btn-0').click(function(){
		console.log('click sur bouton 0');
		var btn0 = document.getElementById("btn-0").value; 
		somme = btn0;
	  
	});

	$('#btn-1').click(function(){
		console.log('click sur bouton 1');
		var btn1 = document.getElementById("btn-1").value; 
		somme = btn1;
	
	});
	$('#btn-2').click(function(){
		console.log('click sur bouton 2');
		var btn2 = document.getElementById("btn-2").value; 
	    somme = btn2;
	    
	});

	$('#btn-3').click(function(){
		console.log('click sur bouton 3');
		var btn3 = document.getElementById("btn-3").value; 
	    somme = btn3;
	   
	});
		$('#btn-4').click(function(){
		console.log('click sur bouton 4');
		var btn4 = document.getElementById("btn-4").value; 
	    somme = btn4;;
	    

	});
	$('#btn-5').click(function(){
		console.log('click sur bouton 5');
		var btn5 = document.getElementById("btn-5").value; 
		somme = btn5;
	    
	});
	$('#btn-6').click(function(){
		console.log('click sur bouton 6');
		var btn6 = document.getElementById("btn-6").value; 
		somme = btn6;
	    
	});
	$('#btn-7').click(function(){
		console.log('click sur bouton 7');
		var btn7 = document.getElementById("btn-7").value; 
		somme = btn7;
	    
	});
	$('#btn-8').click(function(){
		console.log('click sur bouton 8');
		var btn8 = document.getElementById("btn-8").value; 
		somme = btn8;
	    
	});
	$('#btn-9').click(function(){
		console.log('click sur bouton 9');
		var btn9 = document.getElementById("btn-9").value; 
		somme = btn9;
	   
	});

	$('.btn').click(function(){
			if(somme === "0"){
				btn_total.push(somme);
				console.log(btn_total);
			}
			if(somme === "1"){
				btn_total.push(somme);
				console.log(btn_total);
			}

			if(somme === "2"){
				btn_total.push(somme);
				console.log(btn_total);
			}

			if(somme === "3"){
				btn_total.push(somme);
				console.log(btn_total);
			}
			if(somme === "4"){
				btn_total.push(somme);
				console.log(btn_total);
			}
			if(somme === "5"){
				btn_total.push(somme);
				console.log(btn_total);
			}
			if(somme === "6"){
				btn_total.push(somme);
				console.log(btn_total);
			}
			if(somme === "7"){
				btn_total.push(somme);
				console.log(btn_total);
			}
			if(somme === "8"){
				btn_total.push(somme);
				console.log(btn_total);
			}
			if(somme === "9"){
				btn_total.push(somme);
				console.log(btn_total);
			}
			
	});
	


	$('#divide').click(function(){
		var operation = document.getElementById('divide').value;
		for(var i = 0;i < btn_total.length;i++){
					
					btn_result = btn_result	+ btn_total[i];
		}
		divide(btn_result.slice(4));
	});
	$('#add').click(function(){
		var operation = document.getElementById('add').value;
		for(var i = 0;i < btn_total.length;i++){
			
			btn_result = btn_result	+ btn_total[i];
		}
		add(btn_result.slice(4));
	});

	$('#substract').click(function(){
		var operation = document.getElementById('substract').value;
		sub++;
		for(var i = 0;i < btn_total.length;i++){
					
					btn_result = btn_result	+ btn_total[i];
		}
		console.log(btn_result.slice(4));
		substract(btn_result.slice(4),sub);
	});
	$('#multiply').click(function(){
		var operation = document.getElementById('multiply').value;
		for(var i = 0;i < btn_total.length;i++){
					
					btn_result = btn_result	+ btn_total[i];
		}
		multiply(btn_result.slice(4));
	});



	function add(somme){
		compteur_add++;
		result = result + parseInt(somme,10);
		btn_total = [];
		btn_result = null;	
	}	



	function substract(somme,sub){		
		if(sub === 1){
			compteur_sub++;
			result = somme ;
			console.log(compteur_sub);
			btn_total = [];
			btn_result = null;

		}else{
			console.log(result);
			console.log(somme);
			result = result - somme;

			btn_total = [];
			btn_result = null;
	    }
		
	
	}	

	function multiply(somme){
		if(result === null){
			compteur_multiply++;
		    result = somme;
		    btn_total = [];
			btn_result = null;	
		}else{
			result = result * parseInt(somme,10);
			btn_total = [];
			btn_result = null;	
		}
	}	

	function divide(somme){
		if(result === null){
			compteur_divide++;
		    result = somme;
		    btn_total = [];
			btn_result = null;
		}else{
			
			if(somme === "0" ){
				result = 'On divise pas par 0, [insulte] !';
			}else{
				result = result / somme;
				btn_total = [];
				btn_result = null;
		    }
		}
		
	}	



	$('#egale').click(function(){
		
		 if(compteur_sub === 1 ){
		 	sub = 2;

			for(var i = 0;i < btn_total.length;i++){
				btn_result = btn_result	+ btn_total[i];
			}

			substract(btn_result.slice(4),sub);
			$('#result').html(result);

			result = null;
			compteur_sub = 0; 
			sub = 0;
		}else if(compteur_add === 1){
			
			for(var i = 0;i < btn_total.length;i++){
				btn_result = btn_result	+ btn_total[i];
			}

		    add(btn_result.slice(4));
			$('#result').html(result);

			result = null;
			compteur_add = 0; 
			sub = 0;

		}else if(compteur_multiply == 1){

			for(var i = 0;i < btn_total.length;i++){
				btn_result = btn_result	+ btn_total[i];
			}
			
			multiply(btn_result.slice(4));
			$('#result').html(result); 
			result = null;
			compteur_multiply = 0; 

		}else if(compteur_divide === 1){
			for(var i = 0;i < btn_total.length;i++){
				btn_result = btn_result	+ btn_total[i];
			}
			divide(btn_result.slice(4));
			$('#result').html(result);
			result = null;
			compteur_divide = 0; 
		}else{}

	});


})();