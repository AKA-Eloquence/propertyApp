'use strict'
// litening for click on ancher tags
const propertyType = document.querySelectorAll('a');
const property = document.querySelectorAll('.second-slider');
const nearbyLocations = document.querySelectorAll('.nearby-slider');

for (let i = 0; i < propertyType.length; i++) {
    propertyType[i].addEventListener('click', function(){

        // Button Activation
        myClass.removeCla(propertyType,'active-property-type');
        this.classList.add('active-property-type');

        // changing slider
        const activePropertySlider = document.querySelectorAll('#'+this.innerText);
        // manipulating slider
        myClass.removeCla(property , 'active-slider');
        myClass.addCla(property , 'not-active-slider');
        // manipulating selected slider
        myClass.removeCla(activePropertySlider , 'not-active-slider');
        myClass.addCla(activePropertySlider , 'active-slider')
        // Changing Nearby Locations
        const activeNearbyLocation = document.querySelectorAll('.'+this.innerText);
        //  manipulating Nearby Locations
        myClass.removeCla(nearbyLocations , 'active-slider');
        myClass.addCla(nearbyLocations, 'not-active-slider');
        // manipulating selected slider
        myClass.removeCla(activeNearbyLocation , 'not-active-slider');
        myClass.addCla(activeNearbyLocation , 'active-slider');
    });
  };


  // class add and remove Object 

  const myClass = {
    addCla: function(ele , cla){
      for (let i = 0; i < ele.length; i++) {
        ele[i].classList.add(cla);
    };
    },
    removeCla: function(ele , cla){
      for (let i = 0; i < ele.length; i++) {
        ele[i].classList.remove(cla);
    };
    },
  };
