$().ready(function(){
	
	$(document).on('mouseenter','.high',function(){
		$('.'+$(this).attr('data-component')).addClass('active');
	}).on('mouseleave','.high',function(){
		$('.'+$(this).attr('data-component')).removeClass('active');
	});
	
/*	$(document).on('click','.find-coordinates',function(e){
		e.preventDefault();
		var button = $(this).attr('disabled','disabled').html('Buscando coordenadas');
		$.get(button.attr('href'),function(result){			
			result.spaces.forEach(function(space,index){
				var finder = new coordinatesFinder(space,result.text);
			});
			$('html, body').animate({ scrollTop: $('#parse-space').offset().top - 100 }, 'slow');
		},'json');
	});*/

	$('#buscar-coordenadas').click(function(e){
		$.get('/mia/processFiles/'+mia.clave);
	});
})

function get_center(points){
	var max = {x:points[0].x,y:points[0].y};
	var min = {x:points[0].x,y:points[0].y};
	points.forEach(function(point){
		if(point.x > max.x) max.x = point.x;
		if(point.x < min.x) min.x = point.x;
		if(point.y > max.y) max.y = point.y;
		if(point.y < min.y) min.y = point.y;
	});
	return {
		x: (max.x-min.x)/2 + min.x,
		y: (max.y-min.y)/2 + min.y,
	};
}
