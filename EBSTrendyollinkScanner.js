var syhmhz = new Array();
for (var i = 0; i < $x("//div[@class='p-card-chldrn-cntnr']/a").length; i++) 
{
  syhmhz.push($x("//div[@class='p-card-chldrn-cntnr']/a")[i].getAttribute('href'));
}
 for (var j = 0; j < syhmhz.length; j++) 
{
  document.write(syhmhz[j]+"<br>");
}
