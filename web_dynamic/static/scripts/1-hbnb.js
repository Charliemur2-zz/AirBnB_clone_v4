const $ = window.$;
const amenities = [];
$('INPUT.amenityCheckbox').click(function () {
    const amenityId = $(this).data('id');
       if (amenities.includes(amenityId)) {
	   const index = amenities.indexOf(amenityId);
	   if (index !== -1) {
	       amenities.splice(index, 1);
	   }
       } else {
	   amenities.push(amenityId);
       }
    console.log(amenities);
});
