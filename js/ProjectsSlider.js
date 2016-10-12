$(document).ready(function(){ 

	
	$( ".projectsSliderButton1" ).click(function() {
	
	
		$( ".projectsSlidingContainer" ).addClass( "projectsSlidingContainerSlide1" );
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide2" );
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide3" );
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide4" );
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide5" );
		
		$( ".projectsSliderButton" ).removeClass( "projectsSliderButtonSelected" );
		$( ".projectsSliderButton1" ).addClass( "projectsSliderButtonSelected" );

	});
	
	$( ".projectsSliderButton2" ).click(function() {
	
	
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide1" );
		$( ".projectsSlidingContainer" ).addClass( "projectsSlidingContainerSlide2" );
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide3" );
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide4" );
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide5" );
		
		$( ".projectsSliderButton" ).removeClass( "projectsSliderButtonSelected" );
		$( ".projectsSliderButton2" ).addClass( "projectsSliderButtonSelected" );

	});
	
	$( ".projectsSliderButton3" ).click(function() {
	
	
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide1" );
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide2" );
		$( ".projectsSlidingContainer" ).addClass( "projectsSlidingContainerSlide3" );
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide4" );
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide5" );
		
		$( ".projectsSliderButton" ).removeClass( "projectsSliderButtonSelected" );
		$( ".projectsSliderButton3" ).addClass( "projectsSliderButtonSelected" );

	});
	
	$( ".projectsSliderButton4" ).click(function() {
	
	
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide1" );
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide2" );
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide3" );
		$( ".projectsSlidingContainer" ).addClass( "projectsSlidingContainerSlide4" );
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide5" );
		
		$( ".projectsSliderButton" ).removeClass( "projectsSliderButtonSelected" );
		$( ".projectsSliderButton4" ).addClass( "projectsSliderButtonSelected" );

	});
	
	$( ".projectsSliderButton5" ).click(function() {
	
	
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide1" );
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide2" );
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide3" );
		$( ".projectsSlidingContainer" ).removeClass( "projectsSlidingContainerSlide4" );
		$( ".projectsSlidingContainer" ).addClass( "projectsSlidingContainerSlide5" );
		
		$( ".projectsSliderButton" ).removeClass( "projectsSliderButtonSelected" );
		$( ".projectsSliderButton5" ).addClass( "projectsSliderButtonSelected" );

	});

});

