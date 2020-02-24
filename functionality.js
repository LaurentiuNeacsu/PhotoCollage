window.onload = function () {
	$(function(){
		var canvas1 = document.getElementById('canvas1-stil1');
		var canvas2 = document.getElementById('canvas2-stil1');
		var canvas3 = document.getElementById('canvas1-stil2');
		var canvas4 = document.getElementById('canvas2-stil2');
		var canvasPrincipal = document.getElementById('canvas-principal');

		$('#btnBlur').on({
			'click': function(e){
				var sunet = document.getElementById('click-sound');
				sunet.play();
				sunet.currentTime = 0;
				var select = document.getElementById('select-effects');
				var selectedItem = select.options[select.selectedIndex].value;
				switch(selectedItem){
					case "1":
						var ctx = canvas1.getContext('2d');
						ctx.filter = 'blur(2px)';
						ctx.drawImage(canvas1, 0, 0);
						break;
					case "2":
						var ctx = canvas2.getContext('2d');
						ctx.filter = 'blur(2px)';
						ctx.drawImage(canvas2, 0, 0);
						break;
					case "3":
						var ctx = canvas3.getContext('2d');
						ctx.filter = 'blur(2px)';
						ctx.drawImage(canvas3, 0, 0);
						break;
					case "4":
						var ctx = canvas4.getContext('2d');
						ctx.filter = 'blur(2px)';
						ctx.drawImage(canvas4, 0, 0);
						break;
					default:
						alert("Selectati un canvas");
				}
			}
		})

		$('#btnGrayscale').on({
			'click': function (e) {
				var sunet = document.getElementById('click-sound');
				sunet.play();
				sunet.currentTime = 0;
				var select = document.getElementById('select-effects');
				var selectedItem = select.options[select.selectedIndex].value;
				switch (selectedItem) {
					case "1":
						var ctx = canvas1.getContext('2d');
						ctx.filter += 'grayscale(100%)';
						ctx.drawImage(canvas1, 0, 0);
						break;
					case "2":
						var ctx = canvas2.getContext('2d');
						ctx.filter = 'grayscale(100%)';
						ctx.drawImage(canvas2, 0, 0);
						break;
					case "3":
						var ctx = canvas3.getContext('2d');
						ctx.filter = 'grayscale(100%)';
						ctx.drawImage(canvas3, 0, 0);
						break;
					case "4":
						var ctx = canvas4.getContext('2d');
						ctx.filter = 'grayscale(100%)';
						ctx.drawImage(canvas4, 0, 0);
						break;
					default:
						alert("Selectati un canvas");
				}
			}
		})

		$('#btnSelectFundal').on({
			'click' : function(e){
				var sunet = document.getElementById('click-sound');
				sunet.play();
				sunet.currentTime = 0;
			},
			'change': function(e){
				var reader = new FileReader();
				reader.onload = function (event) {
					var img = new Image();
					var ctx = canvasPrincipal.getContext('2d');
					img.onload = function () {
						ctx.drawImage(img, 0, 0, canvasPrincipal.width, canvasPrincipal.height);
					}
					img.src = event.target.result;
				}
				reader.readAsDataURL(e.target.files[0]);
			}
		})

		$('#btnOn').on({
			'click': function(e){
				var sunet = document.getElementById('click-sound');
				sunet.muted = false;
			}
		})

		$('#btnOff').on({
			'click': function (e) {
				var sunet = document.getElementById('click-sound');
				sunet.muted = true;
			}
		})

		$('#btnStil1').on({
			'click': function(e){
				var sunet = document.getElementById('click-sound');
				sunet.play();
				sunet.currentTime = 0;
				canvas1.style.visibility = 'visible';
				canvas2.style.visibility = 'visible';

				canvas3.style.visibility = 'hidden';
				canvas4.style.visibility = 'hidden';
			}		
		})
		
		$('#btnStil2').on({
			'click': function (e) {
				var sunet = document.getElementById('click-sound');
				sunet.play();
				sunet.currentTime = 0;
				canvas1.style.visibility = 'hidden';
				canvas2.style.visibility = 'hidden';

				canvas3.style.visibility = 'visible';
				canvas4.style.visibility = 'visible';
			}
		})

		$('#btnDownload').on({
			'click': function(e){
				var sunet = document.getElementById('click-sound');
				sunet.play();
				sunet.currentTime = 0;
				var link = document.getElementById('btnDownload');
				var canvasForDL = document.createElement('canvas');
				var ctx = canvasForDL.getContext('2d');
				canvasForDL.style.backgroundColor = 'gray';
				canvasForDL.height = 600;
				canvasForDL.width = 600;
				canvasForDL.style.border = '2px';
				canvasForDL.style.borderColor = 'black';
				canvasForDL.style.borderStyle = 'solid';
				ctx.drawImage(canvasPrincipal,0 ,0);
				
				if(canvas1.style.visibility === 'visible' && canvas2.style.visibility === 'visible'){
					ctx.drawImage(canvas1, 320, 380);
					ctx.drawImage(canvas2, 70, 102);
				}
				else{
					ctx.drawImage(canvas3, 22, 50);
					ctx.drawImage(canvas4, 190, 380);
				}

				link.href = canvasForDL.toDataURL();
				link.download = "colaj.png";
			}
		})

		$('#canvas1-stil1').on({
			'dragover dragenter': function (e) {
				e.preventDefault();
				e.stopPropagation();
			},
			'drop': function (e) {
				var dataTransfer = e.originalEvent.dataTransfer;
				if (dataTransfer && dataTransfer.files.length) {
					e.preventDefault();
					e.stopPropagation();
					$.each(dataTransfer.files, function (i, file) {
						var reader = new FileReader();
						reader.onload = $.proxy(function (file, event) {
							var img = new Image();
							img.src = event.target.result;
							img.width = 200;
							img.height = 200;
							var ctx = canvas1.getContext('2d');
							img.onload = function () {
								ctx.drawImage(img, 0, 0, img.width, img.height);
							}		
						}, this, file);
						reader.readAsDataURL(file);			
					});
				}
			}
		})

		$('#canvas2-stil1').on({
			'dragover dragenter': function (e) {
				e.preventDefault();
				e.stopPropagation();
			},
			'drop': function (e) {
				var dataTransfer = e.originalEvent.dataTransfer;
				if (dataTransfer && dataTransfer.files.length) {
					e.preventDefault();
					e.stopPropagation();
					$.each(dataTransfer.files, function (i, file) {
						var reader = new FileReader();
						reader.onload = $.proxy(function (file, event) {
							var img = new Image();
							img.src = event.target.result;
							img.width = 200;
							img.height = 200;
							var ctx = canvas2.getContext('2d');
							img.onload = function () {
								ctx.drawImage(img, 0, 0, img.width, img.height);
							}
						}, this, file);
						reader.readAsDataURL(file);
					});
				}
			}
		})

		$('#canvas1-stil2').on({
			'dragover dragenter': function (e) {
				e.preventDefault();
				e.stopPropagation();
			},
			'drop': function (e) {
				var dataTransfer = e.originalEvent.dataTransfer;
				if (dataTransfer && dataTransfer.files.length) {
					e.preventDefault();
					e.stopPropagation();
					$.each(dataTransfer.files, function (i, file) {
						var reader = new FileReader();
						reader.onload = $.proxy(function (file, event) {
							var img = new Image();
							img.src = event.target.result;
							img.width = 150;
							img.height = 500;
							var ctx = canvas3.getContext('2d');
							img.onload = function () {
								ctx.drawImage(img, 0, 0, img.width, img.height);
							}
						}, this, file);
						reader.readAsDataURL(file);
					});
				}
			}
		})

		$('#canvas2-stil2').on({
			'dragover dragenter': function (e) {
				e.preventDefault();
				e.stopPropagation();
			},
			'drop': function (e) {
				var dataTransfer = e.originalEvent.dataTransfer;
				if (dataTransfer && dataTransfer.files.length) {
					e.preventDefault();
					e.stopPropagation();
					$.each(dataTransfer.files, function (i, file) {
						var reader = new FileReader();
						reader.onload = $.proxy(function (file, event) {
							var img = new Image();
							img.src = event.target.result;
							img.width = 400;
							img.height = 200;
							var ctx = canvas4.getContext('2d');
							img.onload = function () {
								ctx.drawImage(img, 0, 0, img.width, img.height);
							}
						}, this, file);
						reader.readAsDataURL(file);
					});
				}
			}
		})
	})
}