
(function () {

  var margin = {top: 5, right: 40, bottom: 20, left: 500},
    width = 800 - margin.left - margin.right,
    height = 50 - margin.top - margin.bottom,
    chart = d3.bullet().width(width).height(height);
  
d3.csv("graph_FD.csv", function(data) {
    var data=data

    for (var i = 0; i < data.length; i++) {
      data[i].val_1 = data[i].val_1.split()
      data[i].val_2 = data[i].val_2.split()
      data[i].val_2.push("7000")
      data[i].mark_val = data[i].mark_val.split()

    }

    var svg = d3.select("body").selectAll("svg")
      .data(data)
      .enter().append("svg")
      .attr("class", "bullet")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .call(chart);

    var title = svg.append("g")
      .style("text-anchor", "end")
      .attr("transform", "translate(-6," + (height+15) / 2 + ")");

    title.append("text")
      .attr("class", "title")
      .text(function (d) { return d.Brand; });

    title.append("text")
      .attr("class", "subtitle")
      .attr("dy", "1em")
      .text(function (d) { return d.subtitle; });

    d3.selectAll('button').on('click', function () {
      console.log('clicked');
      svg.datum(randomize).call(chart.duration(1000));
    });

    function randomize(d) {
      if (!d.randomizer) d.randomizer = randomizer(d);
      d.val_2 = d.val_2.map(d.randomizer);
      d.mark_val = d.mark_val.map(d.randomizer);
      d.val_1 = d.val_1.map(d.randomizer);
      return d;
    }

    function randomizer(d) {
      var k = d3.max(d.val_2) * 0.2;
      return function (d) {
        return Math.max(0, d + k * (Math.random() - 0.5));
      };
    }

})
 
  
  }());
  