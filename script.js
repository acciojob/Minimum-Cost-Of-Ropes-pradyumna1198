function calculateMinCost() {
  //your code here
	var input = document.getElementById("rope-lengths").value;

      // Split the input by comma and convert the values to integers
      var lengths = input.split(",").map(Number);

      // Sort the array of lengths in non-decreasing order
      lengths.sort(function(a, b) {
        return a - b;
      });

      // Initialize variables
      var cost = 0;
      var totalCost = 0;

      // Calculate the minimum cost
      for (var i = 0; i < lengths.length; i++) {
        cost = lengths[i] + lengths[i + 1];
        totalCost += cost;

        // Merge the two ropes into one
        lengths[i + 1] = cost;

        // Sort the array again after merging ropes
        lengths.sort(function(a, b) {
          return a - b;
        });
      }

      // Display the minimum cost in the result div
      document.getElementById("result").innerHTML = "Minimum Cost: " + totalCost;
    }
  
  
  
}  
