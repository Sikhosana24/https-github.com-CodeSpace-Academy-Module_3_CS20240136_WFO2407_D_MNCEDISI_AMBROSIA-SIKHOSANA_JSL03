function cookSteak(steakWeight, desiredDoneness) {
    let grillTemperature = 0;
    let steakTemperature = 0;
    
    // Step 1: Preheat the grill
    grillTemperature = 204; 
    
    // Step 2: Season the steak
    const seasoning = 'Salt and Pepper';
    console.log(`seasoning the steak with ${seasoning}.`)
    // Apply seasoning to both sides of the steak
    
    // Step 3: Cook the steak
    while (steakTemperature < desiredDoneness) {
      console.log(`Grilling... Current steak temperature: ${steakTemperature}°C`);
      // Grill the steak and measure internal temperature
      // Adjust grill temperature and cooking time based on steakWeight and desiredDoneness
      // Update steakTemperature
      steakTemperature += (grillTemperature / steakWeight) * 0.1;
      // If the steak is done, break out of the loop
      if (steakTemperature >= desiredDoneness) {
        break;
      }
    }
    
    // Step 4: Serve the steak
    if (steakTemperature >= desiredDoneness) {
      return 'Steak is ready to serve!';
    } else {
      return 'Steak needs more cooking.';
    }
  }
  
  // Usage example:
  const result = cookSteak(16, 63); // Cook a 16 oz steak to medium-rare (63°C)
  console.log(result);
  