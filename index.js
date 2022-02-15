'use strict'
// litening for click on ancher tags
const propertyType = document.querySelectorAll('a');
const property = document.querySelectorAll('.second-slider');
const nearbyLocations = document.querySelectorAll('.nearby-slider');

for (let i = 0; i < propertyType.length; i++) {
    propertyType[i].addEventListener('click', function(){

        // Button Activation
        classRemove (propertyType,'active-property-type');
        this.classList.add('active-property-type');

        // changing slider
        const activePropertySlider = document.querySelectorAll('#'+this.innerText);
        // manipulating slider
        classRemove (property , 'active-slider');
        classAdd (property , 'not-active-slider');
        // manipulating selected slider
        classRemove (activePropertySlider , 'not-active-slider');
        classAdd (activePropertySlider , 'active-slider')
        // Changing Nearby Locations
        const activeNearbyLocation = document.querySelectorAll('.'+this.innerText);
        //  manipulating Nearby Locations
        classRemove (nearbyLocations , 'active-slider');
        classAdd (nearbyLocations, 'not-active-slider');
        // manipulating selected slider
        classRemove (activeNearbyLocation , 'not-active-slider');
        classAdd (activeNearbyLocation , 'active-slider');
        console.log(nearbyLocations);
    });
  };


//   ------class add function
  function classRemove (elements , classes) {
      for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove(classes);
      };
  };

//   --remove class function
  function classAdd (elements , classes) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(classes);
    };
  }
